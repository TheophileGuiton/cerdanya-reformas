import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactBand } from "@/components/sections/ContactBand";
import { MaterialsStrip } from "@/components/sections/MaterialsStrip";
import { ServiceRows } from "@/components/sections/ServicesList";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("servicesPage.index");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function ServicesPage() {
  const t = await getTranslations("servicesPage.index");

  return (
    <>
      <div className="wrap pt-10 pb-section md:pt-16">
        <div className="mb-12 grid items-end gap-5 md:mb-16 md:grid-cols-[7fr_5fr] md:gap-18">
          <h1 className="font-display text-display-xl">{t("title")}</h1>
          <p className="max-w-[44ch] text-bark">{t("intro")}</p>
        </div>
        <ServiceRows heading="h2" />
      </div>
      <MaterialsStrip />
      <ContactBand />
    </>
  );
}
