import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronDown,
  Clock,
  FileText,
  Mail,
  MessageCircle,
  PhoneCall,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";
import { defaultCountries, parseCountry, FlagImage } from "react-international-phone";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PhoneField } from "@/components/site/PhoneField";
import { PRODUCTS } from "@/lib/products";
import { onOpenQuoteModal, type QuoteContext } from "@/lib/quote-modal";

const COUNTRIES = defaultCountries.map(parseCountry).sort((a, b) => a.name.localeCompare(b.name));

const INTERESTS = [
  "Cath Lab",
  "MRI",
  "CT",
  "PET/CT",
  "X-Ray",
  "C-Arm",
  "Mammography",
  "Ultrasound",
  "Operating Room",
  "Turnkey Project",
  "Other",
];

type Contact = "whatsapp" | "phone" | "email";

export function QuoteModal() {
  const [open, setOpen] = useState(false);
  const [ctx, setCtx] = useState<QuoteContext>({});
  const [submitting, setSubmitting] = useState(false);
  const [country, setCountry] = useState("eg");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<string>("");
  const [product, setProduct] = useState("");
  const [contact, setContact] = useState<Contact>("whatsapp");
  const [countryQuery, setCountryQuery] = useState("");
  const [countryOpen, setCountryOpen] = useState(false);
  const [interestOpen, setInterestOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    return onOpenQuoteModal((c) => {
      setCtx(c);
      setProduct(c.productName ?? "");
      setOpen(true);
    });
  }, []);

  const filteredCountries = useMemo(() => {
    const q = countryQuery.trim().toLowerCase();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter(
      (c) => c.name.toLowerCase().includes(q) || c.iso2.includes(q) || c.dialCode.includes(q),
    );
  }, [countryQuery]);

  const productMatches = useMemo(() => {
    const q = product.trim().toLowerCase();
    if (!q) return PRODUCTS.slice(0, 8);
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q),
    ).slice(0, 8);
  }, [product]);

  const activeCountry = COUNTRIES.find((c) => c.iso2 === country) ?? COUNTRIES[0];

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 500));
    setSubmitting(false);
    setOpen(false);
    navigate({ to: "/thank-you", search: { source: "quote" } as never });
  };

  const resetOnClose = (o: boolean) => {
    setOpen(o);
    if (!o) {
      setInterest("");
      setPhone("");
      setContact("whatsapp");
    }
  };

  const fieldLabel = "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/75";
  const fieldInput =
    "h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-4 focus:ring-primary/10";

  return (
    <Dialog open={open} onOpenChange={resetOnClose}>
      <DialogContent
        className="max-h-[92vh] w-[calc(100vw-2rem)] max-w-[900px] overflow-hidden rounded-[20px] border border-border/70 bg-background p-0 shadow-[0_40px_100px_-30px_rgba(15,23,42,0.35)]"
      >
        {/* HEADER */}
        <div className="relative border-b border-border/70 px-6 pb-6 pt-7 sm:px-10 sm:pt-9">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
            <FileText className="h-3 w-3" /> Quotation Request
          </div>
          <DialogTitle className="mt-3 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-[28px]">
            Request a Quote
          </DialogTitle>
          <DialogDescription className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Tell us about your healthcare project and our specialists will prepare the best quotation.
          </DialogDescription>
        </div>

        <form
          onSubmit={onSubmit}
          className="max-h-[calc(92vh-14rem)] overflow-y-auto px-6 py-6 sm:px-10 sm:py-8"
        >
          <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
            {/* LEFT COLUMN */}
            <div className="space-y-5">
              <div>
                <label htmlFor="qm-name" className={fieldLabel}>Full Name *</label>
                <input id="qm-name" required name="name" className={fieldInput} placeholder="Dr. Sarah Ahmad" />
              </div>
              <div>
                <label htmlFor="qm-org" className={fieldLabel}>Hospital / Company *</label>
                <input id="qm-org" required name="org" className={fieldInput} placeholder="Al Amal Medical Center" />
              </div>
              <div>
                <span className={fieldLabel}>Country *</span>
                <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={`${fieldInput} flex items-center justify-between text-left`}
                      aria-haspopup="listbox"
                    >
                      <span className="flex items-center gap-2.5">
                        <FlagImage iso2={activeCountry.iso2} style={{ width: 22, height: 22 }} />
                        <span className="text-sm font-medium">{activeCountry.name}</span>
                        <span className="text-xs text-muted-foreground">+{activeCountry.dialCode}</span>
                      </span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-[--radix-popover-trigger-width] p-0">
                    <div className="flex items-center gap-2 border-b border-border px-3 py-2">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <input
                        autoFocus
                        value={countryQuery}
                        onChange={(e) => setCountryQuery(e.target.value)}
                        placeholder="Search country"
                        className="h-8 flex-1 bg-transparent text-sm outline-none"
                      />
                    </div>
                    <ul role="listbox" className="max-h-64 overflow-y-auto py-1">
                      {filteredCountries.map((c) => (
                        <li key={c.iso2}>
                          <button
                            type="button"
                            onClick={() => {
                              setCountry(c.iso2);
                              setCountryOpen(false);
                              setCountryQuery("");
                            }}
                            className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm hover:bg-secondary"
                          >
                            <FlagImage iso2={c.iso2} style={{ width: 20, height: 20 }} />
                            <span className="flex-1">{c.name}</span>
                            <span className="text-xs text-muted-foreground">+{c.dialCode}</span>
                            {c.iso2 === country && <Check className="h-4 w-4 text-primary" />}
                          </button>
                        </li>
                      ))}
                      {filteredCountries.length === 0 && (
                        <li className="px-3 py-4 text-center text-xs text-muted-foreground">No matches</li>
                      )}
                    </ul>
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <span className={fieldLabel}>Phone Number *</span>
                <PhoneField value={phone} onChange={setPhone} className="[&_input]:h-12 [&_input]:rounded-xl" />
              </div>
              <div>
                <label htmlFor="qm-email" className={fieldLabel}>Email *</label>
                <input id="qm-email" required type="email" name="email" className={fieldInput} placeholder="sarah@hospital.com" />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-5">
              <div>
                <span className={fieldLabel}>I'm Interested In *</span>
                <Popover open={interestOpen} onOpenChange={setInterestOpen}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={`${fieldInput} flex items-center justify-between text-left`}
                      aria-haspopup="listbox"
                    >
                      <span className={interest ? "text-foreground" : "text-muted-foreground/70"}>
                        {interest || "Select a category"}
                      </span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-[--radix-popover-trigger-width] p-1">
                    <ul role="listbox" className="max-h-72 overflow-y-auto">
                      {INTERESTS.map((i) => (
                        <li key={i}>
                          <button
                            type="button"
                            onClick={() => {
                              setInterest(i);
                              setInterestOpen(false);
                            }}
                            className="flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-secondary rounded-md"
                          >
                            {i}
                            {i === interest && <Check className="h-4 w-4 text-primary" />}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </PopoverContent>
                </Popover>
                {/* Hidden input carries value with the form */}
                <input type="hidden" name="interest" value={interest} required />
              </div>

              <div>
                <label htmlFor="qm-product" className={fieldLabel}>Product Name</label>
                <Popover open={productOpen && productMatches.length > 0} onOpenChange={setProductOpen}>
                  <PopoverTrigger asChild>
                    <input
                      id="qm-product"
                      name="product"
                      value={product}
                      onChange={(e) => {
                        setProduct(e.target.value);
                        setProductOpen(true);
                      }}
                      onFocus={() => setProductOpen(true)}
                      autoComplete="off"
                      className={fieldInput}
                      placeholder="Start typing — e.g. Philips Ingenia MRI"
                    />
                  </PopoverTrigger>
                  <PopoverContent
                    align="start"
                    onOpenAutoFocus={(e) => e.preventDefault()}
                    className="w-[--radix-popover-trigger-width] p-1"
                  >
                    <ul role="listbox" className="max-h-64 overflow-y-auto">
                      {productMatches.map((p) => (
                        <li key={p.slug}>
                          <button
                            type="button"
                            onClick={() => {
                              setProduct(p.name);
                              setProductOpen(false);
                            }}
                            className="flex w-full items-start gap-3 rounded-md px-3 py-2 text-left hover:bg-secondary"
                          >
                            <img src={p.image} alt="" className="h-9 w-12 shrink-0 rounded-md object-cover" />
                            <span className="min-w-0 flex-1">
                              <span className="block truncate text-sm font-semibold text-foreground">{p.name}</span>
                              <span className="block truncate text-[11px] text-muted-foreground">
                                {p.brand} · {p.category}
                              </span>
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label htmlFor="qm-message" className={fieldLabel}>Message</label>
                <textarea
                  id="qm-message"
                  name="message"
                  className="w-full rounded-xl border border-border bg-background p-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-4 focus:ring-primary/10"
                  style={{ minHeight: 170 }}
                  placeholder="Share your project details, timeline, and any specific requirements…"
                />
              </div>

              <div>
                <span className={fieldLabel}>Preferred Contact</span>
                <div className="grid grid-cols-3 gap-2">
                  {(
                    [
                      { id: "whatsapp", label: "WhatsApp", icon: MessageCircle },
                      { id: "phone", label: "Phone", icon: PhoneCall },
                      { id: "email", label: "Email", icon: Mail },
                    ] as { id: Contact; label: string; icon: typeof Mail }[]
                  ).map((opt) => {
                    const active = contact === opt.id;
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setContact(opt.id)}
                        aria-pressed={active}
                        className={`flex h-11 items-center justify-center gap-2 rounded-xl border text-xs font-semibold transition-all ${
                          active
                            ? "border-primary bg-primary/8 text-primary"
                            : "border-border bg-background text-foreground/70 hover:border-primary/40 hover:text-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
                <input type="hidden" name="preferred_contact" value={contact} />
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-8 flex flex-col-reverse items-stretch gap-4 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" /> Secure Submission
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary" /> Response within 24 hours
              </span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-12 items-center gap-1.5 rounded-full border border-border bg-card px-5 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                <X className="h-4 w-4" /> Cancel
              </button>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.button
                  key={submitting ? "sending" : "submit"}
                  type="submit"
                  disabled={submitting}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.18 }}
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-8 text-sm font-bold text-primary-foreground shadow-[0_14px_36px_-14px_var(--primary)] transition-transform hover:-translate-y-0.5 disabled:opacity-70"
                >
                  {submitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Submit Request
                      <FileText className="h-4 w-4" />
                    </>
                  )}
                </motion.button>
              </AnimatePresence>
            </div>
          </div>

          {ctx.productName && (
            <input type="hidden" name="context_product" value={ctx.productName} />
          )}
          {ctx.source && <input type="hidden" name="context_source" value={ctx.source} />}
        </form>
      </DialogContent>
    </Dialog>
  );
}
