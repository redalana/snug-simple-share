import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Mail,
  MessageCircle,
  Search,
} from "lucide-react";
import heroCathlab from "@/assets/hero-cathlab.jpg";
import solMri from "@/assets/sol-mri.jpg";
import solCt from "@/assets/sol-ct.jpg";
import solPetct from "@/assets/sol-petct.jpg";
import solCarm from "@/assets/sol-carm.jpg";
import solOr from "@/assets/sol-or.jpg";
import solUltrasound from "@/assets/sol-ultrasound.jpg";
import solMammo from "@/assets/sol-mammo.jpg";
import solXray from "@/assets/sol-xray.jpg";
import solDexa from "@/assets/sol-dexa.jpg";
import solEswl from "@/assets/sol-eswl.jpg";
import solDes from "@/assets/sol-des.jpg";
import beyondCathlab from "@/assets/beyond-cathlab.jpg";
import whyCathlab from "@/assets/why-cathlab.jpg";
import abufarhaHq from "@/assets/abufarha-hq.jpg";

type Slide = {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  focus?: string;
};

const SLIDES: Slide[] = [
  {
    image: heroCathlab,
    category: "Cath Lab",
    title: "Refurbished Cath Lab Systems in Africa: Complete Buyer's Guide",
    excerpt:
      "Everything you need to know before investing in a refurbished cath lab system. Costs, benefits, installation, training, and after-sales support.",
    readTime: "8 min read",
    date: "May 20, 2026",
    focus: "center",
  },
  {
    image: solMri,
    category: "MRI",
    title: "Choosing Between 1.5T and 3T MRI for Your Hospital",
    excerpt:
      "A field-tested comparison of image quality, throughput, siting costs, and clinical fit — so you buy the scanner your program actually needs.",
    readTime: "7 min read",
    date: "May 15, 2026",
    focus: "center",
  },
  {
    image: solPetct,
    category: "PET/CT",
    title: "Building a Modern Molecular Imaging Program from the Ground Up",
    excerpt:
      "From radiopharmacy logistics to shielded rooms and reporting workflows — what it takes to launch PET/CT successfully.",
    readTime: "9 min read",
    date: "May 10, 2026",
    focus: "center",
  },
  {
    image: solOr,
    category: "Turnkey Projects",
    title: "Turnkey Hospital Departments: From Planning to Commissioning",
    excerpt:
      "How we deliver complete departments on time, on budget, and to the highest clinical standards across Africa and the Middle East.",
    readTime: "6 min read",
    date: "May 5, 2026",
    focus: "center 40%",
  },
];


type Article = {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
};

const LATEST: Article[] = [
  {
    image: solMri,
    category: "MRI",
    title: "MRI Technology Explained: A Complete Guide for Healthcare Providers",
    excerpt:
      "Understand MRI technology, applications, and how to choose the right system for your hospital.",
    readTime: "7 min read",
    date: "May 18, 2026",
  },
  {
    image: solCt,
    category: "CT Scan",
    title: "CT Scanners: Key Features, Benefits & Buying Considerations",
    excerpt:
      "A practical guide to selecting the best CT scanner for your clinical and budgetary needs.",
    readTime: "7 min read",
    date: "May 15, 2026",
  },
  {
    image: solPetct,
    category: "PET/CT",
    title: "Philips Gemini GXL 16 PET/CT Scanner: Advanced Molecular Imaging",
    excerpt:
      "Discover the clinical benefits and performance of the Philips Gemini GXL 16 PET/CT system.",
    readTime: "6 min read",
    date: "May 12, 2026",
  },
  {
    image: solOr,
    category: "Turnkey Projects",
    title: "Turnkey Hospital Projects: From Planning to Commissioning",
    excerpt:
      "How we deliver complete healthcare facilities on time, on budget, and to the highest standards.",
    readTime: "6 min read",
    date: "May 10, 2026",
  },
  {
    image: beyondCathlab,
    category: "After Sales",
    title: "After-Sales Support That Keeps Your Equipment Running",
    excerpt:
      "Our commitment to maintenance, spare parts, technical support, and maximum uptime.",
    readTime: "6 min read",
    date: "May 8, 2026",
  },
  {
    image: whyCathlab,
    category: "Biomedical",
    title: "The Role of Biomedical Engineering in Modern Healthcare",
    excerpt:
      "Why biomedical engineering is essential for safety, efficiency, and compliance.",
    readTime: "5 min read",
    date: "May 6, 2026",
  },
];

const MORE: Article[] = [
  {
    image: solUltrasound,
    category: "Ultrasound",
    title: "Advancements in Ultrasound Technology for Better Diagnosis",
    excerpt:
      "New transducer designs and AI-assisted imaging are reshaping bedside diagnostics.",
    readTime: "6 min read",
    date: "May 5, 2026",
  },
  {
    image: solOr,
    category: "Operating Room",
    title: "Modern Operating Room Equipment: Key Technologies",
    excerpt:
      "From integrated OR systems to advanced surgical lights — what a modern theatre needs.",
    readTime: "6 min read",
    date: "May 3, 2026",
  },
  {
    image: solCarm,
    category: "Imaging Solutions",
    title: "CT vs MRI: Which Imaging Solution is Right for Your Hospital?",
    excerpt:
      "Compare clinical use cases, cost of ownership, and siting requirements at a glance.",
    readTime: "6 min read",
    date: "May 1, 2026",
  },
  {
    image: solXray,
    category: "Technical Support",
    title: "Preventive Maintenance: The Key to Equipment Reliability",
    excerpt:
      "A structured PM program reduces downtime, extends lifetime and protects patient safety.",
    readTime: "6 min read",
    date: "Apr 29, 2026",
  },
  {
    image: solDexa,
    category: "Radiation Therapy",
    title: "Radiation Therapy Equipment: Latest Innovations",
    excerpt:
      "How new linear accelerators and planning software are improving oncology outcomes.",
    readTime: "6 min read",
    date: "Apr 27, 2026",
  },
  {
    image: abufarhaHq,
    category: "Hospital Planning",
    title: "Planning a New Hospital? Key Considerations for Success",
    excerpt:
      "Site readiness, workflow design and technology strategy — planned together, not in silos.",
    readTime: "6 min read",
    date: "Apr 25, 2026",
  },
];

const SORTS = ["Latest", "Oldest", "Most Popular"] as const;

export function BlogPage() {
  return (
    <div className="bg-white">
      <HeroSlider />
      <SearchBar />
      <ArticleGrid heading="Latest Articles" items={LATEST} />
      <CTABand />
      <ArticleGrid heading="More Articles" items={MORE} />
      <Pagination />
      <Newsletter />
    </div>
  );
}

/* ---------------- Hero Slider ---------------- */

function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = SLIDES.length;

  const next = useCallback(() => setActive((i) => (i + 1) % count), [count]);
  const prev = useCallback(
    () => setActive((i) => (i - 1 + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next, paused]);

  const slide = SLIDES[active];

  return (
    <section className="bg-white pt-[100px] xl:pt-[150px]">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <div
          className="relative h-[460px] w-full overflow-hidden rounded-3xl bg-ink shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)] sm:h-[520px] lg:h-[580px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="sync">
            <motion.img
              key={active}
              src={slide.image}
              alt={slide.title}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ objectPosition: slide.focus ?? "center center" }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          {/* Softer left gradient for legibility — keeps equipment visible */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/35 to-transparent" />

          {/* content — generous safe area */}
          <div className="relative z-10 flex h-full max-w-2xl flex-col justify-center px-8 py-16 sm:px-14 sm:py-20 lg:px-16 lg:py-20">

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
                  {slide.category}
                </span>
                <h1 className="mt-5 font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                  {slide.title}
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                  {slide.excerpt}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-5 text-xs font-medium text-white/80">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {slide.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> {slide.date}
                  </span>
                </div>
                <button
                  type="button"
                  className="group mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_18px_40px_-16px_rgba(220,38,38,0.6)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* arrows */}
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="absolute left-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-ink shadow-md backdrop-blur transition hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="absolute right-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-ink shadow-md backdrop-blur transition hover:bg-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* dots */}
          <div className="absolute inset-x-0 bottom-5 z-20 flex justify-center gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.title}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-8 bg-white" : "w-2 bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Search Bar ---------------- */

function SearchBar() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<(typeof SORTS)[number]>("Latest");
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white pt-10 lg:pt-14">
      <div className="mx-auto flex max-w-[87.5rem] flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search articles, topics, or keywords…"
            className="h-12 w-full rounded-full border border-border bg-white pl-11 pr-14 text-sm text-ink shadow-[0_2px_10px_-6px_rgba(15,23,42,0.15)] outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
          <button
            type="button"
            aria-label="Search"
            className="absolute right-1.5 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground transition hover:bg-primary-dark"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center gap-3 sm:shrink-0">
          <span className="text-sm font-medium text-muted-foreground">Sort by:</span>
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 min-w-[160px] items-center justify-between gap-2 rounded-full border border-border bg-white px-4 text-sm font-semibold text-ink transition hover:border-primary/40"
            >
              {sort}
              <ChevronDown
                className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open && (
              <div
                className="absolute right-0 top-full z-30 mt-2 w-[180px] overflow-hidden rounded-2xl border border-border bg-white p-1.5 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)]"
                onMouseLeave={() => setOpen(false)}
              >
                {SORTS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setSort(s);
                      setOpen(false);
                    }}
                    className={`block w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition ${
                      s === sort
                        ? "bg-primary/10 text-primary"
                        : "text-ink hover:bg-secondary"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Article Grid ---------------- */

function ArticleGrid({ heading, items }: { heading: string; items: Article[] }) {
  return (
    <section className="bg-white pt-10 lg:pt-14">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <h2 className="mb-6 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-[1.75rem]">
          {heading}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
          {items.map((a) => (
            <ArticleCard key={a.title} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ a }: { a: Article }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_2px_10px_-4px_rgba(15,23,42,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_28px_50px_-28px_rgba(15,23,42,0.35)]"
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-secondary">
        <img
          src={a.image}
          alt={a.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
          {a.category}
        </span>
        <h3 className="mt-2 font-display text-lg font-extrabold leading-snug text-ink transition-colors group-hover:text-primary">
          {a.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {a.excerpt}
        </p>
        <div className="mt-5 flex items-center gap-5 border-t border-border pt-4 text-xs font-medium text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> {a.readTime}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" /> {a.date}
          </span>
        </div>
      </div>
    </motion.a>
  );
}

/* ---------------- CTA Band ---------------- */

function CTABand() {
  return (
    <section className="bg-white pt-14 lg:pt-20">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(90deg,#fff5f5_0%,#fff_60%)] p-6 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.08)] ring-1 ring-primary/10 sm:p-8">
          <div className="grid items-center gap-6 lg:grid-cols-[auto_1fr_auto_auto]">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-white shadow-sm ring-1 ring-primary/15">
              <MessageCircle className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-extrabold text-ink sm:text-[1.4rem]">
                Need help choosing the right medical equipment?
              </h3>
              <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">
                Our experts are here to help you find the best solution for your
                facility and budget.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-[0_18px_36px_-16px_rgba(220,38,38,0.55)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:border-[#25D366]/40 hover:text-[#128C7E]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
            <div className="hidden h-32 w-56 shrink-0 overflow-hidden rounded-2xl lg:block">
              <img
                src={whyCathlab}
                alt="Medical specialists"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pagination ---------------- */

function Pagination() {
  const [page, setPage] = useState(1);
  const pages = useMemo(() => [1, 2, 3, 4, 5, "…", 10] as const, []);

  return (
    <section className="bg-white pt-12 lg:pt-16">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <nav
          aria-label="Pagination"
          className="flex flex-wrap items-center justify-center gap-2"
        >
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-white px-4 text-sm font-semibold text-ink transition hover:border-primary/40 hover:text-primary disabled:opacity-40"
            disabled={page === 1}
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </button>
          {pages.map((p, i) =>
            typeof p === "number" ? (
              <button
                key={p}
                type="button"
                onClick={() => setPage(p)}
                aria-current={p === page ? "page" : undefined}
                className={`h-10 min-w-10 rounded-full px-3 text-sm font-bold transition ${
                  p === page
                    ? "bg-primary text-primary-foreground shadow-[0_10px_24px_-12px_rgba(220,38,38,0.6)]"
                    : "border border-border bg-white text-ink hover:border-primary/40 hover:text-primary"
                }`}
              >
                {p}
              </button>
            ) : (
              <span
                key={`ellipsis-${i}`}
                className="px-2 text-sm text-muted-foreground"
              >
                {p}
              </span>
            ),
          )}
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(10, p + 1))}
            className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-white px-4 text-sm font-semibold text-ink transition hover:border-primary/40 hover:text-primary"
          >
            Next <ChevronRight className="h-4 w-4" />
          </button>
        </nav>
      </div>
    </section>
  );
}

/* ---------------- Newsletter ---------------- */

function Newsletter() {
  const [email, setEmail] = useState("");
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-secondary p-6 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.04] sm:p-8">
          <div className="grid items-center gap-6 lg:grid-cols-[auto_1fr_auto_auto]">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-white shadow-sm ring-1 ring-primary/15">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-extrabold text-ink sm:text-[1.4rem]">
                Stay updated with the latest medical technology insights
              </h3>
              <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">
                Subscribe to our newsletter and never miss an important update.
              </p>
            </div>
            <form
              className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="h-12 w-full min-w-[240px] rounded-full border border-border bg-white px-5 text-sm text-ink outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10 sm:w-[260px]"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-[0_18px_36px_-16px_rgba(220,38,38,0.55)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                Subscribe
              </button>
            </form>
            <div className="hidden h-32 w-56 shrink-0 overflow-hidden rounded-2xl lg:block">
              <img
                src={solDes}
                alt="Healthcare newsletter"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12.04 2.5A9.5 9.5 0 0 0 3.9 16.86L3 21.5l4.77-.88A9.5 9.5 0 1 0 12.04 2.5Zm0 1.7a7.8 7.8 0 0 1 5.5 13.3 7.8 7.8 0 0 1-9.34 1.24l-.34-.2-2.83.52.53-2.76-.22-.35A7.8 7.8 0 0 1 12.04 4.2Zm-2.5 3.4c-.2 0-.5.08-.77.37-.26.29-1 .98-1 2.4s1.03 2.78 1.17 2.97c.15.2 2 3.05 4.85 4.16 2.36.93 2.84.75 3.36.7.51-.05 1.66-.68 1.9-1.33.23-.66.23-1.22.16-1.33-.07-.11-.26-.18-.55-.32-.29-.15-1.71-.85-1.98-.94-.26-.1-.46-.15-.65.14-.19.29-.74.94-.9 1.13-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.6-1.99-.17-.29-.02-.44.12-.59.13-.13.29-.34.44-.51.14-.17.19-.29.29-.48.1-.2.05-.37-.02-.51-.08-.15-.65-1.57-.9-2.15-.24-.57-.48-.49-.65-.5h-.55Z"
        fill="#25D366"
      />
    </svg>
  );
}
