import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronDown,
  Search,
  LayoutGrid,
  Package,
  Wrench,
  ShieldCheck,
  Headphones,
  Info,
  MessageCircle,
  Send,
  Phone,
  CalendarClock,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";
import heroImg from "@/assets/sol-mri.jpg";
import { cn } from "@/lib/utils";

const TITLE = "Frequently Asked Questions | AbuFarha Medical Supplies";
const DESC =
  "Find answers to the most common questions about our products, services, warranty and technical support.";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGES.afterSales },
      { property: "og:url", content: SITE_URL + "/faqs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/faqs" }],
  }),
  component: FaqsRoute,
});

type Category =
  | "All"
  | "Products"
  | "Services"
  | "Warranty"
  | "Support"
  | "General";

type QA = { q: string; a: React.ReactNode; category: Exclude<Category, "All"> };

const FAQS: QA[] = [
  {
    category: "Products",
    q: "What types of medical imaging equipment does AbuFarha Medical Supplies provide?",
    a: "We provide a wide range of advanced medical imaging equipment including Cath Lab Systems, MRI, CT, PET/CT, X-Ray, Mammography, C-Arm Systems, Bone Densitometers (DEXA), and more from leading global manufacturers.",
  },
  {
    category: "Services",
    q: "Do you provide installation and commissioning?",
    a: "Yes. Our biomedical engineering team delivers full installation, commissioning and site acceptance testing for every system we supply — coordinated end-to-end with the manufacturer and the hospital.",
  },
  {
    category: "Services",
    q: "Do you offer training for our medical and technical staff?",
    a: "Yes. We provide structured clinical and technical training programs for radiographers, biomedical engineers and clinicians to ensure your team operates the equipment safely and confidently from day one.",
  },
  {
    category: "Warranty",
    q: "What warranty do your products come with?",
    a: "Every system we deliver includes a standard manufacturer-backed warranty covering parts and technical support. Extended service agreements and maintenance contracts are available on request.",
  },
  {
    category: "Support",
    q: "Do you provide after-sales support and maintenance?",
    a: (
      <>
        Yes — preventive maintenance, corrective maintenance, spare parts,
        remote diagnostics, technical support and clinical training. See our{" "}
        <Link to="/after-sales" className="text-primary hover:underline">
          After Sales
        </Link>{" "}
        page for the full scope.
      </>
    ),
  },
  {
    category: "General",
    q: "Can you help with hospital planning and turnkey projects?",
    a: (
      <>
        Yes. We deliver turnkey imaging and cardiology departments — planning,
        equipment supply, installation, commissioning, training and long-term
        support. Learn more on our{" "}
        <Link to="/turnkey" className="text-primary hover:underline">
          Turnkey
        </Link>{" "}
        page.
      </>
    ),
  },
  {
    category: "Products",
    q: "Do you sell new or refurbished equipment?",
    a: "Both. We supply new equipment as well as professionally inspected and refurbished systems that undergo thorough testing and quality assurance before delivery.",
  },
  {
    category: "General",
    q: "How can I request a quote?",
    a: (
      <>
        Use the Request a Quote button in the header, or visit our{" "}
        <Link to="/contact" className="text-primary hover:underline">
          Contact
        </Link>{" "}
        page. Share your project requirements and our team will respond within
        one to two business days.
      </>
    ),
  },
];

const CATEGORIES: { key: Category; label: string; Icon: typeof LayoutGrid }[] = [
  { key: "All", label: "All Categories", Icon: LayoutGrid },
  { key: "Products", label: "Products", Icon: Package },
  { key: "Services", label: "Services", Icon: Wrench },
  { key: "Warranty", label: "Warranty", Icon: ShieldCheck },
  { key: "Support", label: "Support", Icon: Headphones },
  { key: "General", label: "General", Icon: Info },
];

function FaqsRoute() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter((f) => {
      const inCat = category === "All" || f.category === category;
      const inQ =
        !q ||
        f.q.toLowerCase().includes(q) ||
        (typeof f.a === "string" && f.a.toLowerCase().includes(q));
      return inCat && inQ;
    });
  }, [query, category]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[calc(96*var(--desktop-px-unit))]">
        <PageHero
          eyebrow="Support"
          breadcrumb="FAQs"
          title="Frequently Asked Questions"
          description="Find answers to the most common questions about our products, services, warranty and technical support."
          backgroundImage={heroImg}
        />

        <section className="bg-white pt-8 pb-6">
          <div className="mx-auto max-w-[72rem] px-6 lg:px-10">
            <div className="mt-2 inline-flex w-full items-center gap-2 rounded-2xl border border-primary/30 bg-white px-5 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
              <Search className="h-5 w-5 text-primary" aria-hidden />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Frequently Asked Questions..."
                aria-label="Search Frequently Asked Questions"
                className="w-full bg-transparent text-[15px] text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {CATEGORIES.map(({ key, label, Icon }) => {
                const active = category === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setCategory(key)}
                    aria-pressed={active}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors",
                      active
                        ? "border-primary bg-primary text-primary-foreground shadow-sm"
                        : "border-border bg-white text-foreground hover:border-primary/40 hover:text-primary",
                    )}
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white pb-16">
          <div className="mx-auto max-w-[72rem] px-6 lg:px-10">
            <div className="flex flex-col gap-3">
              {filtered.map((qa, idx) => {
                const open = openIndex === idx;
                return (
                  <div
                    key={qa.q}
                    className="rounded-2xl border border-border/70 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-md"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? null : idx)}
                      aria-expanded={open}
                      className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    >
                      <span
                        className={cn(
                          "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                          open
                            ? "bg-primary text-primary-foreground"
                            : "bg-primary/10 text-primary",
                        )}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-semibold text-foreground">
                        {qa.q}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 shrink-0 text-primary transition-transform duration-200",
                          open && "rotate-180",
                        )}
                        aria-hidden
                      />
                    </button>
                    {open ? (
                      <div className="px-5 pb-5 pl-[calc(20px+36px+16px)] text-[15px] leading-relaxed text-muted-foreground sm:px-6 sm:pb-6 sm:pl-[calc(24px+36px+16px)]">
                        {qa.a}
                      </div>
                    ) : null}
                  </div>
                );
              })}
              {filtered.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
                  No questions match your search. Try a different keyword or
                  category.
                </div>
              ) : null}
            </div>

            <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-5">
                  <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-primary/20">
                    <MessageCircle className="h-7 w-7 text-primary" aria-hidden />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-black tracking-tight text-foreground sm:text-2xl">
                      Still need help?
                    </h2>
                    <p className="mt-1 max-w-xl text-sm text-muted-foreground sm:text-[15px]">
                      Our team is ready to assist you with any questions or
                      custom requirements.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                  >
                    <Send className="h-4 w-4" aria-hidden />
                    Contact Us
                  </Link>
                  <a
                    href="tel:+96264026063"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Phone className="h-4 w-4" aria-hidden />
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <CalendarClock className="h-3.5 w-3.5 text-primary" aria-hidden />
              We're here to help you 24/7
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
