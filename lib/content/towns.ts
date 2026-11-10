import { townPages } from "@/content/town-pages";
import { towns } from "@/content/towns";
import type { Locale } from "@/i18n/routing";
import { getProject } from "./projects";
import type { Town } from "./schemas";

export function getTowns(): Town[] {
  return towns;
}

export function getTown(slug: string): Town | undefined {
  return towns.find((town) => town.slug === slug);
}

export function getTownPage(slug: string, locale: Locale) {
  return townPages[slug][locale];
}

// The concept project located in each landing's area, where there is one.
const projectByTown: Record<string, string> = {
  puigcerda: "atic-llac-puigcerda",
  alp: "casa-pairal-alp",
  "bolvir-fontanals": "xalet-fontanals",
  llivia: "xalet-llivia-wellness",
  "bellver-de-cerdanya": "casa-pati-bellver",
  "font-romeu-bolquere": "chalet-font-romeu",
};

export function getTownProject(slug: string) {
  const projectSlug = projectByTown[slug];
  return projectSlug ? getProject(projectSlug) : undefined;
}
