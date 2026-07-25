import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp, GitCompare, Trash2, X } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { clearCompare, removeCompare, useCompare } from "@/lib/compare-store";
import { onQuoteModalState } from "@/lib/quote-modal";

export function CompareBar() {
  const slugs = useCompare();
  const [expanded, setExpanded] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => onQuoteModalState(setQuoteOpen), []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const io = new IntersectionObserver((entries) => setNearFooter(entries[0].isIntersecting), {
      rootMargin: "0px 0px -40px 0px",
    });
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  if (!slugs.length || quoteOpen) return null;
  const items = slugs
    .map((s) => PRODUCTS.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div
      className={`fixed right-4 z-[80] transition-[bottom] duration-300 sm:right-6 ${
        nearFooter
          ? "bottom-[calc(env(safe-area-inset-bottom,0px)+180px)]"
          : "bottom-[calc(env(safe-area-inset-bottom,0px)+96px)]"
      }`}
      role="region"
      aria-label="Product comparison"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {expanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-[min(92vw,360px)] overflow-hidden rounded-2xl border border-border bg-white/98 shadow-[0_28px_60px_-20px_rgba(15,23,42,0.28)] backdrop-blur"
          >
            <div className="flex items-center justify-between border-b border-border/70 px-4 py-3">
              <div className="inline-flex items-center gap-2 text-sm font-bold text-foreground">
                <GitCompare className="h-4 w-4 text-primary" />
                Compare ({items.length}/4)
              </div>
              <button
                type="button"
                onClick={() => setExpanded(false)}
                aria-label="Collapse comparison"
                className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <ul className="max-h-64 divide-y divide-border/60 overflow-y-auto">
              {items.map((p) => (
                <li key={p.slug} className="flex items-center gap-3 px-4 py-2.5">
                  <img
                    src={p.image}
                    alt=""
                    className="h-10 w-14 shrink-0 rounded-md object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold text-foreground">{p.name}</div>
                    <div className="truncate text-[11px] text-muted-foreground">{p.category}</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeCompare(p.slug)}
                    aria-label={`Remove ${p.name}`}
                    className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 border-t border-border/70 bg-secondary/40 px-4 py-3">
              <button
                type="button"
                onClick={clearCompare}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-2 text-xs font-semibold text-foreground/70 hover:text-foreground"
              >
                <Trash2 className="h-3.5 w-3.5" /> Clear All
              </button>
              <Link
                to="/compare"
                onClick={() => setExpanded(false)}
                className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-[0_10px_20px_-10px_var(--primary)] hover:bg-primary-dark"
              >
                Compare Now <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="collapsed"
            type="button"
            onClick={() => setExpanded(true)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            aria-label={`Open comparison with ${items.length} products`}
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white/98 py-2.5 pl-2.5 pr-4 text-sm font-semibold text-foreground shadow-[0_20px_40px_-16px_rgba(15,23,42,0.28)] backdrop-blur transition-transform hover:-translate-y-0.5"
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
              <GitCompare className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-foreground px-1 text-[10px] font-bold text-background">
                {items.length}
              </span>
            </span>
            Compare
            <ChevronUp className="h-4 w-4 text-muted-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
