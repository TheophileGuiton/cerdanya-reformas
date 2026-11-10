import type { ProjectMetaInput } from "@/lib/content/schemas";

// FICTIONAL placeholder from content-seed/projects.md. Replace before launch.
export const meta: ProjectMetaInput = {
  "slug": "chalet-font-romeu",
  "isConcept": true,
  "type": "chalet",
  "title": {
    "es": "Chalet Font-Romeu",
    "ca": "Chalet Font-Romeu",
    "fr": "Chalet Font-Romeu"
  },
  "summary": {
    "es": "Chimenea suspendida, ventanales de alerce al sur y cuarto de esquís.",
    "ca": "Llar de foc suspesa, finestrals de làrix al sud i cambra d'esquís.",
    "fr": "Cheminée suspendue, baies en mélèze plein sud et local à skis."
  },
  "town": {
    "name": "Font-Romeu-Odeillo-Via",
    "country": "FR"
  },
  "year": 2026,
  "durationMonths": 8,
  "surfaceM2": 240,
  "scope": [
    "reforma-integral",
    "interiorismo",
    "eficiencia"
  ],
  "materials": [
    {
      "es": "Alerce",
      "ca": "Làrix",
      "fr": "Mélèze"
    },
    {
      "es": "Granito local",
      "ca": "Granit local",
      "fr": "Granit local"
    },
    {
      "es": "Roble",
      "ca": "Roure",
      "fr": "Chêne"
    },
    {
      "es": "Lana",
      "ca": "Llana",
      "fr": "Laine"
    },
    {
      "es": "Acero negro",
      "ca": "Acer negre",
      "fr": "Acier noir"
    }
  ],
  "images": [
    {
      "name": "hero",
      "ratio": "16:9",
      "kind": "hero",
      "alt": {
        "es": "Chalet de esquí de los años setenta reformado en Font-Romeu, con revestimiento de alerce y ventanales al sur, un día de invierno soleado",
        "ca": "Xalet d'esquí dels anys setanta reformat a Font-romeu, amb revestiment de làrix i finestrals al sud, un dia d'hivern assolellat",
        "fr": "Chalet de ski des années 1970 rénové à Font-Romeu, bardage en mélèze et baies plein sud, par une journée d'hiver ensoleillée"
      }
    },
    {
      "name": "cover",
      "ratio": "4:5",
      "kind": "cover",
      "alt": {
        "es": "Entrada del chalet con nieve y un muro de piedra",
        "ca": "Entrada del xalet amb neu i un mur de pedra",
        "fr": "Entrée du chalet sous la neige, mur en pierre"
      }
    },
    {
      "name": "living",
      "ratio": "3:2",
      "kind": "room",
      "alt": {
        "es": "Sala con chimenea negra suspendida, suelo de roble y ventanales al bosque nevado",
        "ca": "Sala amb llar de foc negra suspesa, terra de roure i finestrals al bosc nevat",
        "fr": "Séjour avec cheminée noire suspendue, sol en chêne et baies sur la forêt enneigée"
      }
    },
    {
      "name": "skiroom",
      "ratio": "3:2",
      "kind": "room",
      "alt": {
        "es": "Cuarto de esquís en la entrada, con bancos y armarios de alerce",
        "ca": "Cambra d'esquís a l'entrada, amb bancs i armaris de làrix",
        "fr": "Local à skis à l'entrée, bancs et rangements en mélèze"
      }
    },
    {
      "name": "bedroom",
      "ratio": "4:5",
      "kind": "room",
      "alt": {
        "es": "Dormitorio con paredes de alerce, tejidos de lana y vista nevada",
        "ca": "Dormitori amb parets de làrix, teixits de llana i vista nevada",
        "fr": "Chambre aux murs en mélèze, textiles en laine et vue enneigée"
      }
    },
    {
      "name": "before-1",
      "ratio": "3:2",
      "kind": "before",
      "alt": {
        "es": "Antes: interior oscuro de los años setenta, con madera barnizada y ventanas pequeñas",
        "ca": "Abans: interior fosc dels anys setanta, amb fusta envernissada i finestres petites",
        "fr": "Avant : intérieur sombre des années 1970, bois verni et petites fenêtres"
      }
    },
    {
      "name": "before-2",
      "ratio": "3:2",
      "kind": "before",
      "alt": {
        "es": "Antes: entrada antigua y desordenada",
        "ca": "Abans: entrada antiga i desendreçada",
        "fr": "Avant : ancienne entrée encombrée"
      }
    }
  ]
};
