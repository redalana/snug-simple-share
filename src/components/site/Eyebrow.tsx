import type { ReactNode } from "react";

/**
 * Shared section eyebrow — a single, deliberate label treatment used across
 * every section so the page reads as one designed system rather than a
 * collection of templates.
 */
export function Eyebrow({
  children,
  align = "left",
  tone = "primary",
  index,
}: {
  children: ReactNode;
  align?: "left" | "center";
  tone?: "primary" | "light";
  /** Chapter number (e.g. "01") that turns disconnected sections into a story arc. */
  index?: string;
}) {
  const text = tone === "light" ? "text-white/70" : "text-primary";
  const line = tone === "light" ? "bg-white/40" : "bg-primary/50";
  const dot = tone === "light" ? "bg-white" : "bg-primary";
  // Opacity kept as high as the design allows while clearing WCAG AA (4.5:1)
  // for this 11px bold numeral: /85 -> 4.67:1 on white, /60 -> 4.9:1 on dark.
  const num = tone === "light" ? "text-white/60" : "text-primary/85";
  const label = `text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.26em] ${text}`;
  const chapter = index ? (
    <span
      aria-hidden="true"
      className={`font-display text-[calc(11*var(--desktop-px-unit))] font-extrabold tabular-nums ${num}`}
    >
      {index}
    </span>
  ) : null;

  if (align === "center") {
    return (
      <div className="flex items-center justify-center gap-3">
        {chapter}
        <span className={`h-px w-8 ${line} opacity-70`} />
        <span className={label}>{children}</span>
        <span className={`h-px w-8 ${line} opacity-70`} />
      </div>
    );
  }

  return (
    <span className="inline-flex items-center gap-2.5">
      {chapter}
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      <span className={`h-px w-6 ${line}`} />
      <span className={label}>{children}</span>
    </span>
  );
}
