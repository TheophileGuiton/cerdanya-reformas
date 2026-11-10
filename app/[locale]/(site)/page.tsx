import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { JsonLd } from "@/components/JsonLd";
import type { Locale } from "@/i18n/routing";
import { businessJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";
import { ContactBand } from "@/components/sections/ContactBand";
import { Hero } from "@/components/sections/Hero";
import { MaterialsStrip } from "@/components/sections/MaterialsStrip";
import { Process } from "@/components/sections/Process";
import { RoomCards } from "@/components/sections/RoomCards";
import { ServicesList } from "@/components/sections/ServicesList";
import { WhyUs } from "@/components/sections/WhyUs";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta");
  return buildMetadata({ title: t("title"), description: t("description"), href: () => "/" });
}

export default async function HomePage() {
  const t = await getTranslations("meta");
  const locale = (await getLocale()) as Locale;

  return (
    <>
      <JsonLd data={businessJsonLd(locale, t("description"))} />
      <Hero />
      <WhyUs />
      <MaterialsStrip />
      <RoomCards />
      <ServicesList />
      <Process />
      <ContactBand />
    </>
  );
}
