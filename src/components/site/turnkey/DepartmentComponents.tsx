import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Check } from "lucide-react";
import { COMPONENTS, HOTSPOTS, heroCath } from "./data";

export function DepartmentComponents() {
  const [active, setActive] = useState(COMPONENTS[0]);
  return (
    <section className="bg-[#f7f8fa] py-0">
      <div className="mx-auto grid max-w-[100rem] gap-0 lg:grid-cols-2">
        {/* LEFT — full-bleed clinical image with hotspots */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 lg:aspect-auto">
          <img src={heroCath} alt="Department anatomy" className="h-full w-full object-cover" />
          {HOTSPOTS.map((h, i) => (
            <button
              key={i}
              style={{ top: h.top, left: h.left }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              aria-label={`Hotspot ${i + 1}`}
            >
              <span className="relative grid h-8 w-8 place-items-center rounded-full bg-primary text-white shadow-lg">
                <Plus className="h-4 w-4" />
                <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40" />
              </span>
            </button>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center px-6 py-16 lg:px-14 lg:py-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-primary">
            Inside the Department
          </p>
          <h2 className="mt-4 font-display text-[34px] font-extrabold leading-[1.05] sm:text-[40px]">
            Engineered for<br />Precision. Built for<br />Performance.
          </h2>
          <p className="mt-4 max-w-md text-[14px] leading-relaxed text-muted-foreground">
            Every component is carefully selected and integrated to deliver
            exceptional clinical outcomes.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.1fr]">
            {/* Component list */}
            <ul className="divide-y divide-black/5 rounded-2xl bg-white ring-1 ring-black/5">
              {COMPONENTS.map((c) => {
                const on = c.id === active.id;
                return (
                  <li key={c.id}>
                    <button
                      onClick={() => setActive(c)}
                      className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium transition-colors ${
                        on ? "bg-primary/5 text-primary" : "text-foreground hover:bg-black/[0.02]"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {on ? <Check className="h-4 w-4 text-primary" /> : <Plus className="h-4 w-4 text-muted-foreground" />}
                        {c.label}
                      </span>
                      {on && <ArrowRight className="h-4 w-4 text-primary" />}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Info card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-white p-5 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.15)] ring-1 ring-black/5"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
                  <img src={active.thumb} alt={active.title} className="h-full w-full object-cover" />
                </div>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                  {active.label}
                </p>
                <div className="mt-1 font-display text-[16px] font-bold text-foreground">{active.title}</div>
                <p className="mt-2 text-[12.5px] leading-snug text-muted-foreground">{active.copy}</p>
                <ul className="mt-3 space-y-1.5">
                  {active.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[12.5px] text-foreground">
                      <Check className="h-3.5 w-3.5 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
