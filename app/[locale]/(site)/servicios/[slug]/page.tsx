import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo/jsonld";
import { ContactBand } from "@/components/sections/ContactBand";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ServiceRows } from "@/components/sections/ServicesList";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import {
  getRelatedProjects,
  getServiceBySlug,
  getServicePage,
  getServices,
} from "@/lib/content/services";

type Props = PageProps<"/[locale]/servicios/[slug]">;

// Slugs are translated, so each language gets its own list.
export function generateStaticParams({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  return getServices().map((service) => ({ slug: service.slug[locale] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const locale = (await getLocale()) as Locale;
  const service = getServiceBySlug(slug, locale);
  if (!service) return {};
  const t = await getTranslations("servicesPage");
  const page = getServicePage(service.id, locale);
  return buildMetadata({
    title: t("metaTitle", { title: page.h1 }),
    description: page.description,
    href: (l) => ({ pathname: "/servicios/[slug]", params: { slug: service.slug[l] } }),
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const locale = (await getLocale()) as Locale;
  const service = getServiceBySlug(slug, locale);
  if (!service) notFound();

  const t = await getTranslations("servicesPage");
  const page = getServicePage(service.id, locale);
  const related = getRelatedProjects(service.id);

  return (
    <>
      <JsonLd data={serviceJsonLd(service, page, locale)} />
      <JsonLd data={page.faq.length > 0 ? faqJsonLd(page.faq) : null} />
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: "Cerdanya Reformes", href: "/" },
            { name: t("back"), href: "/servicios" },
            { name: service.title[locale], href: { pathname: "/servicios/[slug]", params: { slug } } },
          ],
          locale,
        )}
      />
      <article className="wrap pt-8 pb-section md:pt-12">
        <p className="mb-8 text-small">
          <Link href="/servicios" className="text-bark underline underline-offset-4">
            {t("back")}
          </Link>
        </p>
        <div className="grid items-end gap-5 md:grid-cols-[7fr_5fr] md:gap-18">
          <h1 className="font-display text-display-xl">{page.h1}</h1>
          <p className="max-w-[44ch] text-body-l text-bark">{page.intro}</p>
        </div>

        <section aria-labelledby="includes" className="mt-section">
          <h2 id="includes" className="mb-8 font-display text-display-l">
            {t("includes")}
          </h2>
          <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {page.includes.map((item) => (
              <li key={item.title} className="border-t border-granite pt-5">
                <h3 className="font-serif text-title">{item.title}</h3>
                <p className="mt-2 max-w-[48ch] text-bark">{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="approach"
          className="mt-section grid gap-x-18 gap-y-5 md:grid-cols-[5fr_7fr]"
        >
          <h2 id="approach" className="font-display text-display-l">
            {t("approach")}
          </h2>
          <p className="max-w-[60ch] text-body-l text-bark">{page.approach}</p>
        </section>

        {page.faq.length > 0 ? (
          <section
            aria-labelledby="faq"
            className="mt-section grid gap-x-18 gap-y-5 md:grid-cols-[5fr_7fr]"
          >
            <h2 id="faq" className="font-display text-display-l">
              {t("faq")}
            </h2>
            <dl className="border-t border-granite">
              {page.faq.map((item) => (
                <div key={item.q} className="border-b border-granite py-5">
                  <dt className="font-serif text-title">{item.q}</dt>
                  <dd className="mt-2 max-w-[60ch] text-bark">{item.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        {related.length > 0 ? (
          <section aria-labelledby="related" className="mt-section">
            <h2 id="related" className="mb-8 font-display text-display-l">
              {t("related")}
            </h2>
            <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((project, index) => (
                <li key={project.slug}>
                  <ProjectCard project={project} tone={(index % 3) as 0 | 1 | 2} heading="h3" />
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section aria-labelledby="others" className="mt-section">
          <h2 id="others" className="mb-8 font-display text-display-l">
            {t("others")}
          </h2>
          <ServiceRows heading="h3" exclude={service.id} />
        </section>
      </article>
      <ContactBand />
    </>
  );
}
