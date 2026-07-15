import { useState, useEffect, useRef, useMemo } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  useMotionValue,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  MapPin,
  ShieldCheck,
  PhoneCall,
  FileText,
} from "lucide-react";

import heroCath from "@/assets/sol-carm.jpg";
import heroMri from "@/assets/sol-mri.jpg";
import heroCt from "@/assets/sol-ct.jpg";
import heroOr from "@/assets/sol-or.jpg";
import icuImg from "@/assets/why-cathlab.jpg";
import petImg from "@/assets/sol-petct.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

import { ClientOnly3D } from "@/components/site/turnkey/ClientOnly3D";
import { OrbitHub3D } from "@/components/site/turnkey/OrbitHub3D";
import { JourneyScene3D } from "@/components/site/turnkey/JourneyScene3D";
import { SolutionViewer3D } from "@/components/site/turnkey/SolutionViewer3D";
import { useCountUp } from "@/hooks/use-count-up";

/* ============================================================
   DATA
   ============================================================ */

type Slide = {
  id: string;
  code: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  stats: { label: string; value: string }[];
};

const HERO_SLIDES: Slide[] = [
  {
    id: "cath",
    code: "01 / 04",
    eyebrow: "Interventional Cardiology",
    title: "Cath Labs, delivered ready for the first patient.",
    subtitle:
      "Complete interventional suites — imaging system, hemodynamic monitoring, radiation safety and clinical training — engineered as one turnkey deliverable.",
    image: heroCath,
    stats: [
      { label: "Suites Delivered", value: "40+" },
      { label: "Countries", value: "10" },
      { label: "Uptime SLA", value: "99.6%" },
    ],
  },
  {
    id: "mri",
    code: "02 / 04",
    eyebrow: "Advanced Imaging",
    title: "MRI centers, from RF shielding to first scan.",
    subtitle:
      "Site planning, cryogen logistics, RF cage coordination, scanner installation, commissioning and radiographer training — one accountable partner.",
    image: heroMri,
    stats: [
      { label: "Field Strength", value: "up to 3T" },
      { label: "Install Weeks", value: "10–14" },
      { label: "Training Days", value: "10" },
    ],
  },
  {
    id: "ct",
    code: "03 / 04",
    eyebrow: "Computed Tomography",
    title: "CT departments engineered for throughput.",
    subtitle:
      "Room preparation, shielding, scanner installation, contrast injector, PACS integration and workflow calibration — commissioned as a complete department.",
    image: heroCt,
    stats: [
      { label: "Slice Range", value: "64 – 256" },
      { label: "Studies/Day", value: "120+" },
      { label: "Warranty", value: "12 mo" },
    ],
  },
  {
    id: "or",
    code: "04 / 04",
    eyebrow: "Surgical Excellence",
    title: "Operating rooms ready on day one.",
    subtitle:
      "Surgical lights, tables, anesthesia, integration and endoscopy — installed, commissioned and clinically trained as a single turnkey handover.",
    image: heroOr,
    stats: [
      { label: "OR Suites", value: "25+" },
      { label: "Integration", value: "Full A/V" },
      { label: "Handover", value: "Turnkey" },
    ],
  },
];

const DEPARTMENTS = [
  {
    id: "cath",
    code: "01",
    name: "Cath Lab",
    tagline: "Interventional Cardiology",
    image: heroCath,
    copy: "Complete interventional suite — imaging chain, hemodynamic monitoring, radiation protection and clinical training.",
    bullets: ["C-arm imaging", "Hemodynamic system", "Ceiling monitors", "Radiation protection", "PACS integration"],
  },
  {
    id: "mri",
    code: "02",
    name: "MRI Center",
    tagline: "Advanced Imaging",
    image: heroMri,
    copy: "End-to-end MRI suite — RF cage coordination, scanner installation, commissioning and radiographer training.",
    bullets: ["1.5T / 3T systems", "RF shielding coordination", "Cryogen logistics", "Coil configuration", "Patient comfort"],
  },
  {
    id: "ct",
    code: "03",
    name: "CT Department",
    tagline: "Computed Tomography",
    image: heroCt,
    copy: "High-throughput CT suites with contrast injection, PACS integration and calibrated clinical workflow.",
    bullets: ["64 – 256 slice", "Contrast injector", "PACS / RIS", "Room shielding", "Dose optimization"],
  },
  {
    id: "or",
    code: "04",
    name: "Operating Room",
    tagline: "Surgical Excellence",
    image: heroOr,
    copy: "Fully equipped OR with lighting, tables, anesthesia and integrated audio-video — delivered as one suite.",
    bullets: ["Surgical lighting", "OR tables", "Anesthesia workstation", "Endoscopy tower", "OR integration"],
  },
  {
    id: "icu",
    code: "05",
    name: "ICU",
    tagline: "Intensive Care",
    image: icuImg,
    copy: "Critical care units with ventilation, patient monitoring and central station — commissioned for continuous operation.",
    bullets: ["Ventilators", "Patient monitors", "Central station", "Infusion systems", "Infection control"],
  },
  {
    id: "pet",
    code: "06",
    name: "PET / CT",
    tagline: "Molecular Imaging",
    image: petImg,
    copy: "Molecular imaging suites with hot-lab coordination, dosimetry and oncology-focused clinical training.",
    bullets: ["Hot lab planning", "Scanner installation", "Dosimetry", "Radiation safety", "Clinical training"],
  },
];

const JOURNEY_STAGES = [
  {
    n: "01",
    title: "Empty Room",
    body: "We walk your shell space with architects and biomedical engineers to align every service point before a single cable is pulled.",
  },
  {
    n: "02",
    title: "Planning",
    body: "Room layout, shielding, power, HVAC, gases and IT flows are engineered against the exact clinical workflow you will run on day one.",
  },
  {
    n: "03",
    title: "Delivery",
    body: "Coordinated freight, customs and on-site staging — equipment arrives sequenced to installation, not left waiting in crates.",
  },
  {
    n: "04",
    title: "Installation",
    body: "Certified engineers install imaging chains, monitoring, integration and life-support systems to manufacturer specification.",
  },
  {
    n: "05",
    title: "Calibration",
    body: "Acceptance testing, QA phantoms, dose calibration and integration validation — signed off before any patient enters the room.",
  },
  {
    n: "06",
    title: "Training",
    body: "Hands-on clinical and biomedical training for radiographers, cardiologists, nurses and technicians in the actual room.",
  },
  {
    n: "07",
    title: "Department Ready",
    body: "Handover with documentation, warranty, spare parts protocol and a support line that answers the same day.",
  },
];

const CATH_HOTSPOTS = [
  { n: 1, label: "C-Arm Imaging", spec: "Flat-panel detector · pulsed fluoroscopy · low-dose protocols" },
  { n: 2, label: "Patient Table", spec: "Carbon-fiber tabletop · floating motion · 250 kg capacity" },
  { n: 3, label: "Ceiling Monitors", spec: "Suspended boom · 4K medical display · multi-modality routing" },
  { n: 4, label: "Hemodynamic", spec: "Real-time pressure & ECG · closed-loop reporting" },
  { n: 5, label: "Injector", spec: "Dual-head contrast · pressure-limited safety" },
  { n: 6, label: "Radiation Shield", spec: "Ceiling & table shields · leaded glass · staff dosimetry" },
];

const PROJECTS = [
  {
    country: "Jordan",
    city: "Amman",
    title: "Cardiac Cath Lab Suite",
    scope: "Turnkey interventional cardiology — imaging, hemodynamics, training.",
    image: project1,
  },
  {
    country: "Yemen",
    city: "Sana'a",
    title: "Multi-Slice CT Department",
    scope: "Room preparation, scanner installation, PACS integration.",
    image: project2,
  },
  {
    country: "Iraq",
    city: "Baghdad",
    title: "Operating Room Complex",
    scope: "Surgical lighting, tables, anesthesia and OR integration.",
    image: project3,
  },
];

const FAQS = [
  {
    q: "What is included in a turnkey solution?",
    a: "Site assessment, room engineering, equipment supply, installation, commissioning, clinical training, warranty and long-term after-sales support — coordinated as one accountable contract.",
  },
  {
    q: "How long does a typical department take?",
    a: "A cath lab or CT suite typically takes 10 – 14 weeks from signed order to clinical handover. MRI centers with RF shielding coordination run 14 – 20 weeks.",
  },
  {
    q: "Which regions do you cover?",
    a: "Jordan, Yemen, Syria, Iraq, Libya, Somaliland, Somalia, Egypt, Uzbekistan and Bangladesh — with regional engineering teams and spare-parts logistics.",
  },
  {
    q: "Do you handle training and after-sales support?",
    a: "Yes. Every turnkey handover includes hands-on clinical training, biomedical documentation, a 12-month warranty and a same-day support line.",
  },
];

/* ============================================================
   HERO — full viewport 4-slide slider with parallax
   ============================================================ */

function Hero() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setDir(1);
      setI((v) => (v + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(id);
  }, [reduce, i]);

  const go = (n: number) => {
    setDir(n > i ? 1 : -1);
    setI((n + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 15 });
  const py = useSpring(my, { stiffness: 60, damping: 15 });
  const tx = useTransform(px, (v) => v * 20);
  const ty = useTransform(py, (v) => v * 12);

  const slide = HERO_SLIDES[i];

  return (
    <section
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      className="relative isolate h-[calc(100vh-112px)] min-h-[640px] w-full overflow-hidden bg-[#0b0c0e] text-white"
    >
      {/* image stack */}
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src={slide.image}
            alt={slide.title}
            style={{ x: tx, y: ty }}
            className="h-full w-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[100rem] flex-col justify-end px-6 pb-16 lg:px-12 lg:pb-20">
        <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
          <span className="h-px w-10 bg-[#E11D2E]" />
          Turnkey Healthcare Solutions
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-4xl"
          >
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#E11D2E]">
              {slide.eyebrow}
            </div>
            <h1 className="font-display text-[2.3rem] font-semibold leading-[1.02] tracking-[-0.02em] sm:text-[3.2rem] lg:text-[4.4rem]">
              {slide.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 lg:text-lg">
              {slide.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* stats + controls */}
        <div className="mt-10 flex flex-col gap-8 lg:mt-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + "-stats"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-wrap gap-x-10 gap-y-6"
              >
                {slide.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl font-semibold tracking-tight text-white lg:text-4xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#departments"
              className="group inline-flex items-center gap-2 rounded-full bg-[#E11D2E] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Explore Departments
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="flex items-center gap-2">
              <button
                aria-label="Previous slide"
                onClick={() => go(i - 1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition hover:bg-white/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                aria-label="Next slide"
                onClick={() => go(i + 1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition hover:bg-white/10"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* slide indicator */}
        <div className="mt-10 flex items-center justify-between border-t border-white/15 pt-5">
          <div className="text-xs font-semibold tracking-[0.3em] text-white/60">{slide.code}</div>
          <div className="flex flex-1 items-center gap-2 pl-8">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                aria-label={`Show ${s.eyebrow}`}
                onClick={() => go(idx)}
                className="group relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/15"
              >
                {idx === i && (
                  <motion.span
                    key={i + "-bar"}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: reduce ? 0 : 7, ease: "linear" }}
                    className="absolute inset-y-0 left-0 bg-[#E11D2E]"
                  />
                )}
                {idx < i && <span className="absolute inset-0 bg-white/50" />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   DEPARTMENT ECOSYSTEM
   ============================================================ */

function DepartmentEcosystem() {
  const [id, setId] = useState(DEPARTMENTS[0].id);
  const active = DEPARTMENTS.find((d) => d.id === id) ?? DEPARTMENTS[0];

  return (
    <section id="departments" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-12">
        <div className="flex items-end justify-between gap-8">
          <div>
            <div className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#E11D2E]">
              <span className="h-px w-10 bg-[#E11D2E]" />
              Department Ecosystem
            </div>
            <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-[#111315] lg:text-6xl">
              One operating system, six connected departments.
            </h2>
          </div>
          <p className="hidden max-w-sm text-sm leading-relaxed text-neutral-600 lg:block">
            Explore the departments AbuFarha delivers as complete turnkey suites — engineered, installed and clinically commissioned.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* 3D hub */}
          <div className="relative lg:col-span-7">
            <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] bg-[#f6f7f9] ring-1 ring-black/5">
              <ClientOnly3D
                fallback={
                  <img
                    src={active.image}
                    alt={active.name}
                    className="h-full w-full object-cover"
                  />
                }
              >
                <OrbitHub3D activeId={active.id} />
              </ClientOnly3D>
              <div className="pointer-events-none absolute inset-x-6 bottom-6 flex items-end justify-between text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
                <span>Interactive · Drag to feel depth</span>
                <span>{active.code} / 06</span>
              </div>
            </div>
          </div>

          {/* selector + content */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-2">
              {DEPARTMENTS.map((d) => {
                const on = d.id === id;
                return (
                  <button
                    key={d.id}
                    onClick={() => setId(d.id)}
                    className={`group flex flex-col items-start rounded-2xl border p-4 text-left transition ${
                      on
                        ? "border-[#E11D2E] bg-[#E11D2E]/[0.04]"
                        : "border-neutral-200 hover:border-neutral-400"
                    }`}
                  >
                    <div className="flex w-full items-center justify-between text-[10px] font-semibold tracking-[0.24em] text-neutral-500">
                      {d.code}
                      {on && <span className="h-1.5 w-1.5 rounded-full bg-[#E11D2E]" />}
                    </div>
                    <div className="mt-3 font-display text-base font-semibold text-[#111315]">
                      {d.name}
                    </div>
                    <div className="text-xs text-neutral-500">{d.tagline}</div>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 rounded-2xl border border-neutral-200 p-6"
              >
                <div className="font-display text-2xl font-semibold text-[#111315]">
                  {active.name} Turnkey
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{active.copy}</p>
                <ul className="mt-5 grid grid-cols-1 gap-2 text-sm text-neutral-700">
                  {active.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-4 flex-none bg-[#E11D2E]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CINEMATIC JOURNEY — pinned scroll
   ============================================================ */

function CinematicJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const n = Math.min(JOURNEY_STAGES.length - 1, Math.floor(v * JOURNEY_STAGES.length));
      setIdx(n);
    });
  }, [scrollYProgress]);

  const progress = useTransform(scrollYProgress, (v) => `${Math.round(v * 100)}%`);
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  return (
    <section
      ref={ref}
      className="relative bg-[#0b0c0e] text-white"
      style={{ height: `${JOURNEY_STAGES.length * 90}vh` }}
    >
      <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden">
        {/* 3D scene */}
        <div className="absolute inset-0">
          <ClientOnly3D
            fallback={<div className="h-full w-full bg-gradient-to-b from-[#111315] to-[#0b0c0e]" />}
          >
            <JourneyScene3D activeIndex={Math.min(idx, 5)} />
          </ClientOnly3D>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
        </div>

        {/* top bar */}
        <div className="relative z-10 mx-auto flex w-full max-w-[100rem] items-center justify-between px-6 pt-10 lg:px-12">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
            <span className="h-px w-10 bg-[#E11D2E]" />
            Cinematic Journey
          </div>
          <motion.div className="text-xs font-semibold tracking-[0.3em] text-white/70">
            {progress}
          </motion.div>
        </div>

        {/* stage content */}
        <div className="relative z-10 mx-auto mt-auto flex w-full max-w-[100rem] flex-col gap-10 px-6 pb-14 lg:px-12 lg:pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#E11D2E]">
                Stage {JOURNEY_STAGES[idx].n}
              </div>
              <h3 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] lg:text-6xl">
                {JOURNEY_STAGES[idx].title}
              </h3>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
                {JOURNEY_STAGES[idx].body}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* stage rail */}
          <div className="flex flex-col gap-3">
            <div className="relative h-[2px] w-full overflow-hidden bg-white/15">
              <motion.div
                style={{ scaleX, transformOrigin: "0% 50%" }}
                className="absolute inset-0 bg-[#E11D2E]"
              />
            </div>
            <div className="grid grid-cols-7 gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60">
              {JOURNEY_STAGES.map((s, i) => (
                <div key={s.n} className={i === idx ? "text-white" : ""}>
                  <div>{s.n}</div>
                  <div className="mt-1 truncate">{s.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SOLUTION VIEWER
   ============================================================ */

function SolutionViewer() {
  const [hot, setHot] = useState(1);
  const active = CATH_HOTSPOTS.find((h) => h.n === hot) ?? CATH_HOTSPOTS[0];

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-12">
        <div className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#E11D2E]">
          <span className="h-px w-10 bg-[#E11D2E]" />
          Solution Viewer
        </div>
        <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-[#111315] lg:text-6xl">
          Inside a complete Cath Lab suite.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
          Every component we install — engineered as one interventional environment.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="relative lg:col-span-8">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-[#0b0c0e] ring-1 ring-black/10">
              <ClientOnly3D
                fallback={<img src={heroCath} alt="Cath lab" className="h-full w-full object-cover" />}
              >
                <SolutionViewer3D activeN={hot} onSelect={setHot} />
              </ClientOnly3D>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
                Component 0{active.n} / 06
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.n}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="mt-3 font-display text-3xl font-semibold text-[#111315]">
                    {active.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{active.spec}</p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 space-y-1.5">
                {CATH_HOTSPOTS.map((h) => {
                  const on = h.n === hot;
                  return (
                    <button
                      key={h.n}
                      onClick={() => setHot(h.n)}
                      className={`flex w-full items-center gap-4 rounded-xl border p-3.5 text-left text-sm transition ${
                        on
                          ? "border-[#E11D2E] bg-[#E11D2E]/[0.05] text-[#111315]"
                          : "border-neutral-200 text-neutral-700 hover:border-neutral-400"
                      }`}
                    >
                      <span
                        className={`grid h-7 w-7 flex-none place-items-center rounded-full text-[11px] font-bold ${
                          on ? "bg-[#E11D2E] text-white" : "bg-neutral-100 text-neutral-600"
                        }`}
                      >
                        {h.n}
                      </span>
                      <span className="flex-1 font-medium">{h.label}</span>
                      <ArrowUpRight
                        className={`h-4 w-4 transition ${on ? "text-[#E11D2E]" : "text-neutral-400"}`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROJECTS
   ============================================================ */

function Projects() {
  const [i, setI] = useState(0);
  const p = PROJECTS[i];
  const go = (n: number) => setI((n + PROJECTS.length) % PROJECTS.length);

  return (
    <section className="relative overflow-hidden bg-[#f6f7f9] py-24 lg:py-32">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-12">
        <div className="flex items-end justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#E11D2E]">
              <span className="h-px w-10 bg-[#E11D2E]" />
              Selected Projects
            </div>
            <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-[#111315] lg:text-6xl">
              Delivered across the region.
            </h2>
          </div>
          <div className="hidden items-center gap-2 lg:flex">
            <button
              aria-label="Previous project"
              onClick={() => go(i - 1)}
              className="grid h-12 w-12 place-items-center rounded-full border border-neutral-300 text-[#111315] transition hover:bg-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Next project"
              onClick={() => go(i + 1)}
              className="grid h-12 w-12 place-items-center rounded-full border border-neutral-300 text-[#111315] transition hover:bg-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] bg-black ring-1 ring-black/10">
              <AnimatePresence mode="sync">
                <motion.img
                  key={p.image}
                  src={p.image}
                  alt={p.title}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-8 bottom-8 flex items-end justify-between text-white">
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">
                    <MapPin className="h-3.5 w-3.5" />
                    {p.city}, {p.country}
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold lg:text-4xl">{p.title}</h3>
                </div>
                <div className="text-xs font-semibold tracking-[0.3em] text-white/70">
                  0{i + 1} / 0{PROJECTS.length}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
                    Project Scope
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-neutral-700">{p.scope}</p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 space-y-1.5">
                {PROJECTS.map((pr, idx) => {
                  const on = idx === i;
                  return (
                    <button
                      key={pr.title}
                      onClick={() => go(idx)}
                      className={`flex w-full items-center justify-between rounded-xl border p-3.5 text-left text-sm transition ${
                        on
                          ? "border-[#E11D2E] bg-[#E11D2E]/[0.05]"
                          : "border-neutral-200 hover:border-neutral-400"
                      }`}
                    >
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-500">
                          {pr.country}
                        </div>
                        <div className="mt-1 font-medium text-[#111315]">{pr.title}</div>
                      </div>
                      <ArrowUpRight
                        className={`h-4 w-4 ${on ? "text-[#E11D2E]" : "text-neutral-400"}`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ
   ============================================================ */

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <div className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#E11D2E]">
          <span className="h-px w-10 bg-[#E11D2E]" />
          Frequently Asked
        </div>
        <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-[#111315] lg:text-6xl">
          Answers, before you ask.
        </h2>

        <div className="mt-14 divide-y divide-neutral-200 border-y border-neutral-200">
          {FAQS.map((f, idx) => {
            const on = idx === open;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(on ? -1 : idx)}
                  className="group flex w-full items-center justify-between gap-8 py-8 text-left"
                >
                  <span className="font-display text-xl font-semibold text-[#111315] lg:text-2xl">
                    {f.q}
                  </span>
                  <span
                    className={`grid h-10 w-10 flex-none place-items-center rounded-full border transition ${
                      on
                        ? "border-[#E11D2E] bg-[#E11D2E] text-white"
                        : "border-neutral-300 text-[#111315] group-hover:border-neutral-500"
                    }`}
                  >
                    {on ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pb-8 text-base leading-relaxed text-neutral-600">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FINAL CTA — cinematic with counters
   ============================================================ */

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const { ref, value } = useCountUp(target, 2000);
  return (
    <span ref={ref} className="font-display text-5xl font-semibold tracking-tight lg:text-7xl">
      {value}
      {suffix}
    </span>
  );
}

function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        d: 6 + Math.random() * 10,
      })),
    [],
  );

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-[#0b0c0e] py-28 text-white lg:py-40"
    >
      {/* particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0], y: [0, -30, -60] }}
            transition={{ duration: p.d, repeat: Infinity, delay: p.id * 0.2, ease: "easeInOut" }}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            className="absolute h-1 w-1 rounded-full bg-white/40"
          />
        ))}
      </div>

      {/* radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E11D2E]/25 blur-[120px]" />

      <motion.div style={{ y }} className="relative mx-auto max-w-[100rem] px-6 lg:px-12">
        <div className="grid grid-cols-3 gap-8 border-b border-white/15 pb-14 lg:gap-14">
          <div>
            <Counter target={40} suffix="+" />
            <div className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
              Turnkey Suites
            </div>
          </div>
          <div>
            <Counter target={10} />
            <div className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
              Countries Served
            </div>
          </div>
          <div>
            <Counter target={25} suffix="+" />
            <div className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
              Years of Engineering
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
              <span className="h-px w-10 bg-[#E11D2E]" />
              Start Your Project
            </div>
            <h2 className="font-display text-5xl font-semibold leading-[1.02] tracking-[-0.02em] lg:text-[5.5rem]">
              Let's build the next department together.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 lg:text-lg">
              Talk to our engineers about equipping your next cath lab, MRI center, CT suite or operating room — delivered as one accountable turnkey solution.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#E11D2E] px-7 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+962000000000"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <PhoneCall className="h-4 w-4" /> Talk to an Expert
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <FileText className="h-4 w-4" /> Company Profile
            </a>
            <div className="mt-2 flex items-center gap-2 text-xs text-white/60">
              <ShieldCheck className="h-4 w-4" />
              12-month warranty on every installation
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ============================================================
   PAGE
   ============================================================ */

export function TurnkeyPage() {
  return (
    <>
      <Hero />
      <DepartmentEcosystem />
      <CinematicJourney />
      <SolutionViewer />
      <Projects />
      <FAQ />
      <FinalCTA />
    </>
  );
}
