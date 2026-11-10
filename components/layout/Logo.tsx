import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function Logo() {
  const t = await getTranslations("brand");

  return (
    <Link
      href="/"
      aria-label={t("home")}
      className="flex shrink-0 items-baseline gap-3 whitespace-nowrap no-underline"
    >
      <span className="font-display text-[1.25rem] leading-none lg:text-[1.6875rem]">
        Cerdanya Reformes
      </span>
      <span className="hidden text-note leading-none text-bark xl:inline">
        {t("endorsement")}
      </span>
    </Link>
  );
}
