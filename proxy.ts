import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Locale detection (Accept-Language on the first visit, cookie afterwards),
// the "/" → "/es" redirect and the localized pathnames from SEO.md.
export default createMiddleware(routing);

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
