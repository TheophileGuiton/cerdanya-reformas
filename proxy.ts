import { NextResponse, type NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { projects } from "./content/projects";
import { routing } from "./i18n/routing";

// Locale detection (Accept-Language on the first visit, cookie afterwards),
// the "/" → "/es" redirect and the localized pathnames from SEO.md.
const handleI18n = createMiddleware(routing);

const projectSlugs = new Set(projects.map((project) => project.slug));
const projectPath = /^\/(es|ca|fr)\/(?:proyectos|projectes|projets)\/([^/]+)\/?$/;

export default function proxy(request: NextRequest) {
  // A project URL with an unknown slug must answer with a real 404 status.
  // The page itself streams, so it is sent to the catch-all route, which
  // returns the localized 404 page with the right status.
  const match = projectPath.exec(request.nextUrl.pathname);
  if (match && !projectSlugs.has(match[2])) {
    return NextResponse.rewrite(new URL(`/${match[1]}/404`, request.url));
  }
  return handleI18n(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
