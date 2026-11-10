import { z } from "zod";
import { projectMetaSchema, type ProjectMeta } from "@/lib/content/schemas";
import { meta as casaPairalAlp } from "./casa-pairal-alp/meta";
import { meta as xaletFontanals } from "./xalet-fontanals/meta";
import { meta as bordaMeranges } from "./borda-meranges/meta";
import { meta as aticLlacPuigcerda } from "./atic-llac-puigcerda/meta";
import { meta as casaPatiBellver } from "./casa-pati-bellver/meta";
import { meta as xaletLliviaWellness } from "./xalet-llivia-wellness/meta";
import { meta as chaletFontRomeu } from "./chalet-font-romeu/meta";

// Order = display order on the site.
export const projects: ProjectMeta[] = z
  .array(projectMetaSchema)
  .parse([casaPairalAlp, xaletFontanals, bordaMeranges, aticLlacPuigcerda, casaPatiBellver, xaletLliviaWellness, chaletFontRomeu]);
