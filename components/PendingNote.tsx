import type { ReactNode } from "react";

// Marks content that is waiting for a confirmed fact (team, legal entity,
// who carries out the works). Visible on purpose so it cannot be forgotten;
// every use must be gone before launch.
export function PendingNote({ children }: { children: ReactNode }) {
  return (
    <p
      data-pending
      className="max-w-[60ch] border border-dashed border-bark px-4 py-3 text-small text-bark"
    >
      {children}
    </p>
  );
}
