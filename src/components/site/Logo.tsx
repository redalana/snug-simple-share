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
  size?: "default" | "lg" | "header";
}) {
  void light;
  const heights: Record<string, string> = {
    default: "h-11 md:h-14",
    lg: "h-16 md:h-24",
    header: "",
  };
  const isHeader = size === "header";
  return (
    <span
      className={`inline-flex items-center justify-center ${isHeader ? "h-full w-full" : ""} ${className}`}
    >
      <img
        src={logoAsset.url}
        alt="AbuFarha Medical Supplies"
        width={2280}
        height={1310}
        decoding="async"
        className={
          isHeader
            ? "max-h-[85%] max-w-[92%] object-contain"
            : `w-auto max-w-full object-contain ${heights[size]}`
        }
      />
    </span>
  );
}
