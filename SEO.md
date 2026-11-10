# SEO.md — keywords, URLs, pages

> Volumes are not verified. Validate in Google Ads Keyword Planner (Cerdanya Privé account) and Search Console after launch, then re-prioritize.

## Principles
- One page = one main intent. Don't target the same query on two pages.
- Spanish is the default and the main search language; Catalan and French pages are full equivalents, not thin translations.
- Town pages must have genuinely unique content (houses typical of that town, local permit notes, one project there, distances, specifics) — no copy-paste "doorway" pages.
- Real address + Google Business Profile for the reform unit, with consistent name/address/phone across the site, GBP and Cerdanya Privé.
- **Separate domain = zero authority at launch.** Compensate with: links from cerdanyaprive.com (menu, footer, owner pages, blog posts), a Google Business Profile for Cerdanya Reformes, listings in local directories (Habitissimo, Houzz, Pages Jaunes for the French side, town-hall/business association directories), links from partner trades and estate agents, and Google Ads on the main queries while organic grows.
- If the domain was ever used before, check its history before buying.

## URL map (localized pathnames)
| Page | es | ca | fr |
|---|---|---|---|
| Home | `/es` | `/ca` | `/fr` |
| Projects | `/es/proyectos` | `/ca/projectes` | `/fr/projets` |
| Project | `/es/proyectos/[slug]` | `/ca/projectes/[slug]` | `/fr/projets/[slug]` |
| Services | `/es/servicios` | `/ca/serveis` | `/fr/services` |
| Service | `/es/servicios/[slug]` | `/ca/serveis/[slug]` | `/fr/services/[slug]` |
| Town | `/es/reformas-[town]` | `/ca/reformes-[town]` | `/fr/renovation-[town]` |
| Method | `/es/metodo` | `/ca/metode` | `/fr/methode` |
| About | `/es/nosotros` | `/ca/nosaltres` | `/fr/a-propos` |
| Journal | `/es/journal` | `/ca/journal` | `/fr/journal` |
| Contact | `/es/contacto` | `/ca/contacte` | `/fr/contact` |
| Legal | `/es/aviso-legal`, `/es/privacidad`, `/es/cookies` | `/ca/avis-legal`, `/ca/privacitat`, `/ca/galetes` | `/fr/mentions-legales`, `/fr/confidentialite`, `/fr/cookies` |

Root `/` → redirect to detected locale (default `/es`); `x-default` → `/es`.

## Keyword → page mapping
| Page | ES (primary first) | CA | FR |
|---|---|---|---|
| Home | reformas Cerdanya · empresa de reformas Cerdanya · reformas de lujo Cerdanya | reformes Cerdanya · empresa de reformes Cerdanya | rénovation Cerdagne · entreprise rénovation Cerdagne · rénovation chalet Pyrénées-Orientales |
| Service: reforma integral chalets | reforma integral chalet Cerdanya · reformar chalet Pirineo | reforma integral xalet Cerdanya | rénovation chalet Cerdagne · rénovation complète chalet Pyrénées |
| Service: casas de piedra | rehabilitación casa de piedra Cerdanya · reformar borda | rehabilitació casa de pedra · reformar borda | rénovation maison en pierre Cerdagne · rénovation grange |
| Service: interiorismo | interiorismo Cerdanya · interiorista Puigcerdà | interiorisme Cerdanya | architecte d'intérieur Cerdagne · décoration chalet |
| Service: cocinas y baños | reforma cocina Puigcerdà · reforma baño Cerdanya | reforma cuina Puigcerdà | rénovation cuisine Puigcerdà |
| Service: wellness | sauna en casa Cerdanya · piscina interior chalet | sauna a casa Cerdanya | sauna chalet Cerdagne · piscine intérieure chalet |
| Service: eficiencia | aerotermia Cerdanya · aislamiento casa montaña · suelo radiante reforma | aerotèrmia Cerdanya · aïllament casa muntanya | pompe à chaleur Cerdagne · isolation chalet montagne |
| Service: llave en mano | reforma llave en mano Cerdanya · gestión de obra a distancia | reforma clau en mà Cerdanya | rénovation clé en main Cerdagne |
| Town: Puigcerdà | reformas Puigcerdà · reformas casas Puigcerdà · empresa reformas Puigcerdà | reformes Puigcerdà · reformes cases Puigcerdà | rénovation maison Puigcerdà |
| Town: Alp | reformas Alp · reformas chalet Alp La Molina | reformes Alp | rénovation chalet Alp La Molina |
| Town: Bolvir–Fontanals | reformas Bolvir · reformas Fontanals golf | reformes Bolvir · Fontanals | rénovation Bolvir |
| Town: Llívia | reformas Llívia | reformes Llívia | rénovation Llívia |
| Town: Bellver | reformas Bellver de Cerdanya | reformes Bellver de Cerdanya | rénovation Bellver de Cerdanya |
| Town: Das–Urús | reformas Das · reformas Urús | reformes Das · Urús | rénovation Das |
| Town (FR): Font-Romeu–Bolquère | reformas Font-Romeu | reformes Font-Romeu | rénovation chalet Font-Romeu · rénovation appartement Font-Romeu · rénovation Bolquère |
| Town (FR): Bourg-Madame | reformas Bourg-Madame | reformes Bourg-Madame | rénovation maison Bourg-Madame · entreprise rénovation Bourg-Madame |
| Town (FR): Saillagouse–Err | — | reformes Saillagouse | rénovation Saillagouse · rénovation Err |
| Town (FR): Osséja–Palau | — | reformes Osséja | rénovation Osséja · rénovation maison Palau-de-Cerdagne |
| Projects | proyectos reformas Cerdanya · chalets reformados Cerdanya | projectes reformes Cerdanya | réalisations rénovation Cerdagne |

## Title / description patterns
- Home ES: `Reformas en la Cerdanya · Chalets y casas de piedra | Cerdanya Reformes` — "Reforma integral de chalets y casas de montaña en Puigcerdà, Alp, Llívia y la Cerdanya francesa. Diseño, obra y llave en mano para propietarios a distancia."
- Town ES: `Reformas en Puigcerdà · Casas y chalets | Cerdanya Reformes`
- FR Home: `Rénovation en Cerdagne · Chalets et maisons en pierre | Cerdanya Reformes`
- Titles ≤ 60 chars where possible; descriptions 140–160 chars; one H1 per page containing the primary keyword naturally.

## Journal — first articles (useful, not filler)
1. ¿Cuánto cuesta reformar un chalet en la Cerdanya? Rangos por m² y qué los mueve (estimates, clearly labeled as ranges).
2. Licencias y permisos de obra en la Cerdanya: qué pedir y en qué orden (verify with town halls before publishing).
3. Normas de fachada y cubierta en la Cerdanya: piedra, pizarra, teja y madera.
4. Obras en montaña: la mejor época del año y cómo planificar el invierno.
5. Reformar para alquilar: lo que piden los huéspedes de un chalet premium (synergy with Cerdanya Privé).
6. Calefacción en una casa de montaña: aerotermia, suelo radiante y recuperación de calor.
7. FR: Acheter et rénover un chalet en Cerdagne espagnole : guide pour les acheteurs français.
8. FR: Rénover un chalet à Font-Romeu : copropriété, saison, matériaux (verify local rules before publishing).
Translate each into the other two locales; adapt, don't just translate.

## Technical
- `generateMetadata` per page; canonical + `alternates.languages`.
- `sitemap.ts` (exclude concept projects), `robots.ts`.
- JSON-LD as listed in CLAUDE.md. `areaServed`: each town as `City`/`Place` with `addressCountry` ES or FR.
- Open Graph images 1200×630 per page (project cover or branded fallback).
- Core Web Vitals: hero image priority + correct `sizes`; fonts preloaded; no layout shift from the header or WhatsApp button.
- Search Console + Bing Webmaster after launch; submit sitemap.
