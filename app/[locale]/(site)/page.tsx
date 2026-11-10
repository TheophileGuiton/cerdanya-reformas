import { getTranslations } from "next-intl/server";
import { ProjectImage } from "@/components/ProjectImage";

// Home hero only. The remaining sections arrive in the Home phase.
export default async function HomePage() {
  const t = await getTranslations("home");

  return (
    <div className="wrap pb-section">
      <figure>
        <ProjectImage
          slug="casa-pairal-alp"
          name="living"
          alt={t("heroAlt")}
          priority
          sizes="(min-width: 1440px) 1328px, calc(100vw - 2 * var(--spacing-margin))"
          className="aspect-[4/3] max-h-[64svh] min-h-75 w-full md:aspect-[21/10]"
        />
        <figcaption className="pt-2.5 text-note font-medium text-bark">
          {t("heroCaption")}
        </figcaption>
      </figure>

      <div className="grid items-end gap-6 pt-7 md:grid-cols-[7fr_5fr] md:gap-18 md:pt-11">
        <h1 className="font-display text-display-xl">
          <span className="block">{t("headline")}</span>
          <span className="mt-5 block font-sans text-small font-semibold tracking-normal text-loden">
            {t("keyword")}
          </span>
        </h1>
        <p className="max-w-[44ch] text-body-l text-bark">{t("intro")}</p>
      </div>
    </div>
  );
}
