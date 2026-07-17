import { motion } from "framer-motion";
import { ArrowRight, Play, Building2, Globe, Headphones, ShieldCheck } from "lucide-react";
import { turnkeyHero } from "./data";

export function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[100rem] gap-10 px-6 pt-14 pb-14 sm:pt-20 sm:pb-16 lg:min-h-[calc(460*var(--desktop-px-unit))] lg:grid-cols-[1fr_1.25fr] lg:gap-14 lg:px-10 lg:pt-20 lg:pb-16">
        {/* LEFT */}
        <div className="flex flex-col justify-center">
          <p className="text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.28em] text-primary">
            Turnkey Solutions
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-5 font-display text-[2.375rem] font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-[calc(54*var(--desktop-px-unit))] lg:text-[calc(56*var(--desktop-px-unit))]"
          >
            Complete Clinical<br />
            Departments.<br />
            <span className="text-primary">Ready for Life.</span>
          </motion.h1>
          <p className="mt-6 max-w-lg text-[calc(15*var(--desktop-px-unit))] leading-[1.7] text-muted-foreground">
            From planning and engineering to installation and training, we
            deliver fully integrated medical departments that perform today and
            for years to come.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-[0_20px_40px_-18px_rgba(225,29,46,0.7)] transition-transform hover:-translate-y-0.5"
            >
              Start Your Project <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#journey"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3.5 text-sm font-bold text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary">
                <Play className="h-3 w-3 fill-current" />
              </span>
              Watch the Process
            </a>
          </div>

          {/* STATS */}
          <div className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
            {[
              { icon: Building2, value: "30+", label: "Major Projects" },
              { icon: Globe, value: "10+", label: "Countries" },
              { icon: null, value: "1999", label: "Delivering Excellence", small: "Since" },
              { icon: Headphones, value: "24/7", label: "Support" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col">
                {s.icon ? (
                  <s.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                ) : (
                  <span className="text-[calc(10*var(--desktop-px-unit))] font-bold uppercase tracking-[0.2em] text-primary">
                    {s.small}
                  </span>
                )}
                <div className="mt-2 font-display text-2xl font-extrabold text-foreground">
                  {s.value}
                </div>
                <div className="mt-1 text-[calc(11*var(--desktop-px-unit))] leading-tight text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-100 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)] ring-1 ring-black/5"
          >
            <img src={turnkeyHero} alt="Clinical department" className="h-full w-full object-cover" />
          </motion.div>

          {/* Floating info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -bottom-6 right-6 w-[calc(280*var(--desktop-px-unit))] rounded-2xl bg-white p-5 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.25)] ring-1 ring-black/5"
          >
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <div>
                <div className="font-display text-[calc(15*var(--desktop-px-unit))] font-bold text-foreground">
                  Turnkey. Total Care.
                </div>
                <p className="mt-1 text-[calc(12*var(--desktop-px-unit))] leading-snug text-muted-foreground">
                  One partner for every step. One standard of excellence.
                </p>
                <a href="#journey" className="mt-2 inline-flex items-center gap-1 text-[calc(12*var(--desktop-px-unit))] font-bold text-primary">
                  Explore Our Process <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
