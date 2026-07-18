import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Menu, X, Star, ChevronRight } from "lucide-react";

import { Logo } from "./Logo";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { NAV, SOCIALS, LANGUAGES, BRAND_ITEMS } from "./header/nav-data";
import { LanguageSelector } from "./header/LanguageSelector";
import { BrandMark, BrandsMegaDropdown } from "./header/BrandsMegaDropdown";
import { ProductsMegaDropdown } from "./header/ProductsMegaDropdown";
import { MobileProductsAccordion } from "./header/MobileProductsAccordion";
import { SearchField } from "./header/SearchField";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (href: string) => {
    if (!href.startsWith("/")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <header className="fixed inset-x-0 top-[var(--lovable-toolbar-offset,0px)] z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-[0_8px_30px_-16px_rgba(0,0,0,0.16)] lg:bg-white/90 lg:backdrop-blur-xl"
            : "bg-white"
        }`}
      >
        {/* Level 1 — logo, centered search, language, socials, CTA */}
        <div className="mx-auto flex h-[calc(56*var(--desktop-px-unit))] max-w-[100rem] items-center gap-6 px-6 lg:px-10">
          <Link to="/" className="ml-1 shrink-0 origin-left scale-[1.0]">
            <Logo />
          </Link>

          {/* Search — centered hero element of the header */}
          <div className="hidden flex-1 justify-center md:flex">
            <div className="w-[calc(400*var(--desktop-px-unit))] lg:w-[calc(420*var(--desktop-px-unit))]">
              <SearchField />
            </div>
          </div>

          {/* Right cluster — language, socials, CTA */}
          <div className="hidden shrink-0 items-center lg:flex">
            <LanguageSelector />

            {/* Language → Social : calc(28*var(--desktop-px-unit)) */}
            <div className="ml-6 flex items-center gap-[calc(14*var(--desktop-px-unit))]">
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

            {/* Social → Button : calc(28*var(--desktop-px-unit)) */}
            <Link
              to="/contact"
              hash="contact-form"
              className="ml-6 inline-flex h-[calc(40*var(--desktop-px-unit))] shrink-0 items-center rounded-full bg-primary px-6 text-[calc(13*var(--desktop-px-unit))] font-semibold text-primary-foreground shadow-[0_10px_24px_-12px_var(--primary)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Request a Quote
            </Link>
          </div>


          {/* Mobile controls */}
          <div className="ml-auto flex items-center gap-1.5 md:ml-0 xl:hidden">
            <button
              aria-label="Search"
              onClick={() => setMobileSearch((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary md:hidden"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Level 2 — navigation */}
        <nav className="hidden border-t border-border/50 xl:block">
          <div className="mx-auto flex max-w-[100rem] items-center justify-center gap-[calc(10*var(--desktop-px-unit))] px-6 lg:px-10">
            {NAV.map((item) => {
              const active = isActive(item.href);
              const isContact = item.label === "Contact Us";
              const baseColor = isContact
                ? "text-primary hover:text-primary-dark"
                : active
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary";
              const weight = isContact ? "font-bold" : "font-semibold";
              return (
                <div key={item.label} className="group relative flex items-center">
                  <a
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2 text-[calc(15*var(--desktop-px-unit))] leading-6 tracking-[0.0125em] transition-colors ${weight} ${baseColor}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}

                    {item.dropdown && (
                      <ChevronDown className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:rotate-180" />
                    )}
                    <span
                      className={`absolute inset-x-4 bottom-1 h-0.5 rounded-full bg-primary transition-transform duration-300 ${
                        active
                          ? "scale-x-100"
                          : "origin-left scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>


                  {item.dropdown && item.label === "Brands" && <BrandsMegaDropdown />}
                  {item.label === "All Products" && <ProductsMegaDropdown />}

                  {item.dropdown && item.label !== "Brands" && item.label !== "All Products" && (
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
              );
            })}

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
            <div className="mx-auto max-w-[100rem] px-6 py-2 lg:px-10">
              {NAV.filter((item) => item.label !== "Brands").map((item) => {
                const active = isActive(item.href);
                if (item.label === "All Products") {
                  return (
                    <MobileProductsAccordion
                      key={item.label}
                      active={active}
                      onNavigate={() => setOpen(false)}
                    />
                  );
                }
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block border-b border-border/60 py-2.5 text-[calc(16*var(--desktop-px-unit))] transition-colors last:border-0 ${
                      item.label === "Contact Us"
                        ? "font-bold text-primary hover:text-primary-dark"
                        : `font-medium ${active ? "text-primary" : "text-foreground/80 hover:text-primary"}`
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              {/* All Brands — collapsible accordion, closed by default */}
              <div className="border-b border-border/60 last:border-0">
                <button
                  type="button"
                  onClick={() => setMobileBrandsOpen((v) => !v)}
                  aria-expanded={mobileBrandsOpen}
                  aria-controls="mobile-brands-panel"
                  className="flex w-full items-center justify-between gap-2 py-2.5 text-left text-[calc(16*var(--desktop-px-unit))] font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  <span className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" fill="currentColor" strokeWidth={2.25} />
                    All Brands
                  </span>
                  <ChevronRight
                    className={`h-4 w-4 opacity-60 transition-transform ${mobileBrandsOpen ? "rotate-90" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {mobileBrandsOpen && (
                    <motion.div
                      id="mobile-brands-panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-2 pb-3 pt-1">
                        <a
                          href="/brands"
                          onClick={() => setOpen(false)}
                          className="col-span-2 flex items-center gap-2 rounded-lg border border-border/60 px-3 py-2 text-[calc(13*var(--desktop-px-unit))] font-semibold text-foreground/80 transition-colors hover:border-primary/60 hover:text-primary"
                        >
                          <Star className="h-4 w-4 text-primary" fill="currentColor" strokeWidth={2.25} />
                          View All Brands
                        </a>
                        {BRAND_ITEMS.map((b) => (
                          <a
                            key={b.name}
                            href={b.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2 rounded-lg border border-border/60 px-3 py-2 transition-colors hover:border-primary/60"
                          >
                            <BrandMark item={b} />
                            <span
                              className="font-display text-[calc(13*var(--desktop-px-unit))] font-extrabold leading-tight tracking-tight"
                              style={{ color: b.color }}
                            >
                              {b.name}
                              {b.sub && <span className="ml-1 text-[calc(9*var(--desktop-px-unit))] uppercase opacity-75">{b.sub}</span>}
                            </span>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>


              {/* Mobile language selector */}
              <div className="mt-4 border-t border-border/60 pt-4">
                <div className="mb-2 text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Language
                </div>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      className="inline-flex min-h-[calc(48*var(--desktop-px-unit))] items-center gap-2 rounded-full border border-border px-4 text-sm font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary"
                    >
                      <span aria-hidden className="text-base leading-none">{l.flag}</span>
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {SOCIALS.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex h-12 w-12 items-center justify-center text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </a>
                  ))}
                  <a
                    href="#"
                    aria-label="WhatsApp"
                    className="flex h-12 w-12 items-center justify-center text-muted-foreground transition-colors hover:text-primary"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                  </a>
                </div>
                <Link
                  to="/contact"
                  hash="contact-form"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-[calc(48*var(--desktop-px-unit))] items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
