import {
  Phone,
  MessageSquare,
  Activity,
  Wrench,
  Users,
  Radio,
  Truck,
  Cog,
  Gauge,
  CheckCircle2,
  Mail,
} from "lucide-react";

import heroImg from "@/assets/aftersales-hero.jpg";
import remoteImg from "@/assets/aftersales-remote-engineer.jpg";
import warehouseImg from "@/assets/aftersales-warehouse.jpg";
import engineeringImg from "@/assets/aftersales-engineering.jpg";
import ctaImg from "@/assets/aftersales-cta.jpg";
import mriImg from "@/assets/sol-mri.jpg";
import ctImg from "@/assets/sol-ct.jpg";
import cathLabImg from "@/assets/hero-cathlab.jpg";
import petctImg from "@/assets/sol-petct.jpg";
import ultrasoundImg from "@/assets/sol-ultrasound.jpg";
import xrayImg from "@/assets/sol-xray.jpg";
import mammoImg from "@/assets/sol-mammo.jpg";
import carmImg from "@/assets/sol-carm.jpg";

export { heroImg, remoteImg, warehouseImg, engineeringImg, ctaImg };

export const LIVE_STATUS = [
  { name: "MRI Systems", status: "Online", health: 99, last: "18 sec ago", tone: "emerald" },
  { name: "CT Systems", status: "Healthy", health: 98, last: "42 sec ago", tone: "emerald" },
  { name: "Cath Lab", status: "Connected", health: 100, last: "9 sec ago", tone: "sky" },
  {
    name: "PET/CT",
    status: "Scheduled Maintenance",
    health: null,
    last: "Next: Tomorrow",
    tone: "amber",
  },
] as const;

export const TONE_MAP: Record<string, { dot: string; text: string; bg: string; bar: string }> = {
  emerald: {
    dot: "bg-emerald-500",
    text: "text-emerald-600",
    bg: "bg-emerald-50",
    bar: "bg-emerald-500",
  },
  sky: { dot: "bg-sky-500", text: "text-sky-600", bg: "bg-sky-50", bar: "bg-sky-500" },
  amber: { dot: "bg-amber-500", text: "text-amber-600", bg: "bg-amber-50", bar: "bg-amber-500" },
};

export const JOURNEY = [
  {
    icon: Phone,
    t: "Problem Reported",
    d: "Call, email or portal — a case is opened within minutes.",
    detail: "Multi-channel intake with automatic triage and ticket routing.",
  },
  {
    icon: Activity,
    t: "Remote Diagnosis",
    d: "Our engineers analyze logs and telemetry to isolate the cause.",
    detail: "OEM-approved secure tunnels; most issues resolved without a visit.",
  },
  {
    icon: Users,
    t: "Engineer Assigned",
    d: "Nearest certified engineer is dispatched with the right parts.",
    detail: "Dispatched from the closest regional hub with pre-picked parts.",
  },
  {
    icon: Truck,
    t: "On-Site Arrival",
    d: "Rapid dispatch from the nearest regional hub.",
    detail: "GPS-tracked ETA shared with your biomed team in real time.",
  },
  {
    icon: Wrench,
    t: "Precision Repair",
    d: "Genuine OEM parts, factory procedures, zero shortcuts.",
    detail: "Every intervention logged for full audit and compliance trail.",
  },
  {
    icon: Gauge,
    t: "Calibration & QA",
    d: "Full quality assurance to OEM performance specs.",
    detail: "Image quality, dose and mechanical checks all restored to spec.",
  },
  {
    icon: CheckCircle2,
    t: "System Back Online",
    d: "Handover, sign-off and follow-up support.",
    detail: "Signed service report, warranty update and 7-day follow-up call.",
  },
];

export const EQUIPMENT = [
  { name: "MRI Systems", href: "/products/mri-scanners", img: mriImg },
  { name: "CT Scanners", href: "/products/ct-scanners", img: ctImg },
  { name: "Cath Lab Systems", href: "/products/cath-lab", img: cathLabImg },
  { name: "PET / CT", href: "/products/pet-ct-scanners", img: petctImg },
  { name: "Ultrasound", href: "/products/others", img: ultrasoundImg },
  { name: "X-Ray Systems", href: "/products/x-ray-systems", img: xrayImg },
  { name: "Mammography", href: "/products/mammography-systems", img: mammoImg },
  { name: "C-Arm Systems", href: "/products/c-arm-systems", img: carmImg },
];

export type EquipmentItem = (typeof EQUIPMENT)[number];

export const PART_MODULES = [
  { id: "mri", label: "MRI Parts", count: "In stock", note: "Coils, gradient amps, RF components" },
  { id: "ct", label: "CT Parts", count: "In stock", note: "X-ray tubes, detectors, DAS boards" },
  {
    id: "cath",
    label: "Cath Lab Parts",
    count: "In stock",
    note: "Flat panels, generators, table drives",
  },
  {
    id: "petct",
    label: "PET / CT Parts",
    count: "In stock",
    note: "PMT modules, crystals, cooling",
  },
  { id: "cal", label: "Calibration Kits", count: "In stock", note: "Phantoms, QA jigs, dosimetry" },
];

export const CONTACT_CHANNELS = [
  {
    icon: Phone,
    label: "Emergency Hotline",
    value: "+962 79 974 1318",
    href: "tel:+962799741318",
    accent: "text-primary",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp Support",
    value: "+962 79 974 1318",
    href: "https://wa.me/962799741318",
    accent: "text-emerald-400",
  },
  {
    icon: Mail,
    label: "Email Support",
    value: "support@abufarhamedical.com",
    href: "mailto:support@abufarhamedical.com",
    accent: "text-sky-400",
  },
];

export const REASONS = [
  "Emergency Breakdown",
  "Preventive Maintenance",
  "Spare Parts Request",
  "Installation Support",
  "Clinical Training",
  "Warranty Assistance",
];

export const FAQ_CATS = ["All", "Service", "Warranty", "Parts", "Training"] as const;
export type FaqCat = (typeof FAQ_CATS)[number];

export const FAQS: { q: string; a: string; cat: Exclude<FaqCat, "All"> }[] = [
  {
    q: "How can I request a service?",
    a: "Submit the form above, call our 24/7 emergency line or email support@abufarhamedical.com. A case is opened immediately and a certified engineer is assigned within minutes.",
    cat: "Service",
  },
  {
    q: "How fast can an engineer reach our site?",
    a: "We prioritize critical downtime with rapid dispatch across Jordan and the wider MEA region — from the nearest field hub with the right parts on board.",
    cat: "Service",
  },
  {
    q: "What is the warranty coverage?",
    a: "Every installation includes a 1-year free warranty covering parts and labor, with extended service contracts available for multi-year coverage, uptime guarantees and preventive maintenance.",
    cat: "Warranty",
  },
  {
    q: "Do you provide training for our staff?",
    a: "Yes — clinical and biomedical training is included with every installation and available on demand. Sessions are led by OEM-certified application specialists on your own equipment.",
    cat: "Training",
  },
  {
    q: "Do you provide preventive maintenance?",
    a: "Scheduled PM visits are included in our service contracts and can be booked ad-hoc for any supported equipment, following original OEM procedures and checklists.",
    cat: "Service",
  },
  {
    q: "Do you supply spare parts for all models?",
    a: "We stock genuine OEM parts for every brand and modality we install and can source rare parts through our OEM partners with fully traceable documentation.",
    cat: "Parts",
  },
];

// Re-export icons commonly used by children
export { Radio, Cog };
