"use client";

import type { ComponentProps } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import type { navItems } from "./nav";

type Href = (typeof navItems)[number]["href"];
type Props = Omit<ComponentProps<"a">, "href"> & { href: Href };

/**
 * A navigation entry: a localized page link, or a plain anchor for in-page
 * targets. The entry for the section being viewed is marked as current.
 */
export function NavLink({ href, ...props }: Props) {
  const pathname = usePathname();

  if (href.startsWith("#")) {
    return <a href={href} {...props} />;
  }

  const current = pathname === href || pathname.startsWith(`${href}/`);
  return (
    <Link
      href={href as Exclude<Href, `#${string}`>}
      aria-current={current ? "page" : undefined}
      {...props}
    />
  );
}
