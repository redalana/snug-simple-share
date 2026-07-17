import { motion } from "framer-motion";
import { Signal, MapPin, Clock } from "lucide-react";
import { AnimatedNumber, Sparkline } from "./primitives";

export function OperationsDashboard() {
  return (
    <section className="relative overflow-hidden bg-[#0a0d14] py-24 text-white lg:py-20">
      <div className="pointer-events-none absolute -top-40 left-1/3 h-[32rem] w-[32rem] rounded-full bg-primary/12 blur-[calc(140*var(--desktop-px-unit))]" />

      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.28em] text-primary">
              Service Operations
            </div>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Real-time overview of our
              <br />
              support operations.
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[calc(11.5*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.2em] text-white/70">
            <Signal className="h-3.5 w-3.5 text-emerald-400" />
            Live · Updated every 30s
          </div>
        </div>

        {/* Enterprise dashboard panel */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 lg:p-8">
          <div className="flex items-center justify-between border-b border-white/8 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-2 w-2 items-center justify-center">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              </div>
              <div className="text-[calc(13*var(--desktop-px-unit))] font-semibold text-white">Global Service Console</div>
              <div className="hidden text-[calc(11*var(--desktop-px-unit))] text-white/40 sm:block">/ MEA · Central & South Asia</div>
            </div>
            <div className="hidden gap-2 text-[calc(10.5*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.2em] text-white/40 sm:flex">
              <span>Today</span>
              <span>·</span>
              <span>7d</span>
              <span>·</span>
              <span className="text-primary">30d</span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              { label: "Active Engineers", value: 46, spark: [30, 38, 34, 41, 39, 44, 46] },
              { label: "Open Tickets", value: 128, spark: [180, 172, 160, 155, 148, 138, 128] },
              { label: "Avg Response", value: 2.4, decimals: 1, suffix: " hrs", spark: [3.2, 3.0, 2.9, 2.7, 2.6, 2.5, 2.4] },
              { label: "Spare Parts", value: 2350, suffix: "+", spark: [2100, 2180, 2210, 2260, 2290, 2320, 2350] },
              { label: "Equipment Health", value: 98, suffix: "%", spark: [95, 96, 96, 97, 97, 98, 98] },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-5"
              >
                <div className="text-[calc(10.5*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.22em] text-white/50">
                  {m.label}
                </div>
                <div className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white">
                  <AnimatedNumber value={m.value} suffix={m.suffix ?? ""} decimals={m.decimals ?? 0} />
                </div>
                <div className="mt-3">
                  <Sparkline data={m.spark} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* footer strip */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/8 bg-black/30 px-5 py-4 text-[calc(12*var(--desktop-px-unit))] text-white/60">
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span className="font-semibold text-white">10 countries</span> · 26 cities · 500+ installations under active care
            </div>
            <div className="flex items-center gap-2 text-white/50">
              <Clock className="h-3.5 w-3.5" />
              Last sync 12s ago
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
