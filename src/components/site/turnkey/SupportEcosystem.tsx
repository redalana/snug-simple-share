import { motion } from "framer-motion";
import { SUPPORT } from "./data";

export function SupportEcosystem() {
  return (
    <section className="bg-[#111315] py-20 text-white lg:py-20">
      <div className="mx-auto grid max-w-[100rem] gap-12 px-6 lg:grid-cols-[1fr_3fr] lg:gap-14 lg:px-10">
        <div>
          <p className="text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.26em] text-primary">
            Beyond Installation
          </p>
          <h2 className="mt-4 font-display text-[calc(30*var(--desktop-px-unit))] font-extrabold leading-[1.1] sm:text-[calc(36*var(--desktop-px-unit))]">
            Your Long-Term
            <br />
            Support Ecosystem
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          {SUPPORT.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <s.icon className="h-8 w-8 text-white" strokeWidth={1.3} />
              <div className="mt-5 font-display text-[calc(15*var(--desktop-px-unit))] font-bold text-white">
                {s.title}
              </div>
              <p className="mt-2 text-[calc(12.5*var(--desktop-px-unit))] leading-relaxed text-white/60">
                {s.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
