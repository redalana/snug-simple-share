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
  { icon: ShieldCheck, value: "Certified Equipment", label: "OEM & Refurbished Systems" },
  { icon: Building2, value: "Complete Solutions", label: "Supply • Installation • Training" },
  { icon: Calendar, value: "Warranty & Support", label: "Maintenance • Spare Parts" },
  { icon: Globe2, value: "Regional Coverage", label: "Africa & Middle East" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  // Pointer position (-0.5 .. 0.5), smoothed with springs for a very soft parallax.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 90, damping: 24, mass: 0.5 };
  const sx = useSpring(mx, spring);
  const sy = useSpring(my, spring);

  // Very soft differential parallax across the scene.
  const sceneX = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const sceneY = useTransform(sy, [-0.5, 0.5], [-6, 6]);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
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
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative overflow-hidden bg-gradient-to-b from-secondary to-background pt-[108px] lg:pt-[116px] xl:pt-[164px]"
    >
      {/* ── The scene: one editorial photograph, aligned to the global grid ─
          The image lives inside the exact same container as every other
          section (max-w-[100rem] with matching gutters), so its right edge
          respects the shared right margin. It still bleeds top and bottom and
          dissolves into the page surface on the left — one composition, never
          two columns — but never hugs the viewport edge. */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="mx-auto h-full max-w-[100rem] px-6 lg:px-10">
          <motion.div style={{ y, scale }} className="relative h-full">
            {/* breathing wrapper — almost invisible */}
            <motion.div
              animate={reduce ? undefined : { scale: [1, 1.012, 1] }}
              transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
              className="absolute inset-0 overflow-hidden rounded-[1.25rem]"
            >
              <motion.img
                src={heroImg}
                alt="Bright modern hospital catheterization lab with an advanced C-arm angiography imaging system and monitors"
                width={1536}
                height={1024}
                fetchPriority="high"
                style={{ x: sceneX, y: sceneY, scale: 1.08 }}
                className="absolute right-0 top-0 h-full w-[66%] object-cover object-[70%_center] will-change-transform"
              />
              {/* soft dissolve of the photo's left edge into the page surface —
                  a gentle wash, not a hard card boundary or heavy gradient */}
              <div className="absolute inset-y-0 right-[34%] w-[34%] bg-gradient-to-r from-background via-background/85 to-transparent" />
              <div className="absolute inset-y-0 left-0 w-[34%] bg-background" />
              {/* barely-there daylight settling at the base for grounding */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/50 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>


      <div className="pointer-events-none absolute -left-40 top-24 h-[520px] w-[520px] rounded-full bg-primary/5 blur-3xl lg:hidden" />

      {/* ── Content, resting in the negative space of the scene ─────────── */}
      <div className="relative mx-auto max-w-[100rem] px-6 py-9 lg:px-10 lg:py-14">
        <div className="pl-12 lg:max-w-[46%]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
              Trusted Healthcare Technology Partner
            </span>
            <h1 className="mt-5 font-display text-[2.5rem] font-extrabold leading-[1.04] tracking-[-0.02em] text-ink sm:text-[3rem] lg:text-[3.5rem]">
              Advanced Medical
              <br /> Technology for
              <br />
              <span className="text-primary">Better Patient Outcomes</span>
            </h1>
            <p className="mt-5 max-w-md text-[17px] leading-[1.65] text-muted-foreground">
              We supply, install, commission, train and support world-class medical
              equipment for hospitals and clinics across Africa and the Middle East.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#solutions"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_16px_36px_-14px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-7 py-3.5 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-7 py-3.5 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                <PhoneCall className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
                Talk to an Expert
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2 text-[13px] font-medium text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Backed by a 1-year free warranty on every installation.
            </div>



            <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-border pt-6">
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
        </div>

        {/* Mobile scene — the equipment as an editorial photo beneath the copy */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12 overflow-hidden rounded-[1.25rem] shadow-[0_30px_70px_-34px_rgba(15,23,42,0.35)] ring-1 ring-black/5 lg:hidden"
        >
          <motion.img
            src={heroImgMobile}
            alt="Bright modern hospital catheterization lab with an advanced C-arm angiography imaging system and monitors"
            width={1024}
            height={1280}
            fetchPriority="high"
            animate={reduce ? undefined : { scale: [1, 1.02, 1] }}
            transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
            className="h-[505px] w-full object-cover will-change-transform"
          />
        </motion.div>
      </div>
    </section>
  );
}
