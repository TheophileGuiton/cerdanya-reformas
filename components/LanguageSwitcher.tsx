"use client";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

// ES · CA · FR, always visible. Each link points to the same page in the
// other language, using the localized pathname.
export function LanguageSwitcher() {
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
              ? "bg-walnut px-2.5 py-2 text-note leading-none font-medium text-lime"
              : "px-2.5 py-2 text-note leading-none font-medium text-bark hover:text-walnut"
          }
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
