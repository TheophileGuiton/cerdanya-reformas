import { getTranslations } from "next-intl/server";
import { ProjectImage } from "@/components/ProjectImage";
import { Link } from "@/i18n/navigation";

const phone = process.env.NEXT_PUBLIC_PHONE ?? "+34 625 01 43 88";

// The room first, then the words.
export async function Hero() {
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
        <div>
          <p className="max-w-[44ch] text-body-l text-bark">{t("intro")}</p>
          <p className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link href="/contacto" className="link-underline">
              {t("contact.cta")}
            </Link>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="font-serif text-[1.375rem] leading-none tabular-nums no-underline"
            >
              {phone}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
