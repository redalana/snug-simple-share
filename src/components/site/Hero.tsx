import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  GraduationCap,
  HeartPulse,
  LifeBuoy,
  Building2,
  Users,
  ArrowUpRight,
} from "lucide-react";

import heroCinematic from "@/assets/hero-cinematic.jpg";
import { SECTION_CONTAINER } from "./section-grid";

const EASE = [0.22, 1, 0.36, 1] as const;

const TRUST = [
  { icon: BadgeCheck, label: "OEM Certified" },
  { icon: Building2, label: "Hospital Projects" },
  { icon: GraduationCap, label: "Installation & Training" },
  { icon: LifeBuoy, label: "After-Sales Support" },
  { icon: Users, label: "Biomedical Engineers" },
];

const KPIS = [
  { value: "1999", label: "Delivering Since" },
  { value: "10+", label: "Countries" },
  { value: "30+", label: "Major Projects" },
  { value: "24/7", label: "Technical Support" },
];

/** Elegant floating capability badges over the cinematic scene. */
const BADGES: { label: string; className: string; delay: number }[] = [
  { label: "MRI", className: "left-[6%] top-[14%]", delay: 0.5 },
  { label: "PET/CT", className: "right-[8%] top-[26%]", delay: 0.62 },
  { label: "Cath Lab", className: "left-[10%] bottom-[26%]", delay: 0.74 },
  { label: "Turnkey", className: "right-[12%] bottom-[14%]", delay: 0.86 },
];

export function Hero() {
  const reduce = useReducedMotion();
  const sceneRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Slow, subtle pointer parallax — desktop only, disabled for reduced motion.
  useEffect(() => {
    if (reduce) return;
    const el = sceneRef.current;
    if (!el || !window.matchMedia("(min-width: 1024px)").matches) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / r.width;
      const y = (e.clientY - (r.top + r.height / 2)) / r.height;
      setTilt({ x, y });
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce]);

  return (
    <section
      aria-label="AbuFarha Medical Supplies — advanced medical technology"
      className="relative overflow-hidden bg-ink text-white"
    >
      {/* Ambient depth — controlled, no clutter */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[38rem] w-[38rem] rounded-full bg-primary/10 blur-[120px]"
      />

      <div
        className={`${SECTION_CONTAINER} relative grid items-center gap-10 pt-[calc(201*var(--desktop-px-unit))] pb-14 lg:grid-cols-[minmax(0,40fr)_minmax(0,60fr)] lg:gap-14 lg:pt-[calc(229*var(--desktop-px-unit))] lg:pb-20`}
      >
        {/* ── LEFT 40% ─────────────────────────────────────────────── */}
        <div className="min-w-0">
          <motion.span
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.22em] text-white/80 backdrop-blur"
          >
            <HeartPulse className="h-3.5 w-3.5 text-primary-on-dark" />
            Advanced Medical Technology
          </motion.span>

          <motion.h1
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
            className="mt-6 font-display text-[2.375rem] font-extrabold leading-[1.04] tracking-[-0.025em] text-balance sm:text-[2.875rem] lg:text-[3.125rem]"
          >
            Enterprise Medical
            <br />
            Technology,
            <br />
            <span className="text-primary-on-dark">Delivered End to End.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
            className="mt-6 max-w-md text-[calc(17*var(--desktop-px-unit))] leading-[1.6] text-white/70"
          >
            Imaging and interventional systems from the world&apos;s leading OEMs — supplied,
            installed, commissioned and supported across Africa and the Middle East.
          </motion.p>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="/products"
              className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="/contact"
              className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-7 text-sm font-bold text-white backdrop-blur transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/[0.12]"
            >
              Talk to an Expert
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.ul
            initial={reduce ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.36 }}
            className="mt-8 flex flex-wrap items-center gap-2"
          >
            {TRUST.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-[calc(12*var(--desktop-px-unit))] font-semibold text-white/85 transition-colors hover:border-white/30 hover:text-white"
              >
                <Icon className="h-3.5 w-3.5 text-primary-on-dark" strokeWidth={2.2} />
                {label}
              </li>
            ))}
          </motion.ul>

          {/* KPI row */}
          <motion.dl
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.46 }}
            className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6 sm:grid-cols-4"
          >
            {KPIS.map((k) => (
              <div key={k.label} className="min-w-0">
                <dt className="sr-only">{k.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-extrabold leading-none text-white">
                    {k.value}
                  </span>
                  <span className="mt-2 block text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase leading-tight tracking-wider text-white/50">
                    {k.label}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* ── RIGHT 60% — cinematic scene ──────────────────────────── */}
        <div ref={sceneRef} className="relative min-w-0">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE }}
            className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] ring-1 ring-white/10 shadow-[0_60px_120px_-50px_rgba(0,0,0,0.85)] sm:aspect-[16/10]"
          >
            <motion.img
              src={heroCinematic}
              alt="Cinematic view of an advanced interventional cath lab suite with live angiography displays"
              width={1264}
              height={843}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              animate={reduce ? undefined : { x: tilt.x * -18, y: tilt.y * -12, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 40, damping: 22, mass: 1.2 }}
              className="h-full w-full object-cover object-center will-change-transform"
            />
            {/* Controlled cinematic vignette — no heavy overlay */}
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(120%_100%_at_70%_30%,transparent_35%,rgba(3,7,12,0.55)_100%)]"
            />
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-ink/70 to-transparent lg:from-ink/55"
            />

            {/* Floating capability badges */}
            {BADGES.map((b) => (
              <motion.span
                key={b.label}
                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: b.delay }}
                style={{
                  transform: reduce
                    ? undefined
                    : `translate3d(${tilt.x * 10}px, ${tilt.y * 8}px, 0)`,
                }}
                className={`absolute ${b.className} inline-flex items-center gap-2 rounded-full border border-white/25 bg-ink/55 px-3.5 py-1.5 text-[calc(12*var(--desktop-px-unit))] font-bold tracking-wide text-white backdrop-blur-md transition-colors hover:border-primary/70`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary-on-dark" />
                {b.label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
