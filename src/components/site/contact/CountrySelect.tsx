import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Check, Search } from "lucide-react";
import { FlagImage } from "react-international-phone";

import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { COUNTRIES } from "./data";

export function CountrySelect({
  value,
  onChange,
  hasError,
}: {
  value: string;
  onChange: (iso2: string) => void;
  hasError?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const current = useMemo(
    () => COUNTRIES.find((c) => c.iso2 === value) ?? null,
    [value],
  );
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRIES;
    const digits = q.replace(/[^\d]/g, "");
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.iso2.includes(q) ||
        (digits && c.dialCode.includes(digits)) ||
        `+${c.dialCode}`.includes(q),
    );
  }, [query]);

  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50);
    else setQuery("");
  }, [open]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={current ? `Country: ${current.name}. Change country` : "Select your country"}
          className={cn(
            "flex h-12 w-full items-center justify-between rounded-xl border border-border bg-secondary/30 px-3.5 text-left text-sm transition-all duration-200",
            "hover:border-primary/40 hover:bg-secondary/40",
            "focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10",
            hasError && "border-destructive",
          )}
        >

          <span className="flex min-w-0 items-center gap-2.5">
            {current ? (
              <>
                <FlagImage
                  iso2={current.iso2}
                  className="h-4 w-6 shrink-0 rounded-[calc(3*var(--desktop-px-unit))] object-cover shadow-sm"
                />
                <span className="truncate font-medium text-ink">{current.name}</span>
              </>

            ) : (
              <span className="text-muted-foreground">Select your country</span>
            )}
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
              open && "rotate-180",
            )}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={8}
        className="w-[var(--radix-popover-trigger-width)] overflow-hidden rounded-2xl border-border/80 p-0 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.35)]"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="sticky top-0 z-10 border-b border-border/70 bg-white p-2.5">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              ref={searchRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search country"
              className="h-10 rounded-lg border-border bg-secondary/40 pl-9 text-sm"
            />
          </div>
        </div>
        <div className="max-h-[calc(260*var(--desktop-px-unit))] overflow-y-auto overscroll-contain p-1.5">
          {filtered.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-muted-foreground">
              No countries found
            </p>
          ) : (
            filtered.map((c) => {
              const selected = c.iso2 === value;
              return (
                <button
                  key={c.iso2}
                  type="button"
                  onClick={() => {
                    onChange(c.iso2);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-2.5 py-2.5 text-left text-sm transition-colors hover:bg-primary/5",
                    selected && "bg-primary/8 font-semibold",
                  )}
                >
                  <FlagImage
                    iso2={c.iso2}
                    className="h-4 w-6 shrink-0 rounded-[calc(3*var(--desktop-px-unit))] object-cover shadow-sm"
                  />
                  <span className="flex-1 truncate text-ink">{c.name}</span>

                  {selected && <Check className="h-4 w-4 text-primary" />}
                </button>
              );
            })
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
