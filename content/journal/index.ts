import { z } from "zod";
import { articlesData } from "./articles.data";
import { articleSchema, type Article } from "@/lib/content/schemas";

// Journal articles from SEO.md. Drafts are not published: they have no page,
// are not listed and stay out of the sitemap. For a draft, "description" says
// what must be verified or supplied before it can be written and published.
export const articles: Article[] = z.array(articleSchema).parse(articlesData);
