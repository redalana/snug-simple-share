import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
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
    icon: LifeBuoy,
    x: 74,
    y: 50,
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function BeyondEquipment() {
  const [activeId, setActiveId] = useState(ADVANTAGES[0].id);
  const active = ADVANTAGES.find((a) => a.id === activeId) ?? ADVANTAGES[0];

  return (
    <section id="advantage" className="relative overflow-hidden bg-white py-20 lg:py-24">
      {/* Blueprint grid + subtle red accent field */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 85% 75% at 50% 30%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 75% at 50% 30%, black 30%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 30%, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 30%, black 0%, transparent 70%)",
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
          <p className="mt-5 max-w-2xl text-[17px] leading-[1.7] text-muted-foreground/90">
            Anyone can deliver a machine. We deliver a medical technology partnership —
            engineered, supported and accountable for the entire life of your equipment.
          </p>
        </div>

        {/* ============ DESKTOP / TABLET: interactive engineering layout ============ */}
        <div className="mt-12 hidden gap-8 lg:grid lg:grid-cols-[1.35fr_1fr] lg:gap-10">
          {/* Interactive equipment stage */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/40 shadow-[0_40px_100px_-50px_rgba(15,23,42,0.4)]">
            <motion.div
              className="relative aspect-[4/3] w-full"
              animate={{ scale: [1, 1.012, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={cathlab}
                alt="Modern hospital cath lab equipped and commissioned by AbuFarha Medical"
                width={1600}
                height={1200}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* daylight clarity wash — keeps it bright, never glowing */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/25 via-transparent to-white/10" />

              {/* connection line overlay */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden
              >
                <AnimatePresence>
                  <motion.line
                    key={active.id}
                    x1={active.x}
                    y1={active.y}
                    x2={active.x}
                    y2={active.y > 50 ? active.y - 14 : active.y + 14}
                    stroke="var(--color-primary)"
                    strokeWidth={0.4}
                    strokeDasharray="1.4 1.4"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 0.9, pathLength: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    vectorEffect="non-scaling-stroke"
                  />
                </AnimatePresence>
              </svg>

              {/* Hotspots */}
              {ADVANTAGES.map((a, i) => {
                const isActive = a.id === activeId;
                return (
                  <button
                    key={a.id}
                    type="button"
                    onMouseEnter={() => setActiveId(a.id)}
                    onFocus={() => setActiveId(a.id)}
                    onClick={() => setActiveId(a.id)}
                    aria-label={a.title}
                    aria-pressed={isActive}
                    className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${a.x}%`, top: `${a.y}%` }}
                  >
                    {/* highlight ring on related equipment area */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          aria-hidden
                          initial={{ scale: 0.4, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.4, opacity: 0 }}
                          transition={{ duration: 0.5, ease: EASE }}
                          className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50 bg-primary/5"
                        />
                      )}
                    </AnimatePresence>
                    {/* calm ping only when active */}
                    {isActive && (
                      <span className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-primary/30" />
                    )}
                    {/* the dot */}
                    <span
                      className={`relative flex h-6 w-6 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-300 ${
                        isActive
                          ? "scale-110 border-primary bg-primary text-primary-foreground shadow-[0_6px_16px_-4px_var(--color-primary)]"
                          : "border-ink/25 bg-white/80 text-ink/70 group-hover:border-primary group-hover:text-primary"
                      }`}
                    >
                      <span className="text-[10px] font-bold tabular-nums">{i + 1}</span>
                    </span>
                  </button>
                );
              })}
            </motion.div>

            {/* stage caption */}
            <div className="flex items-center justify-between gap-3 border-t border-border bg-white/70 px-5 py-3 backdrop-blur-sm">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">
                Interactive · Cath Lab Suite
              </span>
              <span className="text-[11px] font-medium text-muted-foreground/70">
                Explore 8 points of partnership
              </span>
            </div>
          </div>

          {/* Information panel */}
          <div className="flex flex-col">
            {/* selector rail */}
            <div className="mb-6 grid grid-cols-2 gap-2">
              {ADVANTAGES.map((a, i) => {
                const isActive = a.id === activeId;
                const Icon = a.icon;
                return (
                  <button
                    key={a.id}
                    type="button"
                    onMouseEnter={() => setActiveId(a.id)}
                    onFocus={() => setActiveId(a.id)}
                    onClick={() => setActiveId(a.id)}
                    className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left text-[12.5px] font-semibold transition-all duration-300 ${
                      isActive
                        ? "border-primary/40 bg-primary/[0.06] text-ink"
                        : "border-border bg-white text-muted-foreground/80 hover:border-primary/25 hover:text-ink"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="leading-tight">
                      <span className="mr-1 tabular-nums opacity-40">{i + 1}</span>
                      {a.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* panel content */}
            <div className="relative flex-1 overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.12)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                    {active.label}
                  </span>
                  <h3 className="mt-3 font-display text-[2.1rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">
                    {active.title}
                  </h3>
                  <p className="mt-4 text-[16px] leading-[1.7] text-muted-foreground/90">
                    {active.desc}
                  </p>
                  <ul className="mt-6 flex flex-col gap-3.5">
                    {active.points.map((p, i) => (
                      <motion.li
                        key={p}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: 0.1 + i * 0.08, ease: EASE }}
                        className="flex items-center gap-3 text-[15.5px] font-medium text-ink"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {p}
                      </motion.li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-primary"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
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
                className="absolute inset-0 h-full w-full object-cover"
              />
              {ADVANTAGES.map((a, i) => (
                <span
                  key={a.id}
                  aria-hidden
                  className={`absolute z-10 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-[9px] font-bold tabular-nums transition-colors ${
                    a.id === activeId
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-ink/25 bg-white/80 text-ink/70"
                  }`}
                  style={{ left: `${a.x}%`, top: `${a.y}%` }}
                >
                  {i + 1}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
            Swipe to explore the partnership
          </p>

          <div className="-mx-6 mt-3 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ADVANTAGES.map((a, i) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.id}
                  onClick={() => setActiveId(a.id)}
                  className="w-[85%] shrink-0 snap-center rounded-2xl border border-border bg-white p-6 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.12)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/8 text-primary ring-1 ring-inset ring-primary/12">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                      {String(i + 1).padStart(2, "0")} · {a.label}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-extrabold leading-tight tracking-[-0.02em] text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-muted-foreground/90">
                    {a.desc}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {a.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-[13.5px] font-medium text-ink">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="group mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-primary"
                  >
                    Learn More
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
