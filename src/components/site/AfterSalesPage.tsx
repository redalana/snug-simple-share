import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Headphones,
  Clock,
  Users,
  ShieldCheck,
  Wrench,
  AlertTriangle,
  PackageSearch,
  GraduationCap,
  Gauge,
  MonitorSmartphone,
  Cog,
  Boxes,
  Stethoscope,
  Cpu,
  FileText,
  CheckCircle2,
  Circle,
  MapPin,
  Phone,
  Plus,
  Minus,
  Globe,
  Activity,
} from "lucide-react";
import heroImg from "@/assets/aftersales-hero.jpg";
import ctaImg from "@/assets/aftersales-cta.jpg";

/* ---------- data ---------- */

const HERO_STATS = [
  { icon: Headphones, value: "24/7", label: "Support" },
  { icon: Clock, value: "< 4 Hours", label: "Avg Response" },
  { icon: Users, value: "15+", label: "Engineers" },
  { icon: ShieldCheck, value: "Since 1999", label: "Trusted Partner" },
];

const ECOSYSTEM = [
  { label: "Spare Parts Supply", icon: Boxes, angle: -90 },
  { label: "Preventive Maintenance", icon: Wrench, angle: -30 },
  { label: "Emergency Support", icon: AlertTriangle, angle: 30 },
  { label: "Calibration & QA", icon: Gauge, angle: 90 },
  { label: "Clinical Training", icon: GraduationCap, angle: 150 },
  { label: "Remote Diagnostics", icon: MonitorSmartphone, angle: 210 },
];

const LIVE_STATUS = [
  { label: "Service Request Created", state: "done" },
  { label: "Engineer Assigned", state: "done" },
  { label: "Engineer En Route", state: "active" },
  { label: "On Site", state: "todo" },
  { label: "Repair in Progress", state: "todo" },
  { label: "Calibration & Testing", state: "todo" },
  { label: "Clinical Validation", state: "todo" },
  { label: "Service Completed", state: "todo" },
] as const;

const SUPPORT_SERVICES = [
  { label: "Preventive Maintenance", icon: Wrench },
  { label: "Emergency Support", icon: AlertTriangle },
  { label: "Corrective Maintenance", icon: Cog },
  { label: "Spare Parts Supply", icon: Boxes },
  { label: "Calibration & QA", icon: Gauge },
  { label: "Clinical Training", icon: GraduationCap },
  { label: "Biomedical Engineering", icon: Cpu },
  { label: "Service Contracts", icon: FileText },
];

const PERFORMANCE = [
  { icon: Activity, value: "98%", label: "First-Time Fix Rate" },
  { icon: Clock, value: "24/7", label: "Availability" },
  { icon: Globe, value: "10+", label: "Countries Covered" },
  { icon: Users, value: "15+", label: "Biomedical Engineers" },
];

const SPARE_PARTS = [
  "Cath Lab Parts",
  "MRI Parts",
  "CT Parts",
  "Ultrasound Parts",
  "Monitors & Displays",
  "Injectors",
  "UPS & Power Systems",
  "And More",
];

const REGIONS = {
  "Middle East": ["Jordan", "Iraq", "Syria", "Yemen", "Egypt", "Libya"],
  Africa: ["Somalia", "Somaliland", "Libya", "Egypt"],
  "Central Asia": ["Uzbekistan"],
  "South Asia": ["Bangladesh"],
} as const;

type RegionKey = keyof typeof REGIONS;

const PLANS = [
  {
    name: "Essential",
    tag: null as string | null,
    tagline: "Core protection for your equipment",
    price: "$2,500",
    features: ["Preventive Maintenance", "Remote Support", "Software Updates"],
  },
  {
    name: "Professional",
    tag: "Most Popular",
    tagline: "Complete support for maximum uptime",
    price: "$4,500",
    features: [
      "All in Essential",
      "Emergency Support",
      "Calibration & QA",
      "Priority Response",
    ],
  },
  {
    name: "Enterprise",
    tag: null,
    tagline: "Comprehensive coverage for peace of mind",
    price: "$7,500",
    features: [
      "All in Professional",
      "Spare Parts Included",
      "Clinical Training",
      "Dedicated Account Manager",
    ],
  },
];

const FAQ = [
  {
    q: "How quickly can you respond to a service request?",
    a: "Our average on-site response time is under 4 hours for critical systems, with 24/7 remote diagnostics available immediately when a ticket is opened.",
  },
  {
    q: "Do you provide 24/7 technical support?",
    a: "Yes. Our biomedical engineering team is on-call round the clock across every country we serve.",
  },
  {
    q: "Do you use genuine spare parts?",
    a: "Every part we install is sourced directly from the original manufacturer or an authorized supplier, with full traceability.",
  },
  {
    q: "Do you support equipment from other vendors?",
    a: "Yes — our engineers are trained on multi-vendor cath labs, imaging, monitoring and surgical systems, not only the brands we supply.",
  },
  {
    q: "Can we customize a service contract?",
    a: "Absolutely. Every hospital's uptime requirements are different, and we tailor coverage, response SLAs and included parts accordingly.",
  },
  {
    q: "Do you provide training for our staff?",
    a: "Clinical and biomedical training is included in Professional and Enterprise contracts, and available as a standalone service.",
  },
];

/* ---------- helpers ---------- */

function useCircle(radius: number) {
  return (angle: number) => {
    const rad = (angle * Math.PI) / 180;
    return { x: 50 + (radius * Math.cos(rad)) / 5, y: 50 + (radius * Math.sin(rad)) / 5 };
  };
}

/* ---------- sections ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-[100rem] gap-10 px-6 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:px-10 lg:py-20">
        {/* left */}
        <div className="relative z-10 flex flex-col justify-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
            After Sales Support
          </span>
          <h1 className="mt-5 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[3.4rem]">
            Keeping Your
            <br />
            Equipment Performing
            <br />
            <span className="text-primary">at Its Best.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            We provide comprehensive after sales support including preventive
            maintenance, emergency response, spare parts, calibration and
            clinical training — keeping your department running 24/7.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/contact"
              className="group inline-flex h-[52px] items-center gap-2 rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground shadow-[0_18px_40px_-18px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Request Technical Support
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#plans"
              className="inline-flex h-[52px] items-center gap-2 rounded-full border border-border bg-white px-7 text-sm font-bold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              Explore Service Plans
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* stat strip */}
          <div className="mt-10 grid gap-3 rounded-2xl border border-border bg-white p-3 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)] sm:grid-cols-4">
            {HERO_STATS.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" strokeWidth={1.9} />
                </span>
                <div>
                  <div className="font-display text-[15px] font-extrabold leading-none text-ink">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right — image + live ticket */}
        <div className="relative">
          <div className="relative aspect-[5/6] overflow-hidden rounded-[28px] shadow-[0_40px_100px_-40px_rgba(15,23,42,0.4)] lg:aspect-auto lg:h-full">
            <img
              src={heroImg}
              alt="AbuFarha biomedical engineer servicing a hospital imaging system"
              className="h-full w-full object-cover"
              width={1600}
              height={1100}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-transparent" />
          </div>

          {/* live ticket card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute -bottom-4 right-4 w-[300px] rounded-2xl border border-border bg-white p-5 shadow-[0_30px_60px_-25px_rgba(15,23,42,0.35)] sm:right-6 lg:-right-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Live Service Ticket
              </span>
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
            </div>
            <div className="mt-3 text-[13px] font-semibold text-ink">
              Ticket #AF-24017
            </div>
            <div className="mt-4 border-t border-border pt-4">
              <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Engineer
              </div>
              <div className="mt-1.5 flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Stethoscope className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-ink">Mohamed Ahmed</span>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3 text-[11px]">
              <div>
                <div className="font-bold uppercase tracking-wider text-muted-foreground">
                  Status
                </div>
                <div className="mt-1 font-semibold text-primary">Engineer Assigned</div>
              </div>
              <div>
                <div className="font-bold uppercase tracking-wider text-muted-foreground">
                  ETA
                </div>
                <div className="mt-1 font-semibold text-ink">2 Hours</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[72%] rounded-full bg-primary" />
              </div>
              <div className="mt-1.5 flex justify-end text-[10px] font-bold text-primary">
                72%
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function EcosystemAndStatus() {
  const pos = useCircle(38);
  return (
    <section className="bg-secondary/50 py-16 lg:py-20">
      <div className="mx-auto grid max-w-[100rem] gap-6 px-6 lg:grid-cols-2 lg:px-10">
        {/* ecosystem hub */}
        <div className="rounded-3xl border border-border bg-white p-8 lg:p-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Our Service Ecosystem
          </span>
          <div className="relative mx-auto mt-8 aspect-square max-w-[440px]">
            {/* rings */}
            <div className="absolute inset-8 rounded-full border border-dashed border-border" />
            <div className="absolute inset-16 rounded-full border border-dashed border-border/70" />
            {/* center hub */}
            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-primary/20 bg-white shadow-[0_20px_40px_-20px_rgba(15,23,42,0.25)]">
              <span className="font-display text-sm font-extrabold text-ink">
                Abu<span className="text-primary">Farha</span>
              </span>
              <span className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Medical Equipment
              </span>
            </div>
            {/* spokes */}
            {ECOSYSTEM.map((s) => {
              const p = pos(s.angle);
              return (
                <div
                  key={s.label}
                  className="absolute w-28 -translate-x-1/2 -translate-y-1/2 text-center"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-primary/25 bg-white text-primary shadow-[0_10px_25px_-14px_rgba(15,23,42,0.3)]">
                    <s.icon className="h-5 w-5" strokeWidth={1.9} />
                  </span>
                  <span className="mt-1.5 block text-[11px] font-bold leading-tight text-ink">
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* live status timeline */}
        <div className="rounded-3xl border border-border bg-white p-8 lg:p-10">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
              Live Service Status
            </span>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_1.1fr]">
            {/* timeline */}
            <ol className="relative space-y-3.5">
              {LIVE_STATUS.map((s) => {
                const Icon =
                  s.state === "done"
                    ? CheckCircle2
                    : s.state === "active"
                    ? Activity
                    : Circle;
                const color =
                  s.state === "done"
                    ? "text-emerald-500"
                    : s.state === "active"
                    ? "text-primary"
                    : "text-muted-foreground/40";
                return (
                  <li key={s.label} className="flex items-center gap-3">
                    <Icon className={`h-5 w-5 shrink-0 ${color}`} strokeWidth={2} />
                    <span
                      className={`text-[13px] font-semibold ${
                        s.state === "active"
                          ? "text-primary"
                          : s.state === "todo"
                          ? "text-muted-foreground"
                          : "text-ink"
                      }`}
                    >
                      {s.label}
                    </span>
                  </li>
                );
              })}
            </ol>

            {/* map + engineer card */}
            <div className="rounded-2xl border border-border bg-secondary/40 p-4">
              <div className="relative h-32 overflow-hidden rounded-xl bg-white">
                <svg
                  viewBox="0 0 300 120"
                  className="absolute inset-0 h-full w-full"
                  aria-hidden
                >
                  <defs>
                    <pattern id="grid" width="18" height="18" patternUnits="userSpaceOnUse">
                      <path d="M18 0H0V18" fill="none" stroke="oklch(0.9 0 0)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="300" height="120" fill="url(#grid)" />
                  <path
                    d="M20 90 Q 120 40 200 60 T 270 30"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                  />
                  <circle cx="20" cy="90" r="4" fill="var(--primary)" />
                  <circle cx="270" cy="30" r="5" fill="var(--primary)" />
                </svg>
                <MapPin className="absolute right-4 top-3 h-5 w-5 text-primary" />
              </div>
              <dl className="mt-4 space-y-3 text-[12px]">
                {[
                  ["Engineer", "Mohamed Ahmed"],
                  ["Equipment", "Philips Allura Xper FD10"],
                  ["Location", "Cairo, Egypt"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-bold uppercase tracking-wider text-muted-foreground">
                      {k}
                    </dt>
                    <dd className="mt-0.5 font-semibold text-ink">{v}</dd>
                  </div>
                ))}
                <div>
                  <dt className="font-bold uppercase tracking-wider text-muted-foreground">
                    Priority
                  </dt>
                  <dd className="mt-0.5 flex items-center gap-1.5 font-semibold text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> High
                  </dd>
                </div>
                <div className="flex gap-4 border-t border-border pt-3">
                  <div>
                    <dt className="font-bold uppercase tracking-wider text-muted-foreground">
                      Status
                    </dt>
                    <dd className="mt-0.5 font-semibold text-primary">Travelling</dd>
                  </div>
                  <div>
                    <dt className="font-bold uppercase tracking-wider text-muted-foreground">
                      ETA
                    </dt>
                    <dd className="mt-0.5 font-semibold text-ink">2 Hours</dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesAndPerformance() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto grid max-w-[100rem] gap-6 px-6 lg:grid-cols-[1.5fr_1fr] lg:px-10">
        {/* services grid */}
        <div className="rounded-3xl border border-border bg-white p-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Our Support Services
          </span>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {SUPPORT_SERVICES.map((s) => (
              <div
                key={s.label}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-secondary/40 p-4 text-center transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-primary ring-1 ring-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <span className="text-[11px] font-bold leading-tight text-ink">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* performance */}
        <div className="rounded-3xl border border-border bg-white p-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Our Performance
          </span>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {PERFORMANCE.map((p) => (
              <div
                key={p.label}
                className="rounded-2xl border border-border bg-secondary/40 p-5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <p.icon className="h-4.5 w-4.5" strokeWidth={1.9} />
                </span>
                <div className="mt-3 font-display text-2xl font-extrabold text-ink">
                  {p.value}
                </div>
                <div className="mt-1 text-[11px] font-semibold text-muted-foreground">
                  {p.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SparePartsAndCoverage() {
  const [region, setRegion] = useState<RegionKey>("Middle East");
  return (
    <section className="bg-secondary/40 py-16 lg:py-20">
      <div className="mx-auto grid max-w-[100rem] gap-6 px-6 lg:grid-cols-[1.5fr_1fr] lg:px-10">
        {/* spare parts */}
        <div className="rounded-3xl border border-border bg-white p-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Spare Parts We Supply
          </span>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {SPARE_PARTS.map((label, i) => (
              <div
                key={label}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-secondary/40 p-4 text-center transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-primary ring-1 ring-primary/10">
                  {i === SPARE_PARTS.length - 1 ? (
                    <ArrowRight className="h-5 w-5" />
                  ) : (
                    <PackageSearch className="h-6 w-6" strokeWidth={1.8} />
                  )}
                </span>
                <span className="text-[11px] font-bold text-ink">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* coverage */}
        <div className="rounded-3xl border border-border bg-white p-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Our Coverage
          </span>
          <div className="mt-5 flex flex-wrap gap-4 border-b border-border">
            {(Object.keys(REGIONS) as RegionKey[]).map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`-mb-px border-b-2 pb-2.5 text-[12px] font-bold transition-colors ${
                  region === r
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-ink"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
          <div className="mt-5 grid gap-6 sm:grid-cols-[1fr_1.1fr]">
            <ul className="space-y-2.5">
              {REGIONS[region].map((c) => (
                <li key={c} className="flex items-center gap-2.5 text-[13px] font-semibold text-ink">
                  <span className="inline-block h-3 w-4 rounded-sm bg-primary/80" />
                  {c}
                </li>
              ))}
            </ul>
            <div className="relative h-40 overflow-hidden rounded-xl bg-secondary/50">
              <svg viewBox="0 0 200 140" className="absolute inset-0 h-full w-full">
                <path
                  d="M20,80 Q40,40 80,50 T140,60 T180,50 L180,110 L20,110 Z"
                  fill="oklch(0.92 0.02 30)"
                  stroke="oklch(0.85 0.02 30)"
                />
                <circle cx="90" cy="70" r="5" fill="var(--primary)" opacity="0.85" />
                <circle cx="110" cy="60" r="4" fill="var(--primary)" opacity="0.75" />
                <circle cx="130" cy="75" r="6" fill="var(--primary)" />
                <circle cx="70" cy="85" r="4" fill="var(--primary)" opacity="0.7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlansAndFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="plans" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        {/* plans header row */}
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
              Service Contracts
            </span>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {PLANS.map((p) => {
                const featured = p.tag === "Most Popular";
                return (
                  <div
                    key={p.name}
                    className={`relative rounded-2xl border p-5 transition-all ${
                      featured
                        ? "border-primary bg-primary/[0.03] shadow-[0_30px_60px_-30px_rgba(220,38,38,0.35)]"
                        : "border-border bg-white"
                    }`}
                  >
                    {featured && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                        Most Popular
                      </span>
                    )}
                    <div className="font-display text-lg font-extrabold text-ink">
                      {p.name}
                    </div>
                    <p className="mt-1.5 text-[12px] leading-snug text-muted-foreground">
                      {p.tagline}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-[12px] font-medium text-ink">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 border-t border-border pt-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        Starting from
                      </div>
                      <div className="mt-1 flex items-baseline gap-1">
                        <span className="font-display text-xl font-extrabold text-primary">
                          {p.price}
                        </span>
                        <span className="text-[11px] font-semibold text-muted-foreground">
                          / year
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* faq */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
              Frequently Asked Questions
            </span>
            <div className="mt-6 space-y-2">
              {FAQ.map((f, i) => {
                const open = openIdx === i;
                return (
                  <div
                    key={f.q}
                    className={`rounded-xl border transition-colors ${
                      open ? "border-primary/40 bg-primary/[0.03]" : "border-border bg-white"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIdx(open ? null : i)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                    >
                      <span className="text-[13px] font-semibold text-ink">{f.q}</span>
                      {open ? (
                        <Minus className="h-4 w-4 shrink-0 text-primary" />
                      ) : (
                        <Plus className="h-4 w-4 shrink-0 text-muted-foreground" />
                      )}
                    </button>
                    {open && (
                      <div className="px-4 pb-4 text-[12px] leading-relaxed text-muted-foreground">
                        {f.a}
                      </div>
                    )}
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

function FinalCTABar() {
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-ink p-6 sm:p-8">
          <img
            src={ctaImg}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-15"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/70" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_18px_36px_-12px_var(--primary)]">
                <Headphones className="h-6 w-6" strokeWidth={1.9} />
              </span>
              <div>
                <div className="font-display text-xl font-extrabold text-white sm:text-2xl">
                  Your Equipment Never Stops. Neither Do We.
                </div>
                <div className="mt-1.5 text-[13px] text-white/60">
                  Our engineers are ready to support you anytime, anywhere.
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex h-[48px] items-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-dark"
              >
                Request Immediate Support
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+96265518008"
                className="inline-flex h-[48px] items-center gap-2 rounded-full border border-white/25 px-6 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Call Our Engineers
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AfterSalesPage() {
  return (
    <>
      <Hero />
      <EcosystemAndStatus />
      <ServicesAndPerformance />
      <SparePartsAndCoverage />
      <PlansAndFAQ />
      <FinalCTABar />
    </>
  );
}
