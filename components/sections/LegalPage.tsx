import { getTranslations } from "next-intl/server";
import { PendingNote } from "@/components/PendingNote";

type Props = { page: "notice" | "privacy" | "cookies"; sections: readonly string[] };

// Shared layout of the three legal pages. They are drafts until the legal
// entity is confirmed and an adviser has reviewed them.
export async function LegalPage({ page, sections }: Props) {
  const t = await getTranslations("legal");

  return (
    <article className="wrap pt-10 pb-section md:pt-16">
      <h1 className="font-display text-display-xl">{t(`${page}.title`)}</h1>
      <div className="mt-8">
        <PendingNote>{t("pending")}</PendingNote>
      </div>
      <div className="mt-12 border-t border-walnut">
        {sections.map((key) => (
          <section
            key={key}
            className="grid gap-x-18 gap-y-3 border-b border-granite py-8 md:grid-cols-[5fr_7fr]"
          >
            {/* @ts-expect-error -- section keys are checked against the messages at build time */}
            <h2 className="font-display text-display-m">{t(`${page}.sections.${key}.title`)}</h2>
            {/* @ts-expect-error -- as above */}
            <p className="max-w-[60ch] text-bark">{t(`${page}.sections.${key}.text`)}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
