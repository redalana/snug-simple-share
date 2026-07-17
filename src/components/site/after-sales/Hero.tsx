import { motion } from "framer-motion";
import { ArrowRight, Headphones } from "lucide-react";
import { heroImg } from "./data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="AbuFarha biomedical engineer servicing medical equipment"
          className="h-full w-full object-cover object-center"
          width={1600}
          height={1100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-ink/50" />
        {/* soft red glow */}
        <div className="pointer-events-none absolute -right-40 top-1/3 h-[36rem] w-[36rem] rounded-full bg-primary/25 blur-[140px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid min-h-[480px] max-w-[100rem] items-center gap-16 px-6 pt-24 pb-20 lg:min-h-[460px] lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-20 lg:pb-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            After Sales Support
          </div>
          <h1 className="mt-7 font-display text-[3.25rem] font-extrabold leading-[0.98] tracking-tight sm:text-[4.25rem] lg:text-[64px]">
            Reliable Support.
            <br />
            <span className="text-primary">Maximum</span>
            <br />
            <span className="text-white/95">Performance.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
            We keep your medical equipment running at peak performance with
            expert care, genuine parts and fast response — every time.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#request"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-white shadow-[0_20px_60px_-18px_rgba(220,38,38,0.9)] transition-all hover:-translate-y-0.5"
            >
              Request Service
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+96264026063"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10"
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
          className="relative"
        >
          <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-primary/30 via-primary/5 to-transparent blur-3xl" />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.07] p-7 backdrop-blur-2xl shadow-[0_50px_100px_-30px_rgba(0,0,0,0.7)]"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-white/50">
                  Service Dashboard
                </div>
                <div className="mt-1.5 text-base font-semibold text-white">
                  Live · Amman Ops Center
                </div>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-300">
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
                <div
                  key={v}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="font-display text-xl font-extrabold text-white">
                    {k}
                  </div>
                  <div className="mt-0.5 text-[11.5px] text-white/60">{v}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5">
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
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
              <div className="mt-2 flex items-center justify-between text-[11px] text-white/55">
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
