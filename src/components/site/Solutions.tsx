import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  HeartPulse,
  Brain,
  ScanLine,
  Radiation,
  Ribbon,
  Rotate3d,
  Bone,
  Waves,
  Activity,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import cathlab from "@/assets/hero-cathlab.jpg";
import mri from "@/assets/sol-mri.jpg";
import ct from "@/assets/sol-ct.jpg";
import petct from "@/assets/sol-petct.jpg";
import mammo from "@/assets/sol-mammo.jpg";
import carm from "@/assets/sol-carm.jpg";
import xray from "@/assets/sol-xray.jpg";
import dexa from "@/assets/sol-dexa.jpg";
import eswl from "@/assets/sol-eswl.jpg";

const AUTOPLAY_MS = 3000;
const RESUME_DELAY_MS = 2000;


type Meta = { label: string; value: string };

type Category = {
  id: string;
  nav: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  img: string;
  capabilities: string[];
  meta: Meta[];
};

const CATEGORIES: Category[] = [
  {
    id: "cath-lab",
    nav: "Cath Lab",
    icon: HeartPulse,
    title: "Cath Lab Systems",
    desc: "Advanced interventional cardiology suites engineered for precision, reliability and clinical efficiency in modern hospitals.",
    img: cathlab,
    capabilities: [
      "High-resolution interventional imaging",
      "Optimized clinical workflow integration",
      "Advanced radiation dose management",
    ],
    meta: [
      { label: "Applications", value: "Coronary • Structural Heart • Peripheral" },
      { label: "Typical Facilities", value: "Hospitals • Cardiac Centers" },
      { label: "Service", value: "Installation • Training • Support" },
    ],
  },
  {
    id: "mri",
    nav: "MRI",
    icon: Brain,
    title: "MRI Scanners",
    desc: "High-field magnetic resonance systems delivering exceptional soft-tissue contrast for confident, non-invasive diagnosis.",
    img: mri,
    capabilities: [
      "High-field 1.5T & 3T imaging",
      "Accelerated acquisition protocols",
      "Whole-body & neuro applications",
    ],
    meta: [
      { label: "Applications", value: "Neuro • Musculoskeletal • Oncology" },
      { label: "Typical Facilities", value: "Hospitals • Diagnostic Imaging Centers" },
      { label: "Service", value: "Siting • Commissioning • Support" },
    ],
  },
  {
    id: "ct",
    nav: "CT",
    icon: ScanLine,
    title: "CT Scanners",
    desc: "Fast, high-resolution computed tomography built for high patient throughput and low-dose diagnostic accuracy.",
    img: ct,
    capabilities: [
      "Multi-slice high-speed acquisition",
      "Low-dose imaging technology",
      "Cardiac & trauma protocols",
    ],
    meta: [
      { label: "Applications", value: "Trauma • Cardiac • Oncology" },
      { label: "Typical Facilities", value: "Hospitals • Emergency Departments" },
      { label: "Service", value: "Installation • Training • Support" },
    ],
  },
  {
    id: "pet-ct",
    nav: "PET/CT",
    icon: Radiation,
    title: "PET/CT Scanners",
    desc: "Molecular and functional imaging that combines metabolic insight with anatomical precision for oncology and beyond.",
    img: petct,
    capabilities: [
      "Combined molecular & anatomical imaging",
      "High-sensitivity detector systems",
      "Quantitative oncology assessment",
    ],
    meta: [
      { label: "Applications", value: "Oncology • Cardiology • Neurology" },
      { label: "Typical Facilities", value: "Cancer Centers • University Hospitals" },
      { label: "Service", value: "Siting • Commissioning • Support" },
    ],
  },
  {
    id: "mammography",
    nav: "Mammography",
    icon: Ribbon,
    title: "Mammography",
    desc: "Digital and 3D tomosynthesis systems designed for early detection and superior women's imaging comfort.",
    img: mammo,
    capabilities: [
      "3D digital breast tomosynthesis",
      "Low-dose high-clarity imaging",
      "Patient-comfort positioning",
    ],
    meta: [
      { label: "Applications", value: "Screening • Diagnostic • Biopsy" },
      { label: "Typical Facilities", value: "Women's Health • Screening Clinics" },
      { label: "Service", value: "Installation • Training • Support" },
    ],
  },
  {
    id: "c-arm",
    nav: "C-Arm",
    icon: Rotate3d,
    title: "C-Arm Systems",
    desc: "Mobile surgical fluoroscopy delivering real-time imaging flexibility across operating rooms and interventional suites.",
    img: carm,
    capabilities: [
      "Real-time surgical fluoroscopy",
      "Mobile, flexible positioning",
      "High-clarity live imaging",
    ],
    meta: [
      { label: "Applications", value: "Orthopedics • Vascular • Pain Management" },
      { label: "Typical Facilities", value: "Operating Rooms • Surgical Centers" },
      { label: "Service", value: "Installation • Training • Support" },
    ],
  },
  {
    id: "x-ray",
    nav: "X-Ray",
    icon: Activity,
    title: "X-Ray Systems",
    desc: "Digital radiography platforms that combine speed, image quality and dependable everyday diagnostic performance.",
    img: xray,
    capabilities: [
      "Digital radiography workflow",
      "Rapid image capture & review",
      "Fixed & mobile configurations",
    ],
    meta: [
      { label: "Applications", value: "General Radiography • Chest • Skeletal" },
      { label: "Typical Facilities", value: "Hospitals • Clinics • Urgent Care" },
      { label: "Service", value: "Installation • Training • Support" },
    ],
  },
  {
    id: "dexa",
    nav: "DEXA",
    icon: Bone,
    title: "Bone Density (DEXA)",
    desc: "Precise dual-energy absorptiometry for accurate bone health assessment and long-term patient monitoring.",
    img: dexa,
    capabilities: [
      "Precise bone density measurement",
      "Body composition analysis",
      "Low-dose longitudinal monitoring",
    ],
    meta: [
      { label: "Applications", value: "Osteoporosis • Body Composition" },
      { label: "Typical Facilities", value: "Clinics • Endocrinology Centers" },
      { label: "Service", value: "Installation • Training • Support" },
    ],
  },
  {
    id: "lithotripsy",
    nav: "Lithotripsy",
    icon: Waves,
    title: "Lithotripsy (ESWL)",
    desc: "Non-invasive extracorporeal shockwave systems for effective kidney stone treatment with minimal patient recovery.",
    img: eswl,
    capabilities: [
      "Non-invasive shockwave therapy",
      "Precise stone targeting",
      "Reduced patient recovery time",
    ],
    meta: [
      { label: "Applications", value: "Kidney Stones • Ureteral Stones" },
      { label: "Typical Facilities", value: "Urology Centers • Hospitals" },
      { label: "Service", value: "Installation • Training • Support" },
    ],
  },
];

export function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);
  const active = CATEGORIES[activeIndex];
  const activeId = active.id;
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Autoplay: advance to next category every AUTOPLAY_MS while not paused.
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => {
      setActiveIndex((i) => (i + 1) % CATEGORIES.length);
      setCycleKey((k) => k + 1);
    }, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [activeIndex, paused, cycleKey]);

  // Preload every category image so switches are instant, no flash.
  useEffect(() => {
    CATEGORIES.forEach((c) => {
      const img = new Image();
      img.src = c.img;
    });
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
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
    resumeTimer.current = setTimeout(() => {
      setPaused(false);
      setCycleKey((k) => k + 1);
    }, RESUME_DELAY_MS);
  }, []);

  const selectCategory = useCallback((index: number) => {
    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current);
      resumeTimer.current = null;
    }
    setActiveIndex(index);
    setPaused(false);
    setCycleKey((k) => k + 1);
  }, []);



  return (
    <section id="solutions" className="relative overflow-hidden bg-background py-16 lg:py-20">
      {/* subtle technical grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border) calc(1*var(--desktop-px-unit)), transparent calc(1*var(--desktop-px-unit))), linear-gradient(to bottom, var(--color-border) calc(1*var(--desktop-px-unit)), transparent calc(1*var(--desktop-px-unit)))",
          backgroundSize: "calc(72*var(--desktop-px-unit)) calc(72*var(--desktop-px-unit))",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow index="01">Explore Our Categories</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              Advanced Medical Technologies for Every Specialty
            </h2>
          </div>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            View All Categories
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Category navigation */}
        <div
          className="-mx-6 mb-10 overflow-x-auto px-6 [scrollbar-width:none] lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
          onMouseEnter={pause}
          onMouseLeave={scheduleResume}
        >
          <div className="flex min-w-max gap-1 border-b border-border lg:min-w-0">
            {CATEGORIES.map((c, i) => {
              const isActive = c.id === activeId;
              return (
                <button
                  key={c.id}
                  onClick={() => selectCategory(i)}
                  className={`group relative flex shrink-0 items-center gap-2.5 rounded-t-lg px-5 py-3.5 text-[calc(13*var(--desktop-px-unit))] tracking-[0.01em] transition-all duration-300 ${
                    isActive
                      ? "font-semibold text-ink"
                      : "font-medium text-muted-foreground/70 hover:text-ink"
                  }`}
                >
                  {/* soft active background tint */}
                  {isActive && (
                    <motion.span
                      layoutId="cat-tint"
                      aria-hidden
                      className="absolute inset-0 rounded-t-lg bg-primary/[0.04]"
                      transition={{ type: "spring", stiffness: 480, damping: 42 }}
                    />
                  )}
                  {/* premium product thumbnail */}
                  <span
                    className={`relative z-10 overflow-hidden rounded-[calc(10*var(--desktop-px-unit))] bg-secondary ring-1 transition-all duration-300 ${
                      isActive
                        ? "-translate-y-px scale-[1.08] ring-primary/70 shadow-[0_8px_18px_-8px_rgba(15,23,42,0.45)]"
                        : "opacity-70 shadow-sm ring-white/80 grayscale-[0.15] group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-[1.05]"
                    }`}
                    style={{ width: 38, height: 38 }}
                  >
                    <img
                      src={c.img}
                      alt=""
                      aria-hidden
                      width={38}
                      height={38}
                      className="h-full w-full object-cover object-[center_38%]"
                    />
                  </span>
                  <span className={`relative z-10 ${isActive ? "font-bold text-ink" : ""}`}>{c.nav}</span>

                  {/* hover underline hint */}
                  <span
                    aria-hidden
                    className="absolute inset-x-3 -bottom-px z-10 h-0.5 rounded-full bg-ink/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  {isActive && (
                    <motion.span
                      layoutId="cat-underline"
                      className="absolute inset-x-3 -bottom-[calc(3*var(--desktop-px-unit))] z-20 h-0.5 overflow-hidden rounded-full bg-ink/10"
                      transition={{ type: "spring", stiffness: 480, damping: 42 }}
                    >
                      {/* editorial autoplay progress line */}
                      {!paused && (
                        <motion.span
                          key={cycleKey}
                          className="block h-full w-full origin-left rounded-full bg-primary"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: AUTOPLAY_MS / 1000, ease: [0.4, 0, 0.2, 1] }}
                        />
                      )}
                      {paused && <span className="block h-full w-full rounded-full bg-primary" />}
                    </motion.span>
                  )}
                </button>

              );
            })}
          </div>
        </div>


        {/* Explorer */}
        <div
          className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1.05fr)] lg:gap-14"
          onMouseEnter={pause}
          onMouseLeave={scheduleResume}
        >
          {/* Content */}
          <div className="order-2 flex flex-col lg:order-1">

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{
                  opacity: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  y: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                }}
                className="flex h-full flex-col will-change-[opacity,transform]"
              >

                <span className="text-[calc(10*var(--desktop-px-unit))] font-medium uppercase tracking-[0.28em] text-primary">
                  Featured Category
                </span>
                <h3 className="mt-3.5 font-display text-[2.35rem] font-black leading-[0.98] tracking-[-0.03em] text-ink sm:text-[3rem]">
                  {active.title}
                </h3>
                <p className="mt-5 max-w-[34ch] text-[calc(16.5*var(--desktop-px-unit))] leading-[1.7] text-muted-foreground/90">
                  {active.desc}
                </p>

                {/* Premium feature rows */}
                <ul className="mt-8 flex flex-col gap-5">
                  {active.capabilities.map((cap, i) => (
                    <motion.li
                      key={cap}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-center gap-3.5 text-[calc(15*var(--desktop-px-unit))] font-medium text-ink"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary ring-1 ring-inset ring-primary/12">
                        <Check className="h-[calc(15*var(--desktop-px-unit))] w-[calc(15*var(--desktop-px-unit))]" strokeWidth={2.75} />
                      </span>
                      <span className="leading-snug">{cap}</span>
                    </motion.li>
                  ))}
                </ul>


                {/* Engineered information panel */}
                <div className="mt-9 grid overflow-hidden rounded-2xl border border-border/80 bg-secondary/30 sm:grid-cols-3 sm:divide-x sm:divide-border/70">
                  {active.meta.map((m) => (
                    <div key={m.label} className="px-5 py-5 not-last:border-b not-last:border-border/70 sm:border-b-0">
                      <div className="text-[calc(10*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.16em] text-muted-foreground/70">
                        {m.label}
                      </div>
                      <div className="mt-2 text-[calc(13.5*var(--desktop-px-unit))] font-bold leading-snug text-ink">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_12px_28px_-10px_var(--color-primary)] transition-all duration-300 hover:bg-primary-dark hover:shadow-[0_18px_38px_-12px_var(--color-primary)] hover:-translate-y-0.5"
                  >
                    Explore {active.nav}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 px-7 py-3.5 text-sm font-semibold text-ink/80 transition-all duration-300 hover:border-ink/25 hover:bg-secondary/40 hover:text-ink"
                  >
                    Talk to a Specialist
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Featured image */}
          <div className="order-1 lg:order-2 lg:-mt-2">
            <div className="relative aspect-4/3 overflow-hidden rounded-[1.25rem] bg-secondary shadow-[0_40px_80px_-40px_rgba(15,23,42,0.35)] ring-1 ring-black/5 lg:aspect-16/11">
              {/* True crossfade: outgoing + incoming images stay mounted together */}
              <AnimatePresence initial={false}>
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{
                    opacity: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                    scale: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="absolute inset-0 will-change-[opacity,transform]"
                >
                  {/* Ken Burns: very slow, almost imperceptible zoom */}
                  <motion.img
                    src={active.img}
                    alt={active.title}
                    width={1600}
                    height={1100}
                    initial={{ scale: 1.0 }}
                    animate={{ scale: 1.03 }}
                    transition={{ duration: 12, ease: "linear" }}
                    className="absolute inset-0 h-full w-full object-cover object-[center_38%]"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] ring-1 ring-inset ring-white/10" />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
