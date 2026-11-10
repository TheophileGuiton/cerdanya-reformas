"use client";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

// ES · CA · FR, always visible. Each link points to the same page in the
// other language, using the localized pathname.
export function LanguageSwitcher({ onDark = false }: { onDark?: boolean }) {
  const t = useTranslations("lang");
  const active = useLocale();
  const pathname = usePathname();
  const params = useParams();

  return (
    <nav aria-label={t("label")} className="flex gap-0.5">
      {routing.locales.map((locale) => (
        <Link
          key={locale}
          // @ts-expect-error -- pathname and params always belong together here
          href={{ pathname, params }}
          locale={locale}
          hrefLang={locale}
          lang={locale}
          aria-label={t(locale)}
          aria-current={locale === active ? "true" : undefined}
          className={
            locale === active
              ? `px-2.5 py-3.5 text-note lg:py-2 leading-none font-medium ${onDark ? "bg-lime text-walnut" : "bg-walnut text-lime"}`
              : `px-2.5 py-3.5 text-note lg:py-2 leading-none font-medium ${onDark ? "text-fleece hover:text-lime" : "text-bark hover:text-walnut"}`
          }
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
