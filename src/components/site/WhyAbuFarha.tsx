import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import {
  Activity,
  Stethoscope,
  DraftingCompass,
  Boxes,
  BadgeCheck,
  Handshake,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import cathLab from "@/assets/why-cathlab.jpg";

type Side = "left" | "right";

type Capability = {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  points: string[];
  side: Side;
  /** card vertical anchor in 100x100 composition space */
  cardY: number;
  /** highlight region on the image, as percentages of the image box */
  region: { x: number; y: number; w: number; h: number };
};

/** image box within the 100x100 composition space (desktop) — enlarged ~18% */
const IMG = { x0: 27, x1: 73, y0: 5, y1: 87 };
const imgW = IMG.x1 - IMG.x0;
const imgH = IMG.y1 - IMG.y0;

const CAPS: Capability[] = [
  {
    id: "biomedical",
    icon: Activity,
    title: "Biomedical Engineering",
    desc: "In-house biomedical engineering depth.",
    points: [
      "Certified biomedical engineers",
      "Equipment-level technical mastery",
      "Independent, honest judgment",
    ],
    side: "left",
    cardY: 16,
    // ceiling monitors / imaging displays
    region: { x: 22, y: 6, w: 34, h: 20 },
  },
  {
    id: "clinical",
    icon: Stethoscope,
    title: "Clinical Understanding",
    desc: "We speak your clinical language.",
    points: [
      "Real clinical workflow insight",
      "Specialty-specific knowledge",
      "Solutions built around patient care",
    ],
    side: "left",
    cardY: 44,
    // control room glass
    region: { x: 6, y: 30, w: 26, h: 26 },
  },
  {
    id: "engineering",
    icon: DraftingCompass,
    title: "Engineering Capability",
    desc: "The room engineered around the system.",
    points: [
      "Infrastructure & load planning",
      "Power, shielding & layout",
      "Built to clinical standards",
    ],
    side: "left",
    cardY: 72,
    // procedure table
    region: { x: 32, y: 56, w: 38, h: 26 },
  },
  {
    id: "integration",
    icon: Boxes,
    title: "Equipment Integration",
    desc: "Systems that work as one.",
    points: [
      "Multi-vendor integration",
      "A unified clinical environment",
      "Seamless imaging & data flow",
    ],
    side: "right",
    cardY: 16,
    // gantry / C-arm
    region: { x: 54, y: 12, w: 32, h: 30 },
  },
  {
    id: "oem",
    icon: BadgeCheck,
    title: "OEM Partnership",
    desc: "Direct, certified manufacturer access.",
    points: [
      "Authorized OEM channels",
      "Genuine parts & specification",
      "Factory-trained engineers",
    ],
    side: "right",
    cardY: 44,
    // side monitors / console
    region: { x: 62, y: 30, w: 30, h: 24 },
  },
  {
    id: "partnership",
    icon: Handshake,
    title: "Long-Term Partnership",
    desc: "A relationship that outlasts the sale.",
    points: [
      "A lifetime technical relationship",
      "Uptime you can rely on",
      "Growth alongside your hospital",
    ],
    side: "right",
    cardY: 72,
    // floor equipment / cabling
    region: { x: 58, y: 58, w: 30, h: 26 },
  },
];

/** convert an image-local region center to global 100x100 composition space */
function regionCenter(c: Capability) {
  const cx = c.region.x + c.region.w / 2;
  const cy = c.region.y + c.region.h / 2;
  return {
    x: IMG.x0 + (cx / 100) * imgW,
    y: IMG.y0 + (cy / 100) * imgH,
  };
}

function cardAnchor(c: Capability) {
  return { x: c.side === "left" ? 26 : 74, y: c.cardY };
}

/* ------------------------------------------------------------------ */
/*  Shared info panel                                                  */
/* ------------------------------------------------------------------ */

function InfoPanel({
  active,
  className = "",
}: {
  active: Capability | null;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-white/95 shadow-[0_28px_70px_-30px_rgba(15,23,42,0.45)] backdrop-blur ${className}`}
    >
      <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary via-primary to-primary/40" />
      <div className="p-5">
        <AnimatePresence mode="wait" initial={false}>
          {active === null ? (
            <motion.div
              key="default"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-[15px] font-bold text-ink">
                Why AbuFarha?
              </p>
              <p className="mt-1.5 text-[12.5px] leading-[1.6] text-muted-foreground">
                Hover a strength to see the expertise behind every system —
                not just the equipment, but the capability around it.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3">
                <motion.span
                  initial={{ scale: 0.85, rotate: -6 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-[0_12px_24px_-12px_var(--primary)]"
                >
                  <active.icon className="h-5 w-5" strokeWidth={1.7} />
                </motion.span>
                <div>
                  <p className="font-display text-[15px] font-bold text-ink">
                    {active.title}
                  </p>
                  <p className="mt-0.5 text-[12px] leading-[1.5] text-muted-foreground">
                    {active.desc}
                  </p>
                </div>
              </div>
              <ul className="mt-4 grid gap-2 border-t border-border pt-4">
                {active.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-[12.5px] leading-[1.5] text-ink/75"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Image with highlight regions                                       */
/* ------------------------------------------------------------------ */

function EquipmentImage({
  active,
  reduce,
  rounded = "rounded-[1.75rem]",
}: {
  active: Capability | null;
  reduce: boolean | null;
  rounded?: string;
}) {
  return (
    <motion.div
      animate={reduce ? undefined : { scale: [1, 1.012, 1] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      className={`relative h-full w-full overflow-hidden ${rounded} shadow-[0_50px_110px_-45px_rgba(15,23,42,0.6)] ring-1 ring-black/5`}
    >
      <img
        src={cathLab}
        alt="Cardiac catheterization lab engineered and delivered by AbuFarha"
        width={1024}
        height={1024}
        loading="lazy"
        className="h-full w-full object-cover"
      />

      {/* dimming veil that lifts around the active region */}
      <div
        className="pointer-events-none absolute inset-0 bg-ink/25 transition-opacity duration-500"
        style={{ opacity: active ? 1 : 0 }}
      />

      {/* highlight window */}
      <AnimatePresence>
        {active && (
          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute rounded-xl"
            style={{
              left: `${active.region.x}%`,
              top: `${active.region.y}%`,
              width: `${active.region.w}%`,
              height: `${active.region.h}%`,
              boxShadow:
                "0 0 0 1.5px color-mix(in oklab, var(--primary) 85%, transparent), 0 0 0 9999px rgba(15,23,42,0.18)",
              background:
                "color-mix(in oklab, var(--primary) 8%, transparent)",
            }}
          >
            {/* corner ticks — technical drawing feel */}
            {["-top-px -left-px", "-top-px -right-px", "-bottom-px -left-px", "-bottom-px -right-px"].map(
              (pos) => (
                <span
                  key={pos}
                  className={`absolute h-2.5 w-2.5 border-primary ${pos} ${
                    pos.includes("top") ? "border-t-2" : "border-b-2"
                  } ${pos.includes("left") ? "border-l-2" : "border-r-2"}`}
                />
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Capability micro-card                                              */
/* ------------------------------------------------------------------ */

function CapCard({
  cap,
  isActive,
  onEnter,
  onLeave,
}: {
  cap: Capability;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className={`group flex w-full items-center gap-4 rounded-2xl border bg-white p-4.5 text-left transition-all duration-300 ${
        isActive
          ? "-translate-y-0.5 border-primary/40 shadow-[0_26px_55px_-30px_rgba(15,23,42,0.5)] ring-1 ring-primary/15"
          : "border-border shadow-[0_2px_12px_-6px_rgba(15,23,42,0.14)] hover:-translate-y-0.5"
      } ${cap.side === "left" ? "lg:flex-row-reverse lg:text-right" : ""}`}
    >
      <span
        className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
          isActive
            ? "bg-primary text-white shadow-[0_16px_30px_-12px_var(--primary)]"
            : "bg-secondary text-primary ring-1 ring-border group-hover:bg-primary/10"
        }`}
      >
        <cap.icon className="h-[22px] w-[22px]" strokeWidth={1.7} />
      </span>
      <span className="min-w-0">
        <span className="block font-display text-[16px] font-extrabold leading-tight tracking-tight text-ink">
          {cap.title}
        </span>
        <span className="mt-1.5 block text-[12.5px] leading-[1.5] text-muted-foreground">
          {cap.desc}
        </span>
      </span>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export function WhyAbuFarha() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = CAPS.find((c) => c.id === activeId) ?? null;

  // mobile carousel
  const trackRef = useRef<HTMLDivElement>(null);
  const [mIndex, setMIndex] = useState(0);
  const mActive = CAPS[mIndex] ?? CAPS[0];

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    if (i !== mIndex) setMIndex(Math.max(0, Math.min(CAPS.length - 1, i)));
  };

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section id="why" className="relative overflow-hidden bg-white py-24">
      {/* blueprint / engineering grid — < 3% */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-ink) 1px, transparent 1px), linear-gradient(to bottom, var(--color-ink) 1px, transparent 1px), linear-gradient(to right, var(--color-ink) 1px, transparent 1px), linear-gradient(to bottom, var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "160px 160px, 160px 160px, 32px 32px, 32px 32px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 45%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 45%, black, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* headline */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Eyebrow index="02" align="center">
              The Hospital Ecosystem
            </Eyebrow>
          </div>
          <h2 className="mt-6 font-display text-[2.3rem] font-extrabold leading-[1.04] tracking-[-0.025em] text-ink sm:text-[3.15rem]">
            We don&apos;t supply equipment.
            <br />
            We <span className="text-primary">engineer the room</span> around it.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.75] text-muted-foreground">
            One Cath Lab. Six disciplines converging on a single clinical
            outcome — this is what a complete healthcare environment looks like.
          </p>
        </div>

        {/* ============ DESKTOP: orbital ecosystem ============ */}
        <div className="relative mx-auto mt-20 hidden aspect-[16/11] w-full max-w-6xl lg:block">
          {/* engineering connection lines */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <marker
                id="eco-dot"
                markerWidth="4"
                markerHeight="4"
                refX="2"
                refY="2"
              >
                <circle cx="2" cy="2" r="1.4" fill="var(--color-primary)" />
              </marker>
            </defs>
            {CAPS.map((c) => {
              const a = cardAnchor(c);
              const t = regionCenter(c);
              const midX = (a.x + t.x) / 2;
              const isActive = activeId === c.id;
              return (
                <g key={c.id}>
                  {/* elbowed technical line */}
                  <motion.path
                    d={`M ${a.x} ${a.y} L ${midX} ${a.y} L ${midX} ${t.y} L ${t.x} ${t.y}`}
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeOpacity={isActive ? 0.95 : 0.22}
                    strokeWidth={isActive ? 0.7 : 0.4}
                    strokeDasharray={isActive ? "0" : "1.4 1.4"}
                    vectorEffect="non-scaling-stroke"
                    markerEnd="url(#eco-dot)"
                    className="transition-[stroke-opacity,stroke-width] duration-300"
                  />
                  {/* card-side node */}
                  <circle
                    cx={a.x}
                    cy={a.y}
                    r={0.9}
                    fill="var(--color-primary)"
                    fillOpacity={isActive ? 1 : 0.4}
                    vectorEffect="non-scaling-stroke"
                  />
                  {/* terminal node inside the equipment — ambient pulse */}
                  <circle
                    cx={t.x}
                    cy={t.y}
                    r={0.85}
                    fill="var(--color-primary)"
                    fillOpacity={isActive ? 1 : 0.5}
                    vectorEffect="non-scaling-stroke"
                  />
                  {!reduce && (
                    <motion.circle
                      cx={t.x}
                      cy={t.y}
                      r={0.85}
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth={0.4}
                      vectorEffect="non-scaling-stroke"
                      initial={false}
                      animate={{ r: [0.85, 2.6], opacity: [0.55, 0] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: (a.y / 100) * 1.2,
                      }}
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* center hero image */}
          <div
            className="absolute"
            style={{
              left: `${IMG.x0}%`,
              top: `${IMG.y0}%`,
              width: `${imgW}%`,
              height: `${imgH}%`,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full"
            >
              <EquipmentImage active={active} reduce={reduce} />
            </motion.div>
          </div>

          {/* left column cards */}
          <div className="absolute left-0 top-0 flex h-full w-[25%] flex-col justify-around">
            {CAPS.filter((c) => c.side === "left").map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, x: -26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: 0.2 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <CapCard
                  cap={c}
                  isActive={activeId === c.id}
                  onEnter={() => setActiveId(c.id)}
                  onLeave={() => setActiveId(null)}
                />
              </motion.div>
            ))}
          </div>

          {/* right column cards */}
          <div className="absolute right-0 top-0 flex h-full w-[25%] flex-col justify-around">
            {CAPS.filter((c) => c.side === "right").map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, x: 26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: 0.2 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <CapCard
                  cap={c}
                  isActive={activeId === c.id}
                  onEnter={() => setActiveId(c.id)}
                  onLeave={() => setActiveId(null)}
                />
              </motion.div>
            ))}
          </div>

          {/* shared info panel — beside / below the equipment */}
          <div className="absolute bottom-0 left-1/2 w-[360px] -translate-x-1/2 translate-y-2">
            <InfoPanel active={active} />
          </div>
        </div>

        {/* ============ TABLET: semi-orbital ============ */}
        <div className="mt-16 hidden md:block lg:hidden">
          <div className="grid grid-cols-[1fr_1.15fr] items-center gap-6">
            <div className="aspect-[4/5]">
              <EquipmentImage active={active} reduce={reduce} />
            </div>
            <div className="grid gap-3">
              {CAPS.map((c) => (
                <CapCard
                  key={c.id}
                  cap={{ ...c, side: "right" }}
                  isActive={activeId === c.id}
                  onEnter={() => setActiveId(c.id)}
                  onLeave={() => setActiveId(null)}
                />
              ))}
            </div>
          </div>
          <div className="mt-5">
            <InfoPanel active={active} />
          </div>
        </div>

        {/* ============ MOBILE: dedicated swipe experience ============ */}
        <div className="mt-12 md:hidden">
          <div className="aspect-[4/3] w-full">
            <EquipmentImage active={mActive} reduce={reduce} rounded="rounded-3xl" />
          </div>

          {/* progress dots */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {CAPS.map((c, i) => (
              <button
                key={c.id}
                type="button"
                aria-label={`Show ${c.title}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === mIndex ? "w-7 bg-primary" : "w-1.5 bg-border"
                }`}
              />
            ))}
          </div>

          {/* swipeable capability slides */}
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {CAPS.map((c) => (
              <div
                key={c.id}
                className="w-full shrink-0 snap-center"
                style={{ scrollSnapStop: "always" }}
              >
                <div className="rounded-3xl border border-border bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.4)]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-[0_14px_26px_-12px_var(--primary)]">
                      <c.icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                        Capability
                      </p>
                      <h3 className="font-display text-lg font-extrabold tracking-tight text-ink">
                        {c.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-[13.5px] leading-[1.6] text-ink/80">
                    {c.desc}
                  </p>
                  <ul className="mt-4 grid gap-2 border-t border-border pt-4">
                    {c.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2.5 text-[13px] leading-[1.5] text-muted-foreground"
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* swipe hint */}
          <div className="mt-2 flex items-center justify-center gap-1.5 text-[12px] font-medium text-muted-foreground">
            Swipe to explore the ecosystem
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
          </div>
        </div>
      </div>
    </section>
  );
}
