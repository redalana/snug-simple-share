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
}: {
  children: ReactNode;
  align?: "left" | "center";
  tone?: "primary" | "light";
}) {
  const text =
    tone === "light" ? "text-white/70" : "text-primary";
  const line =
    tone === "light" ? "bg-white/40" : "bg-primary/50";
  const dot = tone === "light" ? "bg-white" : "bg-primary";
  const label = `text-[11px] font-bold uppercase tracking-[0.26em] ${text}`;

  if (align === "center") {
    return (
      <div className="flex items-center justify-center gap-3">
        <span className={`h-px w-8 ${line} opacity-70`} />
        <span className={label}>{children}</span>
        <span className={`h-px w-8 ${line} opacity-70`} />
      </div>
    );
  }

  return (
    <span className="inline-flex items-center gap-2.5">
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      <span className={`h-px w-6 ${line}`} />
      <span className={label}>{children}</span>
    </span>
  );
}
