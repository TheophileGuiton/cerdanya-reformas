"use client";

import { useSearchParams } from "next/navigation";
import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type Item = { slug: string; type: string; card: ReactNode };
type Props = {
  items: Item[];
  /** Filter options in display order: type id and its label. */
  options: { type: string; label: string }[];
  label: string;
  allLabel: string;
};

const pill =
  "px-3.5 py-2.5 text-small font-medium no-underline aria-[current=true]:bg-walnut aria-[current=true]:text-lime";

// Project grid with a type filter. The choice lives in the URL (?tipo=...),
// so a filtered view can be shared and the back button works.
export function ProjectFilter({ items, options, label, allLabel }: Props) {
  const param = useSearchParams().get("tipo");
  const active = options.some((option) => option.type === param) ? param : null;
  const visible = active ? items.filter((item) => item.type === active) : items;

  return (
    <>
      <nav aria-label={label} className="mb-10 flex flex-wrap gap-1 border-b border-granite pb-4">
        <Link href="/proyectos" scroll={false} replace aria-current={active ? undefined : "true"} className={pill}>
          {allLabel}
        </Link>
        {options.map((option) => (
          <Link
            key={option.type}
            href={{ pathname: "/proyectos", query: { tipo: option.type } }}
            scroll={false}
            replace
            aria-current={active === option.type ? "true" : undefined}
            className={pill}
          >
            {option.label}
          </Link>
        ))}
      </nav>
      <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <li key={item.slug}>{item.card}</li>
        ))}
      </ul>
    </>
  );
}
