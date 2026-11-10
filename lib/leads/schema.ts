import { z } from "zod";
import { budgets, houseTypes, ownerStates, projectTypes, surfaces, timings } from "./options";

const optional = <T extends z.ZodType>(schema: T) =>
  z.preprocess((value) => (value === "" || value === null ? undefined : value), schema.optional());

// Error messages are codes; the form translates them (lead.errors.*).
export const leadSchema = z.object({
  name: z.string().trim().min(2, "required").max(120, "required"),
  email: z.string().trim().min(1, "required").pipe(z.email("email")),
  phone: z
    .string()
    .trim()
    .min(1, "required")
    .regex(/^\+?[0-9 ().-]{7,20}$/, "phone"),
  whatsapp: z.boolean(),
  town: optional(z.string().trim().max(80)),
  houseType: optional(z.enum(houseTypes)),
  surface: optional(z.enum(surfaces)),
  projectTypes: z.array(z.enum(projectTypes)),
  budget: optional(z.enum(budgets)),
  timing: optional(z.enum(timings)),
  owner: optional(z.enum(ownerStates)),
  rental: z.boolean(),
  message: optional(z.string().trim().max(4000)),
  consent: z.literal(true, "consent"),
  // Hidden context
  locale: z.enum(["es", "ca", "fr"]),
  pageUrl: optional(z.string().max(500)),
  utmSource: optional(z.string().max(200)),
  utmMedium: optional(z.string().max(200)),
  utmCampaign: optional(z.string().max(200)),
  utmTerm: optional(z.string().max(200)),
  utmContent: optional(z.string().max(200)),
  gclid: optional(z.string().max(200)),
});

export type Lead = z.infer<typeof leadSchema>;
export type LeadField = "name" | "email" | "phone" | "consent";
export type LeadErrorCode = "required" | "email" | "phone" | "consent";

export type LeadState = {
  status: "idle" | "success" | "error";
  /** Per-field problems, as codes. */
  errors?: Partial<Record<LeadField, LeadErrorCode>>;
  /** A problem that is not tied to one field. */
  formError?: "rate" | "send" | "captcha";
  /** What the visitor typed, to refill the form after an error. */
  values?: Record<string, string>;
};

/** Reads the browser's FormData into the shape the schema expects. */
export function readLeadForm(form: FormData) {
  const text = (key: string) => {
    const value = form.get(key);
    return typeof value === "string" ? value : "";
  };
  return {
    name: text("name"),
    email: text("email"),
    phone: text("phone"),
    whatsapp: form.get("whatsapp") === "on",
    town: text("town"),
    houseType: text("houseType"),
    surface: text("surface"),
    projectTypes: form.getAll("projectTypes").filter((v): v is string => typeof v === "string"),
    budget: text("budget"),
    timing: text("timing"),
    owner: text("owner"),
    rental: form.get("rental") === "on",
    message: text("message"),
    consent: form.get("consent") === "on",
    locale: text("locale"),
    pageUrl: text("pageUrl"),
    utmSource: text("utm_source"),
    utmMedium: text("utm_medium"),
    utmCampaign: text("utm_campaign"),
    utmTerm: text("utm_term"),
    utmContent: text("utm_content"),
    gclid: text("gclid"),
  };
}
