import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import { ContactBand } from "@/components/sections/ContactBand";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ProjectFilter } from "@/components/sections/ProjectFilter";
import { getProjects } from "@/lib/content/projects";
import { projectTypes } from "@/lib/content/schemas";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("projects.index");
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    href: () => "/proyectos",
  });
}

export default async function ProjectsPage() {
  const t = await getTranslations("projects");
  const projects = getProjects();

  const items = projects.map((project, index) => ({
    slug: project.slug,
    type: project.type,
    card: <ProjectCard project={project} tone={(index % 3) as 0 | 1 | 2} />,
  }));
  const options = projectTypes
    .filter((type) => projects.some((project) => project.type === type))
    .map((type) => ({ type, label: t(`types.${type}`) }));

  return (
    <>
      <div className="wrap pt-10 pb-section md:pt-16">
        <div className="mb-12 grid items-end gap-5 md:mb-16 md:grid-cols-[7fr_5fr] md:gap-18">
          <h1 className="font-display text-display-xl">{t("index.title")}</h1>
          <p className="max-w-[44ch] text-bark">{t("index.intro")}</p>
        </div>
        <Suspense
          fallback={
            <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <li key={item.slug}>{item.card}</li>
              ))}
            </ul>
          }
        >
          <ProjectFilter
            items={items}
            options={options}
            label={t("filter.label")}
            allLabel={t("filter.all")}
          />
        </Suspense>
      </div>
      <ContactBand />
    </>
  );
}
