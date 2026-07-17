import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Building2,
  Stethoscope,
  Heart,
  Handshake,
  ShieldCheck,
  Cog,
  Headphones,
} from "lucide-react";
import { COUNTRY_PATHS as WORLD_COUNTRIES, MAP_W, MAP_H, GEO, HIGHLIGHT_NAMES } from "./worldMap";
import { REGIONS, type Region } from "./data";

const HIGHLIGHT = HIGHLIGHT_NAMES;

function useCountUp(target: number, inView: boolean, dur = 1400) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, inView, dur]);
  return v;
}

function StatCard({
  icon: Icon,
  value,
  label,
  delay,
  inView,
}: {
  icon: typeof Globe;
  value: number;
  label: string;
  delay: number;
  inView: boolean;
}) {
  const n = useCountUp(value, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="group rounded-2xl bg-white p-5 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.25)] ring-1 ring-black/[0.05] transition-shadow hover:shadow-[0_25px_50px_-20px_rgba(225,29,46,0.35)]"
    >
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </div>
      <div className="mt-4 font-display text-[calc(32*var(--desktop-px-unit))] font-extrabold leading-none text-foreground">
        {n}
        <span className="ml-0.5 text-primary">+</span>
      </div>
      <div className="mt-2 text-[calc(12*var(--desktop-px-unit))] font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
    </motion.div>
  );
}

export function GlobalPresence() {
  const spokeNames = ["Syria", "Iraq", "Egypt", "Libya", "Yemen", "Somaliland", "Somalia", "Uzbekistan", "Bangladesh"];
  const spokes = spokeNames.map((n) => REGIONS.find((r) => r.name === n)!).filter(Boolean);
  const [active, setActive] = useState<Region>(REGIONS.find((r) => r.name === "Iraq")!);
  const [hovered, setHovered] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const STATS = [
    { icon: Globe, value: 10, label: "Countries" },
    { icon: Building2, value: 100, label: "Projects Delivered" },
    { icon: Stethoscope, value: 250, label: "Medical Systems" },
    { icon: Heart, value: 50, label: "Healthcare Facilities" },
  ];

  const FEATURES = [
    { icon: Globe, title: "Three Regions", copy: "Africa, Middle East & Central Asia" },
    { icon: Handshake, title: "Trusted Partner", copy: "Healthcare providers rely on us" },
    { icon: ShieldCheck, title: "Proven Track Record", copy: "Projects delivered since 1999" },
    { icon: Cog, title: "End-to-End Solutions", copy: "From concept to commissioning" },
    { icon: Headphones, title: "Lifetime Support", copy: "After-sales & technical support 24/7" },
  ];

  const jc = GEO.Jordan;

  // Build curved SVG path from Jordan to a spoke
  const buildPath = (name: string) => {
    const p = GEO[name];
    if (!p) return "";
    const mx = (jc.x + p.x) / 2;
    const my = (jc.y + p.y) / 2 - Math.abs(p.x - jc.x) * 0.25 - 15;
    return `M ${jc.x} ${jc.y} Q ${mx} ${my} ${p.x} ${p.y}`;
  };

  return (
    <section
      id="footprint"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-16 lg:py-20"
    >
      {/* soft radial gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(calc(1200*var(--desktop-px-unit)) calc(600*var(--desktop-px-unit)) at 85% 10%, rgba(225,29,46,0.06), transparent 60%), radial-gradient(calc(900*var(--desktop-px-unit)) calc(500*var(--desktop-px-unit)) at 10% 80%, rgba(15,23,42,0.05), transparent 60%)",
        }}
      />
      {/* medical blueprint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.04) calc(1*var(--desktop-px-unit)), transparent calc(1*var(--desktop-px-unit))), linear-gradient(to bottom, rgba(15,23,42,0.04) calc(1*var(--desktop-px-unit)), transparent calc(1*var(--desktop-px-unit)))",
          backgroundSize: "calc(56*var(--desktop-px-unit)) calc(56*var(--desktop-px-unit))",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* dotted accent (bottom-left) */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-16 left-8 h-40 w-40 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(15,23,42,0.18) calc(1.2*var(--desktop-px-unit)), transparent calc(1.2*var(--desktop-px-unit)))",
          backgroundSize: "calc(14*var(--desktop-px-unit)) calc(14*var(--desktop-px-unit))",
        }}
      />

      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[45fr_55fr] lg:items-center lg:gap-16">
          {/* LEFT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[calc(12*var(--desktop-px-unit))] font-bold uppercase tracking-[0.28em] text-primary"
            >
              Global Footprint
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-4 font-display text-[calc(40*var(--desktop-px-unit))] font-extrabold leading-[1.02] tracking-[-0.02em] text-foreground sm:text-[calc(52*var(--desktop-px-unit))]"
            >
              Delivering Excellence
              <br />
              Across Regions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-5 max-w-md text-[calc(15*var(--desktop-px-unit))] leading-relaxed text-muted-foreground"
            >
              We deliver <span className="font-semibold text-primary">turnkey</span> medical
              departments, advanced imaging systems and biomedical engineering solutions across
              Africa, the Middle East and Central Asia.
            </motion.p>

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
              {STATS.map((s, i) => (
                <StatCard
                  key={s.label}
                  icon={s.icon}
                  value={s.value}
                  label={s.label}
                  delay={0.15 + i * 0.08}
                  inView={inView}
                />
              ))}
            </div>

            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-[calc(15*var(--desktop-px-unit))] font-bold text-primary-foreground shadow-[0_20px_45px_-16px_color-mix(in_oklab,var(--primary)_70%,transparent)] transition-transform hover:-translate-y-0.5"
            >
              Explore Global Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>

          {/* RIGHT — MAP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full"
            style={{ aspectRatio: `${MAP_W} / ${MAP_H}` }}
          >
            {/* Base world-geography backdrop */}
            <svg
              viewBox={`0 0 ${MAP_W} ${MAP_H}`}
              className="absolute inset-0 h-full w-full"
              aria-label="Map showing AbuFarha's operations across the Middle East, Africa and Central Asia"
            >
              <defs>
                <linearGradient id="landGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#94a3b8" />
                </linearGradient>
                <linearGradient id="activeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="color-mix(in oklab, var(--primary) 85%, white)" />
                  <stop offset="100%" stopColor="var(--primary)" />
                </linearGradient>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.15" />
                </linearGradient>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                </radialGradient>
                <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Countries — neutral */}
              {WORLD_COUNTRIES.filter((c) => !HIGHLIGHT.has(c.name)).map((c) => (
                <path
                  key={c.name}
                  d={c.d}
                  fill="url(#landGrad)"
                  stroke="rgba(15,23,42,0.18)"
                  strokeWidth={0.6}
                  strokeLinejoin="round"
                />
              ))}
              {/* Highlighted countries */}
              {WORLD_COUNTRIES.filter((c) => HIGHLIGHT.has(c.name)).map((c) => {
                const isHov = hovered === c.name || active.name === c.name;
                return (
                  <path
                    key={c.name}
                    d={c.d}
                    fill="url(#activeGrad)"
                    stroke="var(--primary)"
                    strokeOpacity={isHov ? 1 : 0.7}
                    strokeWidth={isHov ? 1.2 : 0.8}
                    strokeLinejoin="round"
                    style={{
                      filter: isHov ? "drop-shadow(0 0 calc(4*var(--desktop-px-unit)) rgba(225,29,46,0.55))" : undefined,
                      transition: "all 0.3s ease",
                    }}
                  />
                );
              })}

              {/* Hub ambient glow */}
              <circle cx={jc.x} cy={jc.y} r={70} fill="url(#hubGlow)" />

              {/* Connection curves */}
              {spokes.map((r, i) => {
                const d = buildPath(r.name);
                const isHov = hovered === r.name || active.name === r.name;
                const pathId = `gf-route-${i}`;
                return (
                  <g key={r.name}>
                    <motion.path
                      id={pathId}
                      d={d}
                      fill="none"
                      stroke={isHov ? "var(--primary)" : "url(#lineGrad)"}
                      strokeWidth={isHov ? 1.4 : 0.7}
                      strokeLinecap="round"
                      filter="url(#lineGlow)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ duration: 1.4, delay: 0.2 + i * 0.08, ease: "easeInOut" }}
                    />
                    {/* Traveling particles from hub → node */}
                    <circle r={1.6} fill="var(--primary)">
                      <animateMotion
                        dur={`${3.2 + (i % 4) * 0.4}s`}
                        repeatCount="indefinite"
                        begin={`${i * 0.4}s`}
                        rotate="auto"
                      >
                        <mpath href={`#${pathId}`} />
                      </animateMotion>
                    </circle>
                    <circle r={1.1} fill="white" opacity="0.9">
                      <animateMotion
                        dur={`${3.2 + (i % 4) * 0.4}s`}
                        repeatCount="indefinite"
                        begin={`${i * 0.4 + 0.6}s`}
                      >
                        <mpath href={`#${pathId}`} />
                      </animateMotion>
                    </circle>
                  </g>
                );
              })}

              {/* Country nodes (dots) rendered inside SVG for perfect alignment */}
              {spokes.map((r) => {
                const p = GEO[r.name];
                const isHov = hovered === r.name || active.name === r.name;
                return (
                  <g key={`node-${r.name}`}>
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={isHov ? 8 : 6}
                      fill="var(--primary)"
                      opacity={0.25}
                    >
                      <animate attributeName="r" values={`${isHov ? 8 : 6};${isHov ? 14 : 11};${isHov ? 8 : 6}`} dur="2.4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.4;0;0.4" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={p.x} cy={p.y} r={isHov ? 4.5 : 3.5} fill="var(--primary)" stroke="white" strokeWidth={1.2} />
                  </g>
                );
              })}
            </svg>

            {/* Country labels + hover targets (HTML overlay, aligned to SVG coords via %) */}
            {spokes.map((r) => {
              const p = GEO[r.name];
              return (
                <button
                  key={`lbl-${r.name}`}
                  type="button"
                  onMouseEnter={() => {
                    setHovered(r.name);
                    setActive(r);
                  }}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => {
                    setHovered(r.name);
                    setActive(r);
                  }}
                  onBlur={() => setHovered(null)}
                  aria-label={r.name}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ left: `${(p.x / MAP_W) * 100}%`, top: `${(p.y / MAP_H) * 100}%` }}
                >
                  <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/90 px-2 py-0.5 text-[calc(11*var(--desktop-px-unit))] font-bold text-foreground shadow-sm ring-1 ring-black/5 backdrop-blur-sm">
                    {r.name}
                  </span>
                  {/* invisible hit-area */}
                  <span className="block h-6 w-6" />
                </button>
              );
            })}

            {/* Jordan HUB badge (large, elegant) */}
            <div
              className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${(jc.x / MAP_W) * 100}%`, top: `${(jc.y / MAP_H) * 100}%` }}
            >
              <div className="relative">
                <span className="absolute inset-0 -m-4 animate-ping rounded-full bg-primary/20" />
                <span className="absolute inset-0 -m-2 rounded-full bg-white/70 blur-xl" />
                <div className="relative flex h-[calc(92*var(--desktop-px-unit))] w-[calc(92*var(--desktop-px-unit))] flex-col items-center justify-center rounded-full bg-white shadow-[0_20px_45px_-12px_rgba(15,23,42,0.35)] ring-1 ring-primary/25">
                  {/* heart-pulse line */}
                  <svg viewBox="0 0 60 20" className="h-3 w-14 text-primary">
                    <path
                      d="M0 10 H12 L15 3 L20 17 L25 6 L30 14 L34 10 H60"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="mt-0.5 font-display text-[calc(13*var(--desktop-px-unit))] font-extrabold leading-none tracking-tight text-foreground">
                    Abu<span className="text-primary">Farha</span>
                  </div>
                  <div className="mt-0.5 text-[calc(6.5*var(--desktop-px-unit))] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Medical Equipment
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-white/90 px-2 py-0.5 text-[calc(11*var(--desktop-px-unit))] font-bold text-foreground shadow-sm ring-1 ring-black/5 backdrop-blur-sm">
                Jordan
              </div>
            </div>

            {/* Floating country card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 14, scale: 0.96, filter: "blur(calc(6*var(--desktop-px-unit)))" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(calc(0*var(--desktop-px-unit)))" }}
                exit={{ opacity: 0, y: -8, scale: 0.98, filter: "blur(calc(4*var(--desktop-px-unit)))" }}
                transition={{ duration: 0.32, ease: "easeOut" }}
                className="absolute bottom-4 right-4 z-30 w-[calc(270*var(--desktop-px-unit))] overflow-hidden rounded-2xl bg-white p-4 shadow-[0_30px_70px_-25px_rgba(15,23,42,0.4)] ring-1 ring-black/[0.06]"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-neutral-100 text-xl leading-none">
                    {active.flag}
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-[calc(16*var(--desktop-px-unit))] font-extrabold text-foreground">
                      {active.name}
                    </div>
                    {active.note && (
                      <div className="text-[calc(10.5*var(--desktop-px-unit))] font-semibold uppercase tracking-wider text-muted-foreground">
                        {active.note}
                      </div>
                    )}
                  </div>
                </div>

                <ul className="mt-3 space-y-1.5 border-t border-black/5 pt-3">
                  {active.equipment.map((e) => (
                    <li key={e.label} className="flex items-center justify-between text-[calc(12.5*var(--desktop-px-unit))]">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Stethoscope className="h-3.5 w-3.5 text-primary/70" strokeWidth={1.8} />
                        {e.label}
                      </span>
                      <span className="font-bold text-foreground">{e.qty}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 overflow-hidden rounded-lg">
                  <img
                    src={active.img}
                    alt={active.name}
                    className="h-24 w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <a
                  href="#projects"
                  className="mt-3 inline-flex items-center gap-1 text-[calc(12.5*var(--desktop-px-unit))] font-bold text-primary hover:text-primary/80"
                >
                  View Projects <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* BOTTOM FEATURE STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-3xl bg-white/85 p-6 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.22)] ring-1 ring-black/[0.05] backdrop-blur-xl lg:mt-16 lg:p-8"
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center rounded-2xl px-3 py-2 text-center transition-colors hover:bg-white"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <f.icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <div className="mt-3 font-display text-[calc(14*var(--desktop-px-unit))] font-extrabold text-foreground">
                  {f.title}
                </div>
                <p className="mt-1.5 text-[calc(12*var(--desktop-px-unit))] leading-snug text-muted-foreground">{f.copy}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
