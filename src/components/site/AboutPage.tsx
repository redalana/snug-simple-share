import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Building2,
  Globe2,
  MonitorCheck,
  ArrowRight,
  Wrench,
  Users,
  GraduationCap,
  Activity,
  Settings2,
  LifeBuoy,
  Handshake,
  ChevronDown,
  Stethoscope,
  Cpu,
  ClipboardCheck,
  Boxes,
  UserCog,
  Radar,
  Building,
  Microscope,
  Ribbon,
  HeartPulse,
  Award,
  BadgeCheck,
  Clock,
  MapPinned,
  Zap,
  Phone,
  MessageSquare,
  Sparkles,
  Gauge,
  TrendingUp,
  Headphones,
  Star,
  Baby,
  Droplets,
  ScanLine,
  Scissors,
  CalendarClock,
  HardHat,
} from "lucide-react";

import { Eyebrow } from "./Eyebrow";
import { COUNTRIES, PINS, type Pin } from "./africaMapData";
import { useCountUp } from "@/hooks/use-count-up";

import heroImg from "@/assets/about-hero.jpg";
import teamImg from "@/assets/about-team.jpg";
import hqImg from "@/assets/abufarha-hq.jpg";
import engImg from "@/assets/aftersales-engineering.jpg";
import warehouseImg from "@/assets/aftersales-warehouse.jpg";
import remoteImg from "@/assets/aftersales-remote-engineer.jpg";
import ctaImg from "@/assets/aftersales-cta.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import cathlab from "@/assets/why-cathlab.jpg";
import beyond from "@/assets/beyond-cathlab.jpg";

// ---------- Reveal wrapper ----------
const EASE = [0.22, 1, 0.36, 1] as const;
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ---------- Hero ----------
const HERO_KPIS = [
  { icon: CalendarClock, value: "Since 1999", label: "Established" },
  { icon: Globe2, value: "10+", label: "Countries Served" },
  { icon: Building2, value: "Turnkey", label: "Hospital Projects" },
  { icon: Cpu, value: "Biomedical", label: "Engineering Support" },
];


function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="AbuFarha engineer inspecting an imaging system"
          className="h-full w-full object-cover opacity-70"
          width={1600}
          height={1100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25" />
      </div>
      <div className="relative mx-auto grid max-w-[100rem] gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-10 lg:py-28">
        <div className="max-w-xl">
          <Eyebrow tone="light" index="01">About Us</Eyebrow>
          <h1 className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[3.25rem]">
            Engineering Healthcare
            <br />
            Since 1999.
            <br />
            <span className="text-primary">Trusted Across Africa &amp; The Middle East.</span>
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/75">
            AbuFarha Medical Supplies has been supplying, installing,
            commissioning and supporting medical equipment for hospitals across
            Africa and the Middle East since 1999 — combining biomedical
            engineering expertise with long-term healthcare partnership.
          </p>


          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex h-[50px] items-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-[0_16px_36px_-14px_var(--primary)] transition hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Talk to an Engineer
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-[50px] items-center rounded-full border border-white/30 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Request Consultation
            </Link>
          </div>

          {/* KPI cards */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {HERO_KPIS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/12 bg-white/[0.04] p-4 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white/[0.07]"
              >
                <Icon className="h-5 w-5 text-primary" />
                <div className="mt-3 font-display text-2xl font-extrabold text-white">{value}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/55">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-6 rounded-[36px] bg-primary/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/15 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)]">
            <img
              src={engImg}
              alt="Engineer working on a Cath Lab system"
              className="h-[560px] w-full object-cover"
              width={900}
              height={560}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Journey ----------
const JOURNEY = [
  { year: "1999", title: "Company Founded in Jordan", img: hqImg,
    desc: "AbuFarha Medical Supplies is founded in Jordan to bring reliable medical equipment and engineering support to regional hospitals." },
  { year: "2005", title: "Expansion into Hospital Projects", img: p1,
    desc: "Moves beyond equipment supply into full hospital equipping projects — planning, installation and clinical commissioning." },
  { year: "2010", title: "Regional Growth", img: p2,
    desc: "Establishes a network of biomedical engineers and application specialists serving hospitals across the Middle East." },
  { year: "2015", title: "Large Turnkey Healthcare Projects", img: engImg,
    desc: "Delivers multi-department turnkey healthcare projects covering imaging, cath lab, ICU, OR and sterilization from a single accountable partner." },
  { year: "2020", title: "Expansion Across Africa & Middle East", img: p3,
    desc: "Extends operations into North and East Africa and Central Asia, with permanent field engineering teams and regional spare-parts stock." },
  { year: "Today", title: "Complete Healthcare Engineering Partner", img: cathlab,
    desc: "A complete healthcare engineering partner — supply, installation, commissioning, clinical training and lifetime technical support." },
];


function Journey() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="flex justify-center"><Eyebrow align="center" index="02">Our Journey</Eyebrow></div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              25 years of engineering healthcare progress.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              From a single engineering office to a regional medical-technology partner trusted by leading hospitals across two continents.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-20">
          {/* connecting line — stronger */}
          <div className="pointer-events-none absolute left-10 right-10 top-[104px] hidden lg:block">
            <div className="h-[3px] w-full rounded-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="absolute inset-0 h-[3px] rounded-full bg-primary/30 blur-[6px]" />
          </div>

          <div className="grid gap-14 lg:grid-cols-6 lg:gap-6">
            {JOURNEY.map((j, i) => (
              <Reveal key={j.year} delay={i * 0.06}>
                <div className="group flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="h-52 w-52 overflow-hidden rounded-full border-4 border-white shadow-[0_28px_60px_-20px_rgba(0,0,0,0.4)] ring-1 ring-border transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_36px_70px_-20px_rgba(0,0,0,0.55)] group-hover:ring-primary/60">
                      <img src={j.img} alt={j.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" width={260} height={260} />
                    </div>
                    <span className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-primary ring-4 ring-white shadow-[0_0_0_2px_var(--primary)] transition-all group-hover:scale-125" />
                  </div>
                  <div className="mt-8 font-display text-[1.75rem] font-extrabold tracking-tight text-primary">{j.year}</div>
                  <div className="mt-1 font-display text-lg font-bold text-ink">{j.title}</div>
                  <p className="mt-3 max-w-[240px] text-[13.5px] leading-relaxed text-muted-foreground">
                    {j.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Bento ----------
const BENTO = [
  {
    key: "eng", img: engImg, span: "lg:col-span-2 lg:row-span-2 min-h-[620px]",
    title: "Engineering First",
    desc: "AbuFarha is an engineering company that supplies medical equipment — not a reseller. Every project is scoped, installed and supported by our own biomedical engineers, from first site visit to lifetime service.",
    featured: true,
  },
  {
    key: "cert", img: warehouseImg, span: "min-h-[290px]",
    title: "Certified Biomedical Engineers",
    desc: "OEM-trained field engineers with hands-on experience across MRI, CT, cath lab, ultrasound, monitoring and life-support systems.",
  },
  {
    key: "turnkey", img: beyond, span: "min-h-[290px]",
    title: "Turnkey Healthcare Projects",
    desc: "One accountable partner for planning, procurement, installation, commissioning, training and handover of complete hospital departments.",
  },
  {
    key: "partner", img: remoteImg, span: "lg:col-span-2 min-h-[290px]",
    title: "Long-Term Partnership",
    desc: "We stay engaged long after go-live — preventive maintenance, spare parts, clinical retraining and technology upgrades across the equipment lifecycle.",
  },
];


function Bento() {
  return (
    <section className="bg-secondary/50 py-24 lg:py-28">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="flex justify-center"><Eyebrow align="center" index="03">What Makes AbuFarha Different</Eyebrow></div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              An engineering company inside a medical distributor.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {BENTO.map((b, i) => (
            <Reveal key={b.key} delay={i * 0.06} className={b.span}>
              <article
                className={`group relative h-full overflow-hidden rounded-3xl bg-ink text-white shadow-[0_24px_60px_-30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_80px_-30px_var(--primary)]`}
              >
                <img
                  src={b.img}
                  alt={b.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  loading="lazy"
                />
                {/* stronger dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/20" />
                <div className="absolute inset-0 bg-gradient-to-br from-ink/30 via-transparent to-transparent" />
                {/* red glow on hover */}
                <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-primary/0 blur-2xl transition-all duration-500 group-hover:bg-primary/25" />
                <div className="relative flex h-full flex-col justify-end p-7 lg:p-8">
                  {b.featured && (
                    <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/50 bg-primary/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
                      <Sparkles className="h-3 w-3" /> Our Core
                    </div>
                  )}
                  <h3 className={`font-display font-extrabold leading-tight ${b.featured ? "text-2xl lg:text-[2rem]" : "text-xl lg:text-2xl"}`}>
                    {b.title}
                  </h3>
                  <p className={`mt-3 max-w-lg leading-relaxed text-white/85 ${b.featured ? "text-[15px]" : "text-[13.5px]"}`}>
                    {b.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- How We Work (DARK for rhythm) ----------
const STEPS = [
  { n: "01", icon: MessageSquare, title: "Consultation", desc: "We meet with clinical and biomedical teams to understand the department, patient workload, workflow and long-term clinical goals." },
  { n: "02", icon: ClipboardCheck, title: "Planning & Design", desc: "Engineers produce room layouts, technical specifications, electrical and HVAC requirements and full equipment lists tailored to the facility." },
  { n: "03", icon: Boxes, title: "Equipment Procurement", desc: "Systems are procured directly from OEM partners with full warranty and traceability — matched to the approved technical specification." },
  { n: "04", icon: Wrench, title: "Installation", desc: "Certified engineers manage rigging, mechanical and electrical installation and site coordination against manufacturer standards." },
  { n: "05", icon: Gauge, title: "Commissioning", desc: "Every system is calibrated, tested and clinically accepted with a documented commissioning report handed to the biomedical department." },
  { n: "06", icon: GraduationCap, title: "Clinical Training", desc: "Application specialists train radiographers, technologists, nurses and biomedical staff on protocols, workflows and safe daily operation." },
  { n: "07", icon: LifeBuoy, title: "After-Sales Support", desc: "Preventive maintenance contracts, corrective service, spare parts and 24/7 technical support across the full equipment lifetime." },
];


function HowWeWork() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="flex justify-center"><Eyebrow align="center" tone="light" index="04">How We Work</Eyebrow></div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.55rem]">
              A seven-step engineering process.
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-20">
          <div className="pointer-events-none absolute left-10 right-10 top-[52px] hidden lg:block">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
            <div className="absolute inset-0 h-[2px] bg-primary/40 blur-md" />
          </div>
          <ol className="grid gap-10 lg:grid-cols-7 lg:gap-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <li className="group flex flex-col items-center text-center">
                  <div className="relative flex h-[108px] w-[108px] items-center justify-center rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-[0_20px_50px_-10px_var(--primary)]">
                    <s.icon className="h-8 w-8 text-white/80 transition-colors group-hover:text-primary" strokeWidth={1.5} />
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2.5 py-0.5 font-display text-[10px] font-extrabold text-primary-foreground shadow-[0_6px_14px_-4px_var(--primary)]">
                      {s.n}
                    </span>
                  </div>
                  <div className="mt-6 font-display font-bold text-white">{s.title}</div>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-white/60">
                    {s.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// ---------- Expertise ----------
const EXPERTISE = [
  {
    icon: Cpu, title: "Biomedical Engineering", thumb: engImg,
    desc: "Our in-house biomedical engineering team specializes in advanced imaging, interventional cath lab, patient monitoring and life-support platforms. Engineers hold OEM-level certifications across the systems they service, and every intervention is documented against manufacturer specifications.",
  },
  {
    icon: Stethoscope, title: "Clinical Applications", thumb: cathlab,
    desc: "Clinical application specialists work directly with radiologists, cardiologists and technologists to build imaging protocols, optimize dose, refine workflows and validate clinical performance — turning capable equipment into confident daily practice.",
  },
  {
    icon: Wrench, title: "Installation & Commissioning", thumb: warehouseImg,
    desc: "Complete site preparation, rigging, mechanical installation, electrical hook-up, calibration and clinical acceptance testing — all executed to OEM standards, with a documented commissioning report handed to the biomedical department.",
  },
  {
    icon: Gauge, title: "Calibration & Testing", thumb: p2,
    desc: "Scheduled calibration, image-quality checks, dose verification and performance validation keep every system within manufacturer tolerance — protecting image quality, patient safety and regulatory compliance year after year.",
  },
  {
    icon: GraduationCap, title: "Clinical Training", thumb: p1,
    desc: "Structured on-site training programs for radiographers, biomedical engineers and clinicians, complemented by advanced sessions at reference centers. Training is protocol-based, scenario-driven and continues after go-live.",
  },
  {
    icon: ShieldCheck, title: "Preventive Maintenance", thumb: remoteImg,
    desc: "OEM-aligned preventive maintenance contracts reduce unplanned downtime, extend equipment lifetime and protect long-term image quality — with predictable service windows and full documentation for every visit.",
  },
  {
    icon: Headphones, title: "Technical Support", thumb: p3,
    desc: "24/7 remote diagnostics combined with rapid on-site response from engineers stationed regionally. First-line triage, root-cause analysis and escalation paths are defined for every contracted customer.",
  },
  {
    icon: ClipboardCheck, title: "Project Management", thumb: beyond,
    desc: "Dedicated project managers coordinate design, civil works, procurement, installation, training and handover — giving hospitals one accountable partner for complex, multi-modality turnkey builds.",
  },
];

function Expertise() {
  const [open, setOpen] = useState<number>(0);
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="sticky top-32">
              <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_70px_-30px_rgba(0,0,0,0.45)]">
                <img src={warehouseImg} alt="AbuFarha engineering team" className="h-full w-full min-h-[520px] object-cover" loading="lazy" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-7 text-white">
                  <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/70">Engineering Excellence</div>
                  <div className="mt-2 font-display text-2xl font-extrabold">Deep expertise across every modality.</div>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow index="05">Our Expertise</Eyebrow>
              <h2 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
                Deep engineering across the full equipment lifecycle.
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                Nine disciplines, one integrated team — from first clinical consultation to lifetime technical support.
              </p>
            </Reveal>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_2px_14px_-8px_rgba(15,23,42,0.14)]">
              {EXPERTISE.map((e, i) => {
                const isOpen = open === i;
                return (
                  <div key={e.title} className={`border-b border-border last:border-b-0 transition-colors ${isOpen ? "bg-secondary/40" : ""}`}>
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary/50"
                    >
                      <div className="flex items-center gap-4">
                        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all ${isOpen ? "bg-primary text-primary-foreground shadow-[0_8px_22px_-8px_var(--primary)]" : "bg-primary/10 text-primary"}`}>
                          <e.icon className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <span className="font-display text-[1.02rem] font-bold text-ink">{e.title}</span>
                      </div>
                      <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`} />
                    </button>
                    <div className={`grid overflow-hidden transition-all duration-400 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="min-h-0">
                        <div className="grid gap-5 px-6 pb-6 sm:grid-cols-[140px_1fr]">
                          <div className="hidden overflow-hidden rounded-xl sm:block">
                            <img src={e.thumb} alt="" className="h-full w-full object-cover" loading="lazy" />
                          </div>
                          <p className="text-[14px] leading-relaxed text-muted-foreground">
                            {e.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Where We Work (interactive map) ----------
const MAP_STATS = [
  { icon: Building2, value: "30+", label: "Projects" },
  { icon: Globe2, value: "10+", label: "Countries" },
  { icon: MapPinned, value: "60+", label: "Cities" },
  { icon: MonitorCheck, value: "500+", label: "Installed Systems" },
];

function WhereWeWork() {
  const [active, setActive] = useState<Pin | null>(null);
  const VB_X = 280, VB_Y = -80, VB_W = 780, VB_H = 571;
  const VISIBLE = PINS.filter(p => p.x >= VB_X && p.x <= VB_X + VB_W && p.y >= VB_Y && p.y <= VB_Y + VB_H);

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white lg:py-28">
      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="flex justify-center"><Eyebrow align="center" tone="light" index="06">Where We Work</Eyebrow></div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.55rem]">
              Supporting healthcare across Africa &amp; the Middle East.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] text-white/70">
              Local engineering teams, regional spare-parts stock and 24/7 remote support — always close to where you operate.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.55fr_1fr]">
          <div className="relative aspect-[41/30] overflow-hidden rounded-3xl border border-white/10 bg-[oklch(0.16_0.02_264)] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6)]">
            <div className="pointer-events-none absolute inset-0 opacity-[0.35]"
              style={{ backgroundImage: "radial-gradient(oklch(1 0 0 / 14%) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
            <svg viewBox={`${VB_X} ${VB_Y} ${VB_W} ${VB_H}`} className="absolute inset-0 h-full w-full">
              {COUNTRIES.filter(c => !c.sup).map(c => (
                <path key={c.name} d={c.d} fill="oklch(1 0 0 / 7%)" stroke="oklch(1 0 0 / 20%)" strokeWidth={0.9} />
              ))}
              {COUNTRIES.filter(c => c.sup).map(c => {
                const isA = active?.name === c.name;
                return (
                  <path key={c.name} d={c.d}
                    fill={isA ? "color-mix(in oklab, var(--primary) 78%, transparent)" : "color-mix(in oklab, var(--primary) 34%, transparent)"}
                    stroke="var(--primary)" strokeOpacity={0.9} strokeWidth={isA ? 1.4 : 0.9}
                    style={{ filter: isA ? "drop-shadow(0 0 10px var(--primary))" : undefined, transition: "all .3s" }} />
                );
              })}
            </svg>
            {VISIBLE.map(p => {
              const left = ((p.x - VB_X) / VB_W) * 100;
              const top = ((p.y - VB_Y) / VB_H) * 100;
              const isA = active?.name === p.name;
              return (
                <div key={p.name} className="absolute z-10 group"
                  style={{ left: `${left}%`, top: `${top}%`, transform: "translate(-50%,-50%)" }}
                  onMouseEnter={() => setActive(p)} onMouseLeave={() => setActive(null)}>
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 animate-ping rounded-full bg-primary/60" />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-primary/20 blur-md" />
                  <button className={`relative block rounded-full bg-primary ring-2 ring-white/70 transition-all group-hover:scale-125 ${p.hq ? "h-4 w-4 ring-2 ring-white" : "h-3 w-3"} ${isA ? "scale-125" : ""}`} />
                  {p.hq && (
                    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-primary/90 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary-foreground">HQ</span>
                  )}
                  {isA && (
                    <div className="pointer-events-none absolute left-1/2 bottom-full z-20 mb-3 w-60 -translate-x-1/2 rounded-xl border border-primary/40 bg-ink/95 p-4 text-left shadow-2xl backdrop-blur">
                      <div className="flex items-center gap-2 font-display text-sm font-bold text-white">
                        <MapPinned className="h-3.5 w-3.5 text-primary" />{p.name}
                      </div>
                      <ul className="mt-2 space-y-1 text-[11px] text-white/80">
                        {p.items.slice(0, 3).map(it => <li key={it} className="flex items-start gap-1.5"><span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary" />{it}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-white/12 bg-white/[0.04] p-7 backdrop-blur-sm">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">Our Presence</span>
              <h3 className="mt-3 font-display text-[1.6rem] font-extrabold">Regional footprint</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/70">
                Permanent engineering teams across MENA and Africa deliver installation, training and long-term support with regional spare-parts stock and rapid dispatch.
              </p>
              {active && (
                <div className="mt-4 flex items-center gap-2 text-[12px] text-white/60">
                  <Radar className="h-3.5 w-3.5 text-primary" /> Highlighting <span className="font-semibold text-white">{active.name}</span>
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {MAP_STATS.map(s => (
                <div key={s.label} className="group rounded-2xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white/[0.07]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <div className="mt-4 font-display text-2xl font-extrabold">{s.value}</div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/50">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Industries (Clinical Environments) ----------
const INDUSTRIES = [
  { icon: Building, title: "Hospitals", desc: "Full imaging and interventional solutions for public and private hospitals — from single-modality rooms to multi-department turnkey builds.", feature: true },
  { icon: HeartPulse, title: "Cardiac Centers", desc: "Cath lab, echocardiography and cardiovascular imaging with dedicated cardiology application support and clinical protocol tuning." },
  { icon: Microscope, title: "Diagnostic Centers", desc: "MRI, CT, ultrasound and X-ray systems commissioned for high daily throughput and consistent image quality." },
  { icon: Ribbon, title: "Cancer Centers", desc: "Oncology imaging and treatment-planning platforms with full clinical commissioning and radiation-safety validation." },
  { icon: ShieldAlert, title: "Military Hospitals", desc: "Mission-critical equipment for defense healthcare facilities, engineered for reliability in demanding operational environments." },
  { icon: School, title: "Universities", desc: "Academic and research equipment for teaching hospitals and biomedical faculties, with training curricula for students and residents." },
  { icon: Landmark, title: "Government Projects", desc: "Long-term partnership on national healthcare programs and multi-site turnkey initiatives with full lifecycle accountability." },
];

function Industries() {
  return (
    <section className="bg-secondary/50 py-24 lg:py-28">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="flex justify-center"><Eyebrow align="center" index="07">Industries We Serve</Eyebrow></div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              Purpose-built for every clinical environment.
            </h2>
          </div>
        </Reveal>
        {/* Asymmetric grid: featured hero + smaller cards */}
        <div className="mt-14 grid gap-4 lg:grid-cols-6">
          {/* Featured card */}
          <Reveal className="lg:col-span-3 lg:row-span-2">
            <div className="group relative flex h-full min-h-[380px] flex-col justify-end overflow-hidden rounded-3xl bg-ink p-8 text-white shadow-[0_30px_70px_-30px_rgba(0,0,0,0.45)]">
              <img src={cathlab} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_10px_30px_-8px_var(--primary)]">
                  <Building className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-[1.75rem] font-extrabold leading-tight">Hospitals</h3>
                <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-white/85">{INDUSTRIES[0].desc}</p>
              </div>
            </div>
          </Reveal>
          {INDUSTRIES.slice(1).map((i, idx) => (
            <Reveal key={i.title} delay={idx * 0.05} className={idx === 0 || idx === 3 ? "lg:col-span-3" : "lg:col-span-2"}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.25)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <i.icon className="h-5 w-5" />
                </div>
                <div className="mt-5 font-display text-[1.05rem] font-extrabold text-ink">{i.title}</div>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{i.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Partners ----------
const PARTNERS = [
  { name: "Philips", color: "#0B5ED7", href: "/brands/philips" },
  { name: "Siemens Healthineers", color: "#EC6602", href: "/brands/siemens" },
  { name: "GE HealthCare", color: "#005EB8", href: "/brands/ge-healthcare" },
  { name: "Mindray", color: "#005BAC", href: "/brands/mindray" },
  { name: "Shimadzu", color: "#C8161D", href: "/brands/shimadzu" },
  { name: "Hitachi", color: "#E60027", href: "/brands/hitachi" },
  { name: "Richard Wolf", color: "#C8102E", href: "/brands/richard-wolf" },
  { name: "Abbott", color: "#008FC7", href: "/brands/abbott" },
  { name: "Boston Scientific", color: "#0072CE", href: "/brands/boston-scientific" },
];

function Partners() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="flex justify-center"><Eyebrow align="center" index="08">Trusted Global Partners</Eyebrow></div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              Authorized partnerships with the world's leading OEMs.
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {PARTNERS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.04}>
              <a href={p.href}
                className="group flex h-32 items-center justify-center rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.2)]">
                <span className="font-display text-[18px] font-extrabold tracking-tight text-[oklch(0.55_0_0)] transition-all duration-300 group-hover:scale-105"
                  style={{ color: undefined }}>
                  <span className="block text-current transition-colors duration-300 group-hover:text-[var(--brand)]" style={{ ["--brand" as string]: p.color }}>
                    {p.name}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/brands" className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-7 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground">
            View All Brands <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ---------- Team ----------
const TEAM_ROLES = [
  { icon: Cpu, title: "Biomedical Engineers", desc: "Installation, commissioning and preventive maintenance across imaging, cath lab and monitoring platforms." },
  { icon: Stethoscope, title: "Clinical Specialists", desc: "Application and workflow experts working alongside radiologists, cardiologists and technologists." },
  { icon: Activity, title: "Applications Team", desc: "Modality specialists optimizing clinical protocols for MRI, CT, cath lab and ultrasound." },
  { icon: UserCog, title: "Project Managers", desc: "Coordinating design, civil works, delivery, installation and handover for complex turnkey projects." },
  { icon: Wrench, title: "Field Service Engineers", desc: "On-ground technical support, calibration and corrective maintenance across the region." },
];

const TEAM_BADGES = ["OEM Certified", "ISO 13485", "ISO 9001", "Radiation Safety"];

function Team() {
  return (
    <section className="bg-secondary/50 py-24 lg:py-28">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl shadow-[0_40px_100px_-30px_rgba(0,0,0,0.45)]">
              <img src={teamImg} alt="AbuFarha engineering team" className="h-full w-full min-h-[600px] object-cover" loading="lazy" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent p-8 text-white">
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">Our Engineering Team</div>
                <div className="mt-2 font-display text-[1.6rem] font-extrabold">Certified engineers, based regionally.</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {TEAM_BADGES.map(b => (
                    <span key={b} className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
                      <BadgeCheck className="h-3 w-3 text-primary" /> {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow index="09">Our Engineering Team</Eyebrow>
            <h2 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              People who install it, train on it and stand behind it.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              A multi-disciplinary team of certified professionals covering every step from clinical planning to lifetime support.
            </p>
            <div className="mt-8 space-y-3">
              {TEAM_ROLES.map(r => (
                <div key={r.title} className="group flex gap-4 rounded-2xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[0_20px_36px_-20px_rgba(15,23,42,0.28)]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-ink">{r.title}</div>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ---------- Why Trust ----------
const WHY = [
  { icon: ShieldCheck, title: "25+ Years Experience", desc: "A quarter-century of engineering track record across imaging, cath lab and biomedical systems — with reference sites across two continents.", feature: true },
  { icon: BadgeCheck, title: "OEM Standards", desc: "Every install, calibration and maintenance action follows manufacturer specifications and is fully documented." },
  { icon: Clock, title: "Rapid Response", desc: "Regionally-stationed engineers deliver fast on-site turnaround, backed by 24/7 remote diagnostics." },
  { icon: MapPinned, title: "Regional Presence", desc: "Local teams across Africa and the Middle East with regional spare-parts stock — always close to your facility." },
  { icon: Handshake, title: "Long-Term Partnership", desc: "We stay engaged across the full equipment lifecycle — not just at handover." },
];

function WhyTrust() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="flex justify-center"><Eyebrow align="center" index="10">Why Hospitals Trust AbuFarha</Eyebrow></div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              Trust built on engineering, not marketing.
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-4 lg:grid-cols-6">
          {/* Featured card */}
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-primary-dark via-primary to-primary-dark p-8 text-primary-foreground shadow-[0_30px_70px_-30px_var(--primary)]">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur">
                  <Star className="h-3 w-3" /> Our Foundation
                </div>
                <h3 className="mt-5 font-display text-[1.9rem] font-extrabold leading-tight">25+ Years of Engineering Trust</h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-white/85">
                  {WHY[0].desc}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-white/85">
                <TrendingUp className="h-4 w-4" /> Proven since 1999
              </div>
            </div>
          </Reveal>
          {WHY.slice(1).map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05} className="lg:col-span-2">
              <div className="group h-full rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.22)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <w.icon className="h-5 w-5" />
                </div>
                <div className="mt-5 font-display text-[1.05rem] font-extrabold text-ink">{w.title}</div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Certifications ----------
const CERTS = [
  { icon: Award, title: "ISO 9001:2015", sub: "Quality Management", desc: "Company-wide quality management system audited to the ISO 9001:2015 international standard." },
  { icon: Award, title: "ISO 13485:2016", sub: "Medical Devices Quality", desc: "Dedicated quality system for medical-device supply and servicing under ISO 13485:2016." },
  { icon: BadgeCheck, title: "OEM Certified Engineers", sub: "Manufacturer trained", desc: "Field engineers hold current OEM certifications for the specific platforms they install and service." },
  { icon: ShieldCheck, title: "Safety & Compliance", sub: "International standards", desc: "Radiation safety, electrical safety and installation practices aligned with IEC and local regulations." },
  { icon: Stethoscope, title: "Clinical Standards", sub: "Patient safety first", desc: "Clinical acceptance testing and image-quality validation on every commissioned system." },
  { icon: Radar, title: "Quality Assurance", sub: "Documented processes", desc: "Every intervention is documented with a QA report handed to the biomedical department." },
];

function Certifications() {
  return (
    <section className="bg-secondary/50 py-24 lg:py-28">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="flex justify-center"><Eyebrow align="center" index="11">Certifications &amp; Standards</Eyebrow></div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              Certified, audited and manufacturer-aligned.
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.2)]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/10 transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display text-[1.05rem] font-extrabold text-ink">{c.title}</div>
                  <div className="mt-0.5 text-[12px] font-semibold uppercase tracking-wider text-primary">{c.sub}</div>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Engineering by the Numbers (NEW, dark) ----------
type Metric = { value: number; suffix: string; label: string; sub: string; icon: React.ComponentType<{ className?: string }>; };
const METRICS: Metric[] = [
  { value: 25, suffix: "+", label: "Years of Experience", sub: "Engineering since 1999", icon: ShieldCheck },
  { value: 500, suffix: "+", label: "Systems Installed", sub: "Across every major modality", icon: MonitorCheck },
  { value: 30, suffix: "+", label: "Healthcare Projects", sub: "Turnkey builds delivered", icon: Building2 },
  { value: 10, suffix: "+", label: "Countries Served", sub: "Africa & the Middle East", icon: Globe2 },
  { value: 98, suffix: "%", label: "Customer Satisfaction", sub: "Long-term partnerships", icon: TrendingUp },
  { value: 24, suffix: "/7", label: "Technical Support", sub: "Remote & on-site coverage", icon: Headphones },
];

function MetricCard({ m, i }: { m: Metric; i: number }) {
  const { ref, value } = useCountUp(m.value);
  const Icon = m.icon;
  return (
    <Reveal delay={i * 0.06}>
      <div className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.06] hover:shadow-[0_30px_70px_-20px_var(--primary)]">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition-all duration-500 group-hover:bg-primary/25" />
        <div className="relative flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/20">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <div className="relative mt-8 font-display text-[3.5rem] font-extrabold leading-none tracking-tight text-white">
          <span ref={ref} className="tabular-nums">{value.toLocaleString()}</span>
          <span className="text-primary">{m.suffix}</span>
        </div>
        <div className="relative mt-4 font-display text-[1.05rem] font-bold text-white">{m.label}</div>
        <div className="relative mt-1 text-[13px] text-white/60">{m.sub}</div>
      </div>
    </Reveal>
  );
}

function ByTheNumbers() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="flex justify-center"><Eyebrow align="center" tone="light" index="12">By the Numbers</Eyebrow></div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.55rem]">
              Engineering by the numbers.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] text-white/70">
              Measurable proof of the engineering discipline behind every AbuFarha installation.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {METRICS.map((m, i) => <MetricCard key={m.label} m={m} i={i} />)}
        </div>
      </div>
    </section>
  );
}

// ---------- Final CTA ----------
const TRUST = [
  { icon: Users, title: "Expert Advice", desc: "Consultation from our engineering specialists." },
  { icon: Zap, title: "Tailored Solutions", desc: "Solutions built around your clinical workflow." },
  { icon: LifeBuoy, title: "Reliable Support", desc: "We stay with you across the equipment lifecycle." },
];

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <img src={ctaImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
      <div className="relative mx-auto max-w-[100rem] px-6 py-24 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Eyebrow tone="light" index="13">Let's Talk</Eyebrow>
            <h2 className="mt-5 font-display text-[2.25rem] font-extrabold leading-[1.05] sm:text-[3rem]">
              Let's Build Better Healthcare <span className="text-primary">Together.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
              Partner with AbuFarha for reliable solutions, exceptional service and long-term success.
              Our engineers are ready to design the right system for your facility.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact"
                className="inline-flex h-[50px] items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-[0_16px_36px_-14px_var(--primary)] transition hover:-translate-y-0.5 hover:bg-primary-dark">
                <Phone className="h-4 w-4" /> Talk to an Engineer
              </Link>
              <Link to="/contact"
                className="inline-flex h-[50px] items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
                Request Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {TRUST.map(t => (
              <div key={t.title} className="group rounded-2xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white/[0.07]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <t.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-base font-extrabold">{t.title}</div>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/70">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <>
      <Hero />
      <Journey />
      <Bento />
      <HowWeWork />
      <Expertise />
      <WhereWeWork />
      <Industries />
      <Partners />
      <Team />
      <WhyTrust />
      <Certifications />
      <ByTheNumbers />
      <FinalCTA />
    </>
  );
}
