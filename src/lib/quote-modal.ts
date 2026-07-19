// Tiny event bus for opening the global Quote modal from anywhere in the app.
export type QuoteContext = {
  productName?: string;
  productSlug?: string;
  source?: string;
};

const EVENT = "af:open-quote-modal";
const STATE_EVENT = "af:quote-modal-state";

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

/** Broadcast open/closed state so floating chrome (WhatsApp, Quote pill) can hide. */
export function emitQuoteModalState(open: boolean) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<boolean>(STATE_EVENT, { detail: open }));
}

export function onQuoteModalState(handler: (open: boolean) => void) {
  if (typeof window === "undefined") return () => {};
  const listener = (e: Event) => handler((e as CustomEvent<boolean>).detail);
  window.addEventListener(STATE_EVENT, listener);
  return () => window.removeEventListener(STATE_EVENT, listener);
}
