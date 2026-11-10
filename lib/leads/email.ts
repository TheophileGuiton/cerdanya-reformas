import { Resend } from "resend";
import es from "@/messages/es.json";
import type { Lead } from "./schema";

const labels = es.lead;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** The lead as label/value rows, in Spanish (the team's working language). */
function rows(lead: Lead): [string, string][] {
  const o = labels.options;
  const all: [string, string | undefined][] = [
    [labels.fields.name, lead.name],
    [labels.fields.email, lead.email],
    [labels.fields.phone, `${lead.phone}${lead.whatsapp ? ` (${labels.fields.whatsapp})` : ""}`],
    [labels.fields.town, lead.town],
    [labels.fields.houseType, lead.houseType && o.houseType[lead.houseType]],
    [labels.fields.surface, lead.surface && o.surface[lead.surface]],
    [labels.fields.projectType, lead.projectTypes.map((type) => o.projectType[type]).join(", ")],
    [labels.fields.budget, lead.budget && o.budget[lead.budget]],
    [labels.fields.timing, lead.timing && o.timing[lead.timing]],
    [labels.fields.owner, lead.owner && o.owner[lead.owner]],
    [labels.fields.rental, lead.rental ? "Sí" : undefined],
    [labels.fields.message, lead.message],
    ["Idioma", lead.locale],
    ["Página", lead.pageUrl],
    ["UTM", [lead.utmSource, lead.utmMedium, lead.utmCampaign, lead.utmTerm, lead.utmContent].filter(Boolean).join(" / ")],
    ["gclid", lead.gclid],
  ];
  return all.filter((row): row is [string, string] => Boolean(row[1]));
}

export function buildLeadEmail(lead: Lead) {
  const data = rows(lead);
  const subject = `Nueva solicitud web: ${lead.name}${lead.town ? ` (${lead.town})` : ""}`;
  const text = data.map(([label, value]) => `${label}: ${value}`).join("\n");
  const html = `<!doctype html><html lang="es"><body style="margin:0;background:#EBE5D9;font-family:Arial,Helvetica,sans-serif;color:#2E2520">
<div style="max-width:600px;margin:0 auto;padding:32px 24px">
<p style="font-family:Georgia,serif;font-size:22px;margin:0 0 4px">Cerdanya Reformes</p>
<p style="font-size:13px;color:#5A4E44;margin:0 0 24px">Nueva solicitud desde la web</p>
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;border-top:1px solid #2E2520">
${data
  .map(
    ([label, value]) =>
      `<tr><td style="padding:10px 16px 10px 0;border-bottom:1px solid #9C968B;font-size:13px;color:#5A4E44;vertical-align:top;width:38%">${escapeHtml(label)}</td><td style="padding:10px 0;border-bottom:1px solid #9C968B;font-size:15px;line-height:1.5;vertical-align:top">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`,
  )
  .join("\n")}
</table>
<p style="font-size:13px;color:#5A4E44;margin:24px 0 0">Responda a este correo para escribir directamente a ${escapeHtml(lead.name)}.</p>
</div></body></html>`;
  return { subject, text, html };
}

/** Sends the lead to the team. Returns false when the email could not be sent. */
export async function sendLeadEmail(lead: Lead): Promise<boolean> {
  const email = buildLeadEmail(lead);

  // Dry run: nothing leaves the server. Used for local checks and previews.
  if (process.env.LEAD_DRY_RUN === "true") {
    console.info("[lead dry run]", JSON.stringify(email));
    return true;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("[lead] RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is missing");
    return false;
  }

  const { error } = await new Resend(apiKey).emails.send({
    from: `Cerdanya Reformes <${from}>`,
    to,
    replyTo: lead.email,
    subject: email.subject,
    html: email.html,
    text: email.text,
  });
  if (error) {
    console.error("[lead] email failed", error.name, error.statusCode);
    return false;
  }
  return true;
}
