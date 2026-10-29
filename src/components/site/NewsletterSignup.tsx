import { useState, type FormEvent } from "react";
import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";
import { Loader2, Mail, User, Phone, Send, Lock, Newspaper, Settings, BarChart3, Users } from "lucide-react";
import mriImg from "@/assets/env-mri-suite.jpg";
import { Input } from "@/components/ui/input";
import { PhoneField } from "./PhoneField";
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
    .refine((v) => isValidPhoneNumber(v), "Enter a valid phone number for the selected country"),
});
type Values = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Values, string>>;

const inputCls =
  "h-14 rounded-2xl border-border bg-background pl-12 text-[15px] transition-all duration-200 hover:border-primary/40 focus-visible:border-primary focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-primary/10";

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

  const field = (name: keyof Values, label: string, type: string, auto: string, placeholder: string, Icon: typeof User) => (
    <div>
      <label htmlFor={`nl-${name}`} className="sr-only">{label}</label>
      <div className="relative">
        <Icon aria-hidden className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
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
      </div>
      {errors[name] && (
        <p id={`nl-${name}-error`} className="mt-1.5 text-xs font-medium text-destructive">{errors[name]}</p>
      )}
    </div>
  );

  const benefits = [
    { Icon: Newspaper, text: "New Product Announcements" },
    { Icon: Settings, text: "Technology Updates from Global Brands" },
    { Icon: BarChart3, text: "Industry Insights & Case Studies" },
    { Icon: Users, text: "Relevant News for Healthcare Professionals" },
  ];

  return (
    <section id="newsletter" aria-labelledby="newsletter-title" className="relative overflow-hidden bg-secondary/40 py-14 lg:py-20">
      <img src={mriImg} alt="" aria-hidden loading="lazy" className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[65%] object-cover opacity-90 lg:block" />
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-secondary via-secondary/90 to-transparent lg:block" />
      <div className={`relative ${SECTION_CONTAINER}`}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">
              <span aria-hidden className="h-0.5 w-6 bg-primary" /> Newsletter
            </p>
            <p className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl">
              Stay Ahead in<br /><span className="text-primary">Medical Technology.</span>
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              Get the latest product updates, new technologies, project insights, and industry news from our team directly to your inbox.
            </p>
            <ul className="mt-8 grid max-w-xl gap-5 sm:grid-cols-2">
              {benefits.map(({ Icon, text }) => (
                <li key={text} className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon className="h-6 w-6" aria-hidden /></span>
                  <span className="text-[15px] leading-snug text-ink">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-background p-6 shadow-xl sm:p-10">
            <h2 id="newsletter-title" className="flex items-center gap-3 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-[28px]">
              <Mail className="h-8 w-8 shrink-0 text-primary" aria-hidden /> Subscribe to Our Newsletter
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">Product updates and medical technology insights from our team.</p>
            <form noValidate onSubmit={onSubmit} className="mt-6 space-y-4">
              {field("fullName", "Full Name", "text", "name", "Your full name *", User)}
              {field("email", "Email Address", "email", "email", "Your email address *", Mail)}
              <div>
                <label htmlFor="nl-phone" className="sr-only">Phone Number</label>
                <div className="relative">
                  <Phone aria-hidden className="pointer-events-none absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <PhoneField
                    id="nl-phone"
                    value={values.phone}
                    onChange={(phone) => setValues((v) => ({ ...v, phone }))}
                    hasError={!!errors.phone}
                    defaultCountry="jo"
                    detect={false}
                    className="h-14 rounded-2xl bg-background pl-10"
                  />
                </div>
                {errors.phone && (
                  <p id="nl-phone-error" className="mt-1.5 text-xs font-medium text-destructive">{errors.phone}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={busy}
                aria-busy={busy}
                className="inline-flex h-14 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-7 text-base font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-70"
              >
                {busy ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" aria-hidden />}
                Subscribe to Newsletter
              </button>
              <p role="status" aria-live="polite" className="text-sm font-medium text-ink empty:hidden">{notice}</p>
              <p className="flex gap-3 text-sm text-muted-foreground">
                <Lock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                We respect your privacy. Your information will only be used to send relevant updates from our team.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
