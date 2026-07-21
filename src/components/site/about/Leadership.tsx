import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, Mail, Award, Wrench, Handshake, Globe2, User, Pause, Play } from "lucide-react";
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
          className="h-full w-full object-cover object-top"
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
      className={`relative flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition-all duration-300 ${
        active
          ? "bg-white shadow-[0_10px_30px_-16px_rgba(15,23,42,0.25)] ring-1 ring-border"
          : "hover:bg-white/70"
      }`}
    >
      {active && (
        <motion.span
          layoutId="leader-accent"
          className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-primary"
          transition={{ duration: 0.35, ease: EASE }}
        />
      )}
      <Portrait leader={leader} size={44} />
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

function ExecutiveConsole({ leader, paused, onToggle }: { leader: Leader; paused: boolean; onToggle: () => void }) {
  return (
    <div className="relative overflow-hidden rounded-[calc(16*var(--desktop-px-unit))] border border-ink/70 bg-[#0d0f12] text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
      {/* Console header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(229,57,53,0.8)]" />
          <span>Executive Profile</span>
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

      <div className="p-5 sm:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={leader.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="grid gap-5 sm:grid-cols-[auto_1fr] sm:gap-6"
          >
            <div className="mx-auto sm:mx-0">
              <div
                className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/15"
                style={{ width: 168, height: 208 }}
              >
                {leader.photo ? (
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center bg-gradient-to-b from-white/10 to-white/[0.02]">
                    <User className="h-20 w-20 text-white/25" strokeWidth={1.2} />
                  </div>
                )}
              </div>
            </div>

            <div className="min-w-0">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/90">
                {leader.role}
              </div>
              <div className="mt-1 font-display text-[1.35rem] font-extrabold leading-tight text-white sm:text-[1.55rem]">
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
                    <div className="font-display text-[1.15rem] font-extrabold leading-none text-white">{s.v}</div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Focus tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {leader.focus.map(f => (
                  <span key={f} className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[10.5px] font-medium text-white/75 ring-1 ring-white/10">
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
      </div>
      <div className="h-3 bg-gradient-to-b from-[#0d0f12] to-[#05060a]" />
    </div>
  );
}

export function Leadership() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<number | null>(null);
  const active = LEADERS[activeIndex];

  // Auto-rotation
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
        <div className="mt-12 hidden lg:grid lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-10">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-secondary/40 p-3 ring-1 ring-border">
              <div className="max-h-[calc(640*var(--desktop-px-unit))] space-y-1 overflow-y-auto pr-1">
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
                className="h-full max-h-[calc(760*var(--desktop-px-unit))] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-white/5" />
              <div className="absolute inset-x-6 bottom-6 sm:right-8 sm:left-auto sm:bottom-8 sm:w-[64%] lg:w-[60%]">
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

        {/* Mobile */}
        <div className="mt-8 md:hidden">
          <ExecutiveConsole leader={active} paused={paused} onToggle={togglePause} />
          <div className="mt-5 -mx-6 overflow-x-auto pb-2">
            <div className="flex gap-3 px-6 snap-x snap-mandatory">
              {LEADERS.map((l, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => handleSelect(i)}
                    aria-pressed={isActive}
                    className={`flex w-[150px] shrink-0 snap-start flex-col items-center gap-2 rounded-2xl p-3 text-center transition ${
                      isActive ? "bg-white shadow-[0_10px_30px_-16px_rgba(15,23,42,0.3)] ring-1 ring-border" : "bg-secondary/50"
                    }`}
                    style={{ minHeight: 44 }}
                  >
                    <Portrait leader={l} size={64} />
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
