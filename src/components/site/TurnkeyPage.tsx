import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Users,
  Package,
  Wrench,
  ShieldCheck,
  GraduationCap,
  Headphones,
  Heart,
  CircleDot,
  ChevronLeft,
  ChevronRight,
  Check,
  Download,
  ClipboardList,
  FileText,
  LayoutGrid,
  Plus,
  Minus,
} from "lucide-react";

import heroImg from "@/assets/turnkey-hero.jpg";
import cathImg from "@/assets/sol-carm.jpg";
import mriImg from "@/assets/sol-mri.jpg";
import ctImg from "@/assets/sol-ct.jpg";
import orImg from "@/assets/sol-or.jpg";
import icuImg from "@/assets/why-cathlab.jpg";
import solutionRoomImg from "@/assets/beyond-cathlab.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

import { ClientOnly3D } from "@/components/site/turnkey/ClientOnly3D";
import { OrbitHub3D } from "@/components/site/turnkey/OrbitHub3D";
import { JourneyScene3D } from "@/components/site/turnkey/JourneyScene3D";
import { SolutionViewer3D } from "@/components/site/turnkey/SolutionViewer3D";



/* ---------------- Data ---------------- */

const CAPABILITIES = [
  { icon: Users, title: "Consultation", sub: "Needs Analysis" },
  { icon: Package, title: "Equipment Supply", sub: "Premium & Reliable" },
  { icon: Wrench, title: "Installation", sub: "Expert Execution" },
  { icon: ShieldCheck, title: "Commissioning", sub: "Safety & Performance" },
  { icon: GraduationCap, title: "Clinical Training", sub: "Hands-on Programs" },
  { icon: Headphones, title: "After Sales Support", sub: "Long-term Partnership" },
];

const DEPARTMENTS = [
  { id: "cath", name: "Cath Lab", sub: "Interventional Cardiology", img: cathImg, code: "01" },
  { id: "mri", name: "MRI Center", sub: "Advanced Imaging", img: mriImg, code: "02" },
  { id: "ct", name: "CT Department", sub: "Computed Tomography", img: ctImg, code: "03" },
  { id: "or", name: "Operating Room", sub: "Surgical Excellence", img: orImg, code: "04" },
  { id: "icu", name: "ICU", sub: "Intensive Care", img: icuImg, code: "05" },
  { id: "pet", name: "PET / CT", sub: "Molecular Imaging", img: ctImg, code: "06" },
];

const TRANSFORM_STEPS = [
  { n: 1, title: "Room Preparation", sub: "& Infrastructure" },
  { n: 2, title: "Equipment", sub: "Installation" },
  { n: 3, title: "System", sub: "Integration" },
  { n: 4, title: "Testing &", sub: "Calibration" },
  { n: 5, title: "Training &", sub: "Handover" },
  { n: 6, title: "Department", sub: "Ready" },
];

const CATH_COMPONENTS = [
  "Imaging System",
  "Patient Table",
  "Ceiling Monitors",
  "Hemodynamic System",
  "Injector",
  "Radiation Protection",
  "Workstation",
  "UPS",
];

const DEPARTMENT_META: Record<string, { title: string; description: string; features: string[] }> = {
  cath: {
    title: "Cath Lab Turnkey Solution",
    description: "A comprehensive solution designed for interventional procedures with maximum safety, efficiency and clinical performance.",
    features: ["Interventional Procedures", "Advanced Imaging", "Radiation Safety", "Workflow Efficiency", "Patient Comfort"],
  },
  mri: {
    title: "MRI Center Turnkey Solution",
    description: "End-to-end MRI suite delivery — from RF shielding coordination to scanner installation, commissioning and clinical training.",
    features: ["Advanced Imaging", "RF Shielding Coordination", "Patient Comfort", "Workflow Efficiency", "Long-term Support"],
  },
  ct: {
    title: "CT Department Turnkey Solution",
    description: "A complete CT suite equipped for rapid, high-resolution diagnostic imaging with integrated safety and workflow systems.",
    features: ["Diagnostic Imaging", "Radiation Safety", "Contrast Injection", "PACS Integration", "Workflow Efficiency"],
  },
  or: {
    title: "Operating Room Turnkey Solution",
    description: "Fully equipped operating rooms delivered with surgical lighting, tables, anesthesia and integration systems ready for Day One.",
    features: ["Surgical Excellence", "Integrated Systems", "Sterile Workflow", "Team Ergonomics", "Patient Safety"],
  },
  icu: {
    title: "ICU Turnkey Solution",
    description: "Intensive care units delivered with monitoring, ventilation and life-support systems ready for critical clinical operation.",
    features: ["Critical Monitoring", "Ventilation Support", "Central Monitoring", "Infection Control", "Long-term Support"],
  },
  pet: {
    title: "PET / CT Turnkey Solution",
    description: "Molecular imaging suites delivered with hot-lab coordination, scanner installation, dosimetry and clinical training for oncology programs.",
    features: ["Molecular Imaging", "Hot Lab Coordination", "Radiation Safety", "PACS Integration", "Clinical Training"],
  },
};

const CATH_FEATURES = DEPARTMENT_META.cath.features;


const INCLUDED = [
  { icon: ClipboardList, title: "Planning", sub: "Needs Analysis" },
  { icon: Package, title: "Equipment", sub: "Supply" },
  { icon: Wrench, title: "Installation", sub: "Expert Execution" },
  { icon: ShieldCheck, title: "Commissioning", sub: "Safety & Testing" },
  { icon: GraduationCap, title: "Training", sub: "Clinical & Technical" },
  { icon: FileText, title: "Documentation", sub: "Complete Handover" },
  { icon: ShieldCheck, title: "Warranty", sub: "Peace of Mind" },
  { icon: Headphones, title: "After Sales", sub: "Long-term Support" },
];

const RELATED_SERVICES = [
  { title: "Installation &", subtitle: "Commissioning", img: cathImg },
  { title: "Clinical", subtitle: "Training", img: orImg },
  { title: "Preventive", subtitle: "Maintenance", img: mriImg },
  { title: "Technical", subtitle: "Support", img: ctImg },
];

const RELATED_PRODUCTS = [
  { name: "Biplane Systems", img: cathImg },
  { name: "Patient Tables", img: orImg },
  { name: "Injectors", img: ctImg },
  { name: "Radiation Protection", img: mriImg },
];

const PROJECTS = [
  { country: "Egypt", title: "Advanced Cath Lab Installation", scope: "Supply, Install, Train", img: project1 },
  { country: "Kenya", title: "Cardiac Center Development", scope: "Turnkey Solution", img: project2 },
  { country: "Iraq", title: "Cath Lab Upgrade Project", scope: "Supply, Install, Commissioning", img: project3 },
  { country: "Jordan", title: "Interventional Cardiology Unit", scope: "Turnkey Solution", img: cathImg },
];

const FAQS = [
  {
    q: "What does a turnkey medical solution include?",
    a: "A complete package: needs analysis, room design coordination, equipment supply, installation, commissioning, clinical & technical training, documentation, warranty and long-term after-sales support.",
  },
  {
    q: "How long does it take to deliver a full department?",
    a: "Typical delivery is 3–9 months depending on department type, infrastructure readiness and equipment sourcing. Our team provides a fixed timeline after site assessment.",
  },
  {
    q: "Which countries do you serve?",
    a: "We deliver projects across the Middle East, Africa and Central Asia, including Jordan, Egypt, Iraq, Yemen, Libya, Somaliland, Kenya, Uzbekistan and more.",
  },
  {
    q: "Do you provide training for hospital staff?",
    a: "Yes — every project includes hands-on clinical training for doctors and nurses, plus biomedical training for the technical team, delivered on-site.",
  },
  {
    q: "Do you handle civil construction or hospital building?",
    a: "No. AbuFarha Medical Equipment does not perform civil works or building construction. Our scope begins with medical equipment supply and systems integration — we coordinate with your civil contractor on site readiness, then deliver, install, commission, train and support.",
  },
  {
    q: "What kind of after-sales support do you offer?",
    a: "One-year free warranty on every installation, plus optional service contracts covering preventive maintenance, spare parts and 24/7 technical support.",
  },
];

/* ---------------- Page ---------------- */

export function TurnkeyPage() {
  const [activeDept, setActiveDept] = useState("cath");
  return (
    <div className="bg-white">
      <Hero />
      <DepartmentSelector active={activeDept} onChange={setActiveDept} />
      <TransformationSection />
      <SolutionOverview active={activeDept} />
      <IncludedSection />
      <RelatedGrid />
      <ProjectsSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}

/* ---------------- Hero ---------------- */

type HeroSlide = {
  id: string;
  image: string;
  alt: string;
  eyebrow: string;
  headline: React.ReactNode;
  description: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "cath",
    image: heroImg,
    alt: "Modern catheterization lab with C-arm imaging system",
    eyebrow: "Turnkey Medical Solutions",
    headline: (
      <>
        We Don't Just Supply
        <br /> Equipment.
        <br />
        <span className="text-primary">
          We Deliver Departments
          <br /> Ready for Life.
        </span>
      </>
    ),
    description:
      "From planning to long-term support, we deliver fully equipped medical departments ready for clinical operation from Day One.",
    primary: { label: "Explore Departments", href: "#departments" },
    secondary: { label: "How It Works", href: "#transformation" },
  },
  {
    id: "mri",
    image: mriImg,
    alt: "Advanced MRI scanner in a hospital imaging suite",
    eyebrow: "MRI Centers",
    headline: (
      <>
        Complete MRI Centers.
        <br />
        <span className="text-primary">
          Designed. Installed.
          <br /> Commissioned.
        </span>
      </>
    ),
    description:
      "From shielding and room preparation to installation, calibration and training.",
    primary: { label: "Explore MRI Solutions", href: "#departments" },
    secondary: { label: "View Projects", href: "#projects" },
  },
  {
    id: "or",
    image: orImg,
    alt: "Integrated hybrid operating room with imaging and surgical systems",
    eyebrow: "Hybrid Operating Rooms",
    headline: (
      <>
        Integrated Surgical
        <br /> Environments
        <br />
        <span className="text-primary">Built For Performance.</span>
      </>
    ),
    description:
      "Turnkey operating rooms with imaging integration, surgical workflow optimization and clinical training.",
    primary: { label: "Explore Operating Rooms", href: "#departments" },
    secondary: { label: "Talk To Our Team", href: "/contact" },
  },
  {
    id: "support",
    image: solutionRoomImg,
    alt: "Clinical training and long-term technical support in a hospital",
    eyebrow: "Clinical Training & Support",
    headline: (
      <>
        Beyond Installation.
        <br />
        <span className="text-primary">We Stay With You.</span>
      </>
    ),
    description:
      "Clinical education, preventive maintenance, spare parts and long-term technical support.",
    primary: { label: "After Sales Support", href: "#faq" },
    secondary: { label: "Contact Us", href: "/contact" },
  },
];

const AUTOPLAY_MS = 6000;

function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + HERO_SLIDES.length) % HERO_SLIDES.length),
    [],
  );
  const goTo = useCallback((i: number) => setIndex(i), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % HERO_SLIDES.length), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const slide = HERO_SLIDES[index];

  return (
    <section
      className="relative overflow-hidden bg-white text-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Turnkey solutions hero"
    >
      <div className="relative mx-auto max-w-[100rem] px-6 pt-10 pb-0 lg:px-10 lg:pt-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left copy */}
          <div className="relative z-10 lg:col-span-5 lg:pb-14 lg:pt-4">
            <AnimatePresence mode="wait">
              <motion.div key={slide.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary"
                >
                  {slide.eyebrow}
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-5 font-display text-[2.35rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[2.75rem] lg:text-[3.1rem]"
                >
                  {slide.headline}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 max-w-md text-[15px] leading-[1.65] text-muted-foreground"
                >
                  {slide.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
                >
                  <a
                    href={slide.primary.href}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_16px_36px_-14px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
                  >
                    {slide.primary.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href={slide.secondary.href}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e6e7ea] bg-white px-6 py-3 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:border-ink/40"
                  >
                    <Play className="h-4 w-4 text-primary" />
                    {slide.secondary.label}
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right image */}
          <div
            className="relative lg:col-span-7 lg:pb-14"
            onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStartX.current == null) return;
              const dx = e.changedTouches[0].clientX - touchStartX.current;
              if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
              touchStartX.current = null;
            }}
          >
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-[#f4f5f7] sm:h-[420px] lg:h-[500px]">
              <AnimatePresence mode="sync">
                <motion.img
                  key={slide.id}
                  src={slide.image}
                  alt={slide.alt}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1.05 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 0.9, ease: "easeInOut" },
                    scale: { duration: 6, ease: "linear" },
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Stats card — top-right on desktop */}
              <motion.div
                key={`stats-${slide.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-4 top-4 hidden rounded-md bg-white/95 px-5 py-3 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-6"
              >
                <div className="text-center">
                  <div className="font-display text-xl font-extrabold leading-none text-primary">30+</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Major<br/>Projects</div>
                </div>
                <div className="h-9 w-px bg-[#e6e7ea]" />
                <div className="text-center">
                  <div className="font-display text-xl font-extrabold leading-none text-primary">10+</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Countries</div>
                </div>
                <div className="h-9 w-px bg-[#e6e7ea]" />
                <div className="text-center">
                  <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Since</div>
                  <div className="mt-1 font-display text-xl font-extrabold leading-none text-primary">1999</div>
                </div>
              </motion.div>

              {/* Arrows */}
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 text-ink shadow-md transition hover:bg-white sm:flex"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 text-ink shadow-md transition hover:bg-white sm:flex"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
                {HERO_SLIDES.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-6 bg-primary" : "w-1.5 bg-white/80 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Mobile stats card */}
            <div className="mt-4 flex items-center justify-around rounded-md border border-[#eceef1] bg-white px-4 py-3 shadow-sm sm:hidden">
              <div className="text-center">
                <div className="font-display text-lg font-extrabold text-primary">30+</div>
                <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Projects</div>
              </div>
              <div className="h-8 w-px bg-[#e6e7ea]" />
              <div className="text-center">
                <div className="font-display text-lg font-extrabold text-primary">10+</div>
                <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Countries</div>
              </div>
              <div className="h-8 w-px bg-[#e6e7ea]" />
              <div className="text-center">
                <div className="font-display text-lg font-extrabold text-primary">1999</div>
                <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Since</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capability strip */}
      <div className="relative mt-10 border-t border-[#eceef1] bg-white">
        <div className="mx-auto grid max-w-[100rem] grid-cols-2 gap-y-4 px-6 py-5 sm:grid-cols-3 lg:grid-cols-6 lg:px-10">
          {CAPABILITIES.map((c) => (
            <div key={c.title} className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <c.icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <div className="truncate text-[12.5px] font-semibold text-ink">{c.title}</div>
                <div className="truncate text-[11px] text-muted-foreground">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------------- Department Hub ---------------- */

function DepartmentSelector({ active, onChange }: { active: string; onChange: (id: string) => void }) {
  const activeDept = DEPARTMENTS.find((d) => d.id === active) ?? DEPARTMENTS[0];
  const meta = DEPARTMENT_META[activeDept.id] ?? DEPARTMENT_META.cath;

  return (
    <section id="departments" className="relative bg-[#fafaf9]">
      <div className="mx-auto max-w-[100rem] px-6 pt-24 pb-28 lg:px-10 lg:pt-32 lg:pb-36">
        {/* Editorial header */}
        <div className="flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              <span className="mr-3 text-primary/50">01 — Ecosystem</span>
            </div>
            <h2 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink sm:text-[3.6rem] lg:text-[4.4rem]">
              One partner.
              <br />
              <span className="text-muted-foreground/60">Every clinical department.</span>
            </h2>
          </div>
          <div className="hidden shrink-0 items-baseline gap-3 lg:flex">
            <span className="font-display text-[3.2rem] font-extrabold leading-none text-ink">{DEPARTMENTS.length}</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              departments
              <br />delivered turnkey
            </span>
          </div>
        </div>

        {/* Two-column ecosystem */}
        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-14">
          {/* Editorial index (left) */}
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              <span className="h-px w-6 bg-muted-foreground/40" /> Select a department
            </div>
            <ul className="divide-y divide-ink/10">
              {DEPARTMENTS.map((d) => {
                const isActive = d.id === active;
                return (
                  <li key={d.id}>
                    <button
                      onMouseEnter={() => onChange(d.id)}
                      onClick={() => onChange(d.id)}
                      className="group relative w-full py-5 text-left lg:py-6"
                      aria-pressed={isActive}
                    >
                      <div className="grid grid-cols-[3rem_1fr_auto] items-center gap-5">
                        <span
                          className={`font-display text-[13px] font-semibold tabular-nums transition-colors ${
                            isActive ? "text-primary" : "text-muted-foreground/60"
                          }`}
                        >
                          {d.code}
                        </span>
                        <div className="min-w-0">
                          <div
                            className={`font-display text-[1.35rem] font-extrabold tracking-[-0.02em] transition-all sm:text-[1.55rem] ${
                              isActive ? "text-ink" : "text-ink/40 group-hover:text-ink/70"
                            }`}
                          >
                            {d.name}
                          </div>
                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                              >
                                <p className="mt-2 max-w-md text-[13.5px] leading-[1.6] text-muted-foreground">
                                  {d.sub}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <ArrowRight
                          className={`h-4 w-4 transition-all ${
                            isActive ? "translate-x-0 text-primary opacity-100" : "-translate-x-2 text-ink/30 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          }`}
                        />
                      </div>
                      {isActive && (
                        <motion.span
                          layoutId="dept-active-rail"
                          className="absolute left-0 top-1/2 h-8 w-[3px] -translate-y-1/2 rounded-full bg-primary"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Immersive canvas (right) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-ink/5 sm:aspect-[5/6] lg:aspect-[4/5]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeDept.id}
                  src={activeDept.img}
                  alt={activeDept.name}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent" />

              {/* Top-left connection glyph */}
              <div className="absolute left-6 top-6 flex items-center gap-3 text-white">
                <svg width="34" height="34" viewBox="0 0 34 34" className="opacity-90">
                  <circle cx="17" cy="17" r="3" fill="currentColor" className="text-primary" />
                  <circle cx="17" cy="17" r="15" fill="none" stroke="currentColor" strokeOpacity="0.4" strokeDasharray="2 3" />
                </svg>
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.28em] text-white/85">
                  AbuFarha · Turnkey Node
                </div>
              </div>

              {/* Bottom info card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDept.id + "-panel"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className="absolute inset-x-6 bottom-6 rounded-[4px] bg-white/95 p-6 backdrop-blur-xl sm:inset-x-8 sm:bottom-8 sm:p-8 lg:max-w-md"
                >
                  <div className="text-[10.5px] font-semibold uppercase tracking-[0.28em] text-primary">
                    {activeDept.code} · {activeDept.sub}
                  </div>
                  <div className="mt-2 font-display text-[1.7rem] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-[1.95rem]">
                    {activeDept.name}
                  </div>
                  <p className="mt-3 text-[13.5px] leading-[1.6] text-muted-foreground">
                    {meta.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {meta.features.slice(0, 3).map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-ink/10 px-2.5 py-1 text-[10.5px] font-semibold text-ink/75"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#solution"
                    className="mt-6 inline-flex items-center gap-2 text-[12.5px] font-bold text-ink transition-colors hover:text-primary"
                  >
                    Explore this solution
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Transformation Journey (cinematic horizontal scroll) ---------------- */

const JOURNEY_STAGES = [
  { n: "01", title: "Empty Room", copy: "A raw shell. Bare walls, unfinished floors — the starting point of every project.", metric: "Day 0", metricLabel: "Site handover", img: solutionRoomImg },
  { n: "02", title: "Construction Ready", copy: "Civil coordination complete. Structural, electrical and mechanical infrastructure verified against clinical spec.", metric: "12", metricLabel: "Site checks", img: orImg },
  { n: "03", title: "Equipment Arrives", copy: "Certified medical systems arrive on schedule from OEM partners across Europe, Japan and the US.", metric: "OEM", metricLabel: "Certified partners", img: project3 },
  { n: "04", title: "Installation", copy: "Biomedical engineers install, align and integrate every component to manufacturer specification.", metric: "100%", metricLabel: "Spec compliance", img: project2 },
  { n: "05", title: "Clinical Training", copy: "Hands-on programs for physicians, nurses and biomedical staff — delivered on-site by clinical specialists.", metric: "1:1", metricLabel: "Clinical mentoring", img: icuImg },
  { n: "06", title: "Department Live", copy: "Commissioned, calibrated and clinically accepted. Ready to receive its first patient.", metric: "Day One", metricLabel: "Patients admitted", img: cathImg },
];

function TransformationSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      const p = max > 0 ? el.scrollLeft / max : 0;
      setProgress(p);
      setActiveIdx(Math.round(p * (JOURNEY_STAGES.length - 1)));
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.72, behavior: "smooth" });
  };

  return (
    <section id="transformation" className="relative overflow-hidden bg-[#0b0c0e] text-white">
      <div className="mx-auto max-w-[100rem] px-6 pt-24 lg:px-10 lg:pt-32">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              <span className="mr-3 text-primary/60">02 — Journey</span>
            </div>
            <h2 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-[3.4rem] lg:text-[4rem]">
              From empty room
              <br />
              <span className="text-white/45">to ready for patients.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-white/60">
              Six stages, one continuous accountability. Scroll horizontally through the transformation we deliver on every project.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="font-display text-[2.4rem] font-extrabold leading-none tabular-nums">
                {JOURNEY_STAGES[activeIdx].n}
              </div>
              <div className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.28em] text-white/50">
                {JOURNEY_STAGES[activeIdx].title}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Previous stage"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/80 transition hover:border-white hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Next stage"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/80 transition hover:border-white hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress rail */}
        <div className="relative mt-12 h-px w-full bg-white/10">
          <motion.div
            className="absolute inset-y-0 left-0 bg-primary"
            style={{ width: `${Math.max(6, progress * 100)}%` }}
            transition={{ duration: 0.2 }}
          />
          <div className="mt-4 flex justify-between text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
            {JOURNEY_STAGES.map((s, i) => (
              <span key={s.n} className={i === activeIdx ? "text-white" : ""}>
                {s.n}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal cinematic scroller */}
      <div
        ref={scrollerRef}
        className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-24 lg:mt-16 lg:gap-8 lg:px-10 lg:pb-32"
        style={{ scrollbarWidth: "none" }}
      >
        <style>{`section#transformation ::-webkit-scrollbar{display:none}`}</style>
        {JOURNEY_STAGES.map((stage, i) => (
          <motion.article
            key={stage.n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.03 }}
            className="relative flex w-[86vw] shrink-0 snap-center flex-col overflow-hidden rounded-[6px] bg-white/[0.03] sm:w-[78vw] lg:w-[64vw] xl:w-[56vw]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={stage.img} alt={stage.title} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/10 to-transparent" />

              {/* Floating stage tag */}
              <div className="absolute left-6 top-6 flex items-center gap-3">
                <span className="font-display text-[3.5rem] font-extrabold leading-none tracking-[-0.04em] text-white sm:text-[4.5rem]">
                  {stage.n}
                </span>
                <div className="h-8 w-px bg-white/50" />
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.28em] text-white/85">
                  Stage
                </span>
              </div>

              {/* Floating metric */}
              <div className="absolute right-6 top-6 rounded-[3px] bg-white/95 px-4 py-3 text-ink shadow-2xl">
                <div className="font-display text-[1.4rem] font-extrabold leading-none tracking-[-0.02em]">
                  {stage.metric}
                </div>
                <div className="mt-1 text-[9.5px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {stage.metricLabel}
                </div>
              </div>
            </div>

            <div className="flex-1 px-8 py-8 lg:px-10 lg:py-10">
              <h3 className="font-display text-[1.8rem] font-extrabold tracking-[-0.02em] text-white sm:text-[2.1rem]">
                {stage.title}
              </h3>
              <p className="mt-3 max-w-lg text-[14.5px] leading-[1.65] text-white/60">
                {stage.copy}
              </p>
            </div>
          </motion.article>
        ))}
        <div className="w-6 shrink-0 lg:w-10" />
      </div>
    </section>
  );
}

/* ---------------- Solution Overview (split-screen, interactive hotspots) ---------------- */

const SOLUTION_HOTSPOTS: Array<{ n: number; label: string; x: number; y: number; spec: string }> = [
  { n: 1, label: "Imaging System", x: 32, y: 42, spec: "Floor / ceiling-mounted C-arm with flat-panel detector." },
  { n: 2, label: "Patient Table", x: 48, y: 68, spec: "Motorised, carbon-fibre top with tilt & lateral roll." },
  { n: 3, label: "Ceiling Monitors", x: 58, y: 26, spec: "Multi-modality display suspension, up to 8 signals." },
  { n: 4, label: "Hemodynamic System", x: 76, y: 46, spec: "Real-time acquisition, reporting and archiving." },
  { n: 5, label: "Injector", x: 68, y: 70, spec: "Dual-head contrast injector with pressure limiting." },
  { n: 6, label: "Radiation Protection", x: 22, y: 72, spec: "Ceiling-suspended shield and lower-body drape." },
];

function SolutionOverview({ active }: { active: string }) {
  const meta = DEPARTMENT_META[active] ?? DEPARTMENT_META.cath;
  const [hot, setHot] = useState(1);
  const activeHot = SOLUTION_HOTSPOTS.find((h) => h.n === hot) ?? SOLUTION_HOTSPOTS[0];

  return (
    <section id="solution" className="relative bg-white">
      <div className="mx-auto max-w-[100rem] px-6 pt-24 pb-28 lg:px-10 lg:pt-32 lg:pb-36">
        {/* Editorial intro */}
        <div className="max-w-3xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
            <span className="mr-3 text-primary/50">03 — Anatomy</span>
          </div>
          <h2 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink sm:text-[3.4rem] lg:text-[4rem]">
            {meta.title.replace(" Turnkey Solution", "")},
            <br />
            <span className="text-muted-foreground/60">component by component.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-[1.65] text-muted-foreground">
            {meta.description}
          </p>
        </div>

        {/* Split screen */}
        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-14">
          {/* Immersive image */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-secondary sm:aspect-[5/6] lg:aspect-[4/5]">
              <motion.img
                src={solutionRoomImg}
                alt="Cath Lab layout with equipment"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                animate={{
                  scale: 1.12,
                  x: `${(50 - activeHot.x) * 0.35}%`,
                  y: `${(50 - activeHot.y) * 0.35}%`,
                }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent" />

              {SOLUTION_HOTSPOTS.map((h) => {
                const isActive = h.n === hot;
                return (
                  <button
                    key={h.n}
                    onClick={() => setHot(h.n)}
                    onMouseEnter={() => setHot(h.n)}
                    aria-label={h.label}
                    style={{ left: `${h.x}%`, top: `${h.y}%` }}
                    className="group absolute -translate-x-1/2 -translate-y-1/2"
                  >
                    <span
                      className={`relative grid place-items-center rounded-full transition-all duration-500 ${
                        isActive ? "h-10 w-10 bg-primary text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)]" : "h-7 w-7 bg-white/95 text-ink shadow-md"
                      }`}
                    >
                      <span className="text-[11px] font-bold tabular-nums">{h.n}</span>
                      {isActive && (
                        <motion.span
                          layoutId="hot-ring"
                          className="absolute inset-0 rounded-full ring-2 ring-primary/40"
                          transition={{ type: "spring", stiffness: 300, damping: 26 }}
                        />
                      )}
                    </span>
                  </button>
                );
              })}

              {/* Floating label of active hotspot */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHot.n}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-x-6 bottom-6 rounded-[3px] bg-white/95 p-5 backdrop-blur-xl sm:inset-x-8 sm:bottom-8 lg:max-w-sm"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-[13px] font-bold tabular-nums text-primary">
                      0{activeHot.n}
                    </span>
                    <div className="font-display text-[1.15rem] font-extrabold text-ink">
                      {activeHot.label}
                    </div>
                  </div>
                  <p className="mt-2 text-[12.5px] leading-[1.6] text-muted-foreground">
                    {activeHot.spec}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Sticky info panel */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                Solution components
              </div>
              <ul className="mt-6 divide-y divide-ink/10">
                {SOLUTION_HOTSPOTS.map((h) => {
                  const isActive = h.n === hot;
                  return (
                    <li key={h.n}>
                      <button
                        onClick={() => setHot(h.n)}
                        className="group grid w-full grid-cols-[2.25rem_1fr_auto] items-center gap-4 py-4 text-left"
                      >
                        <span
                          className={`font-display text-[12px] font-bold tabular-nums transition-colors ${
                            isActive ? "text-primary" : "text-muted-foreground/60"
                          }`}
                        >
                          0{h.n}
                        </span>
                        <span
                          className={`font-display text-[1.05rem] font-bold tracking-[-0.01em] transition-colors ${
                            isActive ? "text-ink" : "text-ink/50 group-hover:text-ink/80"
                          }`}
                        >
                          {h.label}
                        </span>
                        <span
                          className={`h-[6px] w-[6px] rounded-full transition-all ${
                            isActive ? "bg-primary" : "bg-ink/15 group-hover:bg-ink/40"
                          }`}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 border-t border-ink/10 pt-8">
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  Clinical outcomes
                </div>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {meta.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-ink/10 px-3 py-1.5 text-[11.5px] font-semibold text-ink/75"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[13px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-primary"
                >
                  Request consultation
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-[13px] font-bold text-ink transition-colors hover:text-primary">
                  Download brochure <Download className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------- Included ---------------- */

function IncludedSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[100rem] px-6 pb-14 lg:px-10">
        <div className="rounded-lg border border-border bg-secondary/40 p-6 lg:p-8">
          <div className="text-[14px] font-bold text-ink">What's Included in Our Turnkey Solution</div>
          <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
            {INCLUDED.map((it) => (
              <div key={it.title} className="flex flex-col items-center text-center">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-primary">
                  <it.icon className="h-4.5 w-4.5" />
                </span>
                <div className="mt-2.5 text-[12.5px] font-bold text-ink">{it.title}</div>
                <div className="text-[11px] text-muted-foreground">{it.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Related Grid ---------------- */

function RelatedGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[100rem] px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-8">
          <div>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-[14px] font-bold text-ink">Related Services</div>
                <div className="mt-1 text-[12px] text-muted-foreground">
                  End-to-end services that complete your solution
                </div>
              </div>
              <a href="#" className="inline-flex items-center gap-1 text-[12.5px] font-bold text-primary">
                View All Services <ArrowRight className="h-3 w-3" />
              </a>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {RELATED_SERVICES.map((s) => (
                <a
                  key={s.title + s.subtitle}
                  href="#"
                  className="group overflow-hidden rounded-md border border-border bg-white transition hover:border-primary/40"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={s.img}
                      alt={`${s.title} ${s.subtitle}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute inset-x-2 bottom-2 text-[11.5px] font-bold leading-tight text-white">
                      {s.title}
                      <div>{s.subtitle}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-[14px] font-bold text-ink">Related Products</div>
                <div className="mt-1 text-[12px] text-muted-foreground">
                  Medical equipment used in this solution
                </div>
              </div>
              <a href="#" className="inline-flex items-center gap-1 text-[12.5px] font-bold text-primary">
                View All Products <ArrowRight className="h-3 w-3" />
              </a>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {RELATED_PRODUCTS.map((p) => (
                <a
                  key={p.name}
                  href="#"
                  className="group overflow-hidden rounded-md border border-border bg-white transition hover:border-primary/40"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-2.5 text-[12px] font-semibold text-ink">{p.name}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */

function ProjectsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[100rem] px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="relative overflow-hidden rounded-xl bg-[#111315] p-6 text-white lg:p-10">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                <span className="mr-2 text-white/40">04</span> Successful Projects
              </div>
              <h2 className="mt-3 font-display text-[1.9rem] font-extrabold leading-[1.15] tracking-[-0.02em]">
                Real Projects. Real Impact.
              </h2>
            </div>
            <a href="/projects" className="inline-flex items-center gap-1 text-[12.5px] font-bold text-primary">
              View All Projects <ArrowRight className="h-3 w-3" />
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 text-white transition hover:bg-white/10">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {PROJECTS.map((p) => (
                <div key={p.title} className="group relative overflow-hidden rounded-md">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  </div>
                  <div className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-0.5 text-[10.5px] font-bold text-white">
                    {p.country}
                  </div>
                  <div className="absolute inset-x-3 bottom-3 text-white">
                    <div className="text-[13px] font-bold leading-tight">{p.title}</div>
                    <div className="mt-2 text-[10.5px] font-bold uppercase tracking-wider text-white/60">Scope</div>
                    <div className="text-[11.5px] text-white/85">{p.scope}</div>
                  </div>
                  <button
                    aria-label="Open project"
                    className="absolute bottom-3 right-3 grid h-7 w-7 place-items-center rounded-full bg-white/95 text-ink transition hover:bg-white"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
            <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 text-white transition hover:bg-white/10">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${i === 1 ? "w-6 bg-primary" : "w-1.5 bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[100rem] px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
              <span className="mr-2 text-primary/60">05</span> FAQ
            </div>
            <h2 className="mt-4 font-display text-[1.9rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[2.15rem]">
              Frequently Asked
              <br /> Questions
            </h2>
            <p className="mt-4 text-[14px] leading-[1.65] text-muted-foreground">
              Everything you need to know about our turnkey medical solutions.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="divide-y divide-border rounded-lg border border-border bg-white">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <button
                    key={f.q}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="block w-full px-5 py-4 text-left"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-[14px] font-bold text-ink">{f.q}</div>
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border text-primary">
                        {isOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                      </span>
                    </div>
                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 text-[13.5px] leading-[1.7] text-muted-foreground"
                      >
                        {f.a}
                      </motion.p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCTASection() {
  const stats = [
    { value: "30+", label: "Major Projects" },
    { value: "10+", label: "Countries" },
    { value: "Since 1999", label: "Delivering Turnkey" },
    { value: "1-Year", label: "Free Warranty" },
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[100rem] px-6 pb-20 lg:px-10">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#111315] via-[#111315] to-[#1c1f22] p-8 text-white lg:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                Start Your Next Department
              </div>
              <h2 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.12] tracking-[-0.02em] sm:text-[2.4rem]">
                Tell us the room.
                <br /> We'll return with the department.
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-[1.65] text-white/70">
                From equipment supply to installation, commissioning, clinical training and long-term after-sales support — one accountable partner, one delivered department.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_16px_36px_-14px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
                >
                  Initiate a Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white/10"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                    <div className="font-display text-[1.6rem] font-extrabold leading-none text-primary">{s.value}</div>
                    <div className="mt-2 text-[12px] font-semibold text-white/80">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
