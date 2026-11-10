"use client";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Link, usePathname } from "@/i18n/navigation";
import { servicesData } from "@/content/services.data";
import { routing, type Locale } from "@/i18n/routing";

// ES · CA · FR, always visible. Each link points to the same page in the
// other language, using the localized pathname.
export function LanguageSwitcher({ onDark = false }: { onDark?: boolean }) {
  const t = useTranslations("lang");
  const active = useLocale();
  const pathname = usePathname();
  const params = useParams();

  // Service slugs are translated: find the same service in the target language.
  function paramsFor(locale: Locale) {
    if (pathname !== "/servicios/[slug]") return params;
    const service = servicesData.find((item) => item.slug[active] === params.slug);
    return service ? { ...params, slug: service.slug[locale] } : params;
  }

  return (
    <nav aria-label={t("label")} className="flex gap-0.5">
      {routing.locales.map((locale) => (
        <Link
          key={locale}
          // @ts-expect-error -- pathname and params always belong together here
          href={{ pathname, params: paramsFor(locale) }}
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
