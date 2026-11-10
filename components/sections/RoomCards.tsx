import { getTranslations } from "next-intl/server";
import { ProjectImage } from "@/components/ProjectImage";
import { Link } from "@/i18n/navigation";
import { SectionHead } from "./SectionHead";

// Three rooms from three concept projects. Each links to its case study.
const rooms = [
  { key: "0", slug: "casa-pairal-alp", image: "kitchen", ratio: "aspect-[3/2]", tone: 0 },
  { key: "1", slug: "borda-meranges", image: "living", ratio: "aspect-[4/5]", tone: 1 },
  { key: "2", slug: "atic-llac-puigcerda", image: "cover", ratio: "aspect-[4/5]", tone: 2 },
] as const;

export async function RoomCards() {
  const t = await getTranslations();

  return (
    <section aria-labelledby="rooms-title" className="wrap py-section">
      <SectionHead id="rooms-title" title={t("home.rooms.title")}>
        <Link href="/proyectos" className="text-walnut link-underline">
          {t("home.rooms.all")}
        </Link>
      </SectionHead>
      <ul className="grid items-end gap-x-6 gap-y-10 md:grid-cols-[5fr_4fr_3fr]">
        {rooms.map((room) => (
          <li key={room.slug}>
            <Link
              href={{ pathname: "/proyectos/[slug]", params: { slug: room.slug } }}
              className="group block no-underline"
            >
              <div className="overflow-hidden">
                <ProjectImage
                  slug={room.slug}
                  name={room.image}
                  alt={t(`home.rooms.items.${room.key}.title`)}
                  tone={room.tone}
                  sizes="(min-width: 768px) 40vw, calc(100vw - 2.5rem)"
                  className={`${room.ratio} w-full transition-transform duration-(--dur-base) ease-out group-hover:scale-[1.03]`}
                />
              </div>
              <h3 className="mt-4 font-display text-display-m">
                {t(`home.rooms.items.${room.key}.title`)}
              </h3>
              <p className="mt-1 text-small text-bark">
                {t(`home.rooms.items.${room.key}.text`)} {t("image.concept")}.
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
