import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { PlaceholderImage } from "./PlaceholderImage";

type Props = {
  slug: string;
  /** File name without extension, as listed in content-seed/image-prompts.md. */
  name: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  tone?: 0 | 1 | 2;
  /** Sizing classes: aspect ratio, width, max height. */
  className?: string;
};

// Every project image goes through here: the real file when it exists in
// public/images/projects/{slug}/, a placeholder block otherwise. The
// AI-generated mention is always shown.
export async function ProjectImage({
  slug,
  name,
  alt,
  sizes,
  priority = false,
  tone = 0,
  className,
}: Props) {
  const t = await getTranslations("image");
  const file = `/images/projects/${slug}/${name}.jpg`;
  const credit = `${t("aiCredit")} · ${t("concept")}`;

  if (!existsSync(path.join(process.cwd(), "public", file))) {
    return (
      <PlaceholderImage
        alt={alt}
        tone={tone}
        className={className}
        label={t("pending", { file: `${slug}/${name}.jpg` })}
      />
    );
  }

  return (
    <div className={cn("relative overflow-hidden bg-granite", className)}>
      <Image
        src={file}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      <span className="absolute bottom-4 left-4 bg-walnut px-2.5 py-1.5 text-note font-medium text-lime">
        {credit}
      </span>
    </div>
  );
}
