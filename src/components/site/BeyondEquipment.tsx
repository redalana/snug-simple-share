import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Wrench,
  Handshake,
  Cog,
  GraduationCap,
  ShieldCheck,
  Boxes,
  BadgeCheck,
  LifeBuoy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import cathlab from "@/assets/beyond-cathlab.jpg";

type Support = { label: string; items: string[] };

type Advantage = {
  id: string;
  label: string;
  title: string;
  /** Value statement — max 2 lines. */
  desc: string;
  /** Three evidence-based proof points. */
  points: string[];
  /** One practical hospital outcome. */
  outcome: string;
  /** Rotating contextual support block. */
  support: Support;
  /** Contextual CTA label. */
  cta: string;
  icon: LucideIcon;
  /** Hotspot position over the equipment image, in % of the frame. */
  x: number;
  y: number;
};

const ADVANTAGES: Advantage[] = [
  {
    id: "biomed",
    label: "Engineering-Led Delivery",
    title: "Biomedical Engineering",
    desc: "Every successful installation starts with engineering — not equipment delivery.",
    points: ["Site readiness assessment", "Clinical workflow planning", "Infrastructure & utility validation"],
    outcome: "Reduces implementation delays and ensures every system is ready for clinical operation from day one.",
    support: { label: "Typical Deliverables", items: ["Site Assessment", "Clinical Documentation", "Acceptance Testing"] },
    cta: "Explore Engineering Support",
    icon: Wrench,
    x: 24,
    y: 34,
  },
  {
    id: "oem",
    label: "Authorised Supply",
    title: "OEM Partnerships",
    desc: "We supply technologies backed by globally recognised medical manufacturers.",
    points: ["Original medical equipment", "Manufacturer standards", "Certified product portfolio"],
    outcome: "Ensures long-term reliability, compatibility and manufacturer-backed performance.",
    support: { label: "Backed By", items: ["OEM Certification", "Genuine Firmware", "Regulatory Compliance"] },
    cta: "Learn About OEM Partnerships",
    icon: Handshake,
    x: 55,
    y: 40,
  },
  {
    id: "install",
    label: "Commissioning",
    title: "Installation & Commissioning",
    desc: "Every system is installed, calibrated and verified before clinical use.",
    points: ["Installation", "Calibration", "Acceptance testing"],
    outcome: "Reduces commissioning time and ensures equipment performs to specification.",
    support: { label: "Typical Deliverables", items: ["Installation", "Calibration", "Acceptance Testing"] },
    cta: "Explore Commissioning",
    icon: Cog,
    x: 53,
    y: 80,
  },
  {
    id: "training",
    label: "Clinical Enablement",
    title: "Clinical Training",
    desc: "Technology delivers value only when clinical teams can use it confidently.",
    points: ["Physician training", "Clinical applications", "Workflow optimisation"],
    outcome: "Improves user confidence and supports more efficient clinical workflows.",
    support: { label: "Supported Teams", items: ["Physicians", "Nurses", "Biomedical Engineers"] },
    cta: "Explore Clinical Training",
    icon: GraduationCap,
    x: 90,
    y: 56,
  },
  {
    id: "maintenance",
    label: "Service & Uptime",
    title: "Preventive Maintenance",
    desc: "Prevent issues before they interrupt patient care.",
    points: ["Scheduled service visits", "Performance testing", "Preventive inspections"],
    outcome: "Minimises unexpected downtime and extends equipment lifespan.",
    support: { label: "Operational Benefits", items: ["Reduced Downtime", "Higher Availability", "Extended Lifespan"] },
    cta: "Discover Our Maintenance Program",
    icon: ShieldCheck,
    x: 78,
    y: 26,
  },
  {
    id: "parts",
    label: "Parts & Logistics",
    title: "Original Spare Parts",
    desc: "Reliable access to genuine replacement parts keeps critical systems operational.",
    points: ["Genuine components", "Fast regional availability", "OEM compatibility"],
    outcome: "Reduces repair time and protects long-term equipment performance.",
    support: { label: "Operational Benefits", items: ["Faster Repairs", "Regional Stock", "Traceable Parts"] },
    cta: "Explore Parts & Logistics",
    icon: Boxes,
    x: 39,
    y: 24,
  },
  {
    id: "warranty",
    label: "Service Coverage",
    title: "Warranty Programs",
    desc: "Flexible warranty coverage designed around healthcare operations.",
    points: ["Extended coverage", "Service protection", "Priority support"],
    outcome: "Provides predictable service costs and greater operational confidence.",
    support: { label: "Coverage Includes", items: ["Extended Cover", "Priority Response", "Predictable Costs"] },
    cta: "Explore Warranty Programs",
    icon: BadgeCheck,
    x: 84,
    y: 33,
  },
  {
    id: "support",
    label: "Lifecycle Support",
    title: "Lifetime Technical Support",
    desc: "Our relationship continues long after installation.",
    points: ["Remote assistance", "On-site engineering", "Long-term support"],
    outcome: "Hospitals receive continuous technical guidance throughout the equipment lifecycle.",
    support: { label: "Support Channels", items: ["Remote Assistance", "On-site Engineering", "Lifecycle Guidance"] },
    cta: "Explore Lifecycle Support",
    icon: LifeBuoy,
    x: 74,
    y: 50,
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const AUTOPLAY_MS = 4000;
const RESUME_DELAY_MS = 2000;

// One coordinated reveal — children stagger so the panel feels like a single animation.
const panelContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
};
const panelItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

export function BeyondEquipment() {
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = ADVANTAGES[activeIndex];
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Autoplay: advance every AUTOPLAY_MS while not paused.
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActiveIndex((i) => (i + 1) % ADVANTAGES.length), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [activeIndex, paused]);

  // Preload the hero once so there is never a white flash on switch.
  useEffect(() => {
    const img = new Image();
    img.src = cathlab;
  }, []);

  useEffect(() => () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

  const pause = useCallback(() => {
    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current);
      resumeTimer.current = null;
    }
    setPaused(true);
  }, []);

  const scheduleResume = useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_DELAY_MS);
  }, []);

  const select = useCallback(
    (i: number) => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
      setActiveIndex(i);
      setPaused(true);
      resumeTimer.current = setTimeout(() => setPaused(false), RESUME_DELAY_MS);
    },
    [],
  );

  return (
    <section id="advantage" className="relative overflow-hidden bg-white py-20 lg:py-20">
      {/* Whisper-quiet engineering grid — present, never noisy */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border) calc(1 * var(--desktop-px-unit)), transparent calc(1 * var(--desktop-px-unit))), linear-gradient(to bottom, var(--color-border) calc(1 * var(--desktop-px-unit)), transparent calc(1 * var(--desktop-px-unit)))",
          backgroundSize: "calc(80 * var(--desktop-px-unit)) calc(80 * var(--desktop-px-unit))",
          maskImage: "radial-gradient(ellipse 85% 70% at 50% 25%, black 25%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 70% at 50% 25%, black 25%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-3xl">
          <Eyebrow index="03">Beyond the Equipment</Eyebrow>
          <h2 className="mt-4 font-display text-[2.25rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[2.9rem]">
            Why leading healthcare providers trust
            <br className="hidden sm:block" /> AbuFarha long after installation.
          </h2>
          <p className="mt-5 max-w-2xl text-[calc(17 * var(--desktop-px-unit))] leading-[1.6] text-muted-foreground">
            Anyone can deliver a machine. We deliver a medical technology partnership —
            engineered, supported and accountable for the entire life of your equipment.
          </p>
        </div>

        {/* ============ DESKTOP / TABLET ============ */}
        <div
          className="mt-12 hidden gap-8 lg:grid lg:grid-cols-[1.72fr_1fr] lg:gap-9"
          onMouseEnter={pause}
          onMouseLeave={scheduleResume}
        >
          {/* Interactive equipment stage */}
          <div className="relative -mb-6 self-start overflow-hidden rounded-3xl bg-secondary/40 shadow-[0_60px_140px_-40px_rgba(15,23,42,0.55)] ring-1 ring-inset ring-white/60">
            <motion.div
              className="relative aspect-[13/11] w-full will-change-transform"
              animate={reduce ? undefined : { scale: [1, 1.02, 1] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={cathlab}
                alt="Modern hospital cath lab equipped and commissioned by AbuFarha Medical"
                width={1600}
                height={1200}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover contrast-[1.06] saturate-[1.03]"
              />
              {/* subtle depth: cool clarity from top, gentle grounding at base */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-ink/12" />
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_-40px_rgba(15,23,42,0.35)]" />

              {/* connection annotation */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden
              >
                <AnimatePresence mode="wait">
                  <motion.line
                    key={active.id}
                    x1={active.x}
                    y1={active.y}
                    x2={active.x}
                    y2={active.y > 50 ? active.y - 13 : active.y + 13}
                    stroke="var(--color-primary)"
                    strokeWidth={0.4}
                    strokeDasharray="1.2 1.4"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 0.85, pathLength: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.55, ease: EASE }}
                    vectorEffect="non-scaling-stroke"
                  />
                </AnimatePresence>
              </svg>

              {/* Hotspots — engineering annotations */}
              {ADVANTAGES.map((a, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={a.id}
                    type="button"
                    onMouseEnter={() => select(i)}
                    onFocus={() => select(i)}
                    onClick={() => select(i)}
                    aria-label={`${a.title} — advantage ${i + 1} of ${ADVANTAGES.length}`}
                    aria-pressed={isActive}
                    className="group absolute z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    style={{ left: `${a.x}%`, top: `${a.y}%` }}
                  >
                    {/* related-area highlight */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          aria-hidden
                          initial={{ scale: 0.4, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.4, opacity: 0 }}
                          transition={{ duration: 0.55, ease: EASE }}
                          className="absolute h-16 w-16 rounded-full border border-primary/40 bg-primary/[0.06]"
                        />
                      )}
                    </AnimatePresence>
                    {/* soft pulse only when active */}
                    {isActive && !reduce && (
                      <span className="absolute h-6 w-6 animate-ping rounded-full bg-primary/25" />
                    )}
                    {/* the annotation dot */}
                    <span
                      className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                        isActive
                          ? "h-3.5 w-3.5 bg-primary shadow-[0_4px_14px_-2px_var(--color-primary)] ring-4 ring-primary/15"
                          : "h-2.5 w-2.5 bg-ink/25 ring-4 ring-white/50 group-hover:bg-primary/70 group-hover:ring-primary/15"
                      }`}
                    />
                  </button>
                );
              })}
            </motion.div>

            {/* stage caption */}
            <div className="flex items-center justify-between gap-3 border-t border-border bg-white/70 px-6 py-3.5 backdrop-blur-sm">
              <span className="text-[calc(11 * var(--desktop-px-unit))] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Interactive · Cath Lab Suite
              </span>
              <span className="text-[calc(11 * var(--desktop-px-unit))] font-medium text-muted-foreground/80 tabular-nums">
                {String(activeIndex + 1).padStart(2, "0")} / {String(ADVANTAGES.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Right column: premium nav + editorial panel */}
          <div className="flex flex-col">
            {/* Advantage navigation */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-1">
              {ADVANTAGES.map((a, i) => {
                const isActive = i === activeIndex;
                const Icon = a.icon;
                return (
                  <button
                    key={a.id}
                    type="button"
                    onMouseEnter={() => select(i)}
                    onFocus={() => select(i)}
                    onClick={() => select(i)}
                    aria-pressed={isActive}
                    className="group relative flex items-center gap-3 rounded-lg py-2.5 pl-2 pr-2 text-left transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-[0_6px_14px_-6px_var(--color-primary)]"
                          : "bg-secondary/70 text-muted-foreground/70 group-hover:text-primary"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span
                      className={`text-[calc(13 * var(--desktop-px-unit))] leading-tight transition-colors duration-300 ${
                        isActive ? "font-bold text-ink" : "font-medium text-muted-foreground group-hover:text-ink"
                      }`}
                    >
                      {a.title}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="adv-active-underline"
                        className="absolute -bottom-px left-2 right-2 h-0.5 rounded-full bg-primary/70"
                        transition={{ type: "spring", stiffness: 480, damping: 42 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Editorial information panel */}
            <div className="relative mt-8 flex-1 overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-[0_2px_12px_-6px_rgba(15,23,42,0.15)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  variants={panelContainer}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, y: -8, transition: { duration: 0.25, ease: EASE } }}
                >
                  <motion.span
                    variants={panelItem}
                    className="block text-[calc(11 * var(--desktop-px-unit))] font-bold uppercase tracking-[0.24em] text-primary"
                  >
                    {active.label}
                  </motion.span>
                  <motion.h3
                    variants={panelItem}
                    className="mt-3 font-display text-[2.1rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink"
                  >
                    {active.title}
                  </motion.h3>
                  <motion.p
                    variants={panelItem}
                    className="mt-4 text-[calc(16 * var(--desktop-px-unit))] leading-[1.6] text-muted-foreground"
                  >
                    {active.desc}
                  </motion.p>

                  <motion.ul variants={panelItem} className="mt-6 flex flex-col gap-3.5">
                    {active.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-[calc(15.5 * var(--desktop-px-unit))] font-medium text-ink">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary/8 text-primary ring-1 ring-inset ring-primary/12">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </motion.ul>

                  {/* Hospital Outcome — the emotional anchor */}
                  <motion.div
                    variants={panelItem}
                    className="mt-7 rounded-xl border border-primary/15 bg-primary/[0.035] px-5 py-4"
                  >
                    <div className="flex items-center gap-2 text-[calc(10 * var(--desktop-px-unit))] font-bold uppercase tracking-[0.2em] text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Hospital Outcome
                    </div>
                    <p className="mt-2 text-[calc(14.5 * var(--desktop-px-unit))] font-medium leading-[1.6] text-ink">
                      {active.outcome}
                    </p>
                  </motion.div>

                  {/* Rotating contextual support block */}
                  <motion.div variants={panelItem} className="mt-5">
                    <div className="text-[calc(10 * var(--desktop-px-unit))] font-semibold uppercase tracking-[0.18em] text-muted-foreground/70">
                      {active.support.label}
                    </div>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {active.support.items.map((it) => (
                        <span
                          key={it}
                          className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-[calc(12 * var(--desktop-px-unit))] font-semibold text-ink/80"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.a
                    variants={panelItem}
                    href="/contact"
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-primary"
                  >
                    {active.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ============ MOBILE: image first, swipe between advantages ============ */}
        <div className="mt-10 lg:hidden">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-[0_30px_70px_-40px_rgba(15,23,42,0.4)]">
            <div className="relative aspect-[4/3] w-full">
              <img
                src={cathlab}
                alt="Modern hospital cath lab equipped and commissioned by AbuFarha Medical"
                width={1600}
                height={1200}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover contrast-[1.06] saturate-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-ink/12" />
              {ADVANTAGES.map((a, i) => (
                <span
                  key={a.id}
                  aria-hidden
                  className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "h-3 w-3 bg-primary ring-4 ring-primary/15"
                      : "h-2 w-2 bg-ink/25 ring-4 ring-white/50"
                  }`}
                  style={{ left: `${a.x}%`, top: `${a.y}%` }}
                />
              ))}
            </div>
          </div>

          <p className="mt-4 text-center text-[calc(11 * var(--desktop-px-unit))] font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">
            Swipe to explore the partnership
          </p>

          <div className="-mx-6 mt-3 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ADVANTAGES.map((a, i) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.id}
                  onClick={() => setActiveIndex(i)}
                  className="w-[85%] shrink-0 snap-center rounded-2xl border border-border bg-white p-6 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.12)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/8 text-primary ring-1 ring-inset ring-primary/12">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-[calc(11 * var(--desktop-px-unit))] font-bold uppercase tracking-[0.2em] text-primary">
                      {String(i + 1).padStart(2, "0")} · {a.label}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-extrabold leading-tight tracking-[-0.02em] text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-[calc(14 * var(--desktop-px-unit))] leading-[1.6] text-muted-foreground">
                    {a.desc}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {a.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-[calc(13.5 * var(--desktop-px-unit))] font-medium text-ink">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary/8 text-primary ring-1 ring-inset ring-primary/12">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 rounded-xl border border-primary/15 bg-primary/[0.035] px-4 py-3">
                    <div className="flex items-center gap-2 text-[calc(9 * var(--desktop-px-unit))] font-bold uppercase tracking-[0.18em] text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Hospital Outcome
                    </div>
                    <p className="mt-1.5 text-[calc(13 * var(--desktop-px-unit))] font-medium leading-[1.55] text-ink">
                      {a.outcome}
                    </p>
                  </div>
                  <div className="mt-4">
                    <div className="text-[calc(9 * var(--desktop-px-unit))] font-semibold uppercase tracking-[0.18em] text-muted-foreground/70">
                      {a.support.label}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {a.support.items.map((it) => (
                        <span
                          key={it}
                          className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-[calc(11 * var(--desktop-px-unit))] font-semibold text-ink/80"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="/contact"
                    className="group mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-primary"
                  >
                    {a.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
