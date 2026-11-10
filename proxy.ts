import { NextResponse, type NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { articles } from "./content/journal";
import { projects } from "./content/projects";
import { servicesData } from "./content/services.data";
import { routing } from "./i18n/routing";

// Locale detection (Accept-Language on the first visit, cookie afterwards),
// the "/" → "/es" redirect and the localized pathnames from SEO.md.
const handleI18n = createMiddleware(routing);

const projectSlugs = new Set(projects.map((project) => project.slug));
const projectPath = /^\/(es|ca|fr)\/(?:proyectos|projectes|projets)\/([^/]+)\/?$/;

const articleSlugs = new Set(articles.filter((a) => !a.draft).map((a) => a.slug));
const articlePath = /^\/(es|ca|fr)\/journal\/([^/]+)\/?$/;
const servicePath = /^\/(es|ca|fr)\/(?:servicios|serveis|services)\/([^/]+)\/?$/;

export default function proxy(request: NextRequest) {
  // A project or service URL with an unknown slug must answer with a real 404
  // status. Those pages stream, so the request is sent to the catch-all
  // route, which returns the localized 404 page with the right status.
  const { pathname } = request.nextUrl;
  const project = projectPath.exec(pathname);
  if (project && !projectSlugs.has(project[2])) {
    return NextResponse.rewrite(new URL(`/${project[1]}/404`, request.url));
  }
  const article = articlePath.exec(pathname);
  if (article && !articleSlugs.has(article[2])) {
    return NextResponse.rewrite(new URL(`/${article[1]}/404`, request.url));
  }
  const service = servicePath.exec(pathname);
  if (service) {
    const locale = service[1] as "es" | "ca" | "fr";
    if (!servicesData.some((item) => item.slug[locale] === service[2])) {
      return NextResponse.rewrite(new URL(`/${locale}/404`, request.url));
    }
  }
  return handleI18n(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
