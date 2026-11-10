import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const phone = process.env.NEXT_PUBLIC_PHONE ?? "+34 625 01 43 88";
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34625014388";

// Closing band on walnut. The short lead form replaces the right-hand column
// in the lead-form phase; until then it offers the three ways to reach us.
export async function ContactBand() {
  const t = await getTranslations();

  return (
    <section aria-labelledby="contact-title" className="on-dark bg-walnut py-section text-lime">
      <div className="wrap grid gap-10 md:grid-cols-[5fr_7fr] md:gap-18">
        <div>
          <h2 id="contact-title" className="font-display text-display-l">
            {t("home.contact.title")}
          </h2>
          <p className="mt-5 max-w-[34ch] text-fleece">{t("home.contact.text")}</p>
        </div>
        <div className="flex flex-col items-start gap-6 md:justify-end">
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="font-serif text-[1.875rem] leading-none tabular-nums no-underline"
          >
            {phone}
          </a>
          <p className="flex flex-wrap gap-x-8 gap-y-4">
            <Link
              href="/contacto"
              className="inline-flex h-14 items-center rounded-sm bg-lime px-8 font-semibold text-walnut no-underline"
            >
              {t("home.contact.cta")}
            </Link>
            <a
              href={`https://wa.me/${whatsapp}`}
              className="self-center border-b-2 border-lime pb-1.5 font-semibold no-underline"
            >
              {t("whatsapp.label")}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
