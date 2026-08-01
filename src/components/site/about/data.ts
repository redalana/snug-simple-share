import {
  CalendarClock,
  Globe2,
  Building2,
  Cpu,
  MessageSquare,
  ClipboardCheck,
  Boxes,
  Wrench,
  Gauge,
  GraduationCap,
  LifeBuoy,
  Stethoscope,
  ShieldCheck,
  Settings2,
  Headphones,
  MapPinned,
  MonitorCheck,
  Building,
  HeartPulse,
  ScanLine,
  Activity,
  Scissors,
  Baby,
  Droplets,
  UserCog,
  BadgeCheck,
  Radar,
  Award,
  HardHat,
  Users,
  Zap,
} from "lucide-react";

import heroImg from "@/assets/about-hero.jpg";
import teamImg from "@/assets/about-team.jpg";
import hqImg from "@/assets/abufarha-hq.jpg";
import engImg from "@/assets/aftersales-engineering.jpg";
import warehouseImg from "@/assets/aftersales-warehouse.jpg";
import remoteImg from "@/assets/aftersales-remote-engineer.jpg";
import ctaImg from "@/assets/aftersales-cta.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import cathlab from "@/assets/why-cathlab.jpg";
import beyond from "@/assets/beyond-cathlab.jpg";

export {
  heroImg,
  teamImg,
  hqImg,
  engImg,
  warehouseImg,
  remoteImg,
  ctaImg,
  p1,
  p2,
  p3,
  cathlab,
  beyond,
};

export const HERO_KPIS = [
  { icon: CalendarClock, value: "Since 1999", label: "Established" },
  { icon: Globe2, value: "10+", label: "Countries Served" },
  { icon: Building2, value: "Turnkey", label: "Hospital Projects" },
  { icon: Cpu, value: "Biomedical", label: "Engineering Support" },
];

export const JOURNEY = [
  {
    year: "1999",
    title: "Company Founded in Jordan",
    img: hqImg,
    desc: "AbuFarha Medical Supplies is founded in Jordan to bring reliable medical equipment and engineering support to regional hospitals.",
  },
  {
    year: "2005",
    title: "Expansion into Hospital Projects",
    img: p1,
    desc: "Moves beyond equipment supply into full hospital equipping projects — planning, installation and clinical commissioning.",
  },
  {
    year: "2010",
    title: "Regional Growth",
    img: p2,
    desc: "Establishes a network of biomedical engineers and application specialists serving hospitals across the Middle East.",
  },
  {
    year: "2015",
    title: "Large Turnkey Healthcare Projects",
    img: engImg,
    desc: "Delivers multi-department turnkey healthcare projects covering imaging, cath lab, ICU, OR and sterilization from a single accountable partner.",
  },
  {
    year: "2020",
    title: "Expansion Across Africa & Middle East",
    img: p3,
    desc: "Extends operations into North and East Africa and Central Asia, with permanent field engineering teams and regional spare-parts stock.",
  },
  {
    year: "Today",
    title: "Complete Healthcare Engineering Partner",
    img: cathlab,
    desc: "A complete healthcare engineering partner — supply, installation, commissioning, clinical training and lifetime technical support.",
  },
];

export const BENTO = [
  {
    key: "eng",
    img: engImg,
    span: "lg:col-span-2 lg:row-span-2 min-h-[calc(620*var(--desktop-px-unit))]",
    title: "Engineering First",
    desc: "AbuFarha is an engineering company that supplies medical equipment — not a reseller. Every project is scoped, installed and supported by our own biomedical engineers, from first site visit to lifetime service.",
    featured: true,
  },
  {
    key: "cert",
    img: warehouseImg,
    span: "min-h-[calc(290*var(--desktop-px-unit))]",
    title: "Certified Biomedical Engineers",
    desc: "OEM-trained field engineers with hands-on experience across MRI, CT, cath lab, ultrasound, monitoring and life-support systems.",
  },
  {
    key: "turnkey",
    img: beyond,
    span: "min-h-[calc(290*var(--desktop-px-unit))]",
    title: "Turnkey Healthcare Projects",
    desc: "One accountable partner for planning, procurement, installation, commissioning, training and handover of complete hospital departments.",
  },
  {
    key: "partner",
    img: remoteImg,
    span: "lg:col-span-2 min-h-[calc(290*var(--desktop-px-unit))]",
    title: "Long-Term Partnership",
    desc: "We stay engaged long after go-live — preventive maintenance, spare parts, clinical retraining and technology upgrades across the equipment lifecycle.",
  },
];

export const STEPS = [
  {
    n: "01",
    icon: MessageSquare,
    title: "Consultation",
    desc: "We meet with clinical and biomedical teams to understand the department, patient workload, workflow and long-term clinical goals.",
  },
  {
    n: "02",
    icon: ClipboardCheck,
    title: "Planning & Design",
    desc: "Engineers produce room layouts, technical specifications, electrical and HVAC requirements and full equipment lists tailored to the facility.",
  },
  {
    n: "03",
    icon: Boxes,
    title: "Equipment Procurement",
    desc: "Systems are procured directly from OEM partners with full warranty and traceability — matched to the approved technical specification.",
  },
  {
    n: "04",
    icon: Wrench,
    title: "Installation",
    desc: "Certified engineers manage rigging, mechanical and electrical installation and site coordination against manufacturer standards.",
  },
  {
    n: "05",
    icon: Gauge,
    title: "Commissioning",
    desc: "Every system is calibrated, tested and clinically accepted with a documented commissioning report handed to the biomedical department.",
  },
  {
    n: "06",
    icon: GraduationCap,
    title: "Clinical Training",
    desc: "Application specialists train radiographers, technologists, nurses and biomedical staff on protocols, workflows and safe daily operation.",
  },
  {
    n: "07",
    icon: LifeBuoy,
    title: "After-Sales Support",
    desc: "Preventive maintenance contracts, corrective service, spare parts and 24/7 technical support across the full equipment lifetime.",
  },
];

export const EXPERTISE = [
  {
    icon: Cpu,
    title: "Biomedical Engineering",
    thumb: engImg,
    desc: "Our in-house biomedical engineering team is the backbone of AbuFarha. Engineers are trained on the specific OEM platforms they service — from MRI and CT to cath lab, monitoring and life-support systems — and every intervention follows manufacturer specifications and is fully documented.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Applications",
    thumb: cathlab,
    desc: "Application specialists work directly with radiologists, cardiologists, technologists and nurses to build imaging protocols, optimize dose, refine clinical workflows and validate performance — turning capable equipment into confident daily clinical practice.",
  },
  {
    icon: Wrench,
    title: "Installation & Commissioning",
    thumb: warehouseImg,
    desc: "Complete site preparation, rigging, mechanical installation, electrical hook-up, calibration and clinical acceptance testing — executed to OEM standards, with a signed commissioning report handed to the biomedical department at handover.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Maintenance",
    thumb: remoteImg,
    desc: "Scheduled OEM-aligned preventive maintenance keeps every system within manufacturer tolerance, reduces unplanned downtime and extends equipment lifetime — with predictable service windows and full documentation for every visit.",
  },
  {
    icon: Settings2,
    title: "Corrective Maintenance",
    thumb: p2,
    desc: "When a system fails, our engineers diagnose, source certified spare parts from our regional stock and restore operation quickly — with root-cause analysis and a corrective report so the same fault does not repeat.",
  },
  {
    icon: GraduationCap,
    title: "Clinical Training",
    thumb: p1,
    desc: "Structured on-site training programs for radiographers, biomedical engineers, nurses and clinicians. Training is protocol-based, scenario-driven and continues after go-live so departments stay confident as staff rotate.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    thumb: p3,
    desc: "24/7 remote diagnostics combined with rapid on-site response from engineers stationed regionally. First-line triage, escalation to OEM engineering and clear service-level commitments for every contracted customer.",
  },
  {
    icon: ClipboardCheck,
    title: "Hospital Planning",
    thumb: beyond,
    desc: "We help hospitals plan new departments — room layouts, equipment lists, electrical and HVAC requirements, workflow mapping and phased delivery — so the finished department works clinically from day one.",
  },
];

export const MAP_STATS = [
  { icon: Building2, value: "30+", label: "Healthcare Projects" },
  { icon: Globe2, value: "10+", label: "Countries" },
  { icon: CalendarClock, value: "Since 1999", label: "Engineering Healthcare" },
  { icon: MonitorCheck, value: "24/7", label: "Technical Support" },
];

export const INDUSTRIES = [
  {
    icon: Building,
    title: "General Hospitals",
    desc: "End-to-end equipping for public and private hospitals — imaging, cath lab, ICU, OR, sterilization and outpatient departments delivered as one accountable project.",
    feature: true,
  },
  {
    icon: Building2,
    title: "Specialized Hospitals",
    desc: "Cardiac, orthopedic, oncology, women's-health and eye hospitals equipped to their specific clinical protocols and workflows.",
  },
  {
    icon: HeartPulse,
    title: "Heart Centers",
    desc: "Cath lab, echocardiography, ECG and cardiovascular imaging — installed, commissioned and clinically supported by cardiology-trained engineers.",
  },
  {
    icon: ScanLine,
    title: "Diagnostic Imaging Centers",
    desc: "MRI, CT, ultrasound, mammography and X-ray systems commissioned for high daily throughput and consistent image quality.",
  },
  {
    icon: Activity,
    title: "ICU & CCU",
    desc: "Patient monitors, ventilators, infusion systems and central-station networks configured to critical-care protocols with staff training.",
  },
  {
    icon: Scissors,
    title: "Operating Theatres",
    desc: "OR tables, surgical lights, anesthesia machines, electrosurgical units and OR-integration — installed to hospital layout and workflow.",
  },
  {
    icon: Baby,
    title: "NICU",
    desc: "Incubators, warmers, phototherapy, neonatal monitors and ventilators for neonatal intensive care — commissioned to neonatal safety standards.",
  },
  {
    icon: HeartPulse,
    title: "Delivery Rooms",
    desc: "Delivery beds, fetal monitors, resuscitation units and warmers for labor and delivery — set up for immediate maternal and neonatal care.",
  },
  {
    icon: Droplets,
    title: "Central Sterilization Departments",
    desc: "Autoclaves, washer-disinfectors and CSSD workflow equipment — installed, validated and documented to sterilization standards.",
  },
  {
    icon: Stethoscope,
    title: "Outpatient Clinics",
    desc: "Examination, diagnostic and minor-procedure equipment for outpatient departments and private clinics, with training on daily use.",
  },
];

// Every entry links to the Brands page, which is the only route that exists for
// manufacturer coverage. Per-brand routes (/brands/<slug>) are not implemented,
// so pointing at them produced 404s.
export const PARTNERS = [
  { name: "Philips", color: "#0B5ED7", href: "/brands" },
  { name: "Siemens Healthineers", color: "#EC6602", href: "/brands" },
  { name: "GE HealthCare", color: "#005EB8", href: "/brands" },
  { name: "Mindray", color: "#005BAC", href: "/brands" },
  { name: "Shimadzu", color: "#C8161D", href: "/brands" },
  { name: "Hitachi", color: "#E60027", href: "/brands" },
  { name: "Richard Wolf", color: "#C8102E", href: "/brands" },
  { name: "Abbott", color: "#008FC7", href: "/brands" },
  { name: "Boston Scientific", color: "#0072CE", href: "/brands" },
];

export const TEAM_ROLES = [
  {
    icon: Cpu,
    title: "Biomedical Engineers",
    desc: "Certified engineers responsible for installation, commissioning, preventive maintenance and corrective service across every system we deliver.",
  },
  {
    icon: Activity,
    title: "Application Specialists",
    desc: "Modality specialists with deep expertise in MRI, CT and Cath Lab systems — tuning imaging protocols and validating clinical performance.",
  },
  {
    icon: GraduationCap,
    title: "Clinical Trainers",
    desc: "Trainers who work on-site with radiographers, technologists and nurses so departments operate confidently from day one and after staff rotation.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Consultants",
    desc: "Advisors who help hospitals plan new departments, choose the right technology and phase delivery across large multi-year projects.",
  },
  {
    icon: UserCog,
    title: "MRI, CT & Cath Lab Engineers",
    desc: "Modality-specific field engineers with hands-on experience on advanced imaging and interventional platforms across leading OEMs.",
  },
];

export const TEAM_BADGES = ["OEM Certified", "ISO 13485", "ISO 9001", "Radiation Safety"];

export const WHY = [
  {
    icon: Globe2,
    title: "Regional Experience",
    desc: "More than two decades supporting hospitals across the Middle East and Africa — we understand the region's infrastructure, workflows and clinical realities.",
    feature: true,
  },
  {
    icon: ClipboardCheck,
    title: "Hospital Planning Expertise",
    desc: "We help hospitals scope new departments — room layouts, equipment lists, electrical and HVAC requirements and phased delivery plans.",
  },
  {
    icon: Wrench,
    title: "Installation & Commissioning",
    desc: "In-house engineers install and commission every system to OEM standards, with a documented acceptance report handed over at go-live.",
  },
  {
    icon: GraduationCap,
    title: "Clinical Training",
    desc: "Application specialists train radiographers, technologists, nurses and clinicians on protocols and safe daily operation — on-site and after go-live.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Maintenance",
    desc: "Scheduled OEM-aligned preventive maintenance keeps systems within manufacturer tolerance and extends equipment lifetime.",
  },
  {
    icon: LifeBuoy,
    title: "Long-Term Technical Support",
    desc: "24/7 remote diagnostics plus regional field engineers and spare-parts stock — rapid response wherever the hospital is.",
  },
  {
    icon: BadgeCheck,
    title: "OEM Standards",
    desc: "Every install, calibration and service action follows manufacturer specifications and is fully traceable and documented.",
  },
  {
    icon: Award,
    title: "One-Year Warranty",
    desc: "Every new installation is backed by a one-year warranty covering parts and engineering labor — with clear escalation paths.",
  },
];

export const CERTS = [
  {
    icon: BadgeCheck,
    title: "OEM Standards",
    sub: "Manufacturer-aligned",
    desc: "Every installation, calibration and service action follows manufacturer specifications — with engineers trained on the exact platforms they support.",
  },
  {
    icon: Radar,
    title: "Quality Assurance",
    sub: "Documented processes",
    desc: "Every intervention is logged with a QA report handed to the biomedical department, so hospitals have a full engineering history for each system.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    sub: "Certified engineers",
    desc: "Rigging, mechanical, electrical and clinical acceptance testing carried out by AbuFarha's in-house engineering team, not subcontractors.",
  },
  {
    icon: ShieldCheck,
    title: "Clinical Safety",
    sub: "Patient safety first",
    desc: "Radiation safety, electrical safety and clinical acceptance testing on every commissioned system, aligned with international standards.",
  },
  {
    icon: Award,
    title: "Engineering Excellence",
    sub: "Long-term reliability",
    desc: "Preventive maintenance, corrective service and lifecycle support delivered to a consistent engineering standard — the same discipline on day one and year ten.",
  },
];

export type Metric = {
  value: number;
  suffix: string;
  label: string;
  sub: string;
  icon: React.ComponentType<{ className?: string }>;
};
export const METRICS: Metric[] = [
  {
    value: 1999,
    suffix: "",
    label: "Established",
    sub: "Engineering healthcare since 1999",
    icon: CalendarClock,
  },
  {
    value: 10,
    suffix: "+",
    label: "Countries",
    sub: "Africa, Middle East & Central Asia",
    icon: Globe2,
  },
  {
    value: 30,
    suffix: "+",
    label: "Hospital Projects",
    sub: "Across Africa & the Middle East",
    icon: Building2,
  },
  {
    value: 5,
    suffix: "",
    label: "Biomedical Engineers",
    sub: "In-house engineering team",
    icon: Cpu,
  },
  {
    value: 100,
    suffix: "%",
    label: "OEM Certified",
    sub: "All partnerships manufacturer-certified",
    icon: HardHat,
  },
  {
    value: 24,
    suffix: "/7",
    label: "Technical Support",
    sub: "Remote & on-site, region-wide",
    icon: Headphones,
  },
];

export const TRUST = [
  { icon: Users, title: "Expert Advice", desc: "Consultation from our engineering specialists." },
  {
    icon: Zap,
    title: "Tailored Solutions",
    desc: "Solutions built around your clinical workflow.",
  },
  {
    icon: LifeBuoy,
    title: "Reliable Support",
    desc: "We stay with you across the equipment lifecycle.",
  },
];
