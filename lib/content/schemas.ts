import { z } from "zod";

/** A string that must exist in all three site languages. */
export const localized = z.object({
  es: z.string().min(1),
  ca: z.string().min(1),
  fr: z.string().min(1),
});

export const projectTypes = ["chalet", "casa-de-piedra", "borda", "atico"] as const;

export const scopes = [
  "reforma-integral",
  "rehabilitacion",
  "interiorismo",
  "cocina-banos",
  "wellness",
  "eficiencia",
  "llave-en-mano",
  "gestion-alquiler",
] as const;

export const imageRatios = ["16:9", "4:5", "3:2", "1:1"] as const;

const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

export const projectImageSchema = z.object({
  /** File name without extension, in public/images/projects/{slug}/. */
  name: slug,
  ratio: z.enum(imageRatios),
  kind: z.enum(["hero", "cover", "room", "detail", "before"]),
  alt: localized,
});

export const projectMetaSchema = z.object({
  slug,
  /** Fictional placeholder illustrated with AI images. Must be replaced before launch. */
  isConcept: z.boolean(),
  type: z.enum(projectTypes),
  title: localized,
  /** One line for cards: the room and its materials. */
  summary: localized,
  town: z.object({ name: z.string().min(1), country: z.enum(["ES", "FR"]) }),
  year: z.number().int().min(2020).max(2100),
  durationMonths: z.number().int().positive(),
  surfaceM2: z.number().int().positive(),
  /** Garden or terrace, when the brief gives one. */
  outdoorM2: z.number().int().positive().optional(),
  scope: z.array(z.enum(scopes)).min(1),
  materials: z.array(localized).min(1),
  images: z.array(projectImageSchema).min(1),
});

export type ProjectMeta = z.infer<typeof projectMetaSchema>;
export type ProjectMetaInput = z.input<typeof projectMetaSchema>;

export const serviceSchema = z.object({
  /** Stable id, also the internal route segment. */
  id: slug,
  slug: z.object({ es: slug, ca: slug, fr: slug }),
  title: localized,
  line: localized,
});

export type Service = z.infer<typeof serviceSchema>;

export const townSchema = z.object({
  /** Internal route segment under /zonas, and the suffix of the public URL. */
  slug,
  name: localized,
  country: z.enum(["ES", "FR"]),
  /** Municipalities covered by this landing, for areaServed. */
  municipalities: z.array(z.string().min(1)).min(1),
});

export type Town = z.infer<typeof townSchema>;

export const servicePageSchema = z.object({
  /** Page heading, carrying the service's main keyword. */
  h1: z.string().min(1),
  /** Meta description, 140–160 characters where possible. */
  description: z.string().min(1),
  intro: z.string().min(1),
  includes: z.array(z.object({ title: z.string().min(1), text: z.string().min(1) })).min(1),
  approach: z.string().min(1),
  /** Shown on the page as written. Empty when there are no real questions. */
  faq: z.array(z.object({ q: z.string().min(1), a: z.string().min(1) })),
});

export type ServicePage = z.infer<typeof servicePageSchema>;
