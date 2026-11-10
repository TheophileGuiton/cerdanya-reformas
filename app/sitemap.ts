import type { MetadataRoute } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { getPublishedArticles } from "@/lib/content/journal";
import { getRealProjects } from "@/lib/content/projects";
import { getServices } from "@/lib/content/services";
import { getTowns } from "@/lib/content/towns";
import type { TownHref } from "@/components/layout/nav";
import { absoluteUrl, type Href } from "@/lib/seo/metadata";
import { hreflang } from "@/lib/seo/site";

// Every indexable page in every language, with its translations. Concept
// projects, draft articles and the draft legal pages are left out on purpose.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: ((locale: Locale) => Href)[] = [
    () => "/",
    () => "/proyectos",
    () => "/servicios",
    () => "/metodo",
    () => "/nosotros",
    () => "/journal",
    () => "/contacto",
    ...getServices().map(
      (service) => (locale: Locale) =>
        ({ pathname: "/servicios/[slug]", params: { slug: service.slug[locale] } }) as Href,
    ),
    ...getTowns().map((town) => () => `/zonas/${town.slug}` as TownHref),
    ...getPublishedArticles().map(
      (article) => () => ({ pathname: "/journal/[slug]", params: { slug: article.slug } }) as Href,
    ),
    ...getRealProjects().map(
      (project) => () => ({ pathname: "/proyectos/[slug]", params: { slug: project.slug } }) as Href,
    ),
  ];

  return pages.flatMap((href) =>
    routing.locales.map((locale) => ({
      url: absoluteUrl(href(locale), locale),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((other) => [hreflang[other], absoluteUrl(href(other), other)]),
        ),
      },
    })),
  );
}
