import type { ProjectMetaInput } from "@/lib/content/schemas";

// FICTIONAL placeholder from content-seed/projects.md. Replace before launch.
export const meta: ProjectMetaInput = {
  "slug": "xalet-llivia-wellness",
  "isConcept": true,
  "type": "chalet",
  "title": {
    "es": "Xalet Llívia Wellness",
    "ca": "Xalet Llívia Wellness",
    "fr": "Xalet Llívia Wellness"
  },
  "summary": {
    "es": "Piscina interior, sauna de abeto, escalera de hierro y roble.",
    "ca": "Piscina interior, sauna d'avet, escala de ferro i roure.",
    "fr": "Piscine intérieure, sauna en sapin, escalier en fer et chêne."
  },
  "town": {
    "name": "Llívia",
    "country": "ES"
  },
  "year": 2026,
  "durationMonths": 12,
  "surfaceM2": 450,
  "scope": [
    "reforma-integral",
    "wellness",
    "llave-en-mano",
    "gestion-alquiler"
  ],
  "materials": [
    {
      "es": "Piedra natural",
      "ca": "Pedra natural",
      "fr": "Pierre naturelle"
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
      "es": "Gres oscuro",
      "ca": "Gres fosc",
      "fr": "Grès sombre"
    },
    {
      "es": "Abeto",
      "ca": "Avet",
      "fr": "Sapin"
    }
  ],
  "images": [
    {
      "name": "hero",
      "ratio": "16:9",
      "kind": "hero",
      "alt": {
        "es": "Piscina interior en el sótano del chalet, con gres oscuro, luz indirecta y ventana larga al jardín nevado",
        "ca": "Piscina interior al soterrani del xalet, amb gres fosc, llum indirecta i finestra llarga al jardí nevat",
        "fr": "Piscine intérieure au sous-sol du chalet, grès sombre, lumière indirecte et longue fenêtre sur le jardin enneigé"
      }
    },
    {
      "name": "cover",
      "ratio": "4:5",
      "kind": "cover",
      "alt": {
        "es": "Chalet grande cerca de Llívia bajo la nieve, con las ventanas encendidas",
        "ca": "Xalet gran a prop de Llívia sota la neu, amb les finestres enceses",
        "fr": "Grand chalet près de Llívia sous la neige, fenêtres éclairées"
      }
    },
    {
      "name": "sauna",
      "ratio": "4:5",
      "kind": "room",
      "alt": {
        "es": "Sauna de abeto oscuro con pared de vidrio hacia la piscina",
        "ca": "Sauna d'avet fosc amb paret de vidre cap a la piscina",
        "fr": "Sauna en sapin sombre, paroi vitrée sur la piscine"
      }
    },
    {
      "name": "stairs",
      "ratio": "4:5",
      "kind": "room",
      "alt": {
        "es": "Escalera de hierro ennegrecido y roble",
        "ca": "Escala de ferro ennegrit i roure",
        "fr": "Escalier en fer noirci et chêne"
      }
    },
    {
      "name": "bedroom",
      "ratio": "3:2",
      "kind": "room",
      "alt": {
        "es": "Dormitorio con lana y lino, cabecero de madera y vistas a la montaña",
        "ca": "Dormitori amb llana i lli, capçal de fusta i vistes a la muntanya",
        "fr": "Chambre en laine et lin, tête de lit en bois et vue sur la montagne"
      }
    },
    {
      "name": "skiroom",
      "ratio": "3:2",
      "kind": "room",
      "alt": {
        "es": "Cuarto de esquís con bancos de roble y secabotas calefactados",
        "ca": "Cambra d'esquís amb bancs de roure i assecabotes calefactats",
        "fr": "Local à skis avec bancs en chêne et sèche-chaussures chauffants"
      }
    }
  ]
};
