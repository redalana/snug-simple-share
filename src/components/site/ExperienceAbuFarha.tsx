import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import img01 from "@/assets/experience-01-physicians.jpg";
import img02 from "@/assets/experience-02-engineers.jpg";
import img03 from "@/assets/experience-03-headquarters.jpg";
import img04 from "@/assets/experience-04-hospitals.jpg";
import img05 from "@/assets/experience-05-partnership.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

type Chapter = {
  num: string;
  title: string[];
  copy: string;
  image: string;
  alt: string;
  wide?: boolean;
};

const CHAPTERS: Chapter[] = [
  {
    num: "01",
    title: ["Meet Our Physicians", "& Clinical Experts"],
    copy: "Discuss real clinical challenges, treatment pathways and technology implementation with experienced physicians and clinical specialists.",
    image: img01,
    alt: "AbuFarha physicians reviewing a medical scan together in clinical discussion",
  },
  {
    num: "02",
    title: ["Meet Our Biomedical", "Engineering Team"],
    copy: "See how every system is inspected, tested, calibrated and prepared by AbuFarha biomedical engineers before reaching hospitals.",
    image: img02,
    alt: "AbuFarha biomedical engineer calibrating a medical device in the workshop",
  },
  {
    num: "03",
    title: ["Tour Our Headquarters,", "Engineering Facilities &", "Equipment Warehouse"],
    copy: "Walk through our headquarters, engineering laboratories, technical workshops and equipment warehouse to understand how we support hospitals beyond installation.",
    image: img03,
    alt: "Panoramic view of the AbuFarha headquarters, engineering facility and medical equipment warehouse",
    wide: true,
  },
  {
    num: "04",
    title: ["Visit Hospitals Using", "Our Technologies"],
    copy: "Observe selected hospitals using these technologies in daily clinical practice and experience complete clinical workflows in real healthcare environments.",
    image: img04,
    alt: "Advanced medical imaging equipment in use in a real hospital clinical environment",
  },
  {
    num: "05",
    title: ["Exchange Knowledge &", "Build Future Partnerships"],
    copy: "Meet our leadership team to discuss hospital development, future clinical programs and long-term collaboration opportunities.",
    image: img05,
    alt: "AbuFarha leadership meeting with healthcare executives to build a partnership",
  },
];

function ChapterBlock({ chapter, index }: { chapter: Chapter; index: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Subtle parallax on the image.
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const imageFirst = index % 2 === 0;

  const media = (
    <motion.figure
      initial={{ opacity: 0, y: 40, clipPath: "inset(6% 6% 6% 6% round 1.75rem)" }}
      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 1.75rem)" }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1, ease: EASE }}
      className={`relative overflow-hidden rounded-[1.75rem] ring-1 ring-ink/10 shadow-[0_50px_120px_-60px_rgba(15,23,42,0.5)] ${
        chapter.wide ? "aspect-[16/10] lg:aspect-[16/9]" : "aspect-[4/5]"
      }`}
    >
      <motion.img
        src={chapter.image}
        alt={chapter.alt}
        loading="lazy"
        className="absolute inset-0 h-[112%] w-full object-cover"
        style={reduce ? undefined : { y }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-ink/15 to-transparent"
      />
    </motion.figure>
  );

  const text = (
    <div className={chapter.wide ? "mx-auto max-w-3xl text-center" : ""}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
      >
        <span className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.28em] text-primary">
          <span className="h-px w-8 bg-primary/50" />
          Experience {chapter.num}
        </span>
        <h3 className="mt-6 font-display text-[2.15rem] font-extrabold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[2.35rem]">
          {chapter.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>
        <p
          className={`mt-6 text-[19px] leading-[1.75] text-muted-foreground ${
            chapter.wide ? "mx-auto max-w-2xl" : "max-w-md"
          }`}
        >
          {chapter.copy}
        </p>
      </motion.div>
    </div>
  );

  return (
    <div ref={ref} className="relative">
      {/* Oversized background chapter number */}
      <span
        aria-hidden
        className={`pointer-events-none absolute -top-10 select-none font-display text-[13rem] font-extrabold leading-none tracking-tighter text-ink/[0.04] sm:text-[19rem] lg:text-[24rem] ${
          imageFirst ? "right-0 lg:-right-6" : "left-0 lg:-left-6"
        }`}
      >
        {chapter.num}
      </span>

      {chapter.wide ? (
        <div className="relative">
          {text}
          <div className="mt-12">{media}</div>
        </div>
      ) : (
        <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className={`lg:col-span-7 ${imageFirst ? "" : "lg:order-2"}`}>{media}</div>
          <div
            className={`lg:col-span-5 ${
              imageFirst ? "lg:pl-4" : "lg:order-1 lg:pr-4"
            }`}
          >
            {text}
          </div>
        </div>
      )}
    </div>
  );
}

export function ExperienceAbuFarha() {
  return (
    <section id="experience" className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Soft engineering grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-ink) 1px, transparent 1px), linear-gradient(to bottom, var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 85% 55% at 50% 12%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 55% at 50% 12%, black, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-10">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="flex justify-center">
            <Eyebrow index="04" align="center">
              Experience AbuFarha
            </Eyebrow>
          </div>
          <h2 className="mt-7 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[3.4rem] lg:text-[3.6rem]">
            Come and Experience
            <span className="block text-primary">AbuFarha Firsthand.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[19px] leading-[1.75] text-muted-foreground">
            We believe trust is built face-to-face. Healthcare leaders, physicians
            and biomedical engineers are invited to visit our headquarters in
            Amman, Jordan and experience our people, engineering capabilities and
            clinical expertise before making important technology decisions.
          </p>
        </motion.div>

        {/* The five chapters */}
        <div className="mt-28 space-y-32 lg:mt-36 lg:space-y-44">
          {CHAPTERS.map((chapter, i) => (
            <ChapterBlock key={chapter.num} chapter={chapter} index={i} />
          ))}
        </div>

        {/* Final invitation */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto mt-36 max-w-3xl border-t border-border pt-20 text-center lg:mt-48"
        >
          <span className="text-[13px] font-bold uppercase tracking-[0.3em] text-primary">
            A Personal Invitation
          </span>
          <h3 className="mt-6 font-display text-[2.4rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[3rem]">
            Experience Before You Invest.
          </h3>
          <p className="mx-auto mt-7 max-w-2xl text-[19px] leading-[1.75] text-muted-foreground">
            The best partnerships begin with shared knowledge, engineering
            excellence and mutual trust. We welcome healthcare professionals to
            visit AbuFarha headquarters in Amman and experience firsthand how
            successful clinical partnerships are built.
          </p>
          <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-[15px] font-bold text-primary-foreground shadow-[0_18px_38px_-16px_var(--primary)] transition-all duration-300 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
            >
              Schedule Your Visit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-white px-8 py-3.5 text-[15px] font-bold text-ink transition-colors duration-300 hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
            >
              Arrange a Technical Meeting
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
