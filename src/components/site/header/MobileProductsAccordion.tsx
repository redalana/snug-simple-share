import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { PRODUCT_CATEGORIES } from "./nav-data";

export function MobileProductsAccordion({
  active,
  onNavigate,
}: {
  active: boolean;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const searchStr = useRouterState({ select: (s) => s.location.searchStr });
  const activeCategory = new URLSearchParams(searchStr).get("category");

  return (
    <div className="border-b border-border/60 py-2 last:border-0">
      <div className="flex items-center justify-between">
        <Link
          to="/products"
          onClick={onNavigate}
          className={`flex min-h-[calc(48*var(--desktop-px-unit))] flex-1 items-center text-[calc(16*var(--desktop-px-unit))] font-medium transition-colors ${
            active ? "text-primary" : "text-foreground/80 hover:text-primary"
          }`}
        >
          All Products
        </Link>
        <button
          type="button"
          aria-expanded={expanded}
          aria-label={expanded ? "Collapse product categories" : "Expand product categories"}
          onClick={() => setExpanded((v) => !v)}
          className="ml-2 flex h-12 w-12 items-center justify-center rounded-full text-foreground/60 transition-colors hover:bg-muted hover:text-primary"
        >
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-3 border-t border-border/60 pt-2">
              <span className="mb-1 block px-2 text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Product Categories
              </span>
              <ul className="flex flex-col">
                {PRODUCT_CATEGORIES.map(({ label, category, Icon }) => {
                  const isActive =
                    pathname === "/products" && !!category && activeCategory === category;
                  return (
                    <li key={label}>
                      <Link
                        to="/products"
                        search={category ? { category } : {}}
                        onClick={onNavigate}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex min-h-[calc(48*var(--desktop-px-unit))] items-center gap-3 rounded-[calc(4*var(--desktop-px-unit))] px-2 text-[calc(15*var(--desktop-px-unit))] font-medium transition-colors hover:bg-muted hover:text-foreground ${
                          isActive ? "bg-muted text-foreground" : "text-foreground/75"
                        }`}
                      >
                        <Icon
                          className={`h-5 w-5 ${isActive ? "text-primary" : "text-foreground/55"}`}
                          strokeWidth={1.75}
                        />
                        <span className="flex-1">{label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <Link
                to="/products"
                onClick={onNavigate}
                className="mt-1 flex items-center justify-between border-t border-border/60 px-2 pt-3 text-[calc(13*var(--desktop-px-unit))] font-semibold text-foreground hover:text-primary"
              >
                <span>View All Products</span>
                <ArrowRight className="h-4 w-4 text-primary" strokeWidth={2.25} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
