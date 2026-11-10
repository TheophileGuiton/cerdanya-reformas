# Cerdanya Reformes · Website

> Brand: **Cerdanya Reformes**, with the endorsement line **"by Cerdanya Privé"**. Same name in all three languages. Own domain (`NEXT_PUBLIC_SITE_URL`), separate from cerdanyaprive.com.
> Read this file, PRODUCT.md, DESIGN.md, SEO.md and content-seed/ before any work. If a request conflicts with these files, ask before deviating.

## What this is
The renovation brand of Cerdanya Privé (cerdanyaprive.com, luxury holiday-rental management in La Cerdanya), on its own domain. The endorsement "by Cerdanya Privé" appears in the logo lockup, the footer and the About page, and links to cerdanyaprive.com.
We work on both sides of the border: Spanish Cerdanya and French Cerdagne.
We renovate luxury mountain chalets and stone houses worth €600k–3M for owners who mostly live in Barcelona or France.
The site must feel as premium as the houses — and as rooted as the valley: stone, slate, larch and fir, iron, wool, the Cadí on the horizon.
Goal: qualified leads (form + WhatsApp) and local SEO ("reformas Cerdanya", "reformas casas Puigcerdà", "rénovation chalet Cerdagne", "rénovation Font-Romeu"…). Phone/WhatsApp: +34 625 01 43 88.

## Stack (do not change without asking)
- Next.js (App Router), TypeScript strict, pnpm, ESLint.
- Tailwind CSS v4 — colors, fonts, spacing, radii, motion ONLY from DESIGN.md tokens in `app/globals.css` `@theme`. No ad-hoc hex values.
- next-intl — locales **`es` (default), `ca`, `fr`**. Routes under `app/[locale]/`. All UI strings in `messages/{es,ca,fr}.json`. Localized pathnames (see SEO.md).
- Content: **file-based for v1** (no CMS). Projects as MDX in `content/projects/{slug}/{es,ca,fr}.mdx` + a typed `meta.ts`; services and towns as typed data in `content/`. Validate with zod at build time.
- Images: `next/image`, AVIF/WebP, explicit `sizes`, blur placeholders. Photos live in `public/images/projects/{slug}/` (naming in `content-seed/image-prompts.md`). For v1 these are **AI-generated concept images**; every one carries a small caption mention "Imagen generada con IA / Imatge generada amb IA / Image générée par IA". If an expected file is missing, render `<PlaceholderImage>` (stone block, correct ratio, caption) so the build never breaks. Never hotlink web images or use photos of real houses we did not renovate.
- Motion: GSAP + ScrollTrigger (+ SplitText for headings), Lenis smooth scroll. Everything off under `prefers-reduced-motion`.
- shadcn/ui only for primitives (Sheet, Dialog, Form, Input, Select, Textarea, Checkbox, Label). Restyle to tokens.
- Lead form: Server Action + zod validation + Resend email to `CONTACT_TO_EMAIL` + honeypot + Cloudflare Turnstile + basic rate limiting. Optional webhook (`LEAD_WEBHOOK_URL`) to push leads to a sheet/CRM.
- Analytics: GA4 + Google Ads conversion via Consent Mode v2, loaded only after consent. Track `generate_lead` (form success) and `whatsapp_click`.
- Deploy: Vercel. Preview per branch.

## Structure
```
app/[locale]/(site)/           pages
app/api/                       only if a route handler is unavoidable
components/sections/           Hero, ProjectGrid, ProjectCaseStudy, BeforeAfter, ServicesList, Process, TownIntro, LeadForm, CTA…
components/ui/                 restyled shadcn primitives
components/motion/             LenisProvider, reveal hooks
components/WhatsAppButton.tsx  floating button, localized prefilled message
content/projects/              MDX per project and locale + meta.ts
content/services.ts            services (see PRODUCT.md)
content/towns.ts               town landing data (see SEO.md)
lib/seo/                       metadata helpers, JSON-LD builders
messages/                      es.json ca.json fr.json
public/images/                 project images (AI concept images for v1, real photos later)
references/                    inspiration screenshots (read-only)
content-seed/                  source briefs for fake projects (read-only)
```

## Pages
1. Home
2. Proyectos (index, filter by type: chalet / casa de piedra / borda / ático)
3. Proyecto (case study)
4. Servicios (index) + one page per service
5. Zonas: one landing per town — Spanish side: Puigcerdà, Alp, Bolvir–Fontanals, Llívia, Bellver de Cerdanya, Das–Urús; French side: Font-Romeu–Bolquère, Bourg-Madame, Saillagouse–Err, Osséja–Palau — unique content each, see SEO.md
6. Método (process: from first visit to keys — and rental, if they want)
7. Sobre nosotros (the team, the link with Cerdanya Privé)
8. Journal (articles from SEO.md)
9. Contacto (lead form + WhatsApp + phone)
10. Legal: Aviso legal, Privacidad, Cookies

## Placeholder projects — honesty rule
- The 7 projects in `content-seed/projects.md` are **fictional placeholders** illustrated with AI images. Each has `isConcept: true` in meta.
- While `isConcept` is true, show a discreet label "Proyecto conceptual / Projecte conceptual / Projet conceptuel" and exclude it from `CreativeWork` JSON-LD and from the sitemap.
- Never invent testimonials, client names, reviews, ratings, awards, press mentions or "years of experience" figures.
- A build-time warning lists any concept projects still live, so we remember to replace them before launch.

## Design rules (details in DESIGN.md)
- Luxury = restraint. Big photography, generous space, small precise type, slow motion.
- Mountain tradition, not rustic kitsch: stone, slate, larch, fir, oak, iron, wool. No fake log-cabin textures, no antlers, no snowflake icons, no "chalet" clip-art.
- One serif display + one grotesk text. Never Inter/Roboto as display.
- No rounded corners on photos, no drop shadows, no gradients except a subtle legibility scrim on hero text.
- Banned: purple/blue gradients, glassmorphism, bento grids, emoji, icon-card grids, star ratings, countdowns, popups, chat widgets (WhatsApp button is the exception).
- Copy: calm and specific (materials, light, views, comfort, time). No exclamation marks, no "the best", no "unique", don't use "lujo/luxe/luxe" as a selling adjective — show it.

## Lead capture
- Lead form appears on Contact, at the end of every project and service page, and as a short version on Home.
- Fields and options: see PRODUCT.md → "Lead form". GDPR consent checkbox unchecked by default, link to privacy policy, first-layer info text under the button.
- Success state: localized thank-you message + "we'll call you within 24 working hours" + WhatsApp shortcut. Fire `generate_lead`.
- WhatsApp: floating bottom-right button (ink circle, white glyph, 56px, ≥ 24px from edges, hidden while the mobile menu is open), `https://wa.me/${NEXT_PUBLIC_WHATSAPP_NUMBER}?text=` + localized prefilled message including the current page title. Fire `whatsapp_click`.

## i18n
- `es` default; `ca` and `fr` complete. Language switcher `ES · CA · FR` always visible. Accept-Language detection on first visit only.
- hreflang alternates (`es-ES`, `ca-ES`, `fr-FR`) + `x-default` → es. Localized metadata, slugs, alt text.
- French copy addresses French buyers (Cerdagne vocabulary: "Cerdagne espagnole", "chalet", "rénovation clé en main"). Catalan is the local language — use proper Catalan (l·l, accents), not translated Spanish.
- After adding strings, list every new key in the summary so a native speaker can review.

## SEO (details in SEO.md)
- Metadata API per page and locale; unique title/description per page from SEO.md.
- JSON-LD: `GeneralContractor` (+ `HomeAndConstructionBusiness`) with `parentOrganization` Cerdanya Privé (url cerdanyaprive.com), `telephone` +34 625 01 43 88, `areaServed` = every town page, Spanish (ES) and French (FR); `Service` per service; `BreadcrumbList`; `CreativeWork` per real (non-concept) project; `FAQPage` only where an FAQ is visible.
- `sitemap.ts` with alternates, `robots.ts`, canonical URLs, Open Graph image per page.

## Quality gates — before saying "done"
1. `pnpm lint && pnpm typecheck && pnpm build` pass.
2. Playwright screenshots of each changed page at 390 / 1024 / 1440 px in all three locales, saved to `.screenshots/`, compared with `references/`. Describe differences honestly.
3. Chrome DevTools on Home + one Project page: LCP < 2.5s, CLS < 0.1, no console errors.
4. Keyboard navigation, visible focus, AA contrast, localized alt text, form errors announced.
5. UI changes: `/impeccable critique` then `/impeccable polish`.

## Working rules
- Use Context7 for Next.js, next-intl, Tailwind v4, GSAP, Lenis, Resend, zod.
- One page or section per step; show screenshots before moving on. Small commits.
- Never deploy to production, change Vercel/domain settings or send test emails to real addresses without asking.
- Never commit `.env*` or secrets.
