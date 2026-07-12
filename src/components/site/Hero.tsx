import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, PhoneCall, ShieldCheck, Calendar, Building2, Globe2 } from "lucide-react";
import heroImg from "@/assets/hero-cathlab.jpg";

const stats = [
  { icon: Calendar, value: "25+", label: "Years Experience" },
  { icon: Building2, value: "250+", label: "Hospitals Served" },
  { icon: Globe2, value: "40+", label: "Countries" },
  { icon: ShieldCheck, value: "OEM", label: "Quality Guaranteed" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--px", `${px * 14}px`);
    el.style.setProperty("--py", `${py * 14}px`);
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-secondary to-background pt-[104px] lg:pt-[112px]"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-primary/5 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-[42%_58%] lg:gap-6 lg:py-16">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            Trusted Healthcare Technology Partner
          </span>
          <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[3.55rem]">
            Advanced Medical
            <br /> Technology for
            <br />
            <span className="text-primary">Better Patient Outcomes</span>
          </h1>
          <p className="mt-6 max-w-md text-[17px] leading-[1.7] text-muted-foreground">
            We supply, install, commission and maintain world-class medical equipment and turnkey
            hospital solutions for healthcare providers across Africa and the Middle East.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3">
            <a
              href="#solutions"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-[0_16px_36px_-14px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-7 py-4 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full px-3 py-4 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              <PhoneCall className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
              Talk to an Expert
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <s.icon className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <div className="font-display text-lg font-extrabold leading-none text-ink">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] font-medium leading-tight text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          onMouseMove={onMove}
          className="relative"
        >
          <motion.div
            style={{ y, scale }}
            className="relative overflow-hidden rounded-[1.5rem] shadow-[0_40px_80px_-30px_rgba(15,23,42,0.45)] ring-1 ring-black/5"
          >
            <img
              src={heroImg}
              alt="Advanced hospital cardiology cath lab with angiography imaging system"
              width={1600}
              height={1200}
              fetchPriority="high"
              className="h-[360px] w-full object-cover transition-transform duration-500 will-change-transform lg:h-[560px]"
              style={{ transform: "translate3d(var(--px,0), var(--py,0), 0)" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] shadow-[inset_0_0_120px_rgba(15,23,42,0.35)] ring-1 ring-inset ring-black/10" />
            {/* light sweep */}
            <motion.div
              aria-hidden
              initial={{ x: "-120%" }}
              animate={{ x: "180%" }}
              transition={{ duration: 2.4, delay: 1, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-y-0 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent"
            />
          </motion.div>

          <div className="absolute -bottom-5 left-6 hidden rounded-2xl border border-border bg-white/95 px-5 py-3.5 shadow-xl backdrop-blur sm:block">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Cath Lab Systems
            </div>
            <div className="font-display text-sm font-bold text-ink">
              Advanced interventional cardiology
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
