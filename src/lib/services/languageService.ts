/**
 * languageService — frontend architecture for automatic language detection.
 *
 * PLACEHOLDER implementation. Detection currently uses the browser language
 * with an optional country hint. Translations/routing are NOT wired yet — this
 * only establishes the contract so the backend/CMS can later drive real i18n
 * without changing callers.
 */

export type SupportedLanguage = "en" | "ar" | "fr";

export const SUPPORTED_LANGUAGES: SupportedLanguage[] = ["en", "ar", "fr"];
export const DEFAULT_LANGUAGE: SupportedLanguage = "en";

export interface DetectedLanguage {
  language: SupportedLanguage;
  /** Detection priority that produced the value. */
  source: "browser" | "country" | "default";
}

export interface LanguageService {
  detectLanguage(countryIso2?: string): DetectedLanguage;
  isSupported(lang: string): lang is SupportedLanguage;
}

// Country → language fallback (used only when browser language is unknown).
const COUNTRY_LANGUAGE: Record<string, SupportedLanguage> = {
  jo: "ar",
  eg: "ar",
  sa: "ar",
  ae: "ar",
  fr: "fr",
};

function normalize(lang: string): SupportedLanguage | null {
  const base = lang.split("-")[0].toLowerCase();
  return (SUPPORTED_LANGUAGES as string[]).includes(base)
    ? (base as SupportedLanguage)
    : null;
}

export const languageService: LanguageService = {
  detectLanguage(countryIso2) {
    // Priority 1: browser language.
    try {
      const locales = navigator.languages ?? [navigator.language];
      for (const loc of locales) {
        const lang = normalize(loc);
        if (lang) return { language: lang, source: "browser" };
      }
    } catch {
      /* noop */
    }

    // Priority 2: country hint.
    if (countryIso2) {
      const byCountry = COUNTRY_LANGUAGE[countryIso2.toLowerCase()];
      if (byCountry) return { language: byCountry, source: "country" };
    }

    return { language: DEFAULT_LANGUAGE, source: "default" };
  },

  isSupported(lang): lang is SupportedLanguage {
    return (SUPPORTED_LANGUAGES as string[]).includes(lang);
  },
};
