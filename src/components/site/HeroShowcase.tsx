import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import solMri from "@/assets/sol-mri.jpg";
import solCt from "@/assets/sol-ct.jpg";
import solPetct from "@/assets/sol-petct.jpg";
import solMammo from "@/assets/sol-mammo.jpg";
import solCarm from "@/assets/sol-carm.jpg";
import solUltrasound from "@/assets/sol-ultrasound.jpg";
import solOr from "@/assets/sol-or.jpg";
import heroCathlab from "@/assets/hero-cathlab.jpg";

type Slide = {
  image: string;
  name: string;
  category: string;
};

/**
 * Premium Medical Technology Showcase — fills the right side of the /products
 * hero. Fade-only auto-rotation, one elegant glass product card per slide.
 * Real medical equipment photography matching the bright homepage language.
 */
const SLIDES: Slide[] = [
  { image: heroCathlab, name: "Philips Allura Xper FD20", category: "Interventional Cardiology System" },
  { image: solMri, name: "Siemens Magnetom MRI", category: "Advanced MRI Imaging" },
  { image: solCt, name: "Canon Aquilion CT", category: "128-Slice CT Scanner" },
  { image: solPetct, name: "GE Discovery PET/CT", category: "Molecular Imaging System" },
  { image: solCarm, name: "Ziehm Vision RFD C-Arm", category: "Mobile Surgical Imaging" },
  { image: solMammo, name: "Hologic Selenia Mammography", category: "Digital Breast Imaging" },
  { image: solUltrasound, name: "Philips EPIQ Ultrasound", category: "Premium Diagnostic Ultrasound" },
  { image: solOr, name: "Integrated Operating Room", category: "Surgical Suite Equipment" },
];

const INTERVAL = 5000;

export function HeroShowcase() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [reduce]);

  const slide = SLIDES[active];

  return (
    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[1.75rem] bg-secondary shadow-[0_40px_90px_-45px_rgba(15,23,42,0.4)] ring-1 ring-black/[0.05]">
      {/* Fade-only image stack */}
      <AnimatePresence mode="sync">
        <motion.img
          key={active}
          src={slide.image}
          alt={`${slide.name} — ${slide.category}`}
          width={1536}
          height={1024}
          loading={active === 0 ? "eager" : "lazy"}
          fetchPriority={active === 0 ? "high" : "auto"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* Barely-there wash to keep the glass card legible without darkening */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/25 via-transparent to-transparent"
      />

      {/* Floating glass product card */}
      <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.5)] backdrop-blur-xl"
          >
            <span className="inline-block h-1 w-9 rounded-full bg-primary" />
            <div className="mt-3 font-display text-base font-extrabold leading-tight text-foreground">
              {slide.name}
            </div>
            <div className="mt-1 text-xs font-medium text-muted-foreground">
              {slide.category}
            </div>
            <Link
              to="/products"
              className="group mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-primary-dark"
            >
              View System
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="absolute right-5 top-5 flex gap-1.5">
        {SLIDES.map((s, i) => (
          <button
            key={s.name}
            type="button"
            aria-label={`Show ${s.name}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-primary" : "w-1.5 bg-white/80 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
