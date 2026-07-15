import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Package,
  Headphones,
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
  MapPin,
} from "lucide-react";

import heroCath from "@/assets/sol-carm.jpg";
import heroMri from "@/assets/sol-mri.jpg";
import heroCt from "@/assets/sol-ct.jpg";
import heroOr from "@/assets/sol-or.jpg";
import icuImg from "@/assets/why-cathlab.jpg";
import petImg from "@/assets/sol-petct.jpg";
import turnkeyHero from "@/assets/turnkey-hero.jpg";
import beyondCath from "@/assets/beyond-cathlab.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

/* =========================================================
   DATA
   ========================================================= */

const DEPARTMENTS = [
  { id: "cath", name: "Cath Lab", sub: "Interventional Cardiology", icon: Heart, image: heroCath },
  { id: "mri", name: "MRI Center", sub: "Advanced Imaging", icon: Scan, image: heroMri },
  { id: "ct", name: "CT Department", sub: "Computed Tomography", icon: CircuitBoard, image: heroCt },
  { id: "or", name: "Hybrid OR", sub: "Surgical Excellence", icon: Stethoscope, image: heroOr },
  { id: "icu", name: "ICU", sub: "Intensive Care", icon: Activity, image: icuImg },
  { id: "pet", name: "PET/CT", sub: "Molecular Imaging", icon: Radiation, image: petImg },
] as const;

const PHASES = [
  { n: "01", title: "Planning", copy: "We analyze your needs and design the right solution.", img: project1 },
  { n: "02", title: "Design & Engineering", copy: "Detailed planning and technical specifications.", img: project2 },
  { n: "03", title: "Procurement", copy: "We source world-class equipment from trusted brands.", img: project3 },
  { n: "04", title: "Installation", copy: "Our engineers ensure precision installation and integration.", img: heroCath },
  { n: "05", title: "Training", copy: "We train your team for confident and safe operation.", img: heroOr },
  { n: "06", title: "After Sales Support", copy: "Lifetime support with maintenance and rapid service.", img: beyondCath },
];

const HOTSPOTS = [
  { id: "imaging", label: "Imaging System", top: "22%", left: "58%", desc: "High-resolution imaging for accurate diagnosis and real-time guidance.", features: ["Advanced Image Quality", "Low Dose Technology", "Real-time Processing", "Seamless Integration"] },
  { id: "monitor", label: "Monitoring System", top: "36%", left: "78%", desc: "Continuous hemodynamic and vital-sign monitoring.", features: ["Multi-parameter", "Central Station Ready", "Alarm Intelligence", "EMR Integration"] },
  { id: "table", label: "Patient Table", top: "68%", left: "42%", desc: "Motorized carbon-fiber table for interventional workflows.", features: ["Floating Tabletop", "High Weight Capacity", "Radiolucent", "Precision Motion"] },
  { id: "ceiling", label: "Ceiling System", top: "10%", left: "34%", desc: "Ceiling-mounted supply units for equipment and services.", features: ["Modular Arms", "Integrated Services", "Sterile Zone", "Cable Management"] },
  { id: "workstation", label: "Workstation", top: "44%", left: "88%", desc: "Post-processing workstation for review and reporting.", features: ["3D Reconstruction", "Advanced Analytics", "PACS Ready", "Multi-user"] },
  { id: "power", label: "Power & Networking", top: "82%", left: "20%", desc: "Redundant power and clinical network backbone.", features: ["UPS Protected", "Fiber Backbone", "Isolated Ground", "Fail-safe"] },
];

const COMPONENTS = [
  { icon: Scan, title: "Imaging Systems", copy: "Angiography, MRI, CT and ultrasound platforms." },
  { icon: Activity, title: "Monitoring", copy: "Hemodynamic and vital-sign monitoring." },
  { icon: Stethoscope, title: "Surgical Equipment", copy: "Tables, lights, pendants and workstations." },
  { icon: CircuitBoard, title: "IT & PACS", copy: "Imaging network, storage and clinical software." },
  { icon: Package, title: "Sterile & Furniture", copy: "Sterile workflow and clinical furniture." },
  { icon: Radiation, title: "Radiation Protection", copy: "Shielding, aprons and dosimetry." },
];

const PROJECTS = [
  { id: 1, region: "Middle East", title: "Cardiac Catheterization Suite", scope: "Cath Lab Turnkey Solution", image: project1 },
  { id: 2, region: "North Africa", title: "Advanced Imaging Center", scope: "MRI & CT Suite", image: project2 },
  { id: 3, region: "Central Asia", title: "Hybrid Operating Theatre", scope: "OR Integration", image: project3 },
];

const STATS = [
  { icon: Building2, value: "30+", label: "Major Projects" },
  { icon: Globe, value: "10+", label: "Countries" },
  { icon: Package, value: "250+", label: "Departments Delivered" },
  { icon: Headphones, value: "24/7", label: "Support" },
];

/* =========================================================
   SECTIONS
   ========================================================= */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fdf5f5] to-white">
      <div className="mx-auto grid max-w-[100rem] gap-10 px-6 pb-20 pt-14 lg:grid-cols-[1.05fr_1.25fr] lg:gap-14 lg:px-10 lg:pt-20">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center"
        >
          <p className="text-xs font-bold tracking-[0.22em] text-primary">TURNKEY SOLUTIONS</p>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.75rem]">
            Complete Departments.
            <br />
            <span className="text-primary">Ready to Perform.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            From planning to performance, we deliver fully integrated medical
            departments that are engineered for better care and built to last.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#journey"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-bold text-background transition-transform hover:-translate-y-0.5"
            >
              How It Works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3.5 text-sm font-bold text-foreground shadow-sm transition-all hover:-translate-y-0.5"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-white">
                <Play className="h-3.5 w-3.5 fill-current" />
              </span>
              Watch Full Overview
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-start gap-3">
                <s.icon className="mt-1 h-6 w-6 text-primary" strokeWidth={1.5} />
                <div>
                  <div className="font-display text-2xl font-extrabold text-foreground">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right image + floating card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-neutral-100 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <img src={turnkeyHero} alt="Modern medical suite" className="h-full w-full object-cover" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -bottom-6 right-4 w-[19rem] rounded-2xl bg-white p-5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] ring-1 ring-black/5 lg:right-8"
          >
            <div className="flex items-start gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Package className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-base font-bold text-foreground">Turnkey. Total Care.</div>
                <p className="mt-1 text-[13px] leading-snug text-muted-foreground">
                  One partner for every step. One standard of excellence.
                </p>
                <a href="#journey" className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary">
                  Explore Our Process <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function DepartmentNavigator() {
  const [active, setActive] = useState<string>(DEPARTMENTS[0].id);
  return (
    <section id="departments" className="bg-[#0b1220] py-16 lg:py-20 text-white">
      <div className="mx-auto grid max-w-[100rem] gap-10 px-6 lg:grid-cols-[1fr_2.4fr] lg:gap-14 lg:px-10">
        <div>
          <p className="text-xs font-bold tracking-[0.22em] text-primary">DEPARTMENT NAVIGATOR</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] sm:text-4xl">
            Solutions for Every<br />Clinical Environment
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
            Select a department to discover how we build and deliver complete
            solutions tailored to your clinical goals.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {DEPARTMENTS.map((d) => {
            const isActive = d.id === active;
            return (
              <button
                key={d.id}
                onClick={() => setActive(d.id)}
                className={`group relative flex aspect-[3/4] flex-col items-start justify-between rounded-xl border p-4 text-left transition-all ${
                  isActive
                    ? "border-primary bg-primary text-white shadow-[0_20px_50px_-20px_rgba(225,29,46,0.7)]"
                    : "border-white/15 bg-white/[0.02] text-white hover:border-white/30 hover:bg-white/[0.05]"
                }`}
              >
                <d.icon className="h-10 w-10" strokeWidth={1.3} />
                <div className="pr-6">
                  <div className="font-display text-[15px] font-bold leading-tight">{d.name}</div>
                  <div className={`mt-1.5 text-[11px] leading-tight ${isActive ? "text-white/85" : "text-white/55"}`}>
                    {d.sub}
                  </div>
                </div>
                <ArrowRight className="absolute bottom-3 right-3 h-4 w-4 opacity-80" />
                {isActive && <span className="absolute -bottom-[1px] left-4 right-4 h-[3px] rounded-full bg-white/90" />}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TurnkeyJourney() {
  return (
    <section id="journey" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_3fr] lg:gap-12">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-primary">THE TURNKEY JOURNEY</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] sm:text-4xl">
              A Proven Process.<br />
              <span className="text-primary">Six Key Phases.</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Our structured approach ensures your department is delivered on time,
              on budget, and beyond expectations.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-bold text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground"
            >
              View All Phases <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative">
            {/* connector line */}
            <div className="pointer-events-none absolute left-0 right-0 top-[152px] hidden h-px border-t border-dashed border-primary/40 md:block" />
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
              {PHASES.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100 ring-1 ring-black/5">
                    <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="relative z-10 mx-auto -mt-4 grid h-8 w-8 place-items-center rounded-full bg-primary text-[11px] font-bold text-white ring-4 ring-white">
                    {p.n}
                  </div>
                  <div className="mt-3 text-center">
                    <div className="font-display text-sm font-bold text-foreground">{p.title}</div>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">{p.copy}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DepartmentAnatomy() {
  const [active, setActive] = useState(HOTSPOTS[0]);
  return (
    <section className="bg-[#f7f8fa] py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_2.2fr_1.1fr] lg:gap-10">
          {/* Left copy + list */}
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-primary">INSIDE THE DEPARTMENT</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] sm:text-4xl">
              Every Detail.<br />
              <span className="text-primary">Designed for Performance.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Our structured approach to a Cath Lab solution.
              Click on the hotspots to learn more.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {HOTSPOTS.map((h) => (
                <button
                  key={h.id}
                  onClick={() => setActive(h)}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    active.id === h.id ? "bg-primary/10 text-primary" : "text-foreground hover:bg-black/5"
                  }`}
                >
                  <Plus className="h-4 w-4 shrink-0" />
                  <span className="font-medium">{h.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]">
            <img src={heroCath} alt="Cath Lab anatomy" className="h-full w-full object-cover" />
            {HOTSPOTS.map((h) => (
              <button
                key={h.id}
                onClick={() => setActive(h)}
                style={{ top: h.top, left: h.left }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                aria-label={h.label}
              >
                <span className={`relative grid h-8 w-8 place-items-center rounded-full text-white shadow-lg transition-transform ${
                  active.id === h.id ? "scale-110 bg-primary" : "bg-primary/90 hover:scale-110"
                }`}>
                  <Plus className="h-4 w-4" />
                  <span className={`absolute inset-0 -z-10 rounded-full bg-primary/40 ${active.id === h.id ? "animate-ping" : ""}`} />
                </span>
              </button>
            ))}
          </div>

          {/* Spec panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-white p-6 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.2)] ring-1 ring-black/5"
            >
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Scan className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-foreground">{active.label}</div>
                  <p className="mt-1 text-sm leading-snug text-muted-foreground">{active.desc}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5">
                {active.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-primary">
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function IncludedComponents() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.22em] text-primary">WHAT'S INCLUDED</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] sm:text-4xl">
            A Complete Turnkey Package
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Everything needed for a department to open its doors and treat its first patient — supplied, installed and supported by one partner.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COMPONENTS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group rounded-2xl border border-border bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.15)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <c.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div className="mt-6 font-display text-lg font-bold text-foreground">{c.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const REGION_PINS = [
  { name: "MENA", top: "34%", left: "56%" },
  { name: "North Africa", top: "42%", left: "48%" },
  { name: "East Africa", top: "62%", left: "54%" },
  { name: "West Africa", top: "55%", left: "42%" },
  { name: "Gulf", top: "40%", left: "62%" },
  { name: "Central Asia", top: "28%", left: "70%" },
];

function ProjectsSection() {
  const [i, setI] = useState(0);
  const p = PROJECTS[i];
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto grid max-w-[100rem] gap-10 px-6 lg:grid-cols-[0.9fr_1.4fr_1fr] lg:items-center lg:gap-10 lg:px-10">
        <div>
          <p className="text-xs font-bold tracking-[0.22em] text-primary">REAL PROJECTS. REAL IMPACT.</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] sm:text-4xl">
            Projects Across<br />Our Regions
          </h2>
          <a
            href="/projects"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-bold text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground"
          >
            Explore All Projects <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Region map */}
        <div className="relative aspect-[4/3] w-full rounded-2xl bg-[#eef2f7] ring-1 ring-black/5">
          <svg viewBox="0 0 800 600" className="absolute inset-0 h-full w-full text-neutral-300" fill="currentColor" aria-hidden>
            {/* stylized continent silhouettes */}
            <path d="M180 180 Q260 150 340 170 L420 160 Q500 170 560 210 L600 260 Q580 320 540 360 L500 420 Q440 470 380 480 L320 490 Q260 470 220 420 L180 360 Q150 300 160 240 Z" opacity="0.55" />
            <path d="M580 200 Q640 180 680 200 L700 240 Q690 280 660 300 L620 310 Q590 290 580 250 Z" opacity="0.55" />
          </svg>
          {REGION_PINS.map((r) => (
            <div key={r.name} style={{ top: r.top, left: r.left }} className="absolute -translate-x-1/2 -translate-y-full">
              <div className="relative flex flex-col items-center">
                <span className="rounded-md bg-white px-2 py-0.5 text-[10px] font-bold text-foreground shadow ring-1 ring-black/5">
                  {r.name}
                </span>
                <span className="mt-0.5 grid h-6 w-6 place-items-center">
                  <MapPin className="h-6 w-6 fill-primary text-primary" strokeWidth={1} />
                </span>
              </div>
            </div>
          ))}
        </div>


        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={p.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-3xl bg-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)] ring-1 ring-black/5"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                <span className="absolute left-5 top-5 rounded-md bg-black/80 px-3 py-1 text-xs font-bold text-white">
                  {p.region}
                </span>
              </div>
              <div className="flex items-end justify-between p-6">
                <div>
                  <div className="font-display text-xl font-bold text-foreground">{p.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{p.scope}</div>
                </div>
                <a href="/projects" className="inline-flex items-center gap-1 text-sm font-bold text-primary">
                  View Case Study <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-4 flex items-center justify-end gap-2">
            <button
              onClick={() => setI((i - 1 + PROJECTS.length) % PROJECTS.length)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-foreground hover:border-foreground"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setI((i + 1) % PROJECTS.length)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-foreground hover:border-foreground"
              aria-label="Next project"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-[#0b1220] p-10 text-white lg:p-14">
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <img src={turnkeyHero} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220]/85 to-transparent" />
          </div>
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-extrabold leading-[1.1] sm:text-4xl">
                Ready to Build Your<br />
                <span className="text-primary">Next Department?</span>
              </h2>
              <p className="mt-4 max-w-md text-sm text-white/75">
                Let's discuss your project and create a solution that exceeds your expectations.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">
                  Start Your Project <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/10">
                  Talk to an Expert <PhoneCall className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6">
              {[
                { icon: Building2, title: "Expert Engineering Team" },
                { icon: Globe, title: "Global Supply Chain Network" },
                { icon: Package, title: "End-to-End Project Management" },
              ].map((f) => (
                <div key={f.title} className="flex items-center gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-white">
                    <f.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="text-sm font-bold">{f.title}</div>
                </div>
              ))}
            </div>
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
      <DepartmentNavigator />
      <TurnkeyJourney />
      <DepartmentAnatomy />
      <ProjectsSection />
      <CTA />
    </div>
  );
}
