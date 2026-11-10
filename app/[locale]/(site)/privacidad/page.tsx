import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getTranslations } from "next-intl/server";
import { LegalPage } from "@/components/sections/LegalPage";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("legal");
  return buildMetadata({
    title: t("metaTitle", { title: t("privacy.title") }),
    href: () => "/privacidad",
    // Drafts awaiting legal review are kept out of search results.
    noindex: true,
  });
}

export default function Page() {
  return <LegalPage page="privacy" sections={["0", "1", "2", "3", "4", "5", "6"]} />;
}
