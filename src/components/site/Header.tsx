import { useEffect, useRef, useState, type ComponentType, type SVGProps } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Facebook,
  Linkedin,
  Check,
  Star,
  HeartPulse,
  Activity,
  ScanLine,
  Magnet,
  Aperture,
  Radiation,
  CircleDot,
  Bone,
  Waves,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";

import { Logo } from "./Logo";

type NavItem = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "All Products", href: "/products", dropdown: [] },
  { label: "Services", href: "/services" },
  { label: "Turnkey", href: "/turnkey" },
  { label: "After Sales", href: "/after-sales" },
  {
    label: "Brands",
    href: "/brands",
    dropdown: [{ label: "All Brands", href: "/brands" }],
  },
  { label: "About Us", href: "/about" },

  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

type ProductCategory = {
  label: string;
  /** Full category name used by the PortfolioBrowser filter (matches PRIMARY_CATEGORIES). */
  category: string | null;
  /** SEO landing page path (kept for direct URL / search-engine access). */
  seoPath: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const PRODUCT_CATEGORIES: ProductCategory[] = [
  { label: "Cath Lab Systems", category: "Cath Lab Systems", seoPath: "/products/cath-lab", Icon: HeartPulse },
  { label: "Drug-Eluting Stents (DES)", category: null, seoPath: "/products/drug-eluting-stents", Icon: Activity },
  { label: "PET/CT Scanners", category: "PET/CT Scanners", seoPath: "/products/pet-ct-scanners", Icon: ScanLine },
  { label: "MRI Scanners", category: "MRI Scanners", seoPath: "/products/mri-scanners", Icon: Magnet },
  { label: "C-Arm Systems", category: "C-Arms", seoPath: "/products/c-arm-systems", Icon: Aperture },
  { label: "X-Ray Systems", category: "X-Ray Systems", seoPath: "/products/x-ray-systems", Icon: Radiation },
  { label: "Mammography Systems", category: "Mammography", seoPath: "/products/mammography-systems", Icon: CircleDot },
  { label: "Bone Densitometers (DEXA)", category: "Bone Densitometers (DEXA)", seoPath: "/products/bone-densitometers", Icon: Bone },
  { label: "Lithotripsy (ESWL)", category: "Lithotripsy Systems", seoPath: "/products/lithotripsy-eswl", Icon: Waves },
  { label: "Others", category: null, seoPath: "/products/others", Icon: LayoutGrid },
];


const SOCIALS = [
  { label: "Facebook", href: "#", Icon: Facebook, hover: "hover:text-[#1877F2]" },
  { label: "LinkedIn", href: "#", Icon: Linkedin, hover: "hover:text-[#0A66C2]" },
];

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
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
            className="absolute right-0 top-full z-20 mt-2 w-44 rounded-[14px] border border-border/70 bg-white p-2 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.28)]"
          >
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2.5 rounded-[10px] px-3 py-2.5 text-left text-sm font-medium transition-colors duration-200 hover:bg-muted ${
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

type BrandItem = {
  name: string;
  sub?: string;
  color: string;
  mark: "dot" | "square" | "ring" | "bars";
  href: string;
};

const BRAND_ITEMS: BrandItem[] = [
  { name: "Philips", color: "#0B5ED7", mark: "ring", href: "/brands/philips" },
  { name: "Toshiba – Canon", color: "#CC0000", mark: "bars", href: "/brands/toshiba-canon" },
  { name: "Siemens", sub: "Healthineers", color: "#EC6602", mark: "square", href: "/brands/siemens" },
  { name: "Mindray", color: "#005BAC", mark: "dot", href: "/brands/mindray" },
  { name: "Esaote", color: "#003DA5", mark: "dot", href: "/brands/esaote" },
  { name: "Richard Wolf", color: "#C8102E", mark: "square", href: "/brands/richard-wolf" },
  { name: "Hitachi", color: "#E60027", mark: "square", href: "/brands/hitachi" },
  { name: "GE", sub: "HealthCare", color: "#005EB8", mark: "ring", href: "/brands/ge-healthcare" },
  { name: "Shimadzu", color: "#C8161D", mark: "square", href: "/brands/shimadzu" },
  { name: "Abbott", color: "#008FC7", mark: "dot", href: "/brands/abbott" },
  { name: "Medtronic", color: "#170F5F", mark: "bars", href: "/brands/medtronic" },
  { name: "Boston Scientific", color: "#0072CE", mark: "ring", href: "/brands/boston-scientific" },
];

function BrandMark({ item }: { item: BrandItem }) {
  const c = item.color;
  switch (item.mark) {
    case "square":
      return <span className="h-4 w-4 rounded-[3px]" style={{ backgroundColor: c }} />;
    case "ring":
      return <span className="h-4 w-4 rounded-full border-[3px]" style={{ borderColor: c }} />;
    case "bars":
      return (
        <span className="flex items-end gap-[2px]">
          <span className="h-2.5 w-[3px] rounded-sm" style={{ backgroundColor: c }} />
          <span className="h-4 w-[3px] rounded-sm" style={{ backgroundColor: c }} />
          <span className="h-3 w-[3px] rounded-sm" style={{ backgroundColor: c }} />
        </span>
      );
    default:
      return <span className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: c }} />;
  }
}

function BrandsMegaDropdown() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-full z-10 w-[min(92vw,660px)] -translate-x-1/2 pt-1 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
      <div className="translate-y-1 rounded-2xl border border-border/70 bg-white p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] transition-transform duration-200 group-hover:translate-y-0">
        <a
          href="/brands"
          className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-primary"
        >
          <Star className="h-4 w-4 text-primary" strokeWidth={2.25} fill="currentColor" />
          All Brands
        </a>
        <div className="my-2 h-px bg-border/70" />
        <div className="grid grid-cols-3 gap-2">
          {BRAND_ITEMS.map((b) => (
            <a
              key={b.name}
              href={b.href}
              className="group/brand flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-transparent px-3 py-3 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-white hover:shadow-[0_10px_24px_-14px_rgba(0,0,0,0.25)]"
            >
              <span className="flex h-6 items-center justify-center">
                <BrandMark item={b} />
              </span>
              <span className="flex flex-col items-center leading-none">
                <span
                  className="font-display text-[13px] font-extrabold tracking-tight"
                  style={{ color: b.color }}
                >
                  {b.name}
                </span>
                {b.sub && (
                  <span
                    className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: b.color, opacity: 0.75 }}
                  >
                    {b.sub}
                  </span>
                )}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductsMegaDropdown() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const searchStr = useRouterState({ select: (s) => s.location.searchStr });
  const activeCategory = new URLSearchParams(searchStr).get("category");

  const [closed, setClosed] = useState(false);
  const lastKey = useRef(`${pathname}?${activeCategory ?? ""}`);

  useEffect(() => {
    const key = `${pathname}?${activeCategory ?? ""}`;
    if (lastKey.current !== key) {
      lastKey.current = key;
      setClosed(false);
    }
  }, [pathname, activeCategory]);

  const closedClass = closed
    ? "pointer-events-none !opacity-0"
    : "opacity-0 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100";

  return (
    <div
      role="menu"
      aria-label="Product categories"
      onMouseLeave={() => setClosed(false)}
      className={`pointer-events-none absolute left-1/2 top-full z-10 w-[336px] -translate-x-1/2 pt-1 transition-all duration-200 ${closedClass}`}
    >
      <div className="translate-y-1 rounded-2xl bg-white p-5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.28)] ring-1 ring-black/5 transition-transform duration-200 group-hover:translate-y-0 group-focus-within:translate-y-0">
        <div className="mb-2 border-b border-border/60 pb-2">
          <span className="block px-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Product Categories
          </span>
        </div>
        <ul className="flex flex-col gap-0.5">
          {PRODUCT_CATEGORIES.map(({ label, category, Icon }) => {
            const isActive =
              pathname === "/products" &&
              ((category && activeCategory === category) || (!category && !activeCategory && false));
            return (
              <li key={label}>
                <Link
                  to="/products"
                  search={category ? { category } : {}}
                  role="menuitem"
                  aria-current={isActive ? "page" : undefined}
                  onClick={(e) => {
                    setClosed(true);
                    (e.currentTarget as HTMLElement).blur();
                  }}
                  className={`group/item relative flex items-center gap-3 rounded-[4px] px-3 py-2.5 text-[14px] font-medium outline-none transition-all duration-200 hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-primary/30 ${
                    isActive ? "bg-muted text-foreground" : "text-foreground/75"
                  }`}
                >
                  <span
                    className={`pointer-events-none absolute inset-y-1 left-0 w-[3px] rounded-r bg-primary transition-transform duration-200 ${
                      isActive
                        ? "scale-y-100"
                        : "scale-y-0 group-hover/item:scale-y-100 group-focus-visible/item:scale-y-100"
                    }`}
                  />
                  <Icon
                    className={`h-[18px] w-[18px] shrink-0 transition-colors duration-200 group-hover/item:text-primary group-focus-visible/item:text-primary ${
                      isActive ? "text-primary" : "text-foreground/55"
                    }`}
                    strokeWidth={1.75}
                  />
                  <span className="flex-1">{label}</span>
                  <ChevronRight
                    className={`h-4 w-4 transition-all duration-200 ${
                      isActive
                        ? "translate-x-0 text-primary opacity-100"
                        : "-translate-x-1 text-foreground/30 opacity-0 group-hover/item:translate-x-0 group-hover/item:opacity-100 group-focus-visible/item:translate-x-0 group-focus-visible/item:opacity-100"
                    }`}
                    strokeWidth={2}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-3 border-t border-border/60 pt-3">
          <Link
            to="/products"
            onClick={(e) => {
              setClosed(true);
              (e.currentTarget as HTMLElement).blur();
            }}
            className="group/cta flex items-center justify-between rounded-[4px] px-3 py-2 text-[13px] font-semibold text-foreground transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none"
          >
            <span>View All Products</span>
            <ArrowRight
              className="h-4 w-4 text-primary transition-transform duration-200 group-hover/cta:translate-x-1"
              strokeWidth={2.25}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}


function MobileProductsAccordion({
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
    <div className="border-b border-border/60 py-3 last:border-0">
      <div className="flex items-center justify-between">
        <Link
          to="/products"
          onClick={onNavigate}
          className={`flex-1 text-[16px] font-medium transition-colors ${
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
          className="ml-2 flex h-9 w-9 items-center justify-center rounded-full text-foreground/60 transition-colors hover:bg-muted hover:text-primary"
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
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
              <span className="mb-1 block px-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
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
                        className={`flex items-center gap-3 rounded-[4px] px-2 py-2.5 text-[14px] font-medium transition-colors hover:bg-muted hover:text-foreground ${
                          isActive ? "bg-muted text-foreground" : "text-foreground/75"
                        }`}
                      >
                        <Icon
                          className={`h-[18px] w-[18px] ${isActive ? "text-primary" : "text-foreground/55"}`}
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
                className="mt-1 flex items-center justify-between border-t border-border/60 px-2 pt-3 text-[13px] font-semibold text-foreground hover:text-primary"
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

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
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
            <Link
              to="/contact"
              hash="contact-form"
              className="ml-7 inline-flex h-[46px] shrink-0 items-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_-12px_var(--primary)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Request a Quote
            </Link>
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
          <div className="mx-auto flex max-w-[100rem] items-center justify-center gap-[14px] px-6 lg:px-10">
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
                    className={`flex items-center gap-1 px-5 py-3.5 text-[15px] tracking-[0.005em] transition-colors ${weight} ${baseColor}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:rotate-180" />
                    )}
                    <span
                      className={`absolute inset-x-5 bottom-1.5 h-0.5 rounded-full bg-primary transition-transform duration-300 ${
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
            <div className="mx-auto max-w-[100rem] px-6 py-4 lg:px-10">
              {NAV.map((item) => {
                const active = isActive(item.href);
                if (item.label === "Brands") {
                  return (
                    <div key={item.label} className="border-b border-border/60 py-3 last:border-0">
                      <a
                        href="/brands"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2 text-[16px] font-medium text-foreground/80 hover:text-primary"
                      >
                        <Star className="h-4 w-4 text-primary" fill="currentColor" strokeWidth={2.25} />
                        All Brands
                      </a>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {BRAND_ITEMS.map((b) => (
                          <a
                            key={b.name}
                            href={b.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2 rounded-lg border border-border/60 px-3 py-2 transition-colors hover:border-primary/60"
                          >
                            <BrandMark item={b} />
                            <span
                              className="font-display text-[13px] font-extrabold leading-tight tracking-tight"
                              style={{ color: b.color }}
                            >
                              {b.name}
                              {b.sub && <span className="ml-1 text-[9px] uppercase opacity-75">{b.sub}</span>}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                }
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
                    className={`block border-b border-border/60 py-3 text-[16px] transition-colors last:border-0 ${
                      item.label === "Contact Us"
                        ? "font-bold text-primary hover:text-primary-dark"
                        : `font-medium ${active ? "text-primary" : "text-foreground/80 hover:text-primary"}`
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}


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
                <Link
                  to="/contact"
                  hash="contact-form"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
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

function SearchField() {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-primary/70" />
      <input
        type="search"
        placeholder="Search products, brands or categories..."
        className="h-12 w-full rounded-full border-[1.5px] border-primary/45 bg-white pl-11 pr-4 text-sm text-foreground shadow-[0_4px_20px_-10px_rgba(229,57,53,0.18)] outline-none transition-all placeholder:text-muted-foreground/80 hover:border-primary/70 focus:border-primary focus:shadow-[0_0_0_4px_rgba(229,57,53,0.12)]"
      />
    </div>
  );
}

