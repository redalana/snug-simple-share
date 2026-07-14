import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check, ChevronDown, Search } from "lucide-react";

import {
  usePhoneInput,
  defaultCountries,
  parseCountry,
  FlagImage,
} from "react-international-phone";
import "react-international-phone/style.css";
import { AsYouType, getCountryCallingCode } from "libphonenumber-js";
import type { CountryCode } from "libphonenumber-js";
import { Popover, PopoverContent, PopoverTrigger, PopoverAnchor } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";


type ParsedCountry = ReturnType<typeof parseCountry>;

const COUNTRIES: ParsedCountry[] = defaultCountries
  .map(parseCountry)
  .sort((a, b) => a.name.localeCompare(b.name));

function detectCountry(): string {
  try {
    const locales = navigator.languages ?? [navigator.language];
    for (const loc of locales) {
      const region = loc.split("-")[1];
      if (region) {
        const iso = region.toLowerCase();
        if (COUNTRIES.some((c) => c.iso2 === iso)) return iso;
      }
    }
  } catch {
    /* noop */
  }
  return "eg";
}

interface PhoneFieldProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  hasError?: boolean;
}

export function PhoneField({ id, value, onChange, className, hasError }: PhoneFieldProps) {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const searchRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const detected = useRef(false);

  const { inputValue, country, setCountry, handlePhoneValueChange, inputRef } =
    usePhoneInput({
      defaultCountry: "eg",
      value,
      countries: defaultCountries,
      disableDialCodeAndPrefix: true,
      onChange: (data) => onChange(data.phone),
    });

  // Auto-detect visitor country on first mount (only if no value yet)
  useEffect(() => {
    if (detected.current) return;
    detected.current = true;
    if (!value) {
      const iso = detectCountry();
      if (iso !== country.iso2) setCountry(iso);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRIES;
    const digits = q.replace(/[^\d]/g, "");
    return COUNTRIES.filter((c) => {
      return (
        c.name.toLowerCase().includes(q) ||
        c.iso2.includes(q) ||
        (digits && c.dialCode.includes(digits)) ||
        `+${c.dialCode}`.includes(q)
      );
    });
  }, [query]);

  const scrollActiveIntoView = (idx: number) => {
    requestAnimationFrame(() => {
      const el = listRef.current?.querySelector<HTMLElement>(`[data-idx="${idx}"]`);
      el?.scrollIntoView({ block: "nearest" });
    });
  };

  useEffect(() => {
    setActiveIndex(0);
    listRef.current?.scrollTo({ top: 0 });
  }, [query]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => searchRef.current?.focus(), 60);
      const idx = filtered.findIndex((c) => c.iso2 === country.iso2);
      const target = idx >= 0 ? idx : 0;
      setActiveIndex(target);
      scrollActiveIntoView(target);
      return () => clearTimeout(t);
    }
    setQuery("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const selectCountry = (iso: string) => {
    setCountry(iso);
    setOpen(false);
    setTimeout(() => inputRef.current?.focus(), 40);
  };

  const onSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => {
        const next = Math.min(i + 1, filtered.length - 1);
        scrollActiveIntoView(next);
        return next;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => {
        const next = Math.max(i - 1, 0);
        scrollActiveIntoView(next);
        return next;
      });
    } else if (e.key === "Enter") {
      e.preventDefault();
      const c = filtered[activeIndex];
      if (c) selectCountry(c.iso2);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const dialCode = country.dialCode;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverAnchor asChild>
        <div
          className={cn(
            "flex h-12 items-stretch overflow-hidden rounded-xl border border-border bg-secondary/30 transition-all duration-200",
            "focus-within:border-primary focus-within:bg-white focus-within:ring-4 focus-within:ring-primary/10 focus-within:shadow-[0_6px_20px_-8px_var(--primary)]",
            hasError && "border-destructive",
            className,
          )}
        >
          <PopoverTrigger asChild>
            <button
              type="button"
              aria-label={`Selected country: ${country.name} (+${dialCode}). Change country`}
              className="flex shrink-0 items-center gap-2 border-r border-border/80 px-3 text-sm font-medium text-ink transition-colors duration-200 hover:bg-secondary/60 focus-visible:outline-none focus-visible:bg-secondary/70"
            >
              <FlagImage iso2={country.iso2} className="h-4 w-6 rounded-[3px] object-cover shadow-sm" />
              <span className="tabular-nums text-muted-foreground">+{dialCode}</span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 text-muted-foreground transition-transform duration-300",
                  open && "rotate-180",
                )}
              />
            </button>
          </PopoverTrigger>
        <PopoverContent
          align="start"
          sideOffset={6}
          className="w-[var(--radix-popover-trigger-width)] min-w-[280px] overflow-hidden rounded-2xl border-border/80 p-0 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.35)]"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >

          <AnimatePresence>
            {open && (
              <motion.div
                initial={reduceMotion ? undefined : { opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* sticky search */}
                <div className="sticky top-0 z-10 border-b border-border/70 bg-white/95 p-2.5 backdrop-blur">
                  <div className="relative">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      ref={searchRef}
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={onSearchKeyDown}
                      placeholder="Search country, code or +dial"
                      aria-label="Search countries"
                      className="h-10 rounded-lg border-border bg-secondary/40 pl-9 text-sm focus-visible:border-primary focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/15"
                    />
                  </div>
                </div>

                <div ref={listRef} className="max-h-[280px] overflow-y-auto overscroll-contain p-1.5">
                  {filtered.length === 0 ? (
                    <p className="px-3 py-6 text-center text-sm text-muted-foreground">
                      No countries found
                    </p>
                  ) : (
                    <div>
                      {filtered.map((c, index) => {
                        const isSelected = c.iso2 === country.iso2;
                        const isActive = index === activeIndex;
                        return (
                          <button
                            key={c.iso2}
                            type="button"
                            role="option"
                            data-idx={index}
                            aria-selected={isSelected}
                            onClick={() => selectCountry(c.iso2)}
                            onMouseEnter={() => setActiveIndex(index)}
                            className={cn(
                              "flex w-full items-center gap-3 rounded-lg px-2.5 py-2.5 text-left text-sm transition-colors duration-100",
                              isActive ? "bg-primary/8" : "bg-transparent",
                              isSelected && "font-semibold",
                            )}
                          >
                            <FlagImage
                              iso2={c.iso2}
                              className="h-4 w-6 shrink-0 rounded-[3px] object-cover shadow-sm"
                            />
                            <span className="flex-1 truncate text-ink">{c.name}</span>
                            <span className="tabular-nums text-xs text-muted-foreground">
                              +{c.dialCode}
                            </span>
                            {isSelected && <Check className="h-4 w-4 shrink-0 text-primary" />}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </PopoverContent>

          <input
            id={id}
            ref={inputRef}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={inputValue}
            onChange={handlePhoneValueChange}
            placeholder={formatExample(country.iso2, dialCode)}
            className="w-full min-w-0 bg-transparent px-3.5 text-sm text-ink outline-none placeholder:text-muted-foreground/70"
          />
        </div>
      </PopoverAnchor>
    </Popover>
  );
}


function formatExample(iso2: string, dialCode: string): string {
  try {
    const t = new AsYouType(iso2.toUpperCase() as CountryCode);
    getCountryCallingCode(iso2.toUpperCase() as CountryCode);
    t.input(`+${dialCode}1001234567`);
    const out = t.getNumber()?.formatInternational();
    if (!out) return "00 000 0000";
    return out
      .replace(new RegExp(`^\\+${dialCode}\\s*`), "")
      .replace(/\d/g, "0");
  } catch {
    return "00 000 0000";
  }
}
