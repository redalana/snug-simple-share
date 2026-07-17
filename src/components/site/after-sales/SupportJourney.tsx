import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { JOURNEY } from "./data";

export function SupportJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  return (
    <section className="relative overflow-hidden bg-[#0a0d14] py-24 text-white lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
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

        <div ref={ref} className="relative mt-20">
          {/* animated horizontal rail */}
          <div className="pointer-events-none absolute left-0 right-0 top-[72px] hidden h-[2px] overflow-hidden rounded-full bg-white/10 lg:block">
            <motion.div
              initial={{ width: "0%" }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
              className="h-full bg-gradient-to-r from-primary via-primary-glow to-primary"
            />
          </div>

          <div className="grid gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 lg:gap-6">
            {JOURNEY.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                className="group relative"
              >
                <div className="relative mx-auto flex h-[144px] w-[144px] items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/25 via-primary/5 to-transparent blur-xl transition-opacity duration-300 group-hover:opacity-100 group-hover:blur-2xl" />
                  <div className="absolute inset-2 rounded-full border border-white/10 bg-[#0f131c] transition-colors group-hover:border-primary/40" />
                  <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 3, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-4 rounded-full border border-primary/25"
                  />
                  <div className="relative flex h-[104px] w-[104px] items-center justify-center rounded-full bg-gradient-to-br from-[#141924] to-[#0b0f16] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-transform duration-300 group-hover:scale-105">
                    <s.icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="absolute -top-2 right-2 rounded-full bg-primary px-2.5 py-0.5 text-[10.5px] font-black tracking-widest text-white shadow-[0_8px_20px_-6px_rgba(220,38,38,0.7)]">
                    0{i + 1}
                  </div>
                </div>
                <div className="mt-7 text-center">
                  <div className="font-display text-[16px] font-bold text-white">
                    {s.t}
                  </div>
                  <div className="mt-2 text-[12.5px] leading-relaxed text-white/55">
                    {s.d}
                  </div>
                  <div className="mt-2 grid grid-rows-[0fr] overflow-hidden opacity-0 transition-[grid-template-rows,opacity] duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                    <div className="min-h-0">
                      <div className="mt-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-[11.5px] leading-relaxed text-white/70">
                        {s.detail}
                      </div>
                    </div>
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
