"use client";

import { useSyncExternalStore, type ReactNode } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

// Sticky header shell. The hairline under it appears once the page has
// scrolled 80px; the height never changes, so nothing shifts.
export function HeaderFrame({ children }: { children: ReactNode }) {
  const scrolled = useSyncExternalStore(
    subscribe,
    () => window.scrollY > 80,
    () => false,
  );

  return (
    <header
      className={`sticky top-0 z-30 border-b bg-wool transition-colors duration-(--dur-fast) ${
        scrolled ? "border-granite" : "border-transparent"
      }`}
    >
      {children}
    </header>
  );
}
