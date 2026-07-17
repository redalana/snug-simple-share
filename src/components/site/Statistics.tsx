import { motion } from "framer-motion";
import { CalendarClock, Building2, Globe2, Boxes } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { useCountUp } from "@/hooks/use-count-up";

type Stat = {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
};

const STATS: Stat[] = [
  { icon: CalendarClock, value: 25, suffix: "+", label: "Years Experience" },
  { icon: Building2, value: 250, suffix: "+", label: "Hospitals Served" },
  { icon: Globe2, value: 40, suffix: "+", label: "Countries Covered" },
  { icon: Boxes, value: 1500, suffix: "+", label: "Equipment Installed" },
];

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 text-center shadow-[0_2px_12px_-6px_rgba(15,23,42,0.14)] ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_28px_54px_-30px_rgba(15,23,42,0.4)]"
    >
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        <stat.icon className="h-6 w-6" strokeWidth={1.8} />
      </span>
      <div className="mt-5 font-display text-[2.5rem] font-extrabold leading-none tracking-tight text-ink">
        <span ref={ref} className="tabular-nums">
          {value.toLocaleString()}
        </span>
        <span className="text-primary">{stat.suffix}</span>
      </div>
      <div className="mt-2.5 text-sm font-semibold text-muted-foreground">
        {stat.label}
      </div>
    </motion.div>
  );
}

export function Statistics() {
  return (
    <section id="statistics" className="bg-secondary/50 py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow align="center">By the Numbers</Eyebrow>
          </div>
          <h2 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
            A track record hospitals <span className="text-primary">trust</span>.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
