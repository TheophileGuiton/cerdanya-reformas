type EventName = "generate_lead" | "whatsapp_click";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const adsLeadLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL;

// Sends an event only when analytics has been loaded, which only happens
// after the visitor accepts (see components/Analytics.tsx).
export function trackEvent(name: EventName, params: Record<string, string> = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
  if (name === "generate_lead" && adsId && adsLeadLabel) {
    window.gtag("event", "conversion", { send_to: `${adsId}/${adsLeadLabel}` });
  }
}
