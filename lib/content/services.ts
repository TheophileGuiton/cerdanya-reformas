import { servicePages } from "@/content/service-pages";
import { services } from "@/content/services";
import type { Locale } from "@/i18n/routing";
import { getProjects } from "./projects";
import type { ProjectMeta, Service } from "./schemas";

export function getServices(): Service[] {
  return services;
}

/** Finds a service by the slug it has in the given language. */
export function getServiceBySlug(slug: string, locale: Locale): Service | undefined {
  return services.find((service) => service.slug[locale] === slug);
}

export function getServicePage(id: string, locale: Locale) {
  return servicePages[id][locale];
}

// Which project scopes illustrate each service.
const scopesByService: Record<string, ProjectMeta["scope"]> = {
  interiorismo: ["interiorismo"],
  "cocinas-y-banos": ["cocina-banos"],
  "reforma-integral": ["reforma-integral"],
  "casas-de-piedra": ["rehabilitacion"],
  wellness: ["wellness"],
  "confort-y-eficiencia": ["eficiencia"],
  "domotica-y-seguridad": ["llave-en-mano"],
  "llave-en-mano": ["llave-en-mano", "gestion-alquiler"],
};

/** Up to three projects whose scope matches the service. */
export function getRelatedProjects(serviceId: string): ProjectMeta[] {
  const scopes = scopesByService[serviceId] ?? [];
  return getProjects()
    .filter((project) => project.scope.some((scope) => scopes.includes(scope)))
    .slice(0, 3);
}
