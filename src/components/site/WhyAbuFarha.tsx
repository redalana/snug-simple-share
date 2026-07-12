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
    <section id="why" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-primary/40" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Why Partner with AbuFarha
            </span>
            <span className="h-px w-8 bg-primary/40" />
          </div>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-extrabold text-ink sm:text-4xl">
            A Single Partner from Planning to Lifetime Support
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_50px_-28px_rgba(15,23,42,0.35)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_12px_24px_-12px_var(--primary)]">
                <f.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
