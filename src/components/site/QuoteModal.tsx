import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { FileText, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { onOpenQuoteModal, type QuoteContext } from "@/lib/quote-modal";

export function QuoteModal() {
  const [open, setOpen] = useState(false);
  const [ctx, setCtx] = useState<QuoteContext>({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    return onOpenQuoteModal((c) => {
      setCtx(c);
      setOpen(true);
    });
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission latency; real submission is handled by dedicated forms.
    await new Promise((r) => setTimeout(r, 400));
    setSubmitting(false);
    setOpen(false);
    navigate({ to: "/thank-you", search: { source: "quote" } as never });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-display text-2xl">
            <FileText className="h-5 w-5 text-primary" /> Request a Quotation
          </DialogTitle>
          <DialogDescription>
            {ctx.productName
              ? `Tell us about your requirements for the ${ctx.productName}. Our team responds within 24 hours.`
              : "Share a few details and our team will respond within 24 hours."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="mt-2 space-y-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-xs font-semibold text-foreground/80">Full Name</span>
              <input required name="name" className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary" />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold text-foreground/80">Organization</span>
              <input required name="org" className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary" />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold text-foreground/80">Email</span>
              <input required type="email" name="email" className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary" />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold text-foreground/80">Phone</span>
              <input required type="tel" name="phone" className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary" />
            </label>
          </div>
          <label className="block">
            <span className="mb-1 block text-xs font-semibold text-foreground/80">Product / System of Interest</span>
            <input
              defaultValue={ctx.productName ?? ""}
              name="product"
              className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary"
              placeholder="e.g. Philips Ingenia MRI"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-semibold text-foreground/80">Message</span>
            <textarea name="message" rows={4} className="w-full rounded-lg border border-border bg-background p-3 text-sm outline-none focus:border-primary" />
          </label>

          <div className="flex flex-wrap items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 items-center gap-1.5 rounded-full border border-border bg-card px-5 text-sm font-semibold text-foreground hover:bg-secondary"
            >
              <X className="h-4 w-4" /> Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_-12px_var(--primary)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Submit Request"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
