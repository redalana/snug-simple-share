import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { LANGUAGES } from "./nav-data";

export function LanguageSelector() {
  const [lang, setLang] = useState<(typeof LANGUAGES)[number]>(LANGUAGES[0]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-[calc(15 * var(--desktop-px-unit))] font-medium text-foreground/75 transition-colors hover:text-primary"
      >
        <span aria-hidden className="text-base leading-none">{lang.flag}</span>
        {lang.label}
        <ChevronDown
          className={`h-3.5 w-3.5 opacity-60 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full z-20 mt-2 w-44 rounded-[calc(14 * var(--desktop-px-unit))] border border-border/70 bg-white p-2 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.28)]"
          >
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2.5 rounded-[calc(10 * var(--desktop-px-unit))] px-3 py-2.5 text-left text-sm font-medium transition-colors duration-200 hover:bg-muted ${
                  l.code === lang.code ? "text-foreground" : "text-foreground/70"
                }`}
              >
                <span aria-hidden className="text-base leading-none">{l.flag}</span>
                <span className="flex-1">{l.label}</span>
                <Check
                  className={`h-4 w-4 text-primary ${l.code === lang.code ? "opacity-100" : "opacity-0"}`}
                />
              </button>
            ))}

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
