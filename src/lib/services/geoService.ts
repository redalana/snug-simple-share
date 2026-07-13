/**
 * geoService — frontend architecture for visitor location detection.
 *
 * PLACEHOLDER implementation. Country is currently inferred from the browser
 * locale only (no network calls). When a backend is enabled, replace
 * detectCountry() with a server-backed IP geolocation lookup — the return
 * contract stays identical so no UI changes are required.
 */

export interface DetectedCountry {
  /** ISO 3166-1 alpha-2 code, lowercase (e.g. "jo", "eg", "sa"). */
  iso2: string;
  /** Where the value came from — useful for later backend swap-in. */
  source: "locale" | "ip" | "default";
}

export interface GeoService {
  detectCountry(): Promise<DetectedCountry>;
}

function countryFromLocale(): string | null {
  try {
    const locales = navigator.languages ?? [navigator.language];
    for (const loc of locales) {
      const region = loc.split("-")[1];
      if (region) return region.toLowerCase();
    }
  } catch {
    /* noop */
  }
  return null;
}

export const geoService: GeoService = {
  async detectCountry() {
    const fromLocale = countryFromLocale();
    if (fromLocale) return { iso2: fromLocale, source: "locale" };
    // Default region until backend IP geolocation is connected.
    return { iso2: "jo", source: "default" };
  },
};
