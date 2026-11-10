# The first prompt to paste into Claude Code

Open Claude Code in this folder (`claude`), check `/mcp`, then paste everything between the lines.

---

```
You are the design lead and senior engineer for this project: the website of Cerdanya Reformes
("by Cerdanya Privé"), the luxury renovation brand of Cerdanya Privé (holiday-rental management in La Cerdanya),
on its own domain. We work on both the Spanish and French sides of the Cerdanya.
We renovate mountain chalets and stone houses worth €600k–3M. The site must feel very modern and
premium while respecting the tradition of Ceretan mountain houses (stone, slate, larch, fir, iron).
Goals: qualified leads (form + WhatsApp) and local SEO in ES/CA/FR ("reformas Cerdanya",
"reformas casas Puigcerdà", "reformes Cerdanya", "rénovation chalet Cerdagne", "rénovation Font-Romeu"…).
Phone and WhatsApp: +34 625 01 43 88.

1. Read CLAUDE.md, PRODUCT.md, DESIGN.md, SEO.md, content-seed/projects.md, content-seed/image-prompts.md and references/ (including NOTES.md
   and any screenshots). Summarise in 10 lines what you understood, then list every [TO CONFIRM] item and any
   contradiction you see. Ask me only the questions that block the next step; use sensible defaults for the rest
   and say which defaults you chose.

2. Plan in plan mode: the full build broken into phases (art direction → scaffold → layout shell → Home →
   Projects + case study → Services → Town pages → Method/About → Contact + lead form + WhatsApp → Journal →
   SEO/JSON-LD/sitemap → motion pass → performance & accessibility audit → Vercel preview).
   For each phase: files touched, acceptance criteria, and which quality gates from CLAUDE.md apply.
   Create a task list from it.

3. Art direction (no app code yet). Using the frontend-design skill, propose THREE distinct directions,
   all coherent with DESIGN.md's materials but genuinely different, e.g.:
   - "Pedra i Llum" — the current DESIGN.md (editorial, snow and stone, serif-led)
   - "Refugi" — warmer and darker: pine green and larch, firelight, more intimate
   - "Arquitectura" — stricter, monochrome slate and white, grid-heavy, architectural drawings as graphics
   For each: concept (one paragraph), palette with hex + role, type pairing (free fonts), photography direction,
   motion character, and the Home hero copy in ES/CA/FR.
   Build each as one static HTML file in .directions/ (home hero + one project card row + services list +
   short lead form + WhatsApp button), using placeholder blocks for images — no external photos.
   Take Playwright screenshots of each at 390 and 1440 px and show them to me.

Then STOP and wait for my choice. After I choose, you will update DESIGN.md with that direction
(same structure, new values) and start the scaffold phase.

Rules for the whole project: follow CLAUDE.md strictly; use Context7 for library APIs; one phase at a time;
show screenshots before moving on; never deploy to production or send real emails without asking;
the seven projects are fictional placeholders with AI images (isConcept: true) — never invent clients, testimonials, reviews,
awards or figures.
```

---

## The next prompts (after you pick a direction)

**Scaffold**
```
Update DESIGN.md with direction [X]. Then scaffold phase 1 exactly as in CLAUDE.md: Next.js + TS strict + pnpm,
Tailwind v4 tokens from DESIGN.md, next-intl (es default, ca, fr) with the localized pathnames from SEO.md,
fonts via next/font, shadcn primitives restyled, Lenis/GSAP providers with reduced-motion handling,
file-based content loaders with zod schemas, PlaceholderImage, WhatsAppButton, .env.local.example.
Then generate the 7 concept projects from content-seed/projects.md in es/ca/fr, wired to the image file names
in content-seed/image-prompts.md (PlaceholderImage when a file is missing), with the AI-image mention on every image.
Stop when `pnpm build` passes and show me the tree + screenshots of an empty Home in 3 locales.
```

**Each page**
```
Build the [Home] page following the plan. Then run the quality gates, /impeccable critique, fix,
/impeccable polish, and show me screenshots at 390/1024/1440 in ES (and one in FR).
```

**Lead form**
```
Build the lead form exactly as in PRODUCT.md → "Lead form": Server Action, zod, Resend, honeypot,
Turnstile, rate limit, localized errors and success state, hidden UTM/gclid fields, GDPR consent,
generate_lead event via Consent Mode v2. Use Resend's test address only. Show me the email it sends.
```

**Launch prep**
```
Run the full audit: Chrome DevTools performance + Lighthouse on Home, a project and a town page in each
locale; check hreflang, canonicals, sitemap, JSON-LD (validate structure), alt texts, contrast, keyboard.
List every concept project still live. Then create a Vercel preview deployment and give me the URL.
Do not promote to production.
```
