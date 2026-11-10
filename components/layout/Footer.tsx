import { getLocale, getTranslations } from "next-intl/server";
import { services } from "@/content/services";
import { towns } from "@/content/towns";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { TownHref } from "./nav";

const phone = process.env.NEXT_PUBLIC_PHONE ?? "+34 625 01 43 88";
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34625014388";
const parentUrl = process.env.NEXT_PUBLIC_PARENT_URL ?? "https://cerdanyaprive.com";

const linkClass = "no-underline hover:shadow-[0_1px_0_var(--color-loden)]";

export async function Footer() {
  const t = await getTranslations();
  const locale = (await getLocale()) as Locale;

  return (
    <footer className="mt-auto pt-20 pb-24 lg:pt-24">
      <div className="wrap">
        <p className="max-w-[18ch] font-display text-display-l text-balance">
          {t("footer.statement")}
        </p>

        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-[4fr_3fr_3fr_2fr]">
          <section aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="mb-4 text-note font-medium text-bark">
              {t("footer.contact")}
            </h2>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="block font-serif text-[1.5rem] leading-tight tabular-nums no-underline"
            >
              {phone}
            </a>
            <a
              href={`https://wa.me/${whatsapp}`}
              className="mt-3 text-small link-underline"
            >
              {t("whatsapp.label")}
            </a>
          </section>

          <section aria-labelledby="zonas">
            <h2 id="zonas" className="mb-4 scroll-mt-24 text-note font-medium text-bark">
              {t("footer.zones")}
            </h2>
            <ul className="flex flex-col gap-2 text-small">
              {towns.map((town) => (
                <li key={town.slug}>
                  <Link href={`/zonas/${town.slug}` as TownHref} className={linkClass}>
                    {town.name[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-services">
            <h2 id="footer-services" className="mb-4 text-note font-medium text-bark">
              {t("footer.services")}
            </h2>
            <ul className="flex flex-col gap-2 text-small">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={{
                      pathname: "/servicios/[slug]",
                      params: { slug: service.slug[locale] },
                    }}
                    className={linkClass}
                  >
                    {service.title[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-legal">
            <h2 id="footer-legal" className="mb-4 text-note font-medium text-bark">
              {t("footer.legal")}
            </h2>
            <ul className="flex flex-col gap-2 text-small">
              <li>
                <Link href="/aviso-legal" className={linkClass}>
                  {t("footer.legalNotice")}
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className={linkClass}>
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className={linkClass}>
                  {t("footer.cookies")}
                </Link>
              </li>
            </ul>
          </section>
        </div>

        <p className="mt-14 border-t border-granite pt-5 text-small text-bark lg:mt-20">
          Cerdanya Reformes{" "}
          <a href={parentUrl} className="text-walnut underline underline-offset-4">
            {t("brand.endorsement")}
          </a>
          . {t("footer.parent")}.
        </p>
      </div>
    </footer>
  );
}
