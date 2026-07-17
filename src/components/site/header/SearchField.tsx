import { Search } from "lucide-react";

export function SearchField() {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3.5 top-1/2 h-[calc(18 * var(--desktop-px-unit))] w-[calc(18 * var(--desktop-px-unit))] -translate-y-1/2 text-primary/70" />
      <input
        type="search"
        placeholder="Search products, brands or categories..."
        className="h-10 w-full rounded-full border-[calc(1.5 * var(--desktop-px-unit))] border-primary/45 bg-white pl-10 pr-4 text-[calc(13 * var(--desktop-px-unit))] text-foreground shadow-[0_4px_20px_-10px_rgba(229,57,53,0.18)] outline-none transition-all placeholder:text-muted-foreground/80 hover:border-primary/70 focus:border-primary focus:shadow-[0_0_0_4px_rgba(229,57,53,0.12)]"
      />
    </div>
  );
}
