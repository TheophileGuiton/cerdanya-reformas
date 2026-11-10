import { getTranslations } from "next-intl/server";
import { SectionHead } from "./SectionHead";

// One swatch per material, in the order of DESIGN.md. Flat colour until
// material detail photographs exist.
const swatches = [
  { key: "0", color: "bg-granite" },
  { key: "1", color: "bg-oak" },
  { key: "2", color: "bg-timber" },
  { key: "3", color: "bg-iron" },
  { key: "4", color: "bg-fleece" },
  { key: "5", color: "bg-wool border border-granite" },
] as const;

export async function MaterialsStrip() {
  const t = await getTranslations("home.materials");

  return (
    <section aria-labelledby="materials-title" className="bg-lime py-section">
      <div className="wrap">
        <SectionHead id="materials-title" title={t("title")}>
          <p>{t("text")}</p>
        </SectionHead>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-5">
          {swatches.map(({ key, color }) => (
            <li key={key}>
              <div aria-hidden="true" className={`aspect-[3/2] lg:aspect-[4/5] ${color}`} />
              <h3 className="mt-3.5 font-serif text-title">{t(`items.${key}.name`)}</h3>
              <p className="mt-1 text-small text-bark">{t(`items.${key}.use`)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
