import type { ProjectMetaInput } from "@/lib/content/schemas";

// FICTIONAL placeholder from content-seed/projects.md. Replace before launch.
export const meta: ProjectMetaInput = {
  "slug": "xalet-fontanals",
  "isConcept": true,
  "type": "chalet",
  "title": {
    "es": "Xalet Fontanals",
    "ca": "Xalet Fontanals",
    "fr": "Xalet Fontanals"
  },
  "summary": {
    "es": "Sala a doble altura, isla de roble y acero negro, baño frente al valle.",
    "ca": "Sala a doble alçada, illa de roure i acer negre, bany davant la vall.",
    "fr": "Séjour double hauteur, îlot en chêne et acier noir, bain face à la vallée."
  },
  "town": {
    "name": "Fontanals de Cerdanya",
    "country": "ES"
  },
  "year": 2025,
  "durationMonths": 9,
  "surfaceM2": 380,
  "scope": [
    "reforma-integral",
    "eficiencia"
  ],
  "materials": [
    {
      "es": "Abeto",
      "ca": "Avet",
      "fr": "Sapin"
    },
    {
      "es": "Roble",
      "ca": "Roure",
      "fr": "Chêne"
    },
    {
      "es": "Acero negro",
      "ca": "Acer negre",
      "fr": "Acier noir"
    },
    {
      "es": "Microcemento",
      "ca": "Microciment",
      "fr": "Béton ciré"
    },
    {
      "es": "Piedra natural",
      "ca": "Pedra natural",
      "fr": "Pierre naturelle"
    }
  ],
  "images": [
    {
      "name": "hero",
      "ratio": "16:9",
      "kind": "hero",
      "alt": {
        "es": "Sala a doble altura con ventanales al campo de golf y a las cumbres nevadas, techo de abeto y chimenea",
        "ca": "Sala a doble alçada amb finestrals al camp de golf i als cims nevats, sostre d'avet i llar de foc",
        "fr": "Séjour double hauteur, baies sur le golf et les sommets enneigés, plafond en sapin et cheminée"
      }
    },
    {
      "name": "cover",
      "ratio": "4:5",
      "kind": "cover",
      "alt": {
        "es": "Chalet contemporáneo con zócalo de piedra, alerce y pizarra al anochecer",
        "ca": "Xalet contemporani amb sòcol de pedra, làrix i pissarra al vespre",
        "fr": "Chalet contemporain, soubassement en pierre, mélèze et ardoise à la tombée du jour"
      }
    },
    {
      "name": "kitchen",
      "ratio": "3:2",
      "kind": "room",
      "alt": {
        "es": "Isla de cocina de roble y acero negro sobre suelo de microcemento",
        "ca": "Illa de cuina de roure i acer negre sobre terra de microciment",
        "fr": "Îlot de cuisine en chêne et acier noir sur sol en béton ciré"
      }
    },
    {
      "name": "bath",
      "ratio": "4:5",
      "kind": "room",
      "alt": {
        "es": "Baño principal con bañera exenta de piedra frente a un ventanal al valle",
        "ca": "Bany principal amb banyera exempta de pedra davant un finestral a la vall",
        "fr": "Salle de bains avec baignoire îlot en pierre devant une baie sur la vallée"
      }
    },
    {
      "name": "terrace",
      "ratio": "3:2",
      "kind": "room",
      "alt": {
        "es": "Terraza de madera con zona de estar y vistas a la montaña",
        "ca": "Terrassa de fusta amb zona d'estar i vistes a la muntanya",
        "fr": "Terrasse en bois avec salon d'extérieur et vue sur la montagne"
      }
    },
    {
      "name": "before-1",
      "ratio": "3:2",
      "kind": "before",
      "alt": {
        "es": "Antes: sala con ventanas pequeñas y pino anaranjado",
        "ca": "Abans: sala amb finestres petites i pi ataronjat",
        "fr": "Avant : séjour aux petites fenêtres et pin orangé"
      }
    },
    {
      "name": "before-2",
      "ratio": "3:2",
      "kind": "before",
      "alt": {
        "es": "Antes: cocina anticuada",
        "ca": "Abans: cuina antiquada",
        "fr": "Avant : cuisine datée"
      }
    },
    {
      "name": "before-3",
      "ratio": "3:2",
      "kind": "before",
      "alt": {
        "es": "Antes: baño con azulejo beige",
        "ca": "Abans: bany amb rajola beix",
        "fr": "Avant : salle de bains en carrelage beige"
      }
    }
  ]
};
