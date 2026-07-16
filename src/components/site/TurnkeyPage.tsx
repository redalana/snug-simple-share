import { useEffect, useRef, useState } from "react";
import { COUNTRIES as WORLD_COUNTRIES, MAP_W, MAP_H } from "./africaMapData";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Package,
  Building2,
  Globe,
  Plus,
  Check,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  Heart,
  Scan,
  CircuitBoard,
  Stethoscope,
  Activity,
  Radiation,
  MoreHorizontal,
  MapPin,
  Wrench,
  Headphones,
  Boxes,
  GraduationCap,
  TrendingUp,
  FileCheck2,
  Minus,
  ShieldCheck,
  Handshake,
  Cog,
} from "lucide-react";

import heroCath from "@/assets/sol-carm.jpg";
import heroMri from "@/assets/sol-mri.jpg";
import heroCt from "@/assets/sol-ct.jpg";
import heroOr from "@/assets/sol-or.jpg";
import petImg from "@/assets/sol-petct.jpg";
import icuImg from "@/assets/why-cathlab.jpg";
import turnkeyHero from "@/assets/turnkey-hero.jpg";
import beyondCath from "@/assets/beyond-cathlab.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import abufarhaHq from "@/assets/abufarha-hq.jpg";

/* =========================================================
   DATA
   ========================================================= */

const DEPARTMENTS = [
  { id: "cath", name: "Cath Lab", icon: Heart },
  { id: "mri", name: "MRI Center", icon: Scan },
  { id: "ct", name: "CT Department", icon: CircuitBoard },
  { id: "or", name: "Hybrid OR", icon: Stethoscope },
  { id: "icu", name: "ICU", icon: Activity },
  { id: "pet", name: "PET/CT", icon: Radiation },
  { id: "more", name: "More", icon: MoreHorizontal },
] as const;

const PHASES = [
  { n: "01", title: "Planning", copy: "Needs assessment and feasibility studies.", img: project2 },
  { n: "02", title: "Engineering", copy: "Detailed design and technical planning.", img: heroMri },
  { n: "03", title: "Procurement", copy: "Global sourcing with quality assurance.", img: beyondCath },
  { n: "04", title: "Installation", copy: "Professional installation and integration.", img: heroCt },
  { n: "05", title: "Testing", copy: "Rigorous testing and safety verification.", img: heroCath },
  { n: "06", title: "Training", copy: "Clinical & technical training for your team.", img: project3 },
  { n: "07", title: "Go Live", copy: "Commissioning and continuous support.", img: heroOr },
];

const COMPONENTS = [
  {
    id: "imaging",
    label: "Imaging System",
    title: "Advanced Imaging System",
    copy: "High-resolution imaging with low dose technology for precise diagnosis and intervention.",
    features: ["Biplane / Single Plane", "High Resolution", "Low Dose", "Advanced Software"],
    thumb: heroCath,
  },
  { id: "table", label: "Patient Table", title: "Patient Table", copy: "Motorized carbon-fiber table for interventional workflows.", features: ["Floating Tabletop", "High Weight Capacity", "Radiolucent", "Precision Motion"], thumb: heroOr },
  { id: "injector", label: "Injector System", title: "Contrast Injector", copy: "Precision contrast injection with integrated protocols.", features: ["Dual Head", "Pressure Monitoring", "Preset Protocols", "EMR Integration"], thumb: heroCt },
  { id: "monitors", label: "Monitors", title: "Clinical Monitors", copy: "Multi-parameter monitoring for continuous patient safety.", features: ["Hemodynamic", "ECG & SpO2", "Central Station", "Alarm Intelligence"], thumb: icuImg },
  { id: "workstation", label: "Workstation", title: "Reporting Workstation", copy: "Post-processing workstation for review and reporting.", features: ["3D Reconstruction", "Advanced Analytics", "PACS Ready", "Multi-user"], thumb: heroMri },
  { id: "power", label: "Power & Protection", title: "Power & Radiation Protection", copy: "Redundant power and radiation shielding for staff safety.", features: ["UPS Protected", "Lead Shielding", "Isolated Ground", "Dosimetry"], thumb: petImg },
];

const HOTSPOTS = [
  { top: "24%", left: "62%" },
  { top: "18%", left: "34%" },
  { top: "48%", left: "78%" },
  { top: "58%", left: "48%" },
  { top: "72%", left: "26%" },
  { top: "80%", left: "68%" },
];

const PROJECTS = [
  { country: "Egypt", title: "National Heart Institute", scope: "Cath Lab Department", tag: "Cath Lab", year: "2024", image: project1 },
  { country: "Yemen", title: "Al-Thawra General Hospital", scope: "MRI Center", tag: "MRI", year: "2023", image: project2 },
  { country: "Jordan", title: "Al Bashir Hospital", scope: "CT Department", tag: "CT", year: "2023", image: project3 },
  { country: "Iraq", title: "Baghdad Teaching Hospital", scope: "Hybrid OR", tag: "Hybrid OR", year: "2024", image: heroOr },
];

type Region = {
  name: string;
  flag: string;
  note?: string;
  top: string;
  left: string;
  hub?: boolean;
  img: string;
  equipment: { label: string; qty: string }[];
};

const REGIONS: Region[] = [
  {
    name: "Jordan",
    flag: "🇯🇴",
    note: "Headquarters",
    top: "46%",
    left: "50%",
    hub: true,
    img: abufarhaHq,
    equipment: [{ label: "Cath Lab / Heart Center", qty: "3" }],
  },
  {
    name: "Syria",
    flag: "🇸🇾",
    top: "34%",
    left: "48%",
    img: project1,
    equipment: [
      { label: "Cath Lab", qty: "11" },
      { label: "MRI", qty: "2" },
      { label: "Eye LASIK Center", qty: "3" },
      { label: "IVF Center", qty: "2" },
    ],
  },
  {
    name: "Iraq",
    flag: "🇮🇶",
    note: "Including Erbil",
    top: "38%",
    left: "58%",
    img: project2,
    equipment: [
      { label: "Cath Lab", qty: "9" },
      { label: "MRI", qty: "3" },
      { label: "Ultrasound", qty: "55" },
      { label: "CT Scanner", qty: "1" },
    ],
  },
  {
    name: "Yemen",
    flag: "🇾🇪",
    top: "66%",
    left: "58%",
    img: project3,
    equipment: [
      { label: "Cath Lab", qty: "7" },
      { label: "MRI", qty: "2" },
      { label: "CT Scanner", qty: "1" },
      { label: "Cardiology Supplies", qty: "—" },
    ],
  },
  {
    name: "Egypt",
    flag: "🇪🇬",
    top: "56%",
    left: "42%",
    img: heroCath,
    equipment: [{ label: "Cardiology Supplies", qty: "—" }],
  },
  {
    name: "Libya",
    flag: "🇱🇾",
    top: "48%",
    left: "30%",
    img: heroMri,
    equipment: [
      { label: "Cath Lab", qty: "1" },
      { label: "IVF Center", qty: "1" },
      { label: "Ultrasound", qty: "3" },
      { label: "Digital X-ray", qty: "1" },
    ],
  },
  {
    name: "Somaliland",
    flag: "🇸🇴",
    top: "76%",
    left: "56%",
    img: icuImg,
    equipment: [
      { label: "Cath Lab", qty: "1" },
      { label: "Cardiology Supplies", qty: "—" },
    ],
  },
  {
    name: "Somalia",
    flag: "🇸🇴",
    top: "84%",
    left: "60%",
    img: icuImg,
    equipment: [
      { label: "Cath Lab", qty: "1" },
      { label: "Cardiology Supplies", qty: "—" },
    ],
  },
  {
    name: "Uzbekistan",
    flag: "🇺🇿",
    top: "18%",
    left: "72%",
    img: heroCt,
    equipment: [
      { label: "Cath Lab", qty: "1" },
      { label: "Cardiology Supplies", qty: "—" },
    ],
  },
  {
    name: "Bangladesh",
    flag: "🇧🇩",
    top: "48%",
    left: "90%",
    img: heroOr,
    equipment: [{ label: "Bone Density", qty: "2" }],
  },
];

const SUPPORT = [
  { icon: Wrench, title: "Preventive Maintenance", copy: "Regular maintenance to ensure optimal performance." },
  { icon: Headphones, title: "24/7 Technical Support", copy: "Experienced engineers available around the clock." },
  { icon: Boxes, title: "Spare Parts Supply", copy: "Genuine parts with fast delivery worldwide." },
  { icon: GraduationCap, title: "Clinical Training", copy: "Ongoing training for clinical and technical teams." },
  { icon: TrendingUp, title: "Upgrades & Modernization", copy: "Technology upgrades to keep your systems future-ready." },
  { icon: FileCheck2, title: "Service Contracts", copy: "Flexible service contracts tailored to your needs." },
];

const FAQS = [
  { q: "What is included in a turnkey solution?", a: "A turnkey solution covers everything from needs assessment, engineering and procurement, to installation, commissioning, staff training and ongoing after-sales support — delivered by a single partner." },
  { q: "How long does a typical project take?", a: "Timelines depend on department scope and site readiness. Most single-department projects are delivered within 3 to 9 months from contract signature to go-live." },
  { q: "Do you provide training for our staff?", a: "Yes. We provide structured clinical and biomedical training programs, on-site and remote, tailored to your team." },
  { q: "What kind of after-sales support do you offer?", a: "Preventive maintenance, 24/7 technical support, genuine spare parts and flexible service contracts across the equipment lifecycle." },
];

/* =========================================================
   01 — HERO
   ========================================================= */

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[100rem] gap-10 px-6 pb-16 pt-12 lg:grid-cols-[1fr_1.25fr] lg:gap-14 lg:px-10 lg:pb-24 lg:pt-16">
        {/* LEFT */}
        <div className="flex flex-col justify-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
            Turnkey Solutions
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-5 font-display text-[44px] font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-[54px] lg:text-[64px]"
          >
            Complete Clinical<br />
            Departments.<br />
            <span className="text-primary">Ready for Life.</span>
          </motion.h1>
          <p className="mt-6 max-w-lg text-[15px] leading-[1.7] text-muted-foreground">
            From planning and engineering to installation and training, we
            deliver fully integrated medical departments that perform today and
            for years to come.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-[0_20px_40px_-18px_rgba(225,29,46,0.7)] transition-transform hover:-translate-y-0.5"
            >
              Start Your Project <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#journey"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3.5 text-sm font-bold text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary">
                <Play className="h-3 w-3 fill-current" />
              </span>
              Watch the Process
            </a>
          </div>

          {/* STATS */}
          <div className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
            {[
              { icon: Building2, value: "30+", label: "Major Projects" },
              { icon: Globe, value: "10+", label: "Countries" },
              { icon: null, value: "1999", label: "Delivering Excellence", small: "Since" },
              { icon: Headphones, value: "24/7", label: "Support" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col">
                {s.icon ? (
                  <s.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                ) : (
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                    {s.small}
                  </span>
                )}
                <div className="mt-2 font-display text-2xl font-extrabold text-foreground">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] leading-tight text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-100 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)] ring-1 ring-black/5"
          >
            <img src={turnkeyHero} alt="Clinical department" className="h-full w-full object-cover" />
          </motion.div>

          {/* Floating info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -bottom-6 right-6 w-[280px] rounded-2xl bg-white p-5 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.25)] ring-1 ring-black/5"
          >
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <div>
                <div className="font-display text-[15px] font-bold text-foreground">
                  Turnkey. Total Care.
                </div>
                <p className="mt-1 text-[12px] leading-snug text-muted-foreground">
                  One partner for every step. One standard of excellence.
                </p>
                <a href="#journey" className="mt-2 inline-flex items-center gap-1 text-[12px] font-bold text-primary">
                  Explore Our Process <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   02 — DEPARTMENT NAVIGATION
   ========================================================= */

function DepartmentNav() {
  const [active, setActive] = useState<string>(DEPARTMENTS[0].id);
  return (
    <section className="bg-[#111315] py-10 text-white lg:py-12">
      <div className="mx-auto grid max-w-[100rem] items-center gap-8 px-6 lg:grid-cols-[1fr_2.8fr] lg:gap-10 lg:px-10">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-primary">
            Explore Departments
          </p>
          <h2 className="mt-3 font-display text-2xl font-extrabold leading-[1.15] sm:text-[26px]">
            Choose your<br />clinical environment
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 lg:grid-cols-7 lg:gap-3">
          {DEPARTMENTS.map((d) => {
            const isActive = d.id === active;
            return (
              <button
                key={d.id}
                onClick={() => setActive(d.id)}
                className={`group relative flex aspect-square flex-col items-center justify-center gap-2 rounded-xl border transition-all ${
                  isActive
                    ? "border-primary bg-primary/5 shadow-[inset_0_0_0_2px_rgb(225,29,46)]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.05]"
                }`}
              >
                <d.icon
                  className={`h-6 w-6 transition-colors ${isActive ? "text-primary" : "text-white/80"}`}
                  strokeWidth={1.4}
                />
                <span className="text-[12px] font-semibold text-white">{d.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   03 — TURNKEY JOURNEY
   ========================================================= */

function TurnkeyJourney() {
  return (
    <section id="journey" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_3.2fr] lg:gap-14">
          <div>
            <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.26em] text-primary">
              The Turnkey Journey <ArrowRight className="h-3 w-3" />
            </p>
            <h2 className="mt-4 font-display text-[34px] font-extrabold leading-[1.05] sm:text-[40px]">
              From Vision<br />To Performance
            </h2>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-muted-foreground">
              Our proven process ensures every department is delivered on time,
              on budget, and to the highest clinical standards.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-bold text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground"
            >
              View All Phases <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-3">
            {PHASES.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="relative"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-100 ring-1 ring-black/5">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
                  <span className="absolute -bottom-3 left-1/2 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full bg-primary text-[10px] font-bold text-white ring-4 ring-white">
                    {p.n}
                  </span>
                </div>
                <div className="mt-5 text-center">
                  <div className="font-display text-[15px] font-bold text-foreground">{p.title}</div>
                  <p className="mt-1.5 text-[12px] leading-snug text-muted-foreground">{p.copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   04 — DEPARTMENT COMPONENTS
   ========================================================= */

function DepartmentComponents() {
  const [active, setActive] = useState(COMPONENTS[0]);
  return (
    <section className="bg-[#f7f8fa] py-0">
      <div className="mx-auto grid max-w-[100rem] gap-0 lg:grid-cols-2">
        {/* LEFT — full-bleed clinical image with hotspots */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 lg:aspect-auto">
          <img src={heroCath} alt="Department anatomy" className="h-full w-full object-cover" />
          {HOTSPOTS.map((h, i) => (
            <button
              key={i}
              style={{ top: h.top, left: h.left }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              aria-label={`Hotspot ${i + 1}`}
            >
              <span className="relative grid h-8 w-8 place-items-center rounded-full bg-primary text-white shadow-lg">
                <Plus className="h-4 w-4" />
                <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40" />
              </span>
            </button>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center px-6 py-16 lg:px-14 lg:py-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-primary">
            Inside the Department
          </p>
          <h2 className="mt-4 font-display text-[34px] font-extrabold leading-[1.05] sm:text-[40px]">
            Engineered for<br />Precision. Built for<br />Performance.
          </h2>
          <p className="mt-4 max-w-md text-[14px] leading-relaxed text-muted-foreground">
            Every component is carefully selected and integrated to deliver
            exceptional clinical outcomes.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.1fr]">
            {/* Component list */}
            <ul className="divide-y divide-black/5 rounded-2xl bg-white ring-1 ring-black/5">
              {COMPONENTS.map((c) => {
                const on = c.id === active.id;
                return (
                  <li key={c.id}>
                    <button
                      onClick={() => setActive(c)}
                      className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium transition-colors ${
                        on ? "bg-primary/5 text-primary" : "text-foreground hover:bg-black/[0.02]"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {on ? <Check className="h-4 w-4 text-primary" /> : <Plus className="h-4 w-4 text-muted-foreground" />}
                        {c.label}
                      </span>
                      {on && <ArrowRight className="h-4 w-4 text-primary" />}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Info card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-white p-5 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.15)] ring-1 ring-black/5"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
                  <img src={active.thumb} alt={active.title} className="h-full w-full object-cover" />
                </div>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                  {active.label}
                </p>
                <div className="mt-1 font-display text-[16px] font-bold text-foreground">{active.title}</div>
                <p className="mt-2 text-[12.5px] leading-snug text-muted-foreground">{active.copy}</p>
                <ul className="mt-3 space-y-1.5">
                  {active.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[12.5px] text-foreground">
                      <Check className="h-3.5 w-3.5 text-primary" /> {f}
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

/* =========================================================
   05 — FEATURED PROJECTS
   ========================================================= */

function FeaturedProjects() {
  const [start, setStart] = useState(0);
  const perView = 4;
  const max = Math.max(0, PROJECTS.length - perView);
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_3fr] lg:items-end lg:gap-12">
          <div>
            <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.26em] text-primary">
              Proven Excellence <ArrowRight className="h-3 w-3" />
            </p>
            <h2 className="mt-4 font-display text-[34px] font-extrabold leading-[1.05] sm:text-[40px]">
              Projects That<br />Make a Difference
            </h2>
            <a
              href="/projects"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-bold text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground"
            >
              View All Projects <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-[0_28px_50px_-24px_rgba(0,0,0,0.2)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-bold text-foreground shadow-sm">
                    {p.country}
                  </span>
                </div>
                <div className="p-5">
                  <div className="font-display text-[15px] font-bold leading-tight text-foreground">
                    {p.title}
                  </div>
                  <div className="mt-1 text-[13px] text-muted-foreground">{p.scope}</div>
                  <div className="mt-4 flex items-center gap-3 border-t border-black/5 pt-3 text-[11px] text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="grid h-4 w-4 place-items-center rounded-full bg-primary/10 text-primary">
                        <Heart className="h-2.5 w-2.5" />
                      </span>
                      {p.tag}
                    </span>
                    <span className="h-3 w-px bg-black/10" />
                    <span>{p.year}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-end gap-2">
          <button
            onClick={() => setStart(Math.max(0, start - 1))}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-foreground hover:border-foreground disabled:opacity-40"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setStart(Math.min(max, start + 1))}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-foreground hover:border-foreground disabled:opacity-40"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   06 — GLOBAL PRESENCE  (rebuilt)
   ========================================================= */

// Coordinates in the shared world-map viewBox (1000 x 732)
// Values verified against real geography (equirectangular projection used by africaMapData).
const GEO: Record<string, { x: number; y: number }> = {
  Jordan: { x: 560, y: 118 },
  Syria: { x: 578, y: 88 },
  Iraq: { x: 620, y: 105 },
  Egypt: { x: 505, y: 155 },
  Libya: { x: 385, y: 155 },
  Yemen: { x: 665, y: 250 },
  Somaliland: { x: 665, y: 295 },
  Somalia: { x: 700, y: 335 },
  Uzbekistan: { x: 770, y: 40 },
  Bangladesh: { x: 975, y: 178 },
};

const HIGHLIGHT = new Set(Object.keys(GEO));

function useCountUp(target: number, inView: boolean, dur = 1400) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, inView, dur]);
  return v;
}

function StatCard({
  icon: Icon,
  value,
  label,
  delay,
  inView,
}: {
  icon: typeof Globe;
  value: number;
  label: string;
  delay: number;
  inView: boolean;
}) {
  const n = useCountUp(value, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="group rounded-2xl bg-white p-5 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.25)] ring-1 ring-black/[0.05] transition-shadow hover:shadow-[0_25px_50px_-20px_rgba(225,29,46,0.35)]"
    >
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </div>
      <div className="mt-4 font-display text-[32px] font-extrabold leading-none text-foreground">
        {n}
        <span className="ml-0.5 text-primary">+</span>
      </div>
      <div className="mt-2 text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
    </motion.div>
  );
}

function GlobalPresence() {
  const spokeNames = ["Syria", "Iraq", "Egypt", "Libya", "Yemen", "Somaliland", "Somalia", "Uzbekistan", "Bangladesh"];
  const jordan = REGIONS.find((r) => r.name === "Jordan")!;
  const spokes = spokeNames.map((n) => REGIONS.find((r) => r.name === n)!).filter(Boolean);
  const [active, setActive] = useState<Region>(REGIONS.find((r) => r.name === "Iraq")!);
  const [hovered, setHovered] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const STATS = [
    { icon: Globe, value: 10, label: "Countries" },
    { icon: Building2, value: 100, label: "Projects Delivered" },
    { icon: Stethoscope, value: 250, label: "Medical Systems" },
    { icon: Heart, value: 50, label: "Healthcare Facilities" },
  ];

  const FEATURES = [
    { icon: Globe, title: "Three Regions", copy: "Africa, Middle East & Central Asia" },
    { icon: Handshake, title: "Trusted Partner", copy: "Healthcare providers rely on us" },
    { icon: ShieldCheck, title: "Proven Track Record", copy: "Projects delivered since 1999" },
    { icon: Cog, title: "End-to-End Solutions", copy: "From concept to commissioning" },
    { icon: Headphones, title: "Lifetime Support", copy: "After-sales & technical support 24/7" },
  ];

  const jc = GEO.Jordan;

  // Build curved SVG path from Jordan to a spoke
  const buildPath = (name: string) => {
    const p = GEO[name];
    if (!p) return "";
    const mx = (jc.x + p.x) / 2;
    const my = (jc.y + p.y) / 2 - Math.abs(p.x - jc.x) * 0.25 - 15;
    return `M ${jc.x} ${jc.y} Q ${mx} ${my} ${p.x} ${p.y}`;
  };

  return (
    <section
      id="footprint"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      {/* soft radial gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 85% 10%, rgba(225,29,46,0.06), transparent 60%), radial-gradient(900px 500px at 10% 80%, rgba(15,23,42,0.05), transparent 60%)",
        }}
      />
      {/* medical blueprint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* dotted accent (bottom-left) */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-16 left-8 h-40 w-40 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(15,23,42,0.18) 1.2px, transparent 1.2px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[45fr_55fr] lg:items-center lg:gap-16">
          {/* LEFT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[12px] font-bold uppercase tracking-[0.28em] text-primary"
            >
              Global Footprint
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-4 font-display text-[40px] font-extrabold leading-[1.02] tracking-[-0.02em] text-foreground sm:text-[52px]"
            >
              Delivering Excellence
              <br />
              Across Regions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground"
            >
              We deliver <span className="font-semibold text-primary">turnkey</span> medical
              departments, advanced imaging systems and biomedical engineering solutions across
              Africa, the Middle East and Central Asia.
            </motion.p>

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
              {STATS.map((s, i) => (
                <StatCard
                  key={s.label}
                  icon={s.icon}
                  value={s.value}
                  label={s.label}
                  delay={0.15 + i * 0.08}
                  inView={inView}
                />
              ))}
            </div>

            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-[15px] font-bold text-primary-foreground shadow-[0_20px_45px_-16px_color-mix(in_oklab,var(--primary)_70%,transparent)] transition-transform hover:-translate-y-0.5"
            >
              Explore Global Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>

          {/* RIGHT — MAP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full"
            style={{ aspectRatio: `${MAP_W} / ${MAP_H}` }}
          >
            {/* Base world-geography backdrop */}
            <svg
              viewBox={`0 0 ${MAP_W} ${MAP_H}`}
              className="absolute inset-0 h-full w-full"
              aria-label="Map showing AbuFarha's operations across the Middle East, Africa and Central Asia"
            >
              <defs>
                <linearGradient id="landGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f1f4f8" />
                  <stop offset="100%" stopColor="#e6ebf1" />
                </linearGradient>
                <linearGradient id="activeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="color-mix(in oklab, var(--primary) 42%, white)" />
                  <stop offset="100%" stopColor="color-mix(in oklab, var(--primary) 28%, white)" />
                </linearGradient>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.15" />
                </linearGradient>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                </radialGradient>
                <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Countries — neutral */}
              {WORLD_COUNTRIES.filter((c) => !HIGHLIGHT.has(c.name)).map((c) => (
                <path
                  key={c.name}
                  d={c.d}
                  fill="url(#landGrad)"
                  stroke="rgba(15,23,42,0.08)"
                  strokeWidth={0.4}
                />
              ))}
              {/* Highlighted countries */}
              {WORLD_COUNTRIES.filter((c) => HIGHLIGHT.has(c.name)).map((c) => {
                const isHov = hovered === c.name || active.name === c.name;
                return (
                  <path
                    key={c.name}
                    d={c.d}
                    fill="url(#activeGrad)"
                    stroke="var(--primary)"
                    strokeOpacity={isHov ? 0.9 : 0.45}
                    strokeWidth={isHov ? 0.9 : 0.5}
                    style={{
                      filter: isHov ? "drop-shadow(0 0 4px rgba(225,29,46,0.55))" : undefined,
                      transition: "all 0.3s ease",
                    }}
                  />
                );
              })}

              {/* Hub ambient glow */}
              <circle cx={jc.x} cy={jc.y} r={70} fill="url(#hubGlow)" />

              {/* Connection curves */}
              {spokes.map((r, i) => {
                const d = buildPath(r.name);
                const isHov = hovered === r.name || active.name === r.name;
                const pathId = `gf-route-${i}`;
                return (
                  <g key={r.name}>
                    <motion.path
                      id={pathId}
                      d={d}
                      fill="none"
                      stroke={isHov ? "var(--primary)" : "url(#lineGrad)"}
                      strokeWidth={isHov ? 1.4 : 0.7}
                      strokeLinecap="round"
                      filter="url(#lineGlow)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ duration: 1.4, delay: 0.2 + i * 0.08, ease: "easeInOut" }}
                    />
                    {/* Traveling particles from hub → node */}
                    <circle r={1.6} fill="var(--primary)">
                      <animateMotion
                        dur={`${3.2 + (i % 4) * 0.4}s`}
                        repeatCount="indefinite"
                        begin={`${i * 0.4}s`}
                        rotate="auto"
                      >
                        <mpath href={`#${pathId}`} />
                      </animateMotion>
                    </circle>
                    <circle r={1.1} fill="white" opacity="0.9">
                      <animateMotion
                        dur={`${3.2 + (i % 4) * 0.4}s`}
                        repeatCount="indefinite"
                        begin={`${i * 0.4 + 0.6}s`}
                      >
                        <mpath href={`#${pathId}`} />
                      </animateMotion>
                    </circle>
                  </g>
                );
              })}

              {/* Country nodes (dots) rendered inside SVG for perfect alignment */}
              {spokes.map((r) => {
                const p = GEO[r.name];
                const isHov = hovered === r.name || active.name === r.name;
                return (
                  <g key={`node-${r.name}`}>
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={isHov ? 8 : 6}
                      fill="var(--primary)"
                      opacity={0.25}
                    >
                      <animate attributeName="r" values={`${isHov ? 8 : 6};${isHov ? 14 : 11};${isHov ? 8 : 6}`} dur="2.4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.4;0;0.4" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={p.x} cy={p.y} r={isHov ? 4.5 : 3.5} fill="var(--primary)" stroke="white" strokeWidth={1.2} />
                  </g>
                );
              })}
            </svg>

            {/* Country labels + hover targets (HTML overlay, aligned to SVG coords via %) */}
            {spokes.map((r) => {
              const p = GEO[r.name];
              return (
                <button
                  key={`lbl-${r.name}`}
                  type="button"
                  onMouseEnter={() => {
                    setHovered(r.name);
                    setActive(r);
                  }}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => {
                    setHovered(r.name);
                    setActive(r);
                  }}
                  onBlur={() => setHovered(null)}
                  aria-label={r.name}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ left: `${(p.x / MAP_W) * 100}%`, top: `${(p.y / MAP_H) * 100}%` }}
                >
                  <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/90 px-2 py-0.5 text-[11px] font-bold text-foreground shadow-sm ring-1 ring-black/5 backdrop-blur-sm">
                    {r.name}
                  </span>
                  {/* invisible hit-area */}
                  <span className="block h-6 w-6" />
                </button>
              );
            })}

            {/* Jordan HUB badge (large, elegant) */}
            <div
              className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${(jc.x / MAP_W) * 100}%`, top: `${(jc.y / MAP_H) * 100}%` }}
            >
              <div className="relative">
                <span className="absolute inset-0 -m-4 animate-ping rounded-full bg-primary/20" />
                <span className="absolute inset-0 -m-2 rounded-full bg-white/70 blur-xl" />
                <div className="relative flex h-[92px] w-[92px] flex-col items-center justify-center rounded-full bg-white shadow-[0_20px_45px_-12px_rgba(15,23,42,0.35)] ring-1 ring-primary/25">
                  {/* heart-pulse line */}
                  <svg viewBox="0 0 60 20" className="h-3 w-14 text-primary">
                    <path
                      d="M0 10 H12 L15 3 L20 17 L25 6 L30 14 L34 10 H60"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="mt-0.5 font-display text-[13px] font-extrabold leading-none tracking-tight text-foreground">
                    Abu<span className="text-primary">Farha</span>
                  </div>
                  <div className="mt-0.5 text-[6.5px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Medical Equipment
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-white/90 px-2 py-0.5 text-[11px] font-bold text-foreground shadow-sm ring-1 ring-black/5 backdrop-blur-sm">
                Jordan
              </div>
            </div>

            {/* Floating country card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 14, scale: 0.96, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, scale: 0.98, filter: "blur(4px)" }}
                transition={{ duration: 0.32, ease: "easeOut" }}
                className="absolute bottom-4 right-4 z-30 w-[270px] overflow-hidden rounded-2xl bg-white p-4 shadow-[0_30px_70px_-25px_rgba(15,23,42,0.4)] ring-1 ring-black/[0.06]"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-neutral-100 text-xl leading-none">
                    {active.flag}
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-[16px] font-extrabold text-foreground">
                      {active.name}
                    </div>
                    {active.note && (
                      <div className="text-[10.5px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {active.note}
                      </div>
                    )}
                  </div>
                </div>

                <ul className="mt-3 space-y-1.5 border-t border-black/5 pt-3">
                  {active.equipment.map((e) => (
                    <li key={e.label} className="flex items-center justify-between text-[12.5px]">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Stethoscope className="h-3.5 w-3.5 text-primary/70" strokeWidth={1.8} />
                        {e.label}
                      </span>
                      <span className="font-bold text-foreground">{e.qty}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 overflow-hidden rounded-lg">
                  <img
                    src={active.img}
                    alt={active.name}
                    className="h-24 w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <a
                  href="#projects"
                  className="mt-3 inline-flex items-center gap-1 text-[12.5px] font-bold text-primary hover:text-primary/80"
                >
                  View Projects <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* BOTTOM FEATURE STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-3xl bg-white/85 p-6 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.22)] ring-1 ring-black/[0.05] backdrop-blur-xl lg:mt-16 lg:p-8"
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center rounded-2xl px-3 py-2 text-center transition-colors hover:bg-white"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <f.icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <div className="mt-3 font-display text-[14px] font-extrabold text-foreground">
                  {f.title}
                </div>
                <p className="mt-1.5 text-[12px] leading-snug text-muted-foreground">{f.copy}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}



/* =========================================================
   07 — SUPPORT ECOSYSTEM
   ========================================================= */

function SupportEcosystem() {
  return (
    <section className="bg-[#111315] py-20 text-white lg:py-24">
      <div className="mx-auto grid max-w-[100rem] gap-12 px-6 lg:grid-cols-[1fr_3fr] lg:gap-14 lg:px-10">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-primary">
            Beyond Installation
          </p>
          <h2 className="mt-4 font-display text-[30px] font-extrabold leading-[1.1] sm:text-[36px]">
            Your Long-Term<br />Support Ecosystem
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          {SUPPORT.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <s.icon className="h-8 w-8 text-white" strokeWidth={1.3} />
              <div className="mt-5 font-display text-[15px] font-bold text-white">
                {s.title}
              </div>
              <p className="mt-2 text-[12.5px] leading-relaxed text-white/60">
                {s.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   08 — FAQ
   ========================================================= */

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto grid max-w-[100rem] gap-12 px-6 lg:grid-cols-[1fr_1.4fr_1fr] lg:items-start lg:gap-14 lg:px-10">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-primary">
            Frequently Asked Questions
          </p>
          <h2 className="mt-4 font-display text-[34px] font-extrabold leading-[1.05] sm:text-[40px]">
            Everything You Need<br />To Know
          </h2>
        </div>

        <div className="divide-y divide-black/10">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-[15px] font-semibold text-foreground">
                    {f.q}
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-foreground">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-12 text-[13.5px] leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-black/5">
          <img src={abufarhaHq} alt="AbuFarha support engineer" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   09 — FINAL CTA
   ========================================================= */

function FinalCTA() {
  return (
    <section className="bg-white pb-20 pt-4 lg:pb-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-2xl bg-[#111315] p-10 text-white lg:p-14">
          <div className="pointer-events-none absolute inset-0 opacity-25">
            <img src={beyondCath} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111315] via-[#111315]/85 to-[#111315]/40" />
          </div>
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-[32px] font-extrabold leading-[1.05] sm:text-[42px]">
                Ready to Build Your<br />
                <span className="text-primary">Next Department?</span>
              </h2>
              <p className="mt-4 max-w-md text-[14px] text-white/70">
                Let's discuss your project and create a solution that exceeds
                your expectations.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
                >
                  Start Your Project <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-transparent px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                "Expert Engineering Team",
                "Global Supply Chain",
                "End-to-End Project Management",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-[14px] font-semibold">
                  <span className="grid h-7 w-7 place-items-center rounded-full border border-white/25 text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PAGE
   ========================================================= */

export function TurnkeyPage() {
  return (
    <div className="bg-background">
      <Hero />
      <DepartmentNav />
      <TurnkeyJourney />
      <DepartmentComponents />
      <FeaturedProjects />
      <GlobalPresence />
      <SupportEcosystem />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
