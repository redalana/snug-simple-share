import { Star } from "lucide-react";
import { BRAND_ITEMS, type BrandItem } from "./nav-data";

export function BrandMark({ item }: { item: BrandItem }) {
  const c = item.color;
  switch (item.mark) {
    case "square":
      return <span className="h-4 w-4 rounded-[calc(3*var(--desktop-px-unit))]" style={{ backgroundColor: c }} />;
    case "ring":
      return <span className="h-4 w-4 rounded-full border-[calc(3*var(--desktop-px-unit))]" style={{ borderColor: c }} />;
    case "bars":
      return (
        <span className="flex items-end gap-[calc(2*var(--desktop-px-unit))]">
          <span className="h-2.5 w-[calc(3*var(--desktop-px-unit))] rounded-sm" style={{ backgroundColor: c }} />
          <span className="h-4 w-[calc(3*var(--desktop-px-unit))] rounded-sm" style={{ backgroundColor: c }} />
          <span className="h-3 w-[calc(3*var(--desktop-px-unit))] rounded-sm" style={{ backgroundColor: c }} />
        </span>
      );
    default:
      return <span className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: c }} />;
  }
}

export function BrandsMegaDropdown() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-full z-10 w-[min(92vw,calc(720*var(--desktop-px-unit)))] -translate-x-1/2 pt-1 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
      <div className="translate-y-1 rounded-2xl border border-border/70 bg-white p-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] transition-transform duration-200 group-hover:translate-y-0">
        <div className="grid grid-cols-2 gap-1">
          {BRAND_ITEMS.map((b) => (
            <a
              key={b.name}
              href={b.href}
              className="group/brand flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-accent"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center opacity-90 transition-opacity group-hover/brand:opacity-100">
                <BrandMark item={b} />
              </span>
              <span className="flex min-w-0 items-baseline gap-1.5 leading-none">
                <span
                  className="truncate font-display text-[calc(14*var(--desktop-px-unit))] font-extrabold tracking-tight text-foreground transition-colors group-hover/brand:text-[color:var(--brand)]"
                  style={{ ["--brand" as string]: b.color }}
                >
                  {b.name}
                </span>
                {b.sub && (
                  <span
                    className="shrink-0 text-[calc(9*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
                  >
                    {b.sub}
                  </span>
                )}
              </span>
            </a>
          ))}
        </div>
        <div className="my-2 h-px bg-border/70" />
        <a
          href="/brands"
          className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <span className="inline-flex items-center gap-2">
            <Star className="h-4 w-4" strokeWidth={2.25} fill="currentColor" />
            View All Brands
          </span>
          <span aria-hidden>→</span>
        </a>
      </div>
    </div>
  );
}

