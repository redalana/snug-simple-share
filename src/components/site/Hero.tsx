import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import heroEnterprise from "@/assets/hero-slide-enterprise.jpg";
import heroMri from "@/assets/hero-slide-mri.jpg";
import heroCt from "@/assets/hero-slide-ct.jpg";
import heroCathLab from "@/assets/hero-slide-cathlab.jpg";
import { SECTION_CONTAINER } from "./section-grid";

const EASE = [0.22, 1, 0.36, 1] as const;
const INTERVAL = 9000;

type Slide = {
  key: string;
  nav: string;
  eyebrow: string;
  title: string[];
  accent: string;
  body: string;
  primary: { label: string; href: string };
  image: string;
  alt: string;
  /** Focal point only — never a zoom crop, the equipment must stay whole. */
  imageClass: string;
};

/** Shared scrim: content always left, photography always right. */
const SCRIM =
  "bg-[linear-gradient(90deg,rgba(3,7,12,0.94)_0%,rgba(3,7,12,0.78)_38%,rgba(3,7,12,0.34)_68%,rgba(3,7,12,0.18)_100%)]";

const SLIDES: Slide[] = [
  {
    key: "enterprise",
    nav: "Enterprise",
    eyebrow: "AbuFarha Medical Supplies — Since 1999",
    title: ["We Engineer Complete", "Imaging Departments."],
    accent: "From Planning to Clinical Readiness.",
    body: "Equipment supply, site planning, installation, commissioning, clinical training and long-term technical support — delivered by one accountable partner across Africa and the Middle East.",
    primary: { label: "Explore Products", href: "/products" },
    image: heroEnterprise,
    alt: "Modern hospital imaging department with MRI and CT rooms visible from the reading and control area",
    imageClass: "object-[62%_48%]",
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
    imageClass: "object-[68%_50%]",
  },
  {
    key: "ct",
    nav: "CT",
    eyebrow: "Computed Tomography",
    title: ["Every CT Scan Starts", "With Correct Installation."],
    accent: "We Own That Step.",
    body: "Site planning, power and cooling, gantry installation, dose calibration and radiographer training — CT rooms that hold their image quality years after handover.",
    primary: { label: "Explore CT Scanners", href: "/products/ct-scanners" },
    image: heroCt,
    alt: "Complete hospital CT suite showing the full gantry, patient table and control window with a biomedical engineer at the system",
    imageClass: "object-[52%_50%]",
  },
  {
    key: "cathlab",
    nav: "Cath Lab",
    eyebrow: "Interventional Cardiology",
    title: ["Cath Labs Built for", "the Decisive Minute."],
    accent: "Commissioned, Not Just Delivered.",
    body: "Angiography systems, monitor walls, hemodynamic integration, radiation protection and full commissioning — interventional suites ready for the first case on day one.",
    primary: { label: "Explore Cath Lab Systems", href: "/products/cath-lab" },
    image: heroCathLab,
    alt: "Complete hospital angiography suite with C-arm, patient table and ceiling-suspended monitor wall being commissioned by a biomedical engineer",
    imageClass: "object-[54%_50%]",
  },
];

/** Company proof figures — identical on every slide so no slide is taller. */
const PROOF = [
  { value: "1999", label: "Delivering Since" },
  { value: "10+", label: "Countries" },
  { value: "30+", label: "Major Projects" },
] as const;

const CONTENT_COL = "lg:col-start-1 lg:col-end-7";
const TITLE_SIZE = "text-[1.75rem] min-[400px]:text-[2rem] sm:text-[2.75rem] lg:text-[3.125rem]";

export function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (next: number) => setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length),
    [],
  );

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
            {/* Art-directed per breakpoint: mobile shows the photograph at its
                natural 16:10 ratio anchored to the bottom, so the equipment is
                never cropped. Desktop keeps the full-bleed cover framing. */}
            <img
              src={s.image}
              alt=""
              width={1920}
              height={1200}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
              decoding="async"
              className={`absolute inset-x-0 bottom-0 w-full lg:inset-0 lg:h-full lg:object-cover ${s.imageClass}`}
            />
            {/* Mobile: ink field above the photo band, softly merging into it */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#03070c_0%,#03070c_58%,rgba(3,7,12,0.86)_76%,rgba(3,7,12,0.30)_92%,rgba(3,7,12,0.12)_100%)] lg:hidden" />
            <div className={`absolute inset-0 hidden lg:block ${SCRIM}`} />
            <div className="absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-ink to-transparent lg:block" />
          </div>
        ))}
      </div>

      <div
        className={`${SECTION_CONTAINER} relative grid min-h-[34rem] grid-cols-1 content-center items-center gap-y-10 pt-[calc(201*var(--desktop-px-unit))] pb-[17rem] sm:pb-[22rem] lg:min-h-[52rem] lg:grid-cols-12 lg:pt-[calc(229*var(--desktop-px-unit))] lg:pb-20`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.key}
            initial={reduce ? undefined : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.7, ease: EASE }}
            className={`min-w-0 ${CONTENT_COL}`}
          >
            <p className="flex min-h-[2.5rem] items-center gap-3 text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.24em] text-primary-on-dark sm:min-h-0">
              <span aria-hidden className="h-px w-8 bg-primary-on-dark/70" />
              {slide.eyebrow}
            </p>

            {/* Reserved height at every breakpoint so the longest headline
                (Enterprise) never makes its slide taller than the others. */}
            <h1
              className={`mt-6 min-h-[11.2rem] font-display font-extrabold leading-[1.06] tracking-[-0.025em] text-balance sm:min-h-[11.7rem] lg:min-h-[13.3rem] ${TITLE_SIZE}`}
            >
              {slide.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="block text-primary-on-dark">{slide.accent}</span>
            </h1>

            <p className="mt-6 min-h-[8.75rem] max-w-xl text-[calc(17*var(--desktop-px-unit))] leading-[1.65] text-white/75 sm:min-h-[6.5rem] lg:min-h-[5.5rem]">
              {slide.body}
            </p>

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
          </motion.div>
        </AnimatePresence>

        {/* ── Shared proof row — identical on every slide (no height shift) ── */}
        <dl
          className={`grid max-w-lg grid-cols-3 gap-x-6 border-t border-white/12 pt-6 ${CONTENT_COL}`}
        >
          {PROOF.map((p) => (
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
                  <span
                    className={
                      i === index ? "text-white" : "text-white/50 group-hover:text-white/80"
                    }
                  >
                    {s.nav}
                  </span>
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 bottom-0 h-[2px] origin-left transition-transform duration-300 ${
                      i === index
                        ? "scale-x-100 bg-primary-on-dark"
                        : "scale-x-0 bg-white/40 group-hover:scale-x-100"
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
