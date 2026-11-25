import { useRef, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight, Phone, CheckCircle2, Loader2 } from "lucide-react";
import { PhoneField } from "@/components/site/PhoneField";
import { SupportCenterPanel } from "./SupportCenterPanel";
import { EQUIPMENT } from "./data";
import { submitLead } from "@/lib/leads.functions";
import { Honeypot } from "@/components/site/Honeypot";
import { COMPANY, telHref, whatsappUrl } from "@/config/companyFacts";

const requestSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  phone: z.string().trim().min(6, "Please enter a valid phone number.").max(30),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  facility: z.string().trim().min(2, "Please enter your facility name.").max(150),
  equipment: z.string().min(1, "Please select the equipment type."),
  serial: z.string().max(80).optional(),
  description: z.string().trim().min(10, "Please describe the issue (10+ characters).").max(1500),
});

type FormValues = z.infer<typeof requestSchema>;
type FieldKey = keyof FormValues;
type Errors = Partial<Record<FieldKey, string>>;

export function RequestService() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    phone: "",
    email: "",
    facility: "",
    equipment: "",
    serial: "",
    description: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [botField, setBotField] = useState("");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fieldRefs = useRef<Record<string, HTMLElement | null>>({});

  const set = (k: FieldKey, v: string) => {
    setValues((prev) => ({ ...prev, [k]: v }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitError(null);
    const result = requestSchema.safeParse(values);
    if (!result.success) {
      const errs: Errors = {};
      const order: FieldKey[] = [
        "name",
        "phone",
        "email",
        "facility",
        "equipment",
        "serial",
        "description",
      ];
      for (const issue of result.error.issues) {
        const key = issue.path[0] as FieldKey;
        if (!errs[key]) errs[key] = issue.message;
      }
      setErrors(errs);
      toast.error("Please fix the highlighted fields.");
      for (const k of order) {
        if (errs[k]) {
          fieldRefs.current[k]?.focus();
          break;
        }
      }
      return;
    }
    if (!consent) {
      setConsentError(true);
      toast.error("Please agree to the Privacy Policy so we can contact you.");
      return;
    }
    setSubmitting(true);
    try {
      const d = result.data;
      const res = await submitLead({
        data: {
          source: "service",
          fullName: d.name,
          email: d.email,
          phone: d.phone,
          organization: d.facility,
          interest: "After-sales service request",
          product: d.equipment,
          message: [d.serial ? `Serial number: ${d.serial}` : "", d.description]
            .filter(Boolean)
            .join("\n\n"),
          consent: true,
          pagePath: typeof window !== "undefined" ? window.location.pathname : "",
          botField,
        },
      });
      if (!res.ok) {
        setSubmitError(res.message);
        toast.error(res.message);
        return;
      }
      setSubmitted(true);
      toast.success("Service request received.");
    } catch {
      const msg = "We couldn't send your request. Please try again, or call us directly.";
      setSubmitError(msg);
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setValues({
      name: "",
      phone: "",
      email: "",
      facility: "",
      equipment: "",
      serial: "",
      description: "",
    });
    setErrors({});
    setConsent(false);
    setSubmitError(null);
    setSubmitted(false);
  };

  const labelCls = "text-[calc(12.5*var(--desktop-px-unit))] font-semibold text-foreground";
  const inputCls =
    "mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10";
  const errCls = "border-destructive focus:border-destructive focus:ring-destructive/15";

  return (
    <section id="request" className="relative overflow-hidden bg-background py-16 lg:py-20">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-[80rem] px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.28em] text-primary">
            Request Service
          </div>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Tell us what you need.
            <br />
            We&apos;ll take care of the rest.
          </h2>
          <p className="mt-5 text-[calc(15*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
            Submit a request and our support team will contact you about your equipment. For
            critical downtime, please also call us directly.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SupportCenterPanel />

          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/80 p-8 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:p-10">
            {submitted ? (
              <div className="flex min-h-[calc(420*var(--desktop-px-unit))] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
                  <CheckCircle2 className="h-8 w-8" strokeWidth={2} />
                </div>
                <div className="mt-6 font-display text-2xl font-extrabold text-foreground">
                  Request received.
                </div>
                <p className="mt-3 max-w-md text-[calc(14.5*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
                  Your service request has been saved and our support team will contact you. To
                  share photos of the issue, send them to us on WhatsApp. For critical downtime,
                  please also call us directly.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={telHref(COMPANY.mobile)}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-[0_16px_40px_-16px_rgba(220,38,38,0.8)]"
                  >
                    <Phone className="h-4 w-4" /> Call Emergency Line
                  </a>
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold text-foreground hover:bg-muted"
                  >
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form className="relative grid gap-6 sm:grid-cols-2" onSubmit={onSubmit} noValidate>
                <label className="block">
                  <span className={labelCls}>
                    Full Name <span className="text-primary">*</span>
                  </span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.name = el;
                    }}
                    value={values.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Enter your full name"
                    className={`${inputCls} ${errors.name ? errCls : ""}`}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <span className="mt-1.5 block text-[calc(12*var(--desktop-px-unit))] font-medium text-destructive">
                      {errors.name}
                    </span>
                  )}
                </label>

                <label className="block">
                  <span className={labelCls}>
                    Phone Number <span className="text-primary">*</span>
                  </span>
                  <div className="mt-2">
                    <PhoneField
                      value={values.phone}
                      onChange={(v) => set("phone", v)}
                      hasError={!!errors.phone}
                    />
                  </div>
                  {errors.phone && (
                    <span className="mt-1.5 block text-[calc(12*var(--desktop-px-unit))] font-medium text-destructive">
                      {errors.phone}
                    </span>
                  )}
                </label>

                <label className="block">
                  <span className={labelCls}>
                    Email Address <span className="text-primary">*</span>
                  </span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.email = el;
                    }}
                    type="email"
                    value={values.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="Enter email address"
                    className={`${inputCls} ${errors.email ? errCls : ""}`}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <span className="mt-1.5 block text-[calc(12*var(--desktop-px-unit))] font-medium text-destructive">
                      {errors.email}
                    </span>
                  )}
                </label>

                <label className="block">
                  <span className={labelCls}>
                    Facility / Hospital <span className="text-primary">*</span>
                  </span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.facility = el;
                    }}
                    value={values.facility}
                    onChange={(e) => set("facility", e.target.value)}
                    placeholder="Enter facility name"
                    className={`${inputCls} ${errors.facility ? errCls : ""}`}
                    aria-invalid={!!errors.facility}
                  />
                  {errors.facility && (
                    <span className="mt-1.5 block text-[calc(12*var(--desktop-px-unit))] font-medium text-destructive">
                      {errors.facility}
                    </span>
                  )}
                </label>

                <label className="block">
                  <span className={labelCls}>
                    Equipment Type <span className="text-primary">*</span>
                  </span>
                  <select
                    ref={(el) => {
                      fieldRefs.current.equipment = el;
                    }}
                    value={values.equipment}
                    onChange={(e) => set("equipment", e.target.value)}
                    className={`${inputCls} px-3 ${errors.equipment ? errCls : ""}`}
                    aria-invalid={!!errors.equipment}
                  >
                    <option value="" disabled>
                      Select equipment
                    </option>
                    {EQUIPMENT.map((e) => (
                      <option key={e.name}>{e.name}</option>
                    ))}
                  </select>
                  {errors.equipment && (
                    <span className="mt-1.5 block text-[calc(12*var(--desktop-px-unit))] font-medium text-destructive">
                      {errors.equipment}
                    </span>
                  )}
                </label>

                <label className="block">
                  <span className={labelCls}>Serial Number</span>
                  <input
                    value={values.serial ?? ""}
                    onChange={(e) => set("serial", e.target.value)}
                    placeholder="Enter serial number"
                    className={inputCls}
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className={labelCls}>
                    Problem Description <span className="text-primary">*</span>
                  </span>
                  <textarea
                    ref={(el) => {
                      fieldRefs.current.description = el;
                    }}
                    rows={5}
                    value={values.description}
                    onChange={(e) => set("description", e.target.value)}
                    placeholder="Describe the issue in detail — symptoms, error codes, when it started"
                    className={`mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 ${errors.description ? errCls : ""}`}
                    aria-invalid={!!errors.description}
                  />
                  {errors.description && (
                    <span className="mt-1.5 block text-[calc(12*var(--desktop-px-unit))] font-medium text-destructive">
                      {errors.description}
                    </span>
                  )}
                </label>

                <p className="text-[calc(13*var(--desktop-px-unit))] text-muted-foreground sm:col-span-2">
                  Have photos of the issue? Online photo upload isn't available yet — please{" "}
                  <a
                    href={whatsappUrl("Hello AbuFarha Medical Supplies, I'm sending photos for my service request.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    send them on WhatsApp
                  </a>{" "}
                  after submitting.
                </p>

                <div className="sm:col-span-2">
                  <label className="flex cursor-pointer items-start gap-2.5 text-[calc(13*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
                    <input
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 shrink-0 accent-[color:var(--primary)]"
                      checked={consent}
                      aria-invalid={consentError}
                      aria-describedby={consentError ? "rs-consent-error" : undefined}
                      onChange={(e) => {
                        setConsent(e.target.checked);
                        setConsentError(false);
                      }}
                    />
                    <span>
                      I agree that AbuFarha Medical may store my details and contact me about this
                      request, as described in the{" "}
                      <a href="/privacy-policy" className="font-semibold text-primary hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>
                  {consentError && (
                    <p id="rs-consent-error" role="alert" className="mt-1.5 text-[calc(12*var(--desktop-px-unit))] font-medium text-destructive">
                      Please agree so we can contact you.
                    </p>
                  )}
                  <Honeypot value={botField} onChange={setBotField} />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-[0_18px_50px_-18px_rgba(220,38,38,0.7)] transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  {submitError && (
                    <p role="alert" className="mt-3 text-sm font-medium text-destructive">
                      {submitError}
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
