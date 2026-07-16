import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Headphones,
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
  ClipboardCheck,
  Truck,
  Cog,
  Gauge,
  CheckCircle2,
  UploadCloud,
  Plus,
  Minus,
  Zap,
  Signal,
  ArrowUpRight,
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
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/40" />
      </div>

      <div className="relative mx-auto grid max-w-[100rem] gap-16 px-6 pb-24 pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:pb-32 lg:pt-36">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            After Sales Support
          </div>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.25rem]">
            Reliable Support.
            <br />
            <span className="text-primary">Maximum</span>{" "}
            <span className="text-white/95">Performance.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            We keep your medical equipment running at peak performance with
            expert care, genuine parts and fast response — every time.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#request"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-white shadow-[0_18px_50px_-18px_rgba(220,38,38,0.85)] transition-all hover:-translate-y-0.5"
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
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/20 via-primary/0 to-white/0 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-white/50">
                  Service Dashboard
                </div>
                <div className="mt-1 text-sm font-semibold text-white">
                  Live · Amman Ops Center
                </div>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                ALL SYSTEMS OK
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { icon: Headphones, k: "24/7", v: "Technical Support" },
                { icon: ShieldCheck, k: "Certified", v: "Biomed Engineers" },
                { icon: Package, k: "100%", v: "Genuine OEM Parts" },
                { icon: Clock, k: "< 4 Hrs", v: "Avg Response" },
              ].map(({ icon: Icon, k, v }) => (
                <div
                  key={v}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <div className="mt-2 font-display text-lg font-extrabold text-white">
                    {k}
                  </div>
                  <div className="text-[11.5px] text-white/60">{v}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-4">
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                <span>Ticket #AF-24017</span>
                <span className="text-primary">EN ROUTE</span>
              </div>
              <div className="mt-2 text-sm font-semibold text-white">
                Siemens Artis Q · King Hussein Cancer Center
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: "5%" }}
                  animate={{ width: "68%" }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow"
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-white/50">
                <span>Engineer 12 min away</span>
                <span>ETA 10:42</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMMAND CENTER ---------------- */

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
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
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

const REGION_PINS = [
  { name: "Jordan", x: 58, y: 42 },
  { name: "Egypt", x: 54, y: 48 },
  { name: "Iraq", x: 63, y: 40 },
  { name: "Syria", x: 58, y: 36 },
  { name: "Libya", x: 48, y: 48 },
  { name: "Yemen", x: 66, y: 60 },
  { name: "Somalia", x: 71, y: 66 },
  { name: "Uzbekistan", x: 78, y: 30 },
  { name: "Bangladesh", x: 88, y: 50 },
];

function CommandCenter() {
  return (
    <section className="relative overflow-hidden bg-[#0a0d14] py-24 text-white lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="pointer-events-none absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />

      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              Service Command Center
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

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_1.2fr]">
          {/* Metric cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: 128, s: "", label: "Active Service Cases", note: "Across all regions", icon: Activity },
              { k: 46, s: "", label: "Engineers Available", note: "Ready to respond", icon: Users },
              { k: 1842, s: "", label: "Equipment Online", note: "Under our care", icon: Cog },
              { k: 2350, s: "+", label: "Spare Parts Ready", note: "In regional stock", icon: Package },
            ].map(({ k, s, label, note, icon: Icon }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-5"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <Icon className="h-4 w-4 text-primary" />
                <div className="mt-4 font-display text-4xl font-extrabold tracking-tight">
                  <AnimatedNumber value={k} suffix={s} />
                </div>
                <div className="mt-1 text-[13px] font-semibold text-white">{label}</div>
                <div className="text-[11.5px] text-white/50">{note}</div>
              </motion.div>
            ))}
            <div className="col-span-2 rounded-2xl border border-white/8 bg-gradient-to-br from-primary/10 to-transparent p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-white/50">
                    Average Response Time
                  </div>
                  <div className="mt-1 font-display text-5xl font-extrabold text-white">
                    2.4<span className="text-2xl text-white/60"> hrs</span>
                  </div>
                  <div className="text-[12px] text-white/55">From ticket to action</div>
                </div>
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "78%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full bg-gradient-to-r from-primary to-primary-glow"
                />
              </div>
            </div>
          </div>

          {/* Regional pulse map */}
          <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-white/[0.04] to-transparent p-6">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
                Regional Coverage
              </div>
              <div className="text-[11px] font-semibold text-white/60">
                MEA · Central & South Asia
              </div>
            </div>
            <div className="relative mt-4 aspect-[16/10] w-full">
              <div
                aria-hidden
                className="absolute inset-0 rounded-xl"
                style={{
                  background:
                    "radial-gradient(circle at 60% 45%, rgba(220,38,38,0.10), transparent 55%)",
                }}
              />
              {/* dotted world silhouette */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-xl opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
                  backgroundSize: "12px 12px",
                  maskImage:
                    "radial-gradient(ellipse 65% 55% at 55% 50%, black 60%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 65% 55% at 55% 50%, black 60%, transparent 100%)",
                }}
              />
              {REGION_PINS.map((p, i) => (
                <div
                  key={p.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70"
                      style={{ animationDelay: `${i * 180}ms` }}
                    />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(220,38,38,0.9)]" />
                  </span>
                  <div className="mt-1.5 whitespace-nowrap text-[10px] font-semibold text-white/70">
                    {p.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { k: "10+", v: "Countries" },
                { k: "26", v: "Cities" },
                { k: "500+", v: "Installations" },
              ].map((x) => (
                <div
                  key={x.v}
                  className="rounded-xl border border-white/8 bg-white/[0.03] p-3"
                >
                  <div className="font-display text-xl font-extrabold text-white">
                    {x.k}
                  </div>
                  <div className="text-[11px] text-white/55">{x.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- REMOTE DIAGNOSTICS ---------------- */

function RemoteDiagnostics() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-28">
      <div className="mx-auto grid max-w-[100rem] gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/25 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl shadow-[0_40px_80px_-40px_rgba(0,0,0,0.5)]">
            <img
              src={remoteImg}
              alt="Engineer monitoring medical equipment telemetry from operations center"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={1100}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent" />
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
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            We see problems before your team does.
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-muted-foreground">
            Our operations center continuously monitors device health, image
            quality metrics and system logs across every installation — most
            issues are resolved remotely, before they interrupt a patient
            schedule.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Radio, t: "Secure Remote Access", d: "OEM-approved secure tunnels to service tools." },
              { icon: Activity, t: "Predictive Alerts", d: "Anomaly detection on tube arc counts, coil temp and more." },
              { icon: Clock, t: "72% First-Call Resolution", d: "Most tickets solved without a site visit." },
              { icon: ShieldCheck, t: "Full Audit Trail", d: "Every action logged for compliance and QA." },
            ].map(({ icon: Icon, t, d }) => (
              <div
                key={t}
                className="rounded-2xl border border-border bg-card p-4"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="mt-3 text-[14px] font-bold text-foreground">
                  {t}
                </div>
                <div className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">
                  {d}
                </div>
              </div>
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
  { icon: Truck, t: "Arrival", d: "On-site within our regional response SLA." },
  { icon: Wrench, t: "Repair", d: "Genuine OEM parts, factory procedures, zero shortcuts." },
  { icon: Gauge, t: "Calibration", d: "Full QA and calibration to OEM performance specs." },
  { icon: CheckCircle2, t: "System Back Online", d: "Handover, sign-off and follow-up support." },
];

function SupportJourney() {
  return (
    <section className="relative overflow-hidden bg-[#0a0d14] py-24 text-white lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent" />
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

        <div className="relative mt-16">
          {/* horizontal rail */}
          <div className="pointer-events-none absolute left-0 right-0 top-[46px] hidden h-px bg-gradient-to-r from-transparent via-white/25 to-transparent lg:block" />
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 lg:gap-4">
            {JOURNEY.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative"
              >
                <div className="relative mx-auto flex h-[92px] w-[92px] items-center justify-center rounded-full border border-white/10 bg-[#0f131c] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 to-transparent opacity-70 blur-md" />
                  <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[#0f131c]">
                    <s.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-black tracking-widest text-white">
                    0{i + 1}
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="font-display text-[15px] font-bold text-white">
                    {s.t}
                  </div>
                  <div className="mt-1.5 text-[12px] leading-relaxed text-white/55">
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

/* ---------------- EQUIPMENT GALLERY ---------------- */

const EQUIPMENT = [
  { name: "MRI Systems", img: mriImg },
  { name: "CT Scanners", img: ctImg },
  { name: "Cath Lab Systems", img: cathLabImg },
  { name: "PET / CT", img: petctImg },
  { name: "Ultrasound", img: ultrasoundImg },
  { name: "X-Ray Systems", img: xrayImg },
  { name: "Mammography", img: mammoImg },
  { name: "C-Arm Systems", img: carmImg },
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
              Every modality. Every major brand.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Siemens, Philips, GE Healthcare, Canon, Hologic and more — our
            engineers are certified across the full portfolio of diagnostic and
            interventional systems we deliver.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {EQUIPMENT.map((e, i) => (
            <motion.a
              key={e.name}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
              className="group relative block overflow-hidden rounded-2xl bg-ink"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={e.img}
                  alt={e.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div className="text-white">
                  <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-white/60">
                    Full Service
                  </div>
                  <div className="mt-1 font-display text-lg font-bold">
                    {e.name}
                  </div>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-all group-hover:bg-primary">
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
  const points = [
    { icon: ShieldCheck, t: "Certified Team", d: "Highly trained biomedical engineers with global OEM certifications." },
    { icon: Cog, t: "OEM Standards", d: "We follow original manufacturer procedures and best practices." },
    { icon: Users, t: "Clinical Support", d: "On-site training and clinical application support after every install." },
    { icon: Activity, t: "Remote Assistance", d: "Advanced remote tools for rapid diagnosis and resolution." },
    { icon: ClipboardCheck, t: "Warranty Coverage", d: "1-year free warranty plus full support for extended contracts." },
    { icon: ArrowUpRight, t: "Lifetime Partnership", d: "We stay with you through the entire equipment lifecycle." },
  ];
  return (
    <section className="relative overflow-hidden bg-[#f6f4f0] py-24 lg:py-28">
      <div className="mx-auto grid max-w-[100rem] gap-14 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20 lg:px-10">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
            Engineering Excellence
          </div>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Our engineers.
            <br />
            Your reliability.
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-muted-foreground">
            A field team of 15+ dedicated biomedical engineers — trained
            directly by OEMs, backed by a regional operations center, and
            trusted by leading hospitals since 1999.
          </p>
          <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {points.map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-[14.5px] font-bold text-foreground">{t}</div>
                  <div className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                    {d}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-xl sm:block">
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
      </div>
    </section>
  );
}

/* ---------------- OEM PARTS & LOGISTICS ---------------- */

function PartsLogistics() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[640px]">
          <img
            src={warehouseImg}
            alt="AbuFarha regional spare parts warehouse"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            width={1600}
            height={1100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink" />
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-6 p-8">
            {[
              { k: "2,350+", v: "Parts in stock" },
              { k: "48 hrs", v: "Regional dispatch" },
              { k: "100%", v: "OEM certified" },
            ].map((x) => (
              <div key={x.v}>
                <div className="font-display text-3xl font-extrabold">{x.k}</div>
                <div className="text-[12px] uppercase tracking-[0.2em] text-white/60">
                  {x.v}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center bg-[#0a0d14] px-6 py-20 lg:px-16 lg:py-24">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              OEM Parts & Logistics
            </div>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Genuine parts.
              <br />
              Ready when you need them.
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/70">
              A dedicated regional inventory of OEM spare parts, calibration
              kits and consumables — coordinated across our Amman and Cairo
              hubs to reach any site fast.
            </p>
            <div className="mt-10 space-y-5">
              {[
                { icon: Package, t: "Genuine OEM Parts", d: "Directly sourced from Siemens, Philips, GE and more." },
                { icon: Truck, t: "Fast Regional Shipping", d: "48-hour dispatch across MEA, expedited critical paths." },
                { icon: Gauge, t: "Calibration & QA Kits", d: "Everything an engineer needs for factory-spec performance." },
              ].map(({ icon: Icon, t, d }) => (
                <div
                  key={t}
                  className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-colors hover:border-primary/40"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[14.5px] font-bold text-white">{t}</div>
                    <div className="mt-0.5 text-[12.5px] leading-relaxed text-white/60">
                      {d}
                    </div>
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

/* ---------------- REQUEST SERVICE ---------------- */

function RequestService() {
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

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Sidebar: 3 steps */}
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              How it works
            </div>
            <ol className="mt-6 space-y-6">
              {[
                { t: "Submit Request", d: "Fill the form with details about your issue." },
                { t: "Our Team Reviews", d: "We analyze and assign the right engineer." },
                { t: "We Act Quickly", d: "We respond fast and solve the issue." },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-[14.5px] font-bold text-foreground">
                      {s.t}
                    </div>
                    <div className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">
                      {s.d}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-2xl bg-ink p-5 text-white">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
                Emergency Line
              </div>
              <div className="mt-2 font-display text-xl font-extrabold">
                +962 79 974 1318
              </div>
              <div className="mt-1 text-[12px] text-white/60">
                24/7 for critical downtime
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/80 p-8 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:p-10">
            <form className="grid gap-5 sm:grid-cols-2">
              {[
                ["Full Name", "text", "Enter your full name", true],
                ["Phone Number", "tel", "Enter phone number", true],
                ["Email Address", "email", "Enter email address", true],
                ["Facility / Hospital", "text", "Enter facility name", true],
              ].map(([label, type, ph, req]) => (
                <label key={label as string} className="block">
                  <span className="text-[12px] font-semibold text-foreground">
                    {label} {req ? <span className="text-primary">*</span> : null}
                  </span>
                  <input
                    type={type as string}
                    placeholder={ph as string}
                    className="mt-2 h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
              ))}

              <label className="block">
                <span className="text-[12px] font-semibold text-foreground">
                  Equipment Type <span className="text-primary">*</span>
                </span>
                <select
                  className="mt-2 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  defaultValue=""
                >
                  <option value="" disabled>Select equipment</option>
                  {EQUIPMENT.map((e) => (
                    <option key={e.name}>{e.name}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-[12px] font-semibold text-foreground">
                  Serial Number
                </span>
                <input
                  placeholder="Enter serial number"
                  className="mt-2 h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-[12px] font-semibold text-foreground">
                  Problem Description <span className="text-primary">*</span>
                </span>
                <textarea
                  rows={4}
                  placeholder="Describe the issue in detail"
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-[12px] font-semibold text-foreground">
                  Upload Images (Optional)
                </span>
                <div className="mt-2 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-background/60 px-6 py-8 text-center transition-colors hover:border-primary/60">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <UploadCloud className="h-6 w-6" />
                  </div>
                  <div className="mt-3 text-sm font-semibold text-foreground">
                    Click or drag &amp; drop images
                  </div>
                  <div className="mt-1 text-[12px] text-muted-foreground">
                    JPG, PNG up to 5MB
                  </div>
                </div>
              </label>

              <div className="sm:col-span-2">
                <button
                  type="button"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-[0_18px_50px_-18px_rgba(220,38,38,0.7)] transition-all hover:-translate-y-0.5 sm:w-auto"
                >
                  Submit Request
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

const FAQS = [
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
    <section className="relative bg-[#f6f4f0] py-24 lg:py-28">
      <div className="mx-auto max-w-[80rem] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              Frequently Asked
            </div>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Everything you need
              <br /> to know.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Can&apos;t find what you&apos;re looking for? Our support team is
              available around the clock.
            </p>
            <a
              href="tel:+96264026063"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" /> Talk to Support
            </a>
          </div>
          <div className="space-y-3">
            {FAQS.map(([q, a], i) => {
              const isOpen = open === i;
              return (
                <div
                  key={q}
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen ? "border-primary/30 bg-card" : "border-border bg-card/70"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-[15px] font-semibold text-foreground">
                      {q}
                    </span>
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                        isOpen ? "bg-primary text-white" : "bg-muted text-foreground"
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-[14px] leading-relaxed text-muted-foreground">
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
          className="h-full w-full object-cover object-center opacity-45"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
      </div>
      <div className="relative mx-auto flex max-w-[100rem] flex-col items-start gap-10 px-6 py-24 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
            24/7 Technical Support
          </div>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Need immediate
            <br /> technical support?
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">
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
      <CommandCenter />
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
