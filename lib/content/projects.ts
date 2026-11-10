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

const ratioClass = {
  "16:9": "aspect-video",
  "4:5": "aspect-[4/5]",
  "3:2": "aspect-[3/2]",
  "1:1": "aspect-square",
} as const;

/** Tailwind aspect-ratio class for a project image. */
export function aspectOf(image: ProjectMeta["images"][number]) {
  return ratioClass[image.ratio];
}

/**
 * How a project's images are used on the site. Interiors lead: the first room
 * opens the project and the exterior closes it (DESIGN.md → Photography).
 */
export function arrangeImages(project: ProjectMeta) {
  const rooms = project.images.filter((image) => image.kind === "room");
  const exterior = project.images.find((image) => image.kind === "hero");
  const lead = rooms[0] ?? exterior ?? project.images[0];
  return {
    lead,
    gallery: [
      ...rooms.slice(1),
      ...project.images.filter((image) => image.kind === "detail"),
    ],
    before: project.images.filter((image) => image.kind === "before"),
    closing: exterior && exterior !== lead ? exterior : undefined,
  };
}

export function getNextProject(slug: string): ProjectMeta {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
