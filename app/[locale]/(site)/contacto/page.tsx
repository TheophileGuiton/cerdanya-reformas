import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getTranslations } from "next-intl/server";
import { ContactBand } from "@/components/sections/ContactBand";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contact");
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    href: () => "/contacto",
  });
}

export default async function ContactPage() {
  const t = await getTranslations("contact");
  return <ContactBand variant="full" heading="h1" title={t("title")} text={t("intro")} />;
}
