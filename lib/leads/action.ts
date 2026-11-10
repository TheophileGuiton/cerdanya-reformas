"use server";

import { headers } from "next/headers";
import { sendLeadEmail } from "./email";
import { isRateLimited } from "./rate-limit";
import { leadSchema, readLeadForm, type LeadField, type LeadErrorCode, type LeadState } from "./schema";
import { pushLeadToWebhook } from "./webhook";

const fieldNames: LeadField[] = ["name", "email", "phone", "consent"];

async function passesTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // not configured: honeypot and rate limit still apply
  if (!token) return false;
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
      signal: AbortSignal.timeout(5000),
    });
    const result = (await response.json()) as { success?: boolean };
    return result.success === true;
  } catch {
    return false;
  }
}

export async function submitLead(_previous: LeadState, form: FormData): Promise<LeadState> {
  const raw = readLeadForm(form);
  const values: Record<string, string> = {
    name: raw.name, email: raw.email, phone: raw.phone, town: raw.town, houseType: raw.houseType,
    surface: raw.surface, budget: raw.budget, timing: raw.timing, owner: raw.owner, message: raw.message,
    projectTypes: raw.projectTypes.join(","), whatsapp: raw.whatsapp ? "on" : "", rental: raw.rental ? "on" : "",
  };

  // Honeypot: a filled "company" field means a bot. Answer as if it worked.
  if (form.get("company")) return { status: "success" };

  const requestHeaders = await headers();
  const ip = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) return { status: "error", formError: "rate", values };

  const parsed = leadSchema.safeParse(raw);
  if (!parsed.success) {
    const errors: Partial<Record<LeadField, LeadErrorCode>> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as LeadField;
      if (fieldNames.includes(field) && !errors[field]) {
        errors[field] = issue.message as LeadErrorCode;
      }
    }
    return { status: "error", errors, values };
  }

  const token = form.get("cf-turnstile-response");
  if (!(await passesTurnstile(typeof token === "string" ? token : "", ip))) {
    return { status: "error", formError: "captcha", values };
  }

  if (!(await sendLeadEmail(parsed.data))) return { status: "error", formError: "send", values };
  await pushLeadToWebhook(parsed.data);
  return { status: "success" };
}
