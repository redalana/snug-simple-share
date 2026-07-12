import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PINS = [
  { top: "30%", left: "50%", label: "Libya" },
  { top: "34%", left: "56%", label: "Egypt" },
  { top: "40%", left: "63%", label: "Saudi Arabia" },
  { top: "44%", left: "66%", label: "UAE" },
  { top: "38%", left: "70%", label: "Qatar" },
  { top: "48%", left: "46%", label: "Nigeria" },
  { top: "52%", left: "58%", label: "Sudan" },
  { top: "62%", left: "60%", label: "Kenya" },
  { top: "70%", left: "55%", label: "Tanzania" },
];


const COVERAGE = [
  { value: "40+", label: "Countries" },
  { value: "250+", label: "Hospitals" },
  { value: "1500+", label: "Equipment Installed" },
  { value: "25+", label: "Years of Partnership" },
];

export function GlobalPresence() {
  const [active, setActive] = useState<number | null>(null);

    <section id="coverage" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Global Presence
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
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

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-secondary/40">
          <div
            className="absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                "radial-gradient(var(--muted-foreground) 1px, transparent 1.4px)",
              backgroundSize: "18px 18px",
            }}
          />
          {PINS.map((p, i) => (
            <div key={p.label} className="absolute" style={{ top: p.top, left: p.left }}>
              <span className="absolute -inset-2 animate-ping rounded-full bg-primary/40" style={{ animationDelay: `${i * 0.25}s` }} />
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 260 }}
                className="relative block h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
