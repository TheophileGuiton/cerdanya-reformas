// Raw service list: ids, localized slugs, names and one-line descriptions.
// Plain data so that client components can read slugs without the validator.
export const servicesData = [
  {
    id: "interiorismo",
    slug: { es: "interiorismo-y-mobiliario", ca: "interiorisme-i-mobiliari", fr: "architecture-interieur-et-mobilier" },
    title: { es: "Interiorismo y mobiliario", ca: "Interiorisme i mobiliari", fr: "Architecture d'intérieur et mobilier" },
    line: {
      es: "Carpintería a medida, muebles, tejidos y arte.",
      ca: "Fusteria a mida, mobles, teixits i art.",
      fr: "Menuiserie sur mesure, mobilier, textiles et art.",
    },
  },
  {
    id: "cocinas-y-banos",
    slug: { es: "cocinas-y-banos-a-medida", ca: "cuines-i-banys-a-mida", fr: "cuisines-et-salles-de-bains-sur-mesure" },
    title: { es: "Cocinas y baños a medida", ca: "Cuines i banys a mida", fr: "Cuisines et salles de bains sur mesure" },
    line: {
      es: "Las dos estancias que lo cambian todo.",
      ca: "Les dues estances que ho canvien tot.",
      fr: "Les deux pièces qui changent tout.",
    },
  },
  {
    id: "reforma-integral",
    slug: { es: "reforma-integral-de-chalets", ca: "reforma-integral-de-xalets", fr: "renovation-complete-de-chalets" },
    title: { es: "Reforma integral de chalets", ca: "Reforma integral de xalets", fr: "Rénovation complète de chalets" },
    line: {
      es: "De la estructura al último textil.",
      ca: "De l'estructura a l'últim tèxtil.",
      fr: "De la structure au dernier textile.",
    },
  },
  {
    id: "casas-de-piedra",
    slug: { es: "rehabilitacion-de-casas-de-piedra-y-bordas", ca: "rehabilitacio-de-cases-de-pedra-i-bordes", fr: "renovation-de-maisons-en-pierre-et-de-granges" },
    title: { es: "Rehabilitación de casas de piedra y bordas", ca: "Rehabilitació de cases de pedra i bordes", fr: "Rénovation de maisons en pierre et de granges" },
    line: {
      es: "Conservar el alma, añadir confort.",
      ca: "Conservar l'ànima, afegir-hi confort.",
      fr: "Garder l'âme, ajouter le confort.",
    },
  },
  {
    id: "wellness",
    slug: { es: "wellness-privado", ca: "wellness-privat", fr: "espace-bien-etre-prive" },
    title: { es: "Wellness privado", ca: "Wellness privat", fr: "Espace bien-être privé" },
    line: {
      es: "Sauna, hammam, piscina interior y cuarto de esquís.",
      ca: "Sauna, hammam, piscina interior i cambra d'esquís.",
      fr: "Sauna, hammam, piscine intérieure et local à skis.",
    },
  },
  {
    id: "confort-y-eficiencia",
    slug: { es: "confort-y-eficiencia", ca: "confort-i-eficiencia", fr: "confort-et-efficacite-energetique" },
    title: { es: "Confort y eficiencia", ca: "Confort i eficiència", fr: "Confort et efficacité énergétique" },
    line: {
      es: "Aislamiento, aerotermia, suelo radiante y triple vidrio.",
      ca: "Aïllament, aerotèrmia, terra radiant i triple vidre.",
      fr: "Isolation, pompe à chaleur, plancher chauffant et triple vitrage.",
    },
  },
  {
    id: "domotica-y-seguridad",
    slug: { es: "domotica-y-seguridad", ca: "domotica-i-seguretat", fr: "domotique-et-securite" },
    title: { es: "Domótica y seguridad", ca: "Domòtica i seguretat", fr: "Domotique et sécurité" },
    line: {
      es: "La calefacción y los accesos, desde el móvil.",
      ca: "La calefacció i els accessos, des del mòbil.",
      fr: "Le chauffage et les accès, depuis le téléphone.",
    },
  },
  {
    id: "llave-en-mano",
    slug: { es: "llave-en-mano-y-gestion", ca: "clau-en-ma-i-gestio", fr: "cle-en-main-et-gestion" },
    title: { es: "Llave en mano y gestión", ca: "Clau en mà i gestió", fr: "Clé en main et gestion" },
    line: {
      es: "Un solo interlocutor. Después, si quiere, el alquiler.",
      ca: "Un sol interlocutor. Després, si voleu, el lloguer.",
      fr: "Un seul interlocuteur. Ensuite, si vous le souhaitez, la location.",
    },
  },
] as const;
