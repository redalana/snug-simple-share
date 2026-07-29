/**
 * Analytics event surface (provider-agnostic).
 *
 * Nothing here talks to a provider. Interactions dispatch a typed, namespaced
 * DOM CustomEvent plus an optional `window.dataLayer` push, so a GA4 / GTM /
 * Segment adapter can be attached later without touching any component.
 */

export const ANALYTICS_EVENT = "abufarha:analytics";

export type AnalyticsEventName =
  | "knowledge_hub_tab_selected"
  | "article_opened"
  | "buying_guide_clicked"
  | "comparison_viewed"
  | "faq_expanded"
  | "download_clicked"
  | "service_selected"
  | "brand_selected"
  | "clinical_application_selected"
  | "recommendation_clicked";

export type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

export type AnalyticsEventDetail = {
  name: AnalyticsEventName;
  payload: AnalyticsPayload;
  timestamp: number;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/** Fire an analytics event. Safe during SSR — becomes a no-op. */
export function trackEvent(name: AnalyticsEventName, payload: AnalyticsPayload = {}): void {
  if (typeof window === "undefined") return;
  const detail: AnalyticsEventDetail = { name, payload, timestamp: Date.now() };
  window.dispatchEvent(new CustomEvent<AnalyticsEventDetail>(ANALYTICS_EVENT, { detail }));
  if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event: name, ...payload });
}

/** Subscribe to every analytics event (for a future provider adapter). */
export function onAnalyticsEvent(handler: (detail: AnalyticsEventDetail) => void): () => void {
  if (typeof window === "undefined") return () => {};
  const listener = (event: Event) => handler((event as CustomEvent<AnalyticsEventDetail>).detail);
  window.addEventListener(ANALYTICS_EVENT, listener);
  return () => window.removeEventListener(ANALYTICS_EVENT, listener);
}
