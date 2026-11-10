import { getLocale, getTranslations } from "next-intl/server";
import { ProjectImage } from "@/components/ProjectImage";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { arrangeImages } from "@/lib/content/projects";
import type { ProjectMeta } from "@/lib/content/schemas";

type Props = { project: ProjectMeta; tone?: 0 | 1 | 2 };

export async function ProjectCard({ project, tone = 0 }: Props) {
  const t = await getTranslations("image");
  const locale = (await getLocale()) as Locale;
  const { lead } = arrangeImages(project);

  return (
    <Link
      href={{ pathname: "/proyectos/[slug]", params: { slug: project.slug } }}
      className="group block no-underline"
    >
      <div className="overflow-hidden">
        <ProjectImage
          slug={project.slug}
          name={lead.name}
          alt={lead.alt[locale]}
          tone={tone}
          sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, calc(100vw - 2.5rem)"
          className="aspect-[4/5] w-full transition-transform duration-(--dur-base) ease-out group-hover:scale-[1.03]"
        />
      </div>
      <h2 className="mt-4 font-display text-display-m">{project.title[locale]}</h2>
      <p className="mt-1 text-small text-bark">
        {project.town.name}, {project.year}
        {project.isConcept ? `. ${t("concept")}` : ""}
      </p>
      <p className="mt-1 text-small text-bark">{project.summary[locale]}</p>
    </Link>
  );
}
