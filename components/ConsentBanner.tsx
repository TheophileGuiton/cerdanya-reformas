"use client";

import { useTranslations } from "next-intl";
import { useSyncExternalStore } from "react";
import { Link } from "@/i18n/navigation";
import { readConsent, subscribeConsent, writeConsent } from "@/lib/analytics/consent";

const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;

// A bar at the bottom of the page, not a dialog: the site stays usable while
// it is showing. It only appears when analytics is configured and the visitor
// has not chosen yet.
export function ConsentBanner() {
  const t = useTranslations("consentBanner");
  const consent = useSyncExternalStore(subscribeConsent, readConsent, () => "denied" as const);
  if (!ga4Id || consent !== null) return null;

  return (
    <section
      aria-label={t("label")}
      className="on-dark fixed inset-x-0 bottom-0 z-50 border-t border-fleece bg-walnut text-lime"
    >
      <div className="wrap flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[60ch] text-small text-fleece">
          {t("text")}{" "}
          <Link href="/cookies" className="text-lime underline underline-offset-4">
            {t("more")}
          </Link>
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => writeConsent("denied")}
            className="h-11 rounded-sm border border-lime px-5 text-small font-semibold"
          >
            {t("reject")}
          </button>
          <button
            type="button"
            onClick={() => writeConsent("granted")}
            className="h-11 rounded-sm bg-lime px-5 text-small font-semibold text-walnut"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </section>
  );
}
