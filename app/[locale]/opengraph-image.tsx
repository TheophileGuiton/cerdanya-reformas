import { ImageResponse } from "next/og";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Cerdanya Reformes by Cerdanya Privé";

// Branded fallback image for link previews, in the page's language. Colours
// are the DESIGN.md tokens (wool, walnut, bark, loden); CSS variables are not
// available in this renderer.
export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: param } = await params;
  const locale = hasLocale(routing.locales, param) ? param : routing.defaultLocale;
  // Messages are read directly: the i18n request helpers are not available here.
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#D8D0C2",
          color: "#2E2520",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
          <span style={{ fontSize: 44 }}>Cerdanya Reformes</span>
          <span style={{ fontSize: 24, color: "#5A4E44" }}>{messages.brand.endorsement}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 84, lineHeight: 1.05, maxWidth: 980 }}>{messages.home.headline}</span>
          <span style={{ fontSize: 30, color: "#465241" }}>{messages.home.keyword}</span>
        </div>
      </div>
    ),
    size,
  );
}
