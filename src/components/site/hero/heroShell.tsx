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

/** Inner grid: identical container width, horizontal padding, vertical rhythm and min height. */
export const HERO_GRID =
  "relative mx-auto grid max-w-[100rem] gap-10 px-6 pt-16 pb-14 sm:pt-20 sm:pb-16 lg:min-h-[calc(460*var(--desktop-px-unit))] lg:gap-16 lg:px-10 lg:pt-20 lg:pb-16";

/** Inset hero media card (used when a hero shows a framed photograph). */
export const HERO_MEDIA_FRAME =
  "relative aspect-[16/10] w-full overflow-hidden rounded-[calc(28*var(--desktop-px-unit))] border border-white/15 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)]";

/** Image inside the inset media card. */
export const HERO_MEDIA_IMG = "absolute inset-0 h-full w-full object-cover object-center";

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
