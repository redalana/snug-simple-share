// Tiny event bus for opening the global Quote modal from anywhere in the app.
export type QuoteContext = {
  productName?: string;
  productSlug?: string;
  source?: string;
};

const EVENT = "af:open-quote-modal";

export function openQuoteModal(ctx: QuoteContext = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<QuoteContext>(EVENT, { detail: ctx }));
}

export function onOpenQuoteModal(handler: (ctx: QuoteContext) => void) {
  if (typeof window === "undefined") return () => {};
  const listener = (e: Event) => handler((e as CustomEvent<QuoteContext>).detail || {});
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
