import { motion } from "framer-motion";
import {
  MessagesSquare,
  ClipboardCheck,
  PackageSearch,
  Wrench,
  GraduationCap,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";
import { Eyebrow } from "./Eyebrow";

type Step = {
  n: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Consultation",
    desc: "We meet your clinical and biomedical teams to align on goals.",
    icon: MessagesSquare,
  },
  {
    n: "02",
    title: "Planning",
    desc: "Workflows, room conditions and technical needs are documented.",
    icon: ClipboardCheck,
  },
  {
    n: "03",
    title: "Procurement",
    desc: "The right systems are specified and sourced through OEM channels.",
    icon: PackageSearch,
  },
  {
    n: "04",
    title: "Installation",
    desc: "Engineers install, calibrate and acceptance-test before handover.",
    icon: Wrench,
  },
  {
    n: "05",
    title: "Training",
    desc: "Clinical and technical staff are trained on safe daily use.",
    icon: GraduationCap,
  },
  {
    n: "06",
    title: "After Sales",
    desc: "Servicing, spare parts and remote support keep systems running.",
    icon: LifeBuoy,
  },
];

export function Process() {
  return (
    <section id="process" className="bg-secondary/50 py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow align="center" index="05">
              How We Work
            </Eyebrow>
          </div>
          <h2 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
            A clear path from first call to <span className="text-primary">ongoing support</span>.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl border border-border bg-white p-5 text-center shadow-[0_2px_12px_-6px_rgba(15,23,42,0.12)] ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_44px_-28px_rgba(15,23,42,0.4)]"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <step.icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div className="mt-4 text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.18em] text-primary">
                Step {step.n}
              </div>
              <h3 className="mt-1 font-display text-[1.05rem] font-extrabold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[calc(12.5*var(--desktop-px-unit))] leading-[1.55] text-muted-foreground">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
