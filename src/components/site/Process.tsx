import { motion } from "framer-motion";

const STEPS = [
  { n: "01", title: "Consultation", desc: "Understanding your clinical needs." },
  { n: "02", title: "Planning", desc: "Tailored solution & room design." },
  { n: "03", title: "Procurement", desc: "Sourcing the best OEM equipment." },
  { n: "04", title: "Installation", desc: "Professional install & commissioning." },
  { n: "05", title: "Training", desc: "Clinical & technical staff training." },
  { n: "06", title: "After Sales", desc: "Lifetime service & maintenance." },
];

export function Process() {
  return (
    <section id="process" className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Our Process
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            From Consultation to Lifetime Support
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-white font-display text-sm font-extrabold text-primary">
                  {s.n}
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
