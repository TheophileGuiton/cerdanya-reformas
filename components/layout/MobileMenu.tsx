"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { navItems } from "./nav";
import { NavLink } from "./NavLink";

const phone = process.env.NEXT_PUBLIC_PHONE ?? "+34 625 01 43 88";

// Full-screen menu for small screens. While it is open the floating
// WhatsApp button is hidden (see globals.css).
export function MobileMenu() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  function change(next: boolean) {
    setOpen(next);
    if (next) document.documentElement.dataset.menuOpen = "";
    else delete document.documentElement.dataset.menuOpen;
  }

  return (
    <Sheet open={open} onOpenChange={change}>
      <SheetTrigger className="py-3.5 pl-1 text-nav font-medium lg:hidden">
        {t("nav.menu")}
      </SheetTrigger>
      <SheetContent
        side="top"
        showCloseButton={false}
        className="on-dark inset-0 h-svh gap-0 overflow-y-auto border-0 bg-walnut text-lime"
      >
        <div className="wrap flex items-center justify-between py-4">
          <SheetTitle className="font-display text-[1.25rem] leading-none font-normal whitespace-nowrap text-lime">
            Cerdanya Reformes
          </SheetTitle>
          <div className="flex items-center gap-2">
            <LanguageSwitcher onDark />
            <SheetClose className="py-3.5 pl-1 text-nav font-medium">
              {t("nav.close")}
            </SheetClose>
          </div>
        </div>

        <nav aria-label={t("nav.main")} className="wrap flex-1 pt-8">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.key}>
                <NavLink
                  href={item.href}
                  onClick={() => change(false)}
                  className="font-display text-display-l no-underline aria-[current=page]:shadow-[0_2px_0_var(--color-lime)]"
                >
                  {t(`nav.${item.key}`)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="wrap flex flex-col gap-2 pt-10 pb-8 text-fleece">
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="font-serif text-[1.5rem] text-lime tabular-nums no-underline"
          >
            {phone}
          </a>
          <p className="text-note">Cerdanya Reformes {t("brand.endorsement")}</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
