import {
  Heart,
  Scan,
  CircuitBoard,
  Stethoscope,
  Activity,
  Radiation,
  MoreHorizontal,
  Wrench,
  Headphones,
  Boxes,
  GraduationCap,
  TrendingUp,
  FileCheck2,
} from "lucide-react";

import heroCath from "@/assets/sol-carm.jpg";
import heroMri from "@/assets/sol-mri.jpg";
import heroCt from "@/assets/sol-ct.jpg";
import heroOr from "@/assets/sol-or.jpg";
import petImg from "@/assets/sol-petct.jpg";
import icuImg from "@/assets/why-cathlab.jpg";
import turnkeyHero from "@/assets/turnkey-hero.jpg";
import beyondCath from "@/assets/beyond-cathlab.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import abufarhaHq from "@/assets/abufarha-hq.jpg";

export {
  heroCath,
  heroMri,
  heroCt,
  heroOr,
  petImg,
  icuImg,
  turnkeyHero,
  beyondCath,
  project1,
  project2,
  project3,
  abufarhaHq,
};

export const DEPARTMENTS = [
  { id: "cath", name: "Cath Lab", icon: Heart },
  { id: "mri", name: "MRI Center", icon: Scan },
  { id: "ct", name: "CT Department", icon: CircuitBoard },
  { id: "or", name: "Hybrid OR", icon: Stethoscope },
  { id: "icu", name: "ICU", icon: Activity },
  { id: "pet", name: "PET/CT", icon: Radiation },
  { id: "more", name: "More", icon: MoreHorizontal },
] as const;

export const PHASES = [
  { n: "01", title: "Planning", copy: "Needs assessment and feasibility studies.", img: project2 },
  { n: "02", title: "Engineering", copy: "Detailed design and technical planning.", img: heroMri },
  {
    n: "03",
    title: "Procurement",
    copy: "Global sourcing with quality assurance.",
    img: beyondCath,
  },
  {
    n: "04",
    title: "Installation",
    copy: "Professional installation and integration.",
    img: heroCt,
  },
  { n: "05", title: "Testing", copy: "Rigorous testing and safety verification.", img: heroCath },
  {
    n: "06",
    title: "Training",
    copy: "Clinical & technical training for your team.",
    img: project3,
  },
  { n: "07", title: "Go Live", copy: "Commissioning and continuous support.", img: heroOr },
];

export const COMPONENTS = [
  {
    id: "imaging",
    label: "Imaging System",
    title: "Advanced Imaging System",
    copy: "High-resolution imaging with low dose technology for precise diagnosis and intervention.",
    features: ["Biplane / Single Plane", "High Resolution", "Low Dose", "Advanced Software"],
    thumb: heroCath,
  },
  {
    id: "table",
    label: "Patient Table",
    title: "Patient Table",
    copy: "Motorized carbon-fiber table for interventional workflows.",
    features: ["Floating Tabletop", "High Weight Capacity", "Radiolucent", "Precision Motion"],
    thumb: heroOr,
  },
  {
    id: "injector",
    label: "Injector System",
    title: "Contrast Injector",
    copy: "Precision contrast injection with integrated protocols.",
    features: ["Dual Head", "Pressure Monitoring", "Preset Protocols", "EMR Integration"],
    thumb: heroCt,
  },
  {
    id: "monitors",
    label: "Monitors",
    title: "Clinical Monitors",
    copy: "Multi-parameter monitoring for continuous patient safety.",
    features: ["Hemodynamic", "ECG & SpO2", "Central Station", "Alarm Intelligence"],
    thumb: icuImg,
  },
  {
    id: "workstation",
    label: "Workstation",
    title: "Reporting Workstation",
    copy: "Post-processing workstation for review and reporting.",
    features: ["3D Reconstruction", "Advanced Analytics", "PACS Ready", "Multi-user"],
    thumb: heroMri,
  },
  {
    id: "power",
    label: "Power & Protection",
    title: "Power & Radiation Protection",
    copy: "Redundant power and radiation shielding for staff safety.",
    features: ["UPS Protected", "Lead Shielding", "Isolated Ground", "Dosimetry"],
    thumb: petImg,
  },
];

export const HOTSPOTS = [
  { top: "24%", left: "62%" },
  { top: "18%", left: "34%" },
  { top: "48%", left: "78%" },
  { top: "58%", left: "48%" },
  { top: "72%", left: "26%" },
  { top: "80%", left: "68%" },
];

export const PROJECTS = [
  {
    country: "Egypt",
    title: "National Heart Institute",
    scope: "Cath Lab Department",
    tag: "Cath Lab",
    year: "2024",
    image: project1,
  },
  {
    country: "Yemen",
    title: "Al-Thawra General Hospital",
    scope: "MRI Center",
    tag: "MRI",
    year: "2023",
    image: project2,
  },
  {
    country: "Jordan",
    title: "Al Bashir Hospital",
    scope: "CT Department",
    tag: "CT",
    year: "2023",
    image: project3,
  },
  {
    country: "Iraq",
    title: "Baghdad Teaching Hospital",
    scope: "Hybrid OR",
    tag: "Hybrid OR",
    year: "2024",
    image: heroOr,
  },
];

export type Region = {
  name: string;
  flag: string;
  note?: string;
  top: string;
  left: string;
  hub?: boolean;
  img: string;
  equipment: { label: string; qty: string }[];
};

export const REGIONS: Region[] = [
  {
    name: "Jordan",
    flag: "🇯🇴",
    note: "Headquarters",
    top: "46%",
    left: "50%",
    hub: true,
    img: abufarhaHq,
    equipment: [{ label: "Cath Lab / Heart Center", qty: "3" }],
  },
  {
    name: "Syria",
    flag: "🇸🇾",
    top: "34%",
    left: "48%",
    img: project1,
    equipment: [
      { label: "Cath Lab", qty: "11" },
      { label: "MRI", qty: "2" },
      { label: "Eye LASIK Center", qty: "3" },
      { label: "IVF Center", qty: "2" },
    ],
  },
  {
    name: "Iraq",
    flag: "🇮🇶",
    note: "Including Erbil",
    top: "38%",
    left: "58%",
    img: project2,
    equipment: [
      { label: "Cath Lab", qty: "9" },
      { label: "MRI", qty: "3" },
      { label: "Ultrasound", qty: "55" },
      { label: "CT Scanner", qty: "1" },
    ],
  },
  {
    name: "Yemen",
    flag: "🇾🇪",
    top: "66%",
    left: "58%",
    img: project3,
    equipment: [
      { label: "Cath Lab", qty: "7" },
      { label: "MRI", qty: "2" },
      { label: "CT Scanner", qty: "1" },
      { label: "Cardiology Supplies", qty: "—" },
    ],
  },
  {
    name: "Egypt",
    flag: "🇪🇬",
    top: "56%",
    left: "42%",
    img: heroCath,
    equipment: [{ label: "Cardiology Supplies", qty: "—" }],
  },
  {
    name: "Libya",
    flag: "🇱🇾",
    top: "48%",
    left: "30%",
    img: heroMri,
    equipment: [
      { label: "Cath Lab", qty: "1" },
      { label: "IVF Center", qty: "1" },
      { label: "Ultrasound", qty: "3" },
      { label: "Digital X-ray", qty: "1" },
    ],
  },
  {
    name: "Somaliland",
    flag: "🇸🇴",
    top: "76%",
    left: "56%",
    img: icuImg,
    equipment: [
      { label: "Cath Lab", qty: "1" },
      { label: "Cardiology Supplies", qty: "—" },
    ],
  },
  {
    name: "Somalia",
    flag: "🇸🇴",
    top: "84%",
    left: "60%",
    img: icuImg,
    equipment: [
      { label: "Cath Lab", qty: "1" },
      { label: "Cardiology Supplies", qty: "—" },
    ],
  },
  {
    name: "Uzbekistan",
    flag: "🇺🇿",
    top: "18%",
    left: "72%",
    img: heroCt,
    equipment: [
      { label: "Cath Lab", qty: "1" },
      { label: "Cardiology Supplies", qty: "—" },
    ],
  },
  {
    name: "Bangladesh",
    flag: "🇧🇩",
    top: "48%",
    left: "90%",
    img: heroOr,
    equipment: [{ label: "Bone Density", qty: "2" }],
  },
];

export const SUPPORT = [
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    copy: "Regular maintenance to ensure optimal performance.",
  },
  {
    icon: Headphones,
    title: "24/7 Technical Support",
    copy: "Experienced engineers available around the clock.",
  },
  { icon: Boxes, title: "Spare Parts Supply", copy: "Genuine parts with fast delivery worldwide." },
  {
    icon: GraduationCap,
    title: "Clinical Training",
    copy: "Ongoing training for clinical and technical teams.",
  },
  {
    icon: TrendingUp,
    title: "Upgrades & Modernization",
    copy: "Technology upgrades to keep your systems future-ready.",
  },
  {
    icon: FileCheck2,
    title: "Service Contracts",
    copy: "Flexible service contracts tailored to your needs.",
  },
];

export const FAQS = [
  {
    q: "What is included in a turnkey solution?",
    a: "A turnkey solution covers everything from needs assessment, engineering and procurement, to installation, commissioning, staff training and ongoing after-sales support — delivered by a single partner.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines depend on department scope and site readiness. Most single-department projects are delivered within 3 to 9 months from contract signature to go-live.",
  },
  {
    q: "Do you provide training for our staff?",
    a: "Yes. We provide structured clinical and biomedical training programs, on-site and remote, tailored to your team.",
  },
  {
    q: "What kind of after-sales support do you offer?",
    a: "Preventive maintenance, 24/7 technical support, genuine spare parts and flexible service contracts across the equipment lifecycle.",
  },
];
