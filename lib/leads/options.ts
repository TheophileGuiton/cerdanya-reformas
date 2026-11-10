// Option values of the lead form (PRODUCT.md → "Lead form"). Labels live in
// messages/*.json under lead.options, keyed by these values.
export const houseTypes = ["chalet", "casa-de-piedra", "borda", "atico", "otro"] as const;
export const surfaces = ["lt150", "150-300", "300-500", "gt500"] as const;
export const projectTypes = [
  "integral",
  "parcial",
  "interiorismo",
  "cocina-banos",
  "wellness",
  "eficiencia",
] as const;
export const budgets = ["lt150k", "150-300k", "300-600k", "gt600k", "unknown"] as const;
export const timings = ["asap", "3-6", "6-12", "exploring"] as const;
export const ownerStates = ["yes", "buying", "searching"] as const;

/** Municipalities offered in the form, Spanish side first. "otro" is added by the form. */
export const leadTowns = [
  "Puigcerdà", "Alp", "Bolvir", "Fontanals de Cerdanya", "Llívia", "Bellver de Cerdanya",
  "Das", "Urús", "Prats i Sansor", "Ger", "Isòvol", "Meranges",
  "Font-Romeu", "Bolquère", "Bourg-Madame", "Saillagouse", "Err", "Osséja",
  "Palau-de-Cerdagne", "Estavar", "Targassonne", "Égat", "Ur", "Enveitg", "Latour-de-Carol",
] as const;
