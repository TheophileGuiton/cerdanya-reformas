import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getTranslations } from "next-intl/server";
import { PendingNote } from "@/components/PendingNote";
import { ContactBand } from "@/components/sections/ContactBand";

const steps = ["0", "1", "2", "3", "4", "5"] as const;
const remote = ["0", "1", "2"] as const;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("method");
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    href: () => "/metodo",
  });
}

export default async function MethodPage() {
  const t = await getTranslations("method");

  return (
    <>
      <article className="wrap pt-10 pb-section md:pt-16">
        <div className="grid items-end gap-5 md:grid-cols-[7fr_5fr] md:gap-18">
          <h1 className="font-display text-display-xl">{t("title")}</h1>
          <p className="max-w-[44ch] text-body-l text-bark">{t("intro")}</p>
        </div>

        <ol className="mt-section border-t border-walnut">
          {steps.map((i, index) => (
            <li
              key={i}
              className="grid gap-x-6 gap-y-2 border-b border-granite py-7 md:grid-cols-[1fr_4fr_7fr]"
            >
              <span className="font-serif text-title text-bark tabular-nums">{index + 1}</span>
              <h2 className="font-display text-display-m">{t(`steps.${i}.title`)}</h2>
              <p className="max-w-[60ch] text-bark">{t(`steps.${i}.text`)}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8">
          <PendingNote>{t("pending")}</PendingNote>
        </div>

        <section aria-labelledby="remote" className="mt-section">
          <h2 id="remote" className="mb-8 font-display text-display-l">
            {t("remote.title")}
          </h2>
          <ul className="grid gap-x-12 gap-y-8 md:grid-cols-3">
            {remote.map((i) => (
              <li key={i} className="border-t border-granite pt-5">
                <h3 className="font-serif text-title">{t(`remote.items.${i}.title`)}</h3>
                <p className="mt-2 text-bark">{t(`remote.items.${i}.text`)}</p>
              </li>
            ))}
          </ul>
        </section>
      </article>
      <ContactBand />
    </>
  );
}
