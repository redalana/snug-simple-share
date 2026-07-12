import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import {
  ArrowRight,
  Clock,
  Send,
  Check,
  ShieldCheck,
  Wrench,
  Building2,
  Headset,
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
    { name: "hospitalName", label: "Hospital Name", placeholder: "e.g. King Faisal Specialist Hospital" },
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
    { name: "categories", label: "Interested Product Categories", placeholder: "e.g. Imaging, Cath Lab" },
  ],
  Dealer: [
    { name: "companyName", label: "Company Name", placeholder: "Your company" },
    { name: "country", label: "Country", placeholder: "Country of operation" },
    { name: "categories", label: "Interested Product Categories", placeholder: "e.g. Imaging, C-Arm" },
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
    .min(6, "Enter a valid WhatsApp number")
    .max(20)
    .regex(/^[+\d\s()-]+$/, "Enter a valid WhatsApp number"),
  message: z.string().trim().min(1, "Please add a short message").max(1000),
});

const STATS = [
  { value: "250+", label: "Hospitals Served" },
  { value: "40+", label: "Countries" },
  { value: "1,500+", label: "Equipment Installed" },
  { value: "25+", label: "Years of Experience" },
];

const TRUST = [
  { icon: ShieldCheck, label: "OEM Certified Equipment" },
  { icon: Wrench, label: "Factory-Trained Engineers" },
  { icon: Building2, label: "Turnkey Hospital Projects" },
  { icon: Headset, label: "24/7 Technical Support" },
];

const fieldMotion = {
  initial: { opacity: 0, y: 12, height: 0 },
  animate: { opacity: 1, y: 0, height: "auto" },
  exit: { opacity: 0, y: -8, height: 0 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
};


export function ContactForm() {
  const [customerType, setCustomerType] = useState("");
  const [interest, setInterest] = useState("");
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const dynFields = customerType ? DYNAMIC_FIELDS[customerType] ?? [] : [];

  const setField = (name: string, v: string) =>
    setValues((s) => ({ ...s, [name]: v }));

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
    <section id="contact" className="bg-secondary/40 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        {/* Left — framing copy */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow index="07">Request a Consultation</Eyebrow>
          <h2 className="mt-6 font-display text-[2.1rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[2.7rem]">
            Tell us who you are,
            <br />
            <span className="text-primary">we&apos;ll tailor the rest.</span>
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-[1.75] text-muted-foreground">
            Whether you run a hospital, practice medicine, distribute equipment
            or lead a government project — this form adapts to you. No generic
            enquiries, just a focused conversation.
          </p>
        </div>

        {/* Right — the adaptive form */}
        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-3xl border border-border bg-white p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] sm:p-9"
        >
          {/* I am a... */}
          <div className="space-y-2">
            <Label className="text-[13px] font-semibold text-ink">
              I am a… <span className="text-primary">*</span>
            </Label>
            <Select
              value={customerType}
              onValueChange={(v) => {
                setCustomerType(v);
                setErrors((e) => ({ ...e, customerType: "" }));
              }}
            >
              <SelectTrigger className="h-12">
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
              <p className="text-xs font-medium text-destructive">{errors.customerType}</p>
            )}
          </div>

          {/* Dynamic profile fields */}
          <AnimatePresence mode="wait">
            {customerType && (
              <motion.div
                key={customerType}
                {...fieldMotion}
                className="mt-5 grid gap-5 sm:grid-cols-2"
              >
                {dynFields.map((f) => (
                  <div
                    key={f.name}
                    className={`space-y-2 ${dynFields.length % 2 !== 0 && f === dynFields[dynFields.length - 1] ? "sm:col-span-2" : ""}`}
                  >
                    <Label className="text-[13px] font-semibold text-ink">{f.label}</Label>
                    <Input
                      className="h-12"
                      placeholder={f.placeholder}
                      value={values[f.name] ?? ""}
                      onChange={(e) => setField(f.name, e.target.value)}
                    />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* I'm interested in */}
          <div className="mt-5 space-y-2">
            <Label className="text-[13px] font-semibold text-ink">
              I&apos;m interested in <span className="text-primary">*</span>
            </Label>
            <Select
              value={interest}
              onValueChange={(v) => {
                setInterest(v);
                setErrors((e) => ({ ...e, interest: "" }));
              }}
            >
              <SelectTrigger className="h-12">
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
              <p className="text-xs font-medium text-destructive">{errors.interest}</p>
            )}
          </div>

          {/* Shared fields */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-[13px] font-semibold text-ink">
                Email <span className="text-primary">*</span>
              </Label>
              <Input
                type="email"
                className="h-12"
                placeholder="you@organization.com"
                value={values.email ?? ""}
                onChange={(e) => setField("email", e.target.value)}
              />
              {errors.email && (
                <p className="text-xs font-medium text-destructive">{errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label className="text-[13px] font-semibold text-ink">
                WhatsApp <span className="text-primary">*</span>
              </Label>
              <Input
                type="tel"
                className="h-12"
                placeholder="+20 100 000 0000"
                value={values.whatsapp ?? ""}
                onChange={(e) => setField("whatsapp", e.target.value)}
              />
              {errors.whatsapp && (
                <p className="text-xs font-medium text-destructive">{errors.whatsapp}</p>
              )}
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <Label className="text-[13px] font-semibold text-ink">
              Message <span className="text-primary">*</span>
            </Label>
            <Textarea
              rows={4}
              className="resize-none"
              placeholder="Tell us about your project, requirements or timeline…"
              value={values.message ?? ""}
              onChange={(e) => setField("message", e.target.value)}
            />
            {errors.message && (
              <p className="text-xs font-medium text-destructive">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-[0_16px_36px_-14px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark disabled:opacity-60 sm:w-auto"
          >
            {submitting ? "Sending…" : "Send Consultation Request"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <MessageCircle className="h-3.5 w-3.5 text-primary" />
            We typically respond within one business day.
          </p>
        </form>
      </div>
    </section>
  );
}
