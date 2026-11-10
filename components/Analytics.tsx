"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";
import { readConsent, subscribeConsent } from "@/lib/analytics/consent";

const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

// GA4 and Google Ads through Consent Mode v2. Nothing is requested from
// Google until the visitor has accepted.
export function Analytics() {
  const consent = useSyncExternalStore(subscribeConsent, readConsent, () => null);
  if (!ga4Id || consent !== "granted") return null;

  return (
    <>
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied' });
gtag('consent', 'update', { ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted', analytics_storage: 'granted' });
gtag('js', new Date());
gtag('config', '${ga4Id}');${adsId ? `\ngtag('config', '${adsId}');` : ""}`}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
        strategy="afterInteractive"
      />
    </>
  );
}
