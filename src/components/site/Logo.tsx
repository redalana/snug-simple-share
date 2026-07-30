import logoAsset from "@/assets/abufarha-logo.png.asset.json";

/**
 * Official AbuFarha Medical Supplies logo.
 * Single source of truth — every header/footer/page usage renders this artwork,
 * always at its natural aspect ratio (never stretched or cropped).
 */
export function Logo({
  className = "",
  light = false,
  size = "default",
}: {
  className?: string;
  light?: boolean;
  size?: "default" | "lg";
}) {
  void light;
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={logoAsset.url}
        alt="AbuFarha Medical Supplies"
        width={2280}
        height={1310}
        decoding="async"
        className={`w-auto max-w-full object-contain ${
          size === "lg" ? "h-16 md:h-24" : "h-11 md:h-14"
        }`}
      />
    </span>
  );
}
