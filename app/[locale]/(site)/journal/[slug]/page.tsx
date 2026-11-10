import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { ContactBand } from "@/components/sections/ContactBand";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getArticle, getArticleBody, getPublishedArticles } from "@/lib/content/journal";

type Props = PageProps<"/[locale]/journal/[slug]">;

export function generateStaticParams() {
  return getPublishedArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const t = await getTranslations("journal");
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    title: t("metaArticle", { title: article.title[locale] }),
    description: article.description[locale],
    href: () => ({ pathname: "/journal/[slug]", params: { slug } }),
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const t = await getTranslations("journal");
  const locale = (await getLocale()) as Locale;
  const Body = await getArticleBody(article.slug, locale);
  const date = new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(`${article.date}T00:00:00Z`),
  );

  return (
    <>
      <article className="wrap pt-8 pb-section md:pt-12">
        <p className="mb-8 text-small">
          <Link href="/journal" className="text-bark underline underline-offset-4">
            {t("back")}
          </Link>
        </p>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-display-l">{article.title[locale]}</h1>
          <p className="mt-5 text-body-l text-bark">{article.description[locale]}</p>
          <p className="mt-4 text-note font-medium text-bark">
            <time dateTime={article.date}>{t("published", { date })}</time>
          </p>
          <div className="mt-4">
            <Body />
          </div>
        </div>
      </article>
      <ContactBand />
    </>
  );
}
