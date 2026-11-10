import type { ProjectMetaInput } from "@/lib/content/schemas";

// FICTIONAL placeholder from content-seed/projects.md. Replace before launch.
export const meta: ProjectMetaInput = {
  "slug": "casa-pairal-alp",
  "isConcept": true,
  "type": "casa-de-piedra",
  "title": {
    "es": "Casa Pairal Alp",
    "ca": "Casa Pairal Alp",
    "fr": "Casa Pairal Alp"
  },
  "summary": {
    "es": "Chimenea central de hierro, sofás de lino y suelo de roble.",
    "ca": "Llar de foc central de ferro, sofàs de lli i terra de roure.",
    "fr": "Cheminée centrale en fer, canapés en lin et sol en chêne."
  },
  "town": {
    "name": "Alp",
    "country": "ES"
  },
  "year": 2025,
  "durationMonths": 14,
  "surfaceM2": 420,
  "outdoorM2": 1800,
  "scope": [
    "reforma-integral",
    "interiorismo",
    "wellness"
  ],
  "materials": [
    {
      "es": "Granito local",
      "ca": "Granit local",
      "fr": "Granit local"
    },
    {
      "es": "Pizarra",
      "ca": "Pissarra",
      "fr": "Ardoise"
    },
    {
      "es": "Alerce",
      "ca": "Làrix",
      "fr": "Mélèze"
    },
    {
      "es": "Roble",
      "ca": "Roure",
      "fr": "Chêne"
    },
    {
      "es": "Hierro ennegrecido",
      "ca": "Ferro ennegrit",
      "fr": "Fer noirci"
    },
    {
      "es": "Revoco de cal",
      "ca": "Arrebossat de calç",
      "fr": "Enduit à la chaux"
    },
    {
      "es": "Lana",
      "ca": "Llana",
      "fr": "Laine"
    }
  ],
  "images": [
    {
      "name": "hero",
      "ratio": "16:9",
      "kind": "hero",
      "alt": {
        "es": "Casa pairal de piedra restaurada en un prado de Alp, con cubierta de pizarra y galería acristalada, y el Cadí al atardecer",
        "ca": "Casa pairal de pedra restaurada en un prat d'Alp, amb coberta de pissarra i galeria vidrada, i el Cadí al capvespre",
        "fr": "Maison de maître en pierre restaurée dans un pré d'Alp, toit en ardoise et galerie vitrée, le Cadí au couchant"
      }
    },
    {
      "name": "cover",
      "ratio": "4:5",
      "kind": "cover",
      "alt": {
        "es": "Portón de madera restaurado en la fachada de granito",
        "ca": "Portal de fusta restaurat a la façana de granit",
        "fr": "Portail en bois restauré dans la façade de granit"
      }
    },
    {
      "name": "living",
      "ratio": "3:2",
      "kind": "room",
      "alt": {
        "es": "Sala con cocina abierta, muros de granito, chimenea central de hierro encendida y ventanal a las montañas nevadas",
        "ca": "Sala amb cuina oberta, murs de granit, llar de foc central de ferro encesa i finestral a les muntanyes nevades",
        "fr": "Séjour avec cuisine ouverte, murs de granit, cheminée centrale en fer allumée et baie sur les montagnes enneigées"
      }
    },
    {
      "name": "kitchen",
      "ratio": "3:2",
      "kind": "room",
      "alt": {
        "es": "Cocina con isla larga de roble, frentes de acero oscuro y vigas antiguas",
        "ca": "Cuina amb illa llarga de roure, fronts d'acer fosc i bigues antigues",
        "fr": "Cuisine avec long îlot en chêne, façades en acier sombre et poutres anciennes"
      }
    },
    {
      "name": "gallery",
      "ratio": "4:5",
      "kind": "room",
      "alt": {
        "es": "Galería acristalada con marcos de alerce y butacas de lectura frente al valle",
        "ca": "Galeria vidrada amb marcs de làrix i butaques de lectura davant la vall",
        "fr": "Galerie vitrée aux cadres de mélèze, fauteuils de lecture face à la vallée"
      }
    },
    {
      "name": "sauna",
      "ratio": "4:5",
      "kind": "room",
      "alt": {
        "es": "Sauna de abeto en el antiguo establo de piedra",
        "ca": "Sauna d'avet a l'antic estable de pedra",
        "fr": "Sauna en sapin dans l'ancienne étable en pierre"
      }
    },
    {
      "name": "detail",
      "ratio": "1:1",
      "kind": "detail",
      "alt": {
        "es": "Encuentro de un muro de granito con el suelo de roble y un tirador de hierro",
        "ca": "Trobada d'un mur de granit amb el terra de roure i un tirador de ferro",
        "fr": "Rencontre d'un mur de granit, du sol en chêne et d'une poignée en fer"
      }
    },
    {
      "name": "before-1",
      "ratio": "3:2",
      "kind": "before",
      "alt": {
        "es": "Antes: estancias oscuras y compartimentadas, con ventanas pequeñas",
        "ca": "Abans: estances fosques i compartimentades, amb finestres petites",
        "fr": "Avant : pièces sombres et cloisonnées, petites fenêtres"
      }
    },
    {
      "name": "before-2",
      "ratio": "3:2",
      "kind": "before",
      "alt": {
        "es": "Antes: desván dañado bajo la vieja cubierta de pizarra",
        "ca": "Abans: golfes malmeses sota la vella coberta de pissarra",
        "fr": "Avant : combles abîmés sous l'ancien toit en ardoise"
      }
    },
    {
      "name": "before-3",
      "ratio": "3:2",
      "kind": "before",
      "alt": {
        "es": "Antes: establo sin uso, con suelo de tierra",
        "ca": "Abans: estable sense ús, amb terra de terra batuda",
        "fr": "Avant : étable inutilisée, sol en terre battue"
      }
    }
  ]
};
