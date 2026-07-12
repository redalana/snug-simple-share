import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";
import {
  ClipboardList,
  Globe,
  Building2,
  Wrench,
  Cpu,
  GraduationCap,
  ShieldCheck,
  Headset,
  type LucideIcon,
} from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import cathLab from "@/assets/why-cathlab.jpg";

type Node = {
  icon: LucideIcon;
  title: string;
  desc: string;
  details: string[];
  side: "left" | "right";
  /** node anchor position in the 100x100 composition space */
  x: number;
  y: number;
};

const NODES: Node[] = [
  {
    icon: ClipboardList,
    title: "Planning & Consulting",
    desc: "Workflow analysis and equipment planning.",
    details: ["Hospital workflow analysis", "Equipment planning", "Room layout consultation"],
    side: "left",
    x: 6,
    y: 13,
  },
  {
    icon: Globe,
    title: "Global Procurement",
    desc: "Direct OEM supply-chain access.",
    details: ["World-leading manufacturers", "OEM supply chains", "Transparent sourcing"],
    side: "left",
    x: 2,
    y: 38,
  },
  {
    icon: Building2,
    title: "Turnkey Projects",
    desc: "Complete hospital delivery.",
    details: ["Design to operation", "Single accountable partner", "On-time delivery"],
    side: "left",
    x: 2,
    y: 62,
  },
  {
    icon: Wrench,
    title: "Installation & Commissioning",
    desc: "Calibration and acceptance testing.",
    details: ["Professional installation", "Calibration", "Acceptance testing"],
    side: "left",
    x: 6,
    y: 87,
  },
  {
    icon: Cpu,
    title: "Biomedical Engineering",
    desc: "Expert engineering, every class.",
    details: ["Certified engineers", "Every equipment class", "Spare-parts management"],
    side: "right",
    x: 94,
    y: 13,
  },
  {
    icon: GraduationCap,
    title: "Clinical Training",
    desc: "For medical and technical staff.",
    details: ["Structured programs", "Clinical & technical staff", "Ongoing enablement"],
    side: "right",
    x: 98,
    y: 38,
  },
  {
    icon: ShieldCheck,
    title: "Preventive Maintenance",
    desc: "Scheduled, proactive care.",
    details: ["Scheduled servicing", "Uptime assurance", "Compliance reporting"],
    side: "right",
    x: 98,
    y: 62,
  },
  {
    icon: Headset,
    title: "After-Sales Support",
    desc: "Reliable service, 24/7.",
    details: ["24/7 support", "Rapid response", "Lifetime partnership"],
    side: "right",
    x: 94,
    y: 87,
  },
];

export function WhyAbuFarha() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "start 30%"],
  });
  const draw = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });

  // parallax on mouse movement
  const px = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const py = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const imgX = useTransform(px, [-0.5, 0.5], [-14, 14]);
  const imgY = useTransform(py, [-0.5, 0.5], [-12, 12]);

  const handleMove = (e: React.MouseEvent) => {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <section id="why" ref={sectionRef} className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow index="02" align="center">
              Why Hospitals Choose AbuFarha
            </Eyebrow>
          </div>
          <h2 className="mt-6 font-display text-[2.2rem] font-extrabold leading-[1.06] tracking-[-0.02em] text-ink sm:text-[3rem]">
            Not equipment.
            <br />A complete <span className="text-primary">hospital ecosystem</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.75] text-muted-foreground">
            Every capability connects to one clinical outcome — from first
            drawing to lifetime support.
          </p>
        </div>

        {/* ============ DESKTOP: radial ecosystem ============ */}
        <div
          ref={stageRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="relative mx-auto mt-16 hidden aspect-[16/10] w-full max-w-5xl lg:block"
        >
          {/* connecting lines */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            {NODES.map((n, i) => {
              const isActive = active === i;
              return (
                <motion.line
                  key={n.title}
                  x1={n.x}
                  y1={n.y}
                  x2={50}
                  y2={50}
                  stroke="var(--color-primary)"
                  strokeOpacity={isActive ? 0.9 : 0.28}
                  strokeWidth={isActive ? 1.1 : 0.5}
                  vectorEffect="non-scaling-stroke"
                  style={{ pathLength: draw }}
                  className="transition-[stroke-width,stroke-opacity] duration-300"
                />
              );
            })}
          </svg>

          {/* center image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-1/2 z-10 h-[54%] w-[42%] -translate-x-1/2 -translate-y-1/2"
          >
            <motion.div
              style={{ x: imgX, y: imgY }}
              className="relative h-full w-full overflow-hidden rounded-3xl shadow-[0_40px_90px_-40px_rgba(0,0,0,0.55)] ring-1 ring-black/5"
            >
              <img
                src={cathLab}
                alt="Modern hospital cardiac catheterization lab delivered by AbuFarha"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* capability nodes */}
          {NODES.map((n, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={n.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.25 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
                className={`absolute z-20 flex w-[230px] -translate-y-1/2 items-center gap-3 ${
                  n.side === "left"
                    ? "-translate-x-2 flex-row-reverse text-right"
                    : "-translate-x-[calc(100%-3.5rem)] text-left"
                }`}
              >
                {/* icon */}
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-primary ring-1 transition-all duration-300 ${
                    isActive
                      ? "scale-110 rotate-6 ring-primary shadow-[0_16px_30px_-14px_rgba(0,0,0,0.4)]"
                      : "ring-border"
                  }`}
                >
                  <n.icon className="h-6 w-6" strokeWidth={1.6} />
                </div>

                {/* label */}
                <div className="min-w-0 flex-1">
                  <h3
                    className={`font-display text-[15px] font-bold leading-snug tracking-tight transition-colors ${
                      isActive ? "text-primary" : "text-ink"
                    }`}
                  >
                    {n.title}
                  </h3>
                  <p className="mt-2 min-h-[2.6rem] text-[12.5px] leading-[1.55] text-muted-foreground">
                    {n.desc}
                  </p>

                </div>


                {/* tooltip */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 8,
                    scale: isActive ? 1 : 0.96,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "top" }}
                  className={`absolute top-full z-30 mt-3 w-60 overflow-hidden rounded-2xl border border-border bg-white text-left shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] ${
                    n.side === "left" ? "right-0" : "left-0"
                  }`}
                >
                  <span className="absolute inset-x-0 top-0 h-[3px] bg-primary" />
                  <div className="p-4">
                    <p className="font-display text-sm font-bold text-ink">{n.title}</p>
                    <ul className="mt-2.5 space-y-2">
                      {n.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2.5 text-[12.5px] leading-[1.5] text-muted-foreground"
                        >
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

              </motion.div>
            );
          })}
        </div>

        {/* ============ MOBILE / TABLET: stacked ecosystem ============ */}
        <div className="mt-14 lg:hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-3xl shadow-[0_30px_70px_-40px_rgba(0,0,0,0.5)] ring-1 ring-black/5"
          >
            <img
              src={cathLab}
              alt="Modern hospital cardiac catheterization lab delivered by AbuFarha"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
          </motion.div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {NODES.map((n, i) => (
              <motion.div
                key={n.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary ring-1 ring-border">
                  <n.icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold tracking-tight text-ink">
                    {n.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-[1.55] text-muted-foreground">
                    {n.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
