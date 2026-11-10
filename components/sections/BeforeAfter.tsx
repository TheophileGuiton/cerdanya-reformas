"use client";

import { useState, type ReactNode } from "react";

type Props = {
  before: ReactNode;
  after: ReactNode;
  beforeLabel: string;
  afterLabel: string;
  /** Accessible name of the slider. */
  label: string;
};

// Before/after comparison with a draggable divider. The control is a native
// range input laid over the images, so it works with mouse, touch and arrow keys.
export function BeforeAfter({ before, after, beforeLabel, afterLabel, label }: Props) {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative aspect-[3/2] overflow-hidden select-none">
      <div className="absolute inset-0">{after}</div>
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {before}
      </div>
      <span className="absolute top-4 left-4 bg-walnut px-2.5 py-1.5 text-note font-medium text-lime">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 bg-walnut px-2.5 py-1.5 text-note font-medium text-lime">
        {afterLabel}
      </span>
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label={label}
        className="peer absolute inset-0 z-10 size-full cursor-ew-resize opacity-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-px bg-lime peer-focus-visible:w-0.5"
        style={{ left: `${position}%` }}
      >
        <span className="absolute top-1/2 left-1/2 size-9 -translate-1/2 rounded-full border border-lime bg-walnut" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden outline-2 -outline-offset-2 outline-loden peer-focus-visible:block"
      />
    </div>
  );
}
