import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactBand } from "@/components/sections/ContactBand";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contact");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function ContactPage() {
  const t = await getTranslations("contact");
  return <ContactBand variant="full" heading="h1" title={t("title")} text={t("intro")} />;
}
