import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  Mail,
  Send,
  ShieldCheck,
  Clock,
  User,
  Building,
  Check,
} from "lucide-react";
import "react-international-phone/style.css";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PhoneField } from "@/components/site/PhoneField";
import { cn } from "@/lib/utils";
import { geoService } from "@/lib/services/geoService";

import { COUNTRIES, INQUIRY_TYPES, SCHEMA, WHY } from "./data";
import { CountrySelect } from "./CountrySelect";
import { FieldError } from "./FieldError";

export function FormBlock() {
  const [country, setCountry] = useState("jo");
  const [values, setValues] = useState<Record<string, string>>({});
  const [inquiry, setInquiry] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let alive = true;
    geoService.detectCountry().then((c) => {
      if (!alive) return;
      const iso = c.iso2.toLowerCase();
      if (COUNTRIES.some((x) => x.iso2 === iso)) setCountry(iso);
    });
    return () => {
      alive = false;
    };
  }, []);

  const setField = (name: string, v: string) =>
    setValues((s) => ({ ...s, [name]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      fullName: values.fullName ?? "",
      company: values.company ?? "",
      country,
      phone: values.phone ?? "",
      email: values.email ?? "",
      inquiry,
      message: values.message ?? "",
    };
    const res = SCHEMA.safeParse(payload);
    if (!res.success) {
      const next: Record<string, string> = {};
      for (const i of res.error.issues) next[i.path[0] as string] = i.message;
      setErrors(next);
      toast.error("Please complete the required fields.");
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      toast.success("Thank you — our team will reach out shortly.");
      setValues({});
      setInquiry("");
      setTimeout(() => setSuccess(false), 5000);
    }, 700);
  };

  const inputCls =
    "h-[52px] rounded-xl border-border bg-secondary/30 text-[15px] transition-all duration-200 hover:border-primary/40 focus-visible:border-primary focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-primary/15 focus-visible:shadow-[0_10px_28px_-14px_var(--primary)]";

  return (
    <section id="contact-form" className="scroll-mt-36 bg-secondary/30 py-[80px] lg:py-[80px]">
      <div className="mx-auto w-full max-w-[87.5rem] px-6">

        <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(340px,1fr)]">
          {/* Form */}
          <div className="m-0 w-full justify-self-stretch rounded-[20px] border border-border/60 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.2)] sm:p-9 lg:p-12">
            <h2 className="font-display text-2xl font-black text-foreground sm:text-3xl">
              Send Us a Message
            </h2>
            <div className="mt-2 h-1 w-14 rounded-full bg-primary" />
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Have a project in mind? Let&apos;s discuss your medical equipment requirements.
            </p>

            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <div className="font-semibold">Message sent</div>
                    <div className="text-emerald-700/80">
                      Our team will get back to you within one business day.
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={onSubmit} noValidate className="mt-7 grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
              <div>
                <Label className="text-[13px] font-semibold text-foreground" htmlFor="fullName">
                  Full Name <span className="text-primary">*</span>
                </Label>
                <div className="relative mt-1.5">
                  <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="fullName"
                    value={values.fullName ?? ""}
                    onChange={(e) => setField("fullName", e.target.value)}
                    placeholder="Dr. Ahmed Hassan"
                    className={cn(inputCls, "pl-10", errors.fullName && "border-destructive")}
                  />
                </div>
                {errors.fullName && <FieldError msg={errors.fullName} />}
              </div>

              <div>
                <Label className="text-[13px] font-semibold text-foreground" htmlFor="company">
                  Hospital / Company <span className="text-primary">*</span>
                </Label>
                <div className="relative mt-1.5">
                  <Building className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="company"
                    value={values.company ?? ""}
                    onChange={(e) => setField("company", e.target.value)}
                    placeholder="Hospital or Company name"
                    className={cn(inputCls, "pl-10", errors.company && "border-destructive")}
                  />
                </div>
                {errors.company && <FieldError msg={errors.company} />}
              </div>

              <div>
                <Label className="text-[13px] font-semibold text-foreground">
                  Country <span className="text-primary">*</span>
                </Label>
                <div className="mt-1.5">
                  <CountrySelect
                    value={country}
                    onChange={setCountry}
                    hasError={!!errors.country}
                  />
                </div>
                {errors.country && <FieldError msg={errors.country} />}
              </div>

              <div>
                <Label className="text-[13px] font-semibold text-foreground" htmlFor="phone">
                  Phone Number <span className="text-primary">*</span>
                </Label>
                <div className="mt-1.5">
                  <PhoneField
                    id="phone"
                    value={values.phone ?? ""}
                    onChange={(v) => setField("phone", v)}
                    hasError={!!errors.phone}
                  />
                </div>
                {errors.phone && <FieldError msg={errors.phone} />}
              </div>

              <div>
                <Label className="text-[13px] font-semibold text-foreground" htmlFor="email">
                  Email Address <span className="text-primary">*</span>
                </Label>
                <div className="relative mt-1.5">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={values.email ?? ""}
                    onChange={(e) => setField("email", e.target.value)}
                    placeholder="ahmed.hassan@hospital.com"
                    className={cn(inputCls, "pl-10", errors.email && "border-destructive")}
                  />
                </div>
                {errors.email && <FieldError msg={errors.email} />}
              </div>

              <div>
                <Label className="text-[13px] font-semibold text-foreground">
                  Inquiry Type <span className="text-primary">*</span>
                </Label>
                <div className="mt-1.5">
                  <Select value={inquiry} onValueChange={setInquiry}>
                    <SelectTrigger
                      className={cn(
                        "h-12 rounded-xl border-border bg-secondary/30",
                        errors.inquiry && "border-destructive",
                      )}
                    >
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      {INQUIRY_TYPES.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {errors.inquiry && <FieldError msg={errors.inquiry} />}
              </div>

              <div className="sm:col-span-2">
                <Label className="text-[13px] font-semibold text-foreground" htmlFor="message">
                  Message <span className="text-primary">*</span>
                </Label>
                <Textarea
                  id="message"
                  value={values.message ?? ""}
                  onChange={(e) => setField("message", e.target.value)}
                  placeholder="Tell us more about your inquiry..."
                  rows={8}
                  className={cn(
                    "mt-1.5 min-h-[200px] rounded-xl border-border bg-secondary/30 transition-all focus-visible:border-primary focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-primary/10",
                    errors.message && "border-destructive",
                  )}
                />
                {errors.message && <FieldError msg={errors.message} />}
              </div>

              <div className="sm:col-span-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Your information is securely transmitted.
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-primary" /> We usually respond within 24 hours.
                </span>
              </div>

              <div className="sm:col-span-2 mt-2 flex justify-center">
                <button
                  type="submit"
                  disabled={submitting}
                  className="group inline-flex h-14 w-[70%] items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-[0_14px_30px_-12px_var(--primary)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <Send className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

          {/* Why choose */}
          <div className="m-0 w-full justify-self-stretch rounded-[20px] border border-border/60 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.2)] sm:p-9 lg:sticky lg:top-24 lg:min-h-[880px] lg:p-12">
            <h2 className="font-display text-2xl font-black text-foreground sm:text-3xl">
              Why Choose AbuFarha?
            </h2>
            <div className="mt-2 h-1 w-14 rounded-full bg-primary" />

            <ul className="mt-8 space-y-5">
              {WHY.map(({ icon: Icon, title, desc }) => (
                <li
                  key={title}
                  className="group flex items-start gap-5 rounded-2xl p-3.5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-secondary/40"
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-200 ease-out group-hover:scale-105 group-hover:bg-primary/15">
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[16px] font-bold text-foreground">{title}</div>
                    <p className="mt-1 line-clamp-2 text-[14px] leading-[1.55] text-muted-foreground">
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}
