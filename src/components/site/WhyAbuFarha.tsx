import { motion } from "framer-motion";
import {
  Globe,
  Package,
  Wrench,
  Cpu,
  GraduationCap,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { Eyebrow } from "./Eyebrow";

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
      <div className="mx-auto grid max-w-7xl gap-x-16 gap-y-12 px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* Left — the statement. Typography-led, sticky, deliberately spare. */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow index="02">Why Partner with AbuFarha</Eyebrow>
          <h2 className="mt-6 font-display text-[2.15rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[2.9rem]">
            One partner,
            <br />
            from first plan to
            <br />
            <span className="text-primary">lifetime support.</span>
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-[1.75] text-muted-foreground">
            Most hospitals juggle a dozen vendors. We replace that chain with a
            single accountable partner — engineering, procurement and service
            under one roof.
          </p>
          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* signature vertical measure — a subtle brand detail, not decoration */}
          <div className="mt-10 hidden items-center gap-3 lg:flex">
            <span className="font-display text-sm font-extrabold tabular-nums text-ink">
              06
            </span>
            <span className="h-px w-16 bg-border" />
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
              Capabilities
            </span>
          </div>
        </div>

        {/* Right — the capabilities index. A precise list, not a grid of cards. */}
        <div>
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`group flex items-start gap-6 py-6 transition-colors ${
                i !== 0 ? "border-t border-border" : ""
              }`}
            >
              <span className="mt-1 font-display text-sm font-extrabold tabular-nums text-muted-foreground/60 transition-colors group-hover:text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary ring-1 ring-border transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:ring-primary">
                <f.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-bold tracking-tight text-ink transition-colors group-hover:text-primary">
                    {f.title}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 -translate-x-1 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
