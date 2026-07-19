import { Link } from "@tanstack/react-router";
import { ArrowRight, GitCompare, X } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { clearCompare, removeCompare, useCompare } from "@/lib/compare-store";

export function CompareBar() {
  const slugs = useCompare();
  if (!slugs.length) return null;
  const items = slugs.map((s) => PRODUCTS.find((p) => p.slug === s)).filter(Boolean);

  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] border-t border-border bg-white/95 shadow-[0_-8px_24px_-12px_rgba(15,23,42,0.15)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <GitCompare className="h-4 w-4 text-primary" />
          Compare ({items.length}/4)
        </div>
        <div className="flex flex-1 flex-wrap items-center gap-2">
          {items.map((p) => (
            <span
              key={p!.slug}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card py-1 pl-1 pr-2 text-xs font-medium text-foreground"
            >
              <img src={p!.image} alt="" className="h-6 w-6 rounded-full object-cover" />
              <span className="max-w-[140px] truncate">{p!.name}</span>
              <button
                type="button"
                onClick={() => removeCompare(p!.slug)}
                aria-label={`Remove ${p!.name} from comparison`}
                className="ml-1 grid h-4 w-4 place-items-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={clearCompare}
            className="text-xs font-semibold text-muted-foreground hover:text-foreground"
          >
            Clear
          </button>
          <Link
            to="/compare"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary-dark"
          >
            Compare Now <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
