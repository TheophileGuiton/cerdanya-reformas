# DESIGN.md — tokens and system

> Chosen direction: **"Llar" (home, hearth)** — the house seen from inside. Interiors first: the room, the fire, the materials and the furniture, with the valley in the window. Reference mock-up: `.directions/llar.html`. Implemented in `app/globals.css` `@theme`.

## Direction
A Ceretan house is closed toward the street and warm inside: thick granite walls, fir beams, the fire at the centre, the Cadí framed by a larch window. The site opens the same way — on a room, before any words. Then it shows what the room is made of: a short list of materials, named and left visible, and the furniture built for it.
We show rooms more than facades. Exteriors close a project; they don't open it.
Material palette: exposed granite, larch and fir, oak floors and joinery, blackened iron, wool and linen, lime plaster.

## Color
| Token | Hex | Use |
|---|---|---|
| `--color-wool` | `#D8D0C2` | Main background (undyed wool) |
| `--color-lime` | `#EBE5D9` | Alternate sections, panels, text on dark |
| `--color-granite` | `#9C968B` | Rules, borders, image placeholders — never text |
| `--color-oak` | `#A77F56` | Image placeholders, warm surfaces — never text |
| `--color-timber` | `#8A6644` | Darker placeholder variant |
| `--color-bark` | `#5A4E44` | Secondary text on `wool`/`lime` |
| `--color-walnut` | `#2E2520` | Primary text, dark sections (lead form), buttons |
| `--color-fleece` | `#CFC6B5` | Secondary text and rules on `walnut` |
| `--color-iron` | `#1F1D1C` | Material swatch only |
| `--color-loden` | `#465241` | The ONE accent: link underlines, keyword line, focus ring, hover |

Rules: max one accent. Dark sections = `walnut` + `lime` text, `fleece` secondary. Never `#000`. Verified AA: `walnut`, `bark` and `loden` on `wool` and `lime`; `lime` and `fleece` on `walnut`. `granite` and `oak` fail as text — surfaces and rules only.

## Typography
- **Display:** Libre Caslon Display (Google Fonts) — 400 only. Headlines and large titles.
- **Small serif:** Libre Caslon Text — 400 + italic, for serif text under ~26px (material names, phone number, facts), where the Display cut gets too thin.
- **Text:** Schibsted Grotesk — 400/500/600.
- `next/font`, `display: swap`, subsets latin + latin-ext (à è é í ò ó ú ç l·l ï ü).

| Token | Size (mobile → desktop) | LH | Tracking | Font |
|---|---|---|---|---|
| `display-xl` | 40 → 84px | 1.02 | -0.01em | Caslon Display |
| `display-l` | 34 → 58px | 1.05 | -0.005em | Caslon Display |
| `display-m` | 24 → 28px | 1.15 | 0 | Caslon Display |
| `title` | 20 → 22px | 1.2 | 0 | Caslon Text |
| `body-l` | 17 → 18px | 1.55 | 0 | Grotesk |
| `body` | 16 → 17px | 1.6 | 0 | Grotesk |
| `small` | 15px | 1.5 | 0 | Grotesk |
| `note` | 13px | 1.45 | 0 | Grotesk 500 |
| `nav` | 15px | 1 | 0 | Grotesk 500 |

Sentence case everywhere — no uppercase tracked labels. Body max 60ch. Numbers (m², years, durations, phone) in tabular figures. Headlines use `text-wrap: balance`.

## Spacing & layout
- 4px base. Scale: 4 8 12 16 24 32 48 64 80 96 120 160.
- Section padding: 120px desktop, 80px mobile.
- Max width 1440px; side margin 56px desktop, 20px mobile; 24px gutter.
- Two-part section heads: heading left (7fr), short text or link right (5fr), aligned to the baseline.
- The room comes first: image, then words. One idea per screen.

## Photography & images
- **Subject:** interiors almost exclusively — the sala with the fire lit, joinery, kitchens, textiles, a handle, a stone joint. The valley appears through windows. Exteriors only as a project's closing image and as `cover` where no interior exists.
- Ratios: home hero 21:10 desktop (max 64vh) / 4:3 mobile; room cards 3:2 and 4:5 mixed, bottom-aligned; details 1:1; material swatches 4:5 (3:2 mobile).
- Radius 0 on photos; 2px max on inputs/buttons.
- Mood: evening or snow light, lamps and fire on, warm and lived-in but uncluttered; real textures (wool, grain, lime).
- Captions: `note` style, `bark`, sentence case — "Casa Pairal Alp, la sala con el fuego encendido".
- Before/After: draggable vertical divider, 1px `lime` line with small round handle, labels "Antes / Abans / Avant" and "Después / Després / Après".
- AI image credit: `note` line on a `walnut` tag at the bottom-left of the image (or in the caption row under hero images): "Imagen generada con IA · Proyecto conceptual" (localized).
- `<PlaceholderImage>`: flat `oak`, `granite` or `timber` block (rotating), correct ratio, with the same `walnut` tag naming the expected file — warm enough to be screenshotted during development.

## Components
- **Logo lockup:** "Cerdanya Reformes" in Caslon Display 27px, with "by Cerdanya Privé" beside it in `note` style, `bark`. On mobile header show the wordmark only; the endorsement returns in the menu sheet and footer.
- **Header:** solid `wool`, not over the image; hairline `granite` bottom border after 80px scroll. Logo left; nav right: Proyectos · Servicios · Método · Zonas · Journal · Contacto; language switcher `ES · CA · FR` (active = `walnut` block, `lime` text). Mobile: full-screen `walnut` sheet, Caslon Display links 34px.
- **Hero (home):** the room image inside the page margins, caption row under it; below, heading left (the `display-xl` statement, then the keyword line in `loden` 15px/600 under it, both inside the `h1` — never a label above the headline) and intro + CTA + phone right.
- **Links / CTAs:** text with a 2px `loden` underline, no arrows. Filled button only for form submit: `lime` on `walnut` sections (`walnut` on light ones), 2px radius, 56px height.
- **Materials strip:** six swatches (Granito, Alerce, Roble, Hierro ennegrecido, Lana, Cal) on `lime`: flat colour or material detail photo, name in `title`, one line of use. Home and service pages.
- **Room card:** image, then name in `display-m` ("La sala de Casa Pairal Alp"), then one `small` line of materials + "Proyecto conceptual". Hover: image scale 1.03 over 900ms.
- **Facts strip (project page):** 4 columns — Municipio · Superficie · Duración · Alcance — `note` labels, Caslon Text values.
- **Services list:** rows without numbers, name in `display-m` left (5fr), one line right (7fr), `walnut` rule on top and `granite` hairlines between; name turns `loden` on hover. Interiors first: Interiorismo y mobiliario, Cocinas y baños, then the rest. No icons.
- **Lead form:** on `walnut`; heading, phone and WhatsApp link left; underline inputs right, `note`-size labels in `fleece`, two columns on desktop, 28px rhythm, inline validation, consent and first-layer text in `fleece`.
- **WhatsApp button:** fixed bottom-right, 56px `walnut` circle with a 1px `lime` ring, white WhatsApp glyph (official SVG), no shadow; label tooltip on desktop "WhatsApp".
- **Footer:** `wool`. Big serif line ("Casas de montaña, hechas para durar." localized), columns: contact, zones, services, legal; "by Cerdanya Privé" with a link to cerdanyaprive.com ("Gestión de alquiler vacacional en la Cerdanya" localized), phone +34 625 01 43 88.

## Motion
| Token | Value |
|---|---|
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` / GSAP `power3.out` |
| `--dur-fast` | 300ms |
| `--dur-base` | 900ms |
| `--dur-slow` | 1400ms |
| Stagger | 90ms |
| Parallax | ≤ 6% of element height |

Very little. Allowed: images settle in (scale 1.04 → 1 with a clip reveal, once), the materials strip reveals swatch by swatch (once), heading line reveals on the hero only, fade page transitions. Not allowed: bounce, spin, cursor followers, scroll-jacking, flickering "fire" effects, snow particles. Lenis `lerp: 0.1`; everything instant under reduced motion.

## Iconography
Only: close ×, plus/minus for accordions, WhatsApp glyph. No arrows on links, no icon grids.
