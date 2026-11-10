import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { ProjectImage } from "@/components/ProjectImage";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { ContactBand } from "@/components/sections/ContactBand";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import {
  arrangeImages,
  aspectOf,
  getNextProject,
  getProject,
  getProjectBody,
  getProjects,
} from "@/lib/content/projects";

type Props = PageProps<"/[locale]/proyectos/[slug]">;

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const t = await getTranslations("projects");
  const locale = (await getLocale()) as Locale;
  return {
    title: t("metaTitle", { title: project.title[locale], town: project.town.name }),
    description: project.summary[locale],
    // Fictional placeholder projects stay out of search results.
    robots: project.isConcept ? { index: false, follow: true } : undefined,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const t = await getTranslations("projects");
  const locale = (await getLocale()) as Locale;
  const Body = await getProjectBody(project.slug, locale);
  const { lead, gallery, before, closing } = arrangeImages(project);
  const next = getNextProject(project.slug);
  const fullWidth = "(min-width: 1440px) 1328px, calc(100vw - 2 * var(--spacing-margin))";

  const facts = [
    { label: t("facts.town"), value: project.town.name },
    {
      label: t("facts.surface"),
      value: `${project.surfaceM2} m²${project.outdoorM2 ? ` + ${project.outdoorM2} m²` : ""}`,
    },
    { label: t("facts.duration"), value: t("months", { count: project.durationMonths }) },
    { label: t("facts.scope"), value: project.scope.map((s) => t(`scopes.${s}`)).join(", ") },
  ];

  return (
    <>
      <article className="wrap pt-8 pb-section md:pt-12">
        <p className="mb-8 text-small">
          <Link href="/proyectos" className="text-bark underline underline-offset-4">
            {t("back")}
          </Link>
        </p>
        <div className="mb-10 grid items-end gap-5 md:mb-12 md:grid-cols-[7fr_5fr] md:gap-18">
          <h1 className="font-display text-display-xl">{project.title[locale]}</h1>
          <div className="max-w-[44ch]">
            <p className="text-body-l text-bark">{project.summary[locale]}</p>
            {project.isConcept ? (
              <p className="mt-4 border-l border-loden pl-4 text-small text-bark">
                {t("conceptNote")}
              </p>
            ) : null}
          </div>
        </div>

        <ProjectImage
          slug={project.slug}
          name={lead.name}
          alt={lead.alt[locale]}
          priority
          sizes={fullWidth}
          className="aspect-[4/3] max-h-[72svh] w-full md:aspect-[21/10]"
        />

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-granite py-6 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-note font-medium text-bark">{fact.label}</dt>
              <dd className="mt-1 font-serif text-title tabular-nums">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-4 grid gap-x-18 gap-y-10 md:grid-cols-[7fr_5fr]">
          <div>
            <Body />
          </div>
          <aside className="md:pt-16">
            <h2 className="mb-4 font-display text-display-m">{t("materials")}</h2>
            <ul className="border-t border-granite">
              {project.materials.map((material) => (
                <li key={material.es} className="border-b border-granite py-3 font-serif text-title">
                  {material[locale]}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {gallery.length > 0 ? (
          <ul className="mt-16 grid items-end gap-6 sm:grid-cols-2">
            {gallery.map((image, index) => (
              <li key={image.name}>
                <ProjectImage
                  slug={project.slug}
                  name={image.name}
                  alt={image.alt[locale]}
                  tone={((index + 1) % 3) as 0 | 1 | 2}
                  sizes="(min-width: 640px) 46vw, calc(100vw - 2.5rem)"
                  className={`${aspectOf(image)} w-full`}
                />
                <p className="pt-2.5 text-note font-medium text-bark">{image.alt[locale]}</p>
              </li>
            ))}
          </ul>
        ) : null}

        {before.length > 0 ? (
          <section aria-labelledby="before-after" className="mt-section">
            <h2 id="before-after" className="mb-8 font-display text-display-l">
              {t("beforeAfter.title")}
            </h2>
            <BeforeAfter
              label={t("beforeAfter.slider")}
              beforeLabel={t("beforeAfter.before")}
              afterLabel={t("beforeAfter.after")}
              before={
                <ProjectImage
                  slug={project.slug}
                  name={before[0].name}
                  alt={before[0].alt[locale]}
                  tone={1}
                  sizes={fullWidth}
                  className="size-full"
                />
              }
              after={
                <ProjectImage
                  slug={project.slug}
                  name={lead.name}
                  alt={lead.alt[locale]}
                  sizes={fullWidth}
                  className="size-full"
                />
              }
            />
          </section>
        ) : null}

        {closing ? (
          <figure className="mt-section">
            <ProjectImage
              slug={project.slug}
              name={closing.name}
              alt={closing.alt[locale]}
              tone={2}
              sizes={fullWidth}
              className="aspect-video w-full"
            />
            <figcaption className="pt-2.5 text-note font-medium text-bark">
              {closing.alt[locale]}
            </figcaption>
          </figure>
        ) : null}

        <p className="mt-section border-t border-walnut pt-6">
          <span className="block text-note font-medium text-bark">{t("next")}</span>
          <Link
            href={{ pathname: "/proyectos/[slug]", params: { slug: next.slug } }}
            className="mt-2 inline-block font-display text-display-l no-underline hover:text-loden"
          >
            {next.title[locale]}
          </Link>
        </p>
      </article>
      <ContactBand />
    </>
  );
}
