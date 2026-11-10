import type { Metadata } from "next";
import {
  Libre_Caslon_Display,
  Libre_Caslon_Text,
  Schibsted_Grotesk,
} from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { Analytics } from "@/components/Analytics";
import { ConsentBanner } from "@/components/ConsentBanner";
import { LenisProvider } from "@/components/motion/LenisProvider";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/seo/site";
import "../globals.css";

// Only the "latin" files are preloaded; they cover Spanish, Catalan and French
// (à è é í ò ó ú ç ï ü œ ·). Other ranges still load on demand.
const caslonDisplay = Libre_Caslon_Display({
  variable: "--font-caslon-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const caslonText = Libre_Caslon_Text({
  variable: "--font-caslon-text",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  // Used for small serif text further down the page: not worth a preload.
  preload: false,
  display: "swap",
});

const grotesk = Schibsted_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta");
  return {
    metadataBase: new URL(siteUrl),
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleLayout({
  children,
}: LayoutProps<"/[locale]">) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${caslonDisplay.variable} ${caslonText.variable} ${grotesk.variable}`}
    >
      <body className="flex min-h-svh flex-col">
        <NextIntlClientProvider>
          <LenisProvider>{children}</LenisProvider>
          <WhatsAppButton />
          <ConsentBanner />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
