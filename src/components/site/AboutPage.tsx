import { useState } from "react";
import { Link } from "@tanstack/react-router";
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
  School,
  Ribbon,
  HeartPulse,
  ShieldAlert,
  Landmark,
  Award,
  BadgeCheck,
  Clock,
  MapPinned,
  Zap,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { COUNTRIES, PINS, type Pin } from "./africaMapData";

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

// ---------- Hero ----------
const HERO_KPIS = [
  { icon: ShieldCheck, value: "25+", label: "Years of Experience" },
  { icon: Building2, value: "30+", label: "Major Healthcare Projects" },
  { icon: Globe2, value: "10+", label: "Countries Served" },
  { icon: MonitorCheck, value: "500+", label: "Systems Installed" },
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
            AbuFarha delivers advanced medical imaging, biomedical engineering
            and end-to-end turnkey solutions that empower hospitals, improve
            clinical outcomes and build a healthier future across the region.
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
                className="rounded-2xl border border-white/12 bg-white/[0.04] p-4 backdrop-blur-sm"
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
  { year: "1999", title: "Our Beginning", img: hqImg,
    desc: "AbuFarha was founded with a vision to bring advanced medical technology and engineering excellence to our region." },
  { year: "2005", title: "Regional Expansion", img: p1,
    desc: "Expanded operations across key countries in Africa and the Middle East with local engineering teams." },
  { year: "2010", title: "Turnkey Projects", img: p2,
    desc: "Delivered complex turnkey installations for hospitals, imaging and diagnostic centers." },
  { year: "2015", title: "After-Sales Network", img: engImg,
    desc: "Built a strong after-sales network with certified biomedical engineers and rapid response." },
  { year: "2020", title: "Continuous Growth", img: p3,
    desc: "Strengthened partnerships with global OEMs and expanded our clinical training programs." },
  { year: "Today", title: "Looking Ahead", img: cathlab,
    desc: "Committed to advancing healthcare through innovation, service and long-term partnerships." },
];

function Journey() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <Eyebrow align="center" index="02">Our Journey</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
            25 years of engineering healthcare progress.
          </h2>
        </div>

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-8 right-8 top-[72px] hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
          <div className="grid gap-10 lg:grid-cols-6 lg:gap-4">
            {JOURNEY.map((j) => (
              <div key={j.year} className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="h-36 w-36 overflow-hidden rounded-full border-4 border-white shadow-[0_20px_40px_-16px_rgba(0,0,0,0.35)] ring-1 ring-border">
                    <img src={j.img} alt={j.title} className="h-full w-full object-cover" loading="lazy" width={220} height={220} />
                  </div>
                  <span className="absolute -bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-white" />
                </div>
                <div className="mt-6 font-display text-lg font-extrabold text-primary">{j.year}</div>
                <div className="mt-1 font-semibold text-ink">{j.title}</div>
                <p className="mt-2 max-w-[220px] text-[13px] leading-relaxed text-muted-foreground">
                  {j.desc}
                </p>
              </div>
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
    key: "eng", img: engImg, span: "lg:col-span-2 lg:row-span-2 min-h-[520px]",
    title: "Engineering First, Not Trading",
    desc: "We are biomedical engineers, not just equipment suppliers. We understand your systems, your workflows and your clinical outcomes.",
  },
  {
    key: "cert", img: warehouseImg, span: "min-h-[250px]",
    title: "Certified Biomedical Engineers",
    desc: "OEM-trained and certified engineers with years of field experience across imaging, cath lab and monitoring systems.",
  },
  {
    key: "turnkey", img: beyond, span: "min-h-[250px]",
    title: "Turnkey Project Delivery",
    desc: "From planning and design to installation, training and handover — one accountable partner for the full project.",
  },
  {
    key: "partner", img: remoteImg, span: "lg:col-span-2 min-h-[250px]",
    title: "Long-Term Partnership",
    desc: "Long-term relationships built on trust, transparency and continuous support across the full equipment lifecycle.",
  },
];

function Bento() {
  return (
    <section className="bg-secondary/40 py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <Eyebrow align="center" index="03">What Makes AbuFarha Different</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
            An engineering company inside a medical distributor.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {BENTO.map((b) => (
            <article
              key={b.key}
              className={`group relative overflow-hidden rounded-3xl bg-ink text-white shadow-[0_24px_60px_-30px_rgba(0,0,0,0.45)] ${b.span}`}
            >
              <img
                src={b.img}
                alt={b.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10" />
              <div className="relative flex h-full flex-col justify-end p-6 lg:p-7">
                <h3 className="font-display text-xl font-extrabold leading-tight lg:text-2xl">
                  {b.title}
                </h3>
                <p className="mt-3 max-w-md text-[13.5px] leading-relaxed text-white/75">
                  {b.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- How We Work ----------
const STEPS = [
  { n: "01", icon: MessageSquare, title: "Consultation", desc: "We understand your clinical needs, existing infrastructure and long-term objectives before proposing anything." },
  { n: "02", icon: ClipboardCheck, title: "Planning", desc: "Our engineers design the optimal solution for your facility, workflow and budget with full technical documentation." },
  { n: "03", icon: Boxes, title: "Procurement", desc: "We source genuine equipment directly from OEM partners with full warranty and traceability." },
  { n: "04", icon: Wrench, title: "Installation", desc: "Certified engineers install, commission and validate systems to strict manufacturer standards." },
  { n: "05", icon: GraduationCap, title: "Training", desc: "We train your clinical and technical teams for confident, safe day-one use of every system." },
  { n: "06", icon: Settings2, title: "Maintenance", desc: "Preventive and corrective maintenance to keep your systems performing at OEM specification." },
  { n: "07", icon: LifeBuoy, title: "Lifetime Support", desc: "24/7 technical support, spare parts and lifecycle partnership long after handover." },
];

function HowWeWork() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <Eyebrow align="center" index="04">How We Work</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
            A seven-step engineering process.
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-8 right-8 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent lg:block" />
          <ol className="grid gap-8 lg:grid-cols-7 lg:gap-3">
            {STEPS.map((s) => (
              <li key={s.n} className="group flex flex-col items-center text-center">
                <div className="relative flex h-[104px] w-[104px] items-center justify-center rounded-full border border-border bg-white shadow-[0_10px_30px_-16px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-[0_20px_40px_-16px_var(--primary)]">
                  <s.icon className="h-8 w-8 text-ink transition-colors group-hover:text-primary" strokeWidth={1.5} />
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2 py-0.5 font-display text-[10px] font-extrabold text-primary-foreground">
                    {s.n}
                  </span>
                </div>
                <div className="mt-6 font-semibold text-ink">{s.title}</div>
                <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// ---------- Expertise ----------
const EXPERTISE = [
  { title: "Biomedical Engineering", desc: "In-house biomedical engineering team specialized in imaging, cath lab, monitoring and life-support systems across all major OEM platforms." },
  { title: "Clinical Applications", desc: "Clinical application specialists work side-by-side with radiologists, cardiologists and technologists to optimize protocols and workflow." },
  { title: "Installation & Commissioning", desc: "Full site preparation, rigging, installation, calibration and clinical acceptance in strict compliance with OEM specifications." },
  { title: "Calibration & Testing", desc: "Scheduled calibration, image-quality testing and performance validation to keep every system within manufacturer tolerances." },
  { title: "Clinical Training", desc: "Structured training programs for radiographers, biomedical engineers and clinicians — on-site and at customer reference centers." },
  { title: "Preventive Maintenance", desc: "OEM-aligned PM contracts that reduce downtime, extend equipment lifetime and protect long-term image quality." },
  { title: "Technical Support", desc: "24/7 remote diagnostics and on-site response with certified engineers stationed regionally for fast resolution." },
  { title: "Project Management", desc: "Dedicated project managers coordinate design, civil works, installation, training and handover for complex turnkey projects." },
];

function Expertise() {
  const [open, setOpen] = useState<number>(0);
  return (
    <section className="bg-secondary/40 py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_70px_-30px_rgba(0,0,0,0.45)]">
            <img src={warehouseImg} alt="AbuFarha engineering team" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <Eyebrow index="05">Our Expertise</Eyebrow>
            <h2 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              Deep engineering across the full equipment lifecycle.
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
              {EXPERTISE.map((e, i) => {
                const isOpen = open === i;
                return (
                  <button
                    key={e.title}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="block w-full text-left"
                  >
                    <div className="flex items-center justify-between gap-4 px-5 py-4">
                      <div className="flex items-center gap-3">
                        <span className={`h-2 w-2 rounded-full ${isOpen ? "bg-primary" : "bg-primary/40"}`} />
                        <span className="font-semibold text-ink">{e.title}</span>
                      </div>
                      <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`} />
                    </div>
                    <div className={`grid overflow-hidden transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="min-h-0 overflow-hidden">
                        <p className="px-5 pb-5 text-[14px] leading-relaxed text-muted-foreground">
                          {e.desc}
                        </p>
                      </div>
                    </div>
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
    <section className="bg-ink py-20 text-white lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <Eyebrow align="center" tone="light" index="06">Where We Work</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.55rem]">
            Supporting healthcare across Africa &amp; the Middle East.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.55fr_1fr]">
          <div className="relative aspect-[41/30] overflow-hidden rounded-3xl border border-white/10 bg-[oklch(0.16_0.02_264)]">
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
                    fill={isA ? "color-mix(in oklab, var(--primary) 70%, transparent)" : "color-mix(in oklab, var(--primary) 34%, transparent)"}
                    stroke="var(--primary)" strokeOpacity={0.85} strokeWidth={0.9}
                    style={{ filter: isA ? "drop-shadow(0 0 6px var(--primary))" : undefined, transition: "fill .25s" }} />
                );
              })}
            </svg>
            {VISIBLE.map(p => {
              const left = ((p.x - VB_X) / VB_W) * 100;
              const top = ((p.y - VB_Y) / VB_H) * 100;
              const isA = active?.name === p.name;
              return (
                <div key={p.name} className="absolute z-10"
                  style={{ left: `${left}%`, top: `${top}%`, transform: "translate(-50%,-50%)" }}
                  onMouseEnter={() => setActive(p)} onMouseLeave={() => setActive(null)}>
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 animate-ping rounded-full bg-primary/50" />
                  <button className={`relative block h-2.5 w-2.5 rounded-full bg-primary ring-1 ring-white/60 ${p.hq ? "h-3.5 w-3.5 ring-2 ring-white" : ""}`} />
                  {isA && (
                    <div className="pointer-events-none absolute left-1/2 bottom-full mb-3 w-56 -translate-x-1/2 rounded-xl border border-white/15 bg-ink/85 p-3 text-left shadow-xl backdrop-blur">
                      <div className="font-display text-sm font-bold">{p.name}</div>
                      <ul className="mt-2 space-y-1 text-[11px] text-white/70">
                        {p.items.slice(0, 3).map(it => <li key={it}>• {it}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-white/12 bg-white/[0.04] p-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/40">Our Presence</span>
              <h3 className="mt-3 font-display text-2xl font-extrabold">Regional footprint</h3>
              <p className="mt-3 text-sm text-white/65">
                Local engineering teams across Africa &amp; the Middle East deliver installation, training and long-term support with regional spare-parts stock.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {MAP_STATS.map(s => (
                <div key={s.label} className="rounded-2xl border border-white/12 bg-white/[0.04] p-5">
                  <s.icon className="h-4 w-4 text-primary" />
                  <div className="mt-3 font-display text-2xl font-extrabold">{s.value}</div>
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

// ---------- Industries ----------
const INDUSTRIES = [
  { icon: Building, title: "Hospitals", desc: "Comprehensive imaging and interventional solutions for public and private hospitals." },
  { icon: Microscope, title: "Diagnostic Centers", desc: "Advanced diagnostic and imaging systems for accurate, early clinical decisions." },
  { icon: School, title: "Universities", desc: "Academic and research equipment for teaching hospitals and biomedical faculties." },
  { icon: Ribbon, title: "Cancer Centers", desc: "Oncology imaging and therapy platforms with full clinical commissioning." },
  { icon: HeartPulse, title: "Cardiac Centers", desc: "Cath lab, echo and cardiovascular imaging with dedicated cardiology support." },
  { icon: ShieldAlert, title: "Military Hospitals", desc: "Reliable, mission-critical equipment for military and defense healthcare facilities." },
  { icon: Landmark, title: "Government Projects", desc: "Long-term partnership on national healthcare development and turnkey initiatives." },
];

function Industries() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <Eyebrow align="center" index="07">Industries We Serve</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
            Purpose-built for every clinical environment.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {INDUSTRIES.map(i => (
            <div key={i.title}
              className="group flex flex-col rounded-2xl border border-border bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.2)]">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <i.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display text-[15px] font-extrabold text-ink">{i.title}</div>
              <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">{i.desc}</p>
            </div>
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
    <section className="bg-secondary/40 py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <Eyebrow align="center" index="08">Trusted Global Partners</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
            Authorized partnerships with the world's leading OEMs.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {PARTNERS.map(p => (
            <a key={p.name} href={p.href}
              className="group flex h-24 items-center justify-center rounded-2xl border border-border bg-white transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[0_16px_30px_-18px_rgba(0,0,0,0.25)]">
              <span className="font-display text-[15px] font-extrabold tracking-tight text-muted-foreground grayscale transition-all group-hover:grayscale-0"
                style={{ color: p.color }}>
                {p.name}
              </span>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/brands" className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-6 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
            View All Brands <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ---------- Team ----------
const TEAM_ROLES = [
  { icon: Cpu, title: "Biomedical Engineers", desc: "Expert in installation, commissioning and preventive maintenance across imaging and monitoring systems." },
  { icon: Stethoscope, title: "Clinical Specialists", desc: "Application and workflow experts working alongside radiologists and cardiologists." },
  { icon: Activity, title: "Applications Team", desc: "Modality specialists optimizing protocols for MRI, CT, cath lab and ultrasound." },
  { icon: UserCog, title: "Project Managers", desc: "Coordinate design, civil works, delivery and handover of complex turnkey projects." },
  { icon: Wrench, title: "Service Engineers", desc: "On-ground technical support, calibration and corrective maintenance across the region." },
];

function Team() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)]">
            <img src={teamImg} alt="AbuFarha engineering team" className="h-full w-full min-h-[520px] object-cover" loading="lazy" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6 text-white">
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">Our Engineering Team</div>
              <div className="mt-1 font-display text-2xl font-extrabold">Certified engineers, based regionally.</div>
            </div>
          </div>
          <div>
            <Eyebrow index="09">Our Engineering Team</Eyebrow>
            <h2 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              People who install it, train on it and stand behind it.
            </h2>
            <div className="mt-8 space-y-3">
              {TEAM_ROLES.map(r => (
                <div key={r.title} className="flex gap-4 rounded-2xl border border-border bg-white p-5 transition-all hover:border-primary/60 hover:shadow-[0_16px_30px_-20px_rgba(0,0,0,0.25)]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-ink">{r.title}</div>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Why Trust ----------
const WHY = [
  { icon: ShieldCheck, title: "25+ Years Experience", desc: "Decades of proven engineering track record across imaging, cath lab and biomedical systems." },
  { icon: BadgeCheck, title: "OEM Standards", desc: "Every install, calibration and maintenance action follows manufacturer specifications." },
  { icon: Clock, title: "Fast Response", desc: "Regional engineers stationed close to customers deliver rapid on-site turnaround." },
  { icon: MapPinned, title: "Regional Presence", desc: "Local teams across Africa and the Middle East, with regional spare-parts stock." },
  { icon: Handshake, title: "Long-Term Partnership", desc: "We support customers throughout the entire equipment lifecycle, not just at handover." },
];

function WhyTrust() {
  return (
    <section className="bg-secondary/40 py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <Eyebrow align="center" index="10">Why Hospitals Trust AbuFarha</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
            Trust built on engineering, not marketing.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {WHY.map(w => (
            <div key={w.title}
              className="group rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.2)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <w.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 font-display text-lg font-extrabold text-ink">{w.title}</div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Certifications ----------
const CERTS = [
  { icon: Award, title: "ISO 9001:2015", sub: "Quality Management" },
  { icon: Award, title: "ISO 13485:2016", sub: "Medical Devices Quality" },
  { icon: BadgeCheck, title: "OEM Certified Engineers", sub: "Manufacturer trained" },
  { icon: ShieldCheck, title: "Safety & Compliance", sub: "International standards" },
  { icon: Stethoscope, title: "Clinical Standards", sub: "Patient safety first" },
  { icon: Radar, title: "Quality Assurance", sub: "Documented processes" },
];

function Certifications() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <Eyebrow align="center" index="11">Certifications &amp; Standards</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
            Certified, audited and manufacturer-aligned.
          </h2>
        </div>
        <div className="mt-12 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
          {CERTS.map(c => (
            <div key={c.title} className="flex flex-col items-start rounded-2xl border border-border bg-white p-5 transition-all hover:border-primary/60">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-semibold text-ink">{c.title}</div>
              <div className="mt-1 text-[12px] text-muted-foreground">{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Final CTA ----------
const TRUST = [
  { icon: Users, title: "Expert Advice", desc: "Get consultation from our engineering specialists." },
  { icon: Zap, title: "Tailored Solutions", desc: "Customized solutions built around your workflow." },
  { icon: LifeBuoy, title: "Reliable Support", desc: "We stay with you every step of the equipment lifecycle." },
];

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <img src={ctaImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
      <div className="relative mx-auto max-w-[100rem] px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Eyebrow tone="light" index="12">Let's Talk</Eyebrow>
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
              <div key={t.title} className="rounded-2xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-primary">
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
      <FinalCTA />
    </>
  );
}
