import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";
import { defaultCountries, parseCountry } from "react-international-phone";
import {
  Zap,
  UserCheck,
  Globe2,
  Building2,
  Headphones,
  Globe,
  HeartPulse,
  Award,
} from "lucide-react";
import heroCathLab from "@/assets/hero-cathlab.jpg";

export const COUNTRIES = defaultCountries
  .map(parseCountry)
  .sort((a, b) => a.name.localeCompare(b.name));

export const INQUIRY_TYPES = [
  "Product Inquiry",
  "Request a Quote",
  "Service & Maintenance",
  "Spare Parts",
  "Turnkey Project",
  "Training Request",
  "Partnership / Distributor",
  "Other",
];

export const SCHEMA = z.object({
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

export const WHY = [
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

export const STATS = [
  { icon: Globe, value: "25+", label: "Countries Served" },
  { icon: Building2, value: "1,500+", label: "Systems Installed" },
  { icon: HeartPulse, value: "500+", label: "Healthcare Facilities" },
  { icon: Award, value: "15+", label: "Years of Experience" },
];

export const FAQS = [
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

export const OFFICE = {
  address: "4th Floor, Complex 396\nQueen Rania Street\nAmman, Jordan",
  phone: "+962 6 4026063",
  email: "info@abufarhamedical.com",
  hours: "Saturday to Thursday\n9:00 AM – 5:00 PM",
  mapQuery: "AbuFarha Medical Supplies, Queen Rania Street, Amman, Jordan",
};

export const OFFICE_COORDS = { lat: 32.0239137, lng: 35.8507975 };
export const MAP_EMBED = `https://www.google.com/maps?q=${OFFICE_COORDS.lat},${OFFICE_COORDS.lng}&z=17&output=embed`;
export const MAP_LINK = "https://maps.app.goo.gl/7bX4sKYX38MBWhF17";
export const DIRECTIONS_LINK = `https://www.google.com/maps/dir/?api=1&destination=${OFFICE_COORDS.lat},${OFFICE_COORDS.lng}&destination_place_id=ChIJh2jUIVOfHBURCIAjP6fryU8`;

export const HERO_SLIDES: { src: string; alt: string }[] = [
  { src: heroCathLab, alt: "AbuFarha Medical Supplies team in a modern cath lab" },
];
