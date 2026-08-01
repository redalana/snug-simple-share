import { motion } from "framer-motion";
import { ArrowRight, Headphones } from "lucide-react";
import {
  HERO_SECTION,
  HERO_GRID,
  HERO_COLS,
  HERO_COPY_COL,
  HERO_TITLE,
  HERO_LEAD,
  HERO_CTA_ROW,
  HERO_SIDE_COL,
  HeroBackdrop,
} from "../hero/heroShell";
import { heroImg } from "./data";

export function Hero() {
  return (
    <section className={HERO_SECTION}>
      <HeroBackdrop src={heroImg} priority />
      <div className="pointer-events-none absolute inset-0">
        {/* soft red glow */}
        <div className="pointer-events-none absolute -right-40 top-1/3 h-[36rem] w-[36rem] rounded-full bg-primary/25 blur-[calc(140*var(--desktop-px-unit))]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[calc(120*var(--desktop-px-unit))]" />
      </div>

      <div className={`${HERO_GRID} ${HERO_COLS}`}>
        <div className={HERO_COPY_COL}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            After Sales Support
          </div>
          <h1 className={HERO_TITLE}>
            Reliable Support.
            <br />
            <span className="text-primary">Maximum</span>
            <br />
            <span className="text-white/95">Performance.</span>
          </h1>
          <p className={HERO_LEAD}>
            We keep your medical equipment running at peak performance with expert care, genuine
            parts and fast response — every time.
          </p>
          <div className={HERO_CTA_ROW}>
            <a
              href="#request"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Request Service
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+96264026063"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <Headphones className="h-4 w-4" />
              Emergency Support
            </a>
          </div>
        </div>

        {/* Floating service dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={HERO_SIDE_COL}
        >
          <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-primary/30 via-primary/5 to-transparent blur-3xl" />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.07] p-7 backdrop-blur-2xl shadow-[0_50px_100px_-30px_rgba(0,0,0,0.7)]"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[calc(10.5*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.24em] text-white/50">
                  Service Dashboard
                </div>
                <div className="mt-1.5 text-base font-semibold text-white">
                  Live · Amman Ops Center
                </div>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-[calc(11*var(--desktop-px-unit))] font-bold text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                ALL SYSTEMS OK
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3.5">
              {[
                { k: "24/7", v: "Technical Support" },
                { k: "Certified", v: "Biomed Engineers" },
                { k: "100%", v: "Genuine OEM Parts" },
                { k: "< 4 Hrs", v: "Avg Response" },
              ].map(({ k, v }) => (
                <div key={v} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="font-display text-xl font-extrabold text-white">{k}</div>
                  <div className="mt-0.5 text-[calc(11.5*var(--desktop-px-unit))] text-white/60">
                    {v}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5">
              <div className="flex items-center justify-between text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.2em] text-white/50">
                <span>Ticket #AF-24017</span>
                <span className="text-primary">EN ROUTE</span>
              </div>
              <div className="mt-2 text-sm font-semibold text-white">
                Siemens Artis Q · King Hussein Cancer Center
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: "5%" }}
                  animate={{ width: "68%" }}
                  transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow"
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-[calc(11*var(--desktop-px-unit))] text-white/55">
                <span>Engineer 12 min away</span>
                <span>ETA 10:42</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
