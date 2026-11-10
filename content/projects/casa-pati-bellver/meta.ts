import type { ProjectMetaInput } from "@/lib/content/schemas";

// FICTIONAL placeholder from content-seed/projects.md. Replace before launch.
export const meta: ProjectMetaInput = {
  "slug": "casa-pati-bellver",
  "isConcept": true,
  "type": "casa-de-piedra",
  "title": {
    "es": "Casa del Pati Bellver",
    "ca": "Casa del Pati Bellver",
    "fr": "Casa del Pati Bellver"
  },
  "summary": {
    "es": "Patio de barro cocido, biblioteca de roble y ventanas de alerce.",
    "ca": "Pati de terra cuita, biblioteca de roure i finestres de làrix.",
    "fr": "Patio en terre cuite, bibliothèque en chêne et fenêtres en mélèze."
  },
  "town": {
    "name": "Bellver de Cerdanya",
    "country": "ES"
  },
  "year": 2025,
  "durationMonths": 11,
  "surfaceM2": 300,
  "scope": [
    "rehabilitacion",
    "eficiencia"
  ],
  "materials": [
    {
      "es": "Piedra natural",
      "ca": "Pedra natural",
      "fr": "Pierre naturelle"
    },
    {
      "es": "Revoco de cal",
      "ca": "Arrebossat de calç",
      "fr": "Enduit à la chaux"
    },
    {
      "es": "Alerce",
      "ca": "Làrix",
      "fr": "Mélèze"
    },
    {
      "es": "Barro cocido",
      "ca": "Terra cuita",
      "fr": "Terre cuite"
    },
    {
      "es": "Hierro ennegrecido",
      "ca": "Ferro ennegrit",
      "fr": "Fer noirci"
    }
  ],
  "images": [
    {
      "name": "hero",
      "ratio": "16:9",
      "kind": "hero",
      "alt": {
        "es": "Patio interior de una casa de pueblo de piedra, con suelo de barro cocido, plantas trepadoras y mesa exterior",
        "ca": "Pati interior d'una casa de poble de pedra, amb terra de terra cuita, plantes enfiladisses i taula exterior",
        "fr": "Patio d'une maison de village en pierre, sol en terre cuite, plantes grimpantes et table d'extérieur"
      }
    },
    {
      "name": "cover",
      "ratio": "4:5",
      "kind": "cover",
      "alt": {
        "es": "Fachada de piedra con ventanas nuevas de alerce y puerta antigua de madera",
        "ca": "Façana de pedra amb finestres noves de làrix i porta antiga de fusta",
        "fr": "Façade en pierre, fenêtres neuves en mélèze et porte ancienne en bois"
      }
    },
    {
      "name": "library",
      "ratio": "3:2",
      "kind": "room",
      "alt": {
        "es": "Biblioteca con estanterías de roble de suelo a techo y butaca junto a una ventana profunda",
        "ca": "Biblioteca amb prestatgeries de roure de terra a sostre i butaca al costat d'una finestra profunda",
        "fr": "Bibliothèque en chêne du sol au plafond, fauteuil près d'une fenêtre profonde"
      }
    },
    {
      "name": "detail",
      "ratio": "1:1",
      "kind": "detail",
      "alt": {
        "es": "Ventana de alerce con triple vidrio en un muro grueso de piedra",
        "ca": "Finestra de làrix amb triple vidre en un mur gruixut de pedra",
        "fr": "Fenêtre en mélèze à triple vitrage dans un mur épais en pierre"
      }
    },
    {
      "name": "before-1",
      "ratio": "3:2",
      "kind": "before",
      "alt": {
        "es": "Antes: patio descuidado con baldosas rotas",
        "ca": "Abans: pati descurat amb rajoles trencades",
        "fr": "Avant : patio négligé, dalles cassées"
      }
    },
    {
      "name": "before-2",
      "ratio": "3:2",
      "kind": "before",
      "alt": {
        "es": "Antes: habitación fría con humedades e instalación antigua",
        "ca": "Abans: habitació freda amb humitats i instal·lació antiga",
        "fr": "Avant : pièce froide, humide, installation électrique ancienne"
      }
    }
  ]
};
