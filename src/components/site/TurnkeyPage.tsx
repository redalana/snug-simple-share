import { useState } from "react";
import { motion } from "framer-motion";
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
  { id: "cath", name: "Cath Lab", sub: "Interventional Cardiology", img: cathImg },
  { id: "mri", name: "MRI Center", sub: "Advanced Imaging", img: mriImg },
  { id: "ct", name: "CT Department", sub: "Computed Tomography", img: ctImg },
  { id: "or", name: "Operating Room", sub: "Surgical Excellence", img: orImg },
  { id: "icu", name: "ICU", sub: "Intensive Care", img: icuImg },
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

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#111315] text-white">
      <div className="relative mx-auto grid max-w-[100rem] gap-8 px-6 pt-14 pb-0 lg:grid-cols-12 lg:gap-6 lg:px-10 lg:pt-16">
        {/* Left copy */}
        <div className="relative z-10 lg:col-span-5 lg:pb-16">
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            Turnkey Medical Solutions
          </div>
          <h1 className="mt-5 font-display text-[2.35rem] font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-[2.75rem] lg:text-[3.1rem]">
            We Don't Just Supply
            <br /> Equipment.
            <br /> We Deliver Departments
            <br />
            <span className="text-primary">Ready for Life.</span>
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-white/70">
            From planning to long-term support, we build fully equipped medical
            departments that are ready for clinical operation from Day One.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#departments"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_16px_36px_-14px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Explore Departments
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#transformation"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Play className="h-4 w-4" />
              How It Works
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="relative lg:col-span-7 lg:pb-16">
          <div className="relative h-[280px] w-full overflow-hidden rounded-lg sm:h-[380px] lg:h-[440px]">
            <img
              src={heroImg}
              alt="Modern cath lab with C-arm imaging system"
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111315] via-[#111315]/40 to-transparent" />
          </div>

          {/* Stats card */}
          <div className="absolute bottom-6 right-4 hidden w-[190px] rounded-md bg-white p-4 text-ink shadow-2xl sm:block lg:bottom-24">
            <div className="h-0.5 w-6 bg-primary" />
            <div className="mt-2 font-display text-[2rem] font-extrabold leading-none text-primary">30+</div>
            <div className="mt-1 text-[13px] font-semibold text-ink">Major Projects</div>
            <div className="mt-3 text-[12px] text-muted-foreground">10+ Countries</div>
            <div className="mt-1 text-[12px] text-muted-foreground">Since 1999</div>
          </div>
        </div>
      </div>

      {/* Capability strip */}
      <div className="relative border-t border-white/10 bg-[#111315]">
        <div className="mx-auto grid max-w-[100rem] grid-cols-2 gap-y-4 px-6 py-5 sm:grid-cols-3 lg:grid-cols-6 lg:px-10">
          {CAPABILITIES.map((c) => (
            <div key={c.title} className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 text-white/90">
                <c.icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <div className="truncate text-[12.5px] font-semibold text-white">{c.title}</div>
                <div className="truncate text-[11px] text-white/55">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Department Selector ---------------- */

function DepartmentSelector({ active, onChange }: { active: string; onChange: (id: string) => void }) {
  const setActive = onChange;
  return (
    <section id="departments" className="bg-white">
      <div className="mx-auto max-w-[100rem] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
              <span className="mr-2 text-primary/60">01</span> Choose Your Department
            </div>
            <h2 className="mt-4 font-display text-[1.9rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[2.15rem]">
              Solutions for Every
              <br /> Clinical Department
            </h2>
            <p className="mt-4 text-[14.5px] leading-[1.65] text-muted-foreground">
              Click on a department to explore its complete turnkey solution.
            </p>
          </div>

          <div className="lg:col-span-9">
            <div className="mb-4 flex items-center justify-end gap-2">
              <button className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {DEPARTMENTS.map((d) => {
                const isActive = active === d.id;
                return (
                  <button
                    key={d.id}
                    onClick={() => setActive(d.id)}
                    className={`group overflow-hidden rounded-md border bg-white text-left transition-all ${
                      isActive
                        ? "border-primary ring-2 ring-primary/30"
                        : "border-border hover:border-primary/40"
                    }`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                      <img
                        src={d.img}
                        alt={d.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3">
                      <div className="flex items-center gap-1.5">
                        <Heart className={`h-3.5 w-3.5 ${isActive ? "text-primary" : "text-primary/70"}`} />
                        <div className="text-[13px] font-bold text-ink">{d.name}</div>
                      </div>
                      <div className="mt-1 text-[11px] text-muted-foreground">{d.sub}</div>
                    </div>
                  </button>
                );
              })}
              <button className="group flex flex-col items-center justify-center gap-2 rounded-md border border-dashed border-border bg-white p-4 text-center transition hover:border-primary hover:bg-primary/5">
                <LayoutGrid className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                <div>
                  <div className="text-[13px] font-bold text-ink">More Departments</div>
                  <div className="mt-0.5 text-[11px] text-muted-foreground">View All</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Transformation ---------------- */

function TransformationSection() {
  return (
    <section id="transformation" className="bg-white">
      <div className="mx-auto max-w-[100rem] px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="relative overflow-hidden rounded-xl bg-[#111315] p-6 text-white lg:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                <span className="mr-2 text-white/40">02</span> Build Your Department
              </div>
              <h2 className="mt-4 font-display text-[1.75rem] font-extrabold leading-[1.15] tracking-[-0.02em] sm:text-[2rem]">
                From Empty Room
                <br /> to Ready for Patients
              </h2>
              <p className="mt-4 text-[14px] leading-[1.65] text-white/65">
                We take care of every detail. See how we transform a space into a fully functional medical department.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-[13px] font-bold text-white transition hover:bg-white/10">
                <Play className="h-3.5 w-3.5" /> See the Transformation
              </button>
            </div>

            <div className="lg:col-span-9">
              {/* Step titles */}
              <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
                {TRANSFORM_STEPS.map((s) => (
                  <div key={s.n} className="flex flex-col items-center text-center">
                    <div className="grid h-7 w-7 place-items-center rounded-full bg-primary text-[12px] font-bold text-white">
                      {s.n}
                    </div>
                    <div className="mt-2 text-[11.5px] font-semibold leading-tight">{s.title}</div>
                    <div className="text-[11.5px] leading-tight text-white/60">{s.sub}</div>
                  </div>
                ))}
              </div>

              {/* Image row */}
              <div className="mt-4 grid grid-cols-3 gap-3 md:grid-cols-6">
                {TRANSFORM_STEPS.map((s, i) => (
                  <div
                    key={s.n}
                    className="relative aspect-[4/3] overflow-hidden rounded-md bg-white/5"
                  >
                    <img
                      src={i === 0 ? orImg : i === 5 ? cathImg : [mriImg, ctImg, cathImg, orImg][i % 4]}
                      alt={`Step ${s.n}: ${s.title}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      style={{ filter: i === 0 ? "grayscale(0.6) brightness(1.1)" : "none" }}
                    />
                    {i === 5 && (
                      <div className="absolute inset-x-2 bottom-2 flex items-center gap-2 rounded-md bg-white/95 px-2.5 py-1.5 text-ink shadow-lg">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-green-600 text-white">
                          <Check className="h-3 w-3" />
                        </span>
                        <div className="text-[10.5px] font-bold leading-tight">
                          READY
                          <div className="font-medium text-muted-foreground">FOR PATIENTS</div>
                        </div>
                      </div>
                    )}
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

/* ---------------- Solution Overview ---------------- */

function SolutionOverview({ active }: { active: string }) {
  const meta = DEPARTMENT_META[active] ?? DEPARTMENT_META.cath;
  const hotspots = [
    { n: 1, x: 30, y: 45 },
    { n: 2, x: 20, y: 62 },
    { n: 3, x: 52, y: 30 },
    { n: 4, x: 60, y: 55 },
    { n: 5, x: 72, y: 45 },
    { n: 6, x: 35, y: 70 },
    { n: 7, x: 78, y: 65 },
    { n: 8, x: 45, y: 78 },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[100rem] px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left copy */}
          <div className="lg:col-span-3">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
              <span className="mr-2 text-primary/60">03</span> Solution Overview
            </div>
            <h2 className="mt-4 font-display text-[1.9rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[2.15rem]">
              Cath Lab
              <br /> Turnkey Solution
            </h2>
            <p className="mt-4 text-[14px] leading-[1.65] text-muted-foreground">
              A comprehensive solution designed for interventional procedures with maximum safety, efficiency and clinical performance.
            </p>
            <ul className="mt-5 space-y-2.5">
              {CATH_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2 text-[13.5px] text-ink">
                  <CircleDot className="h-4 w-4 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex items-center gap-5">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[13px] font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                Request Consultation <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#" className="inline-flex items-center gap-1.5 text-[13px] font-bold text-primary">
                Download Brochure <Download className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Floorplan */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary">
              <img
                src={solutionRoomImg}
                alt="Cath Lab floor layout with equipment"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              {hotspots.map((h) => (
                <button
                  key={h.n}
                  aria-label={`Component ${h.n}`}
                  style={{ left: `${h.x}%`, top: `${h.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 grid h-7 w-7 place-items-center rounded-full bg-primary text-[11px] font-bold text-white shadow-md ring-4 ring-white/70 transition hover:scale-110"
                >
                  {h.n}
                </button>
              ))}
            </div>
            <div className="mt-3 text-center text-[12px] text-muted-foreground">
              👆 Click on numbers to explore components
            </div>
          </div>

          {/* Components sidebar */}
          <div className="lg:col-span-3">
            <div className="rounded-lg border border-border bg-white p-4">
              <div className="mb-2 text-[13.5px] font-bold text-ink">Solution Components</div>
              <ul className="divide-y divide-border">
                {CATH_COMPONENTS.map((c, i) => (
                  <li key={c} className="flex items-center justify-between py-2.5 text-[12.5px] text-ink">
                    <span className="flex items-center gap-2.5">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-white">
                        {i + 1}
                      </span>
                      {c}
                    </span>
                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 rounded-lg bg-secondary p-4">
              <div className="text-[13px] font-bold text-ink">Need a customized solution?</div>
              <p className="mt-1.5 text-[12px] text-muted-foreground">
                Our team will design a solution tailored to your clinical needs.
              </p>
              <a href="/contact" className="mt-2 inline-flex items-center gap-1.5 text-[12.5px] font-bold text-primary">
                Talk to an Expert <ArrowRight className="h-3 w-3" />
              </a>
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
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[100rem] px-6 pb-20 lg:px-10">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#111315] via-[#111315] to-[#1c1f22] p-8 text-white lg:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                Ready to Build Your Department?
              </div>
              <h2 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.12] tracking-[-0.02em] sm:text-[2.4rem]">
                Let's plan your next turnkey project — together.
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-[1.65] text-white/70">
                From consultation to long-term after-sales support, our team delivers medical departments that work from Day One.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_16px_36px_-14px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                Request a Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white/10"
              >
                Talk to an Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
