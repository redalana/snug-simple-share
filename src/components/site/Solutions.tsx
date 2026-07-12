import { useState } from "react";
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
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);
  const active = CATEGORIES.find((c) => c.id === activeId) ?? CATEGORIES[0];

  return (
    <section id="solutions" className="relative overflow-hidden bg-background py-14 lg:py-[4.5rem]">
      {/* subtle technical grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow index="01">Explore Our Categories</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.12] tracking-[-0.02em] text-ink sm:text-[2.45rem]">
              Advanced Medical Technologies for Every Specialty
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            View All Categories
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Category navigation */}
        <div className="-mx-6 mb-8 overflow-x-auto px-6 [scrollbar-width:none] lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max gap-1 border-b border-border lg:min-w-0">
            {CATEGORIES.map((c) => {
              const Icon = c.icon;
              const isActive = c.id === activeId;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveId(c.id)}
                  className={`relative flex shrink-0 items-center gap-2 px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-ink"
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                  {c.nav}
                  {isActive && (
                    <motion.span
                      layoutId="cat-underline"
                      className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Explorer */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          {/* Content */}
          <div className="order-2 flex flex-col lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full flex-col"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                  Featured Category
                </span>
                <h3 className="mt-3 font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[2.4rem]">
                  {active.title}
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                  {active.desc}
                </p>

                <ul className="mt-6 space-y-3">
                  {active.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3 text-sm text-ink">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {cap}
                    </li>
                  ))}
                </ul>

                {/* Contextual meta */}
                <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
                  {active.meta.map((m) => (
                    <div key={m.label} className="bg-background p-4">
                      <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                        {m.label}
                      </div>
                      <div className="mt-1.5 text-[13px] font-semibold leading-snug text-ink">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-dark"
                  >
                    Explore {active.nav}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold text-ink transition-colors hover:border-ink/30"
                  >
                    Talk to a Specialist
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Featured image */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-secondary ring-1 ring-black/5 lg:aspect-16/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.id}
                  src={active.img}
                  alt={active.title}
                  loading="lazy"
                  width={1600}
                  height={1000}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
