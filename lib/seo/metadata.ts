import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { hreflang, siteName, siteUrl } from "./site";

export type Href = Parameters<typeof getPathname>[0]["href"];

const suffix = ` | ${siteName}`;
const ogLocale = { es: "es_ES", ca: "ca_ES", fr: "fr_FR" } as const;

/** Absolute URL of a page in one language. */
export function absoluteUrl(href: Href, locale: Locale) {
  const path = getPathname({ locale, href });
  return `${siteUrl}${path === "/" ? "" : path}`;
}

/** Adds the brand to a title when the result stays within about 60 characters. */
function withBrand(title: string) {
  const bare = title.endsWith(suffix) ? title.slice(0, -suffix.length) : title;
  if (bare.includes(siteName)) return bare;
  return bare.length + suffix.length <= 60 ? bare + suffix : bare;
}

type Options = {
  title: string;
  description?: string;
  /** The page's address in a given language (slugs can differ per language). */
  href: (locale: Locale) => Href;
  /** Keeps the page out of search results (concept projects, legal drafts). */
  noindex?: boolean;
};

/** Title, description, canonical URL, hreflang alternates and Open Graph for a page. */
export async function buildMetadata({ title, description, href, noindex }: Options): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const url = absoluteUrl(href(locale), locale);
  const languages: Record<string, string> = { "x-default": absoluteUrl(href("es"), "es") };
  for (const other of routing.locales) {
    languages[hreflang[other]] = absoluteUrl(href(other), other);
  }
  const fullTitle = withBrand(title);

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      locale: ogLocale[locale],
      type: "website",
      // Set explicitly: a page that defines openGraph does not inherit the
      // image generated in app/[locale]/opengraph-image.tsx.
      images: [{ url: `${siteUrl}/${locale}/opengraph-image`, width: 1200, height: 630 }],
    },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}
