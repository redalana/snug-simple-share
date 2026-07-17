import { Star } from "lucide-react";
import { BRAND_ITEMS, type BrandItem } from "./nav-data";

export function BrandMark({ item }: { item: BrandItem }) {
  const c = item.color;
  switch (item.mark) {
    case "square":
      return <span className="h-4 w-4 rounded-[calc(3 * var(--desktop-px-unit))]" style={{ backgroundColor: c }} />;
    case "ring":
      return <span className="h-4 w-4 rounded-full border-[calc(3 * var(--desktop-px-unit))]" style={{ borderColor: c }} />;
    case "bars":
      return (
        <span className="flex items-end gap-[calc(2 * var(--desktop-px-unit))]">
          <span className="h-2.5 w-[calc(3 * var(--desktop-px-unit))] rounded-sm" style={{ backgroundColor: c }} />
          <span className="h-4 w-[calc(3 * var(--desktop-px-unit))] rounded-sm" style={{ backgroundColor: c }} />
          <span className="h-3 w-[calc(3 * var(--desktop-px-unit))] rounded-sm" style={{ backgroundColor: c }} />
        </span>
      );
    default:
      return <span className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: c }} />;
  }
}

export function BrandsMegaDropdown() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-full z-10 w-[min(92vw,calc(660 * var(--desktop-px-unit)))] -translate-x-1/2 pt-1 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
      <div className="translate-y-1 rounded-2xl border border-border/70 bg-white p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] transition-transform duration-200 group-hover:translate-y-0">
        <a
          href="/brands"
          className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-primary"
        >
          <Star className="h-4 w-4 text-primary" strokeWidth={2.25} fill="currentColor" />
          All Brands
        </a>
        <div className="my-2 h-px bg-border/70" />
        <div className="grid grid-cols-3 gap-2">
          {BRAND_ITEMS.map((b) => (
            <a
              key={b.name}
              href={b.href}
              className="group/brand flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-transparent px-3 py-3 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-white hover:shadow-[0_10px_24px_-14px_rgba(0,0,0,0.25)]"
            >
              <span className="flex h-6 items-center justify-center">
                <BrandMark item={b} />
              </span>
              <span className="flex flex-col items-center leading-none">
                <span
                  className="font-display text-[calc(13 * var(--desktop-px-unit))] font-extrabold tracking-tight"
                  style={{ color: b.color }}
                >
                  {b.name}
                </span>
                {b.sub && (
                  <span
                    className="mt-1 text-[calc(9 * var(--desktop-px-unit))] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: b.color, opacity: 0.75 }}
                  >
                    {b.sub}
                  </span>
                )}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
