import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronRight, ArrowRight } from "lucide-react";
import { PRODUCT_CATEGORIES } from "./nav-data";

export function ProductsMegaDropdown() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const searchStr = useRouterState({ select: (s) => s.location.searchStr });
  const activeCategory = new URLSearchParams(searchStr).get("category");

  const [closed, setClosed] = useState(false);
  const lastKey = useRef(`${pathname}?${activeCategory ?? ""}`);

  useEffect(() => {
    const key = `${pathname}?${activeCategory ?? ""}`;
    if (lastKey.current !== key) {
      lastKey.current = key;
      setClosed(false);
    }
  }, [pathname, activeCategory]);

  const closedClass = closed
    ? "pointer-events-none !opacity-0"
    : "opacity-0 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100";

  return (
    <div
      role="menu"
      aria-label="Product categories"
      onMouseLeave={() => setClosed(false)}
      className={`pointer-events-none absolute left-1/2 top-full z-10 w-[336px] -translate-x-1/2 pt-1 transition-all duration-200 ${closedClass}`}
    >
      <div className="translate-y-1 rounded-2xl bg-white p-5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.28)] ring-1 ring-black/5 transition-transform duration-200 group-hover:translate-y-0 group-focus-within:translate-y-0">
        <div className="mb-2 border-b border-border/60 pb-2">
          <span className="block px-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Product Categories
          </span>
        </div>
        <ul className="flex flex-col gap-0.5">
          {PRODUCT_CATEGORIES.map(({ label, category, Icon }) => {
            const isActive =
              pathname === "/products" &&
              ((category && activeCategory === category) || (!category && !activeCategory && false));
            return (
              <li key={label}>
                <Link
                  to="/products"
                  search={category ? { category } : {}}
                  role="menuitem"
                  aria-current={isActive ? "page" : undefined}
                  onClick={(e) => {
                    setClosed(true);
                    (e.currentTarget as HTMLElement).blur();
                  }}
                  className={`group/item relative flex items-center gap-3 rounded-[4px] px-3 py-2.5 text-[14px] font-medium outline-none transition-all duration-200 hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-primary/30 ${
                    isActive ? "bg-muted text-foreground" : "text-foreground/75"
                  }`}
                >
                  <span
                    className={`pointer-events-none absolute inset-y-1 left-0 w-[3px] rounded-r bg-primary transition-transform duration-200 ${
                      isActive
                        ? "scale-y-100"
                        : "scale-y-0 group-hover/item:scale-y-100 group-focus-visible/item:scale-y-100"
                    }`}
                  />
                  <Icon
                    className={`h-[18px] w-[18px] shrink-0 transition-colors duration-200 group-hover/item:text-primary group-focus-visible/item:text-primary ${
                      isActive ? "text-primary" : "text-foreground/55"
                    }`}
                    strokeWidth={1.75}
                  />
                  <span className="flex-1">{label}</span>
                  <ChevronRight
                    className={`h-4 w-4 transition-all duration-200 ${
                      isActive
                        ? "translate-x-0 text-primary opacity-100"
                        : "-translate-x-1 text-foreground/30 opacity-0 group-hover/item:translate-x-0 group-hover/item:opacity-100 group-focus-visible/item:translate-x-0 group-focus-visible/item:opacity-100"
                    }`}
                    strokeWidth={2}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-3 border-t border-border/60 pt-3">
          <Link
            to="/products"
            onClick={(e) => {
              setClosed(true);
              (e.currentTarget as HTMLElement).blur();
            }}
            className="group/cta flex items-center justify-between rounded-[4px] px-3 py-2 text-[13px] font-semibold text-foreground transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none"
          >
            <span>View All Products</span>
            <ArrowRight
              className="h-4 w-4 text-primary transition-transform duration-200 group-hover/cta:translate-x-1"
              strokeWidth={2.25}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
