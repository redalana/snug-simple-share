import { Link } from "@tanstack/react-router";
import { Eyebrow } from "../Eyebrow";
import {
  HERO_SECTION,
  HERO_GRID,
  HERO_COLS,
  HERO_COPY_COL,
  HERO_TITLE,
  HERO_LEAD,
  HERO_CTA_ROW,
  HERO_BTN_PRIMARY,
  HERO_BTN_GHOST,
  HERO_CARD_GRID,
  HERO_CARD,
  HERO_SIDE_COL,
  HERO_MEDIA_FRAME,
  HERO_MEDIA_IMG,
  HeroBackdrop,
} from "../hero/heroShell";
import { HERO_KPIS, heroImg, engImg } from "./data";

export function Hero() {
  return (
    <section className={HERO_SECTION}>
      <HeroBackdrop src={heroImg} priority />
      <div className={`${HERO_GRID} ${HERO_COLS}`}>
        <div className={HERO_COPY_COL}>
          <Eyebrow tone="light" index="01">
            About Us
          </Eyebrow>
          <h1 className={HERO_TITLE}>
            <span className="inline-block">Engineering Healthcare</span>
            <br />
            <span className="inline-block">Since 1999.</span>
            <br />
            <span className="inline-block text-primary">
              Trusted Across Africa &amp; The Middle East.
            </span>
          </h1>
          <p className={HERO_LEAD}>
            Supplying, installing, commissioning and supporting hospital medical equipment across
            Africa and the Middle East since 1999.
          </p>

          <div className={HERO_CTA_ROW}>
            <Link
              to="/contact"
              className={HERO_BTN_PRIMARY}
            >
              Talk to an Engineer
            </Link>
            <Link
              to="/contact"
              className={HERO_BTN_GHOST}
            >
              Request Consultation
            </Link>
          </div>

          {/* KPI cards */}
          <div className={HERO_CARD_GRID}>
            {HERO_KPIS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className={HERO_CARD}
              >
                <Icon className="h-6 w-6 shrink-0 text-primary" strokeWidth={1.6} />
                <div className="mt-3 min-w-0 font-display text-[calc(17*var(--desktop-px-unit))] font-extrabold leading-[1.15] break-words text-white">
                  {value}
                </div>
                <div className="mt-1.5 min-w-0 text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase leading-tight tracking-wider break-words text-white/55">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${HERO_SIDE_COL} hidden lg:block`}>
          <div className="absolute -inset-6 rounded-[calc(36*var(--desktop-px-unit))] bg-primary/20 blur-3xl" />
          <div className={HERO_MEDIA_FRAME}>
            <img
              src={engImg}
              alt="Engineer working on a Cath Lab system"
              className={HERO_MEDIA_IMG}
              width={900}
              height={563}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
