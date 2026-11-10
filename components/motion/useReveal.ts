"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, type RefObject } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

type Options = {
  /** Animate these descendants one after another instead of the element itself. */
  items?: string;
};

/**
 * Settles content in once as it enters the viewport: a clip reveal from the
 * top with a slight scale, using the DESIGN.md motion tokens (1.4s, power3.out,
 * 90ms stagger). Nothing moves in layout, so it cannot cause layout shift.
 * Does nothing under reduced motion; without JavaScript the content is simply there.
 */
export function useReveal(ref: RefObject<HTMLElement | null>, { items }: Options = {}) {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || reduced) return;
    const targets = items ? element.querySelectorAll(items) : element;

    const tween = gsap.from(targets, {
      clipPath: "inset(0 0 100% 0)",
      scale: 1.04,
      duration: 1.4,
      ease: "power3.out",
      stagger: items ? 0.09 : 0,
      clearProps: "clipPath,scale,transform",
      scrollTrigger: { trigger: element, start: "top 88%", once: true },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [ref, reduced, items]);
}
