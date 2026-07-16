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
  GraduationCap,
  Gauge,
  MonitorSmartphone,
  Cog,
  Boxes,
  Stethoscope,
  Cpu,
  MessageSquare,
  CheckCircle2,
  Circle,
  MapPin,
  Phone,
  Plus,
  Minus,
  Globe,
  Activity,
  FileText,
  ClipboardList,
  UserCheck,
  Truck,
  ShieldCheck as ShieldIcon,
  ArrowUpRight,
} from "lucide-react";
import heroImg from "@/assets/aftersales-hero.jpg";
import ctaImg from "@/assets/aftersales-cta.jpg";
import imgCath from "@/assets/sol-carm.jpg";
import imgMri from "@/assets/sol-mri.jpg";
import imgCt from "@/assets/sol-ct.jpg";
import imgUs from "@/assets/sol-ultrasound.jpg";
import imgMammo from "@/assets/sol-mammo.jpg";
import imgXray from "@/assets/sol-xray.jpg";
import imgPet from "@/assets/sol-petct.jpg";
import imgOr from "@/assets/sol-or.jpg";
import imgDexa from "@/assets/sol-dexa.jpg";
import imgDes from "@/assets/sol-des.jpg";

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
  { label: "Calibration & Quality Assurance", icon: Gauge, angle: 90 },
  { label: "Clinical Training", icon: GraduationCap, angle: 150 },
  { label: "Remote Diagnostics", icon: MonitorSmartphone, angle: 210 },
];

const LIVE_STATUS = [
  { label: "Service Request Created", state: "done" },
  { label: "Engineer Assigned", state: "done" },
  { label: "Engineer En Route", state: "active" },
  { label: "On Site", state: "todo" },
  { label: "Repair In Progress", state: "todo" },
  { label: "Calibration & Testing", state: "todo" },
  { label: "Clinical Validation", state: "todo" },
  { label: "Service Completed", state: "todo" },
] as const;

const SUPPORT_SERVICES = [
  { label: "Preventive Maintenance", img: imgCath },
  { label: "Emergency Support", img: imgOr },
  { label: "Corrective Maintenance", img: imgCt },
  { label: "Spare Parts Supply", img: imgXray },
  { label: "Calibration & QA", img: imgMri },
  { label: "Clinical Training", img: imgUs },
  { label: "Biomedical Engineering", img: imgPet },
  { label: "Technical Consultation", img: imgMammo },
];

const PERFORMANCE = [
  { icon: Activity, value: "98%", label: "First-Time Fix Rate" },
  { icon: Clock, value: "24/7", label: "Availability" },
  { icon: Globe, value: "10+", label: "Countries Covered" },
  { icon: Users, value: "15+", label: "Biomedical Engineers" },
];

const SPARE_PARTS = [
  { label: "Cath Lab Parts", img: imgCath },
  { label: "MRI Parts", img: imgMri },
  { label: "CT Parts", img: imgCt },
  { label: "Ultrasound Parts", img: imgUs },
  { label: "Monitors & Displays", img: imgOr },
  { label: "Injectors", img: imgDes },
  { label: "UPS & Power Systems", img: imgDexa },
  { label: "And More", img: null },
];

const REGIONS = {
  "Middle East": [
    { name: "Jordan", flag: "🇯🇴" },
    { name: "Iraq", flag: "🇮🇶" },
    { name: "Syria", flag: "🇸🇾" },
    { name: "Yemen", flag: "🇾🇪" },
    { name: "Egypt", flag: "🇪🇬" },
    { name: "Libya", flag: "🇱🇾" },
  ],
  Africa: [
    { name: "Egypt", flag: "🇪🇬" },
    { name: "Libya", flag: "🇱🇾" },
    { name: "Somalia", flag: "🇸🇴" },
    { name: "Somaliland", flag: "🏳️" },
  ],
  "Central Asia": [{ name: "Uzbekistan", flag: "🇺🇿" }],
  "South Asia": [{ name: "Bangladesh", flag: "🇧🇩" }],
} as const;

type RegionKey = keyof typeof REGIONS;

const PROCESS = [
  { n: 1, label: "Submit Request", icon: FileText },
  { n: 2, label: "Technical Assessment", icon: ClipboardList },
  { n: 3, label: "Engineer Assignment", icon: UserCheck },
  { n: 4, label: "On-site Visit", icon: Truck },
  { n: 5, label: "Repair & Calibration", icon: Wrench },
  { n: 6, label: "Performance Verification", icon: Gauge },
  { n: 7, label: "Follow-up Support", icon: ShieldIcon },
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

function polar(angleDeg: number, radiusPct: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: 50 + radiusPct * Math.cos(rad), y: 50 + radiusPct * Math.sin(rad) };
}

/* ---------- sections ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-[100rem] gap-10 px-6 py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-10 lg:py-16">
        {/* left */}
        <div className="relative z-10 flex flex-col justify-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
            After Sales Support
          </span>
          <h1 className="mt-5 font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[3.2rem]">
            Keeping Your
            <br />
            Equipment Performing
            <br />
            at <span className="text-primary">Its Best.</span>
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
              href="#services"
              className="inline-flex h-[52px] items-center gap-2 rounded-full border border-border bg-white px-7 text-sm font-bold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              Explore Service Plans
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* stat strip */}
          <div className="mt-10 grid gap-2 rounded-2xl border border-border bg-white p-3 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)] sm:grid-cols-4">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-3 rounded-xl px-3 py-2.5">
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
          </div>

          {/* live ticket card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
            className="absolute right-4 top-6 w-[280px] rounded-2xl border border-border bg-white p-5 shadow-[0_30px_60px_-25px_rgba(15,23,42,0.35)] sm:right-6 lg:-right-4"
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
            <div className="mt-3 text-[13px] font-semibold text-ink">Ticket #AF-24017</div>
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
  return (
    <section className="bg-secondary/40 py-14 lg:py-16">
      <div className="mx-auto grid max-w-[100rem] gap-6 px-6 lg:grid-cols-2 lg:px-10">
        {/* ecosystem hub */}
        <div className="rounded-3xl border border-border bg-white p-8 lg:p-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Our Service Ecosystem
          </span>
          <div className="relative mx-auto mt-8 aspect-square max-w-[460px]">
            {/* connecting spokes SVG */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
              {ECOSYSTEM.map((s) => {
                const p = polar(s.angle, 34);
                return (
                  <line
                    key={s.label}
                    x1="50"
                    y1="50"
                    x2={p.x}
                    y2={p.y}
                    stroke="var(--primary)"
                    strokeOpacity="0.25"
                    strokeWidth="0.3"
                    strokeDasharray="1 1.2"
                  />
                );
              })}
              {ECOSYSTEM.map((s) => {
                const p = polar(s.angle, 34);
                return <circle key={s.label} cx={p.x} cy={p.y} r="0.9" fill="var(--primary)" />;
              })}
            </svg>
            {/* center hub */}
            <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-primary/20 bg-white shadow-[0_20px_40px_-20px_rgba(15,23,42,0.25)]">
              <span className="font-display text-sm font-extrabold text-ink">
                Abu<span className="text-primary">Farha</span>
              </span>
              <span className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Medical Equipment
              </span>
            </div>
            {/* spokes */}
            {ECOSYSTEM.map((s) => {
              const p = polar(s.angle, 42);
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-[110px] -translate-x-1/2 -translate-y-1/2 text-center"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-primary/25 bg-white text-primary shadow-[0_10px_25px_-14px_rgba(15,23,42,0.3)]">
                    <s.icon className="h-5 w-5" strokeWidth={1.9} />
                  </span>
                  <span className="mt-1.5 block text-[11px] font-bold leading-tight text-ink">
                    {s.label}
                  </span>
                </motion.div>
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
          <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_1.15fr]">
            {/* timeline */}
            <ol className="relative space-y-3.5">
              {LIVE_STATUS.map((s) => {
                const Icon =
                  s.state === "done" ? CheckCircle2 : s.state === "active" ? Activity : Circle;
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
            <div className="rounded-2xl border border-border bg-white p-4">
              <div className="relative h-28 overflow-hidden rounded-xl bg-secondary/50">
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
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="20" cy="90" r="4" fill="var(--primary)" />
                </svg>
                <MapPin className="absolute right-4 top-3 h-6 w-6 text-primary drop-shadow" />
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
                <div className="flex gap-6 border-t border-border pt-3">
                  <div>
                    <dt className="font-bold uppercase tracking-wider text-muted-foreground">
                      Status
                    </dt>
                    <dd className="mt-0.5 font-semibold text-primary">Travelling</dd>
                  </div>
                  <div>
                    <dt className="font-bold uppercase tracking-wider text-muted-foreground">
                      Estimated Arrival
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
    <section id="services" className="bg-white py-14 lg:py-16">
      <div className="mx-auto grid max-w-[100rem] gap-6 px-6 lg:grid-cols-[1.7fr_1fr] lg:px-10">
        {/* services grid */}
        <div className="rounded-3xl border border-border bg-white p-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Our Support Services
          </span>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {SUPPORT_SERVICES.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -3 }}
                className="group flex flex-col items-center gap-2 text-center"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-secondary/50 ring-1 ring-border">
                  <img
                    src={s.img}
                    alt={s.label}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <span className="text-[11px] font-bold leading-tight text-ink">{s.label}</span>
              </motion.div>
            ))}
          </div>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-bold text-primary hover:underline"
          >
            View All Services <ArrowRight className="h-3.5 w-3.5" />
          </a>
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
                className="rounded-2xl border border-border bg-secondary/30 p-5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <p.icon className="h-4 w-4" strokeWidth={1.9} />
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
    <section className="bg-secondary/40 py-14 lg:py-16">
      <div className="mx-auto grid max-w-[100rem] gap-6 px-6 lg:grid-cols-[1.7fr_1fr] lg:px-10">
        {/* spare parts */}
        <div className="rounded-3xl border border-border bg-white p-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Spare Parts We Supply
          </span>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {SPARE_PARTS.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -3 }}
                className="group flex flex-col items-center gap-2 text-center"
              >
                <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl bg-secondary/50 ring-1 ring-border">
                  {s.img ? (
                    <img
                      src={s.img}
                      alt={s.label}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <ArrowUpRight className="h-8 w-8 text-primary" />
                  )}
                </div>
                <span className="text-[11px] font-bold leading-tight text-ink">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* coverage */}
        <div className="rounded-3xl border border-border bg-white p-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Our Coverage
          </span>
          <div className="mt-5 flex flex-wrap gap-5 border-b border-border">
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
          <div className="mt-5 grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
            <ul className="space-y-2.5">
              {REGIONS[region].map((c) => (
                <li
                  key={c.name}
                  className="flex items-center gap-2.5 text-[13px] font-semibold text-ink"
                >
                  <span className="text-base leading-none">{c.flag}</span>
                  {c.name}
                </li>
              ))}
            </ul>
            <div className="relative h-40 overflow-hidden rounded-xl bg-secondary/50 ring-1 ring-border">
              <svg viewBox="0 0 200 140" className="absolute inset-0 h-full w-full">
                <path
                  d="M20,80 Q40,40 80,50 T140,60 T180,50 L180,110 L20,110 Z"
                  fill="oklch(0.94 0.02 30)"
                  stroke="oklch(0.85 0.05 30)"
                  strokeWidth="0.6"
                />
                <path
                  d="M60,60 L100,50 L140,55 L160,70 L150,95 L110,100 L70,90 Z"
                  fill="var(--primary)"
                  opacity="0.55"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportProcess() {
  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="rounded-3xl border border-border bg-white p-8 lg:p-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Our Support Process
          </span>
          <div className="relative mt-10">
            {/* connecting line */}
            <div className="absolute left-[6%] right-[6%] top-7 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <ol className="relative grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7">
              {PROCESS.map((p, i) => (
                <motion.li
                  key={p.n}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-primary/25 bg-white text-primary shadow-[0_14px_28px_-14px_rgba(15,23,42,0.25)]">
                    <p.icon className="h-5 w-5" strokeWidth={1.9} />
                    <span className="absolute -bottom-1.5 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                      {p.n}
                    </span>
                  </div>
                  <span className="mt-4 text-[12px] font-bold leading-tight text-ink">
                    {p.label}
                  </span>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="bg-white pb-14 lg:pb-16">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-border bg-white p-8">
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
                      open
                        ? "border-primary/40 bg-primary/[0.03]"
                        : "border-border bg-white"
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
          <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/40">
            <img
              src={heroImg}
              alt="AbuFarha engineer performing on-site diagnostics"
              className="h-full min-h-[320px] w-full object-cover"
              loading="lazy"
            />
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
      <SupportProcess />
      <FAQSection />
      <FinalCTABar />
    </>
  );
}
