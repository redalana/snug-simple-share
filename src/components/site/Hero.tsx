import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Factory,
  GraduationCap,
  LifeBuoy,
  Package,
  Play,
  ShieldCheck,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

import heroCath from "@/assets/hero-cathlab.jpg";
import turnkeyInstall from "@/assets/turnkey-hero.jpg";
import engineerService from "@/assets/aftersales-engineering.jpg";


type TrustItem = { icon: LucideIcon; label: string };

type Slide = {
  theme: string;
  eyebrow: string;
  headline: React.ReactNode;
  subtitle: string;
  image: string;
  imageAlt: string;
  card: { title: string; body: string };
  trust: TrustItem[];
  primary: { label: string; href: string };
  secondary: { label: string; href: string; icon?: boolean };
};

const SLIDES: Slide[] = [
  {
    theme: "Medical Equipment",
    eyebrow: "Advanced Medical Imaging & Intervention",
    headline: (
      <>
        Advanced Medical Technology
        <br />
        <span className="text-primary">for Better Patient Outcomes.</span>
      </>
    ),
    subtitle:
      "AbuFarha supplies certified imaging and interventional systems — Cath Lab, MRI, CT, PET/CT, C-Arm and more — from the world's leading OEMs to hospitals across Africa and the Middle East.",
    image: heroCath,
    imageAlt: "Modern cath lab suite with advanced interventional imaging system",
    card: { title: "Certified Medical Systems", body: "Imaging and interventional technology, delivered." },
    trust: [
      { icon: BadgeCheck, label: "Certified Systems" },
      { icon: Factory, label: "OEM Brands" },
      { icon: ShieldCheck, label: "Factory Refurbished Available" },
    ],
    primary: { label: "Explore Products", href: "/products" },
    secondary: { label: "Request a Quote", href: "/contact" },
  },
  {
    theme: "Turnkey Projects",
    eyebrow: "Design · Supply · Install · Commission",
    headline: (
      <>
        Complete Turnkey Healthcare Projects.
        <br />
        <span className="text-primary">From Design to Commissioning.</span>
      </>
    ),
    subtitle:
      "A single partner across the full project lifecycle — site planning and shielding, equipment supply, installation, commissioning and clinical training — so departments open on schedule, fully compliant, and ready to treat patients.",
    image: turnkeyInstall,
    imageAlt: "Biomedical engineers installing and commissioning medical imaging equipment",
    card: { title: "Turnkey Delivery", body: "One partner, from blueprint to first patient." },
    trust: [
      { icon: ClipboardList, label: "Planning" },
      { icon: Wrench, label: "Installation" },
      { icon: BadgeCheck, label: "Commissioning" },
      { icon: GraduationCap, label: "Clinical Training" },
    ],
    primary: { label: "Explore Turnkey Projects", href: "/turnkey" },
    secondary: { label: "Talk to an Engineer", href: "/contact" },
  },
  {
    theme: "After-Sales",
    eyebrow: "Lifecycle Biomedical Engineering Support",
    headline: (
      <>
        Reliable After-Sales Support
        <br />
        <span className="text-primary">That Keeps Hospitals Running.</span>
      </>
    ),
    subtitle:
      "Preventive and corrective maintenance, genuine OEM spare parts, software updates, warranty coverage and 24/7 technical support — delivered by certified biomedical engineers on the ground.",
    image: engineerService,
    imageAlt: "Certified biomedical engineer servicing advanced medical imaging equipment",
    card: { title: "Always-On Support", body: "Certified engineers, genuine parts, 24/7." },
    trust: [
      { icon: LifeBuoy, label: "24/7 Support" },
      { icon: Zap, label: "Fast Response" },
      { icon: Package, label: "OEM Spare Parts" },
    ],
    primary: { label: "Explore Services", href: "/after-sales" },
    secondary: { label: "Contact Support", href: "/contact" },
  },
];


const AUTOPLAY_MS = 7500;
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

              <div className="mt-7 flex flex-wrap items-center gap-2 border-t border-border pt-6">
                {slide.trust.map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <motion.span
                      key={`${index}-${t.label}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: EASE, delay: 0.5 + i * 0.07 }}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/70 px-3 py-1.5 text-[12px] font-semibold text-ink shadow-sm backdrop-blur"
                    >
                      <Icon className="h-3.5 w-3.5 text-primary" strokeWidth={2.4} />
                      {t.label}
                    </motion.span>
                  );
                })}
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
          <div className="flex flex-wrap items-center gap-2">
            {SLIDES.map((s, i) => {
              const active = i === index;
              return (
                <button
                  key={s.theme}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}: ${s.theme}`}
                  aria-current={active}
                  className={`group flex min-w-[9rem] flex-col gap-2 rounded-lg px-3 py-2 text-left transition-colors sm:min-w-[11rem] ${
                    active ? "bg-primary/[0.04]" : "hover:bg-secondary/60"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`font-display text-[11px] font-extrabold tabular-nums transition-colors ${
                        active ? "text-primary" : "text-muted-foreground/70"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`text-[11px] font-bold uppercase tracking-[0.18em] transition-colors ${
                        active ? "text-ink" : "text-muted-foreground group-hover:text-ink"
                      }`}
                    >
                      {s.theme}
                    </span>
                  </span>
                  <span
                    className={`relative block h-[3px] overflow-hidden rounded-full transition-colors ${
                      active ? "bg-primary/20" : "bg-border"
                    }`}
                  >
                    {active && !reduce && !paused ? (
                      <motion.span
                        key={`prog-${index}`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                        style={{ transformOrigin: "left" }}
                        className="absolute inset-0 bg-primary"
                      />
                    ) : active ? (
                      <span className="absolute inset-0 bg-primary" />
                    ) : null}
                  </span>
                </button>
              );
            })}
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
