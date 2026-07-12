import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  Menu,
  X,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  Globe,
} from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { label: "Home", href: "/", dropdown: false },
  { label: "All Products", href: "#solutions", dropdown: true },
  { label: "Services", href: "#why", dropdown: true },
  { label: "Turnkey", href: "#projects" },
  { label: "After Sales", href: "#process" },
  { label: "About Us", href: "#stats", dropdown: true },
  { label: "Brands", href: "#brands" },
  { label: "Blog", href: "#" },
  { label: "Contact Us", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden bg-ink text-white/70 lg:block">
        <div className="mx-auto flex h-9 max-w-[100rem] items-center justify-between px-6 lg:px-10 text-xs">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5 text-primary" /> Serving Africa &amp; Middle East
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-primary" /> +20 109 111 2200
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-primary" /> info@abufarhamedical.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">EN <ChevronDown className="h-3 w-3" /></span>
            <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-white"><Linkedin className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="YouTube" className="transition-colors hover:text-white"><Youtube className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/90 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            : "bg-white"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[100rem] items-center justify-between gap-6 px-6 lg:px-10">
          <Link to="/">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" />
                )}
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-all hover:border-primary hover:text-primary"
            >
              <Search className="h-4 w-4" />
            </button>
            <a
              href="#contact"
              className="hidden items-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_10px_24px_-10px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark sm:inline-flex"
            >
              Request a Quote
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border xl:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-white xl:hidden"
          >
            <div className="mx-auto max-w-[100rem] px-6 lg:px-10 py-4">
              {NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-sm font-semibold text-foreground/80 last:border-0"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
