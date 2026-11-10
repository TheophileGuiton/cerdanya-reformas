import type { routing } from "@/i18n/routing";

type Pathname = keyof typeof routing.pathnames;

/** Main navigation, in DESIGN.md order. "Zonas" jumps to the town list in the footer. */
export const navItems = [
  { key: "projects", href: "/proyectos" },
  { key: "services", href: "/servicios" },
  { key: "method", href: "/metodo" },
  { key: "zones", href: "#zonas" },
  { key: "journal", href: "/journal" },
  { key: "contact", href: "/contacto" },
] as const satisfies readonly { key: string; href: Pathname | `#${string}` }[];

export type TownHref = Extract<Pathname, `/zonas/${string}`>;
