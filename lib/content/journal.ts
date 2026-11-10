import type { ComponentType } from "react";
import { articles } from "@/content/journal";
import type { Locale } from "@/i18n/routing";
import type { Article } from "./schemas";

export function getPublishedArticles(): Article[] {
  return articles.filter((article) => !article.draft);
}

export function getDraftArticles(): Article[] {
  return articles.filter((article) => article.draft);
}

export function getArticle(slug: string): Article | undefined {
  return getPublishedArticles().find((article) => article.slug === slug);
}

export async function getArticleBody(slug: string, locale: Locale): Promise<ComponentType> {
  const mdx = await import(`@/content/journal/${slug}/${locale}.mdx`);
  return mdx.default;
}
