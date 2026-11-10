"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, type RefObject } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

/**
 * Settles an image in once as it enters the viewport: a clip reveal with a
 * slight scale, using the DESIGN.md motion tokens. Does nothing under
 * reduced motion.
 */
export function useReveal(ref: RefObject<HTMLElement | null>) {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || reduced) return;

    const tween = gsap.from(element, {
      clipPath: "inset(0 0 100% 0)",
      scale: 1.04,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: { trigger: element, start: "top 85%", once: true },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [ref, reduced]);
}
