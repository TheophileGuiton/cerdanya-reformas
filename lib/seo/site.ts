/** Public address of the site, without a trailing slash. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
).replace(/\/$/, "");

export const siteName = "Cerdanya Reformes";
export const phone = "+34 625 01 43 88";
export const parentName = "Cerdanya Privé";
export const parentUrl = process.env.NEXT_PUBLIC_PARENT_URL ?? "https://cerdanyaprive.com";

/** hreflang code for each site language. */
export const hreflang = { es: "es-ES", ca: "ca-ES", fr: "fr-FR" } as const;
