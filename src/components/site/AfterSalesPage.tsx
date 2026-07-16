import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Phone,
  MessageSquare,
  Activity,
  ShieldCheck,
  Wrench,
  Clock,
  Users,
  Package,
  MapPin,
  Radio,
  Truck,
  Cog,
  Gauge,
  CheckCircle2,
  UploadCloud,
  Plus,
  Minus,
  Signal,
  ArrowUpRight,
  Mail,
  Headphones,
  LineChart,
  ClipboardCheck,
  Award,
  Globe2,
  Zap,
} from "lucide-react";
import heroImg from "@/assets/aftersales-hero.jpg";
import remoteImg from "@/assets/aftersales-remote.jpg";
import warehouseImg from "@/assets/aftersales-warehouse.jpg";
import engineeringImg from "@/assets/aftersales-engineering.jpg";
import ctaImg from "@/assets/aftersales-cta.jpg";
import mriImg from "@/assets/sol-mri.jpg";
import ctImg from "@/assets/sol-ct.jpg";
import cathLabImg from "@/assets/hero-cathlab.jpg";
import petctImg from "@/assets/sol-petct.jpg";
import ultrasoundImg from "@/assets/sol-ultrasound.jpg";
import xrayImg from "@/assets/sol-xray.jpg";
import mammoImg from "@/assets/sol-mammo.jpg";
import carmImg from "@/assets/sol-carm.jpg";

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="AbuFarha biomedical engineer servicing medical equipment"
          className="h-full w-full object-cover object-center"
          width={1600}
          height={1100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-ink/50" />
        {/* soft red glow */}
        <div className="pointer-events-none absolute -right-40 top-1/3 h-[36rem] w-[36rem] rounded-full bg-primary/25 blur-[140px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid min-h-[780px] max-w-[100rem] items-center gap-16 px-6 pb-24 pt-32 lg:min-h-[820px] lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-32 lg:pt-40">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            After Sales Support
          </div>
          <h1 className="mt-7 font-display text-[3.25rem] font-extrabold leading-[0.98] tracking-tight sm:text-[4.25rem] lg:text-[6rem]">
            Reliable Support.
            <br />
            <span className="text-primary">Maximum</span>
            <br />
            <span className="text-white/95">Performance.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
            We keep your medical equipment running at peak performance with
            expert care, genuine parts and fast response — every time.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#request"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-white shadow-[0_20px_60px_-18px_rgba(220,38,38,0.9)] transition-all hover:-translate-y-0.5"
            >
              Request Service
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+96264026063"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Headphones className="h-4 w-4" />
              Emergency Support
            </a>
          </div>
        </div>

        {/* Floating service dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-primary/30 via-primary/5 to-transparent blur-3xl" />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.07] p-7 backdrop-blur-2xl shadow-[0_50px_100px_-30px_rgba(0,0,0,0.7)]"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-white/50">
                  Service Dashboard
                </div>
                <div className="mt-1.5 text-base font-semibold text-white">
                  Live · Amman Ops Center
                </div>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                ALL SYSTEMS OK
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3.5">
              {[
                { k: "24/7", v: "Technical Support" },
                { k: "Certified", v: "Biomed Engineers" },
                { k: "100%", v: "Genuine OEM Parts" },
                { k: "< 4 Hrs", v: "Avg Response" },
              ].map(({ k, v }) => (
                <div
                  key={v}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="font-display text-xl font-extrabold text-white">
                    {k}
                  </div>
                  <div className="mt-0.5 text-[11.5px] text-white/60">{v}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5">
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
                <span>Ticket #AF-24017</span>
                <span className="text-primary">EN ROUTE</span>
              </div>
              <div className="mt-2 text-sm font-semibold text-white">
                Siemens Artis Q · King Hussein Cancer Center
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: "5%" }}
                  animate={{ width: "68%" }}
                  transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow"
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-white/55">
                <span>Engineer 12 min away</span>
                <span>ETA 10:42</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- SERVICE OPERATIONS DASHBOARD ---------------- */

function AnimatedNumber({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <span ref={ref}>
      {decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString()}
      {suffix}
    </span>
  );
}

function Sparkline({ data, color = "rgb(220,38,38)" }: { data: number[]; color?: string }) {
  const w = 120;
  const h = 34;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const pts = data
    .map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`)
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-8 w-full">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function OperationsDashboard() {
  return (
    <section className="relative overflow-hidden bg-[#0a0d14] py-24 text-white lg:py-28">
      <div className="pointer-events-none absolute -top-40 left-1/3 h-[32rem] w-[32rem] rounded-full bg-primary/12 blur-[140px]" />

      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              Service Operations
            </div>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Real-time overview of our
              <br />
              support operations.
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-white/70">
            <Signal className="h-3.5 w-3.5 text-emerald-400" />
            Live · Updated every 30s
          </div>
        </div>

        {/* Enterprise dashboard panel */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 lg:p-8">
          <div className="flex items-center justify-between border-b border-white/8 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-2 w-2 items-center justify-center">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              </div>
              <div className="text-[13px] font-semibold text-white">Global Service Console</div>
              <div className="hidden text-[11px] text-white/40 sm:block">/ MEA · Central & South Asia</div>
            </div>
            <div className="hidden gap-2 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/40 sm:flex">
              <span>Today</span>
              <span>·</span>
              <span>7d</span>
              <span>·</span>
              <span className="text-primary">30d</span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              { label: "Active Engineers", value: 46, spark: [30, 38, 34, 41, 39, 44, 46] },
              { label: "Open Tickets", value: 128, spark: [180, 172, 160, 155, 148, 138, 128] },
              { label: "Avg Response", value: 2.4, decimals: 1, suffix: " hrs", spark: [3.2, 3.0, 2.9, 2.7, 2.6, 2.5, 2.4] },
              { label: "Spare Parts", value: 2350, suffix: "+", spark: [2100, 2180, 2210, 2260, 2290, 2320, 2350] },
              { label: "Equipment Health", value: 98, suffix: "%", spark: [95, 96, 96, 97, 97, 98, 98] },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-5"
              >
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-white/50">
                  {m.label}
                </div>
                <div className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white">
                  <AnimatedNumber value={m.value} suffix={m.suffix ?? ""} decimals={m.decimals ?? 0} />
                </div>
                <div className="mt-3">
                  <Sparkline data={m.spark} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* footer strip */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/8 bg-black/30 px-5 py-4 text-[12px] text-white/60">
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span className="font-semibold text-white">10 countries</span> · 26 cities · 500+ installations under active care
            </div>
            <div className="flex items-center gap-2 text-white/50">
              <Clock className="h-3.5 w-3.5" />
              Last sync 12s ago
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- REMOTE DIAGNOSTICS ---------------- */

const REMOTE_FEATURES = [
  {
    icon: Radio,
    t: "Remote Diagnostics",
    d: "OEM-approved secure tunnels let our engineers inspect logs, run service utilities and resolve most issues without a site visit.",
  },
  {
    icon: LineChart,
    t: "Predictive Maintenance",
    d: "Continuous anomaly detection on tube arc counts, coil temperature and image quality metrics — we act before a failure interrupts your schedule.",
  },
  {
    icon: Activity,
    t: "Live Monitoring",
    d: "24/7 telemetry from every connected system, with a full audit trail for compliance and QA reviews.",
  },
];

function RemoteDiagnostics() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-28">
      <div className="mx-auto grid max-w-[100rem] gap-14 px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20 lg:px-10">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/25 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl shadow-[0_50px_100px_-40px_rgba(0,0,0,0.55)]">
            <img
              src={remoteImg}
              alt="Engineer monitoring medical equipment telemetry from operations center"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={1100}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur-md">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Live Telemetry
              </div>
              <div className="text-[12px] font-semibold">128 devices connected</div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
            Remote Diagnostics
          </div>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-[3.25rem]">
            We see problems before your team does.
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-muted-foreground">
            Our operations center continuously monitors device health, image
            quality metrics and system logs across every installation — most
            issues are resolved remotely, before they interrupt a patient
            schedule.
          </p>
          <div className="mt-10 divide-y divide-border/70 border-y border-border/70">
            {REMOTE_FEATURES.map(({ icon: Icon, t, d }, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex items-start gap-6 py-7"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <div className="flex-1">
                  <div className="font-display text-xl font-bold text-foreground">
                    {t}
                  </div>
                  <div className="mt-1.5 text-[14.5px] leading-relaxed text-muted-foreground">
                    {d}
                  </div>
                </div>
                <ArrowUpRight className="mt-2 h-5 w-5 shrink-0 text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SUPPORT JOURNEY ---------------- */

const JOURNEY = [
  { icon: Phone, t: "Problem Reported", d: "Call, email or portal — a case is opened within minutes." },
  { icon: Activity, t: "Remote Diagnosis", d: "Our engineers analyze logs and telemetry to isolate the cause." },
  { icon: Users, t: "Engineer Assigned", d: "Nearest certified engineer is dispatched with the right parts." },
  { icon: Truck, t: "On-Site Arrival", d: "Within our regional response SLA of under 4 hours." },
  { icon: Wrench, t: "Precision Repair", d: "Genuine OEM parts, factory procedures, zero shortcuts." },
  { icon: Gauge, t: "Calibration & QA", d: "Full quality assurance to OEM performance specs." },
  { icon: CheckCircle2, t: "System Back Online", d: "Handover, sign-off and follow-up support." },
];

function SupportJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  return (
    <section className="relative overflow-hidden bg-[#0a0d14] py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
            Support Journey
          </div>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            From problem to performance —
            <br />
            in seven precise steps.
          </h2>
        </div>

        <div ref={ref} className="relative mt-20">
          {/* animated horizontal rail */}
          <div className="pointer-events-none absolute left-0 right-0 top-[72px] hidden h-[2px] overflow-hidden rounded-full bg-white/10 lg:block">
            <motion.div
              initial={{ width: "0%" }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
              className="h-full bg-gradient-to-r from-primary via-primary-glow to-primary"
            />
          </div>

          <div className="grid gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 lg:gap-6">
            {JOURNEY.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                className="relative"
              >
                <div className="relative mx-auto flex h-[144px] w-[144px] items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/25 via-primary/5 to-transparent blur-xl" />
                  <div className="absolute inset-2 rounded-full border border-white/10 bg-[#0f131c]" />
                  <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 3, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-4 rounded-full border border-primary/25"
                  />
                  <div className="relative flex h-[104px] w-[104px] items-center justify-center rounded-full bg-gradient-to-br from-[#141924] to-[#0b0f16] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <s.icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="absolute -top-2 right-2 rounded-full bg-primary px-2.5 py-0.5 text-[10.5px] font-black tracking-widest text-white shadow-[0_8px_20px_-6px_rgba(220,38,38,0.7)]">
                    0{i + 1}
                  </div>
                </div>
                <div className="mt-7 text-center">
                  <div className="font-display text-[16px] font-bold text-white">
                    {s.t}
                  </div>
                  <div className="mt-2 text-[12.5px] leading-relaxed text-white/55">
                    {s.d}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EQUIPMENT GALLERY (Masonry) ---------------- */

const EQUIPMENT = [
  { name: "MRI Systems", img: mriImg, span: "lg:col-span-2 lg:row-span-2 aspect-[4/5] lg:aspect-auto" },
  { name: "CT Scanners", img: ctImg, span: "aspect-[4/3]" },
  { name: "Cath Lab Systems", img: cathLabImg, span: "aspect-[4/3]" },
  { name: "PET / CT", img: petctImg, span: "lg:col-span-2 aspect-[16/9] lg:aspect-[2/1]" },
  { name: "Ultrasound", img: ultrasoundImg, span: "aspect-[4/3]" },
  { name: "X-Ray Systems", img: xrayImg, span: "aspect-[4/3]" },
  { name: "Mammography", img: mammoImg, span: "aspect-[4/3]" },
  { name: "C-Arm Systems", img: carmImg, span: "aspect-[4/3]" },
];

function EquipmentGallery() {
  return (
    <section className="relative bg-background py-24 lg:py-28">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              Equipment We Support
            </div>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Every modality.
              <br />
              Every major brand.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Siemens, Philips, GE Healthcare, Canon, Hologic and more — our
            engineers are certified across the full portfolio of diagnostic and
            interventional systems we deliver.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EQUIPMENT.map((e, i) => (
            <motion.a
              key={e.name}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className={`group relative block overflow-hidden rounded-2xl bg-ink ${e.span}`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={e.img}
                  alt={e.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent transition-opacity duration-500 group-hover:from-ink/95" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div className="font-display text-xl font-bold text-white sm:text-2xl">
                  {e.name}
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-all group-hover:bg-primary">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ENGINEERING EXCELLENCE ---------------- */

function Engineering() {
  const features = [
    { icon: ShieldCheck, t: "OEM Certified Team", d: "Trained directly by Siemens, Philips, GE, Canon and more." },
    { icon: Cog, t: "Factory Procedures", d: "Every service follows original manufacturer specifications." },
    { icon: Users, t: "Clinical Application Support", d: "Hands-on training for radiographers and biomeds on every install." },
    { icon: ClipboardCheck, t: "Full Warranty Coverage", d: "1-year free warranty plus extended service contracts." },
  ];
  const badges = [
    { icon: Award, k: "12+", v: "OEM Certificates" },
    { icon: Clock, k: "< 4h", v: "Response Time" },
    { icon: Users, k: "15+", v: "OEM-Trained Engineers" },
    { icon: Globe2, k: "10", v: "Countries Covered" },
  ];
  return (
    <section className="relative overflow-hidden bg-[#f6f4f0] py-24 lg:py-28">
      <div className="mx-auto grid max-w-[100rem] gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:px-10">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-[0_50px_100px_-40px_rgba(0,0,0,0.35)]">
            <img
              src={engineeringImg}
              alt="AbuFarha biomedical engineering team servicing MRI"
              loading="lazy"
              className="h-full w-full object-cover"
              width={1600}
              height={1100}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-card p-5 shadow-xl sm:block">
            <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              First-Time Fix Rate
            </div>
            <div className="mt-1 font-display text-4xl font-extrabold text-foreground">
              98%
            </div>
            <div className="text-[12px] text-muted-foreground">
              Across MEA installations
            </div>
          </div>
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
            Engineering Excellence
          </div>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-[3.25rem]">
            Our engineers.
            <br />
            Your reliability.
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-muted-foreground">
            A field team of 15+ dedicated biomedical engineers — trained
            directly by OEMs, backed by a regional operations center, and
            trusted by leading hospitals since 1999.
          </p>

          {/* vertical feature list */}
          <div className="mt-8 space-y-5">
            {features.map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-[15px] font-bold text-foreground">{t}</div>
                  <div className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">
                    {d}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* small stat badges */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {badges.map(({ icon: Icon, k, v }) => (
              <div key={v} className="rounded-xl border border-border bg-white px-3 py-3 text-center">
                <Icon className="mx-auto h-4 w-4 text-primary" />
                <div className="mt-2 font-display text-lg font-extrabold text-foreground">{k}</div>
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- OEM PARTS & LOGISTICS (interactive modules) ---------------- */

const PART_MODULES = [
  { id: "mri", label: "MRI Parts", count: "620+", note: "Coils, gradient amps, RF components" },
  { id: "ct", label: "CT Parts", count: "540+", note: "X-ray tubes, detectors, DAS boards" },
  { id: "cath", label: "Cath Lab Parts", count: "410+", note: "Flat panels, generators, table drives" },
  { id: "petct", label: "PET / CT Parts", count: "280+", note: "PMT modules, crystals, cooling" },
  { id: "cal", label: "Calibration Kits", count: "500+", note: "Phantoms, QA jigs, dosimetry" },
];

function PartsLogistics() {
  const [active, setActive] = useState(PART_MODULES[0].id);
  const activeModule = PART_MODULES.find((m) => m.id === active)!;
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="grid lg:grid-cols-[1.2fr_1fr]">
        <div className="relative min-h-[520px] lg:min-h-[720px]">
          <img
            src={warehouseImg}
            alt="AbuFarha regional spare parts warehouse"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            width={1600}
            height={1100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-ink" />
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-8 p-10">
            {[
              { k: "2,350+", v: "Parts in stock" },
              { k: "48 hrs", v: "Regional dispatch" },
              { k: "100%", v: "OEM certified" },
            ].map((x) => (
              <div key={x.v}>
                <div className="font-display text-4xl font-extrabold">{x.k}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/60">
                  {x.v}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center bg-[#0a0d14] px-6 py-20 lg:px-14 lg:py-24">
          <div className="w-full">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              OEM Parts & Logistics
            </div>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Genuine parts.
              <br />
              Ready when you need them.
            </h2>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-white/70">
              A dedicated regional inventory across our Amman and Cairo hubs —
              select a module to see live availability.
            </p>

            {/* interactive module tabs */}
            <div className="mt-8 flex flex-wrap gap-2">
              {PART_MODULES.map((m) => {
                const isActive = m.id === active;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setActive(m.id)}
                    className={`rounded-full border px-4 py-2 text-[12px] font-semibold transition-all ${
                      isActive
                        ? "border-primary bg-primary text-white shadow-[0_10px_30px_-12px_rgba(220,38,38,0.8)]"
                        : "border-white/12 bg-white/[0.03] text-white/70 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {m.label}
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeModule.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-white/50">
                    In Regional Stock
                  </div>
                  <div className="mt-1 font-display text-4xl font-extrabold text-white">
                    {activeModule.count}
                  </div>
                  <div className="mt-1 text-[13px] text-white/60">{activeModule.note}</div>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Package className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-5 flex items-center gap-4 border-t border-white/10 pt-4 text-[12px] text-white/60">
                <div className="flex items-center gap-1.5">
                  <Truck className="h-3.5 w-3.5 text-primary" /> 48h dispatch
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" /> OEM sealed
                </div>
                <div className="flex items-center gap-1.5">
                  <Gauge className="h-3.5 w-3.5 text-primary" /> QA verified
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- REQUEST SERVICE ---------------- */

const CONTACT_CHANNELS = [
  { icon: Phone, label: "Emergency Hotline", value: "+962 79 974 1318", href: "tel:+962799741318", accent: "text-primary" },
  { icon: MessageSquare, label: "WhatsApp Support", value: "+962 79 974 1318", href: "https://wa.me/962799741318", accent: "text-emerald-400" },
  { icon: Mail, label: "Email Support", value: "support@abufarhamedical.com", href: "mailto:support@abufarhamedical.com", accent: "text-sky-400" },
];

const REASONS = [
  "Emergency Breakdown",
  "Preventive Maintenance",
  "Spare Parts Request",
  "Installation Support",
  "Clinical Training",
  "Warranty Assistance",
];

function SupportCenterPanel() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink via-[#0f131c] to-ink p-7 text-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.5)] lg:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
      <div className="relative">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Support Center
        </div>
        <div className="mt-3 font-display text-2xl font-extrabold">
          We&apos;re here 24/7.
        </div>
        <p className="mt-2 text-[13px] leading-relaxed text-white/60">
          Reach an engineer instantly through any channel below.
        </p>

        {/* Contact channels */}
        <div className="mt-6 space-y-3">
          {CONTACT_CHANNELS.map(({ icon: Icon, label, value, href, accent }) => (
            <a
              key={label}
              href={href}
              className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-3.5 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] ${accent}`}>
                <Icon className="h-4.5 w-4.5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/45">
                  {label}
                </div>
                <div className="truncate text-[13.5px] font-semibold text-white">
                  {value}
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </a>
          ))}
        </div>

        {/* Hours + response */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
            <div className="flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/50">
              <Clock className="h-3 w-3" /> Support Hours
            </div>
            <div className="mt-1.5 text-[14px] font-bold text-white">24 / 7</div>
            <div className="text-[11px] text-white/50">Year-round coverage</div>
          </div>
          <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
            <div className="flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/50">
              <Zap className="h-3 w-3" /> Avg Response
            </div>
            <div className="mt-1.5 text-[14px] font-bold text-white">&lt; 4 hrs</div>
            <div className="text-[11px] text-white/50">Regional SLA</div>
          </div>
        </div>

        {/* Why hospitals contact us */}
        <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.02] p-5">
          <div className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-white/50">
            Why Hospitals Contact Us
          </div>
          <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {REASONS.map((r) => (
              <li key={r} className="flex items-center gap-2 text-[13px] text-white/80">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <CheckCircle2 className="h-3 w-3" strokeWidth={2.5} />
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom emergency card */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-6">
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/30 blur-2xl" />
          <div className="relative">
            <div className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.24em] text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              24/7 Technical Support
            </div>
            <div className="mt-3 font-display text-xl font-extrabold text-white">
              Need immediate help?
            </div>
            <div className="mt-1 text-[13px] text-white/70">
              Call our engineer now — always on standby.
            </div>
            <div className="mt-5 space-y-2.5">
              <a
                href="tel:+962799741318"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-[14px] font-bold text-white shadow-[0_18px_40px_-16px_rgba(220,38,38,0.9)] transition-all hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" /> Call +962 79 974 1318
              </a>
              <a
                href="https://wa.me/962799741318"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-5 py-3 text-[13.5px] font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-emerald-500/20"
              >
                <MessageSquare className="h-4 w-4" /> WhatsApp Engineer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- image upload ---------- */

type UploadItem = {
  id: string;
  file: File;
  preview: string;
  progress: number;
};

const MAX_SIZE = 5 * 1024 * 1024;
const ACCEPT = ["image/jpeg", "image/png", "image/webp"];

function ImageUpload({
  items,
  setItems,
}: {
  items: UploadItem[];
  setItems: React.Dispatch<React.SetStateAction<UploadItem[]>>;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addFiles = (files: FileList | File[]) => {
    setError(null);
    const arr = Array.from(files);
    const accepted: UploadItem[] = [];
    for (const file of arr) {
      if (!ACCEPT.includes(file.type)) {
        setError(`"${file.name}" — unsupported format. Use JPG, PNG or WEBP.`);
        continue;
      }
      if (file.size > MAX_SIZE) {
        setError(`"${file.name}" is larger than 5MB.`);
        continue;
      }
      accepted.push({
        id: `${file.name}-${file.size}-${Date.now()}-${Math.random()}`,
        file,
        preview: URL.createObjectURL(file),
        progress: 0,
      });
    }
    if (accepted.length === 0) return;
    setItems((prev) => [...prev, ...accepted]);
    accepted.forEach((it) => {
      const interval = window.setInterval(() => {
        setItems((prev) =>
          prev.map((p) =>
            p.id === it.id ? { ...p, progress: Math.min(100, p.progress + 12 + Math.random() * 10) } : p,
          ),
        );
      }, 140);
      window.setTimeout(() => window.clearInterval(interval), 1400);
    });
  };

  const remove = (id: string) => {
    setItems((prev) => {
      const target = prev.find((p) => p.id === id);
      if (target) URL.revokeObjectURL(target.preview);
      return prev.filter((p) => p.id !== id);
    });
  };

  useEffect(() => {
    return () => {
      items.forEach((i) => URL.revokeObjectURL(i.preview));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
        }}
        className={`flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-8 text-center transition-colors ${
          dragOver ? "border-primary bg-primary/5" : "border-border bg-background/60 hover:border-primary/60"
        }`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <UploadCloud className="h-6 w-6" />
        </div>
        <div className="mt-3 text-sm font-semibold text-foreground">
          Click or drag &amp; drop images
        </div>
        <div className="mt-1 text-[12px] text-muted-foreground">
          JPG, PNG or WEBP · up to 5MB each · multiple allowed
        </div>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple
        className="hidden"
        onChange={(e) => {
          if (e.target.files) addFiles(e.target.files);
          e.target.value = "";
        }}
      />

      {error && (
        <div className="mt-3 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-[12.5px] font-medium text-destructive">
          {error}
        </div>
      )}

      {items.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.id}
              className="group relative overflow-hidden rounded-xl border border-border bg-background"
            >
              <div className="aspect-square w-full overflow-hidden">
                <img src={it.preview} alt={it.file.name} className="h-full w-full object-cover" />
              </div>
              {it.progress < 100 && (
                <div className="absolute inset-x-0 bottom-0 h-1 bg-black/20">
                  <div
                    className="h-full bg-primary transition-[width] duration-200"
                    style={{ width: `${it.progress}%` }}
                  />
                </div>
              )}
              {it.progress >= 100 && (
                <div className="absolute bottom-1 left-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white shadow">
                  <CheckCircle2 className="h-3 w-3" strokeWidth={3} />
                </div>
              )}
              <button
                type="button"
                onClick={() => remove(it.id)}
                aria-label={`Remove ${it.file.name}`}
                className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-ink/80 text-white opacity-90 transition-all hover:bg-primary"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- form ---------- */

const requestSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  phone: z.string().trim().min(6, "Please enter a valid phone number.").max(30),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  facility: z.string().trim().min(2, "Please enter your facility name.").max(150),
  equipment: z.string().min(1, "Please select the equipment type."),
  serial: z.string().max(80).optional(),
  description: z.string().trim().min(10, "Please describe the issue (10+ characters).").max(1500),
});

type FormValues = z.infer<typeof requestSchema>;
type FieldKey = keyof FormValues;
type Errors = Partial<Record<FieldKey, string>>;

function RequestService() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    phone: "",
    email: "",
    facility: "",
    equipment: "",
    serial: "",
    description: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [images, setImages] = useState<UploadItem[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fieldRefs = useRef<Record<string, HTMLElement | null>>({});

  const set = (k: FieldKey, v: string) => {
    setValues((prev) => ({ ...prev, [k]: v }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = requestSchema.safeParse(values);
    if (!result.success) {
      const errs: Errors = {};
      const order: FieldKey[] = ["name", "phone", "email", "facility", "equipment", "serial", "description"];
      for (const issue of result.error.issues) {
        const key = issue.path[0] as FieldKey;
        if (!errs[key]) errs[key] = issue.message;
      }
      setErrors(errs);
      toast.error("Please fix the highlighted fields.");
      for (const k of order) {
        if (errs[k]) {
          fieldRefs.current[k]?.focus();
          break;
        }
      }
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Request submitted — our team will reach out within 1 business hour.");
  };

  const reset = () => {
    setValues({ name: "", phone: "", email: "", facility: "", equipment: "", serial: "", description: "" });
    setErrors({});
    images.forEach((i) => URL.revokeObjectURL(i.preview));
    setImages([]);
    setSubmitted(false);
  };

  const labelCls = "text-[12.5px] font-semibold text-foreground";
  const inputCls =
    "mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10";
  const errCls = "border-destructive focus:border-destructive focus:ring-destructive/15";

  return (
    <section id="request" className="relative overflow-hidden bg-background py-24 lg:py-28">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-[80rem] px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
            Request Service
          </div>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Tell us what you need.
            <br />
            We&apos;ll take care of the rest.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Submit a request and our support team will respond within one
            business hour — 24/7 for critical cases.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SupportCenterPanel />

          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/80 p-8 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:p-10">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
                  <CheckCircle2 className="h-8 w-8" strokeWidth={2} />
                </div>
                <div className="mt-6 font-display text-2xl font-extrabold text-foreground">
                  Request received.
                </div>
                <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-muted-foreground">
                  A service coordinator has been notified and will contact you
                  within one business hour. For critical downtime, please also
                  call our 24/7 emergency line.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="tel:+962799741318"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-[0_16px_40px_-16px_rgba(220,38,38,0.8)]"
                  >
                    <Phone className="h-4 w-4" /> Call Emergency Line
                  </a>
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold text-foreground hover:bg-muted"
                  >
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form className="grid gap-6 sm:grid-cols-2" onSubmit={onSubmit} noValidate>
                <label className="block">
                  <span className={labelCls}>
                    Full Name <span className="text-primary">*</span>
                  </span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.name = el;
                    }}
                    value={values.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Enter your full name"
                    className={`${inputCls} ${errors.name ? errCls : ""}`}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <span className="mt-1.5 block text-[12px] font-medium text-destructive">{errors.name}</span>}
                </label>

                <label className="block">
                  <span className={labelCls}>
                    Phone Number <span className="text-primary">*</span>
                  </span>
                  <div className="mt-2">
                    <PhoneField
                      value={values.phone}
                      onChange={(v) => set("phone", v)}
                      hasError={!!errors.phone}
                    />
                  </div>
                  {errors.phone && <span className="mt-1.5 block text-[12px] font-medium text-destructive">{errors.phone}</span>}
                </label>

                <label className="block">
                  <span className={labelCls}>
                    Email Address <span className="text-primary">*</span>
                  </span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.email = el;
                    }}
                    type="email"
                    value={values.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="Enter email address"
                    className={`${inputCls} ${errors.email ? errCls : ""}`}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <span className="mt-1.5 block text-[12px] font-medium text-destructive">{errors.email}</span>}
                </label>

                <label className="block">
                  <span className={labelCls}>
                    Facility / Hospital <span className="text-primary">*</span>
                  </span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.facility = el;
                    }}
                    value={values.facility}
                    onChange={(e) => set("facility", e.target.value)}
                    placeholder="Enter facility name"
                    className={`${inputCls} ${errors.facility ? errCls : ""}`}
                    aria-invalid={!!errors.facility}
                  />
                  {errors.facility && <span className="mt-1.5 block text-[12px] font-medium text-destructive">{errors.facility}</span>}
                </label>

                <label className="block">
                  <span className={labelCls}>
                    Equipment Type <span className="text-primary">*</span>
                  </span>
                  <select
                    ref={(el) => {
                      fieldRefs.current.equipment = el;
                    }}
                    value={values.equipment}
                    onChange={(e) => set("equipment", e.target.value)}
                    className={`${inputCls} px-3 ${errors.equipment ? errCls : ""}`}
                    aria-invalid={!!errors.equipment}
                  >
                    <option value="" disabled>Select equipment</option>
                    {EQUIPMENT.map((e) => (
                      <option key={e.name}>{e.name}</option>
                    ))}
                  </select>
                  {errors.equipment && <span className="mt-1.5 block text-[12px] font-medium text-destructive">{errors.equipment}</span>}
                </label>

                <label className="block">
                  <span className={labelCls}>Serial Number</span>
                  <input
                    value={values.serial ?? ""}
                    onChange={(e) => set("serial", e.target.value)}
                    placeholder="Enter serial number"
                    className={inputCls}
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className={labelCls}>
                    Problem Description <span className="text-primary">*</span>
                  </span>
                  <textarea
                    ref={(el) => {
                      fieldRefs.current.description = el;
                    }}
                    rows={5}
                    value={values.description}
                    onChange={(e) => set("description", e.target.value)}
                    placeholder="Describe the issue in detail — symptoms, error codes, when it started"
                    className={`mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 ${errors.description ? errCls : ""}`}
                    aria-invalid={!!errors.description}
                  />
                  {errors.description && <span className="mt-1.5 block text-[12px] font-medium text-destructive">{errors.description}</span>}
                </label>

                <div className="block sm:col-span-2">
                  <span className={labelCls}>Upload Images (Optional)</span>
                  <div className="mt-2">
                    <ImageUpload items={images} setItems={setImages} />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-[0_18px_50px_-18px_rgba(220,38,38,0.7)] transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ / KNOWLEDGE CENTER ---------------- */

const FAQS: [string, string][] = [
  ["How can I request a service?", "Submit the form above, call our 24/7 emergency line or email support@abufarhamedical.com. A case is opened immediately and an engineer is assigned within minutes."],
  ["How fast can an engineer reach our site?", "Our regional response SLA is under 4 hours for critical downtime across Jordan, Egypt and the wider MEA region."],
  ["What is the warranty coverage?", "Every installation includes a 1-year free warranty covering parts and labor, with extended service contracts available."],
  ["Do you provide training for our staff?", "Yes — clinical and biomedical training is included with every installation and available on demand."],
  ["Do you provide preventive maintenance?", "Yes. Scheduled PM visits are included in our service contracts and can be booked ad-hoc for any supported equipment."],
  ["Do you supply spare parts for all models?", "We stock genuine OEM parts for every brand and modality we install, and can source rare parts through our OEM partners."],
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative bg-[#f6f4f0] py-24 lg:py-32">
      <div className="mx-auto max-w-[80rem] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              Knowledge Center
            </div>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-[3.5rem]">
              Everything
              <br />
              you need
              <br />
              to know.
            </h2>
            <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-muted-foreground">
              Answers to the most common questions from biomedical engineers,
              procurement teams and hospital directors.
            </p>

            {/* still need help */}
            <div className="mt-10 rounded-2xl border border-border bg-white p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                Still Need Help?
              </div>
              <div className="mt-2 font-display text-xl font-bold text-foreground">
                Talk to an engineer directly.
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                Our support engineers are on call around the clock for any
                technical or clinical question.
              </p>
              <a
                href="tel:+96264026063"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[13px] font-bold text-white transition-all hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" /> Talk to an Engineer
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {FAQS.map(([q, a], i) => {
              const isOpen = open === i;
              return (
                <div
                  key={q}
                  className={`overflow-hidden rounded-2xl border transition-all ${
                    isOpen ? "border-primary/30 bg-card shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]" : "border-border bg-card/70"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                  >
                    <span className="text-[17px] font-semibold text-foreground sm:text-[18px]">
                      {q}
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen ? "bg-primary text-white" : "bg-muted text-foreground"
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-7 pb-7 text-[15px] leading-relaxed text-muted-foreground">
                      {a}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <img
          src={ctaImg}
          alt=""
          className="h-full w-full object-cover object-center opacity-55"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        <div className="pointer-events-none absolute -right-32 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
      </div>
      <div className="relative mx-auto flex max-w-[100rem] flex-col items-start gap-10 px-6 py-24 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
            24/7 Technical Support
          </div>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-[4.25rem]">
            Need immediate
            <br /> technical support?
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
            Our team is ready to help you around the clock — from remote
            diagnostics to on-site emergency repair.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href="#request"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-white shadow-[0_18px_50px_-18px_rgba(220,38,38,0.85)] transition-all hover:-translate-y-0.5"
          >
            Request Service
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+96264026063"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> Call Engineer
          </a>
          <a
            href="https://wa.me/962799741318"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-emerald-500/20"
          >
            <MessageSquare className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PAGE ---------------- */

export function AfterSalesPage() {
  return (
    <>
      <Hero />
      <OperationsDashboard />
      <RemoteDiagnostics />
      <SupportJourney />
      <EquipmentGallery />
      <Engineering />
      <PartsLogistics />
      <RequestService />
      <FAQ />
      <FinalCTA />
    </>
  );
}
