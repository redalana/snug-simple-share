import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Play, ShieldCheck } from "lucide-react";
import heroCath from "@/assets/hero-cathlab.jpg";
import heroMri from "@/assets/sol-mri.jpg";
import heroOr from "@/assets/sol-or.jpg";
import heroService from "@/assets/beyond-cathlab.jpg";

type Slide = {
  theme: string;
  eyebrow: string;
  headline: React.ReactNode;
  subtitle: string;
  image: string;
  imageAlt: string;
  card: { title: string; body: string };
  stats: { value: string; label: string }[];
  primary: { label: string; href: string };
  secondary: { label: string; href: string; icon?: boolean };
};

const SLIDES: Slide[] = [
  {
    theme: "Turnkey Solutions",
    eyebrow: "Trusted Healthcare Technology Partner",
    headline: (
      <>
        Complete Departments.
        <br />
        <span className="text-primary">Ready to Perform.</span>
      </>
    ),
    subtitle:
      "From planning to performance, we deliver fully integrated medical departments engineered for better care and built to last.",
    image: heroCath,
    imageAlt: "Modern cath lab with biplane angiography imaging system",
    card: { title: "Turnkey. Total Care.", body: "One partner for every step." },
    stats: [
      { value: "30+", label: "Major Projects" },
      { value: "10+", label: "Countries" },
      { value: "250+", label: "Departments Delivered" },
      { value: "24/7", label: "Support" },
    ],
    primary: { label: "Explore Departments", href: "/turnkey" },
    secondary: { label: "Watch Full Overview", href: "#overview", icon: true },
  },
  {
    theme: "MRI Centers",
    eyebrow: "Advanced Diagnostic Imaging",
    headline: (
      <>
        Complete MRI Centers.
        <br />
        <span className="text-primary">Designed. Installed. Commissioned.</span>
      </>
    ),
    subtitle:
      "MRI departments delivered from planning through installation, shielding, commissioning and clinical training.",
    image: heroMri,
    imageAlt: "High-field MRI suite with premium finishes",
    card: {
      title: "MRI Turnkey Center",
      body: "High-performance diagnostic environments.",
    },
    stats: [
      { value: "MRI", label: "1.5T · 3T Systems" },
      { value: "CT", label: "Multi-Slice" },
      { value: "PET/CT", label: "Molecular Imaging" },
      { value: "Suite", label: "Advanced Imaging" },
    ],
    primary: { label: "Explore MRI", href: "/products" },
    secondary: { label: "View MRI Projects", href: "/projects" },
  },
  {
    theme: "Operating Rooms",
    eyebrow: "Surgical Infrastructure",
    headline: (
      <>
        Integrated Surgical Environments.
        <br />
        <span className="text-primary">Built For Performance.</span>
      </>
    ),
    subtitle:
      "Operating Rooms engineered for workflow efficiency, patient safety and surgical precision.",
    image: heroOr,
    imageAlt: "Modern hybrid operating room with integrated imaging",
    card: { title: "Hybrid OR", body: "Turnkey operating room solution." },
    stats: [
      { value: "Hybrid", label: "OR Suites" },
      { value: "OR", label: "Operating Rooms" },
      { value: "ICU", label: "Critical Care" },
      { value: "MEP", label: "Infrastructure" },
    ],
    primary: { label: "Explore Operating Rooms", href: "/turnkey" },
    secondary: { label: "See Turnkey Process", href: "/turnkey#process" },
  },
  {
    theme: "After Sales",
    eyebrow: "Lifecycle Partnership",
    headline: (
      <>
        Supporting Hospitals
        <br />
        <span className="text-primary">Beyond Installation.</span>
      </>
    ),
    subtitle:
      "Preventive maintenance, spare parts, biomedical engineering, upgrades and clinical support throughout the equipment lifecycle.",
    image: heroService,
    imageAlt: "Biomedical engineer servicing advanced imaging equipment",
    card: { title: "After Sales Support", body: "Long-term partnership." },
    stats: [
      { value: "24/7", label: "Response" },
      { value: "PM", label: "Maintenance" },
      { value: "OEM", label: "Spare Parts" },
      { value: "Clinical", label: "Training" },
    ],
    primary: { label: "Explore After Sales", href: "/#after-sales" },
    secondary: { label: "Contact Support", href: "/contact" },
  },
];

const AUTOPLAY_MS = 6000;
const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef<HTMLElement>(null);

  const goTo = useCallback((i: number) => {
    setIndex(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);
  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  // Autoplay
  useEffect(() => {
    if (paused || reduce) return;
    const t = window.setTimeout(() => goTo(index + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(t);
  }, [index, paused, reduce, goTo]);

  // Preload upcoming
  useEffect(() => {
    SLIDES.forEach((s, i) => {
      if (i === 0) return;
      const img = new Image();
      img.src = s.image;
    });
  }, []);

  // Keyboard
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) next();
    else if (info.offset.x > 60) prev();
  };

  const slide = SLIDES[index];

  return (
    <section
      ref={rootRef}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="AbuFarha Medical Equipment featured solutions"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative overflow-hidden bg-gradient-to-b from-secondary to-background pt-[108px] outline-none focus-visible:ring-2 focus-visible:ring-primary/40 lg:pt-[116px] xl:pt-[164px]"
    >
      {/* ── Background scene (crossfade) ─────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="mx-auto h-full max-w-[100rem] px-6 lg:px-10">
          <div className="relative h-full">
            <AnimatePresence mode="sync">
              <motion.div
                key={`bg-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: EASE }}
                className="absolute inset-0 overflow-hidden rounded-[1.25rem]"
              >
                <motion.img
                  src={slide.image}
                  alt={slide.imageAlt}
                  width={1536}
                  height={1024}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  loading={index === 0 ? "eager" : "lazy"}
                  initial={{ scale: 1.08 }}
                  animate={reduce ? { scale: 1.08 } : { scale: 1.16 }}
                  transition={{ duration: 8, ease: "linear" }}
                  className="absolute right-0 top-0 h-full w-[66%] object-cover object-[70%_center] will-change-transform"
                />
                <div className="absolute inset-y-0 right-[34%] w-[34%] bg-gradient-to-r from-background via-background/85 to-transparent" />
                <div className="absolute inset-y-0 left-0 w-[34%] bg-background" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/50 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Floating info card */}
            <div className="pointer-events-none absolute bottom-16 right-4 z-20 hidden xl:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`card-${index}`}
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
                  className="pointer-events-auto"
                >
                  <motion.div
                    animate={reduce ? undefined : { y: [0, -8, 0] }}
                    transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                    className="w-[280px] rounded-2xl border border-white/60 bg-white/85 p-5 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl"
                  >
                    <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                      {slide.theme}
                    </div>
                    <div className="font-display text-lg font-extrabold text-ink">
                      {slide.card.title}
                    </div>
                    <div className="mt-1 text-sm leading-snug text-muted-foreground">
                      {slide.card.body}
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -left-40 top-24 h-[520px] w-[520px] rounded-full bg-primary/5 blur-3xl lg:hidden" />

      {/* ── Content ─────────────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-[100rem] px-6 py-9 lg:px-10 lg:py-14">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={onDragEnd}
          className="pl-0 lg:max-w-[46%] lg:pl-12"
          style={{ minHeight: "clamp(560px, 62vh, 680px)" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`copy-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
              className="relative z-10"
            >
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary"
              >
                {slide.eyebrow}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.12 }}
                className="mt-5 font-display text-[2.5rem] font-extrabold leading-[1.04] tracking-[-0.02em] text-ink sm:text-[3rem] lg:text-[3.25rem]"
              >
                {slide.headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.22 }}
                className="mt-5 max-w-md text-[17px] leading-[1.65] text-muted-foreground"
              >
                {slide.subtitle}
              </motion.p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <motion.a
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: EASE, delay: 0.32 }}
                  href={slide.primary.href}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_16px_36px_-14px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
                >
                  {slide.primary.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: EASE, delay: 0.4 }}
                  href={slide.secondary.href}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-7 py-3.5 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  {slide.secondary.icon ? (
                    <Play className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
                  ) : null}
                  {slide.secondary.label}
                </motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.48 }}
                className="mt-4 flex items-center gap-2 text-[13px] font-medium text-muted-foreground"
              >
                <ShieldCheck className="h-4 w-4 text-primary" />
                Backed by a 1-year free warranty on every installation.
              </motion.div>

              <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-border pt-6 sm:grid-cols-4">
                {slide.stats.map((s, i) => (
                  <motion.div
                    key={`${index}-${s.label}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      ease: EASE,
                      delay: 0.5 + i * 0.08,
                    }}
                  >
                    <div className="font-display text-2xl font-extrabold leading-none text-ink">
                      {s.value}
                    </div>
                    <div className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Mobile scene */}
        <div className="relative mt-12 overflow-hidden rounded-[1.25rem] shadow-[0_30px_70px_-34px_rgba(15,23,42,0.35)] ring-1 ring-black/5 lg:hidden">
          <AnimatePresence mode="sync">
            <motion.img
              key={`m-${index}`}
              src={slide.image}
              alt={slide.imageAlt}
              width={1024}
              height={1280}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1.1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 0.9, ease: EASE }, scale: { duration: 8, ease: "linear" } }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
          <div className="relative h-[440px] w-full" />
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/60 bg-white/90 p-4 backdrop-blur-xl">
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
              {slide.theme}
            </div>
            <div className="mt-0.5 font-display text-base font-extrabold text-ink">
              {slide.card.title}
            </div>
          </div>
        </div>

        {/* ── Controls ────────────────────────────────────────────── */}
        <div className="relative z-30 mt-10 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {SLIDES.map((s, i) => (
              <button
                key={s.theme}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}: ${s.theme}`}
                aria-current={i === index}
                className="group flex items-center gap-2"
              >
                <span
                  className={`relative block h-[3px] overflow-hidden rounded-full transition-all duration-500 ${
                    i === index ? "w-14 bg-primary/25" : "w-6 bg-border"
                  }`}
                >
                  {i === index && !reduce && !paused ? (
                    <motion.span
                      key={`prog-${index}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                      style={{ transformOrigin: "left" }}
                      className="absolute inset-0 bg-primary"
                    />
                  ) : i === index ? (
                    <span className="absolute inset-0 bg-primary" />
                  ) : null}
                </span>
                <span
                  className={`hidden text-[11px] font-bold uppercase tracking-[0.18em] transition-colors md:inline ${
                    i === index ? "text-ink" : "text-muted-foreground group-hover:text-ink"
                  }`}
                >
                  0{i + 1}
                </span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
