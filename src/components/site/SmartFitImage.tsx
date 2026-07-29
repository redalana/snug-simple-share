import { useEffect, useRef, useState } from "react";

type BBox = { x: number; y: number; w: number; h: number; nW: number; nH: number };

// Cache trim results across renders / component instances
const bboxCache = new Map<string, BBox | null>();
const pending = new Map<string, Promise<BBox | null>>();

function computeBBox(src: string): Promise<BBox | null> {
  if (bboxCache.has(src)) return Promise.resolve(bboxCache.get(src) ?? null);
  const existing = pending.get(src);
  if (existing) return existing;

  const p = new Promise<BBox | null>((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const MAX = 400; // downscale for perf
        const scale = Math.min(1, MAX / Math.max(img.naturalWidth, img.naturalHeight));
        const cw = Math.max(1, Math.round(img.naturalWidth * scale));
        const ch = Math.max(1, Math.round(img.naturalHeight * scale));
        const canvas = document.createElement("canvas");
        canvas.width = cw;
        canvas.height = ch;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) throw new Error("no ctx");
        ctx.drawImage(img, 0, 0, cw, ch);
        const data = ctx.getImageData(0, 0, cw, ch).data;

        let minX = cw,
          minY = ch,
          maxX = -1,
          maxY = -1;
        // Threshold: near-white or transparent = background
        for (let y = 0; y < ch; y++) {
          for (let x = 0; x < cw; x++) {
            const i = (y * cw + x) * 4;
            const a = data[i + 3];
            const r = data[i],
              g = data[i + 1],
              b = data[i + 2];
            const isBg = a < 12 || (r > 243 && g > 243 && b > 243);
            if (!isBg) {
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }

        if (maxX < 0) {
          bboxCache.set(src, null);
          resolve(null);
          return;
        }

        // Convert back to natural pixel coords
        const bx = minX / scale;
        const by = minY / scale;
        const bw = (maxX - minX + 1) / scale;
        const bh = (maxY - minY + 1) / scale;
        const result: BBox = {
          x: bx,
          y: by,
          w: bw,
          h: bh,
          nW: img.naturalWidth,
          nH: img.naturalHeight,
        };
        bboxCache.set(src, result);
        resolve(result);
      } catch {
        bboxCache.set(src, null);
        resolve(null);
      }
    };
    img.onerror = () => {
      bboxCache.set(src, null);
      resolve(null);
    };
    img.src = src;
  });

  pending.set(src, p);
  p.finally(() => pending.delete(src));
  return p;
}

export interface SmartFitImageProps {
  src: string;
  alt: string;
  /** Fraction of container the trimmed subject should occupy (0-1). */
  fit?: number;
  className?: string;
  imgClassName?: string;
  loading?: "eager" | "lazy";
  onClick?: () => void;
  /** Accessible label if the wrapper should behave interactively; unused otherwise */
  ariaLabel?: string;
}

/**
 * Renders an image inside a fixed-size container, auto-trimming white/transparent
 * margins and scaling the subject to fill ~fit of the container. Preserves aspect
 * ratio, never crops the subject, never distorts.
 */
export function SmartFitImage({
  src,
  alt,
  fit = 0.92,
  className = "",
  imgClassName = "",
  loading = "eager",
}: SmartFitImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [bbox, setBBox] = useState<BBox | null>(() => bboxCache.get(src) ?? null);
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  useEffect(() => {
    let cancelled = false;
    setBBox(bboxCache.get(src) ?? null);
    computeBBox(src).then((b) => {
      if (!cancelled) setBBox(b);
    });
    return () => {
      cancelled = true;
    };
  }, [src]);

  useEffect(() => {
    if (!wrapRef.current) return;
    const el = wrapRef.current;
    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect();
      setSize({ w: r.width, h: r.height });
    });
    ro.observe(el);
    const r = el.getBoundingClientRect();
    setSize({ w: r.width, h: r.height });
    return () => ro.disconnect();
  }, []);

  // Compute transform: object-contain places the image centered at scale0.
  // We add an extra scale + translate to fit the bbox to `fit` * container.
  let style: React.CSSProperties = {};
  if (bbox && size.w > 0 && size.h > 0) {
    const scale0 = Math.min(size.w / bbox.nW, size.h / bbox.nH);
    const displayedBW = bbox.w * scale0;
    const displayedBH = bbox.h * scale0;
    if (displayedBW > 0 && displayedBH > 0) {
      const extra = Math.min((size.w * fit) / displayedBW, (size.h * fit) / displayedBH);
      // Only scale UP small subjects — never shrink an image that already fills
      // the container. Skip near-1 transforms so large images stay untouched.
      if (extra > 1.15) {
        const s = Math.min(extra, 2.2);
        const imgCX = bbox.nW / 2;
        const imgCY = bbox.nH / 2;
        const bboxCX = bbox.x + bbox.w / 2;
        const bboxCY = bbox.y + bbox.h / 2;
        const tx = (imgCX - bboxCX) * scale0 * s;
        const ty = (imgCY - bboxCY) * scale0 * s;
        style = {
          transform: `translate(${tx}px, ${ty}px) scale(${s})`,
          transformOrigin: "center center",
          willChange: "transform",
        };
      }
    }
  }

  return (
    <div ref={wrapRef} className={`relative h-full w-full ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`absolute inset-0 h-full w-full object-contain ${imgClassName}`}
        style={style}
        decoding="async"
      />
    </div>
  );
}
