import type { ProjectMetaInput } from "@/lib/content/schemas";

// FICTIONAL placeholder from content-seed/projects.md. Replace before launch.
export const meta: ProjectMetaInput = {
  "slug": "atic-llac-puigcerda",
  "isConcept": true,
  "type": "atico",
  "title": {
    "es": "Àtic Llac Puigcerdà",
    "ca": "Àtic Llac Puigcerdà",
    "fr": "Àtic Llac Puigcerdà"
  },
  "summary": {
    "es": "Pared de roble a medida, mesa larga y baños de piedra y madera estriada.",
    "ca": "Paret de roure a mida, taula llarga i banys de pedra i fusta estriada.",
    "fr": "Mur en chêne sur mesure, longue table et salles de bains en pierre et bois cannelé."
  },
  "town": {
    "name": "Puigcerdà",
    "country": "ES"
  },
  "year": 2026,
  "durationMonths": 6,
  "surfaceM2": 180,
  "outdoorM2": 60,
  "scope": [
    "interiorismo",
    "cocina-banos"
  ],
  "materials": [
    {
      "es": "Roble",
      "ca": "Roure",
      "fr": "Chêne"
    },
    {
      "es": "Piedra local clara",
      "ca": "Pedra local clara",
      "fr": "Pierre locale claire"
    },
    {
      "es": "Lana",
      "ca": "Llana",
      "fr": "Laine"
    },
    {
      "es": "Lino",
      "ca": "Lli",
      "fr": "Lin"
    },
    {
      "es": "Bronce",
      "ca": "Bronze",
      "fr": "Bronze"
    }
  ],
  "images": [
    {
      "name": "hero",
      "ratio": "16:9",
      "kind": "hero",
      "alt": {
        "es": "Terraza del ático con vistas al lago, a los tejados de Puigcerdà y al Pirineo",
        "ca": "Terrassa de l'àtic amb vistes a l'estany, a les teulades de Puigcerdà i al Pirineu",
        "fr": "Terrasse de l'attique avec vue sur le lac, les toits de Puigcerdà et les Pyrénées"
      }
    },
    {
      "name": "cover",
      "ratio": "4:5",
      "kind": "cover",
      "alt": {
        "es": "Sala con pared de roble a medida, librería y sofá de lana",
        "ca": "Sala amb paret de roure a mida, llibreria i sofà de llana",
        "fr": "Séjour avec mur en chêne sur mesure, bibliothèque et canapé en laine"
      }
    },
    {
      "name": "kitchen",
      "ratio": "3:2",
      "kind": "room",
      "alt": {
        "es": "Cocina abierta con mesa larga de roble, encimera de piedra y detalles de bronce",
        "ca": "Cuina oberta amb taula llarga de roure, taulell de pedra i detalls de bronze",
        "fr": "Cuisine ouverte, longue table en chêne, plan de travail en pierre et détails en bronze"
      }
    },
    {
      "name": "bath",
      "ratio": "4:5",
      "kind": "room",
      "alt": {
        "es": "Baño de piedra clara y roble estriado con luz natural",
        "ca": "Bany de pedra clara i roure estriat amb llum natural",
        "fr": "Salle de bains en pierre claire et chêne cannelé, lumière naturelle"
      }
    },
    {
      "name": "detail",
      "ratio": "1:1",
      "kind": "detail",
      "alt": {
        "es": "Detalle de carpintería de roble estriado con tirador de bronce",
        "ca": "Detall de fusteria de roure estriat amb tirador de bronze",
        "fr": "Détail de menuiserie en chêne cannelé et poignée en bronze"
      }
    }
  ]
};
