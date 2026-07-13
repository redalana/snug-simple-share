import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Menu, X, Facebook, Linkedin, Check } from "lucide-react";
import { Logo } from "./Logo";

type NavItem = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "All Products",
    href: "#solutions",
    dropdown: [
      { label: "Cardiac Care", href: "#solutions" },
      { label: "Imaging & Radiology", href: "#solutions" },
      { label: "Surgical Systems", href: "#solutions" },
      { label: "Patient Monitoring", href: "#solutions" },
    ],
  },
  {
    label: "Services",
    href: "#why",
    dropdown: [
      { label: "Supply & Installation", href: "#why" },
      { label: "Commissioning", href: "#why" },
      { label: "Training", href: "#process" },
      { label: "Maintenance", href: "#process" },
    ],
  },
  { label: "Turnkey", href: "#projects" },
  { label: "After Sales", href: "#process" },
  {
    label: "Brands",
    href: "#brands",
    dropdown: [
      { label: "Philips", href: "#brands" },
      { label: "Siemens Healthineers", href: "#brands" },
      { label: "GE HealthCare", href: "#brands" },
      { label: "Richard Wolf", href: "#brands" },
    ],
  },
  {
    label: "About Us",
    href: "#stats",
    dropdown: [
      { label: "Our Story", href: "#why" },
      { label: "Global Presence", href: "#global" },
      { label: "Why AbuFarha", href: "#why" },
    ],
  },
  { label: "Blog", href: "#" },
  { label: "Contact Us", href: "#contact" },
];

const SOCIALS = [
  { label: "Facebook", href: "#", Icon: Facebook, hover: "hover:text-[#1877F2]" },
  { label: "LinkedIn", href: "#", Icon: Linkedin, hover: "hover:text-[#0A66C2]" },
];

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
] as const;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12.04 2.5A9.5 9.5 0 0 0 3.9 16.86L3 21.5l4.77-.88A9.5 9.5 0 1 0 12.04 2.5Zm0 1.7a7.8 7.8 0 0 1 5.5 13.3 7.8 7.8 0 0 1-9.34 1.24l-.34-.2-2.83.52.53-2.76-.22-.35A7.8 7.8 0 0 1 12.04 4.2Zm-2.5 3.4c-.2 0-.5.08-.77.37-.26.29-1 .98-1 2.4s1.03 2.78 1.17 2.97c.15.2 2 3.05 4.85 4.16 2.36.93 2.84.75 3.36.7.51-.05 1.66-.68 1.9-1.33.23-.66.23-1.22.16-1.33-.07-.11-.26-.18-.55-.32-.29-.15-1.71-.85-1.98-.94-.26-.1-.46-.15-.65.14-.19.29-.74.94-.9 1.13-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.6-1.99-.17-.29-.02-.44.12-.59.13-.13.29-.34.44-.51.14-.17.19-.29.29-.48.1-.2.05-.37-.02-.51-.08-.15-.65-1.57-.9-2.15-.24-.57-.48-.49-.65-.5h-.55Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LanguageSelector() {
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
        className="flex items-center gap-1.5 text-[15px] font-medium text-foreground/75 transition-colors hover:text-primary"
      >
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
            transition={{ duration: 0.16 }}
            className="absolute right-0 top-full z-20 mt-2 w-36 rounded-2xl border border-border/70 bg-white p-1.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]"
          >
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2 rounded-xl px-3.5 py-2 text-left text-sm font-medium transition-colors hover:bg-muted ${
                  l.code === lang.code ? "text-foreground" : "text-foreground/70"
                }`}
              >
                <Check
                  className={`h-4 w-4 text-primary ${l.code === lang.code ? "opacity-100" : "opacity-0"}`}
                />
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/90 shadow-[0_8px_30px_-16px_rgba(0,0,0,0.16)] backdrop-blur-xl"
            : "bg-white"
        }`}
      >
        {/* Level 1 — logo, centered search, language, socials, CTA */}
        <div className="mx-auto flex h-[84px] max-w-[100rem] items-center gap-6 px-6 lg:px-10">
          <Link to="/" className="ml-1 shrink-0 origin-left scale-[1.13]">
            <Logo />
          </Link>

          {/* Search — centered hero element of the header */}
          <div className="hidden flex-1 justify-center md:flex">
            <div className="w-[460px] lg:w-[480px]">
              <SearchField />
            </div>
          </div>

          {/* Right cluster — language, socials, CTA */}
          <div className="hidden shrink-0 items-center lg:flex">
            <LanguageSelector />

            {/* Language → Social : 28px */}
            <div className="ml-7 flex items-center gap-[18px]">
              {SOCIALS.map(({ label, href, Icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`text-[#555555] transition-all duration-200 hover:scale-[1.08] hover:drop-shadow-sm ${hover}`}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </a>
              ))}
              <a
                href="#"
                aria-label="WhatsApp"
                className="text-[#555555] transition-all duration-200 hover:scale-[1.08] hover:text-[#25D366] hover:drop-shadow-sm"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>

            {/* Social → Button : 28px */}
            <a
              href="#contact"
              className="ml-7 inline-flex h-[46px] shrink-0 items-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_-12px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Request a Quote
            </a>
          </div>


          {/* Mobile controls */}
          <div className="ml-auto flex items-center gap-2 md:ml-0 xl:hidden">
            <button
              aria-label="Search"
              onClick={() => setMobileSearch((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary md:hidden"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Level 2 — navigation */}
        <nav className="hidden border-t border-border/50 xl:block">
          <div className="mx-auto flex max-w-[100rem] items-center justify-center gap-2 px-6 lg:px-10">
            {NAV.map((item) => (
              <div key={item.label} className="group relative">
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-5 py-3.5 text-[16px] font-medium text-foreground/75 transition-colors hover:text-primary"
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:rotate-180" />
                  )}
                  <span className="absolute inset-x-5 bottom-2 h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                </a>

                {item.dropdown && (
                  <div className="pointer-events-none absolute left-1/2 top-full z-10 w-56 -translate-x-1/2 pt-1 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="translate-y-1 rounded-2xl border border-border/70 bg-white p-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] transition-transform duration-200 group-hover:translate-y-0">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-foreground/75 transition-colors hover:bg-accent hover:text-primary"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile search drawer */}
      <AnimatePresence>
        {mobileSearch && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-white md:hidden"
          >
            <div className="mx-auto max-w-[100rem] px-6 py-3">
              <SearchField />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-white xl:hidden"
          >
            <div className="mx-auto max-w-[100rem] px-6 py-4 lg:px-10">
              {NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-[16px] font-medium text-foreground/80 transition-colors last:border-0 hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {SOCIALS.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </a>
                  ))}
                  <a
                    href="#"
                    aria-label="WhatsApp"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function SearchField() {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted-foreground" />
      <input
        type="search"
        placeholder="Search products, brands or categories..."
        className="h-[46px] w-full rounded-full bg-white pl-11 pr-4 text-sm text-foreground shadow-[0_4px_20px_-8px_rgba(0,0,0,0.15)] ring-1 ring-black/5 outline-none transition-all placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
