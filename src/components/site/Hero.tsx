import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import heroEnterprise from "@/assets/hero-slide-enterprise.jpg";
import heroMri from "@/assets/hero-slide-mri.jpg";
import heroCt from "@/assets/hero-slide-ct.jpg";
import heroPetCt from "@/assets/hero-slide-petct.jpg";
import { SECTION_CONTAINER } from "./section-grid";

const EASE = [0.22, 1, 0.36, 1] as const;
const INTERVAL = 9000;

type Layout = "full" | "right" | "left" | "tight";

type Slide = {
  key: string;
  nav: string;
  eyebrow: string;
  title: string[];
  accent: string;
  body: string;
  notes?: string[];
  proof?: { value: string; label: string }[];
  primary: { label: string; href: string };
  image: string;
  alt: string;
  layout: Layout;
  /** Per-slide focal point + atmosphere so no two scenes feel alike. */
  imageClass: string;
  scrimClass: string;
};

const SLIDES: Slide[] = [
  {
    key: "enterprise",
    nav: "Enterprise",
    eyebrow: "AbuFarha Medical Supplies — Since 1999",
    title: ["We Engineer Complete", "Imaging Departments."],
    accent: "From Planning to Clinical Readiness.",
    body: "Equipment supply, site planning, installation, commissioning, clinical training and long-term technical support — delivered by one accountable partner across Africa and the Middle East.",
    proof: [
      { value: "1999", label: "Delivering Since" },
      { value: "10+", label: "Countries" },
      { value: "30+", label: "Major Projects" },
    ],
    primary: { label: "Explore Products", href: "/products" },
    image: heroEnterprise,
    alt: "Modern hospital imaging department with MRI and CT rooms visible from the reading and control area",
    layout: "full",
    imageClass: "object-[50%_45%] scale-[1.03]",
    scrimClass:
      "bg-[linear-gradient(90deg,rgba(3,7,12,0.92)_0%,rgba(3,7,12,0.78)_38%,rgba(3,7,12,0.35)_70%,rgba(3,7,12,0.55)_100%)]",
  },
  {
    key: "mri",
    nav: "MRI",
    eyebrow: "Magnetic Resonance",
    title: ["MRI Suites Measured", "in Decades,"],
    accent: "Not Deliveries.",
    body: "Magnet logistics, RF and magnetic shielding, cryogen infrastructure, acceptance testing and sequence training — the complete engineering chain behind a working MRI suite.",
    primary: { label: "Explore MRI Systems", href: "/products/mri-scanners" },
    image: heroMri,
    alt: "Biomedical engineer at the operator window of a hospital MRI suite during acceptance testing",
    layout: "right",
    imageClass: "object-[62%_50%]",
    scrimClass:
      "bg-[linear-gradient(90deg,rgba(3,7,12,0.94)_0%,rgba(3,7,12,0.72)_42%,rgba(3,7,12,0.12)_78%,transparent_100%)]",
  },
  {
    key: "ct",
    nav: "CT",
    eyebrow: "Computed Tomography",
    title: ["Every CT Scan Starts", "With Correct Installation."],
    accent: "We Own That Step.",
    body: "Site planning, power and cooling, gantry installation, dose calibration and radiographer training — CT rooms that hold their image quality years after handover.",
    notes: ["Install", "Calibrate", "Train"],
    primary: { label: "Explore CT Scanners", href: "/products/ct-scanners" },
    image: heroCt,
    alt: "Biomedical engineer positioning a calibration phantom at a hospital CT scanner gantry",
    layout: "left",
    imageClass: "object-[38%_52%]",
    scrimClass:
      "bg-[linear-gradient(270deg,rgba(3,7,12,0.94)_0%,rgba(3,7,12,0.74)_40%,rgba(3,7,12,0.14)_76%,transparent_100%)]",
  },
  {
    key: "petct",
    nav: "PET/CT",
    eyebrow: "Molecular Imaging",
    title: ["Molecular Imaging,", "Delivered as a Department."],
    accent: "Not a Device.",
    body: "PET/CT requires radiation planning, hot-lab coordination, acceptance QC and trained nuclear medicine staff. We deliver and support the entire department end to end.",
    primary: { label: "Explore PET/CT Systems", href: "/products/pet-ct-scanners" },
    image: heroPetCt,
    alt: "Biomedical engineer running quality control at the console of a hospital PET/CT scanner",
    layout: "tight",
    imageClass: "object-[70%_50%] scale-[1.06]",
    scrimClass:
      "bg-[linear-gradient(90deg,rgba(3,7,12,0.96)_0%,rgba(3,7,12,0.85)_34%,rgba(3,7,12,0.45)_66%,rgba(3,7,12,0.7)_100%)]",
  },
];

const CONTENT_COL: Record<Layout, string> = {
  full: "lg:col-start-1 lg:col-end-8",
  right: "lg:col-start-1 lg:col-end-7",
  left: "lg:col-start-7 lg:col-end-13",
  tight: "lg:col-start-1 lg:col-end-7",
};

const TITLE_SIZE: Record<Layout, string> = {
  full: "text-[2rem] sm:text-[2.875rem] lg:text-[3.25rem]",
  right: "text-[2rem] sm:text-[2.75rem] lg:text-[3rem]",
  left: "text-[1.9rem] sm:text-[2.625rem] lg:text-[2.875rem]",
  tight: "text-[2.1rem] sm:text-[3rem] lg:text-[3.5rem]",
};

export function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback((next: number) => setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused || reduce) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), INTERVAL);
    return () => window.clearInterval(id);
  }, [paused, reduce]);

  const slide = SLIDES[index]!;

  return (
    <section
      aria-label="AbuFarha Medical Supplies — complete medical imaging solutions"
      aria-roledescription="carousel"
      className="relative isolate overflow-hidden bg-ink text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(index + 1);
        if (e.key === "ArrowLeft") go(index - 1);
      }}
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const start = touchX.current;
        const end = e.changedTouches[0]?.clientX;
        if (start == null || end == null) return;
        if (Math.abs(end - start) > 48) go(index + (end < start ? 1 : -1));
        touchX.current = null;
      }}
    >
      {/* ── Immersive photography: full-bleed, no card, no frame ── */}
      <div aria-hidden className="absolute inset-0 -z-10">
        {SLIDES.map((s, i) => (
          <div
            key={s.key}
            className="absolute inset-0 transition-opacity duration-[900ms] ease-out"
            style={{ opacity: i === index ? 1 : 0 }}
          >
            <img
              src={s.image}
              alt=""
              width={1920}
              height={1200}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
              decoding="async"
              className={`h-full w-full object-cover ${s.imageClass}`}
            />
            <div className={`absolute inset-0 ${s.scrimClass}`} />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
          </div>
        ))}
      </div>

      <div
        className={`${SECTION_CONTAINER} relative grid min-h-[34rem] grid-cols-1 content-center items-center gap-y-10 pt-[calc(201*var(--desktop-px-unit))] pb-14 lg:min-h-[52rem] lg:grid-cols-12 lg:pt-[calc(229*var(--desktop-px-unit))] lg:pb-20`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.key}
            initial={reduce ? undefined : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.7, ease: EASE }}
            className={`min-w-0 ${CONTENT_COL[slide.layout]}`}
          >
            <p className="flex items-center gap-3 text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.24em] text-primary-on-dark">
              <span aria-hidden className="h-px w-8 bg-primary-on-dark/70" />
              {slide.eyebrow}
            </p>

            <h1
              className={`mt-6 font-display font-extrabold leading-[1.06] tracking-[-0.025em] text-balance ${TITLE_SIZE[slide.layout]}`}
            >
              {slide.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="block text-primary-on-dark">{slide.accent}</span>
            </h1>

            <p className="mt-6 max-w-xl text-[calc(17*var(--desktop-px-unit))] leading-[1.65] text-white/75">
              {slide.body}
            </p>

            {slide.notes && (
              <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[calc(12*var(--desktop-px-unit))] font-bold uppercase tracking-[0.18em] text-white/70">
                {slide.notes.map((n, i) => (
                  <span key={n} className="inline-flex items-center gap-4">
                    {i > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-primary-on-dark" />}
                    {n}
                  </span>
                ))}
              </p>
            )}

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={slide.primary.href}
                className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                {slide.primary.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="/contact"
                className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-7 text-sm font-bold text-white backdrop-blur transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/[0.12]"
              >
                Request a Project Assessment
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {slide.proof && (
              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-x-6 border-t border-white/12 pt-6">
                {slide.proof.map((p) => (
                  <div key={p.label} className="min-w-0">
                    <dt className="sr-only">{p.label}</dt>
                    <dd>
                      <span className="block font-display text-2xl font-extrabold leading-none text-white">
                        {p.value}
                      </span>
                      <span className="mt-2 block text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase leading-tight tracking-wider text-white/55">
                        {p.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Named navigation ── */}
        <div className="col-span-full lg:col-span-full">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/12 pt-5 lg:mt-6">
            {SLIDES.map((s, i) => (
              <li key={s.key}>
                <button
                  type="button"
                  onClick={() => go(i)}
                  aria-current={i === index ? "true" : undefined}
                  aria-label={`Show ${s.nav} slide`}
                  className="group relative pb-2 text-[calc(13*var(--desktop-px-unit))] font-bold uppercase tracking-[0.16em] transition-colors"
                >
                  <span className={i === index ? "text-white" : "text-white/50 group-hover:text-white/80"}>
                    {s.nav}
                  </span>
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 bottom-0 h-[2px] origin-left transition-transform duration-300 ${
                      i === index ? "scale-x-100 bg-primary-on-dark" : "scale-x-0 bg-white/40 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Crawlable copy for the non-active slides */}
      <div className="sr-only">
        {SLIDES.filter((_, i) => i !== index).map((s) => (
          <div key={s.key}>
            <h2>{`${s.title.join(" ")} ${s.accent}`}</h2>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
