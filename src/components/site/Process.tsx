import { motion } from "framer-motion";
import {
  MessagesSquare,
  PencilRuler,
  PackageSearch,
  Wrench,
  GraduationCap,
  LifeBuoy,
} from "lucide-react";
import { Eyebrow } from "./Eyebrow";

const STEPS = [
  { n: "01", title: "Consultation", desc: "Understanding your clinical needs.", icon: MessagesSquare },
  { n: "02", title: "Planning", desc: "Tailored solution & room design.", icon: PencilRuler },
  { n: "03", title: "Procurement", desc: "Sourcing the best OEM equipment.", icon: PackageSearch },
  { n: "04", title: "Installation", desc: "Professional install & commissioning.", icon: Wrench },
  { n: "05", title: "Training", desc: "Clinical & technical staff training.", icon: GraduationCap },
  { n: "06", title: "After Sales", desc: "Lifetime service & maintenance.", icon: LifeBuoy },
];

export function Process() {
  return (
    <section id="process" className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <Eyebrow align="center">Our Process</Eyebrow>
          <h2 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.6rem]">
            From Consultation to Lifetime Support
          </h2>
        </div>

        <div className="relative">
          {/* Base + animated progress line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-border lg:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-8 hidden h-px origin-left bg-gradient-to-r from-primary via-primary to-primary/40 lg:block"
          />
          <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-3 lg:grid-cols-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative text-center"
              >
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-white text-primary shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-[0_18px_36px_-18px_var(--primary)]">
                  <s.icon className="h-7 w-7" />
                  <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary font-display text-[11px] font-extrabold text-primary-foreground">
                    {s.n}
                  </span>
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
