import { getTranslations } from "next-intl/server";
import { LeadForm } from "./LeadForm";

const phone = process.env.NEXT_PUBLIC_PHONE ?? "+34 625 01 43 88";
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34625014388";

type Props = {
  /** The short form closes most pages; the Contact page uses the full one. */
  variant?: "short" | "full";
  /** Heading level: h1 on the Contact page, h2 everywhere else. */
  heading?: "h1" | "h2";
  title?: string;
  text?: string;
};

// Closing band on walnut: how to reach us on the left, the lead form on the right.
export async function ContactBand({ variant = "short", heading: Heading = "h2", title, text }: Props) {
  const t = await getTranslations();

  return (
    <section aria-labelledby="contact-title" className="on-dark bg-walnut py-section text-lime">
      <div className="wrap grid gap-12 md:grid-cols-[5fr_7fr] md:gap-18">
        <div>
          <Heading
            id="contact-title"
            className={`font-display ${Heading === "h1" ? "text-display-xl" : "text-display-l"}`}
          >
            {title ?? t("home.contact.title")}
          </Heading>
          <p className="mt-5 max-w-[36ch] text-fleece">{text ?? t("home.contact.text")}</p>
          <p className="mt-10 text-note font-medium text-fleece">{t("contact.call")}</p>
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="mt-2 block font-serif text-[1.875rem] leading-none tabular-nums no-underline"
          >
            {phone}
          </a>
          <a
            href={`https://wa.me/${whatsapp}`}
            className="mt-6 inline-block border-b-2 border-lime pb-1.5 font-semibold no-underline"
          >
            {t("whatsapp.label")}
          </a>
        </div>
        <LeadForm variant={variant} />
      </div>
    </section>
  );
}
