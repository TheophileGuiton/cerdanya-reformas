import { getTranslations } from "next-intl/server";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { ProjectImage } from "@/components/ProjectImage";

// Scaffold-phase Home: the shell is deliberately bare. Header, sections and
// footer arrive in the next phases.
export default async function HomePage() {
  const t = await getTranslations();

  return (
    <>
      <header className="wrap flex items-center justify-between py-4 md:py-6">
        <Logo />
        <LanguageSwitcher />
      </header>

      <main className="wrap flex-1 pb-section">
        <figure>
          <ProjectImage
            slug="casa-pairal-alp"
            name="living"
            alt={t("home.heroAlt")}
            priority
            sizes="(min-width: 1440px) 1328px, calc(100vw - 2 * var(--spacing-margin))"
            className="aspect-[4/3] max-h-[64svh] min-h-75 w-full md:aspect-[21/10]"
          />
          <figcaption className="pt-2.5 text-note font-medium text-bark">
            {t("home.heroCaption")}
          </figcaption>
        </figure>

        <div className="grid items-end gap-6 pt-7 md:grid-cols-[7fr_5fr] md:gap-18 md:pt-11">
          <h1>
            <span className="mb-4 block text-[0.875rem] leading-snug font-semibold text-loden">
              {t("home.keyword")}
            </span>
            <span className="block font-display text-display-xl">
              {t("home.headline")}
            </span>
          </h1>
          <p className="max-w-[44ch] text-body-l text-bark">{t("home.intro")}</p>
        </div>
      </main>

      <footer className="wrap border-t border-granite py-8">
        <p className="font-display text-display-m">{t("footer.statement")}</p>
      </footer>
    </>
  );
}
