import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  CheckCircle2,
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
import {
  onOpenQuoteModal,
  emitQuoteModalState,
  type QuoteContext,
} from "@/lib/quote-modal";

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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function QuoteModal() {
  const [open, setOpen] = useState(false);
  const [ctx, setCtx] = useState<QuoteContext>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);


  // form state
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [country, setCountry] = useState("eg");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState<string>("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState<Contact>("email");

  // touched state for inline validation
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const markTouched = (k: string) => setTouched((t) => ({ ...t, [k]: true }));

  // popovers
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

  // Broadcast state so floating chrome hides while modal is open.
  useEffect(() => {
    emitQuoteModalState(open);
  }, [open]);

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

  const emailValid = EMAIL_RE.test(email.trim());
  const phoneValid = phone.replace(/\D/g, "").length >= 7;
  const isValid =
    name.trim().length >= 2 &&
    org.trim().length >= 2 &&
    !!country &&
    phoneValid &&
    emailValid &&
    !!interest;

  const showError = (k: string, cond: boolean) => touched[k] && cond;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid || submitting) return;
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
      setContact("email");
      setTouched({});
    }
  };

  const fieldLabel =
    "mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/75";
  const inputBase =
    "h-14 w-full rounded-xl border bg-background px-4 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/55 focus:border-primary focus:ring-4 focus:ring-primary/12";
  const inputOk = "border-border/80 hover:border-border";
  const inputBad = "border-destructive/70 focus:border-destructive focus:ring-destructive/15";
  const fieldInput = (bad?: boolean) => `${inputBase} ${bad ? inputBad : inputOk}`;
  const errText = "mt-1.5 text-[11px] font-medium text-destructive";

  return (
    <Dialog open={open} onOpenChange={resetOnClose}>
      <DialogContent
        className="max-h-[94vh] w-[calc(100vw-2rem)] max-w-[900px] overflow-hidden rounded-[20px] border border-border/60 bg-background p-0 shadow-[0_50px_120px_-30px_rgba(15,23,42,0.4)]"
      >
        {/* HEADER */}
        <div className="relative border-b border-border/60 px-7 pb-8 pt-9 sm:px-9 sm:pt-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
            <FileText className="h-3 w-3" /> Quotation Request
          </div>
          <DialogTitle className="mt-5 font-display text-[26px] font-extrabold leading-tight tracking-tight text-foreground sm:text-[30px]">
            Request a Quote
          </DialogTitle>
          <DialogDescription className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-muted-foreground">
            Tell us about your healthcare project and our specialists will prepare
            the best quotation for your requirements.
          </DialogDescription>
        </div>

        <form
          onSubmit={onSubmit}
          className="max-h-[calc(94vh-14rem)] overflow-y-auto px-7 py-8 sm:px-9 sm:py-9"
        >
          <div className="grid grid-cols-1 gap-x-7 gap-y-6 md:grid-cols-2">
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              <div>
                <label htmlFor="qm-name" className={fieldLabel}>Full Name *</label>
                <input
                  id="qm-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => markTouched("name")}
                  aria-invalid={showError("name", name.trim().length < 2)}
                  className={fieldInput(showError("name", name.trim().length < 2))}
                  placeholder="Dr. Ahmed Hassan"
                />
                {showError("name", name.trim().length < 2) && (
                  <p className={errText}>Please enter your full name.</p>
                )}
              </div>

              <div>
                <label htmlFor="qm-org" className={fieldLabel}>Hospital / Company *</label>
                <input
                  id="qm-org"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  onBlur={() => markTouched("org")}
                  aria-invalid={showError("org", org.trim().length < 2)}
                  className={fieldInput(showError("org", org.trim().length < 2))}
                  placeholder="Hospital or Company Name"
                />
                {showError("org", org.trim().length < 2) && (
                  <p className={errText}>Please enter your organization.</p>
                )}
              </div>

              <div>
                <span className={fieldLabel}>Country *</span>
                <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={`${fieldInput(false)} flex items-center justify-between text-left`}
                      aria-haspopup="listbox"
                      aria-label="Select country"
                    >
                      <span className="flex items-center gap-3">
                        <FlagImage iso2={activeCountry.iso2} style={{ width: 22, height: 22 }} />
                        <span className="text-sm font-medium">{activeCountry.name}</span>
                        <span className="text-xs text-muted-foreground">+{activeCountry.dialCode}</span>
                      </span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    align="start"
                    className="w-[--radix-popover-trigger-width] p-0 animate-in fade-in-0 zoom-in-95"
                  >
                    <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <input
                        autoFocus
                        value={countryQuery}
                        onChange={(e) => setCountryQuery(e.target.value)}
                        placeholder="Search country"
                        aria-label="Search country"
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
                            className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors hover:bg-secondary"
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
                <PhoneField
                  value={phone}
                  onChange={(v) => {
                    setPhone(v);
                    if (!touched.phone) markTouched("phone");
                  }}
                  className="[&_input]:h-14 [&_input]:rounded-xl [&_input]:text-sm"
                />
                {showError("phone", !phoneValid) && (
                  <p className={errText}>Enter a valid phone number.</p>
                )}
              </div>

              <div>
                <label htmlFor="qm-email" className={fieldLabel}>Email *</label>
                <input
                  id="qm-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => markTouched("email")}
                  aria-invalid={showError("email", !emailValid)}
                  className={fieldInput(showError("email", !emailValid))}
                  placeholder="yourname@hospital.com"
                />
                {showError("email", !emailValid) && (
                  <p className={errText}>Enter a valid email address.</p>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              <div>
                <span className={fieldLabel}>I'm Interested In *</span>
                <Popover open={interestOpen} onOpenChange={setInterestOpen}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      onClick={() => markTouched("interest")}
                      className={`${fieldInput(showError("interest", !interest))} flex items-center justify-between text-left`}
                      aria-haspopup="listbox"
                      aria-label="Interest category"
                    >
                      <span className={interest ? "text-foreground" : "text-muted-foreground/60"}>
                        {interest || "Select a category"}
                      </span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    align="start"
                    className="w-[--radix-popover-trigger-width] p-1 animate-in fade-in-0 zoom-in-95"
                  >
                    <ul role="listbox" className="max-h-72 overflow-y-auto">
                      {INTERESTS.map((i) => (
                        <li key={i}>
                          <button
                            type="button"
                            onClick={() => {
                              setInterest(i);
                              setInterestOpen(false);
                            }}
                            className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-secondary"
                          >
                            {i}
                            {i === interest && <Check className="h-4 w-4 text-primary" />}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </PopoverContent>
                </Popover>
                {showError("interest", !interest) && (
                  <p className={errText}>Please select an interest.</p>
                )}
              </div>

              <div>
                <label htmlFor="qm-product" className={fieldLabel}>Product Name</label>
                <Popover open={productOpen && productMatches.length > 0} onOpenChange={setProductOpen}>
                  <PopoverTrigger asChild>
                    <input
                      id="qm-product"
                      value={product}
                      onChange={(e) => {
                        setProduct(e.target.value);
                        setProductOpen(true);
                      }}
                      onFocus={() => setProductOpen(true)}
                      autoComplete="off"
                      className={fieldInput(false)}
                      placeholder="Start typing — e.g. Philips Allura Xper FD20"
                    />
                  </PopoverTrigger>
                  <PopoverContent
                    align="start"
                    onOpenAutoFocus={(e) => e.preventDefault()}
                    className="w-[--radix-popover-trigger-width] p-1 animate-in fade-in-0 zoom-in-95"
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
                            className="flex w-full items-start gap-3 rounded-md px-3 py-2 text-left transition-colors hover:bg-secondary"
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-y rounded-xl border border-border/80 bg-background p-4 text-sm leading-relaxed text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/55 hover:border-border focus:border-primary focus:ring-4 focus:ring-primary/12"
                  style={{ minHeight: 220 }}
                  placeholder="Tell us about your project, preferred equipment, installation requirements, destination country and any additional information."
                />
              </div>

              <div>
                <span className={fieldLabel}>Preferred Contact</span>
                <div className="grid grid-cols-3 gap-2.5">
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
                        className={`relative flex h-12 items-center justify-center gap-2 rounded-xl border text-xs font-semibold transition-all duration-200 ${
                          active
                            ? "border-primary bg-primary/8 text-primary shadow-[0_4px_14px_-6px_var(--primary)]"
                            : "border-border/80 bg-background text-foreground/70 hover:border-primary/40 hover:text-foreground"
                        }`}
                      >
                        <span
                          className={`grid h-4 w-4 place-items-center rounded-full border transition-all ${
                            active ? "border-primary bg-primary" : "border-border"
                          }`}
                          aria-hidden
                        >
                          {active && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                        </span>
                        <Icon className="h-4 w-4" />
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* TRUST STRIP */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border/60 pt-6 text-xs font-medium text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary/80" /> Your information is securely transmitted
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary/80" /> We usually respond within 24 hours
            </span>
          </div>

          {/* ACTIONS */}
          <div className="mt-5 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-[52px] items-center justify-center gap-1.5 rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <X className="h-4 w-4" /> Cancel
            </button>
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.button
                key={submitting ? "sending" : "submit"}
                type="submit"
                disabled={submitting || !isValid}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-8 text-sm font-bold text-primary-foreground shadow-[0_16px_38px_-14px_var(--primary)] transition-all duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
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

          {ctx.productName && <input type="hidden" name="context_product" value={ctx.productName} />}
          {ctx.source && <input type="hidden" name="context_source" value={ctx.source} />}
        </form>
      </DialogContent>
    </Dialog>
  );
}
