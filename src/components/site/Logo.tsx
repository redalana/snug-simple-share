import logoAsset from "@/assets/abufarha-logo.png.asset.json";

/**
 * Official AbuFarha Medical Supplies logo.
 * Single source of truth — every header/footer/page usage renders this.
 * The artwork keeps its natural aspect ratio (never stretched or cropped).
 */
export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={logoAsset.url}
        alt="AbuFarha Medical Supplies"
        width={2280}
        height={1310}
        decoding="async"
        className={`h-[calc(46*var(--desktop-px-unit,1px))] w-auto max-w-full object-contain ${
          light ? "" : ""
        }`}
      />
    </span>
  );
}
