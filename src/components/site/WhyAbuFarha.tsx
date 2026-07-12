import { motion } from "framer-motion";
import {
  Globe,
  Package,
  Wrench,
  Cpu,
  GraduationCap,
  Clock,
} from "lucide-react";

const FEATURES = [
  { icon: Globe, title: "Global Procurement", desc: "Direct access to world-leading manufacturers and OEM supply chains." },
  { icon: Package, title: "Turnkey Solutions", desc: "Complete hospital projects from design and planning to operation." },
  { icon: Wrench, title: "Installation & Commissioning", desc: "Professional installation, calibration and acceptance testing." },
  { icon: Cpu, title: "Biomedical Engineering", desc: "Expert technical engineering team for every equipment class." },
  { icon: GraduationCap, title: "Clinical Training", desc: "Structured training for medical and technical staff." },
  { icon: Clock, title: "After Sales Support", desc: "Reliable maintenance and service support, 24/7." },
];

export function WhyAbuFarha() {
  return (
    <section id="why" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-primary/40" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Why Partner with AbuFarha
            </span>
            <span className="h-px w-8 bg-primary/40" />
          </div>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-[2.75rem]">
            A Single Partner from Planning to Lifetime Support
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_28px_56px_-30px_rgba(15,23,42,0.4)]"
            >
              <span className="pointer-events-none absolute -right-2 -top-4 font-display text-[5.5rem] font-extrabold leading-none text-ink/[0.04] transition-colors duration-300 group-hover:text-primary/10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:from-primary group-hover:to-primary-dark group-hover:text-white group-hover:ring-primary group-hover:shadow-[0_16px_30px_-14px_var(--primary)]">
                <f.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="relative font-display text-lg font-bold tracking-tight text-ink">{f.title}</h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-primary-dark transition-transform duration-300 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
