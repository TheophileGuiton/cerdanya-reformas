import type { Metadata } from "next";
import {
  Libre_Caslon_Display,
  Libre_Caslon_Text,
  Schibsted_Grotesk,
} from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { LenisProvider } from "@/components/motion/LenisProvider";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { routing } from "@/i18n/routing";
import "../globals.css";

const caslonDisplay = Libre_Caslon_Display({
  variable: "--font-caslon-display",
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const caslonText = Libre_Caslon_Text({
  variable: "--font-caslon-text",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const grotesk = Schibsted_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta");
  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    ),
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
