"use client";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import type { ComponentProps } from "react";
import { servicesData } from "@/content/services.data";
import { Link, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

type Href = ComponentProps<typeof Link>["href"];

/**
 * The address of the current page in another language.
 *
 * The pathname can arrive either as a route template ("/servicios/[slug]") or
 * with the slug already filled in, depending on where the component renders,
 * so dynamic pages are recognised by their first segment. Service slugs are
 * translated; project and article slugs are the same in every language.
 */
function hrefFor(pathname: string, slug: string | undefined, locale: Locale): Href {
  const [, section, rest] = pathname.split("/");
  const value = rest && rest !== "[slug]" ? rest : slug;
  if (!rest || !value) return pathname as Href;

  if (section === "servicios") {
    const service = servicesData.find((item) => Object.values(item.slug).includes(value as never));
    return {
      pathname: "/servicios/[slug]",
      params: { slug: service ? service.slug[locale] : value },
    };
  }
  if (section === "proyectos") return { pathname: "/proyectos/[slug]", params: { slug: value } };
  if (section === "journal") return { pathname: "/journal/[slug]", params: { slug: value } };
  return pathname as Href;
}

// ES · CA · FR, always visible. Each link points to the same page in the
// other language, using the localized pathname.
export function LanguageSwitcher({ onDark = false }: { onDark?: boolean }) {
  const t = useTranslations("lang");
  const active = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : undefined;

  return (
    <nav aria-label={t("label")} className="flex gap-0.5">
      {routing.locales.map((locale) => (
        <Link
          key={locale}
          href={hrefFor(pathname, slug, locale)}
          locale={locale}
          hrefLang={locale}
          lang={locale}
          aria-label={t(locale)}
          aria-current={locale === active ? "true" : undefined}
          className={
            locale === active
              ? `px-2.5 py-3.5 text-note leading-none font-medium lg:py-2 ${onDark ? "bg-lime text-walnut" : "bg-walnut text-lime"}`
              : `px-2.5 py-3.5 text-note leading-none font-medium lg:py-2 ${onDark ? "text-fleece hover:text-lime" : "text-bark hover:text-walnut"}`
          }
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
