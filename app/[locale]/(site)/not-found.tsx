import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="wrap py-section">
      <h1 className="max-w-[16ch] font-display text-display-xl">{t("title")}</h1>
      <p className="mt-6 max-w-[44ch] text-body-l text-bark">{t("text")}</p>
      <p className="mt-8">
        <Link href="/" className="link-underline">
          {t("back")}
        </Link>
      </p>
    </div>
  );
}
