import { getLocale, getTranslations } from "next-intl/server";
import { services } from "@/content/services";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { SectionHead } from "./SectionHead";

export async function ServicesList() {
  const t = await getTranslations("home.services");
  const locale = (await getLocale()) as Locale;

  return (
    <section aria-labelledby="services-title" className="wrap pb-section">
      <SectionHead id="services-title" title={t("title")}>
        <p>{t("text")}</p>
      </SectionHead>
      <ul className="border-t border-walnut">
        {services.map((service) => (
          <li key={service.id} className="border-b border-granite">
            <Link
              href={{
                pathname: "/servicios/[slug]",
                params: { slug: service.slug[locale] },
              }}
              className="group grid items-baseline gap-x-6 gap-y-1 py-5.5 no-underline md:grid-cols-[5fr_7fr]"
            >
              <h3 className="font-display text-display-m transition-colors duration-(--dur-fast) group-hover:text-loden">
                {service.title[locale]}
              </h3>
              <p className="text-bark">{service.line[locale]}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
