import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Plus,
  Minus,
  PlayCircle,
  Stethoscope,
  Package,
  Wrench,
  ShieldCheck,
  GraduationCap,
  FileText,
  BadgeCheck,
  Headphones,
} from "lucide-react";
import turnkeyHero from "@/assets/turnkey-hero.jpg";
import solMri from "@/assets/sol-mri.jpg";
import solCt from "@/assets/sol-ct.jpg";
import solPetct from "@/assets/sol-petct.jpg";
import solCarm from "@/assets/sol-carm.jpg";
import solOr from "@/assets/sol-or.jpg";
import solMammo from "@/assets/sol-mammo.jpg";
import solXray from "@/assets/sol-xray.jpg";
import solUltrasound from "@/assets/sol-ultrasound.jpg";
import heroCathlab from "@/assets/hero-cathlab.jpg";
import whyCathlab from "@/assets/why-cathlab.jpg";
import beyondCathlab from "@/assets/beyond-cathlab.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

/* -------------------------------------------------------------------------- */
/*  Tokens                                                                    */
/* -------------------------------------------------------------------------- */

const NAVY = "bg-[#0A1633]";
const NAVY_2 = "bg-[#0d1c3d]";
const SURFACE = "bg-[#F4F5F7]";
const INK = "text-[#0A1633]";
const RED = "text-[hsl(0_84%_55%)]";
const RED_BG = "bg-[hsl(0_84%_55%)]";

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

type Department = {
  key: string;
  name: string;
  tag: string;
  image: string;
  spec: string;
  components: string[];
  benefits: string[];
};

const DEPARTMENTS: Department[] = [
  {
    key: "cathlab",
    name: "Cath Lab",
    tag: "Interventional Cardiology",
    image: heroCathlab,
    spec: "A comprehensive solution designed for interventional procedures with maximum safety, efficiency and clinical performance.",
    components: [
      "Biplane Imaging System",
      "Patient Table",
      "Ceiling Mounted Monitors",
      "Hemodynamic System",
      "Injector System",
      "Radiation Protection",
      "Workstation & Storage",
      "Power & UPS System",
    ],
    benefits: [
      "Interventional Procedures",
      "Advanced Imaging",
      "Radiation Safety",
      "Workflow Efficiency",
      "Patient Comfort",
    ],
  },
  {
    key: "mri",
    name: "MRI Center",
    tag: "Advanced Imaging",
    image: solMri,
    spec: "A magnetic-resonance suite delivered ready for clinical operation — shielded, calibrated and staffed with certified sonographers.",
    components: [
      "1.5T or 3T Magnet",
      "RF Cage & Shielding",
      "Gradient & Coil Portfolio",
      "Cryogen & Quench Routing",
      "Reading Workstation",
      "Patient Comfort Suite",
      "PACS Integration",
      "Power & UPS System",
    ],
    benefits: [
      "Neuro & Body Imaging",
      "Homogeneity Certified",
      "Silent Sequences",
      "Workflow Efficiency",
      "Patient Comfort",
    ],
  },
  {
    key: "ct",
    name: "CT Department",
    tag: "Computed Tomography",
    image: solCt,
    spec: "High-resolution CT commissioned with dose-modulation, cardiac gating and a reconstruction workstation tuned to your protocols.",
    components: [
      "Gantry & Detector Array",
      "Patient Table",
      "Contrast Injector",
      "Reconstruction Workstation",
      "Dose-Modulation Software",
      "Radiation Protection",
      "PACS Integration",
      "Power & UPS System",
    ],
    benefits: [
      "Cardiac Imaging",
      "Low-Dose Protocols",
      "Trauma Ready",
      "Fast Reconstruction",
      "Workflow Efficiency",
    ],
  },
  {
    key: "or",
    name: "Operating Room",
    tag: "Surgical Excellence",
    image: solOr,
    spec: "A fully equipped surgical theatre delivered with imaging, anaesthesia and OR integration validated to sterile workflow.",
    components: [
      "Surgical Table",
      "OR Lighting",
      "Anaesthesia Workstation",
      "Electrosurgery & Energy",
      "Ceiling Pendants",
      "OR Integration & Video",
      "Sterile Storage",
      "Power & UPS System",
    ],
    benefits: [
      "Hybrid Surgery",
      "Sterile Workflow",
      "Team Ergonomics",
      "Video Routing",
      "Patient Safety",
    ],
  },
  {
    key: "icu",
    name: "ICU",
    tag: "Intensive Care",
    image: whyCathlab,
    spec: "Intensive-care beds equipped for high-acuity monitoring, ventilation and central-station integration from day one.",
    components: [
      "ICU Bed",
      "Multi-Parameter Monitor",
      "Ventilator",
      "Syringe & Infusion Pumps",
      "Central Monitoring Station",
      "Medical Gas Outlets",
      "Ceiling Supply Units",
      "Power & UPS System",
    ],
    benefits: [
      "High-Acuity Monitoring",
      "Central Station",
      "Infection Control",
      "Alarm Management",
      "Team Efficiency",
    ],
  },
  {
    key: "petct",
    name: "PET / CT",
    tag: "Molecular Imaging",
    image: solPetct,
    spec: "Molecular imaging suite delivered with hot-lab workflow, dosimetry protocols and an oncology reading environment.",
    components: [
      "PET/CT Gantry",
      "Time-of-Flight Reconstruction",
      "Hot-Lab Workflow",
      "Dosimetry Protocols",
      "Reading Workstation",
      "Radiation Shielding",
      "PACS Integration",
      "Power & UPS System",
    ],
    benefits: [
      "Oncology Ready",
      "Theranostics",
      "Low-Dose Protocols",
      "Fast Reconstruction",
      "Workflow Efficiency",
    ],
  },
  {
    key: "mammo",
    name: "Mammography",
    tag: "Women's Health",
    image: solMammo,
    spec: "Screening and diagnostic mammography with tomosynthesis, biopsy workflow and MQSA-aligned QC protocols.",
    components: [
      "Full-Field Digital Mammography",
      "Tomosynthesis Licensing",
      "Stereotactic Biopsy",
      "Reading Workstation",
      "QC Protocol Suite",
      "Radiation Shielding",
      "PACS Integration",
      "Power & UPS System",
    ],
    benefits: [
      "Screening & Diagnostic",
      "Biopsy Workflow",
      "Low-Dose Protocols",
      "Patient Comfort",
      "MQSA-Aligned QC",
    ],
  },
  {
    key: "xray",
    name: "Radiology",
    tag: "Digital X-Ray",
    image: solXray,
    spec: "Digital radiography rooms installed with wireless detectors, dose tracking and full RIS / PACS integration.",
    components: [
      "Generator & Tube",
      "Wireless Detectors",
      "Auto-Positioning",
      "Dose Tracking & QC",
      "RIS / PACS Integration",
      "Radiation Shielding",
      "Reporting Workstation",
      "Power & UPS System",
    ],
    benefits: [
      "General Radiology",
      "Long-Length Imaging",
      "Low-Dose Protocols",
      "Fast Throughput",
      "Workflow Efficiency",
    ],
  },
];

const PHASES = [
  {
    n: "01",
    title: "Room Preparation",
    body: "Site survey, service routing and infrastructure readiness sign-off.",
    image: whyCathlab,
  },
  {
    n: "02",
    title: "Equipment Installation",
    body: "Manufacturer-certified engineers install and integrate the systems.",
    image: solCarm,
  },
  {
    n: "03",
    title: "System Integration",
    body: "PACS, RIS and hospital-network integration validated end-to-end.",
    image: beyondCathlab,
  },
  {
    n: "04",
    title: "Testing & Calibration",
    body: "Acceptance testing and calibration against clinical protocols.",
    image: solCt,
  },
  {
    n: "05",
    title: "Training & Handover",
    body: "On-site clinical applications training with the operating team.",
    image: solOr,
  },
  {
    n: "06",
    title: "Department Ready",
    body: "Signed off, live under clinical load, under long-term support.",
    image: heroCathlab,
  },
] as const;

const SCOPE_MATRIX = [
  { label: "Needs Analysis & Site Survey", included: true, note: "Clinical workflow, room readiness, service routing." },
  { label: "Equipment Supply (OEM certified)", included: true, note: "Premium global manufacturers, factory sealed." },
  { label: "Installation by Certified Engineers", included: true, note: "Manufacturer-authorised installation teams." },
  { label: "Commissioning & Acceptance Testing", included: true, note: "Safety, calibration, protocol validation." },
  { label: "Clinical Applications Training", included: true, note: "On-site, protocol-based, until independent." },
  { label: "Technical Documentation & Handover", included: true, note: "As-built records, manuals, QC baselines." },
  { label: "Manufacturer Warranty", included: true, note: "Standard OEM warranty, coordinated end-to-end." },
  { label: "Preventive Maintenance Programme", included: true, note: "Scheduled visits with priority response." },
  { label: "Extended Warranty (multi-year)", included: false, note: "Optional lifecycle cover, quoted per system." },
  { label: "Bio-medical Consumables Programme", included: false, note: "Optional recurring supply contract." },
  { label: "Remote Diagnostics & Uptime SLA", included: false, note: "Where supported by the OEM platform." },
  { label: "Refresher & Advanced Training", included: false, note: "Booked as needed post go-live." },
] as const;

const CAPABILITIES = [
  { title: "Consultation", sub: "Needs Analysis" },
  { title: "Equipment Supply", sub: "Premium & Reliable" },
  { title: "Installation", sub: "Expert Execution" },
  { title: "Commissioning", sub: "Safety & Performance" },
  { title: "Clinical Training", sub: "Hands-on Programs" },
  { title: "After Sales Support", sub: "Long-term Partnership" },
] as const;

const RELATED_SERVICES = [
  { name: "Installation & Commissioning", image: solCarm, to: "/#services" },
  { name: "Clinical Training", image: solOr, to: "/#services" },
  { name: "Preventive Maintenance", image: whyCathlab, to: "/#services" },
  { name: "Technical Support", image: beyondCathlab, to: "/#services" },
];

const RELATED_PRODUCTS = [
  {
    name: "Biplane Imaging System",
    type: "Interventional Cardiology",
    spec: "Dual-plane · Low-dose · 3D roadmap",
    image: heroCathlab,
    to: "/products",
  },
  {
    name: "Surgical Patient Table",
    type: "Operating Room",
    spec: "Modular · 450 kg · Carbon top",
    image: solOr,
    to: "/products",
  },
  {
    name: "Dual-Head Contrast Injector",
    type: "CT / Angiography",
    spec: "Programmable · Traceable · MR-safe",
    image: solCt,
    to: "/products",
  },
  {
    name: "Radiation Protection Suite",
    type: "Cath Lab / Radiology",
    spec: "Ceiling · Mobile · Personal PPE",
    image: solMammo,
    to: "/products",
  },
];

const CASES = [
  {
    country: "Egypt",
    title: "Advanced Cath Lab Installation",
    scope: "Supply · Install · Commission · Train",
    dept: "Interventional Cardiology",
    equipment: "Biplane imaging, hemodynamic system, injector, radiation protection.",
    services: "Site survey, install, commissioning, applications training, warranty.",
    outcome: "Interventional programme operational within 30 days of handover.",
    image: project1,
  },
  {
    country: "Kenya",
    title: "Cardiac Center Development",
    scope: "Full Turnkey Solution",
    dept: "Cardiology Floor",
    equipment: "Cath lab, echo, patient monitors, recovery bays, central station.",
    services: "Planning, supply, install, integration, training, PPM contract.",
    outcome: "Full cardiology floor commissioned across imaging, cath and recovery.",
    image: project2,
  },
  {
    country: "Iraq",
    title: "Cath Lab Upgrade Project",
    scope: "Supply · Install · Commission",
    dept: "Cath Lab",
    equipment: "Biplane C-arm, hemodynamic monitor, ceiling suspensions, PACS gateway.",
    services: "De-install legacy, install, commissioning, PACS integration.",
    outcome: "Legacy suite upgraded with biplane imaging and PACS integration live.",
    image: project3,
  },
  {
    country: "Jordan",
    title: "Interventional Cardiology Unit",
    scope: "Full Turnkey Solution",
    dept: "Interventional Cardiology",
    equipment: "Cath lab, defibrillators, ultrasound, ICU-grade monitors.",
    services: "Supply, install, commissioning, training, multi-year support.",
    outcome: "End-to-end unit commissioned, trained and under long-term service.",
    image: heroCathlab,
  },
];

const FAQS = [
  {
    q: "What is a turnkey medical department?",
    a: "A complete clinical department delivered as a single accountable programme — equipment supply, installation, commissioning, clinical training, documentation, warranty and long-term support. The outcome is a department ready for clinical operation, not a construction project. AbuFarha does not perform civil works.",
  },
  {
    q: "What is included in a turnkey solution?",
    a: "Equipment procurement, factory-certified installation, safety and performance commissioning, on-site applications training, technical documentation, manufacturer warranty and a defined preventive-maintenance schedule with priority technical response.",
  },
  {
    q: "Which departments do you deliver as turnkey?",
    a: "Cath Lab, MRI, CT, PET/CT, Operating Room, ICU, Mammography, Digital X-Ray, Ultrasound and mobile C-arm suites — across cardiology, radiology, oncology, women's health and surgery.",
  },
  {
    q: "How does commissioning work?",
    a: "Acceptance testing follows international standards and each department's own SOPs. Systems are calibrated, safety-validated and signed off against clinical protocols before handover — never released on an email alone.",
  },
  {
    q: "How is clinical training delivered?",
    a: "Clinical applications specialists run on-site training tied to real clinical protocols. Staff move from vendor demo to independent operation before the team leaves the floor, with refresher sessions available.",
  },
  {
    q: "What happens after installation and handover?",
    a: "Every turnkey installation transitions into an after-sales programme: preventive maintenance, spare-parts logistics, remote diagnostics where supported by the OEM, and priority technical response for the lifecycle of the equipment.",
  },
  {
    q: "Do you build the hospital shell?",
    a: "No. AbuFarha Medical Supplies does not build hospitals or perform civil works. We deliver the clinical core inside the space provided — equipment, integration, commissioning, training and long-term support.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Small primitives                                                           */
/* -------------------------------------------------------------------------- */

function StatusDot({ tone = "on" }: { tone?: "on" | "off" }) {
  if (tone === "on") {
    return (
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full bg-[#34C759] shadow-[0_0_10px_#34C759]"
      />
    );
  }
  return <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-white/25" />;
}

function ChapterLabel({
  index,
  children,
  tone = "dark",
}: {
  index: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  const chip =
    tone === "light"
      ? "text-white/60 border-white/15 bg-white/5"
      : "text-[#0A1633]/60 border-[#0A1633]/10 bg-white";
  return (
    <span
      className={`inline-flex items-center gap-3 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] ${chip}`}
    >
      <span className="tabular-nums">{index}</span>
      <span className="h-px w-6 bg-current opacity-40" />
      <span>{children}</span>
    </span>
  );
}

function SectionKicker({
  index,
  label,
  tone = "dark",
}: {
  index: string;
  label: string;
  tone?: "dark" | "light";
}) {
  const num = tone === "light" ? "text-white/60" : "text-[hsl(0_84%_55%)]";
  const txt =
    tone === "light" ? "text-white/60" : "text-[#0A1633]/60";
  return (
    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em]">
      <span className={`tabular-nums ${num}`}>{index}</span>
      <span className={txt}>{label}</span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export function TurnkeyPage() {
  return (
    <>
      <FaqSchema />
      <Hero />
      <DepartmentExplorer />
      <BuildYourDepartment />
      <SolutionOverview />
      <WhatsIncluded />
      <RelatedGrid />
      <Projects />
      <Faq />
      <ClosingCta />
    </>
  );
}

/* --------- 00 · Hero ------------------------------------------------------ */

function Hero() {
  return (
    <section className={`relative ${NAVY} text-white overflow-hidden`}>
      <img
        src={turnkeyHero}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1633] via-[#0A1633]/85 to-[#0A1633]/30" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A1633] to-transparent" />

      <div className="relative mx-auto max-w-[1240px] px-6 pt-14 pb-6 lg:pt-20 lg:pb-8">
        <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-[hsl(0_84%_65%)] mb-6">
          Turnkey Medical Solutions
        </div>

        <div className="grid grid-cols-12 gap-8 items-end">
          <h1
            className="col-span-12 lg:col-span-8 font-display font-extrabold tracking-[-0.03em] leading-[0.96]
                       text-[clamp(2.5rem,5.8vw,5.25rem)]"
          >
            We don&apos;t just supply equipment.
            <br />
            We deliver departments{" "}
            <span className={RED}>ready for life.</span>
          </h1>

          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 lg:pb-3">
            <p className="text-white/70 text-[15px] leading-relaxed max-w-md">
              From planning to long-term support, we deliver fully-equipped
              medical departments that are ready for clinical operation from
              day one.
            </p>

            {/* Floating stats card — trimmed */}
            <div className="self-start lg:self-end bg-white text-[#0A1633] rounded-xl px-4 py-3.5 min-w-[170px] shadow-[0_18px_50px_-20px_rgba(0,0,0,0.5)]">
              <div className="flex items-baseline gap-2">
                <span className={`font-display text-[2.5rem] leading-none font-extrabold ${RED} tracking-tight`}>
                  30+
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0A1633]/70">
                  Major<br/>Projects
                </span>
              </div>
              <div className="mt-3 border-t border-[#0A1633]/10 pt-2 flex items-center gap-3 text-[11px] text-[#0A1633]/60">
                <span>10+ Countries</span>
                <span className="h-1 w-1 rounded-full bg-[#0A1633]/30" />
                <span>Since 1999</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            className={`inline-flex items-center gap-2 ${RED_BG} text-white font-bold px-6 py-3 rounded-full hover:brightness-110 transition-all`}
          >
            Explore Departments <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#build"
            className="inline-flex items-center gap-2 border border-white/25 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/5 transition-all"
          >
            <PlayCircle className="h-4 w-4" /> How It Works
          </a>
        </div>

        {/* Capability strip — trimmed */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
          {CAPABILITIES.map((c) => (
            <div key={c.title} className="bg-[#0A1633]/70 px-4 py-2.5">
              <div className="text-[11px] font-bold text-white tracking-tight leading-tight">
                {c.title}
              </div>
              <div className="mt-0.5 text-[9px] uppercase tracking-[0.18em] text-white/50">
                {c.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------- 01 · Choose Your Department ------------------------------------ */

function DepartmentExplorer() {
  const [key, setKey] = useState<string>(DEPARTMENTS[0].key);
  const active = useMemo(
    () => DEPARTMENTS.find((d) => d.key === key) ?? DEPARTMENTS[0],
    [key]
  );
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "l" | "r") => {
    scrollerRef.current?.scrollBy({
      left: dir === "l" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1240px] px-6 pt-24 lg:pt-32">
        <div className="grid grid-cols-12 gap-8 items-end mb-10">
          <div className="col-span-12 lg:col-span-8">
            <SectionKicker index="01" label="Choose Your Department" />
            <h2
              className={`mt-5 font-display font-extrabold tracking-[-0.02em] leading-[1.02] text-4xl md:text-5xl lg:text-[3.75rem] ${INK}`}
            >
              Solutions for every{" "}
              <span className="text-[#0A1633]/40">clinical department.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 flex items-end justify-between gap-4 lg:pb-3">
            <p className="text-[#0A1633]/60 leading-relaxed max-w-sm">
              Select a department to preview its complete turnkey scope,
              components and delivered services.
            </p>
            <div className="hidden lg:flex items-center gap-2">
              <button
                type="button"
                aria-label="Scroll left"
                onClick={() => scroll("l")}
                className="h-10 w-10 rounded-full border border-[#0A1633]/15 flex items-center justify-center text-[#0A1633] hover:bg-[#0A1633] hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Scroll right"
                onClick={() => scroll("r")}
                className="h-10 w-10 rounded-full border border-[#0A1633]/15 flex items-center justify-center text-[#0A1633] hover:bg-[#0A1633] hover:text-white transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal cards */}
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto pb-6 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {DEPARTMENTS.map((d) => {
            const on = d.key === active.key;
            return (
              <button
                key={d.key}
                type="button"
                onClick={() => setKey(d.key)}
                className={`group relative shrink-0 w-[220px] md:w-[240px] rounded-2xl overflow-hidden text-left snap-start border-2 transition-all ${
                  on
                    ? "border-[hsl(0_84%_55%)] shadow-[0_18px_50px_-20px_rgba(215,45,45,0.35)]"
                    : "border-transparent hover:border-[#0A1633]/15"
                }`}
              >
                <div className="relative aspect-[4/5]">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1633]/90 via-[#0A1633]/20 to-transparent" />
                  <div className="absolute top-3 left-3 h-8 w-8 rounded-full bg-white flex items-center justify-center">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        on ? "bg-[hsl(0_84%_55%)]" : "bg-[#0A1633]/30"
                      }`}
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="font-display font-extrabold text-xl tracking-tight">
                      {d.name}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/70">
                      {d.tag}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
          {/* View all card */}
          <Link
            to="/products"
            className="group shrink-0 w-[220px] md:w-[240px] rounded-2xl overflow-hidden border-2 border-dashed border-[#0A1633]/20 hover:border-[#0A1633]/60 transition-colors flex flex-col items-center justify-center text-center p-6 aspect-[4/5]"
          >
            <div className="h-12 w-12 rounded-full bg-[#0A1633]/5 flex items-center justify-center mb-4">
              <Plus className="h-5 w-5 text-[#0A1633]/60" />
            </div>
            <div className="font-display font-bold text-[#0A1633]">
              More Departments
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#0A1633]/50">
              View All
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --------- 02 · Build Your Department (dark transformation strip) --------- */

function BuildYourDepartment() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          PHASES.forEach((_, i) => {
            setTimeout(() => setActive((prev) => Math.max(prev, i + 1)), i * 360);
          });
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="build" className="bg-white pt-24 lg:pt-28 pb-10">
      <div className="mx-auto max-w-[1240px] px-6">
        <div
          ref={sectionRef}
          className={`relative ${NAVY} rounded-3xl overflow-hidden text-white`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,45,45,0.15),transparent_60%)]" />
          <div className="relative grid grid-cols-12 gap-8 p-8 md:p-12 lg:p-14">
            {/* Left column: title */}
            <div className="col-span-12 lg:col-span-3">
              <SectionKicker index="02" label="Build Your Department" tone="light" />
              <h2 className="mt-5 font-display font-extrabold tracking-[-0.02em] leading-[1.02] text-3xl md:text-4xl">
                From empty room to ready for patients.
              </h2>
              <p className="mt-5 text-white/60 text-sm leading-relaxed">
                We take care of every detail. Six phases transform a space into
                a fully functional medical department.
              </p>
              <a
                href="#projects"
                className="mt-8 inline-flex items-center gap-2 border border-white/25 text-white font-semibold px-5 py-3 rounded-full hover:bg-white/5 transition-all text-sm"
              >
                <PlayCircle className="h-4 w-4" /> See the Transformation
              </a>
            </div>

            {/* Right column: 6 phase tiles */}
            <div className="col-span-12 lg:col-span-9">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {PHASES.map((p, i) => {
                  const on = i < active;
                  const done = i + 1 === PHASES.length && on;
                  return (
                    <div key={p.n} className="relative group">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-bold tabular-nums transition-colors ${
                            on
                              ? "bg-[hsl(0_84%_55%)] text-white"
                              : "bg-white/10 text-white/50"
                          }`}
                        >
                          {i + 1}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.18em] text-white/50 font-bold leading-tight">
                          {p.title}
                        </span>
                      </div>
                      <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.title}
                          className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
                            on ? "opacity-100" : "opacity-30 grayscale"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1633] to-transparent" />
                        {done && (
                          <div className="absolute inset-0 flex items-end justify-center pb-4">
                            <div className="flex items-center gap-1.5 bg-[#34C759] text-white text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full">
                              <span className="h-1.5 w-1.5 rounded-full bg-white" />
                              Ready
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Operational-ready progress line */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/50">
                    <span>Delivery Progress</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] transition-colors ${
                      active >= PHASES.length ? "text-[#34C759]" : "text-white/40"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        active >= PHASES.length
                          ? "bg-[#34C759] shadow-[0_0_10px_#34C759]"
                          : "bg-white/25"
                      }`}
                    />
                    {active >= PHASES.length
                      ? "Ready for Clinical Operation"
                      : `Phase ${Math.max(active, 1)} of ${PHASES.length}`}
                  </div>
                </div>
                <div className="relative h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 transition-all duration-700 ease-out rounded-full ${
                      active >= PHASES.length
                        ? "bg-[#34C759] shadow-[0_0_20px_#34C759]"
                        : "bg-[hsl(0_84%_55%)]"
                    }`}
                    style={{ width: `${(active / PHASES.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------- 03 · Solution Overview ---------------------------------------- */

function SolutionOverview() {
  const [key, setKey] = useState<string>(DEPARTMENTS[0].key);
  const active = useMemo(
    () => DEPARTMENTS.find((d) => d.key === key) ?? DEPARTMENTS[0],
    [key]
  );
  const [hover, setHover] = useState<number | null>(null);

  // 8 hotspot positions across the image
  const hotspots = [
    { x: 22, y: 32 }, { x: 48, y: 26 }, { x: 72, y: 30 }, { x: 82, y: 55 },
    { x: 60, y: 62 }, { x: 38, y: 68 }, { x: 20, y: 60 }, { x: 50, y: 82 },
  ];

  return (
    <section className="bg-white pt-24 lg:pt-32 pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="grid grid-cols-12 gap-8 mb-12">
          <div className="col-span-12 lg:col-span-5">
            <SectionKicker index="03" label="Solution Overview" />
            <h2
              className={`mt-5 font-display font-extrabold tracking-[-0.02em] leading-[1.02] text-4xl md:text-5xl lg:text-[3.25rem] ${INK}`}
            >
              {active.name}
              <br />
              <span className="text-[#0A1633]/40">Turnkey Solution.</span>
            </h2>
            <p className="mt-6 text-[#0A1633]/70 leading-relaxed max-w-md">
              {active.spec}
            </p>
            <ul className="mt-8 space-y-2.5">
              {active.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-[15px] text-[#0A1633]/80"
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${RED_BG}`} />
                  {b}
                </li>
              ))}
            </ul>

            {/* Department picker (compact) */}
            <div className="mt-8 flex flex-wrap gap-2">
              {DEPARTMENTS.slice(0, 6).map((d) => {
                const on = d.key === active.key;
                return (
                  <button
                    key={d.key}
                    type="button"
                    onClick={() => setKey(d.key)}
                    className={`text-xs font-bold uppercase tracking-[0.14em] px-3 py-2 rounded-full border transition-colors ${
                      on
                        ? "bg-[#0A1633] text-white border-[#0A1633]"
                        : "text-[#0A1633]/60 border-[#0A1633]/15 hover:border-[#0A1633]/60"
                    }`}
                  >
                    {d.name}
                  </button>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 ${RED_BG} text-white font-bold px-5 py-3 rounded-full hover:brightness-110 transition-all text-sm`}
              >
                Request Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 ${INK} font-bold text-sm underline underline-offset-4 decoration-[#0A1633]/20 hover:decoration-[#0A1633]/60 transition-colors px-2 py-3`}
              >
                Download Brochure
              </Link>
            </div>
          </div>

          {/* Center: image with numbered hotspots */}
          <div className="col-span-12 lg:col-span-4">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F4F5F7]">
              <img
                key={active.image}
                src={active.image}
                alt={`${active.name} solution`}
                className="absolute inset-0 h-full w-full object-cover animate-[fade-in_0.5s_ease-out]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A1633]/40" />
              {hotspots.map((h, i) => {
                const on = hover === i;
                return (
                  <button
                    key={i}
                    type="button"
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${h.x}%`, top: `${h.y}%` }}
                    aria-label={active.components[i]}
                  >
                    <span
                      className={`flex items-center justify-center h-7 w-7 rounded-full text-[11px] font-bold tabular-nums transition-all ${
                        on
                          ? "bg-[hsl(0_84%_55%)] text-white scale-110 shadow-[0_0_0_6px_rgba(215,45,45,0.15)]"
                          : "bg-white text-[#0A1633] shadow-[0_0_0_4px_rgba(255,255,255,0.35)]"
                      }`}
                    >
                      {i + 1}
                    </span>
                  </button>
                );
              })}
              <div className="absolute bottom-4 left-4 right-4 text-white/80 text-[10px] font-mono uppercase tracking-[0.18em] flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/60" />
                Hover the numbers to explore components
              </div>
            </div>
          </div>

          {/* Right: components list */}
          <div className="col-span-12 lg:col-span-3">
            <div className="rounded-2xl border border-[#0A1633]/10 bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#0A1633]/50 mb-4">
                Solution Components
              </div>
              <ul>
                {active.components.map((c, i) => {
                  const on = hover === i;
                  return (
                    <li
                      key={c}
                      onMouseEnter={() => setHover(i)}
                      onMouseLeave={() => setHover(null)}
                      className={`flex items-center justify-between gap-3 py-3 border-b border-[#0A1633]/10 last:border-b-0 cursor-default transition-colors ${
                        on ? "text-[hsl(0_84%_55%)]" : "text-[#0A1633]"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`flex items-center justify-center h-6 w-6 rounded-full text-[10px] font-bold tabular-nums ${
                            on
                              ? "bg-[hsl(0_84%_55%)] text-white"
                              : "bg-[#0A1633] text-white"
                          }`}
                        >
                          {i + 1}
                        </span>
                        <span className="text-sm font-semibold">{c}</span>
                      </span>
                      <ArrowUpRight
                        className={`h-4 w-4 shrink-0 ${
                          on ? "text-[hsl(0_84%_55%)]" : "text-[#0A1633]/30"
                        }`}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-4 rounded-2xl bg-[#F4F5F7] p-6">
              <div className="text-sm font-bold text-[#0A1633]">
                Need a customized solution?
              </div>
              <p className="mt-1 text-xs text-[#0A1633]/60 leading-relaxed">
                Our team will design a solution tailored to your clinical
                needs.
              </p>
              <Link
                to="/contact"
                className={`mt-3 inline-flex items-center gap-2 ${RED} font-bold text-xs`}
              >
                Talk to an Expert <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------- 04 · What's Included ------------------------------------------ */

function WhatsIncluded() {
  const included = SCOPE_MATRIX.filter((r) => r.included);
  const optional = SCOPE_MATRIX.filter((r) => !r.included);
  return (
    <section className={SURFACE}>
      <div className="mx-auto max-w-[1240px] px-6 py-20 lg:py-24">
        <div className="grid grid-cols-12 gap-8 items-end mb-10">
          <div className="col-span-12 lg:col-span-8">
            <SectionKicker index="04" label="Scope Matrix" />
            <h3
              className={`mt-5 font-display font-extrabold tracking-[-0.02em] leading-[1.02] text-3xl md:text-4xl lg:text-[2.75rem] ${INK}`}
            >
              What&apos;s included.{" "}
              <span className="text-[#0A1633]/40">What&apos;s optional.</span>
            </h3>
          </div>
          <p className="col-span-12 lg:col-span-4 text-sm text-[#0A1633]/60 leading-relaxed">
            Every engagement is delivered against a single accountable scope —
            no hand-offs between vendors, no ambiguity at handover.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ScopeColumn label="Included as standard" tone="on" rows={included} />
          <ScopeColumn label="Optional add-ons" tone="off" rows={optional} />
        </div>
      </div>
    </section>
  );
}

function ScopeColumn({
  label,
  tone,
  rows,
}: {
  label: string;
  tone: "on" | "off";
  rows: readonly { label: string; note: string }[];
}) {
  const on = tone === "on";
  return (
    <div className={`rounded-2xl overflow-hidden border ${on ? "border-[#0A1633]/10 bg-white" : "border-[#0A1633]/10 bg-white/60"}`}>
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#0A1633]/10">
        <div className="flex items-center gap-2.5">
          <span
            className={`h-2 w-2 rounded-full ${
              on ? "bg-[#34C759] shadow-[0_0_10px_#34C759]" : "bg-[#0A1633]/25"
            }`}
          />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0A1633]">
            {label}
          </span>
        </div>
        <span className="text-[11px] font-mono tabular-nums text-[#0A1633]/40">
          {String(rows.length).padStart(2, "0")}
        </span>
      </div>
      <ul>
        {rows.map((r, i) => (
          <li
            key={r.label}
            className={`grid grid-cols-[auto_1fr_auto] items-start gap-4 px-6 py-4 ${
              i < rows.length - 1 ? "border-b border-[#0A1633]/8" : ""
            }`}
          >
            <span className="font-mono text-[11px] tabular-nums text-[#0A1633]/40 pt-0.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="text-[15px] font-semibold text-[#0A1633] leading-snug">
                {r.label}
              </div>
              <div className="mt-0.5 text-[12.5px] text-[#0A1633]/55 leading-snug">
                {r.note}
              </div>
            </div>
            <span
              className={`text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full shrink-0 ${
                on
                  ? "bg-[#34C759]/12 text-[#0d7a34]"
                  : "border border-[#0A1633]/20 text-[#0A1633]/60"
              }`}
            >
              {on ? "Included" : "Optional"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --------- 05 · Related Services + Products ------------------------------ */

function RelatedGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1240px] px-6 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <RelatedColumn
          title="Related Services"
          sub="End-to-end services that complete your solution."
          items={RELATED_SERVICES}
          cta="View All Services"
          to="/#services"
        />
        <RelatedColumn
          title="Related Products"
          sub="Medical equipment used in this solution."
          items={RELATED_PRODUCTS}
          cta="View All Products"
          to="/products"
        />
      </div>
    </section>
  );
}

function RelatedColumn({
  title,
  sub,
  items,
  cta,
  to,
}: {
  title: string;
  sub: string;
  items: { name: string; image: string; to: string; type?: string; spec?: string }[];
  cta: string;
  to: string;
}) {
  return (
    <div>
      <div className="flex items-end justify-between gap-6 mb-6">
        <div>
          <h3 className="font-display text-2xl font-extrabold tracking-tight text-[#0A1633]">
            {title}
          </h3>
          <p className="mt-1 text-sm text-[#0A1633]/60">{sub}</p>
        </div>
        <Link
          to={to}
          className={`inline-flex items-center gap-1.5 ${RED} font-bold text-xs uppercase tracking-[0.18em] shrink-0`}
        >
          {cta} <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {items.map((it) => (
          <Link
            key={it.name}
            to={it.to}
            className="group block rounded-2xl overflow-hidden bg-white border border-[#0A1633]/8 hover:border-[#0A1633]/25 transition-colors"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={it.image}
                alt={it.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              {it.type && (
                <div className="absolute top-3 left-3 bg-white/95 text-[#0A1633] px-2 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.18em]">
                  {it.type}
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="font-display font-extrabold text-[15px] leading-tight text-[#0A1633]">
                  {it.name}
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#0A1633]/40 group-hover:text-[hsl(0_84%_55%)] transition-colors shrink-0" />
              </div>
              {it.spec && (
                <div className="mt-1.5 text-[11.5px] text-[#0A1633]/55 leading-snug">
                  {it.spec}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* --------- 06 · Projects (dark carousel) --------------------------------- */

function Projects() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const scroll = (dir: "l" | "r") => {
    scrollerRef.current?.scrollBy({
      left: dir === "l" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="bg-white pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className={`${NAVY} rounded-3xl overflow-hidden text-white`}>
          <div className="p-8 md:p-12 lg:p-14">
            <div className="grid grid-cols-12 gap-8 items-end mb-10">
              <div className="col-span-12 lg:col-span-8">
                <SectionKicker
                  index="04"
                  label="Successful Projects"
                  tone="light"
                />
                <h2 className="mt-5 font-display font-extrabold tracking-[-0.02em] leading-[1.02] text-4xl md:text-5xl">
                  Real projects.{" "}
                  <span className="text-white/40">Real impact.</span>
                </h2>
              </div>
              <div className="col-span-12 lg:col-span-4 flex items-end justify-between gap-4 lg:pb-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1.5 text-white font-bold text-xs uppercase tracking-[0.18em]"
                >
                  View All Projects <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <div className="hidden lg:flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Scroll left"
                    onClick={() => scroll("l")}
                    className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#0A1633] transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Scroll right"
                    onClick={() => scroll("r")}
                    className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#0A1633] transition-colors"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div
              ref={scrollerRef}
              className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none" }}
            >
              {CASES.map((c) => (
                <Link
                  key={c.title}
                  to="/projects"
                  className="group shrink-0 w-[320px] md:w-[360px] rounded-2xl overflow-hidden snap-start relative bg-[#0d1c3d] border border-white/8"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={c.image}
                      alt={`${c.title} — ${c.country}`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c3d] via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 inline-flex items-center gap-2 bg-white/95 text-[#0A1633] px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em]">
                      <StatusDot />
                      {c.country}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/50">
                      {c.dept}
                    </div>
                    <div className="mt-2 font-display text-[1.15rem] leading-[1.15] font-extrabold tracking-tight text-white">
                      {c.title}
                    </div>

                    <dl className="mt-4 space-y-2.5 text-[12px] leading-snug">
                      <div className="grid grid-cols-[70px_1fr] gap-3">
                        <dt className="text-white/40 uppercase tracking-[0.14em] text-[10px] font-bold pt-0.5">Scope</dt>
                        <dd className="text-white/85">{c.scope}</dd>
                      </div>
                      <div className="grid grid-cols-[70px_1fr] gap-3">
                        <dt className="text-white/40 uppercase tracking-[0.14em] text-[10px] font-bold pt-0.5">Equipment</dt>
                        <dd className="text-white/70">{c.equipment}</dd>
                      </div>
                      <div className="grid grid-cols-[70px_1fr] gap-3">
                        <dt className="text-white/40 uppercase tracking-[0.14em] text-[10px] font-bold pt-0.5">Services</dt>
                        <dd className="text-white/70">{c.services}</dd>
                      </div>
                    </dl>

                    <div className="mt-4 pt-4 border-t border-white/10 flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#34C759] shadow-[0_0_10px_#34C759] shrink-0" />
                      <div className="text-[12.5px] text-white leading-snug flex-1">
                        {c.outcome}
                      </div>
                      <div className="h-8 w-8 rounded-full bg-white text-[#0A1633] flex items-center justify-center group-hover:bg-[hsl(0_84%_55%)] group-hover:text-white transition-colors shrink-0">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------- 07 · FAQ ------------------------------------------------------ */

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className={SURFACE}>
      <div className="mx-auto max-w-[1040px] px-6 py-24 lg:py-32">
        <SectionKicker index="05" label="Questions Buyers Ask" />
        <h2
          className={`mt-5 font-display font-extrabold tracking-[-0.02em] leading-[1.02] text-4xl md:text-5xl mb-14 ${INK}`}
        >
          Clarity{" "}
          <span className="text-[#0A1633]/40">
            before the first purchase order.
          </span>
        </h2>

        <div className="border-t border-[#0A1633]/10">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-[#0A1633]/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-[#0A1633]/40 tabular-nums pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-[#0A1633]">
                      {f.q}
                    </span>
                  </span>
                  <span
                    className={`mt-1 shrink-0 rounded-full border border-[#0A1633]/15 p-2 transition-colors ${
                      isOpen ? "bg-[#0A1633] text-white border-[#0A1633]" : "text-[#0A1633]"
                    }`}
                    aria-hidden
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-8"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pl-10 pr-4 md:pr-16 text-[#0A1633]/70 leading-relaxed max-w-3xl">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FaqSchema() {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

/* --------- 08 · Closing CTA ---------------------------------------------- */

function ClosingCta() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1240px] px-6 pb-24 lg:pb-32">
        <div
          className={`${NAVY} rounded-[2rem] p-10 md:p-16 lg:p-20 relative overflow-hidden`}
        >
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[hsl(0_84%_55%)]/10 blur-3xl" />
          <div className="relative grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-8">
              <ChapterLabel index="06" tone="light">
                Start Your Department
              </ChapterLabel>
              <h2 className="mt-6 font-display text-white font-extrabold tracking-[-0.02em] leading-[1.02] text-4xl md:text-5xl lg:text-6xl">
                Tell us the room.{" "}
                <span className="text-white/40">
                  We&apos;ll return with the department.
                </span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-wrap gap-4 lg:justify-end">
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 ${RED_BG} text-white font-bold px-6 py-4 rounded-full hover:brightness-110 transition-all`}
              >
                Initiate a project <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/hospital-readiness-assessment"
                className="inline-flex items-center gap-2 border border-white/25 text-white font-bold px-6 py-4 rounded-full hover:bg-white/5 transition-all"
              >
                Readiness assessment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
