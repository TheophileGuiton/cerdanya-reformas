import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getTranslations } from "next-intl/server";
import { LegalPage } from "@/components/sections/LegalPage";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("legal");
  return buildMetadata({
    title: t("metaTitle", { title: t("notice.title") }),
    href: () => "/aviso-legal",
    // Drafts awaiting legal review are kept out of search results.
    noindex: true,
  });
}

export default function Page() {
  return <LegalPage page="notice" sections={["0", "1", "2", "3", "4"]} />;
}
