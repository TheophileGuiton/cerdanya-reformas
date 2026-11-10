import type { Lead } from "./schema";

/** Pushes the lead to a sheet or CRM when LEAD_WEBHOOK_URL is set. Never blocks the form. */
export async function pushLeadToWebhook(lead: Lead): Promise<void> {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url || process.env.LEAD_DRY_RUN === "true") return;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...lead, receivedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) console.error("[lead] webhook answered", response.status);
  } catch (error) {
    console.error("[lead] webhook failed", error instanceof Error ? error.message : error);
  }
}
