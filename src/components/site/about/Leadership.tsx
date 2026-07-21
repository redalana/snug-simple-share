import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, Mail, Award, Wrench, Handshake, Globe2, User, Pause, Play, Activity } from "lucide-react";
import { Eyebrow } from "../Eyebrow";
import { Reveal, EASE } from "./Reveal";
import cathlabImg from "@/assets/leadership-cathlab.jpg";
import leaderPortrait1 from "@/assets/leader-portrait-1.jpg.asset.json";

type Leader = {
  id: string;
  name: string;
  role: string;
  bio: string;
  years: string;
  countries: string;
  projects: string;
  focus: string[];
  photo?: string;
  linkedin?: string;
  email?: string;
};

const LEADERS: Leader[] = [
  {
    id: "walid",
    name: "Dr. Walid AbuFarha",
    role: "Founder & CEO",
    bio: "Founder of AbuFarha Medical Supplies. Leading advanced medical equipment and turnkey healthcare projects across Africa and the Middle East since 1999.",
    years: "25+",
    countries: "10+",
    projects: "30+",
    focus: ["Healthcare Leadership", "Medical Technology", "Regional Growth"],
    photo: leaderPortrait1.url,
    linkedin: "#",
    email: "info@abufarhamedical.com",
  },
  {
    id: "khalid-s",
    name: "Khalid Shouqer",
    role: "Commercial Director",
    bio: "Leads commercial strategy and OEM partnerships across the region — aligning hospital needs with clinical technology and long-term service commitments.",
    years: "20+",
    countries: "8+",
    projects: "40+",
    focus: ["Commercial Strategy", "OEM Partnerships", "Hospital Programs"],
    linkedin: "#",
    email: "info@abufarhamedical.com",
  },
  {
    id: "anwar",
    name: "Dr. Anwar AbuFannouneh",
    role: "Medical Director",
    bio: "Bridges clinical and engineering teams — advising hospitals on protocols, safety and workflow integration for imaging, cath lab, ICU and surgical departments.",
    years: "20+",
    countries: "6+",
    projects: "35+",
    focus: ["Clinical Advisory", "Medical Protocols", "Workflow Integration"],
    linkedin: "#",
    email: "info@abufarhamedical.com",
  },
  {
    id: "issam",
    name: "Dr. Issam Najm-Eldin",
    role: "Technical Director",
    bio: "Heads AbuFarha's biomedical engineering practice — installation, commissioning and lifecycle service on advanced imaging and interventional platforms.",
    years: "20+",
    countries: "9+",
    projects: "50+",
    focus: ["Biomedical Engineering", "Commissioning", "Lifecycle Service"],
    linkedin: "#",
    email: "info@abufarhamedical.com",
  },
  {
    id: "yazan",
    name: "Yazan AbuFarha",
    role: "Project Manager",
    bio: "Coordinates multi-department turnkey healthcare projects from planning through handover — timelines, site readiness and cross-functional delivery.",
    years: "10+",
    countries: "6+",
    projects: "20+",
    focus: ["Turnkey Delivery", "Project Planning", "Site Readiness"],
    email: "info@abufarhamedical.com",
  },
  {
    id: "naser",
    name: "Naser Al-Shuaibat",
    role: "Service Manager",
    bio: "Runs preventive and corrective service operations — dispatching field engineers, monitoring SLAs and keeping installed systems within manufacturer tolerance.",
    years: "15+",
    countries: "7+",
    projects: "60+",
    focus: ["Field Service", "SLA Management", "Preventive Maintenance"],
    email: "info@abufarhamedical.com",
  },
  {
    id: "mohammad",
    name: "Mohammad Arkaga",
    role: "Logistics Manager",
    bio: "Oversees regional spare-parts stock, international shipping and cross-border compliance so equipment moves on schedule to every project site.",
    years: "10+",
    countries: "10+",
    projects: "45+",
    focus: ["Regional Logistics", "Spare Parts", "Supply Chain"],
    email: "info@abufarhamedical.com",
  },
  {
    id: "khalid-n",
    name: "Khalid Al-Najjar",
    role: "Procurement Manager",
    bio: "Manages OEM procurement, warranty terms and traceability — ensuring every system delivered is factory-new, fully warranted and specification-matched.",
    years: "10+",
    countries: "Global",
    projects: "40+",
    focus: ["OEM Procurement", "Warranty & Compliance", "Traceability"],
    email: "info@abufarhamedical.com",
  },
  {
    id: "omar",
    name: "Omar Al-Mazaydeh",
    role: "Operations Manager",
    bio: "Aligns engineering, logistics and service operations so projects execute predictably from kickoff to long-term support.",
    years: "10+",
    countries: "6+",
    projects: "30+",
    focus: ["Operations", "Delivery Coordination", "Cross-Functional"],
    email: "info@abufarhamedical.com",
  },
  {
    id: "ibrahim",
    name: "Ibrahim Abu Hussain",
    role: "Finance Manager",
    bio: "Leads financial planning, project accounting and vendor governance — supporting long-term partnerships with hospitals and manufacturers.",
    years: "10+",
    countries: "Regional",
    projects: "All Programs",
    focus: ["Financial Planning", "Project Accounting", "Governance"],
    email: "info@abufarhamedical.com",
  },
];

const HIGHLIGHTS = [
  { icon: Award, title: "Experienced Leadership", desc: "Decades of combined experience in healthcare engineering and medical technology." },
  { icon: Wrench, title: "Engineering Excellence", desc: "Advanced clinical systems installed, commissioned and supported to OEM standards." },
  { icon: Handshake, title: "Customer Partnership", desc: "Long-term relationships with hospitals — built on trust, service and clinical results." },
  { icon: Globe2, title: "Global Healthcare Impact", desc: "Supporting hospitals across Africa, the Middle East and Central Asia." },
];

const AUTO_MS = 7000;
const RESUME_MS = 12000;

/* ---------------- Live console micro-widgets ---------------- */

function LiveClock() {
  const [now, setNow] = useState<string>(() => {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
  });
  useEffect(() => {
    const id = window.setInterval(() => {
      const d = new Date();
      setNow(d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);
  return <span className="tabular-nums">{now}</span>;
}

function EcgLine() {
  // Static SVG path traveling via CSS animation. Extremely subtle.
  return (
    <div className="relative h-6 w-full overflow-hidden rounded-md bg-white/[0.03] ring-1 ring-white/10">
      <svg
        viewBox="0 0 400 24"
        preserveAspectRatio="none"
        className="absolute inset-y-0 left-0 h-full w-[200%] animate-[ecg-scroll_6s_linear_infinite] motion-reduce:animate-none"
        aria-hidden="true"
      >
        <path
          d="M0 12 L30 12 L38 12 L44 6 L50 18 L56 12 L90 12 L100 12 L108 4 L116 20 L124 12 L160 12 L170 12 L178 8 L186 16 L194 12 L240 12 L260 12 L268 6 L274 18 L280 12 L320 12 L330 12 L338 4 L346 20 L354 12 L400 12 L430 12 L438 6 L444 18 L450 12 L490 12 L500 12 L508 4 L516 20 L524 12 L560 12 L570 12 L578 8 L586 16 L594 12 L640 12 L660 12 L668 6 L674 18 L680 12 L720 12 L730 12 L738 4 L746 20 L754 12 L800 12"
          fill="none"
          stroke="rgb(229 57 53 / 0.9)"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function LiveVitals() {
  const [hr, setHr] = useState(72);
  const [spo2, setSpo2] = useState(98);
  const [bp, setBp] = useState("118/76");
  useEffect(() => {
    const id = window.setInterval(() => {
      setHr(h => 68 + Math.floor(Math.random() * 10));
      setSpo2(97 + Math.floor(Math.random() * 3));
      const sys = 116 + Math.floor(Math.random() * 6);
      const dia = 74 + Math.floor(Math.random() * 5);
      setBp(`${sys}/${dia}`);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);
  return (
    <div className="grid grid-cols-3 gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55">
      <div className="rounded-md bg-white/[0.03] px-2 py-1 ring-1 ring-white/10">
        <span className="text-white/40">HR</span>{" "}
        <span className="tabular-nums text-white/80">{hr}</span>
      </div>
      <div className="rounded-md bg-white/[0.03] px-2 py-1 ring-1 ring-white/10">
        <span className="text-white/40">SpO₂</span>{" "}
        <span className="tabular-nums text-white/80">{spo2}%</span>
      </div>
      <div className="rounded-md bg-white/[0.03] px-2 py-1 ring-1 ring-white/10">
        <span className="text-white/40">BP</span>{" "}
        <span className="tabular-nums text-white/80">{bp}</span>
      </div>
    </div>
  );
}

/* ---------------- Portraits ---------------- */

function Portrait({ leader, size }: { leader: Leader; size: number }) {
  const radius = size;
  if (leader.photo) {
    return (
      <div
        className="relative overflow-hidden rounded-full bg-secondary ring-1 ring-border shadow-[0_10px_30px_-14px_rgba(15,23,42,0.35)]"
        style={{ width: radius, height: radius }}
      >
        <img
          src={leader.photo}
          alt={leader.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full scale-[1.15] object-cover object-[50%_28%]"
        />
      </div>
    );
  }
  return (
    <div
      className="relative grid place-items-center overflow-hidden rounded-full bg-gradient-to-b from-secondary to-secondary/40 ring-1 ring-border"
      style={{ width: radius, height: radius }}
      aria-hidden="true"
    >
      <User className="text-ink/30" style={{ width: radius * 0.55, height: radius * 0.55 }} strokeWidth={1.25} />
    </div>
  );
}

function LeaderRow({ leader, active, onSelect }: { leader: Leader; active: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={`group relative flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition-all duration-300 ${
        active
          ? "bg-white shadow-[0_10px_30px_-16px_rgba(15,23,42,0.28)] ring-1 ring-border"
          : "hover:bg-white hover:shadow-[0_8px_22px_-18px_rgba(15,23,42,0.35)] hover:ring-1 hover:ring-border/70"
      }`}
    >
      {active && (
        <motion.span
          layoutId="leader-accent"
          className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-primary"
          transition={{ duration: 0.35, ease: EASE }}
        />
      )}
      <div className="transition-transform duration-300 group-hover:scale-[1.04]">
        <Portrait leader={leader} size={44} />
      </div>
      <div className="min-w-0">
        <div className={`truncate font-display text-[calc(14*var(--desktop-px-unit))] font-bold ${active ? "text-ink" : "text-ink/90"}`}>
          {leader.name}
        </div>
        <div className={`truncate text-[calc(12*var(--desktop-px-unit))] ${active ? "text-primary font-semibold" : "text-muted-foreground"}`}>
          {leader.role}
        </div>
      </div>
    </button>
  );
}

/* ---------------- Executive portrait card (4:5) ---------------- */

function ExecutivePortrait({ leader, className = "" }: { leader: Leader; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.01] ring-1 ring-white/15 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.7)] ${className}`}
      style={{ aspectRatio: "4 / 5" }}
    >
      {leader.photo ? (
        <img
          src={leader.photo}
          alt={leader.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-[50%_22%]"
        />
      ) : (
        <div className="grid h-full w-full place-items-center bg-gradient-to-b from-white/10 to-white/[0.02]">
          <User className="h-24 w-24 text-white/25" strokeWidth={1.1} />
        </div>
      )}
      {/* subtle scanline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay motion-reduce:hidden"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.6) 0 1px, transparent 1px 3px)",
        }}
      />
      {/* soft glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl ring-1 ring-inset ring-white/5"
      />
    </div>
  );
}

/* ---------------- Animated statistic ---------------- */

function StatValue({ raw }: { raw: string }) {
  // Only animate the leading integer portion; keep the suffix ("+", "Global", …) intact
  const match = raw.match(/^(\d+)(.*)$/);
  const [display, setDisplay] = useState(raw);

  useEffect(() => {
    if (!match) {
      setDisplay(raw);
      return;
    }
    const target = parseInt(match[1], 10);
    const suffix = match[2];
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(raw);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const duration = 900;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(eased * target);
      setDisplay(`${val}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [raw]); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{display}</>;
}

/* ---------------- Executive Console ---------------- */

function ExecutiveConsole({ leader, paused, onToggle }: { leader: Leader; paused: boolean; onToggle: () => void }) {
  return (
    <div className="relative overflow-hidden rounded-[calc(18*var(--desktop-px-unit))] border border-white/10 bg-[#14181e]/95 text-white shadow-[0_30px_90px_-30px_rgba(0,0,0,0.75)] backdrop-blur-md">
      {/* very subtle monitor glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-24 opacity-40 motion-reduce:opacity-20"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 0%, rgba(229,57,53,0.10), transparent 60%), radial-gradient(50% 50% at 100% 100%, rgba(56,189,248,0.06), transparent 60%)",
        }}
      />
      {/* scanline overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay motion-reduce:hidden"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.5) 0 1px, transparent 1px 3px)",
        }}
      />

      {/* Console header */}
      <div className="relative flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
        <div className="flex items-center gap-2">
          <span className="relative inline-flex h-2 w-2">
            <span className={`absolute inline-flex h-full w-full rounded-full bg-primary/60 ${paused ? "" : "animate-ping motion-reduce:animate-none"}`} />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(229,57,53,0.9)]" />
          </span>
          <span>Executive Profile</span>
          <span className="mx-2 hidden h-3 w-px bg-white/15 sm:inline-block" />
          <span className="hidden items-center gap-1 text-white/45 sm:inline-flex">
            <Activity className="h-3 w-3" />
            <LiveClock />
          </span>
        </div>
        <button
          type="button"
          onClick={onToggle}
          className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-white/70 transition hover:bg-white/10 hover:text-white"
          aria-label={paused ? "Resume rotation" : "Pause rotation"}
        >
          {paused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
          <span className="tracking-[0.18em]">{paused ? "Paused" : "Live"}</span>
        </button>
      </div>

      <div className="relative p-5 sm:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={leader.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="grid gap-6 sm:grid-cols-[minmax(0,200px)_1fr] sm:gap-7"
          >
            <div className="mx-auto w-full max-w-[220px] sm:mx-0 sm:max-w-none">
              <ExecutivePortrait leader={leader} />
            </div>

            <div className="min-w-0">
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary/90">
                {leader.role}
              </div>
              <div className="mt-1.5 font-display text-[1.45rem] font-extrabold leading-[1.1] text-white sm:text-[1.65rem]">
                {leader.name}
              </div>
              <p className="mt-3 max-w-md text-[calc(13*var(--desktop-px-unit))] leading-relaxed text-white/75">
                {leader.bio}
              </p>

              {/* Stats */}
              <div className="mt-5 grid grid-cols-3 gap-2">
                {[
                  { v: leader.years, l: "Years" },
                  { v: leader.countries, l: "Countries" },
                  { v: leader.projects, l: "Projects" },
                ].map(s => (
                  <div key={s.l} className="rounded-xl bg-white/[0.04] px-3 py-2.5 ring-1 ring-white/10">
                    <div className="font-display text-[1.2rem] font-extrabold leading-none text-white">
                      <StatValue raw={s.v} />
                    </div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Focus tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {leader.focus.map(f => (
                  <span key={f} className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[10.5px] font-medium tracking-wide text-white/80 ring-1 ring-white/10">
                    {f}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-5 flex flex-wrap gap-2">
                {leader.linkedin && (
                  <a
                    href={leader.linkedin}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-3.5 py-1.5 text-[calc(12*var(--desktop-px-unit))] font-semibold text-white/90 transition hover:border-white/50 hover:bg-white/5 hover:text-white"
                    aria-label={`${leader.name} on LinkedIn`}
                  >
                    <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                  </a>
                )}
                {leader.email && (
                  <a
                    href={`mailto:${leader.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-3.5 py-1.5 text-[calc(12*var(--desktop-px-unit))] font-semibold text-white/90 transition hover:border-primary hover:bg-primary hover:text-white"
                    aria-label={`Email ${leader.name}`}
                  >
                    <Mail className="h-3.5 w-3.5" /> Email
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Live vitals strip */}
        <div className="mt-6 border-t border-white/10 pt-4">
          <EcgLine />
          <div className="mt-2.5">
            <LiveVitals />
          </div>
        </div>
      </div>
      <div className="h-3 bg-gradient-to-b from-[#14181e] to-[#0a0d12]" />
    </div>
  );
}

/* ---------------- Section ---------------- */

export function Leadership() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<number | null>(null);
  const active = LEADERS[activeIndex];

  useEffect(() => {
    if (paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActiveIndex(i => (i + 1) % LEADERS.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const handleSelect = (idx: number) => {
    setActiveIndex(idx);
    setPaused(true);
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setPaused(false), RESUME_MS);
  };

  const togglePause = () => {
    setPaused(p => !p);
    if (resumeTimer.current) {
      window.clearTimeout(resumeTimer.current);
      resumeTimer.current = null;
    }
  };

  useEffect(() => () => {
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
  }, []);

  return (
    <section className="bg-white py-16 lg:py-20">
      <style>{`@keyframes ecg-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <Reveal>
          <Eyebrow index="09">Meet the People Behind AbuFarha Medical</Eyebrow>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="font-display text-[2rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              Leadership that drives<br className="hidden sm:block" /> healthcare innovation.
            </h2>
            <p className="max-w-xl text-[calc(15*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
              Behind every successful healthcare project is an experienced team dedicated to engineering
              excellence, medical technology and long-term customer partnerships across Africa and the Middle East.
            </p>
          </div>
        </Reveal>

        {/* Desktop */}
        <div className="mt-12 hidden lg:grid lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-10">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-secondary/40 p-3 ring-1 ring-border">
              <div className="max-h-[calc(680*var(--desktop-px-unit))] space-y-1 overflow-y-auto pr-1">
                {LEADERS.map((l, i) => (
                  <LeaderRow key={l.id} leader={l} active={i === activeIndex} onSelect={() => handleSelect(i)} />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-border shadow-[0_40px_100px_-40px_rgba(15,23,42,0.35)]">
              <img
                src={cathlabImg}
                alt="Modern interventional cath lab environment"
                loading="lazy"
                width={1600}
                height={1104}
                className="h-full max-h-[calc(820*var(--desktop-px-unit))] w-full object-cover"
              />
              {/* Depth wash to lift the floating console */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/5" />
              {/* Floating console (smaller, right-anchored — reveals more equipment) */}
              <div className="absolute inset-x-6 bottom-6 sm:right-6 sm:left-auto sm:bottom-6 sm:w-[54%] lg:w-[50%] xl:w-[46%]">
                <ExecutiveConsole leader={active} paused={paused} onToggle={togglePause} />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Tablet */}
        <div className="mt-10 hidden md:block lg:hidden">
          <ExecutiveConsole leader={active} paused={paused} onToggle={togglePause} />
          <div className="mt-6 grid grid-cols-2 gap-2">
            {LEADERS.map((l, i) => (
              <LeaderRow key={l.id} leader={l} active={i === activeIndex} onSelect={() => handleSelect(i)} />
            ))}
          </div>
        </div>

        {/* Mobile — dedicated flow */}
        <div className="mt-8 md:hidden">
          <ExecutiveConsole leader={active} paused={paused} onToggle={togglePause} />

          <div className="mt-6 -mx-6 overflow-x-auto pb-2">
            <div className="flex gap-3 px-6 snap-x snap-mandatory">
              {LEADERS.map((l, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => handleSelect(i)}
                    aria-pressed={isActive}
                    className={`flex w-[152px] shrink-0 snap-start flex-col items-center gap-2 rounded-2xl p-3 text-center transition ${
                      isActive ? "bg-white shadow-[0_10px_30px_-16px_rgba(15,23,42,0.3)] ring-1 ring-border" : "bg-secondary/50"
                    }`}
                    style={{ minHeight: 44 }}
                  >
                    <Portrait leader={l} size={68} />
                    <div className="text-[13px] font-bold leading-tight text-ink">{l.name}</div>
                    <div className={`text-[11px] font-semibold ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                      {l.role}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.05}>
              <div className="group h-full rounded-2xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_20px_36px_-20px_rgba(15,23,42,0.25)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <h.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-[calc(16*var(--desktop-px-unit))] font-bold text-ink">
                  {h.title}
                </div>
                <p className="mt-1.5 text-[calc(13*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
                  {h.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
