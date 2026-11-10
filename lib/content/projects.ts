import type { ComponentType } from "react";
import { projects } from "@/content/projects";
import type { Locale } from "@/i18n/routing";
import type { ProjectMeta } from "./schemas";

export function getProjects(): ProjectMeta[] {
  return projects;
}

export function getProject(slug: string): ProjectMeta | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Projects that may appear in the sitemap and in CreativeWork JSON-LD. */
export function getRealProjects(): ProjectMeta[] {
  return projects.filter((project) => !project.isConcept);
}

/** The case-study text of one project in one language, as an MDX component. */
export async function getProjectBody(
  slug: string,
  locale: Locale,
): Promise<ComponentType> {
  const mdx = await import(`@/content/projects/${slug}/${locale}.mdx`);
  return mdx.default;
}
