/**
 * imageService — frontend architecture for image-related automation.
 *
 * These are PLACEHOLDER (client-side) implementations that establish the
 * public interface the UI depends on. When a backend/CMS is enabled, swap the
 * implementations below to call server functions WITHOUT changing any callers.
 *
 * All functions are pure/deterministic where possible so the UI can rely on
 * them today and the backend can mirror the same contract later.
 */

export interface GeneratedImageMeta {
  /** SEO-friendly file name, e.g. "philips-allura-xper-fd20-01.webp". */
  filename: string;
  /** Manufacturer derived from the selected brand. */
  manufacturer: string;
  /** Brand as provided. */
  brand: string;
  /** Human image title, e.g. "Philips Medical Equipment". */
  title: string;
  /** Accessible alt text, e.g. "Philips Medical Equipment". */
  alt: string;
}

export interface ImageService {
  slugify(input: string): string;
  generateFilename(input: {
    productName: string;
    index: number;
    extension?: string;
  }): string;
  mapManufacturer(brand: string): string;
  generateAltText(brand: string): string;
  generateTitle(brand: string): string;
  generateMeta(input: {
    brand: string;
    productName: string;
    index: number;
    extension?: string;
  }): GeneratedImageMeta;
  /** Placeholder: real WebP conversion happens on the backend later. */
  toWebP(file: File): Promise<{ blob: Blob; filename: string }>;
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Brand → manufacturer mapping. For now brand and manufacturer are the same
 * canonical value; the backend can later resolve aliases (e.g. "Toshiba" →
 * "Canon Medical") from the database.
 */
function mapManufacturer(brand: string): string {
  return brand.trim();
}

export const imageService: ImageService = {
  slugify,

  generateFilename({ productName, index, extension = "webp" }) {
    const base = slugify(productName);
    const seq = String(index + 1).padStart(2, "0");
    return `${base}-${seq}.${extension}`;
  },

  mapManufacturer,

  generateAltText(brand) {
    return `${mapManufacturer(brand)} Medical Equipment`;
  },

  generateTitle(brand) {
    return `${mapManufacturer(brand)} Medical Equipment`;
  },

  generateMeta({ brand, productName, index, extension = "webp" }) {
    const manufacturer = mapManufacturer(brand);
    return {
      filename: this.generateFilename({ productName, index, extension }),
      manufacturer,
      brand,
      title: `${manufacturer} Medical Equipment`,
      alt: `${manufacturer} Medical Equipment`,
    };
  },

  async toWebP(file) {
    // PLACEHOLDER: no real conversion on the frontend. Returns the original
    // blob with a WebP-named filename so the interface is stable. Real
    // conversion + optimization will run on the backend/CMS pipeline.
    const base = slugify(file.name.replace(/\.[^.]+$/, ""));
    return { blob: file, filename: `${base}.webp` };
  },
};
