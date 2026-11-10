# AI image prompts — concept projects

> Use ONE image model for the whole set so the houses feel like they come from the same studio and photographer. Generate several variants per prompt, keep the most believable, then upscale.
> Every image is shown on the site with "Imagen generada con IA · Proyecto conceptual" (localized).

## Technical rules
- Long side ≥ 2400 px, exported as high-quality JPG (Next.js converts to AVIF/WebP).
- Save to `public/images/projects/{slug}/{name}.jpg` using the exact names below.
- Ratios: `hero` 16:9 (+ `hero-mobile` 4:5 crop), interiors 3:2 or 4:5 as listed, details 1:1, `before-*` 3:2.
- Also generate one `cover.jpg` (4:5) per project for the project grid.

## Style block (append to every prompt)
```
architectural interior photography, shot on a full-frame camera with a 24mm tilt-shift lens, eye level,
straight verticals, natural light, soft shadows, realistic materials and textures, calm and uncluttered,
high-end mountain home in La Cerdanya (Eastern Pyrenees), Ceretan tradition: local granite, slate roofs,
larch and fir wood, oak floors, blackened iron, wool and linen, muted warm palette, editorial magazine look
```
## Negative / avoid (append or use as negative prompt)
```
no people, no text, no logos, no watermarks, no brand names, no animals, no fake log-cabin style,
no antlers or hunting trophies, no fairy lights, no oversaturated colors, no HDR halos, no fisheye,
no distorted windows or furniture, no surreal architecture, no recognisable real building
```
For **before** images replace the style block with:
```
documentary real-estate photo before renovation, flat daylight, slightly dated and tired interior,
honest and unglamorous, same room layout as the after image, no people, no text
```

---

## 1. casa-pairal-alp
| File | Ratio | Prompt |
|---|---|---|
| hero | 16:9 | Restored 19th-century stone family house (casa pairal) in a meadow near Alp, thick granite walls, steep slate roof, deep eaves, old wooden gate, new glazed gallery on the south side, Cadí mountains at golden hour, light snow on the peaks |
| cover | 4:5 | Same house, close view of the wooden gate and stone facade, late afternoon light |
| living | 3:2 | Open kitchen-living space inside a stone house, exposed granite walls, oak floor, central blackened-iron fireplace with a fire burning, low linen sofas, wool rug, large window to snowy mountains |
| kitchen | 3:2 | Minimal kitchen with long oak island and dark steel fronts, lime-plastered walls, exposed old timber beams, pendant iron lamps |
| gallery | 4:5 | Glazed gallery with larch frames, reading chairs, view over the Cerdanya valley and the Cadí range |
| sauna | 4:5 | Fir-wood sauna built in an old stone stable, small window to the forest, warm light |
| detail | 1:1 | Close-up of a granite wall meeting an oak floor and a blackened iron handle |
| before-1/2/3 | 3:2 | Dark, partitioned rooms in an old stone house, peeling paint, tired 1970s furniture, small windows / damaged attic under an old slate roof / unused stable with dirt floor |

## 2. xalet-fontanals
| File | Ratio | Prompt |
|---|---|---|
| hero | 16:9 | Double-height living room of a renovated mountain chalet, floor-to-ceiling windows to a golf course and snowy peaks, fir-panelled ceiling, oak floor, sculptural fireplace |
| cover | 4:5 | Exterior of a contemporary chalet with stone base, larch cladding and slate roof, wide new windows, winter dusk with warm interior light |
| kitchen | 3:2 | Kitchen island in oak and black steel, microcement floor, view to the mountains |
| bath | 4:5 | Master bathroom with freestanding stone bathtub in front of a large window to the valley, natural stone walls |
| terrace | 3:2 | Wooden terrace with outdoor lounge, mountain view, late summer evening |
| before-1/2/3 | 3:2 | Generic 2000s chalet living room with small windows and orange pine everywhere / dated kitchen / old bathroom with beige tiles |

## 3. borda-meranges
| File | Ratio | Prompt |
|---|---|---|
| hero | 16:9 | Restored stone barn (borda) in a high mountain meadow above Meranges, covered in fresh snow, slate roof, a few warmly lit openings, pine forest behind |
| cover | 4:5 | Same barn in summer, wildflowers, dry-stone walls |
| living | 4:5 | Double-height interior of a converted barn, original timber trusses, timber mezzanine for bedrooms, cast-iron wood stove, wool throws |
| mezzanine | 3:2 | Bedroom on a larch mezzanine under old roof beams, linen bedding |
| detail | 1:1 | Wood stove with logs against a dry-stone wall |
| before-1/2/3 | 3:2 | Abandoned hay barn interior with old hay and broken boards / exterior with missing slates / empty dusty upper floor |

## 4. atic-llac-puigcerda
| File | Ratio | Prompt |
|---|---|---|
| hero | 16:9 | Penthouse terrace in Puigcerdà with view over a small lake and the town rooftops to the Pyrenees, teak furniture, winter sun |
| cover | 4:5 | Living room of a penthouse with bespoke oak joinery wall (bookshelves), wool sofa, view to the mountains |
| kitchen | 3:2 | Open kitchen with long oak dining table, stone worktop, bronze details |
| bath | 4:5 | Bathroom in light local stone and fluted oak, soft daylight |
| detail | 1:1 | Close-up of fluted oak joinery and a bronze handle |

## 5. casa-pati-bellver
| File | Ratio | Prompt |
|---|---|---|
| hero | 16:9 | Inner courtyard of a renovated village stone house in Bellver de Cerdanya, terracotta floor, climbing plants, outdoor table, larch window frames, soft morning light |
| cover | 4:5 | Stone village facade with new larch windows and an old wooden door, narrow street |
| library | 3:2 | Library with floor-to-ceiling oak shelves, reading chair, deep stone window recess |
| detail | 1:1 | Triple-glazed larch window set in a thick stone wall |
| before-1/2 | 3:2 | Neglected courtyard with broken tiles and debris / cold room with damp walls and old electrics |

## 6. xalet-llivia-wellness
| File | Ratio | Prompt |
|---|---|---|
| hero | 16:9 | Indoor swimming pool in a mountain chalet basement, dark stone tiles, warm indirect light, long window to a snowy garden |
| cover | 4:5 | Large chalet near Llívia in snow, stone and wood, warm windows at blue hour |
| sauna | 4:5 | Contemporary sauna in dark fir with a glass wall to the pool |
| stairs | 4:5 | Sculptural staircase in blackened iron and oak |
| bedroom | 3:2 | Calm bedroom with wool and linen, wooden headboard, mountain view |
| skiroom | 3:2 | Ski room with oak benches, heated boot dryers, neatly hung skis and jackets (no people) |

## 7. chalet-font-romeu
| File | Ratio | Prompt |
|---|---|---|
| hero | 16:9 | Renovated 1970s ski chalet in Font-Romeu on a sunny winter day, larch cladding, new large south-facing windows, snow-covered pines, blue sky |
| cover | 4:5 | Same chalet front entrance with snow and a stone wall |
| living | 3:2 | Living room with suspended black fireplace, oak floor, large windows full of sun and snowy forest |
| skiroom | 3:2 | Entrance ski room with larch benches and storage |
| bedroom | 4:5 | Bedroom with larch walls and wool textiles, snowy view |
| before-1/2 | 3:2 | Dark 1970s chalet interior with heavy varnished wood and small windows / old entrance with clutter |

---

## Consistency checklist
- Same time-of-day logic within a project (hero and cover can differ, interiors consistent).
- Check windows, door frames, stair geometry and reflections for AI errors before using an image.
- Before/after pairs should share the camera position as much as possible.
- Keep the selected seeds/prompts in a `public/images/projects/{slug}/prompts.txt` so images can be regenerated.
