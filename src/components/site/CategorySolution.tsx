import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Wrench,
  HardHat,
  Stethoscope,
  Workflow,
  Package,
  CalendarCheck,
  GraduationCap,
  LifeBuoy,
  MonitorSmartphone,
  ShieldCheck,
  ClipboardCheck,
  Gauge,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Eyebrow } from "./Eyebrow";
import {
  getCategorySolution,
  useActiveCategoryId,
  type FeatureIcon,
} from "@/lib/solutions-category";

const ICONS: Record<FeatureIcon, LucideIcon> = {
  engineering: Wrench,
  installation: HardHat,
  clinical: Stethoscope,
  workflow: Workflow,
  parts: Package,
  maintenance: CalendarCheck,
  training: GraduationCap,
  support: LifeBuoy,
  remote: MonitorSmartphone,
  warranty: ShieldCheck,
  commissioning: ClipboardCheck,
  calibration: Gauge,
};

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Dynamic Product Solutions — answers "why choose AbuFarha for this product?"
 * for whichever category is currently selected in the Solutions rail above.
 * Content is driven entirely by `src/lib/solutions-category.ts`.
 */
export function CategorySolution() {
  const activeId = useActiveCategoryId();
  const s = getCategorySolution(activeId);

  return (
    <section
      id="category-solution"
      aria-labelledby="category-solution-heading"
      aria-live="polite"
      className="relative overflow-hidden bg-background py-16 lg:py-20"
    >
      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-14">
          {/* ---------------- Left: content ---------------- */}
          <div className="min-w-0">
            <Eyebrow>Complete Solution</Eyebrow>

            <AnimatePresence mode="wait">
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.38, ease: EASE }}
                className="will-change-[opacity,transform]"
              >
                <h2
                  id="category-solution-heading"
                  className="mt-4 max-w-[22ch] font-display text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[2.45rem]"
                >
                  {s.title}
                </h2>
                <p className="mt-3 max-w-[38ch] font-display text-[calc(17*var(--desktop-px-unit))] font-semibold leading-snug text-primary">
                  {s.subtitle}
                </p>
                <p className="mt-5 max-w-[52ch] text-[calc(16*var(--desktop-px-unit))] leading-[1.7] text-muted-foreground/90">
                  {s.description}
                </p>

                {/* Feature cards */}
                <ul className="mt-9 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {s.features.map((feat, i) => {
                    const Icon = ICONS[feat.icon];
                    return (
                      <motion.li
                        key={feat.label}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.34, delay: 0.06 + i * 0.05, ease: EASE }}
                        className="group flex min-w-0 gap-3 rounded-2xl border border-border/70 bg-secondary/30 p-4 transition-colors duration-300 hover:border-primary/25 hover:bg-secondary/50"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary ring-1 ring-inset ring-primary/12">
                          <Icon className="h-[calc(17*var(--desktop-px-unit))] w-[calc(17*var(--desktop-px-unit))]" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[calc(14*var(--desktop-px-unit))] font-bold leading-snug text-ink [overflow-wrap:anywhere]">
                            {feat.label}
                          </span>
                          <span className="mt-1 block text-[calc(12.5*var(--desktop-px-unit))] leading-snug text-muted-foreground/90 [overflow-wrap:anywhere]">
                            {feat.detail}
                          </span>
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Applications / facilities panel */}
                <div className="mt-8 grid overflow-hidden rounded-2xl border border-border/80 bg-secondary/25 sm:grid-cols-2 sm:divide-x sm:divide-border/70">
                  <div className="min-w-0 border-b border-border/70 px-5 py-5 sm:border-b-0">
                    <h3 className="text-[calc(10.5*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.16em] text-muted-foreground/70">
                      Applications
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {s.applications.map((a) => (
                        <li
                          key={a}
                          className="min-w-0 rounded-full bg-background px-3 py-1.5 text-[calc(12.5*var(--desktop-px-unit))] font-semibold text-ink shadow-xs ring-1 ring-border/70 [overflow-wrap:anywhere]"
                        >
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="min-w-0 px-5 py-5">
                    <h3 className="text-[calc(10.5*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.16em] text-muted-foreground/70">
                      Typical Facilities
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {s.facilities.map((v) => (
                        <li
                          key={v}
                          className="min-w-0 rounded-full bg-background px-3 py-1.5 text-[calc(12.5*var(--desktop-px-unit))] font-semibold text-ink shadow-xs ring-1 ring-border/70 [overflow-wrap:anywhere]"
                        >
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={s.primaryCta.href}
                    className="group inline-flex min-w-0 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-center text-sm font-bold text-primary-foreground shadow-[0_12px_28px_-10px_var(--color-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[0_18px_38px_-12px_var(--color-primary)]"
                  >
                    {s.primaryCta.label}
                    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href={s.secondaryCta.href}
                    className="inline-flex min-w-0 items-center justify-center gap-2 rounded-full border border-border/70 px-7 py-3.5 text-center text-sm font-semibold text-ink/80 transition-all duration-300 hover:border-ink/25 hover:bg-secondary/40 hover:text-ink"
                  >
                    {s.secondaryCta.label}
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ---------------- Right: image ---------------- */}
          <div className="order-first lg:order-last lg:sticky lg:top-24">
            <div className="relative aspect-4/3 overflow-hidden rounded-[1.25rem] bg-secondary shadow-[0_40px_80px_-40px_rgba(15,23,42,0.35)] ring-1 ring-black/5 lg:aspect-3/4">
              <AnimatePresence initial={false}>
                <motion.img
                  key={s.id}
                  src={s.image}
                  alt={s.imageAlt}
                  width={1200}
                  height={1600}
                  loading="lazy"
                  decoding="async"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.42, ease: EASE }}
                  className="absolute inset-0 h-full w-full object-cover object-[center_38%] will-change-[opacity,transform]"
                />
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
