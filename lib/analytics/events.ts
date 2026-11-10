type EventName = "generate_lead" | "whatsapp_click";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

// Pushes an event only when the analytics layer exists, which is only after
// the visitor has given consent (Consent Mode v2, wired in the lead-form phase).
export function trackEvent(name: EventName, params: Record<string, string> = {}) {
  if (typeof window === "undefined" || !window.dataLayer) return;
  window.dataLayer.push({ event: name, ...params });
}
