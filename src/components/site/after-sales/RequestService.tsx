import { useRef, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { PhoneField } from "@/components/site/PhoneField";
import { SupportCenterPanel } from "./SupportCenterPanel";
import { ImageUpload, type UploadItem } from "./ImageUpload";
import { EQUIPMENT } from "./data";

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
  const [images, setImages] = useState<UploadItem[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fieldRefs = useRef<Record<string, HTMLElement | null>>({});

  const set = (k: FieldKey, v: string) => {
    setValues((prev) => ({ ...prev, [k]: v }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = requestSchema.safeParse(values);
    if (!result.success) {
      const errs: Errors = {};
      const order: FieldKey[] = ["name", "phone", "email", "facility", "equipment", "serial", "description"];
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
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Request submitted — our team will reach out within 1 business hour.");
  };

  const reset = () => {
    setValues({ name: "", phone: "", email: "", facility: "", equipment: "", serial: "", description: "" });
    setErrors({});
    images.forEach((i) => URL.revokeObjectURL(i.preview));
    setImages([]);
    setSubmitted(false);
  };

  const labelCls = "text-[12.5px] font-semibold text-foreground";
  const inputCls =
    "mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10";
  const errCls = "border-destructive focus:border-destructive focus:ring-destructive/15";

  return (
    <section id="request" className="relative overflow-hidden bg-background py-24 lg:py-28">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-[80rem] px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
            Request Service
          </div>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Tell us what you need.
            <br />
            We&apos;ll take care of the rest.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Submit a request and our support team will respond within one
            business hour — 24/7 for critical cases.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SupportCenterPanel />

          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/80 p-8 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:p-10">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
                  <CheckCircle2 className="h-8 w-8" strokeWidth={2} />
                </div>
                <div className="mt-6 font-display text-2xl font-extrabold text-foreground">
                  Request received.
                </div>
                <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-muted-foreground">
                  A service coordinator has been notified and will contact you
                  within one business hour. For critical downtime, please also
                  call our 24/7 emergency line.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="tel:+962799741318"
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
              <form className="grid gap-6 sm:grid-cols-2" onSubmit={onSubmit} noValidate>
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
                  {errors.name && <span className="mt-1.5 block text-[12px] font-medium text-destructive">{errors.name}</span>}
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
                  {errors.phone && <span className="mt-1.5 block text-[12px] font-medium text-destructive">{errors.phone}</span>}
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
                  {errors.email && <span className="mt-1.5 block text-[12px] font-medium text-destructive">{errors.email}</span>}
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
                  {errors.facility && <span className="mt-1.5 block text-[12px] font-medium text-destructive">{errors.facility}</span>}
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
                    <option value="" disabled>Select equipment</option>
                    {EQUIPMENT.map((e) => (
                      <option key={e.name}>{e.name}</option>
                    ))}
                  </select>
                  {errors.equipment && <span className="mt-1.5 block text-[12px] font-medium text-destructive">{errors.equipment}</span>}
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
                  {errors.description && <span className="mt-1.5 block text-[12px] font-medium text-destructive">{errors.description}</span>}
                </label>

                <div className="block sm:col-span-2">
                  <span className={labelCls}>Upload Images (Optional)</span>
                  <div className="mt-2">
                    <ImageUpload items={images} setItems={setImages} />
                  </div>
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
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
