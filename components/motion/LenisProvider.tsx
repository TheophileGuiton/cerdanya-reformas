"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

// Smooth scroll for the whole page. Native scrolling is kept as it is when
// the visitor prefers reduced motion.
export function LenisProvider({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion();

  if (reduced) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      {children}
    </ReactLenis>
  );
}
