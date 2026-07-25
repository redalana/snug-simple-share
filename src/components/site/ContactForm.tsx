import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";
import { toast } from "sonner";
import { PhoneField } from "./PhoneField";
import {
  ArrowRight,
  Clock,
  Send,
  Check,
  ShieldCheck,
  Wrench,
  Building2,
  Headset,
  BadgeCheck,
} from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DynField = { name: string; label: string; placeholder: string };

const CUSTOMER_TYPES = [
  "Hospital",
  "Doctor",
  "Distributor",
  "Dealer",
  "Government Organization",
  "Other",
] as const;

const INTERESTS = [
  "Cath Lab",
  "MRI",
  "CT",
  "PET/CT",
  "X-Ray",
  "Mammography",
  "C-Arm",
  "Turnkey Project",
  "Other",
] as const;

const DYNAMIC_FIELDS: Record<string, DynField[]> = {
  Hospital: [
    {
      name: "hospitalName",
      label: "Hospital Name",
      placeholder: "e.g. King Faisal Specialist Hospital",
    },
    { name: "department", label: "Department", placeholder: "e.g. Cardiology" },
    { name: "country", label: "Country", placeholder: "e.g. Saudi Arabia" },
  ],
  Doctor: [
    { name: "fullName", label: "Full Name", placeholder: "Dr. Full Name" },
    { name: "specialty", label: "Specialty", placeholder: "e.g. Interventional Cardiology" },
    { name: "facility", label: "Hospital or Clinic", placeholder: "Where you practice" },
  ],
  Distributor: [
    { name: "companyName", label: "Company Name", placeholder: "Your company" },
    { name: "country", label: "Country", placeholder: "Country of operation" },
    {
      name: "categories",
      label: "Interested Product Categories",
      placeholder: "e.g. Imaging, Cath Lab",
    },
  ],
  Dealer: [
    { name: "companyName", label: "Company Name", placeholder: "Your company" },
    { name: "country", label: "Country", placeholder: "Country of operation" },
    {
      name: "categories",
      label: "Interested Product Categories",
      placeholder: "e.g. Imaging, C-Arm",
    },
  ],
  "Government Organization": [
    { name: "orgName", label: "Organization Name", placeholder: "Ministry / Authority name" },
    { name: "tender", label: "Tender / Project Name", placeholder: "Tender or project reference" },
  ],
  Other: [
    { name: "orgName", label: "Name / Organization", placeholder: "Who are you representing?" },
  ],
};

const schema = z.object({
  customerType: z.string().min(1, "Please select who you are"),
  interest: z.string().min(1, "Please select an area of interest"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  whatsapp: z
    .string()
    .trim()
    .min(1, "Enter your WhatsApp number")
    .refine((v) => isValidPhoneNumber(v), "Enter a valid phone number for the selected country"),

  message: z.string().trim().min(1, "Please add a short message").max(1000),
});

const TRUST = [
  { icon: ShieldCheck, label: "OEM Certified Equipment" },
  { icon: Wrench, label: "Factory-Trained Engineers" },
  { icon: Building2, label: "Full Lifecycle Support" },
  { icon: Headset, label: "24/7 Technical Support" },
];

const REASSURANCE = [
  { icon: Clock, label: "Typical response within one business day." },
  { icon: ShieldCheck, label: "Goes directly to our healthcare solutions team." },
  { icon: BadgeCheck, label: "No-obligation consultation." },
];

const inputCls =
  "h-12 rounded-xl border-border bg-secondary/30 transition-all duration-200 hover:border-primary/40 hover:bg-secondary/40 placeholder:transition-colors focus-visible:border-primary focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-primary/10 focus-visible:shadow-[0_6px_20px_-8px_var(--primary)]";
const selectCls =
  "h-12 rounded-xl border-border bg-secondary/30 transition-all duration-200 hover:border-primary/40 hover:bg-secondary/50 focus:border-primary focus:ring-4 focus:ring-primary/10 data-[state=open]:border-primary data-[state=open]:ring-4 data-[state=open]:ring-primary/10";

function autoCompleteFor(name: string): string {
  switch (name) {
    case "fullName":
      return "name";
    case "hospitalName":
    case "companyName":
    case "orgName":
    case "facility":
      return "organization";
    case "country":
      return "country-name";
    default:
      return "off";
  }
}

export function ContactForm() {
  const reduceMotion = useReducedMotion();
  const [customerType, setCustomerType] = useState("");
  const [interest, setInterest] = useState("");
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const dynFields = customerType ? (DYNAMIC_FIELDS[customerType] ?? []) : [];

  const fieldMotion = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 12, height: 0 },
    animate: { opacity: 1, y: 0, height: "auto" },
    exit: { opacity: 0, y: reduceMotion ? 0 : -8, height: 0 },
    transition: { duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] as const },
  };

  const setField = (name: string, v: string) => setValues((s) => ({ ...s, [name]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      customerType,
      interest,
      email: values.email ?? "",
      whatsapp: values.whatsapp ?? "",
      message: values.message ?? "",
    };
    const result = schema.safeParse(payload);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[issue.path[0] as string] = issue.message;
      setErrors(next);
      toast.error("Please complete the required fields.");
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you — our team will reach out shortly.");
      setValues({});
      setCustomerType("");
      setInterest("");
    }, 700);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-16 lg:py-20">
      {/* subtle healthcare identity — ECG line, <4% opacity, slow breathing */}
      <motion.svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-40 w-full -translate-y-1/2 text-primary"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        initial={{ opacity: 0.035 }}
        animate={reduceMotion ? undefined : { opacity: [0.02, 0.045, 0.02] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M0 60h360l18-40 22 80 20-64 16 28h84l16-24 20 48 18-40h606"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </motion.svg>
      {/* faint medical grid texture — very slow breathing opacity */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-ink) calc(1*var(--desktop-px-unit)), transparent calc(1*var(--desktop-px-unit))), linear-gradient(to bottom, var(--color-ink) calc(1*var(--desktop-px-unit)), transparent calc(1*var(--desktop-px-unit)))",
          backgroundSize: "calc(44*var(--desktop-px-unit)) calc(44*var(--desktop-px-unit))",
        }}
        initial={{ opacity: 0.025 }}
        animate={reduceMotion ? undefined : { opacity: [0.018, 0.03, 0.018] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-[100rem] gap-12 px-6 lg:px-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.95fr)] lg:gap-16">
        {/* Left — framing copy + trust */}
        <div className="relative lg:sticky lg:top-28 lg:self-start">
          {/* extremely subtle healthcare wireframe behind left content (<4%) */}
          <svg
            aria-hidden
            className="pointer-events-none absolute -left-6 -top-8 h-[calc(360*var(--desktop-px-unit))] w-[calc(360*var(--desktop-px-unit))] text-ink opacity-[0.03]"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <circle cx="100" cy="100" r="88" />
            <circle cx="100" cy="100" r="60" />
            <circle cx="100" cy="100" r="30" />
            <line x1="12" y1="100" x2="188" y2="100" />
            <line x1="100" y1="12" x2="100" y2="188" />
            <rect x="40" y="40" width="120" height="120" rx="8" />
          </svg>

          <div className="relative">
            <Eyebrow index="07">Start the Conversation</Eyebrow>
            <h2 className="mt-6 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              Let&apos;s discuss your hospital&apos;s
              <br />
              <span className="text-primary">next project.</span>
            </h2>
            <p className="mt-6 max-w-sm text-[calc(15*var(--desktop-px-unit))] leading-[1.85] text-muted-foreground">
              Tell us about your specialty, clinical objectives or upcoming healthcare project, and
              our specialists will recommend the most suitable solution.
            </p>

            {/* trust indicators */}
            <ul className="mt-10 grid max-w-md gap-y-3.5 border-t border-border pt-8 sm:grid-cols-2">
              {TRUST.map((t) => (
                <li key={t.label} className="group flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary/15">
                    <t.icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="text-[calc(13*var(--desktop-px-unit))] font-medium leading-tight text-ink">
                    {t.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative lg:pl-2">
          {/* soft ambient radial glow behind the card for premium elevation */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(60%_50%_at_50%_20%,var(--primary)_0%,transparent_70%)] opacity-[0.06] blur-2xl"
          />
          <motion.form
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={onSubmit}
            noValidate
            className="relative rounded-3xl border border-white/70 bg-white/85 p-6 shadow-[0_50px_120px_-50px_rgba(15,23,42,0.4),0_16px_40px_-24px_rgba(15,23,42,0.18),0_2px_6px_-2px_rgba(15,23,42,0.05)] ring-1 ring-black/5 backdrop-blur-xl sm:p-9"
          >
            {/* I am a... */}
            <div className="space-y-2">
              <Label
                htmlFor="customerType"
                className="text-[calc(13*var(--desktop-px-unit))] font-semibold text-ink"
              >
                I am a… <span className="text-primary">*</span>
              </Label>
              <Select
                value={customerType}
                onValueChange={(v) => {
                  setCustomerType(v);
                  setErrors((e) => ({ ...e, customerType: "" }));
                }}
              >
                <SelectTrigger id="customerType" className={selectCls}>
                  <SelectValue placeholder="Select your profile" />
                </SelectTrigger>
                <SelectContent>
                  {CUSTOMER_TYPES.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.customerType && (
                <p role="alert" className="text-xs font-medium text-destructive">
                  {errors.customerType}
                </p>
              )}
            </div>

            {/* Dynamic profile fields */}
            <AnimatePresence initial={false} mode="wait">
              {customerType && (
                <motion.div key={customerType} {...fieldMotion} className="overflow-hidden">
                  <div className="grid gap-5 pt-5 sm:grid-cols-2">
                    {dynFields.map((f) => (
                      <div
                        key={f.name}
                        className={`space-y-2 ${dynFields.length % 2 !== 0 && f === dynFields[dynFields.length - 1] ? "sm:col-span-2" : ""}`}
                      >
                        <Label
                          htmlFor={f.name}
                          className="text-[calc(13*var(--desktop-px-unit))] font-semibold text-ink"
                        >
                          {f.label}
                        </Label>
                        <Input
                          id={f.name}
                          name={f.name}
                          autoComplete={autoCompleteFor(f.name)}
                          aria-invalid={!!errors[f.name]}
                          aria-describedby={errors[f.name] ? `${f.name}-error` : undefined}
                          className={inputCls}
                          placeholder={f.placeholder}
                          value={values[f.name] ?? ""}
                          onChange={(e) => setField(f.name, e.target.value)}
                        />
                        {errors[f.name] && (
                          <p
                            id={`${f.name}-error`}
                            role="alert"
                            className="text-xs font-medium text-destructive"
                          >
                            {errors[f.name]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* I'm interested in */}
            <div className="mt-5 space-y-2">
              <Label
                htmlFor="interest"
                className="text-[calc(13*var(--desktop-px-unit))] font-semibold text-ink"
              >
                I&apos;m interested in <span className="text-primary">*</span>
              </Label>
              <Select
                value={interest}
                onValueChange={(v) => {
                  setInterest(v);
                  setErrors((e) => ({ ...e, interest: "" }));
                }}
              >
                <SelectTrigger
                  id="interest"
                  aria-invalid={!!errors.interest}
                  aria-describedby={errors.interest ? "interest-error" : undefined}
                  className={selectCls}
                >
                  <SelectValue placeholder="Select a solution" />
                </SelectTrigger>
                <SelectContent>
                  {INTERESTS.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.interest && (
                <p
                  id="interest-error"
                  role="alert"
                  className="text-xs font-medium text-destructive"
                >
                  {errors.interest}
                </p>
              )}
            </div>

            {/* Shared fields */}
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-[calc(13*var(--desktop-px-unit))] font-semibold text-ink"
                >
                  Email <span className="text-primary">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={inputCls}
                  placeholder="you@organization.com"
                  value={values.email ?? ""}
                  onChange={(e) => setField("email", e.target.value)}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="text-xs font-medium text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="whatsapp"
                  className="text-[calc(13*var(--desktop-px-unit))] font-semibold text-ink"
                >
                  WhatsApp <span className="text-primary">*</span>
                </Label>
                <PhoneField
                  id="whatsapp"
                  value={values.whatsapp ?? ""}
                  onChange={(v) => setField("whatsapp", v)}
                  hasError={!!errors.whatsapp}
                />
                {errors.whatsapp && (
                  <p
                    id="whatsapp-error"
                    role="alert"
                    className="text-xs font-medium text-destructive"
                  >
                    {errors.whatsapp}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <Label
                htmlFor="message"
                className="text-[calc(13*var(--desktop-px-unit))] font-semibold text-ink"
              >
                Message <span className="text-primary">*</span>
              </Label>
              <Textarea
                id="message"
                rows={4}
                autoComplete="off"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="resize-none rounded-xl border-border bg-secondary/30 transition-all duration-200 hover:border-primary/40 focus-visible:border-primary focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-primary/10"
                placeholder="Tell us about your project, requirements or timeline…"
                value={values.message ?? ""}
                onChange={(e) => setField("message", e.target.value)}
              />
              {errors.message && (
                <p id="message-error" role="alert" className="text-xs font-medium text-destructive">
                  {errors.message}
                </p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
              className="group mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-[0_20px_44px_-16px_var(--primary)] transition-colors duration-200 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Request Project Consultation"}
              {submitting ? (
                <Send className="h-4 w-4 animate-pulse" />
              ) : (
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              )}
            </motion.button>

            {/* response assurance */}
            <ul className="mt-6 grid gap-2.5 border-t border-border pt-5">
              {REASSURANCE.map((r) => (
                <li
                  key={r.label}
                  className="flex items-center gap-2.5 text-xs text-muted-foreground"
                >
                  <r.icon className="h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={2} />
                  {r.label}
                </li>
              ))}
            </ul>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
