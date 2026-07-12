import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

const PINS = [
  { top: "30%", left: "50%", label: "Libya" },
  { top: "34%", left: "56%", label: "Egypt", hq: true },
  { top: "40%", left: "63%", label: "Saudi Arabia" },
  { top: "44%", left: "66%", label: "UAE" },
  { top: "38%", left: "70%", label: "Qatar" },
  { top: "48%", left: "46%", label: "Nigeria" },
  { top: "52%", left: "58%", label: "Sudan" },
  { top: "62%", left: "60%", label: "Kenya" },
  { top: "70%", left: "55%", label: "Tanzania" },
];

// viewBox is 100 x 75 (4:3). Convert pin %s: x = left, y = top * 0.75.
const HQ = { x: 56, y: 34 * 0.75 };
const LINKS = PINS.filter((p) => !p.hq).map((p) => ({
  x: parseFloat(p.left),
  y: parseFloat(p.top) * 0.75,
}));



const COVERAGE = [
  { value: "40+", label: "Countries" },
  { value: "250+", label: "Hospitals" },
  { value: "1500+", label: "Equipment Installed" },
  { value: "25+", label: "Years of Partnership" },
];

export function GlobalPresence() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="coverage" className="bg-white py-20">

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <Eyebrow>Global Presence</Eyebrow>
          <h2 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.12] tracking-[-0.02em] text-ink sm:text-[2.45rem]">
            Serving Hospitals Across Africa &amp; the Middle East
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            From North Africa to South Asia, we support healthcare providers with world-class
            technology, local engineering teams and dependable after-sales coverage.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {COVERAGE.map((c) => (
              <div key={c.label} className="rounded-xl border border-border bg-secondary/40 p-4">
                <div className="font-display text-2xl font-extrabold text-primary">{c.value}</div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">{c.label}</div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
          >
            Explore Our Coverage
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary/60 to-white">
          {/* dotted map field */}
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(var(--muted-foreground) 1px, transparent 1.4px)",
              backgroundSize: "18px 18px",
            }}
          />
          {/* stylized Africa + Middle East landmass + coverage links */}
          <svg
            aria-hidden
            viewBox="0 0 100 75"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M38 14 L50 12 L58 15 L60 20 L66 20 L70 24 L68 30 L72 33 L70 38 L64 40 L62 47 L58 52 L56 62 L52 70 L48 66 L47 56 L42 50 L40 44 L36 40 L34 33 L37 27 L40 22 Z"
              fill="var(--primary)"
              fillOpacity="0.07"
              stroke="var(--primary)"
              strokeOpacity="0.22"
              strokeWidth="0.5"
              strokeLinejoin="round"
            />
            {/* coverage links radiating from HQ (Egypt) */}
            {LINKS.map((l, i) => {
              const mx = (HQ.x + l.x) / 2;
              const my = (HQ.y + l.y) / 2 - Math.abs(l.x - HQ.x) * 0.28 - 3;
              return (
                <motion.path
                  key={i}
                  d={`M ${HQ.x} ${HQ.y} Q ${mx} ${my} ${l.x} ${l.y}`}
                  fill="none"
                  stroke="var(--primary)"
                  strokeOpacity="0.35"
                  strokeWidth="0.4"
                  strokeDasharray="1.4 1.4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1.1, delay: 0.3 + i * 0.12, ease: "easeInOut" }}
                />
              );
            })}
          </svg>


          {PINS.map((p, i) => (
            <div
              key={p.label}
              className="absolute z-10"
              style={{ top: p.top, left: p.left }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <span
                className={`absolute animate-ping rounded-full bg-primary/40 ${p.hq ? "-inset-3" : "-inset-2"}`}
                style={{ animationDelay: `${i * 0.25}s` }}
              />
              <motion.button
                type="button"
                aria-label={p.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 260 }}
                className={`relative block cursor-pointer rounded-full bg-primary transition-transform hover:scale-125 ${
                  p.hq ? "h-4 w-4 ring-4 ring-primary/30" : "h-3 w-3 ring-4 ring-primary/20"
                }`}
              />
              <div
                className={`pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2.5 py-1 text-[11px] font-semibold text-white shadow-lg transition-all duration-200 ${
                  active === i || p.hq ? "opacity-100" : "translate-y-1 opacity-0"
                }`}
              >
                {p.hq ? `${p.label} · HQ` : p.label}
                <span className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-4 border-t-4 border-x-transparent border-t-ink" />
              </div>
            </div>
          ))}

          {/* legend */}
          <div className="absolute bottom-4 left-4 flex items-center gap-4 rounded-full border border-border bg-white/85 px-3.5 py-1.5 text-[11px] font-medium text-muted-foreground shadow-sm backdrop-blur">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-primary ring-2 ring-primary/30" /> Headquarters
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-primary/70" /> Active coverage
            </span>
          </div>
        </div>
      </div>
    </section>
  );


}
