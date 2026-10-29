import { useState, type FormEvent } from "react";
import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SECTION_CONTAINER } from "./section-grid";

/**
 * Newsletter form — FRONTEND ONLY. No subscription destination exists yet,
 * so submission validates and then tells the visitor plainly that nothing
 * was saved. Wire `submitNewsletter` to a real service when authorised.
 */
const schema = z.object({
  fullName: z.string().trim().min(1, "Enter your full name").max(100, "Keep it under 100 characters"),
  email: z.string().trim().min(1, "Enter your email address").email("Enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .min(1, "Enter your phone number")
    .refine((v) => isValidPhoneNumber(v), "Enter a valid phone number with country code, e.g. +962 7 9974 1318"),
});
type Values = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Values, string>>;

const inputCls =
  "h-12 rounded-xl border-border bg-secondary/30 transition-all duration-200 hover:border-primary/40 focus-visible:border-primary focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-primary/10";

export function NewsletterSignup() {
  const [values, setValues] = useState<Values>({ fullName: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setNotice(null);
    const r = schema.safeParse(values);
    if (!r.success) {
      const next: Errors = {};
      for (const i of r.error.issues) next[i.path[0] as keyof Values] ??= i.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setBusy(true);
    await new Promise((res) => setTimeout(res, 600));
    setBusy(false);
    setNotice(
      "Your details look good, but newsletter sign-up isn't connected yet, so nothing was saved. Please check back soon.",
    );
  };

  const field = (name: keyof Values, label: string, type: string, auto: string, placeholder: string) => (
    <div className="space-y-2">
      <Label htmlFor={`nl-${name}`}>
        {label} <span className="text-primary">*</span>
      </Label>
      <Input
        id={`nl-${name}`}
        type={type}
        autoComplete={auto}
        placeholder={placeholder}
        value={values[name]}
        onChange={(e) => setValues((v) => ({ ...v, [name]: e.target.value }))}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `nl-${name}-error` : undefined}
        className={inputCls}
      />
      {errors[name] && (
        <p id={`nl-${name}-error`} className="text-xs font-medium text-destructive">
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <section id="newsletter" aria-labelledby="newsletter-title" className="bg-secondary/40 py-14 lg:py-16">
      <div className={SECTION_CONTAINER}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-end">
          <div>
            <h2 id="newsletter-title" className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Subscribe to Our Newsletter
            </h2>
            <p className="mt-3 max-w-md text-[calc(15*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
              Product updates and medical technology insights from our team.
            </p>
          </div>
          <form noValidate onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-3">
            {field("fullName", "Full Name", "text", "name", "Your full name")}
            {field("email", "Email Address", "email", "email", "you@hospital.com")}
            {field("phone", "Phone Number", "tel", "tel", "+962 …")}
            <div className="sm:col-span-3 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={busy}
                aria-busy={busy}
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-70"
              >
                {busy && <Loader2 className="h-4 w-4 animate-spin" />}
                Subscribe to Newsletter
              </button>
              <p role="status" aria-live="polite" className="text-sm text-muted-foreground">
                {notice}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
