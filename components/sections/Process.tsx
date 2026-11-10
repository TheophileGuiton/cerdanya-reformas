import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SectionHead } from "./SectionHead";

const steps = ["0", "1", "2", "3"] as const;

// Short version for Home: the four stages in order. The Method page tells the rest.
export async function Process() {
  const t = await getTranslations("home.method");

  return (
    <section aria-labelledby="method-title" className="bg-lime py-section">
      <div className="wrap">
        <SectionHead id="method-title" title={t("title")}>
          <Link href="/metodo" className="text-walnut link-underline">
            {t("link")}
          </Link>
        </SectionHead>
        <ol className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((i, index) => (
            <li key={i} className="border-t border-walnut pt-5">
              <span className="font-serif text-title text-bark tabular-nums">
                {index + 1}
              </span>
              <h3 className="mt-2 font-serif text-title">{t(`steps.${i}.title`)}</h3>
              <p className="mt-2 text-small text-bark">{t(`steps.${i}.text`)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
