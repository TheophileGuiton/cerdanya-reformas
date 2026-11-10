import { getTranslations } from "next-intl/server";

const items = ["0", "1", "2"] as const;

export async function WhyUs() {
  const t = await getTranslations("home.why");

  return (
    <section aria-labelledby="why-title" className="wrap pb-section">
      <h2 id="why-title" className="max-w-[20ch] font-display text-display-l">
        {t("title")}
      </h2>
      <ul className="mt-10 grid gap-x-12 gap-y-8 md:mt-12 md:grid-cols-3">
        {items.map((i) => (
          <li key={i} className="border-t border-granite pt-6">
            <h3 className="font-serif text-title">{t(`items.${i}.title`)}</h3>
            <p className="mt-3 text-bark">{t(`items.${i}.text`)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
