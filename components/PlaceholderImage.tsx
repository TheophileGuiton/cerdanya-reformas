import { cn } from "@/lib/utils";

const tones = ["bg-oak", "bg-granite", "bg-timber"] as const;

type Props = {
  /** Text shown on the tag, e.g. the expected file and the AI-image mention. */
  label: string;
  /** Accessible description of the image that will replace this block. */
  alt: string;
  /** Picks the block colour so neighbouring placeholders differ. */
  tone?: 0 | 1 | 2;
  /** Sizing classes: aspect ratio, width, max height. */
  className?: string;
};

// Stands in for a project image that has not been generated yet, so the build
// never breaks and the layout keeps its real proportions.
export function PlaceholderImage({ label, alt, tone = 0, className }: Props) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn("flex items-end p-4", tones[tone], className)}
    >
      <span className="bg-walnut px-2.5 py-1.5 text-note font-medium text-lime">
        {label}
      </span>
    </div>
  );
}
