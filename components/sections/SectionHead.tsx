import type { ReactNode } from "react";

type Props = { title: string; id?: string; children?: ReactNode };

/** Two-part section head: heading on the left, a short text or link on the right. */
export function SectionHead({ title, id, children }: Props) {
  return (
    <div className="mb-10 grid items-end gap-5 md:mb-12 md:grid-cols-[7fr_5fr] md:gap-18">
      <h2 id={id} className="font-display text-display-l">
        {title}
      </h2>
      {children ? <div className="max-w-[44ch] text-bark">{children}</div> : null}
    </div>
  );
}
