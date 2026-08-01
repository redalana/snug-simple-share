import { cn } from "@/lib/utils";

/**
 * Shared hero geometry — the Services page hero is the design reference.
 * Every page hero reuses these exact classes so width, height, radius,
 * object-fit, alignment, spacing and responsive behaviour stay identical.
 * Only the photograph and the copy change per page.
 */

/** Section wrapper (dark, full-bleed, clipped). */
export const HERO_SECTION =
  "relative isolate overflow-hidden bg-[#0d0f12] text-white";

/**
 * Inner grid: identical container width, horizontal padding, vertical rhythm
 * and min height. The `lg:min-h` is the single value that pins every hero to
 * the exact same rendered height as the Services reference (80 top + 530
 * content + 64 bottom padding).
 */
export const HERO_GRID =
  "relative mx-auto grid max-w-[100rem] gap-10 px-6 pt-16 pb-14 sm:pt-20 sm:pb-16 lg:min-h-[calc(530*var(--desktop-px-unit))] lg:gap-16 lg:px-10 lg:pt-20 lg:pb-16";

/** Column split: copy left, media/panel right — identical on every hero. */
export const HERO_COLS = "lg:grid-cols-[1.35fr_0.65fr]";

/** Left copy column (reserves the reference content height). */
export const HERO_COPY_COL = "relative min-w-0 lg:min-h-[calc(530*var(--desktop-px-unit))]";

/** Headline — identical size, leading, tracking and max width everywhere. */
export const HERO_TITLE =
  "mt-6 max-w-2xl font-display text-[2.375rem] font-extrabold leading-[1.05] tracking-tight text-balance [overflow-wrap:break-word] sm:text-5xl lg:text-[calc(46*var(--desktop-px-unit))]";

/** Lead paragraph — identical width, size and leading everywhere. */
export const HERO_LEAD =
  "mt-6 max-w-xl text-[calc(15*var(--desktop-px-unit))] leading-[1.75] text-white/70 [overflow-wrap:break-word]";

/** CTA row spacing. */
export const HERO_CTA_ROW = "mt-8 flex flex-wrap items-center gap-4";

/** Optional stat/highlight card grid under the CTAs. */
export const HERO_CARD_GRID = "mt-8 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4";

/** Inset hero media card (used when a hero shows a framed photograph). */
export const HERO_MEDIA_FRAME =
  "relative aspect-[16/10] w-full overflow-hidden rounded-[calc(28*var(--desktop-px-unit))] border border-white/15 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)]";

/** Image inside the inset media card. */
export const HERO_MEDIA_IMG = "absolute inset-0 h-full w-full object-cover object-center";

/** Right-hand column wrapper (media card or stat panel). */
export const HERO_SIDE_COL = "relative min-w-0 lg:justify-self-end lg:self-center lg:w-full";


export type HeroBackdropProps = {
  src: string;
  /** Decorative by default — heroes always carry their meaning in the copy. */
  alt?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Full-bleed hero background image layer with the reference overlay gradients.
 */
export function HeroBackdrop({ src, alt = "", priority = false, className }: HeroBackdropProps) {
  return (
    <div className={cn("absolute inset-0", className)}>
      <img
        src={src}
        alt={alt}
        aria-hidden={alt ? undefined : "true"}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
        width={1600}
        height={1100}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f12] via-[#0d0f12]/85 to-[#0d0f12]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12]/70 via-transparent to-transparent" />
    </div>
  );
}
