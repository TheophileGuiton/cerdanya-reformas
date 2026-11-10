import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";

export default function SiteLayout({ children }: LayoutProps<"/[locale]">) {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="contenido" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
