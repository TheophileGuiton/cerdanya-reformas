"use client";

import { useRef, type ReactNode } from "react";
import { useReveal } from "./useReveal";

type Props = {
  children: ReactNode;
  className?: string;
  /** CSS selector of descendants to reveal one after another (e.g. "[data-reveal]"). */
  items?: string;
};

/** Wraps content that should settle in once when it scrolls into view. */
export function Reveal({ children, className, items }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref, { items });
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
