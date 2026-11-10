import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getServices } from "@/lib/content/services";
import { SectionHead } from "./SectionHead";

type RowsProps = {
  /** Heading level of each service name, to fit the page outline. */
  heading: "h2" | "h3";
  /** Leaves one service out, e.g. the one whose page is being viewed. */
  exclude?: string;
};

/** The services as full-width rows: name on the left, one line on the right. */
export async function ServiceRows({ heading: Heading, exclude }: RowsProps) {
  const locale = (await getLocale()) as Locale;

  return (
    <ul className="border-t border-walnut">
      {getServices()
        .filter((service) => service.id !== exclude)
        .map((service) => (
          <li key={service.id} className="border-b border-granite">
            <Link
              href={{
                pathname: "/servicios/[slug]",
                params: { slug: service.slug[locale] },
              }}
              className="group grid items-baseline gap-x-6 gap-y-1 py-5.5 no-underline md:grid-cols-[5fr_7fr]"
            >
              <Heading className="font-display text-display-m transition-colors duration-(--dur-fast) group-hover:text-loden">
                {service.title[locale]}
              </Heading>
              <p className="text-bark">{service.line[locale]}</p>
            </Link>
          </li>
        ))}
    </ul>
  );
}

export async function ServicesList() {
  const t = await getTranslations("home.services");

  return (
    <section aria-labelledby="services-title" className="wrap pb-section">
      <SectionHead id="services-title" title={t("title")}>
        <p>{t("text")}</p>
      </SectionHead>
      <ServiceRows heading="h3" />
    </section>
  );
}
