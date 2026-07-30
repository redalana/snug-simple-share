import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Package,
  Wrench,
  Building2,
  BookOpen,
  Headphones,
  Scale,
  MessageCircle,
  Send,
  Phone,
  Search,
  ArrowRight,
  Home as HomeIcon,
  Boxes,
  CalendarDays,
  Briefcase,
  Globe2,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";
import heroImg from "@/assets/sol-mri.jpg";

const TITLE = "Sitemap | AbuFarha Medical Supplies";
const DESC =
  "Browse the complete AbuFarha Medical Supplies website including products, services, support, legal pages and company information.";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGES.home },
      { property: "og:url", content: SITE_URL + "/sitemap" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/sitemap" }],
  }),
  component: SitemapRoute,
});

type Group = {
  Icon: typeof Package;
  title: string;
  links: { label: string; to: string }[];
};

const GROUPS: Group[] = [
  {
    Icon: Package,
    title: "Products",
    links: [
      { label: "Cath Lab Systems", to: "/products/cath-lab" },
      { label: "MRI Systems", to: "/products/mri-scanners" },
      { label: "CT Scanners", to: "/products" },
      { label: "PET/CT Scanners", to: "/products/pet-ct-scanners" },
      { label: "X-Ray Systems", to: "/products/x-ray-systems" },
      { label: "C-Arms", to: "/products/c-arm-systems" },
      { label: "Mammography Systems", to: "/products/mammography-systems" },
      { label: "Bone Densitometers (DEXA)", to: "/products/bone-densitometers" },
      { label: "Lithotripsy (ESWL)", to: "/products/lithotripsy-eswl" },
      { label: "Others", to: "/products/others" },
    ],
  },
  {
    Icon: Wrench,
    title: "Services",
    links: [
      { label: "Installation & Commissioning", to: "/services" },
      { label: "Biomedical Engineering", to: "/services" },
      { label: "Clinical Training", to: "/services" },
      { label: "Preventive Maintenance", to: "/after-sales" },
      { label: "Corrective Maintenance", to: "/after-sales" },
      { label: "Spare Parts", to: "/after-sales" },
      { label: "Technical Support", to: "/after-sales" },
      { label: "Warranty Support", to: "/after-sales" },
    ],
  },
  {
    Icon: Building2,
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Turnkey Solutions", to: "/turnkey" },
      { label: "Brands", to: "/brands" },
      { label: "Global Presence", to: "/projects" },
      { label: "Why Choose AbuFarha", to: "/about" },
      { label: "Knowledge Center", to: "/blog" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    Icon: BookOpen,
    title: "Knowledge Center",
    links: [
      { label: "Articles", to: "/blog" },
      { label: "News", to: "/blog" },
      { label: "Resources", to: "/blog" },
      { label: "Case Studies", to: "/blog" },
      { label: "Events", to: "/blog" },
    ],
  },
  {
    Icon: Headphones,
    title: "Support",
    links: [
      { label: "Warranty", to: "/after-sales" },
      { label: "After Sales", to: "/after-sales" },
      { label: "Service Contracts", to: "/after-sales" },
      { label: "Technical Support", to: "/after-sales" },
      { label: "FAQs", to: "/faqs" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    Icon: Scale,
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms & Conditions", to: "/terms" },
      { label: "FAQs", to: "/faqs" },
      { label: "Sitemap", to: "/sitemap" },
    ],
  },
];

const STATS = [
  { value: "50+", label: "Medical Products", Icon: Boxes },
  { value: "Since 1999", label: "Engineering Healthcare", Icon: CalendarDays },
  { value: "30+", label: "Healthcare Projects", Icon: Briefcase },
  { value: "10+", label: "Countries Served", Icon: Globe2 },
];

function SitemapRoute() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return GROUPS;
    return GROUPS.map((g) => ({
      ...g,
      links: g.links.filter(
        (l) => l.label.toLowerCase().includes(query) || g.title.toLowerCase().includes(query),
      ),
    })).filter((g) => g.links.length > 0);
  }, [q]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[var(--header-h)]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-white pt-4 pb-10 sm:pb-14">
          <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex animate-fade-in items-center gap-2 text-sm text-muted-foreground"
            >
              <Link to="/" className="inline-flex items-center gap-1 hover:text-primary">
                <HomeIcon className="h-3.5 w-3.5" /> Home
              </Link>
              <span className="opacity-40">/</span>
              <span className="font-medium text-primary">Sitemap</span>
            </nav>

            <div className="relative overflow-hidden rounded-[calc(36*var(--desktop-px-unit))] bg-secondary/30">
              <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)]">
                <div className="relative z-10 flex animate-fade-in flex-col justify-center bg-white px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3.5 py-1.5 text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.2em] text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Navigation
                  </div>
                  <h1 className="mt-8 font-display text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3rem]">
                    Sitemap
                  </h1>
                  <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-[calc(17*var(--desktop-px-unit))]">
                    Navigate the entire AbuFarha Medical Supplies website — products, services,
                    company information and support — from one clear index.
                  </p>
                </div>

                <div className="relative min-h-[calc(300*var(--desktop-px-unit))] overflow-hidden bg-secondary/50 lg:min-h-[calc(420*var(--desktop-px-unit))]">
                  <img
                    src={heroImg}
                    alt=""
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 h-full w-full animate-fade-in object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-y-0 left-0 hidden w-20 bg-gradient-to-r from-white/50 to-transparent lg:block"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEARCH */}
        <section className="bg-white pb-6">
          <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
            <div className="relative mx-auto max-w-3xl">
              <Search
                className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <label htmlFor="sitemap-search" className="sr-only">
                Search the sitemap
              </label>
              <input
                id="sitemap-search"
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search pages, products or services..."
                className="h-14 w-full rounded-full border border-border bg-white pl-14 pr-6 text-[15px] text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary/40 focus:shadow-md focus:ring-2 focus:ring-primary/15"
              />
            </div>
          </div>
        </section>

        {/* CARDS */}
        <section className="bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map(({ Icon, title, links }) => {
                const originalIndex = GROUPS.findIndex((g) => g.title === title);
                return (
                  <article
                    key={title}
                    className="group flex animate-fade-in flex-col rounded-2xl border border-border bg-white p-7 shadow-sm transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:p-8"
                  >
                    <div className="flex items-center gap-4">
                      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15 transition-colors group-hover:bg-primary/15">
                        <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-[15px] font-black text-primary">
                          {String(originalIndex + 1).padStart(2, "0")}.
                        </span>
                        <h2 className="font-display text-[19px] font-black tracking-tight text-foreground">
                          {title}
                        </h2>
                      </div>
                    </div>

                    <div aria-hidden className="my-6 h-px w-full bg-border/70" />

                    <ul className="space-y-3.5 text-[14.5px]">
                      {links.map((l) => (
                        <li key={l.label + l.to}>
                          <Link
                            to={l.to}
                            className="group/link inline-flex items-center gap-1.5 text-muted-foreground transition-colors duration-200 hover:text-primary"
                          >
                            <span className="border-b border-transparent transition-colors duration-200 group-hover/link:border-primary">
                              {l.label}
                            </span>
                            <ArrowRight
                              className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100"
                              aria-hidden
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>

            {filtered.length === 0 ? (
              <p className="mt-10 text-center text-sm text-muted-foreground">
                No results for &ldquo;{q}&rdquo;. Try a different search term.
              </p>
            ) : null}

            {/* QUICK STATS */}
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map(({ value, label, Icon }) => (
                <div
                  key={label}
                  className="group flex items-center gap-5 rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
                  </div>
                  <div>
                    <div className="font-display text-3xl font-black leading-none tracking-tight text-foreground">
                      {value}
                    </div>
                    <div className="mt-1.5 text-sm text-muted-foreground">{label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Still need help */}
            <div className="relative mt-14 overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-8 sm:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div className="relative flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-6">
                  <div className="relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-primary/20">
                    <MessageCircle className="h-9 w-9 text-primary" aria-hidden />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                      Still need help?
                    </h2>
                    <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                      Our team is ready to assist you with any questions about our products,
                      services, or healthcare solutions.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-[15px] font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md"
                  >
                    <Send className="h-4 w-4" aria-hidden />
                    Contact Us
                  </Link>
                  <a
                    href="tel:+96264026063"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3.5 text-[15px] font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-md"
                  >
                    <Phone className="h-4 w-4" aria-hidden />
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
