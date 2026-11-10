import { getTranslations } from "next-intl/server";

export async function SkipLink() {
  const t = await getTranslations("nav");

  return (
    <a
      href="#contenido"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-walnut focus:px-4 focus:py-3 focus:text-small focus:font-medium focus:text-lime"
    >
      {t("skip")}
    </a>
  );
}
