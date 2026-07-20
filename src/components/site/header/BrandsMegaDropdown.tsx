import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { BRAND_ITEMS, type BrandItem } from "./nav-data";

export function BrandMark({ item }: { item: BrandItem }) {
  const c = item.color;
  switch (item.mark) {
    case "square":
      return <span className="h-3.5 w-3.5 rounded-[3px]" style={{ backgroundColor: c }} />;
    case "ring":
      return <span className="h-3.5 w-3.5 rounded-full border-[2.5px]" style={{ borderColor: c }} />;
    case "bars":
      return (
        <span className="flex items-end gap-[2px]">
          <span className="h-2 w-[2.5px] rounded-sm" style={{ backgroundColor: c }} />
          <span className="h-3.5 w-[2.5px] rounded-sm" style={{ backgroundColor: c }} />
          <span className="h-2.5 w-[2.5px] rounded-sm" style={{ backgroundColor: c }} />
        </span>
      );
    default:
      return <span className="h-3 w-3 rounded-full" style={{ backgroundColor: c }} />;
  }
}

export function BrandsMegaDropdown() {
  const [closed, setClosed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (closed) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setClosed(true);
        (document.activeElement as HTMLElement | null)?.blur();
      }
    };
    const onDown = (e: MouseEvent) => {
      const parent = ref.current?.parentElement;
      if (parent && !parent.contains(e.target as Node)) setClosed(true);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [closed]);

  const closedClass = closed
    ? "pointer-events-none !opacity-0"
    : "opacity-0 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100";

  return (
    <div
      ref={ref}
      role="menu"
      aria-label="Brands"
      onMouseEnter={() => setClosed(false)}
      className={`pointer-events-none absolute left-1/2 top-full z-10 w-[calc(360*var(--desktop-px-unit))] -translate-x-1/2 pt-1 transition-all duration-200 ${closedClass}`}
    >
      <div className="translate-y-1 rounded-2xl bg-white p-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] ring-1 ring-black/5 transition-transform duration-200 group-hover:translate-y-0 group-focus-within:translate-y-0">
        <ul className="grid grid-cols-2 gap-0.5">
          {BRAND_ITEMS.map((b) => (
            <li key={b.name}>
              <a
                href={b.href}
                role="menuitem"
                onClick={(e) => {
                  setClosed(true);
                  (e.currentTarget as HTMLElement).blur();
                }}
                className="group/brand flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 outline-none transition-colors duration-150 hover:bg-accent focus-visible:bg-accent"
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                  <BrandMark item={b} />
                </span>
                <span className="flex min-w-0 items-baseline gap-1 leading-none">
                  <span
                    className="truncate font-display text-[calc(13*var(--desktop-px-unit))] font-semibold tracking-tight text-foreground transition-colors group-hover/brand:text-[color:var(--brand)]"
                    style={{ ["--brand" as string]: b.color }}
                  >
                    {b.name}
                  </span>
                  {b.sub && (
                    <span className="shrink-0 text-[calc(9*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {b.sub}
                    </span>
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-1 border-t border-border/60 pt-1">
          <a
            href="/brands"
            onClick={(e) => {
              setClosed(true);
              (e.currentTarget as HTMLElement).blur();
            }}
            className="group/cta flex items-center justify-between rounded-lg px-2.5 py-2 text-[calc(13*var(--desktop-px-unit))] font-semibold text-foreground transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none"
          >
            <span>View All Brands</span>
            <ArrowRight
              className="h-4 w-4 text-primary transition-transform duration-200 group-hover/cta:translate-x-1"
              strokeWidth={2.25}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
