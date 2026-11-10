import { getTranslations } from "next-intl/server";
import { HeaderFrame } from "./HeaderFrame";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { navItems } from "./nav";
import { NavLink } from "./NavLink";

export async function Header() {
  const t = await getTranslations("nav");

  return (
    <HeaderFrame>
      <div className="wrap flex items-center justify-between gap-4 py-4 lg:py-5">
        <Logo />
        <div className="flex items-center gap-2 lg:gap-5 xl:gap-7">
          <nav aria-label={t("main")} className="hidden lg:block">
            <ul className="flex gap-5 xl:gap-7">
              {navItems.map((item) => (
                <li key={item.key}>
                  <NavLink
                    href={item.href}
                    className="block py-2 text-nav font-medium no-underline hover:shadow-[0_2px_0_var(--color-loden)] aria-[current=page]:shadow-[0_2px_0_var(--color-loden)]"
                  >
                    {t(item.key)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </div>
    </HeaderFrame>
  );
}
