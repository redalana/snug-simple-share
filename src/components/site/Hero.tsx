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
  { icon: ShieldCheck, value: "OEM", label: "Certified Equipment" },
  { icon: Building2, value: "End-to-End", label: "Supply & Installation" },
  { icon: Calendar, value: "24/7", label: "Technical Support" },
  { icon: Globe2, value: "MENA", label: "& Africa Coverage" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // Pointer position (-0.5 .. 0.5), smoothed with springs for premium feel.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 120, damping: 22, mass: 0.4 };
  const sx = useSpring(mx, spring);
  const sy = useSpring(my, spring);

  // Differential depth: room < monitors < equipment.
  const roomX = useTransform(sx, [-0.5, 0.5], [-5, 5]);
  const roomY = useTransform(sy, [-0.5, 0.5], [-5, 5]);
  const monX = useTransform(sx, [-0.5, 0.5], [-9, 9]);
  const monY = useTransform(sy, [-0.5, 0.5], [-9, 9]);
  const equipX = useTransform(sx, [-0.5, 0.5], [-13, 13]);
  const equipY = useTransform(sy, [-0.5, 0.5], [-13, 13]);
  // Almost-invisible 3D camera.
  const rotY = useTransform(sx, [-0.5, 0.5], [-1, 1]);
  const rotX = useTransform(sy, [-0.5, 0.5], [1, -1]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
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
            We supply, install, commission, train and support world-class medical
            equipment for hospitals and clinics across Africa and the Middle East.
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

        {/* Image — layered "4D" depth experience */}
        <motion.div
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="relative"
          style={{ perspective: 1200 }}
        >
          {/* ambient radial glow (deepest layer, moves least) */}
          <motion.div
            aria-hidden
            style={{ x: roomX, y: roomY }}
            className="pointer-events-none absolute -inset-10 -z-10"
          >
            <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(219,234,254,0.7),rgba(255,255,255,0.4)_55%,transparent)] blur-2xl" />
          </motion.div>

          {/* floating wrapper */}
          <motion.div
            animate={reduce ? undefined : { y: [4, -4, 4] }}
            transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
          >
            {/* scroll drift */}
            <motion.div style={{ y, scale }}>
              {/* 3D camera tilt + reveal */}
              <motion.div
                initial={{ opacity: 0, scale: 1.06, clipPath: "inset(8% 8% 8% 8% round 1.5rem)" }}
                animate={{ opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 1.5rem)" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
                className="relative overflow-hidden rounded-[1.5rem] shadow-[0_40px_80px_-30px_rgba(15,23,42,0.45)] ring-1 ring-black/5 will-change-transform"
              >
                {/* equipment layer (moves most) */}
                <motion.img
                  src={heroImg}
                  alt="Advanced hospital cardiology cath lab with angiography imaging system"
                  width={1600}
                  height={1200}
                  fetchPriority="high"
                  style={{ x: equipX, y: equipY, scale: 1.06 }}
                  className="h-[360px] w-full object-cover will-change-transform lg:h-[560px]"
                />

                {/* monitor "alive" layer — subtle brightness + parallax over the displays */}
                <motion.div
                  aria-hidden
                  style={{ x: monX, y: monY }}
                  className="pointer-events-none absolute right-[6%] top-[10%] h-[34%] w-[42%]"
                >
                  <motion.div
                    animate={reduce ? undefined : { opacity: [0.15, 0.4, 0.15] }}
                    transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
                    className="h-full w-full rounded-lg bg-[radial-gradient(ellipse_at_center,rgba(191,219,254,0.55),transparent_70%)] mix-blend-screen"
                  />
                </motion.div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] shadow-[inset_0_0_120px_rgba(15,23,42,0.35)] ring-1 ring-inset ring-black/10" />

                {/* recurring cinematic light sweep */}
                {!reduce && (
                  <motion.div
                    aria-hidden
                    initial={{ x: "-140%" }}
                    animate={{ x: ["-140%", "220%"] }}
                    transition={{
                      duration: 2.2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 7,
                      delay: 1,
                    }}
                    className="pointer-events-none absolute inset-y-0 w-1/4 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  />
                )}
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="absolute -bottom-5 left-6 z-10 hidden rounded-2xl border border-border bg-white/95 px-5 py-3.5 shadow-xl backdrop-blur sm:block">
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
