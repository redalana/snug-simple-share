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
  Search,
  ShieldCheck,
  X,
} from "lucide-react";

import { defaultCountries, parseCountry, FlagImage } from "react-international-phone";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PhoneField } from "@/components/site/PhoneField";
import { PRODUCTS } from "@/lib/products";
import { onOpenQuoteModal, emitQuoteModalState, type QuoteContext } from "@/lib/quote-modal";

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

const PROFILES = ["Hospital", "Distributor", "Doctor", "Government", "Other"] as const;

/** The organization field adapts its label/placeholder to the selected profile. */
const ORG_FIELD: Record<string, { label: string; placeholder: string }> = {
  Hospital: { label: "Hospital Name", placeholder: "Hospital name" },
  Distributor: { label: "Company Name", placeholder: "Company name" },
  Doctor: { label: "Clinic / Hospital", placeholder: "Clinic or hospital name" },
  Government: { label: "Organization Name", placeholder: "Organization name" },
  Other: { label: "Organization", placeholder: "Organization name" },
};

type Contact = "whatsapp" | "email";


// Maps the "I'm Interested In" category to product category names in PRODUCTS.
const INTEREST_TO_CATEGORY: Record<string, string[]> = {
  "Cath Lab": ["Cath Lab Systems"],
  MRI: ["MRI Scanners"],
  CT: ["CT Scanners"],
  "PET/CT": ["PET/CT Scanners"],
  "X-Ray": ["X-Ray"],
  "C-Arm": ["C-Arm"],
  Mammography: ["Mammography"],
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function QuoteModal() {
  const [open, setOpen] = useState(false);
  const [ctx, setCtx] = useState<QuoteContext>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // form state
  const [name, setName] = useState("");
  const [profile, setProfile] = useState<string>("");
  const [org, setOrg] = useState("");
  const [country, setCountry] = useState("eg");
  const [city, setCity] = useState("");
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
  const [profileOpen, setProfileOpen] = useState(false);
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

  const productPool = useMemo(() => {
    const cats = INTEREST_TO_CATEGORY[interest];
    if (!interest) return PRODUCTS;
    if (!cats) return [];
    return PRODUCTS.filter((p) =>
      cats.some((c) => p.category.toLowerCase().includes(c.toLowerCase())),
    );
  }, [interest]);

  const productMatches = useMemo(() => {
    const q = product.trim().toLowerCase();
    if (!q) return productPool.slice(0, 8);
    return productPool
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      )
      .slice(0, 8);
  }, [product, productPool]);

  const activeCountry = COUNTRIES.find((c) => c.iso2 === country) ?? COUNTRIES[0];

  const emailValid = EMAIL_RE.test(email.trim());
  const phoneValid = phone.replace(/\D/g, "").length >= 7;
  const orgField = ORG_FIELD[profile] ?? {
    label: "Hospital / Company",
    placeholder: "Hospital or Company Name",
  };
  const orgLabel = orgField.label;
  const orgPlaceholder = orgField.placeholder;
  const isValid =
    name.trim().length >= 2 &&
    !!profile &&
    org.trim().length >= 2 &&
    !!country &&
    phoneValid &&
    emailValid &&
    !!interest;


  const showError = (k: string, cond: boolean) => touched[k] && cond;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid || submitting || success) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 650));
    setSubmitting(false);
    setSuccess(true);
    await new Promise((r) => setTimeout(r, 1100));
    setOpen(false);
    navigate({ to: "/thank-you", search: { source: "quote" } as never });
  };

  const resetOnClose = (o: boolean) => {
    setOpen(o);
    if (!o) {
      setInterest("");
      setProfile("");
      setCity("");

      setPhone("");
      setContact("email");
      setTouched({});
      setSuccess(false);
      setSubmitting(false);
    }
  };

  const fieldLabel =
    "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/75";
  const inputBase =
    "h-12 w-full rounded-xl border bg-background px-4 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/55 focus:border-primary focus:ring-4 focus:ring-primary/12";
  const inputOk = "border-border/80 hover:border-border";
  const inputBad = "border-destructive/70 focus:border-destructive focus:ring-destructive/15";
  const fieldInput = (bad?: boolean) => `${inputBase} ${bad ? inputBad : inputOk}`;
  const errText = "mt-1 text-[11px] font-medium text-destructive";

  return (
    <Dialog open={open} onOpenChange={resetOnClose}>
      <DialogContent className="flex max-h-[94dvh] w-[calc(100vw-1rem)] max-w-[900px] flex-col overflow-hidden rounded-[16px] border border-border/60 bg-background p-0 shadow-[0_50px_120px_-30px_rgba(15,23,42,0.4)] sm:w-[calc(100vw-2rem)] sm:rounded-[20px]">
        {/* HEADER */}
        <div className="relative shrink-0 border-b border-border/60 px-5 pb-4 pt-5 sm:px-9 sm:pb-5 sm:pt-6 sm:[@media(max-height:820px)]:pb-4 sm:[@media(max-height:820px)]:pt-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
            <FileText className="h-3 w-3" /> Quotation Request
          </div>
          <DialogTitle className="mt-3 font-display text-[22px] font-extrabold leading-tight tracking-tight text-foreground sm:text-[30px]">
            Request a Quote
          </DialogTitle>
          <DialogDescription className="mt-1.5 max-w-2xl text-[13px] leading-relaxed text-muted-foreground sm:text-[13.5px]">
            Tell us about your healthcare project and our specialists will prepare the best
            quotation for your requirements.
          </DialogDescription>
        </div>

        <form
          onSubmit={onSubmit}
          aria-busy={submitting || success}
          className="relative min-h-0 flex-1 overflow-y-auto px-5 py-5 md:overflow-visible sm:px-9 sm:py-6 sm:[@media(max-height:820px)]:py-4"
        >
          <fieldset disabled={submitting || success} className="contents">
            <div className="grid grid-cols-1 gap-x-7 gap-y-4 md:grid-cols-2 [@media(max-height:800px)]:gap-y-3">
              {/* LEFT COLUMN */}
              {/* LEFT COLUMN */}
              <div className="space-y-4 [@media(max-height:800px)]:space-y-3">
                <div>
                  <label htmlFor="qm-name" className={fieldLabel}>
                    Full Name *
                  </label>
                  <input
                    id="qm-name"
                    name="name"
                    autoComplete="name"
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
                  <span className={fieldLabel}>Profile *</span>
                  <Popover open={profileOpen} onOpenChange={setProfileOpen}>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        onClick={() => markTouched("profile")}
                        className={`${fieldInput(showError("profile", !profile))} flex items-center justify-between text-left`}
                        aria-haspopup="listbox"
                        aria-label="Your profile"
                      >
                        <span className={profile ? "text-foreground" : "text-muted-foreground/60"}>
                          {profile || "Select your profile"}
                        </span>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent
                      align="start"
                      className="w-[--radix-popover-trigger-width] p-1 animate-in fade-in-0 zoom-in-95"
                    >
                      <ul role="listbox" className="max-h-72 overflow-y-auto">
                        {PROFILES.map((p) => (
                          <li key={p}>
                            <button
                              type="button"
                              onClick={() => {
                                setProfile(p);
                                setProfileOpen(false);
                              }}
                              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-secondary"
                            >
                              {p}
                              {p === profile && <Check className="h-4 w-4 text-primary" />}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </PopoverContent>
                  </Popover>
                  {showError("profile", !profile) && (
                    <p className={errText}>Please select your profile.</p>
                  )}
                </div>

                <div>
                  <span className={fieldLabel}>I&apos;m Interested In *</span>
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
                                if (i !== interest) setProduct("");
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
                  <label htmlFor="qm-product" className={fieldLabel}>
                    Product Name
                  </label>
                  <Popover
                    open={productOpen && productMatches.length > 0}
                    onOpenChange={setProductOpen}
                  >
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
                              <img
                                src={p.image}
                                alt=""
                                className="h-9 w-12 shrink-0 rounded-md object-cover"
                                loading="lazy"
                                decoding="async"
                              />
                              <span className="min-w-0 flex-1">
                                <span className="block truncate text-sm font-semibold text-foreground">
                                  {p.name}
                                </span>
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
                  <label htmlFor="qm-org" className={fieldLabel}>
                    {orgLabel} *
                  </label>
                  <input
                    id="qm-org"
                    name="organization"
                    autoComplete="organization"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    onBlur={() => markTouched("org")}
                    aria-invalid={showError("org", org.trim().length < 2)}
                    className={fieldInput(showError("org", org.trim().length < 2))}
                    placeholder={orgPlaceholder}
                  />
                  {showError("org", org.trim().length < 2) && (
                    <p className={errText}>Please enter your organization.</p>
                  )}
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-4 [@media(max-height:800px)]:gap-3">
                <div>
                  <label htmlFor="qm-email" className={fieldLabel}>
                    Email *
                  </label>
                  <input
                    id="qm-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
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

                <div>
                  <span className={fieldLabel}>Phone / WhatsApp *</span>
                  <PhoneField
                    value={phone}
                    onChange={(v) => {
                      setPhone(v);
                      if (!touched.phone) markTouched("phone");
                    }}
                    className="[&_input]:h-12 [&_input]:rounded-xl [&_input]:text-sm"
                  />
                  {showError("phone", !phoneValid) && (
                    <p className={errText}>Enter a valid phone number.</p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 [@media(max-height:800px)]:gap-3">
                  <div className="min-w-0">
                    <span className={fieldLabel}>Country *</span>
                    <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className={`${fieldInput(false)} flex items-center justify-between gap-2 text-left`}
                          aria-haspopup="listbox"
                          aria-label="Select country"
                        >
                          <span className="flex min-w-0 items-center gap-2">
                            <FlagImage
                              iso2={activeCountry.iso2}
                              style={{ width: 22, height: 22 }}
                            />
                            <span className="truncate text-sm font-medium">
                              {activeCountry.name}
                            </span>
                          </span>
                          <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
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
                            <li className="px-3 py-4 text-center text-xs text-muted-foreground">
                              No matches
                            </li>
                          )}
                        </ul>
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="min-w-0">
                    <label htmlFor="qm-city" className={fieldLabel}>
                      City
                    </label>
                    <input
                      id="qm-city"
                      name="city"
                      autoComplete="address-level2"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className={fieldInput(false)}
                      placeholder="City"
                    />
                  </div>
                </div>

                <div className="flex min-h-0 flex-1 flex-col">
                  <label htmlFor="qm-message" className={fieldLabel}>
                    Message
                  </label>
                  <textarea
                    id="qm-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full flex-1 resize-y rounded-xl border border-border/80 bg-background p-4 text-sm leading-relaxed text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/55 hover:border-border focus:border-primary focus:ring-4 focus:ring-primary/12 min-h-[clamp(84px,11vh,150px)]"
                    placeholder="Tell us about your project, preferred equipment, installation requirements, destination country and any additional information."
                  />
                </div>

                <div>
                  <span className={fieldLabel}>Preferred Contact</span>
                  <div className="grid grid-cols-2 gap-2.5">
                    {(
                      [
                        { id: "whatsapp", label: "WhatsApp", icon: MessageCircle },
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
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border/60 pt-4 [@media(max-height:800px)]:mt-4 [@media(max-height:800px)]:pt-3 text-xs font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary/80" /> Your information is securely
                transmitted
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary/80" /> We usually respond within 24 hours
              </span>
            </div>

            {/* ACTIONS */}
            <div className="mt-4 flex flex-col-reverse items-stretch gap-3 [@media(max-height:800px)]:mt-3 sm:flex-row sm:items-center sm:justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-12 items-center justify-center gap-1.5 rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <X className="h-4 w-4" /> Cancel
              </button>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.button
                  key={success ? "success" : submitting ? "sending" : "submit"}
                  type="submit"
                  disabled={submitting || success || !isValid}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.18 }}
                  className={`inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 text-sm font-bold text-primary-foreground shadow-[0_16px_38px_-14px_var(--primary)] transition-all duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${
                    success
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-100"
                      : "bg-gradient-to-r from-primary to-primary-dark disabled:opacity-50"
                  }`}
                >
                  {success ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Request Sent
                    </>
                  ) : submitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Submitting Request…
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

            {ctx.productName && (
              <input type="hidden" name="context_product" value={ctx.productName} />
            )}
            {ctx.source && <input type="hidden" name="context_source" value={ctx.source} />}
          </fieldset>

          {/* SUCCESS OVERLAY */}
          <AnimatePresence>
            {success && (
              <motion.div
                key="success-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-background/85 backdrop-blur-sm"
                role="status"
                aria-live="polite"
              >
                <div className="flex max-w-md flex-col items-center px-6 text-center">
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500 text-white shadow-[0_20px_45px_-12px_rgba(16,185,129,0.55)]"
                  >
                    <Check className="h-8 w-8" strokeWidth={3} />
                  </motion.div>
                  <h3 className="mt-5 font-display text-xl font-extrabold text-foreground">
                    Request submitted successfully
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Our specialists will contact you within 24 hours.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </DialogContent>
    </Dialog>
  );
}
