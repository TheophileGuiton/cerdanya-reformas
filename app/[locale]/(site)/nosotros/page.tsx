import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PendingNote } from "@/components/PendingNote";
import { ContactBand } from "@/components/sections/ContactBand";

const parentUrl = process.env.NEXT_PUBLIC_PARENT_URL ?? "https://cerdanyaprive.com";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function AboutPage() {
  const t = await getTranslations("about");
  const blocks = ["why", "area"] as const;

  return (
    <>
      <article className="wrap pt-10 pb-section md:pt-16">
        <div className="grid items-end gap-5 md:grid-cols-[7fr_5fr] md:gap-18">
          <h1 className="font-display text-display-xl">{t("title")}</h1>
          <p className="max-w-[44ch] text-body-l text-bark">{t("intro")}</p>
        </div>

        <div className="mt-section border-t border-walnut">
          {blocks.map((block) => (
            <section
              key={block}
              className="grid gap-x-18 gap-y-4 border-b border-granite py-10 md:grid-cols-[5fr_7fr]"
            >
              <h2 className="font-display text-display-l">{t(`${block}.title`)}</h2>
              <p className="max-w-[60ch] text-body-l text-bark">{t(`${block}.text`)}</p>
            </section>
          ))}
          <section className="grid gap-x-18 gap-y-4 border-b border-granite py-10 md:grid-cols-[5fr_7fr]">
            <h2 className="font-display text-display-l">{t("parent.title")}</h2>
            <div>
              <p className="max-w-[60ch] text-body-l text-bark">{t("parent.text")}</p>
              <p className="mt-6">
                <a href={parentUrl} className="link-underline">
                  {t("parent.link")}
                </a>
              </p>
            </div>
          </section>
          <section className="grid gap-x-18 gap-y-4 py-10 md:grid-cols-[5fr_7fr]">
            <h2 className="font-display text-display-l">{t("team.title")}</h2>
            <PendingNote>{t("team.pending")}</PendingNote>
          </section>
        </div>
      </article>
      <ContactBand />
    </>
  );
}
