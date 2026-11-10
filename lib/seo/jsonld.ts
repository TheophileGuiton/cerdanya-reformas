import { towns } from "@/content/towns";
import type { Locale } from "@/i18n/routing";
import type { ProjectMeta, Service, ServicePage } from "@/lib/content/schemas";
import { absoluteUrl, type Href } from "./metadata";
import { parentName, parentUrl, phone, siteName, siteUrl } from "./site";

const businessId = `${siteUrl}/#business`;

/** The business itself. Address and email are added once they are confirmed. */
export function businessJsonLd(locale: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "HomeAndConstructionBusiness"],
    "@id": businessId,
    name: siteName,
    url: absoluteUrl("/", locale),
    description,
    telephone: phone,
    parentOrganization: { "@type": "Organization", name: parentName, url: parentUrl },
    areaServed: towns.flatMap((town) =>
      town.municipalities.map((name) => ({
        "@type": "City",
        name,
        address: { "@type": "PostalAddress", addressCountry: town.country },
      })),
    ),
    knowsLanguage: ["es", "ca", "fr"],
  };
}

export function breadcrumbJsonLd(items: { name: string; href: Href }[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href, locale),
    })),
  };
}

export function serviceJsonLd(service: Service, page: ServicePage, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title[locale],
    description: page.description,
    url: absoluteUrl({ pathname: "/servicios/[slug]", params: { slug: service.slug[locale] } }, locale),
    provider: { "@id": businessId },
    areaServed: towns.flatMap((town) => town.municipalities),
  };
}

/** Only for pages where the questions are visible as written. */
export function faqJsonLd(faq: ServicePage["faq"]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** Real projects only. Concept projects must never be described as work carried out. */
export function projectJsonLd(project: ProjectMeta, locale: Locale) {
  if (project.isConcept) return null;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title[locale],
    description: project.summary[locale],
    url: absoluteUrl({ pathname: "/proyectos/[slug]", params: { slug: project.slug } }, locale),
    creator: { "@id": businessId },
    locationCreated: {
      "@type": "Place",
      name: project.town.name,
      address: { "@type": "PostalAddress", addressCountry: project.town.country },
    },
    dateCreated: String(project.year),
  };
}
