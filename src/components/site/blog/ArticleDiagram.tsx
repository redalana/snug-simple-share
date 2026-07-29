import { useId } from "react";
import type { DiagramId } from "@/lib/blog";

/**
 * Inline, responsive, accessible medical/technical diagrams for flagship
 * articles. Every diagram is drawn as vector SVG (no image payload, no layout
 * shift, infinitely crisp) and is exposed to assistive technology through
 * `role="img"` plus a linked <title>/<desc> pair.
 */
export function ArticleDiagram({
  id,
  title,
  purpose,
  alt,
  caption,
}: {
  id: DiagramId;
  title: string;
  purpose: string;
  alt: string;
  caption?: string;
}) {
  const uid = useId();
  const titleId = `${uid}-t`;
  const descId = `${uid}-d`;

  return (
    <figure className="not-prose">
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-(--shadow-editorial-xs)">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border bg-secondary/50 px-5 py-3">
          <p className="font-display text-[calc(14.5*var(--desktop-px-unit))] font-extrabold text-ink">
            {title}
          </p>
          <p className="text-[calc(11.5*var(--desktop-px-unit))] font-semibold uppercase tracking-wider text-primary">
            Figure
          </p>
        </div>
        <p className="border-b border-border/70 px-5 py-2.5 text-[calc(12.5*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
          <span className="font-semibold text-ink">Purpose: </span>
          {purpose}
        </p>
        <div className="overflow-x-auto p-4 sm:p-5">
          <svg
            role="img"
            aria-labelledby={`${titleId} ${descId}`}
            viewBox={VIEWBOX[id]}
            className="h-auto w-full min-w-[34rem] text-ink"
            focusable="false"
          >
            <title id={titleId}>{title}</title>
            <desc id={descId}>{alt}</desc>
            <Shapes id={id} />
          </svg>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 border-l-2 border-primary/40 pl-3 text-[calc(12.5*var(--desktop-px-unit))] italic leading-relaxed text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

const VIEWBOX: Record<DiagramId, string> = {
  "mri-anatomy": "0 0 900 420",
  "mri-signal-chain": "0 0 900 250",
  "scanning-process": "0 0 900 260",
  "patient-journey": "0 0 900 260",
  "hospital-workflow": "0 0 900 330",
  "room-planning": "0 0 900 420",
  "safety-zones": "0 0 900 400",
  "field-strength-decision": "0 0 900 420",
  "exam-timeline": "0 0 900 260",
};

/* ------------------------------------------------------------------ */
/*  Shared primitives                                                  */
/* ------------------------------------------------------------------ */

const FILL_SOFT = "fill-secondary";
const STROKE = "stroke-border";

function Box({
  x,
  y,
  w,
  h,
  accent,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  accent?: boolean;
}) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={12}
      className={accent ? "fill-primary/8 stroke-primary/40" : `${FILL_SOFT} ${STROKE}`}
      strokeWidth={1.5}
    />
  );
}

function Label({
  x,
  y,
  children,
  size = 13,
  bold,
  muted,
  accent,
  anchor = "middle",
}: {
  x: number;
  y: number;
  children: React.ReactNode;
  size?: number;
  bold?: boolean;
  muted?: boolean;
  accent?: boolean;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontSize={size}
      className={
        accent
          ? "fill-primary"
          : muted
            ? "fill-muted-foreground"
            : "fill-current"
      }
      fontWeight={bold ? 700 : 500}
    >
      {children}
    </text>
  );
}

function Arrow({ x1, y1, x2, y2, marker }: { x1: number; y1: number; x2: number; y2: number; marker: string }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      className="stroke-primary/60"
      strokeWidth={2}
      markerEnd={`url(#${marker})`}
    />
  );
}

function Defs({ marker }: { marker: string }) {
  return (
    <defs>
      <marker id={marker} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" className="fill-primary/70" />
      </marker>
    </defs>
  );
}

/** Multi-line text helper — SVG has no automatic wrapping. */
function Lines({
  x,
  y,
  lines,
  size = 12,
  gap = 15,
  anchor = "middle",
  muted,
}: {
  x: number;
  y: number;
  lines: string[];
  size?: number;
  gap?: number;
  anchor?: "start" | "middle" | "end";
  muted?: boolean;
}) {
  return (
    <>
      {lines.map((line, i) => (
        <Label key={line + i} x={x} y={y + i * gap} size={size} anchor={anchor} muted={muted}>
          {line}
        </Label>
      ))}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Diagrams                                                           */
/* ------------------------------------------------------------------ */

function Shapes({ id }: { id: DiagramId }) {
  switch (id) {
    case "mri-anatomy":
      return <MriAnatomy />;
    case "mri-signal-chain":
      return <SignalChain />;
    case "scanning-process":
      return <ScanningProcess />;
    case "patient-journey":
      return <PatientJourney />;
    case "hospital-workflow":
      return <HospitalWorkflow />;
    case "room-planning":
      return <RoomPlanning />;
    case "safety-zones":
      return <SafetyZones />;
    case "field-strength-decision":
      return <FieldStrengthTree />;
    case "exam-timeline":
      return <ExamTimeline />;
  }
}

function MriAnatomy() {
  const layers = [
    { r: 168, label: "1  Superconducting magnet windings (NbTi)" },
    { r: 140, label: "2  Cryostat / liquid-helium vessel (~4 K)" },
    { r: 112, label: "3  Shim coils" },
    { r: 86, label: "4  Gradient coils (X, Y, Z)" },
    { r: 62, label: "5  RF transmit body coil" },
  ];
  return (
    <>
      <Defs marker="anat" />
      <rect x={8} y={8} width={884} height={404} rx={16} className={`${FILL_SOFT} ${STROKE}`} strokeWidth={1.5} />
      <g transform="translate(300,210)">
        {layers.map((l, i) => (
          <circle
            key={l.r}
            r={l.r}
            className={i === 0 ? "fill-white stroke-primary/40" : `fill-white ${STROKE}`}
            strokeWidth={1.5}
          />
        ))}
        <circle r={40} className="fill-primary/8 stroke-primary/40" strokeWidth={1.5} />
        <Label x={0} y={4} size={12} bold accent>
          Bore
        </Label>
        <rect x={-150} y={44} width={300} height={14} rx={7} className="fill-current opacity-15" />
        <Label x={0} y={80} size={11} muted>
          Patient table
        </Label>
      </g>
      {layers.map((l, i) => {
        const y = 70 + i * 40;
        return (
          <g key={l.label}>
            <Arrow x1={560} y1={y} x2={470 - i * 8} y2={y + 20} marker="anat" />
            <Label x={572} y={y + 4} anchor="start" size={12.5} bold>
              {l.label}
            </Label>
          </g>
        );
      })}
      <Label x={572} y={278} anchor="start" size={12.5} bold>
        6  RF receive coil (patient-specific)
      </Label>
      <Label x={572} y={310} anchor="start" size={12.5} bold>
        7  Quench pipe to outside air
      </Label>
      <Label x={572} y={342} anchor="start" size={12.5} bold>
        8  RF-shielded room (Faraday cage)
      </Label>
      <Label x={572} y={374} anchor="start" size={12.5} bold>
        9  Equipment room: gradient amplifiers, RF chain, cooling
      </Label>
    </>
  );
}

function SignalChain() {
  const steps = [
    ["Alignment", "B₀ aligns protons"],
    ["Excitation", "RF pulse at Larmor freq."],
    ["Relaxation", "T1 / T2 signal emitted"],
    ["Encoding", "Gradients map position"],
    ["k-space", "Raw data matrix"],
    ["Image", "Fourier transform"],
  ];
  return (
    <>
      <Defs marker="sig" />
      {steps.map(([t, s], i) => {
        const x = 12 + i * 148;
        return (
          <g key={t}>
            <Box x={x} y={70} w={132} h={100} accent={i === steps.length - 1} />
            <Label x={x + 66} y={104} bold size={13.5}>
              {t}
            </Label>
            <Lines x={x + 66} y={130} lines={wrap(s, 18)} size={11.5} muted />
            {i < steps.length - 1 && <Arrow x1={x + 134} y1={120} x2={x + 144} y2={120} marker="sig" />}
          </g>
        );
      })}
      <Label x={450} y={40} bold size={14}>
        From magnetic field to diagnostic image
      </Label>
      <Label x={450} y={205} size={12} muted>
        Sequence design (TR, TE, flip angle) determines which tissue property dominates contrast.
      </Label>
    </>
  );
}

function ScanningProcess() {
  const steps = ["Screening", "Positioning", "Coil selection", "Localiser", "Sequences", "QA & PACS"];
  return (
    <>
      <Defs marker="proc" />
      <Label x={450} y={38} bold size={14}>
        MRI scanning process — inside the magnet room
      </Label>
      {steps.map((s, i) => {
        const x = 20 + i * 145;
        return (
          <g key={s}>
            <path
              d={`M${x},70 H${x + 108} L${x + 130},120 L${x + 108},170 H${x} L${x + 22},120 Z`}
              className={i === steps.length - 1 ? "fill-primary/8 stroke-primary/40" : `${FILL_SOFT} ${STROKE}`}
              strokeWidth={1.5}
            />
            <Label x={x + 66} y={118} bold size={12.5}>
              {s}
            </Label>
            <Label x={x + 66} y={140} size={11} muted>
              {`Step ${i + 1}`}
            </Label>
          </g>
        );
      })}
      <Label x={450} y={215} size={12} muted>
        Protocol discipline at steps 3–5 is the single largest determinant of throughput and image quality.
      </Label>
    </>
  );
}

function PatientJourney() {
  const stops = [
    "Referral",
    "Screening",
    "Preparation",
    "Positioning",
    "Scan",
    "Review",
    "Report",
  ];
  return (
    <>
      <Defs marker="pj" />
      <Label x={450} y={38} bold size={14}>
        Patient journey — referral to report
      </Label>
      <line x1={40} y1={130} x2={860} y2={130} className="stroke-primary/30" strokeWidth={3} />
      {stops.map((s, i) => {
        const x = 60 + i * 130;
        return (
          <g key={s}>
            <circle cx={x} cy={130} r={18} className="fill-white stroke-primary/50" strokeWidth={2} />
            <Label x={x} y={135} size={12} bold accent>
              {i + 1}
            </Label>
            <Label x={x} y={i % 2 === 0 ? 96 : 178} size={12.5} bold>
              {s}
            </Label>
          </g>
        );
      })}
      <Label x={450} y={225} size={12} muted>
        Safety screening is repeated twice — at booking and again at the Zone III threshold.
      </Label>
    </>
  );
}

function HospitalWorkflow() {
  const lanes = [
    { name: "Referring clinician", items: ["Clinical question", "Justification", "Acts on report"] },
    { name: "Radiology department", items: ["Scheduling & screening", "Protocol assignment", "Acquisition & QA"] },
    { name: "Reporting & IT", items: ["PACS transfer", "Radiologist report", "RIS / EMR delivery"] },
  ];
  return (
    <>
      <Defs marker="hw" />
      <Label x={450} y={34} bold size={14}>
        Hospital workflow — departmental responsibilities
      </Label>
      {lanes.map((lane, li) => {
        const y = 60 + li * 88;
        return (
          <g key={lane.name}>
            <rect x={12} y={y} width={196} height={72} rx={12} className="fill-primary/8 stroke-primary/30" strokeWidth={1.5} />
            <Lines x={110} y={y + 34} lines={wrap(lane.name, 20)} size={12.5} />
            {lane.items.map((item, ii) => {
              const x = 232 + ii * 222;
              return (
                <g key={item}>
                  <Box x={x} y={y} w={200} h={72} />
                  <Lines x={x + 100} y={y + 34} lines={wrap(item, 22)} size={12} />
                  {ii < lane.items.length - 1 && (
                    <Arrow x1={x + 202} y1={y + 36} x2={x + 218} y2={y + 36} marker="hw" />
                  )}
                </g>
              );
            })}
          </g>
        );
      })}
      <Label x={450} y={318} size={12} muted>
        Turnaround time is lost between lanes, not inside them — handover discipline drives service performance.
      </Label>
    </>
  );
}

function RoomPlanning() {
  return (
    <>
      <Defs marker="rp" />
      <Label x={450} y={34} bold size={14}>
        MRI suite planning — indicative room layout
      </Label>
      <rect x={40} y={56} width={820} height={300} rx={14} className="fill-white stroke-border" strokeWidth={1.5} />
      {/* Magnet room */}
      <rect x={60} y={76} width={360} height={260} rx={12} className="fill-primary/8 stroke-primary/40" strokeWidth={2} />
      <Label x={240} y={104} bold size={13} accent>
        Zone IV — Magnet room (RF shielded)
      </Label>
      <circle cx={240} cy={215} r={78} className="fill-white stroke-border" strokeWidth={1.5} />
      <circle cx={240} cy={215} r={26} className="fill-secondary stroke-primary/40" strokeWidth={1.5} />
      <Label x={240} y={219} size={11} muted>
        Bore
      </Label>
      <Label x={240} y={318} size={11} muted>
        5 G line must remain inside this room
      </Label>
      {/* Control room */}
      <rect x={440} y={76} width={200} height={124} rx={12} className={`${FILL_SOFT} ${STROKE}`} strokeWidth={1.5} />
      <Lines x={540} y={128} lines={["Control room", "(Zone III)"]} size={12.5} />
      <Label x={540} y={172} size={11} muted>
        Direct line of sight to bore
      </Label>
      {/* Equipment room */}
      <rect x={440} y={212} width={200} height={124} rx={12} className={`${FILL_SOFT} ${STROKE}`} strokeWidth={1.5} />
      <Lines x={540} y={264} lines={["Equipment room"]} size={12.5} />
      <Lines x={540} y={288} lines={["Gradient amps, RF, chiller", "Dedicated HVAC + power"]} size={10.5} gap={14} muted />
      {/* Support spaces */}
      <rect x={660} y={76} width={180} height={80} rx={12} className={`${FILL_SOFT} ${STROKE}`} strokeWidth={1.5} />
      <Lines x={750} y={112} lines={["Screening &", "changing (Zone II)"]} size={11.5} gap={15} />
      <rect x={660} y={170} width={180} height={80} rx={12} className={`${FILL_SOFT} ${STROKE}`} strokeWidth={1.5} />
      <Lines x={750} y={206} lines={["Patient waiting", "(Zone I / II)"]} size={11.5} gap={15} />
      <rect x={660} y={264} width={180} height={72} rx={12} className={`${FILL_SOFT} ${STROKE}`} strokeWidth={1.5} />
      <Lines x={750} y={296} lines={["Quench vent riser", "to external air"]} size={11.5} gap={15} />
      <Arrow x1={422} y1={140} x2={438} y2={140} marker="rp" />
      <Arrow x1={422} y1={274} x2={438} y2={274} marker="rp" />
      <Label x={450} y={382} size={12} muted>
        Indicative only — floor loading, delivery route, vibration and adjacency must be surveyed before purchase.
      </Label>
    </>
  );
}

function SafetyZones() {
  const zones = [
    { r: 170, label: "Zone I — public access", tone: "fill-secondary" },
    { r: 132, label: "Zone II — screening", tone: "fill-secondary" },
    { r: 94, label: "Zone III — controlled", tone: "fill-primary/8" },
    { r: 54, label: "Zone IV — magnet room", tone: "fill-primary/15" },
  ];
  return (
    <>
      <Defs marker="sz" />
      <Label x={450} y={32} bold size={14}>
        ACR four-zone MRI safety model
      </Label>
      <g transform="translate(250,215)">
        {zones.map((z) => (
          <circle key={z.r} r={z.r} className={`${z.tone} stroke-border`} strokeWidth={1.5} />
        ))}
        <Label x={0} y={4} size={11.5} bold accent>
          IV
        </Label>
      </g>
      {zones.map((z, i) => {
        const y = 90 + i * 62;
        return (
          <g key={z.label}>
            <Arrow x1={520} y1={y} x2={430 - i * 4} y2={y + 34} marker="sz" />
            <Label x={534} y={y + 4} anchor="start" size={13} bold>
              {z.label}
            </Label>
            <Label x={534} y={y + 22} anchor="start" size={11.5} muted>
              {
                [
                  "Freely accessible; no MR hazard",
                  "Patient interview and written screening",
                  "Access-controlled; fringe field hazardous",
                  "Direct supervision at all times; magnet always on",
                ][i]
              }
            </Label>
          </g>
        );
      })}
      <Label x={450} y={378} size={12} muted>
        Ferromagnetic detection and MR-conditional equipment control apply at the Zone III / IV threshold.
      </Label>
    </>
  );
}

function FieldStrengthTree() {
  return (
    <>
      <Defs marker="ft" />
      <Label x={450} y={30} bold size={14}>
        Field strength decision tree
      </Label>
      <Box x={330} y={50} w={240} h={58} accent />
      <Lines x={450} y={78} lines={["One scanner for the whole hospital?"]} size={12.5} />
      <Arrow x1={420} y1={110} x2={250} y2={158} marker="ft" />
      <Arrow x1={480} y1={110} x2={650} y2={158} marker="ft" />
      <Label x={318} y={132} size={11.5} muted>
        Yes
      </Label>
      <Label x={578} y={132} size={11.5} muted>
        No — dedicated programme
      </Label>

      <Box x={130} y={160} w={240} h={64} />
      <Lines x={250} y={188} lines={["1.5T — the global workhorse", "Balanced SNR, widest compatibility"]} size={11.5} gap={16} />

      <Box x={530} y={160} w={240} h={64} />
      <Lines x={650} y={188} lines={["Which programme is funded?"]} size={12} />

      <Arrow x1={600} y1={226} x2={470} y2={272} marker="ft" />
      <Arrow x1={700} y1={226} x2={800} y2={272} marker="ft" />

      <Box x={360} y={274} w={230} h={72} />
      <Lines
        x={475}
        y={302}
        lines={["3T", "Prostate mpMRI, neuro, MSK detail", "Higher SAR & siting cost"]}
        size={11.5}
        gap={15}
      />

      <Box x={660} y={274} w={220} h={72} />
      <Lines
        x={770}
        y={302}
        lines={["0.3T–0.55T open / low-field", "Bariatric, paediatric, implants", "Complement, not a substitute"]}
        size={11}
        gap={15}
      />

      <Box x={40} y={274} w={260} h={72} />
      <Lines
        x={170}
        y={302}
        lines={["7T", "Research and specialised neuro only", "Rarely justified in a general hospital"]}
        size={11}
        gap={15}
      />
      <Arrow x1={220} y1={226} x2={180} y2={272} marker="ft" />
      <Label x={450} y={392} size={12} muted>
        Choose field strength from funded clinical demand and siting reality — never from specification prestige.
      </Label>
    </>
  );
}

function ExamTimeline() {
  const segments = [
    { label: "Check-in & screening", minutes: 10 },
    { label: "Changing & cannulation", minutes: 8 },
    { label: "Positioning & coils", minutes: 6 },
    { label: "Acquisition", minutes: 25 },
    { label: "Image QA", minutes: 5 },
    { label: "Table turnover", minutes: 6 },
  ];
  const total = segments.reduce((s, x) => s + x.minutes, 0);
  let cursor = 40;
  return (
    <>
      <Label x={450} y={34} bold size={14}>
        Typical MRI examination timeline (≈{total} minutes per slot)
      </Label>
      {segments.map((s, i) => {
        const w = (820 * s.minutes) / total;
        const x = cursor;
        cursor += w;
        return (
          <g key={s.label}>
            <rect
              x={x}
              y={80}
              width={w - 4}
              height={54}
              rx={8}
              className={i === 3 ? "fill-primary/15 stroke-primary/40" : `${FILL_SOFT} ${STROKE}`}
              strokeWidth={1.5}
            />
            <Label x={x + (w - 4) / 2} y={112} size={11.5} bold>
              {`${s.minutes}′`}
            </Label>
            <Lines
              x={x + (w - 4) / 2}
              y={i % 2 === 0 ? 158 : 190}
              lines={wrap(s.label, 16)}
              size={11}
              gap={14}
              muted
            />
          </g>
        );
      })}
      <Label x={450} y={228} size={12} muted>
        Only the highlighted block is scanning — non-imaging time is where most capacity is won or lost.
      </Label>
    </>
  );
}

/** Naive word wrapper for SVG labels. */
function wrap(text: string, max: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    if ((line + " " + word).trim().length > max && line) {
      lines.push(line.trim());
      line = word;
    } else {
      line = `${line} ${word}`.trim();
    }
  }
  if (line) lines.push(line);
  return lines;
}
