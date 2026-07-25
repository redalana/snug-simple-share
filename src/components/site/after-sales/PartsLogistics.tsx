import { useState } from "react";
import { motion } from "framer-motion";
import { Package, Truck, ShieldCheck, Gauge } from "lucide-react";
import { PART_MODULES, warehouseImg } from "./data";

export function PartsLogistics() {
  const [active, setActive] = useState(PART_MODULES[0].id);
  const activeModule = PART_MODULES.find((m) => m.id === active)!;
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="grid lg:grid-cols-[1.2fr_1fr]">
        <div className="relative min-h-[calc(520*var(--desktop-px-unit))] lg:min-h-[calc(720*var(--desktop-px-unit))]">
          <img
            src={warehouseImg}
            alt="AbuFarha regional spare parts warehouse"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            width={1600}
            height={1100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-ink" />
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-8 p-10">
            {[
              { k: "OEM", v: "Sourced parts" },
              { k: "Regional", v: "Dispatch hubs" },
              { k: "100%", v: "OEM certified" },
            ].map((x) => (
              <div key={x.v}>
                <div className="font-display text-4xl font-extrabold">{x.k}</div>
                <div className="mt-1 text-[calc(11*var(--desktop-px-unit))] uppercase tracking-[0.22em] text-white/60">
                  {x.v}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center bg-[#0a0d14] px-6 py-20 lg:px-14 lg:py-20">
          <div className="w-full">
            <div className="text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.28em] text-primary-on-dark">
              OEM Parts & Logistics
            </div>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Genuine parts.
              <br />
              Ready when you need them.
            </h2>
            <p className="mt-5 max-w-md text-[calc(15.5*var(--desktop-px-unit))] leading-relaxed text-white/70">
              A dedicated regional inventory across our Amman and Cairo hubs — select a module to
              see live availability.
            </p>

            {/* interactive module tabs */}
            <div className="mt-8 flex flex-wrap gap-2">
              {PART_MODULES.map((m) => {
                const isActive = m.id === active;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setActive(m.id)}
                    className={`rounded-full border px-4 py-2 text-[calc(12*var(--desktop-px-unit))] font-semibold transition-all ${
                      isActive
                        ? "border-primary bg-primary text-white shadow-[0_10px_30px_-12px_rgba(220,38,38,0.8)]"
                        : "border-white/12 bg-white/[0.03] text-white/70 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {m.label}
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeModule.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[calc(10.5*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.22em] text-white/50">
                    In Regional Stock
                  </div>
                  <div className="mt-1 font-display text-4xl font-extrabold text-white">
                    {activeModule.count}
                  </div>
                  <div className="mt-1 text-[calc(13*var(--desktop-px-unit))] text-white/60">
                    {activeModule.note}
                  </div>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Package className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-5 flex items-center gap-4 border-t border-white/10 pt-4 text-[calc(12*var(--desktop-px-unit))] text-white/60">
                <div className="flex items-center gap-1.5">
                  <Truck className="h-3.5 w-3.5 text-primary" /> Regional dispatch
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" /> OEM sealed
                </div>
                <div className="flex items-center gap-1.5">
                  <Gauge className="h-3.5 w-3.5 text-primary" /> QA verified
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
