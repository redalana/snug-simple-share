import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";
import { toast } from "sonner";
import {
  Phone,
  Headphones,
  Mail,
  MapPin,
  Clock,
  Send,
  ShieldCheck,
  Zap,
  UserCheck,
  Globe2,
  Building2,
  ArrowRight,
  Navigation,
  ExternalLink,
  User,
  Building,
  ChevronDown,
  Check,
  Search,
  Play,
  Home as HomeIcon,
  Globe,
  HeartPulse,
  Award,
} from "lucide-react";
import {
  defaultCountries,
  parseCountry,
  FlagImage,
} from "react-international-phone";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PhoneField } from "@/components/site/PhoneField";
import { Eyebrow } from "@/components/site/Eyebrow";
import { cn } from "@/lib/utils";
import { geoService } from "@/lib/services/geoService";
import heroCathLab from "@/assets/hero-cathlab.jpg";

// ----------------------------------------------------------------------
// Country selector (searchable, flag + dial code) — used for the Country
// field. Phone field is handled by <PhoneField />.
// ----------------------------------------------------------------------

const COUNTRIES = defaultCountries
  .map(parseCountry)
  .sort((a, b) => a.name.localeCompare(b.name));

function CountrySelect({
  value,
  onChange,
  hasError,
}: {
  value: string;
  onChange: (iso2: string) => void;
  hasError?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const current = useMemo(
    () => COUNTRIES.find((c) => c.iso2 === value) ?? null,
    [value],
  );
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRIES;
    const digits = q.replace(/[^\d]/g, "");
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.iso2.includes(q) ||
        (digits && c.dialCode.includes(digits)) ||
        `+${c.dialCode}`.includes(q),
    );
  }, [query]);

  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50);
    else setQuery("");
  }, [open]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex h-12 w-full items-center justify-between rounded-xl border border-border bg-secondary/30 px-3.5 text-left text-sm transition-all duration-200",
            "hover:border-primary/40 hover:bg-secondary/40",
            "focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10",
            hasError && "border-destructive",
          )}
        >
          <span className="flex min-w-0 items-center gap-2.5">
            {current ? (
              <>
                <FlagImage
                  iso2={current.iso2}
                  className="h-4 w-6 shrink-0 rounded-[3px] object-cover shadow-sm"
                />
                <span className="truncate font-medium text-ink">{current.name}</span>
              </>

            ) : (
              <span className="text-muted-foreground">Select your country</span>
            )}
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
              open && "rotate-180",
            )}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={8}
        className="w-[var(--radix-popover-trigger-width)] overflow-hidden rounded-2xl border-border/80 p-0 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.35)]"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="sticky top-0 z-10 border-b border-border/70 bg-white p-2.5">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              ref={searchRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search country"
              className="h-10 rounded-lg border-border bg-secondary/40 pl-9 text-sm"
            />
          </div>
        </div>
        <div className="max-h-[260px] overflow-y-auto overscroll-contain p-1.5">
          {filtered.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-muted-foreground">
              No countries found
            </p>
          ) : (
            filtered.map((c) => {
              const selected = c.iso2 === value;
              return (
                <button
                  key={c.iso2}
                  type="button"
                  onClick={() => {
                    onChange(c.iso2);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-2.5 py-2.5 text-left text-sm transition-colors hover:bg-primary/5",
                    selected && "bg-primary/8 font-semibold",
                  )}
                >
                  <FlagImage
                    iso2={c.iso2}
                    className="h-4 w-6 shrink-0 rounded-[3px] object-cover shadow-sm"
                  />
                  <span className="flex-1 truncate text-ink">{c.name}</span>
                  <span className="tabular-nums text-xs text-muted-foreground">
                    +{c.dialCode}
                  </span>
                  {selected && <Check className="h-4 w-4 text-primary" />}
                </button>
              );
            })
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}

// ----------------------------------------------------------------------
// Data
// ----------------------------------------------------------------------

const INQUIRY_TYPES = [
  "Product Inquiry",
  "Request a Quote",
  "Service & Maintenance",
  "Spare Parts",
  "Turnkey Project",
  "Training Request",
  "Partnership / Distributor",
  "Other",
];

const SCHEMA = z.object({
  fullName: z.string().trim().min(2, "Enter your full name").max(120),
  company: z.string().trim().min(2, "Enter your hospital or company").max(160),
  country: z.string().trim().min(2, "Select your country"),
  phone: z
    .string()
    .trim()
    .min(1, "Enter your phone number")
    .refine((v) => isValidPhoneNumber(v), "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  inquiry: z.string().min(1, "Select an inquiry type"),
  message: z.string().trim().min(10, "Add a short message (min 10 chars)").max(1000),
});

const WHY = [
  {
    icon: Zap,
    title: "Fast Response",
    desc: "We respond to all inquiries within 24 hours.",
  },
  {
    icon: UserCheck,
    title: "Certified Engineers",
    desc: "Highly trained & certified biomedical engineers.",
  },
  {
    icon: Globe2,
    title: "Africa & Middle East Coverage",
    desc: "Serving 25+ countries across Africa & the Middle East.",
  },
  {
    icon: Building2,
    title: "Turnkey Solutions",
    desc: "From planning to installation and training.",
  },
  {
    icon: Headphones,
    title: "After Sales Support",
    desc: "Long-term support you can rely on.",
  },
];

const STATS = [
  { icon: Globe, value: "25+", label: "Countries Served" },
  { icon: Building2, value: "1,500+", label: "Systems Installed" },
  { icon: HeartPulse, value: "500+", label: "Healthcare Facilities" },
  { icon: Award, value: "15+", label: "Years of Experience" },
];

const FAQS = [
  {
    q: "How fast do you respond to inquiries?",
    a: "Our team acknowledges every inquiry within one business day, and most are answered in a few hours during working hours.",
  },
  {
    q: "Which countries do you deliver to?",
    a: "We deliver across the Middle East and Africa, with active projects in 25+ countries and logistics partners for the rest of the region.",
  },
  {
    q: "Do you supply refurbished medical equipment?",
    a: "Yes. We supply both brand-new and certified refurbished systems, always with OEM-grade parts, installation and warranty.",
  },
  {
    q: "Is training included with the equipment?",
    a: "Every installation includes clinical and biomedical training so your team can operate and maintain the system with confidence.",
  },
  {
    q: "Do you provide installation and commissioning?",
    a: "Our engineers handle site planning, installation, calibration and full commissioning — including handover documentation.",
  },
  {
    q: "Do you provide after-sales support?",
    a: "Yes. Preventive maintenance contracts, spare parts, remote support and on-site engineers keep your systems up and running.",
  },
];

const OFFICE = {
  address: "4th Floor, Complex 396\nQueen Rania Street\nAmman, Jordan",
  phone: "+962 6 4026063",
  email: "info@abufarhamedical.com",
  hours: "Saturday to Thursday\n9:00 AM – 5:00 PM",
  mapQuery: "AbuFarha Medical Supplies, Queen Rania Street, Amman, Jordan",
};

const OFFICE_COORDS = { lat: 32.0239137, lng: 35.8507975 };
const MAP_EMBED = `https://www.google.com/maps?q=${OFFICE_COORDS.lat},${OFFICE_COORDS.lng}&z=17&output=embed`;
const MAP_LINK = "https://maps.app.goo.gl/7bX4sKYX38MBWhF17";
const DIRECTIONS_LINK = `https://www.google.com/maps/dir/?api=1&destination=${OFFICE_COORDS.lat},${OFFICE_COORDS.lng}&destination_place_id=ChIJh2jUIVOfHBURCIAjP6fryU8`;

// ----------------------------------------------------------------------
// Section: Hero (supports auto-rotating slides)
// ----------------------------------------------------------------------

const HERO_SLIDES: { src: string; alt: string }[] = [
  { src: heroCathLab, alt: "AbuFarha Medical Supplies team in a modern cath lab" },
];

function Hero() {
  const reduce = useReducedMotion();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (HERO_SLIDES.length < 2 || reduce) return;
    const id = window.setInterval(
      () => setSlide((i) => (i + 1) % HERO_SLIDES.length),
      5500,
    );
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section className="relative overflow-hidden bg-white pt-4 pb-4">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-4 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Link to="/" className="inline-flex items-center gap-1 hover:text-primary">
            <HomeIcon className="h-3.5 w-3.5" /> Home
          </Link>
          <span className="opacity-40">/</span>
          <span className="font-medium text-foreground">Contact Us</span>
        </nav>

        <div className="relative min-h-[560px] overflow-hidden rounded-[36px] bg-secondary/30 sm:min-h-[620px] lg:h-[720px] lg:min-h-0">
          <div className="relative grid h-full grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col justify-center bg-white px-6 py-10 sm:px-10 sm:py-14 lg:px-10 lg:py-16 xl:px-12"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Trusted Medical Equipment Partner
              </div>
              <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[2.5rem] xl:text-[2.75rem]">
                Let&apos;s build
                <br /><span className="whitespace-nowrap">better healthcare</span>
                <br /><span className="text-primary">together</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-[17px]">
                From consultation to after-sales support, our team is ready to
                provide the right medical solutions for your healthcare facility.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#contact-form"
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-[0_14px_30px_-12px_var(--primary)] transition-all duration-200 ease-out hover:-translate-y-1 hover:bg-primary-dark hover:shadow-[0_20px_38px_-14px_var(--primary)]"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                </a>
                <a
                  href="https://wa.me/962799741318"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-12 items-center gap-2.5 rounded-full border border-border bg-white px-6 text-sm font-semibold text-foreground transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#25D366]/50 hover:text-[#128C7E] hover:shadow-[0_14px_30px_-16px_rgba(15,23,42,0.35)]"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#25D366] text-white">
                    <WhatsAppIcon className="h-4 w-4" />
                  </span>
                  WhatsApp Us
                </a>
              </div>
            </motion.div>

            <div className="relative min-h-[300px] overflow-hidden bg-secondary/50 sm:min-h-[360px] lg:min-h-0">
              {HERO_SLIDES.map((s, i) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover object-[62%_center] transition-opacity duration-1000 ease-out",
                    i === slide ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
              <div aria-hidden className="absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-white/45 to-transparent lg:block" />
              {HERO_SLIDES.length > 1 && (
                <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                  {HERO_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Go to slide ${i + 1}`}
                      onClick={() => setSlide(i)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        i === slide ? "w-8 bg-primary" : "w-3 bg-foreground/25",
                      )}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// ----------------------------------------------------------------------
// Section: Quick contact bar
// ----------------------------------------------------------------------

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2.5A9.5 9.5 0 0 0 3.9 16.86L3 21.5l4.77-.88A9.5 9.5 0 1 0 12.04 2.5Zm0 1.7a7.8 7.8 0 1 1 0 15.6 7.75 7.75 0 0 1-3.97-1.08l-.28-.17-2.83.52.53-2.76-.18-.29A7.8 7.8 0 0 1 12.04 4.2Zm-2.5 3.4c-.2 0-.5.08-.77.37-.26.29-1 .98-1 2.4s1.03 2.78 1.17 2.97c.15.2 2 3.05 4.85 4.16 2.36.93 2.84.75 3.36.7.51-.05 1.66-.68 1.9-1.33.23-.66.23-1.22.16-1.33-.07-.11-.26-.18-.55-.32-.29-.15-1.71-.85-1.98-.94-.26-.1-.46-.15-.65.14-.19.29-.74.94-.9 1.13-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.6-1.99-.17-.29-.02-.44.12-.59.13-.13.29-.34.44-.51.14-.17.19-.29.29-.48.1-.2.05-.37-.02-.51-.08-.15-.65-1.57-.9-2.15-.24-.57-.48-.49-.65-.5h-.55Z" />
    </svg>
  );
}

function ContactBar() {
  const items = [
    {
      icon: Phone,
      title: "Sales",
      lines: ["+962 6 4026063", "sales@abufarhamedical.com"],
      href: "tel:+96264026063",
      color: "bg-primary",
    },
    {
      icon: Headphones,
      title: "Support",
      lines: ["+962 79 974 1318", "support@abufarhamedical.com"],
      href: "tel:+962799741318",
      color: "bg-primary",
    },
    {
      icon: WhatsAppIcon,
      title: "WhatsApp",
      lines: ["+962 79 974 1318", "Chat with us on WhatsApp"],
      href: "https://wa.me/962799741318",
      color: "bg-[#25D366]",
    },
  ];
  return (
    <section className="relative -mt-12 pb-2">
      <div className="mx-auto w-full max-w-[87.5rem] px-6">
        <div className="grid grid-cols-1 gap-3 rounded-2xl border border-border/70 bg-white p-6 shadow-[0_20px_50px_-25px_rgba(15,23,42,0.25)] sm:grid-cols-3 sm:gap-4 sm:p-9">
          {items.map(({ icon: Icon, title, lines, href, color }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={`${title}: ${lines[0]}`}
              className="group flex h-full items-center gap-4 rounded-xl p-7 transition-all duration-200 ease-out hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_-20px_rgba(15,23,42,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <span
                className={cn(
                  "grid h-14 w-14 shrink-0 place-items-center rounded-full text-white shadow-[0_10px_24px_-12px_rgba(15,23,42,0.4)] transition-transform duration-200 ease-out group-hover:scale-105",
                  color,
                )}
              >
                <Icon className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <div className="text-[15px] font-bold text-foreground">{title}</div>
                <div className="mt-0.5 truncate text-sm text-muted-foreground">
                  {lines[0]}
                </div>
                <div className="truncate text-[13px] text-muted-foreground/80">
                  {lines[1]}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}



// ----------------------------------------------------------------------
// Section: Form + Why choose
// ----------------------------------------------------------------------

function FormBlock() {
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

function FieldError({ msg }: { msg: string }) {
  return (
    <p className="mt-1.5 text-xs font-medium text-destructive">{msg}</p>
  );
}

// ----------------------------------------------------------------------
// Section: Map + Office card
// ----------------------------------------------------------------------

function OfficeMap() {
  return (
    <section className="bg-white py-[120px]">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[44px] border border-border/60 bg-white shadow-[0_30px_70px_-35px_rgba(15,23,42,0.35)]">
          <iframe
            title="AbuFarha Medical Supplies — Amman office"
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[560px] w-full border-0"
          />

          {/* Floating card */}
          <div className="pointer-events-none absolute inset-0 flex items-start">
            <div className="pointer-events-auto m-4 w-full max-w-[300px] rounded-[24px] border border-white/70 bg-white/95 p-5 shadow-[0_40px_80px_-20px_rgba(15,23,42,0.45),0_10px_25px_-10px_rgba(15,23,42,0.2)] backdrop-blur-md sm:m-6 sm:max-w-[30%] sm:p-6">
              <div className="flex items-center gap-3">
                <h3 className="font-display text-xl font-black text-foreground">
                  Visit Our Office
                </h3>
                <div className="h-[2px] w-8 rounded-full bg-primary" />
              </div>

              <ul className="mt-5 space-y-4 text-sm">
                <OfficeRow icon={MapPin} label="Address">
                  {OFFICE.address.split("\n").map((l) => (
                    <div key={l}>{l}</div>
                  ))}
                </OfficeRow>
                <OfficeRow icon={Phone} label="Phone">
                  <a href={`tel:${OFFICE.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                    {OFFICE.phone}
                  </a>
                </OfficeRow>
                <OfficeRow icon={Mail} label="Email">
                  <a href={`mailto:${OFFICE.email}`} className="break-all hover:text-primary">
                    {OFFICE.email}
                  </a>
                </OfficeRow>
                <OfficeRow icon={Clock} label="Working Hours">
                  {OFFICE.hours.split("\n").map((l) => (
                    <div key={l}>{l}</div>
                  ))}
                </OfficeRow>
              </ul>

              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <a
                  href={DIRECTIONS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_-12px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
                >
                  Get Directions <Navigation className="h-4 w-4" />
                </a>
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary"
                >
                  Open in Google Maps <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfficeRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </div>
        <div className="mt-0.5 text-[14px] leading-relaxed text-foreground">
          {children}
        </div>
      </div>
    </li>
  );
}

// ----------------------------------------------------------------------
// Section: Stats strip
// ----------------------------------------------------------------------

function StatsStrip() {
  return (
    <section className="py-[90px]">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-4 rounded-[16px] border border-border/70 bg-white p-8 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.2)] sm:grid-cols-4 sm:gap-6 sm:p-10">
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <div
              key={label}
              className={cn(
                "flex flex-col items-center gap-2 text-center sm:items-start sm:text-left",
                i > 0 && "sm:border-l sm:border-border/60 sm:pl-6",
              )}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <div className="font-display text-4xl font-black tabular-nums leading-none text-foreground sm:text-5xl lg:text-6xl">
                  {value}
                </div>
                <div className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Section: FAQ
// ----------------------------------------------------------------------

function FaqSection() {
  return (
    <section className="bg-white py-[110px]">
      <div className="mx-auto w-[85%] max-w-[95rem] px-4 lg:px-6">
        <div className="text-center">
          <Eyebrow align="center">FAQ</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary" />
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-10 grid w-full grid-cols-1 gap-x-6 md:grid-cols-2"
        >
          {FAQS.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`faq-${i}`}
              className="mb-3 overflow-hidden rounded-2xl border border-border/70 bg-secondary/25 px-5 transition-all duration-200 ease-out hover:border-primary/30 hover:bg-white hover:shadow-[0_10px_28px_-20px_rgba(15,23,42,0.25)] data-[state=open]:border-primary/40 data-[state=open]:bg-white data-[state=open]:shadow-[0_14px_36px_-18px_rgba(15,23,42,0.28)]"
            >
              <AccordionTrigger className="py-4 text-left text-[15px] font-semibold text-foreground hover:no-underline">

                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Root
// ----------------------------------------------------------------------

export function ContactPage() {
  const locationHash = useRouterState({ select: (state) => state.location.hash });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (locationHash !== "contact-form" && locationHash !== "#contact-form") return;
    const id = window.setTimeout(() => {
      document
        .getElementById("contact-form")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => window.clearTimeout(id);
  }, [locationHash]);

  return (
    <>
      <Hero />
      <ContactBar />
      <FormBlock />
      <OfficeMap />
      <StatsStrip />
      <FaqSection />
    </>
  );
}

