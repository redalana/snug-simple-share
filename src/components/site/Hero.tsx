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
import heroImgMobile from "@/assets/hero-cathlab-mobile.jpg";

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

  // Tiny differential parallax: room < monitors < equipment (subtle, premium).
  const roomX = useTransform(sx, [-0.5, 0.5], [-3, 3]);
  const roomY = useTransform(sy, [-0.5, 0.5], [-3, 3]);
  const monX = useTransform(sx, [-0.5, 0.5], [-5, 5]);
  const monY = useTransform(sy, [-0.5, 0.5], [-5, 5]);
  const equipX = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const equipY = useTransform(sy, [-0.5, 0.5], [-8, 8]);
  // Soft 3D camera — max ~4deg for an elegant Apple-like tilt.
  const rotY = useTransform(sx, [-0.5, 0.5], [-4, 4]);
  const rotX = useTransform(sy, [-0.5, 0.5], [4, -4]);

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

          {/* gentle breathing wrapper — subtle scale, no floating */}
          <motion.div
            animate={reduce ? undefined : { scale: [1, 1.012, 1] }}
            transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
          >
            {/* scroll drift (very subtle camera movement) */}
            <motion.div style={{ y, scale }}>
              {/* 3D camera tilt + fade-in reveal */}
              <motion.div
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
                className="relative overflow-hidden rounded-[1.5rem] shadow-[0_36px_80px_-34px_rgba(15,23,42,0.32)] ring-1 ring-black/5 will-change-transform"
              >
                {/* equipment layer (moves most) — desktop / tablet */}
                <motion.img
                  src={heroImg}
                  alt="Bright modern hospital catheterization lab with advanced angiography imaging system"
                  width={1536}
                  height={1024}
                  fetchPriority="high"
                  style={{ x: equipX, y: equipY, scale: 1.05 }}
                  className="hidden h-[420px] w-full object-cover will-change-transform sm:block lg:h-[640px]"
                />
                {/* dedicated mobile crop — focuses on the Cath Lab system */}
                <motion.img
                  src={heroImgMobile}
                  alt="Bright modern hospital catheterization lab with advanced angiography imaging system"
                  width={1024}
                  height={1280}
                  fetchPriority="high"
                  style={{ x: equipX, y: equipY, scale: 1.05 }}
                  className="block h-[440px] w-full object-cover will-change-transform sm:hidden"
                />

                {/* monitor "alive" layer — subtle blue glow + parallax over the displays */}
                <motion.div
                  aria-hidden
                  style={{ x: monX, y: monY }}
                  className="pointer-events-none absolute right-[6%] top-[18%] h-[30%] w-[40%]"
                >
                  <motion.div
                    animate={reduce ? undefined : { opacity: [0.12, 0.3, 0.12] }}
                    transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                    className="h-full w-full rounded-lg bg-[radial-gradient(ellipse_at_center,rgba(147,197,253,0.5),transparent_70%)] mix-blend-screen"
                  />
                </motion.div>

                {/* soft ambient light reflection (top-left) */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                {/* very soft depth grounding at the base — kept light */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
                {/* crisp edge definition */}
                <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-black/5" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
