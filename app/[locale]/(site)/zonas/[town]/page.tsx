import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import type { TownHref } from "@/components/layout/nav";
import { ContactBand } from "@/components/sections/ContactBand";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ServiceRows } from "@/components/sections/ServicesList";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getTown, getTownPage, getTownProject, getTowns } from "@/lib/content/towns";

type Props = PageProps<"/[locale]/zonas/[town]">;

export function generateStaticParams() {
  return getTowns().map((town) => ({ town: town.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { town: slug } = await params;
  if (!getTown(slug)) return {};
  const t = await getTranslations("townPage");
  const page = getTownPage(slug, (await getLocale()) as Locale);
  return { title: t("metaTitle", { title: page.h1 }), description: page.description };
}

export default async function TownPage({ params }: Props) {
  const { town: slug } = await params;
  const town = getTown(slug);
  if (!town) notFound();

  const t = await getTranslations("townPage");
  const locale = (await getLocale()) as Locale;
  const page = getTownPage(slug, locale);
  const project = getTownProject(slug);

  return (
    <>
      <article className="wrap pt-10 pb-section md:pt-16">
        <div className="grid items-end gap-5 md:grid-cols-[7fr_5fr] md:gap-18">
          <h1 className="font-display text-display-xl">{page.h1}</h1>
          <p className="max-w-[44ch] text-body-l text-bark">{page.intro}</p>
        </div>

        <section aria-labelledby="houses" className="mt-section">
          <h2 id="houses" className="mb-8 font-display text-display-l">
            {t("houses")}
          </h2>
          <ul className="grid gap-x-12 gap-y-8 md:grid-cols-3">
            {page.houses.map((house) => (
              <li key={house.title} className="border-t border-granite pt-5">
                <h3 className="font-serif text-title">{house.title}</h3>
                <p className="mt-2 text-bark">{house.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-section grid gap-x-18 gap-y-12 md:grid-cols-[5fr_7fr]">
          <section aria-labelledby="note">
            <h2 id="note" className="mb-5 font-display text-display-l">
              {t("note")}
            </h2>
            <p className="max-w-[44ch] text-bark">{page.note}</p>
          </section>
          {project ? (
            <section aria-labelledby="town-project" className="md:max-w-md md:justify-self-end">
              <h2 id="town-project" className="mb-5 font-display text-display-l">
                {t("project")}
              </h2>
              <ProjectCard project={project} heading="h3" />
            </section>
          ) : null}
        </div>

        <section aria-labelledby="town-services" className="mt-section">
          <h2 id="town-services" className="mb-8 font-display text-display-l">
            {t("services")}
          </h2>
          <ServiceRows heading="h3" />
        </section>

        <nav aria-labelledby="other-towns" className="mt-section border-t border-walnut pt-6">
          <h2 id="other-towns" className="mb-4 text-note font-medium text-bark">
            {t("otherTowns")}
          </h2>
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {getTowns()
              .filter((other) => other.slug !== slug)
              .map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/zonas/${other.slug}` as TownHref}
                    className="font-serif text-title no-underline hover:text-loden"
                  >
                    {other.name[locale]}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </article>
      <ContactBand />
    </>
  );
}
