import { z } from "zod";
import { townSchema, type Town } from "@/lib/content/schemas";

// The ten town landings from SEO.md. Slugs match the pathnames in i18n/routing.ts.
// The unique copy of each landing is written in the town-pages phase.
export const towns: Town[] = z.array(townSchema).parse([
  { slug: "puigcerda", name: { es: "Puigcerdà", ca: "Puigcerdà", fr: "Puigcerdà" }, country: "ES", municipalities: ["Puigcerdà"] },
  { slug: "alp", name: { es: "Alp", ca: "Alp", fr: "Alp" }, country: "ES", municipalities: ["Alp"] },
  { slug: "bolvir-fontanals", name: { es: "Bolvir y Fontanals", ca: "Bolvir i Fontanals", fr: "Bolvir et Fontanals" }, country: "ES", municipalities: ["Bolvir", "Fontanals de Cerdanya"] },
  { slug: "llivia", name: { es: "Llívia", ca: "Llívia", fr: "Llívia" }, country: "ES", municipalities: ["Llívia"] },
  { slug: "bellver-de-cerdanya", name: { es: "Bellver de Cerdanya", ca: "Bellver de Cerdanya", fr: "Bellver de Cerdanya" }, country: "ES", municipalities: ["Bellver de Cerdanya"] },
  { slug: "das-urus", name: { es: "Das y Urús", ca: "Das i Urús", fr: "Das et Urús" }, country: "ES", municipalities: ["Das", "Urús"] },
  { slug: "font-romeu-bolquere", name: { es: "Font-Romeu y Bolquère", ca: "Font-romeu i Bolquera", fr: "Font-Romeu et Bolquère" }, country: "FR", municipalities: ["Font-Romeu-Odeillo-Via", "Bolquère"] },
  { slug: "bourg-madame", name: { es: "Bourg-Madame", ca: "la Guingueta d'Ix", fr: "Bourg-Madame" }, country: "FR", municipalities: ["Bourg-Madame"] },
  { slug: "saillagouse-err", name: { es: "Saillagouse y Err", ca: "Sallagosa i Er", fr: "Saillagouse et Err" }, country: "FR", municipalities: ["Saillagouse", "Err"] },
  { slug: "osseja-palau", name: { es: "Osséja y Palau-de-Cerdagne", ca: "Oceja i Palau de Cerdanya", fr: "Osséja et Palau-de-Cerdagne" }, country: "FR", municipalities: ["Osséja", "Palau-de-Cerdagne"] },
]);
