import { defineRouting } from "next-intl/routing";

// URL map from SEO.md. Internal route on the left, public pathname per locale on the right.
// Town landings are listed one by one because a pathname segment such as
// "reformas-[town]" cannot be partly dynamic.
export const routing = defineRouting({
  locales: ["es", "ca", "fr"],
  defaultLocale: "es",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/proyectos": { es: "/proyectos", ca: "/projectes", fr: "/projets" },
    "/proyectos/[slug]": {
      es: "/proyectos/[slug]",
      ca: "/projectes/[slug]",
      fr: "/projets/[slug]",
    },
    "/servicios": { es: "/servicios", ca: "/serveis", fr: "/services" },
    "/servicios/[slug]": {
      es: "/servicios/[slug]",
      ca: "/serveis/[slug]",
      fr: "/services/[slug]",
    },
    "/metodo": { es: "/metodo", ca: "/metode", fr: "/methode" },
    "/nosotros": { es: "/nosotros", ca: "/nosaltres", fr: "/a-propos" },
    "/journal": "/journal",
    "/journal/[slug]": "/journal/[slug]",
    "/contacto": { es: "/contacto", ca: "/contacte", fr: "/contact" },
    "/aviso-legal": {
      es: "/aviso-legal",
      ca: "/avis-legal",
      fr: "/mentions-legales",
    },
    "/privacidad": {
      es: "/privacidad",
      ca: "/privacitat",
      fr: "/confidentialite",
    },
    "/cookies": { es: "/cookies", ca: "/galetes", fr: "/cookies" },

    "/zonas/puigcerda": {
      es: "/reformas-puigcerda",
      ca: "/reformes-puigcerda",
      fr: "/renovation-puigcerda",
    },
    "/zonas/alp": {
      es: "/reformas-alp",
      ca: "/reformes-alp",
      fr: "/renovation-alp",
    },
    "/zonas/bolvir-fontanals": {
      es: "/reformas-bolvir-fontanals",
      ca: "/reformes-bolvir-fontanals",
      fr: "/renovation-bolvir-fontanals",
    },
    "/zonas/llivia": {
      es: "/reformas-llivia",
      ca: "/reformes-llivia",
      fr: "/renovation-llivia",
    },
    "/zonas/bellver-de-cerdanya": {
      es: "/reformas-bellver-de-cerdanya",
      ca: "/reformes-bellver-de-cerdanya",
      fr: "/renovation-bellver-de-cerdanya",
    },
    "/zonas/das-urus": {
      es: "/reformas-das-urus",
      ca: "/reformes-das-urus",
      fr: "/renovation-das-urus",
    },
    "/zonas/font-romeu-bolquere": {
      es: "/reformas-font-romeu-bolquere",
      ca: "/reformes-font-romeu-bolquere",
      fr: "/renovation-font-romeu-bolquere",
    },
    "/zonas/bourg-madame": {
      es: "/reformas-bourg-madame",
      ca: "/reformes-bourg-madame",
      fr: "/renovation-bourg-madame",
    },
    "/zonas/saillagouse-err": {
      es: "/reformas-saillagouse-err",
      ca: "/reformes-saillagouse-err",
      fr: "/renovation-saillagouse-err",
    },
    "/zonas/osseja-palau": {
      es: "/reformas-osseja-palau",
      ca: "/reformes-osseja-palau",
      fr: "/renovation-osseja-palau",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
