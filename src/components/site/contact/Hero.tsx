import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Home as HomeIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { HERO_SLIDES } from "./data";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  const reduce = useReducedMotion();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (HERO_SLIDES.length < 2 || reduce) return;
    const id = window.setInterval(
      () => setSlide((i) => (i + 1) % HERO_SLIDES.length),
      5500,
    );
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section className="relative overflow-hidden bg-white pt-4 pb-4">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-4 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Link to="/" className="inline-flex items-center gap-1 hover:text-primary">
            <HomeIcon className="h-3.5 w-3.5" /> Home
          </Link>
          <span className="opacity-40">/</span>
          <span className="font-medium text-foreground">Contact Us</span>
        </nav>

        <div className="relative min-h-[560px] overflow-hidden rounded-[36px] bg-secondary/30 sm:min-h-[620px] lg:h-[720px] lg:min-h-0">
          <div className="relative grid h-full grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col justify-center bg-white px-6 py-10 sm:px-10 sm:py-14 lg:px-10 lg:py-16 xl:px-12"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Trusted Medical Equipment Partner
              </div>
              <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[2.5rem] xl:text-[2.75rem]">
                Let&apos;s build
                <br /><span className="whitespace-nowrap">better healthcare</span>
                <br /><span className="text-primary">together</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-[17px]">
                From consultation to after-sales support, our team is ready to
                provide the right medical solutions for your healthcare facility.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#contact-form"
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-[0_14px_30px_-12px_var(--primary)] transition-all duration-200 ease-out hover:-translate-y-1 hover:bg-primary-dark hover:shadow-[0_20px_38px_-14px_var(--primary)]"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                </a>
                <a
                  href="https://wa.me/962799741318"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-12 items-center gap-2.5 rounded-full border border-border bg-white px-6 text-sm font-semibold text-foreground transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#25D366]/50 hover:text-[#128C7E] hover:shadow-[0_14px_30px_-16px_rgba(15,23,42,0.35)]"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#25D366] text-white">
                    <WhatsAppIcon className="h-4 w-4" />
                  </span>
                  WhatsApp Us
                </a>
              </div>
            </motion.div>

            <div className="relative min-h-[300px] overflow-hidden bg-secondary/50 sm:min-h-[360px] lg:min-h-0">
              {HERO_SLIDES.map((s, i) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover object-[62%_center] transition-opacity duration-1000 ease-out",
                    i === slide ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
              <div aria-hidden className="absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-white/45 to-transparent lg:block" />
              {HERO_SLIDES.length > 1 && (
                <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                  {HERO_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Go to slide ${i + 1}`}
                      onClick={() => setSlide(i)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        i === slide ? "w-8 bg-primary" : "w-3 bg-foreground/25",
                      )}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
