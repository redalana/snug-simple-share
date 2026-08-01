import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Eyebrow } from "./Eyebrow";
import { CLINICAL_SOLUTIONS } from "@/lib/clinical-solutions";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Clinical Solutions — manual, tabbed showcase.
 *
 * No autoplay: the panel changes only on user interaction (click, arrow keys).
 * The image frame keeps a fixed 4:3 ratio across every tab so switching cannot
 * shift the layout.
 */
export function ExperienceAbuFarha() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState(CLINICAL_SOLUTIONS[0].id);
  const activeIndex = CLINICAL_SOLUTIONS.findIndex((s) => s.id === activeId);
  const active = CLINICAL_SOLUTIONS[Math.max(activeIndex, 0)];

  const move = (delta: number) => {
    const next = (activeIndex + delta + CLINICAL_SOLUTIONS.length) % CLINICAL_SOLUTIONS.length;
    setActiveId(CLINICAL_SOLUTIONS[next].id);
    document.getElementById(`clinical-tab-${CLINICAL_SOLUTIONS[next].id}`)?.focus();
  };

  const anim = reduce
    ? { initial: false as const, animate: { opacity: 1, y: 0 }, exit: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
      };

  return (
    <section
      id="experience"
      aria-labelledby="clinical-solutions-heading"
      className="relative overflow-hidden bg-white py-16 lg:py-20"
    >
      {/* Very subtle engineering grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-ink) calc(1*var(--desktop-px-unit)), transparent calc(1*var(--desktop-px-unit))), linear-gradient(to bottom, var(--color-ink) calc(1*var(--desktop-px-unit)), transparent calc(1*var(--desktop-px-unit)))",
          backgroundSize: "calc(72*var(--desktop-px-unit)) calc(72*var(--desktop-px-unit))",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[100rem] min-w-0 px-6 lg:px-10">
        {/* ------------------------------- Header ------------------------------ */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-3xl"
        >
          <Eyebrow index="04">Clinical Solutions</Eyebrow>
          <h2
            id="clinical-solutions-heading"
            className="mt-7 font-display text-[3.1rem] font-extrabold leading-[1.04] tracking-[-0.03em] text-ink sm:text-[3.8rem]"
          >
            Complete Care
            <span className="mt-1 block text-primary">Pathways.</span>
          </h2>
        </motion.div>

        {/* -------------------------------- Tabs ------------------------------- */}
        <div
          role="tablist"
          aria-label="Clinical solution areas"
          className="mt-9 flex min-w-0 flex-wrap gap-2.5"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") {
              e.preventDefault();
              move(1);
            } else if (e.key === "ArrowLeft") {
              e.preventDefault();
              move(-1);
            }
          }}
        >
          {CLINICAL_SOLUTIONS.map((s) => {
            const isActive = s.id === active.id;
            return (
              <button
                key={s.id}
                id={`clinical-tab-${s.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`clinical-panel-${s.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(s.id)}
                className={`min-h-11 rounded-full border px-5 py-2.5 text-[calc(15*var(--desktop-px-unit))] font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_14px_30px_-18px_var(--primary)]"
                    : "border-border/70 bg-white text-muted-foreground hover:-translate-y-0.5 hover:border-primary/35 hover:text-ink"
                }`}
              >
                {s.tab}
              </button>
            );
          })}
        </div>

        {/* ------------------------------- Panel ------------------------------- */}
        <div
          id={`clinical-panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`clinical-tab-${active.id}`}
          className="mt-10 grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-14"
        >
          {/* Content — second on mobile, first on tablet/desktop */}
          <div className="order-2 min-w-0 md:order-1">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={active.id} {...anim} transition={{ duration: 0.35, ease: EASE }}>
                <h3 className="font-display text-[1.42rem] font-extrabold leading-tight tracking-[-0.01em] text-ink [overflow-wrap:anywhere]">
                  {active.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[calc(16.5*var(--desktop-px-unit))] leading-[1.7] text-muted-foreground">
                  {active.description}
                </p>

                <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
                  {active.highlights.map((h) => (
                    <li key={h} className="flex min-w-0 items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-white text-primary">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      <span className="min-w-0 text-[calc(16.5*var(--desktop-px-unit))] font-semibold leading-[1.5] text-ink [overflow-wrap:anywhere]">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-9">
                  <Link
                    to={active.cta.to}
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-[calc(15*var(--desktop-px-unit))] font-bold text-primary-foreground shadow-[0_18px_38px_-16px_var(--primary)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[0_24px_48px_-18px_var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
                  >
                    {active.cta.label}
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image — fixed 4:3 frame, identical for every tab */}
          <div className="order-1 min-w-0 md:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border/70 bg-muted shadow-[0_28px_60px_-34px_rgba(15,23,42,0.45)]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={active.id}
                  src={active.image.src}
                  alt={active.image.alt}
                  loading="lazy"
                  decoding="async"
                  width={1600}
                  height={1200}
                  draggable={false}
                  {...anim}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="absolute inset-0 h-full w-full select-none object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
