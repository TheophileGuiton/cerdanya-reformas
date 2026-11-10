import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { ContactBand } from "@/components/sections/ContactBand";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getPublishedArticles } from "@/lib/content/journal";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("journal");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function JournalPage() {
  const t = await getTranslations("journal");
  const locale = (await getLocale()) as Locale;

  return (
    <>
      <div className="wrap pt-10 pb-section md:pt-16">
        <div className="mb-12 grid items-end gap-5 md:mb-16 md:grid-cols-[7fr_5fr] md:gap-18">
          <h1 className="font-display text-display-xl">{t("title")}</h1>
          <p className="max-w-[44ch] text-bark">{t("intro")}</p>
        </div>
        <ul className="border-t border-walnut">
          {getPublishedArticles().map((article) => (
            <li key={article.slug} className="border-b border-granite">
              <Link
                href={{ pathname: "/journal/[slug]", params: { slug: article.slug } }}
                className="group grid items-baseline gap-x-6 gap-y-2 py-7 no-underline md:grid-cols-[7fr_5fr]"
              >
                <h2 className="font-display text-display-m transition-colors duration-(--dur-fast) group-hover:text-loden">
                  {article.title[locale]}
                </h2>
                <p className="text-bark">{article.description[locale]}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ContactBand />
    </>
  );
}
