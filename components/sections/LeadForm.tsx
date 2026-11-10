"use client";

import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import { useActionState, useEffect, useRef, type ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { trackEvent } from "@/lib/analytics/events";
import { submitLead } from "@/lib/leads/action";
import {
  budgets,
  houseTypes,
  leadTowns,
  ownerStates,
  projectTypes,
  surfaces,
  timings,
} from "@/lib/leads/options";
import type { LeadField, LeadState } from "@/lib/leads/schema";

const turnstileKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34625014388";
const tracking = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];

const label = "text-note font-medium text-fleece";
const control =
  "w-full rounded-none border-0 border-b border-fleece bg-transparent px-0 py-2.5 text-body text-lime outline-none focus-visible:border-lime focus-visible:shadow-[0_1px_0_var(--color-lime)] aria-invalid:border-lime aria-invalid:shadow-[0_2px_0_var(--color-lime)]";
const check = "mt-0.5 size-4.5 shrink-0 accent-lime";

type Props = {
  /** "short" asks only for what is needed to call back; "full" is the Contact page form. */
  variant: "short" | "full";
};

export function LeadForm({ variant }: Props) {
  const t = useTranslations("lead");
  const locale = useLocale();
  const [state, action, pending] = useActionState<LeadState, FormData>(submitLead, {
    status: "idle",
  });
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLParagraphElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const values = state.values ?? {};
  const id = (name: string) => `lead-${variant}-${name}`;

  // Page address and campaign parameters travel with the lead. Campaign
  // parameters are remembered for the visit, so they survive navigation.
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const query = new URLSearchParams(window.location.search);
    for (const key of tracking) {
      const value = query.get(key) ?? window.sessionStorage.getItem(`cr-${key}`) ?? "";
      if (query.get(key)) window.sessionStorage.setItem(`cr-${key}`, value);
      const input = form.elements.namedItem(key);
      if (input instanceof HTMLInputElement) input.value = value;
    }
    const page = form.elements.namedItem("pageUrl");
    if (page instanceof HTMLInputElement) page.value = window.location.href;
  }, [state]);

  useEffect(() => {
    if (state.status === "success") {
      trackEvent("generate_lead", { form: variant });
      successRef.current?.focus();
    } else if (state.status === "error") {
      summaryRef.current?.focus();
    }
  }, [state, variant]);

  if (state.status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="outline-none">
        <p className="font-display text-display-m">{t("success.title")}</p>
        <p className="mt-3 max-w-[44ch] text-fleece">{t("success.text")}</p>
        <p className="mt-6">
          <a
            href={`https://wa.me/${whatsapp}`}
            className="border-b-2 border-lime pb-1.5 font-semibold no-underline"
          >
            {t("success.whatsapp")}
          </a>
        </p>
      </div>
    );
  }

  const error = (field: LeadField) => state.errors?.[field];
  const describe = (field: LeadField) => (error(field) ? id(`${field}-error`) : undefined);
  const fieldError = (field: LeadField) =>
    error(field) ? (
      <p id={id(`${field}-error`)} className="text-note font-medium text-lime">
        {t(`errors.${error(field)!}`)}
      </p>
    ) : null;

  const select = (name: string, text: string, options: ReactNode) => (
    <div className="grid gap-1.5">
      <label htmlFor={id(name)} className={label}>
        {text}
      </label>
      <select id={id(name)} name={name} defaultValue={values[name] ?? ""} className={control}>
        <option value="" className="text-walnut">
          {t("fields.choose")}
        </option>
        {options}
      </select>
    </div>
  );
  const option = (value: string, text: string) => (
    <option key={value} value={value} className="text-walnut">
      {text}
    </option>
  );
  const townSelect = select(
    "town",
    t("fields.town"),
    <>
      {leadTowns.map((town) => option(town, town))}
      {option("otro", t("fields.other"))}
    </>,
  );

  return (
    <form ref={formRef} action={action} noValidate className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
      {state.status === "error" ? (
        <p
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="border border-lime px-4 py-3 text-small font-medium outline-none sm:col-span-2"
        >
          {state.formError ? t(`errors.${state.formError}`) : t("errors.summary")}
        </p>
      ) : null}

      <div className="grid gap-1.5">
        <label htmlFor={id("name")} className={label}>
          {t("fields.name")}
        </label>
        <input
          id={id("name")}
          name="name"
          autoComplete="name"
          required
          defaultValue={values.name}
          aria-invalid={error("name") ? true : undefined}
          aria-describedby={describe("name")}
          className={control}
        />
        {fieldError("name")}
      </div>
      <div className="grid gap-1.5">
        <label htmlFor={id("phone")} className={label}>
          {t("fields.phone")}
        </label>
        <input
          id={id("phone")}
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          defaultValue={values.phone}
          aria-invalid={error("phone") ? true : undefined}
          aria-describedby={describe("phone")}
          className={control}
        />
        {fieldError("phone")}
      </div>
      <div className="grid gap-1.5">
        <label htmlFor={id("email")} className={label}>
          {t("fields.email")}
        </label>
        <input
          id={id("email")}
          name="email"
          type="email"
          autoComplete="email"
          required
          defaultValue={values.email}
          aria-invalid={error("email") ? true : undefined}
          aria-describedby={describe("email")}
          className={control}
        />
        {fieldError("email")}
      </div>
      <label className="flex items-start gap-3 self-end pb-2.5 text-small text-fleece">
        <input
          type="checkbox"
          name="whatsapp"
          defaultChecked={values.whatsapp === "on"}
          className={check}
        />
        {t("fields.whatsapp")}
      </label>

      {variant === "short" ? <div className="sm:col-span-2">{townSelect}</div> : townSelect}

      {variant === "full" ? (
        <>
          {select(
            "houseType",
            t("fields.houseType"),
            houseTypes.map((v) => option(v, t(`options.houseType.${v}`))),
          )}
          {select(
            "surface",
            t("fields.surface"),
            surfaces.map((v) => option(v, t(`options.surface.${v}`))),
          )}
          {select(
            "budget",
            t("fields.budget"),
            budgets.map((v) => option(v, t(`options.budget.${v}`))),
          )}
          <fieldset className="sm:col-span-2">
            <legend className={`${label} mb-3`}>{t("fields.projectType")}</legend>
            <div className="grid gap-x-6 gap-y-3 sm:grid-cols-3">
              {projectTypes.map((v) => (
                <label key={v} className="flex items-start gap-3 text-small">
                  <input
                    type="checkbox"
                    name="projectTypes"
                    value={v}
                    defaultChecked={(values.projectTypes ?? "").split(",").includes(v)}
                    className={check}
                  />
                  {t(`options.projectType.${v}`)}
                </label>
              ))}
            </div>
          </fieldset>
          {select(
            "timing",
            t("fields.timing"),
            timings.map((v) => option(v, t(`options.timing.${v}`))),
          )}
          <fieldset>
            <legend className={`${label} mb-3`}>{t("fields.owner")}</legend>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {ownerStates.map((v) => (
                <label key={v} className="flex items-start gap-3 text-small">
                  <input
                    type="radio"
                    name="owner"
                    value={v}
                    defaultChecked={values.owner === v}
                    className={check}
                  />
                  {t(`options.owner.${v}`)}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="flex items-start gap-3 text-small sm:col-span-2">
            <input
              type="checkbox"
              name="rental"
              defaultChecked={values.rental === "on"}
              className={check}
            />
            {t("fields.rental")}
          </label>
        </>
      ) : null}

      <div className="grid gap-1.5 sm:col-span-2">
        <label htmlFor={id("message")} className={label}>
          {t("fields.message")} ({t("fields.optional")})
        </label>
        <textarea
          id={id("message")}
          name="message"
          rows={variant === "full" ? 3 : 1}
          defaultValue={values.message}
          className={`${control} min-h-11 resize-y`}
        />
      </div>

      {/* Honeypot: hidden from people, tempting for bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="pageUrl" />
      {tracking.map((key) => (
        <input key={key} type="hidden" name={key} />
      ))}

      <div className="grid gap-1.5 sm:col-span-2">
        <label className="flex items-start gap-3 text-small text-fleece">
          <input
            type="checkbox"
            name="consent"
            required
            aria-invalid={error("consent") ? true : undefined}
            aria-describedby={describe("consent")}
            className={check}
          />
          <span>
            {t.rich("consent", {
              link: (chunks) => (
                <Link href="/privacidad" className="text-lime underline underline-offset-4">
                  {chunks}
                </Link>
              ),
            })}
          </span>
        </label>
        {fieldError("consent")}
      </div>

      {turnstileKey ? (
        <div className="sm:col-span-2">
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            strategy="lazyOnload"
          />
          <div className="cf-turnstile" data-sitekey={turnstileKey} data-theme="dark" />
        </div>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="h-14 justify-self-start rounded-sm bg-lime px-8 font-semibold text-walnut disabled:opacity-60 sm:col-span-2"
      >
        {pending ? t("sending") : t("submit")}
      </button>
      <p className="max-w-[70ch] text-note text-fleece sm:col-span-2">{t("info")}</p>
    </form>
  );
}
