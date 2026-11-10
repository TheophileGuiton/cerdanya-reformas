import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function Logo() {
  const t = await getTranslations("brand");

  return (
    <Link
      href="/"
      aria-label={t("home")}
      className="flex items-baseline gap-3 no-underline"
    >
      <span className="font-display text-[1.375rem] leading-none md:text-[1.6875rem]">
        Cerdanya Reformes
      </span>
      <span className="hidden text-note leading-none text-bark md:inline">
        {t("endorsement")}
      </span>
    </Link>
  );
}
