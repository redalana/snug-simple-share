import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Wrench, Handshake, Globe2, User } from "lucide-react";
import { Eyebrow } from "../Eyebrow";
import { Reveal, EASE } from "./Reveal";
import cathlabImg from "@/assets/leadership-cathlab.jpg";
import envMri from "@/assets/env-mri-suite.jpg";
import envWarehouse from "@/assets/env-warehouse.jpg";
import envMeeting from "@/assets/env-meeting-room.jpg";
import envService from "@/assets/env-service-workshop.jpg";
import envInstall from "@/assets/env-installation-site.jpg";
import envOffice from "@/assets/env-executive-office.jpg";
import envOps from "@/assets/env-operations-center.jpg";
import envImaging from "@/assets/env-imaging-dept.jpg";
import leaderPortrait1 from "@/assets/leader-portrait-1.jpg.asset.json";
import leaderPortrait1Thumb from "@/assets/leader-portrait-1-thumb.jpg.asset.json";

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
  thumb?: string;
  env: string;
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
    thumb: leaderPortrait1Thumb.url,
    env: cathlabImg,
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
    env: envMeeting,
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
    env: envImaging,
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
    env: envMri,
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
    env: envInstall,
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
    env: envService,
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
    env: envWarehouse,
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
    env: envWarehouse,
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
    env: envOps,
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
    env: envOffice,
  },
];

const HIGHLIGHTS = [
  {
    icon: Award,
    title: "Experienced Leadership",
    desc: "Decades of combined experience in healthcare engineering and medical technology.",
  },
  {
    icon: Wrench,
    title: "Engineering Excellence",
    desc: "Advanced clinical systems installed, commissioned and supported to OEM standards.",
  },
  {
    icon: Handshake,
    title: "Customer Partnership",
    desc: "Long-term relationships with hospitals — built on trust, service and clinical results.",
  },
  {
    icon: Globe2,
    title: "Global Healthcare Impact",
    desc: "Supporting hospitals across Africa, the Middle East and Central Asia.",
  },
];

const AUTO_MS = 7000;
const RESUME_MS = 12000;

/* ---------------- Nav rail portrait ---------------- */

function Portrait({ leader, size }: { leader: Leader; size: number }) {
  const src = leader.thumb || leader.photo;
  if (src) {
    return (
      <div
        className="roster-avatar relative overflow-hidden rounded-full bg-secondary ring-2 ring-white shadow-[0_6px_16px_-4px_rgba(15,23,42,0.28)]"
        style={{ width: size, height: size }}
      >
        <img
          src={src}
          alt={leader.name}
          width={size}
          height={size}
          decoding="async"
          className="h-full w-full object-cover object-[center_top]"
        />
      </div>
    );
  }
  return (
    <div
      className="relative grid place-items-center overflow-hidden rounded-full bg-gradient-to-b from-secondary to-secondary/40 ring-2 ring-white shadow-[0_6px_16px_-4px_rgba(15,23,42,0.22)]"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <User
        className="text-ink/30"
        style={{ width: size * 0.55, height: size * 0.55 }}
        strokeWidth={1.25}
      />
    </div>
  );
}

function LeaderRow({
  leader,
  active,
  onSelect,
}: {
  leader: Leader;
  active: boolean;
  onSelect: () => void;
}) {
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
        <Portrait leader={leader} size={50} />
      </div>
      <div className="min-w-0">
        <div
          className={`truncate font-display text-[calc(14*var(--desktop-px-unit))] font-bold ${active ? "text-ink" : "text-ink/90"}`}
        >
          {leader.name}
        </div>
        <div
          className={`truncate text-[calc(12*var(--desktop-px-unit))] ${active ? "text-primary font-semibold" : "text-muted-foreground"}`}
        >
          {leader.role}
        </div>
      </div>
    </button>
  );
}

/* ---------------- Cinematic Backdrop ---------------- */

function CinematicBackdrop({ env, nextEnv, alt }: { env: string; nextEnv: string; alt: string }) {
  const [layers, setLayers] = useState<{ src: string; id: number }[]>([{ src: env, id: 0 }]);
  const nextId = useRef(1);

  useEffect(() => {
    setLayers((prev) => {
      if (prev[prev.length - 1].src === env) return prev;
      return [...prev, { src: env, id: nextId.current++ }];
    });
  }, [env]);

  useEffect(() => {
    if (layers.length <= 1) return;
    const t = window.setTimeout(() => {
      setLayers((prev) => prev.slice(-1));
    }, 950);
    return () => window.clearTimeout(t);
  }, [layers]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "1600 / 1104", maxHeight: "calc(820*var(--desktop-px-unit))" }}
    >
      {layers.map((l, i) => {
        const isTop = i === layers.length - 1;
        const kbClass = l.id % 2 === 0 ? "leader-kb-a" : "leader-kb-b";
        return (
          <div
            key={l.id}
            aria-hidden={i < layers.length - 1 ? true : undefined}
            className={`absolute inset-0 ${isTop && layers.length > 1 ? "leader-fade-in" : ""}`}
            style={{ willChange: "opacity" }}
          >
            <div
              className={`absolute inset-0 ${kbClass} motion-reduce:!animate-none motion-reduce:!transform-none`}
              style={{ willChange: "transform" }}
            >
              <img
                src={l.src}
                alt={isTop ? alt : ""}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        );
      })}
      {/* Ambient breathing — very subtle, no color tint, no blend mode */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 leader-ambient motion-reduce:!animate-none"
        style={{
          background:
            "radial-gradient(60% 45% at 20% 15%, rgba(255,255,255,0.06), transparent 65%)",
        }}
      />

      {/* Preload next */}
      <link rel="preload" as="image" href={nextEnv} />
    </div>
  );
}

function HeroPortrait({ leader }: { leader: Leader }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-white/[0.04] to-black/20">
      <AnimatePresence mode="wait">
        <motion.div
          key={leader.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="absolute inset-0"
        >
          {leader.photo ? (
            <img
              src={leader.photo}
              alt={leader.name}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-[50%_20%]"
            />
          ) : (
            // TODO: replace with real portrait for {leader.name}
            <div className="grid h-full w-full place-items-center bg-gradient-to-b from-[#1f242c] to-[#0f1318] p-10">
              <div
                className="grid aspect-square w-[62%] max-w-[220px] place-items-center rounded-full bg-gradient-to-b from-[#242a33] to-[#141820] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.04)] ring-1 ring-primary/30"
                aria-label={`${leader.name} — portrait pending`}
              >
                <User className="h-1/2 w-1/2 text-white/40" strokeWidth={1.1} />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      {/* soft edge blend into the console body */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-r from-transparent to-[#1a1e25] sm:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-black/30 sm:hidden"
      />
    </div>
  );
}

/* ---------------- Animated statistic ---------------- */

function StatValue({ raw }: { raw: string }) {
  const match = raw.match(/^(\d+)(.*)$/);
  const [display, setDisplay] = useState(raw);

  useEffect(() => {
    if (!match) {
      setDisplay(raw);
      return;
    }
    const target = parseInt(match[1], 10);
    const suffix = match[2];
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
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

/* ---------------- Progress indicator ---------------- */

function ProgressBar({
  activeIndex,
  total,
  paused,
}: {
  activeIndex: number;
  total: number;
  paused: boolean;
}) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i === activeIndex;
        const isDone = i < activeIndex;
        return (
          <div
            key={i}
            className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-white/10"
            aria-hidden="true"
          >
            {isDone && <div className="absolute inset-y-0 left-0 w-full bg-white/40" />}
            {isActive && (
              <div
                key={`fill-${activeIndex}-${paused ? "p" : "r"}`}
                className={`absolute inset-y-0 left-0 w-0 bg-primary ${
                  paused
                    ? ""
                    : "animate-[leader-progress_7000ms_linear_forwards] motion-reduce:w-full motion-reduce:animate-none"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- Executive Console ---------------- */

function ExecutiveConsole({
  leader,
  paused,
  onToggle,
  activeIndex,
  total,
}: {
  leader: Leader;
  paused: boolean;
  onToggle: () => void;
  activeIndex: number;
  total: number;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-[calc(20*var(--desktop-px-unit))] text-white shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)]"
      style={{
        background: "rgba(15,18,24,0.72)",
        backdropFilter: "blur(14px)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Soft edge feather — softens the seam where the console meets the room photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-8"
        style={{ background: "linear-gradient(to right, rgba(15,18,24,0.6), transparent)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-6"
        style={{ background: "linear-gradient(to bottom, rgba(15,18,24,0.5), transparent)" }}
      />

      {/* very subtle inner glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-24 opacity-40 motion-reduce:opacity-20"
        style={{
          background:
            "radial-gradient(60% 40% at 0% 0%, rgba(255,255,255,0.06), transparent 60%), radial-gradient(60% 60% at 100% 100%, rgba(229,57,53,0.08), transparent 65%)",
        }}
      />

      <div className="grid gap-0 sm:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
        {/* LEFT — Hero portrait (~55% of console on desktop) */}
        <div className="relative aspect-[4/5] sm:aspect-auto sm:min-h-[clamp(460px,38vw,600px)]">
          <HeroPortrait leader={leader} />
        </div>


        {/* RIGHT — Executive information */}
        <div className="relative flex min-w-0 flex-col p-6 sm:p-7">
          {/* Header row: status (left) ↔ counter (right) */}
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onToggle}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:bg-white/10 hover:text-white"
              aria-label={paused ? "Resume rotation" : "Pause rotation"}
            >
              <span
                aria-hidden="true"
                className={`inline-block h-1.5 w-1.5 rounded-full ${paused ? "bg-white/40" : "bg-primary animate-pulse"}`}
              />
              <span>{paused ? "Paused" : "Auto"}</span>
            </button>
            <div className="shrink-0 whitespace-nowrap font-mono text-[10px] font-semibold tabular-nums text-white/55">
              <span>{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className="mx-1 text-white/25">/</span>
              <span>{String(total).padStart(2, "0")}</span>
            </div>
          </div>

          {/* Progress row */}
          <div className="mt-3">
            <ProgressBar activeIndex={activeIndex} total={total} paused={paused} />
          </div>

          {/* Content — crossfades on change */}
          <div className="mt-6 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.55, ease: EASE }}
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-primary/90">
                  {leader.role}
                </div>
                <div className="mt-2 font-display text-[1.55rem] font-extrabold leading-[1.05] tracking-[-0.01em] text-white sm:text-[1.85rem]">
                  {leader.name}
                </div>
                <p className="mt-4 max-w-md text-[calc(13.5*var(--desktop-px-unit))] leading-relaxed text-white/75">
                  {leader.bio}
                </p>

                {/* Statistics */}
                <div className="leadership-stats-shell mt-6">
                  <div className="leadership-stats-grid grid gap-1.5">
                    {[
                      { v: leader.years, l: "Years" },
                      { v: leader.countries, l: "Countries" },
                      { v: leader.projects, l: "Projects" },
                    ].map((s) => (
                      <div
                        key={s.l}
                        className="flex min-h-[72px] min-w-0 flex-col items-center justify-center rounded-xl bg-white/[0.04] px-1.5 py-3 text-center ring-1 ring-white/10"
                      >
                        <div className="font-display text-[18px] font-bold leading-none text-white tabular-nums [hyphens:none] [overflow-wrap:normal] [word-break:normal]">
                          <StatValue raw={s.v} />
                        </div>
                        <div
                          className="mt-2 text-[8.5px] font-semibold uppercase leading-tight text-white/60 [hyphens:none] [overflow-wrap:normal] [word-break:normal]"
                          style={{ letterSpacing: "var(--tracking-label)" }}
                        >
                          {s.l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Areas of expertise */}
                <div className="mt-6">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                    Areas of Expertise
                  </div>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {leader.focus.map((f) => (
                      <span
                        key={f}
                        className="rounded-full bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium tracking-wide text-white/85 ring-1 ring-white/10"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
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
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % LEADERS.length);
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
    setPaused((p) => !p);
    if (resumeTimer.current) {
      window.clearTimeout(resumeTimer.current);
      resumeTimer.current = null;
    }
  };

  useEffect(
    () => () => {
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    },
    [],
  );

  return (
    <section className="bg-white py-16 lg:py-20">
      <style>{`
        @keyframes leader-progress { from { width: 0%; } to { width: 100%; } }
        @keyframes leader-fade-in { from { opacity: 0; } to { opacity: 1; } }
        .leader-fade-in { animation: leader-fade-in 900ms ease-in-out forwards; }
        @keyframes leader-kb-a {
          0%   { transform: scale(1.00) translate3d(0, 0, 0); }
          50%  { transform: scale(1.06) translate3d(-1.2%, -0.8%, 0); }
          100% { transform: scale(1.00) translate3d(0, 0, 0); }
        }
        @keyframes leader-kb-b {
          0%   { transform: scale(1.06) translate3d(1.0%, 0.6%, 0); }
          50%  { transform: scale(1.00) translate3d(0, 0, 0); }
          100% { transform: scale(1.06) translate3d(-1.0%, -0.6%, 0); }
        }
        .leader-kb-a { animation: leader-kb-a 22s ease-in-out infinite alternate; transform-origin: 50% 50%; }
        .leader-kb-b { animation: leader-kb-b 24s ease-in-out infinite alternate; transform-origin: 50% 50%; }
        @keyframes leader-ambient {
          0%, 100% { opacity: 0.55; }
          50%      { opacity: 0.85; }
        }
        .leader-ambient { animation: leader-ambient 7s ease-in-out infinite; opacity: 0.55; }
        .leadership-stats-shell { container-type: inline-size; }
        .leadership-console-slot { width: 100%; }
        @media (min-width: 1280px) {
          .leadership-console-slot { width: min(100%, clamp(820px, 20rem + 34vw, 1000px)); }
        }

        .leadership-stats-grid {
          grid-template-columns: minmax(0, 1fr);
          grid-auto-rows: minmax(72px, 1fr);
          margin-inline: auto;
          width: 100%;
        }
        @container (min-width: 420px) {
          .leadership-stats-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        @keyframes leader-portrait-breath {
          0%   { transform: scale(1.00) translate3d(0, 0, 0); }
          100% { transform: scale(1.04) translate3d(0, -1.5%, 0); }
        }
        .leader-portrait-breath { animation: leader-portrait-breath 7s ease-out infinite alternate; }
        @media (prefers-reduced-motion: reduce) {
          .leader-kb-a, .leader-kb-b, .leader-ambient, .leader-portrait-breath { animation: none !important; transform: none !important; }
        }
      `}</style>

      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <Reveal>
          <Eyebrow index="09">Meet the People Behind AbuFarha Medical</Eyebrow>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="font-display text-[2rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              Leadership that drives
              <br className="hidden sm:block" /> healthcare innovation.
            </h2>
            <p className="max-w-xl text-[calc(15*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
              Behind every successful healthcare project is an experienced team dedicated to
              engineering excellence, medical technology and long-term customer partnerships across
              Africa and the Middle East.
            </p>
          </div>
        </Reveal>

        {/* Desktop */}
        <div className="mt-12 hidden xl:grid xl:grid-cols-[minmax(0,clamp(220px,18vw,300px))_minmax(0,1fr)] xl:gap-10">
          <Reveal className="xl:sticky xl:top-28 xl:self-start">
            <div className="rounded-3xl bg-secondary/40 p-3 ring-1 ring-border">
              <div className="max-h-[calc(680*var(--desktop-px-unit))] space-y-1 overflow-y-auto pr-1">

                {LEADERS.map((l, i) => (
                  <LeaderRow
                    key={l.id}
                    leader={l}
                    active={i === activeIndex}
                    onSelect={() => handleSelect(i)}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="relative grid grid-cols-1 overflow-hidden rounded-3xl ring-1 ring-border shadow-[0_40px_100px_-40px_rgba(15,23,42,0.35)]">
              <div className="col-start-1 row-start-1 self-stretch [&>*]:h-full">
                <CinematicBackdrop
                  env={active.env}
                  nextEnv={LEADERS[(activeIndex + 1) % LEADERS.length].env}
                  alt={`Environment reflecting ${active.role}`}
                />
              </div>

              {/* Localized readability gradient — only behind the console area, fades to fully transparent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden sm:block"
                style={{
                  background:
                    "radial-gradient(70% 70% at 82% 50%, rgba(10,14,20,0.72) 0%, rgba(10,14,20,0.45) 35%, rgba(10,14,20,0) 70%)",
                }}
              />

              {/* Floating console — vertically centered within the image area */}
              <div className="col-start-1 row-start-1 flex min-w-0 items-center justify-center p-6 sm:justify-end">
                <div className="leadership-console-slot">

                  <ExecutiveConsole
                    leader={active}
                    paused={paused}
                    onToggle={togglePause}
                    activeIndex={activeIndex}
                    total={LEADERS.length}
                  />
                </div>
              </div>


            </div>
          </Reveal>
        </div>

        {/* Tablet / small desktop */}
        <div className="mt-10 hidden md:block xl:hidden">
          <div className="mx-auto w-full max-w-[56rem]">
            <ExecutiveConsole
              leader={active}
              paused={paused}
              onToggle={togglePause}
              activeIndex={activeIndex}
              total={LEADERS.length}
            />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2">
            {LEADERS.map((l, i) => (
              <LeaderRow
                key={l.id}
                leader={l}
                active={i === activeIndex}
                onSelect={() => handleSelect(i)}
              />
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-8 md:hidden">
          <ExecutiveConsole
            leader={active}
            paused={paused}
            onToggle={togglePause}
            activeIndex={activeIndex}
            total={LEADERS.length}
          />
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
                      isActive
                        ? "bg-white shadow-[0_10px_30px_-16px_rgba(15,23,42,0.3)] ring-1 ring-border"
                        : "bg-secondary/50"
                    }`}
                    style={{ minHeight: 44 }}
                  >
                    <Portrait leader={l} size={68} />
                    <div className="text-[13px] font-bold leading-tight text-ink">{l.name}</div>
                    <div
                      className={`text-[11px] font-semibold ${isActive ? "text-primary" : "text-muted-foreground"}`}
                    >
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
