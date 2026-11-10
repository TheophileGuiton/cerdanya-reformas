import type { ProjectMetaInput } from "@/lib/content/schemas";

// FICTIONAL placeholder from content-seed/projects.md. Replace before launch.
export const meta: ProjectMetaInput = {
  "slug": "borda-meranges",
  "isConcept": true,
  "type": "borda",
  "title": {
    "es": "Borda de Meranges",
    "ca": "Borda de Meranges",
    "fr": "Borda de Meranges"
  },
  "summary": {
    "es": "Cerchas originales, altillo de alerce, estufa de leña y mantas de lana.",
    "ca": "Encavallades originals, altell de làrix, estufa de llenya i mantes de llana.",
    "fr": "Charpente d'origine, mezzanine en mélèze, poêle à bois et plaids en laine."
  },
  "town": {
    "name": "Meranges",
    "country": "ES"
  },
  "year": 2024,
  "durationMonths": 16,
  "surfaceM2": 260,
  "scope": [
    "rehabilitacion",
    "wellness"
  ],
  "materials": [
    {
      "es": "Piedra seca",
      "ca": "Pedra seca",
      "fr": "Pierre sèche"
    },
    {
      "es": "Vigas recuperadas",
      "ca": "Bigues recuperades",
      "fr": "Poutres de récupération"
    },
    {
      "es": "Alerce",
      "ca": "Làrix",
      "fr": "Mélèze"
    },
    {
      "es": "Lana",
      "ca": "Llana",
      "fr": "Laine"
    },
    {
      "es": "Revoco de cal",
      "ca": "Arrebossat de calç",
      "fr": "Enduit à la chaux"
    },
    {
      "es": "Pizarra",
      "ca": "Pissarra",
      "fr": "Ardoise"
    }
  ],
  "images": [
    {
      "name": "hero",
      "ratio": "16:9",
      "kind": "hero",
      "alt": {
        "es": "Borda de piedra restaurada en un prado de alta montaña, cubierta de nieve, con el bosque de pinos detrás",
        "ca": "Borda de pedra restaurada en un prat d'alta muntanya, coberta de neu, amb el bosc de pins al darrere",
        "fr": "Grange en pierre restaurée dans un pré d'altitude, sous la neige, la pinède derrière"
      }
    },
    {
      "name": "cover",
      "ratio": "4:5",
      "kind": "cover",
      "alt": {
        "es": "La borda en verano, entre flores y muros de piedra seca",
        "ca": "La borda a l'estiu, entre flors i murs de pedra seca",
        "fr": "La grange en été, entre fleurs et murs en pierre sèche"
      }
    },
    {
      "name": "living",
      "ratio": "4:5",
      "kind": "room",
      "alt": {
        "es": "Interior a doble altura con cerchas originales, altillo de madera y estufa de hierro fundido",
        "ca": "Interior a doble alçada amb encavallades originals, altell de fusta i estufa de ferro colat",
        "fr": "Volume double hauteur, charpente d'origine, mezzanine en bois et poêle en fonte"
      }
    },
    {
      "name": "mezzanine",
      "ratio": "3:2",
      "kind": "room",
      "alt": {
        "es": "Dormitorio en el altillo de alerce bajo las vigas antiguas",
        "ca": "Dormitori a l'altell de làrix sota les bigues antigues",
        "fr": "Chambre sur la mezzanine en mélèze sous les poutres anciennes"
      }
    },
    {
      "name": "detail",
      "ratio": "1:1",
      "kind": "detail",
      "alt": {
        "es": "Estufa de leña y troncos contra un muro de piedra seca",
        "ca": "Estufa de llenya i troncs contra un mur de pedra seca",
        "fr": "Poêle à bois et bûches contre un mur en pierre sèche"
      }
    },
    {
      "name": "before-1",
      "ratio": "3:2",
      "kind": "before",
      "alt": {
        "es": "Antes: pajar abandonado con heno viejo y tablas rotas",
        "ca": "Abans: paller abandonat amb fenc vell i taulons trencats",
        "fr": "Avant : fenil abandonné, vieux foin et planches cassées"
      }
    },
    {
      "name": "before-2",
      "ratio": "3:2",
      "kind": "before",
      "alt": {
        "es": "Antes: cubierta con pizarras caídas",
        "ca": "Abans: coberta amb pissarres caigudes",
        "fr": "Avant : toiture aux ardoises manquantes"
      }
    },
    {
      "name": "before-3",
      "ratio": "3:2",
      "kind": "before",
      "alt": {
        "es": "Antes: planta alta vacía y polvorienta",
        "ca": "Abans: planta alta buida i polsosa",
        "fr": "Avant : étage vide et poussiéreux"
      }
    }
  ]
};
