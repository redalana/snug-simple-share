/**
 * Single source of truth for the homepage "Advanced Medical Technologies for
 * Every Specialty" category selection, plus the per-category solution content
 * rendered by the Dynamic Product Solutions section directly below it.
 *
 * The store is a tiny external store so the Solutions rail can publish the
 * active category id and the solution section can subscribe without lifting
 * state or re-rendering unrelated homepage sections.
 */

import { useSyncExternalStore } from "react";

import cathlab from "@/assets/hero-cathlab.jpg";
import mri from "@/assets/sol-mri.jpg";
import ct from "@/assets/sol-ct.jpg";
import petct from "@/assets/sol-petct.jpg";
import mammo from "@/assets/sol-mammo.jpg";
import carm from "@/assets/sol-carm.jpg";
import xray from "@/assets/sol-xray.jpg";
import dexa from "@/assets/sol-dexa.jpg";
import eswl from "@/assets/sol-eswl.jpg";

/** Feature icon keys — mapped to lucide icons inside the component. */
export type FeatureIcon =
  | "engineering"
  | "installation"
  | "clinical"
  | "workflow"
  | "parts"
  | "maintenance"
  | "training"
  | "support"
  | "remote"
  | "warranty"
  | "commissioning"
  | "calibration";

export type SolutionFeature = { icon: FeatureIcon; label: string; detail: string };

export type CategorySolution = {
  id: string;
  /** Short label used in CTAs, e.g. "Explore MRI Systems". */
  nav: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  features: SolutionFeature[];
  applications: string[];
  facilities: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

const CORE_SERVICE: SolutionFeature[] = [
  {
    icon: "engineering",
    label: "Biomedical Engineering",
    detail: "In-house certified engineers from survey to handover",
  },
  {
    icon: "installation",
    label: "Installation",
    detail: "Site preparation, delivery and rigging managed end to end",
  },
  {
    icon: "commissioning",
    label: "Commissioning",
    detail: "Acceptance testing and performance verification",
  },
  {
    icon: "training",
    label: "Clinical Training",
    detail: "Operator and application training for your teams",
  },
  {
    icon: "maintenance",
    label: "Preventive Maintenance",
    detail: "Scheduled service programs that protect uptime",
  },
  {
    icon: "parts",
    label: "OEM Spare Parts",
    detail: "Genuine parts sourcing with managed logistics",
  },
];

const f = (icon: FeatureIcon, label: string, detail: string): SolutionFeature => ({
  icon,
  label,
  detail,
});

export const CATEGORY_SOLUTIONS: Record<string, CategorySolution> = {
  "cath-lab": {
    id: "cath-lab",
    nav: "Cath Lab",
    title: "Complete Cath Lab Solutions",
    subtitle: "From Planning to Clinical Excellence",
    description:
      "We deliver interventional suites as a complete programme — room design, system supply, installation, commissioning and the clinical support that keeps a cath lab performing after day one.",
    image: cathlab,
    imageAlt: "Interventional cath lab suite supplied and commissioned by AbuFarha Medical",
    features: [
      f("workflow", "Room & Workflow Design", "Layout planned around your interventional caseload"),
      f("engineering", "Biomedical Engineering", "Certified engineers from survey to handover"),
      f("installation", "Installation", "Shielding, power and system integration managed"),
      f("commissioning", "Commissioning", "Acceptance testing and dose performance checks"),
      f("clinical", "Clinical Applications", "Protocol setup with application specialists"),
      f("support", "Lifetime Support", "Service coverage and spare parts continuity"),
    ],
    applications: [
      "Coronary intervention",
      "Structural heart procedures",
      "Peripheral vascular",
      "Neurovascular",
      "Electrophysiology",
    ],
    facilities: ["Hospitals", "Cardiac centers", "University hospitals", "Government facilities"],
    primaryCta: { label: "Explore Cath Lab Systems", href: "/products/cath-lab" },
    secondaryCta: { label: "Talk to a Specialist", href: "/contact" },
  },

  mri: {
    id: "mri",
    nav: "MRI",
    title: "Advanced MRI Systems",
    subtitle: "High Resolution Imaging With Expert Installation",
    description:
      "1.5T and 3T platforms delivered as a full project — RF shielding and magnet room planning, cryogen logistics, commissioning, radiographer training and long-term preventive maintenance.",
    image: mri,
    imageAlt: "MRI scanner suite installed and serviced by AbuFarha Medical",
    features: [
      f("workflow", "Site & Magnet Planning", "RF shielding, floor loading and HVAC coordination"),
      f("engineering", "Biomedical Engineering", "Specialist MRI engineers on every project"),
      f("installation", "Installation", "Magnet delivery, rigging and system integration"),
      f("commissioning", "Commissioning", "Acceptance testing and image-quality verification"),
      f("training", "Radiographer Training", "Protocol and sequence training for your team"),
      f("maintenance", "Preventive Maintenance", "Scheduled service and cryogen management"),
    ],
    applications: [
      "Neurological imaging",
      "Musculoskeletal imaging",
      "Oncology staging",
      "Cardiac MRI",
      "Body and abdominal imaging",
    ],
    facilities: ["Hospitals", "Diagnostic imaging centers", "University hospitals"],
    primaryCta: { label: "Explore MRI Systems", href: "/products/mri-scanners" },
    secondaryCta: { label: "Talk to a Specialist", href: "/contact" },
  },

  ct: {
    id: "ct",
    nav: "CT",
    title: "Multi-Slice CT Solutions",
    subtitle: "High Throughput Imaging With Dose Confidence",
    description:
      "Multi-slice CT delivered turnkey — room design and lead shielding, installation, dose-optimisation setup, radiographer training and biomedical engineering support for the life of the system.",
    image: ct,
    imageAlt: "Multi-slice CT scanner room delivered by AbuFarha Medical",
    features: [
      f("workflow", "Room & Shielding Design", "Layout and lead protection engineered per site"),
      f("installation", "Installation", "Gantry delivery, power and network integration"),
      f("commissioning", "Commissioning", "Acceptance testing and image QC baselines"),
      f("calibration", "Dose Optimisation", "Protocol calibration for adult and paediatric work"),
      f("training", "Clinical Training", "Radiographer training on routine and urgent protocols"),
      f("maintenance", "Preventive Maintenance", "Planned service that protects scanner uptime"),
    ],
    applications: [
      "Emergency and trauma",
      "Oncology staging",
      "Cardiac CT angiography",
      "Vascular imaging",
      "Routine diagnostics",
    ],
    facilities: ["Hospitals", "Emergency departments", "Diagnostic centers"],
    primaryCta: { label: "Explore CT Scanners", href: "/products/ct-scanners" },
    secondaryCta: { label: "Talk to a Specialist", href: "/contact" },
  },

  "pet-ct": {
    id: "pet-ct",
    nav: "PET/CT",
    title: "Precision PET/CT Imaging",
    subtitle: "Complete Diagnostic Workflow",
    description:
      "Digital PET/CT for high-throughput oncology and molecular imaging — site planning, installation, commissioning, clinical training and lifetime service delivered by our specialist engineers.",
    image: petct,
    imageAlt: "Digital PET/CT molecular imaging system supported by AbuFarha Medical",
    features: [
      f("workflow", "Department Planning", "Hot lab, uptake rooms and patient flow layout"),
      f("engineering", "Biomedical Engineering", "Specialist molecular imaging engineers"),
      f("installation", "Installation", "System delivery, shielding and integration"),
      f("commissioning", "Commissioning", "Acceptance testing and quantitative QC"),
      f("clinical", "Clinical Applications", "Oncology, cardiac and neuro protocol setup"),
      f("support", "Lifetime Support", "Service coverage with OEM spare parts"),
    ],
    applications: [
      "Oncology staging and restaging",
      "Treatment response assessment",
      "Cardiac viability",
      "Neurology studies",
    ],
    facilities: ["Cancer centers", "University hospitals", "Referral hospitals"],
    primaryCta: { label: "Explore PET/CT", href: "/products/pet-ct-scanners" },
    secondaryCta: { label: "Talk to a Specialist", href: "/contact" },
  },

  mammography: {
    id: "mammography",
    nav: "Mammography",
    title: "Women's Imaging Solutions",
    subtitle: "Early Detection With Screening-Grade Quality",
    description:
      "2D digital and 3D tomosynthesis mammography for screening programmes and women's health centers — with QA protocols, integrated biopsy workflows and radiographer training.",
    image: mammo,
    imageAlt: "Digital mammography system supplied by AbuFarha Medical",
    features: [
      f("workflow", "Screening Workflow", "Room layout designed around patient privacy and flow"),
      f("installation", "Installation", "System delivery, positioning and integration"),
      f("commissioning", "Commissioning", "Acceptance testing to screening-programme standards"),
      f("calibration", "QA & Calibration", "Recurring image-quality assurance routines"),
      f("training", "Clinical Training", "Positioning and tomosynthesis technique training"),
      f("maintenance", "Preventive Maintenance", "Planned service across screening campaigns"),
    ],
    applications: [
      "Population screening",
      "Diagnostic mammography",
      "Tomosynthesis imaging",
      "Stereotactic biopsy",
    ],
    facilities: ["Women's health centers", "Screening clinics", "Hospitals"],
    primaryCta: { label: "Explore Mammography Systems", href: "/products/mammography-systems" },
    secondaryCta: { label: "Talk to a Specialist", href: "/contact" },
  },

  "c-arm": {
    id: "c-arm",
    nav: "C-Arm",
    title: "Surgical C-Arm Solutions",
    subtitle: "Real-Time Imaging For The Operating Room",
    description:
      "Mobile flat-detector C-arms and fixed hybrid OR systems for orthopedic, vascular and general surgical workflows — installed, commissioned and supported by our engineering team.",
    image: carm,
    imageAlt: "Mobile surgical C-arm fluoroscopy system supplied by AbuFarha Medical",
    features: [
      f("workflow", "OR Integration", "Positioning and display integration in theatre"),
      f("installation", "Installation", "Delivery, setup and surgical team handover"),
      f("commissioning", "Commissioning", "Fluoroscopy performance and dose verification"),
      f("training", "Surgical Training", "Hands-on training for surgeons and OR staff"),
      f("parts", "OEM Spare Parts", "Genuine detector and tube parts sourcing"),
      f("maintenance", "Preventive Maintenance", "Planned service to protect theatre schedules"),
    ],
    applications: [
      "Orthopedic surgery",
      "Vascular procedures",
      "Pain management",
      "General surgery",
    ],
    facilities: ["Operating rooms", "Surgical centers", "Hospitals"],
    primaryCta: { label: "Explore C-Arm Systems", href: "/products/c-arm-systems" },
    secondaryCta: { label: "Talk to a Specialist", href: "/contact" },
  },

  "x-ray": {
    id: "x-ray",
    nav: "X-Ray",
    title: "Digital X-Ray Systems",
    subtitle: "Reliable Imaging For Modern Healthcare",
    description:
      "Ceiling-mounted, floor-mounted and mobile digital radiography — from room design and installation to commissioning, radiographer training and long-term service coverage.",
    image: xray,
    imageAlt: "Digital radiography X-ray room installed by AbuFarha Medical",
    features: [
      f("workflow", "Room Design", "DR room layout planned around daily volume"),
      f("installation", "Installation", "Detector, generator and PACS integration"),
      f("commissioning", "Commissioning", "Acceptance testing and image QC baselines"),
      f("training", "Clinical Training", "Radiographer training on exposure protocols"),
      f("remote", "Remote Assistance", "Diagnostic support to shorten downtime"),
      f("maintenance", "Preventive Maintenance", "Scheduled service and calibration visits"),
    ],
    applications: [
      "General radiography",
      "Chest imaging",
      "Orthopedics",
      "Emergency",
      "Outpatient clinics",
    ],
    facilities: ["Hospitals", "Diagnostic centers", "Private clinics", "Government facilities"],
    primaryCta: { label: "Explore X-Ray Systems", href: "/products/x-ray-systems" },
    secondaryCta: { label: "Talk to a Specialist", href: "/contact" },
  },

  dexa: {
    id: "dexa",
    nav: "DEXA",
    title: "Bone Densitometry Solutions",
    subtitle: "Accurate Osteoporosis Assessment",
    description:
      "Full-body DEXA platforms for osteoporosis screening, orthopedic assessment and body composition analysis — with installation, QC protocols and clinical training included.",
    image: dexa,
    imageAlt: "DEXA bone densitometry system supplied by AbuFarha Medical",
    features: [
      f("installation", "Installation", "Room setup, positioning and system integration"),
      f("commissioning", "Commissioning", "Acceptance testing and reference scans"),
      f("calibration", "QC & Calibration", "Daily phantom QC routines established"),
      f("training", "Clinical Training", "Scan technique and reporting training"),
      f("support", "Clinical Support", "Ongoing application guidance for your team"),
      f("maintenance", "Preventive Maintenance", "Planned service that protects accuracy"),
    ],
    applications: [
      "Osteoporosis screening",
      "Fracture risk assessment",
      "Body composition analysis",
      "Longitudinal monitoring",
    ],
    facilities: ["Clinics", "Endocrinology centers", "Hospitals", "Diagnostic centers"],
    primaryCta: { label: "Explore Bone Densitometers", href: "/products/bone-densitometers" },
    secondaryCta: { label: "Talk to a Specialist", href: "/contact" },
  },

  lithotripsy: {
    id: "lithotripsy",
    nav: "Lithotripsy",
    title: "Lithotripsy (ESWL) Solutions",
    subtitle: "Non-Invasive Stone Treatment Programmes",
    description:
      "Extracorporeal shockwave lithotripsy platforms for urology departments — with room integration, commissioning, urologist training and preventive service programmes.",
    image: eswl,
    imageAlt: "Extracorporeal shockwave lithotripsy system supported by AbuFarha Medical",
    features: [
      f("workflow", "Room Integration", "Treatment room planning around patient flow"),
      f("installation", "Installation", "Delivery, setup and imaging alignment"),
      f("commissioning", "Commissioning", "Acceptance testing and targeting verification"),
      f("training", "Urologist Training", "Treatment technique and safety training"),
      f("parts", "OEM Spare Parts", "Consumables and genuine parts supply"),
      f("maintenance", "Preventive Maintenance", "Planned service across treatment schedules"),
    ],
    applications: [
      "Kidney stone treatment",
      "Ureteral stone treatment",
      "Follow-up assessment",
    ],
    facilities: ["Urology centers", "Hospitals", "Private clinics"],
    primaryCta: { label: "Explore Lithotripsy Systems", href: "/products/lithotripsy-eswl" },
    secondaryCta: { label: "Talk to a Specialist", href: "/contact" },
  },
};

/** Fallback used for SSR and for any category without dedicated content. */
export const DEFAULT_SOLUTION_ID = "cath-lab";

export function getCategorySolution(id: string): CategorySolution {
  return CATEGORY_SOLUTIONS[id] ?? CATEGORY_SOLUTIONS[DEFAULT_SOLUTION_ID];
}

export const CORE_SERVICE_FEATURES = CORE_SERVICE;

/* ---------------------------------------------------------------------- */
/* Tiny external store                                                     */
/* ---------------------------------------------------------------------- */

let activeCategoryId = DEFAULT_SOLUTION_ID;
const listeners = new Set<() => void>();

export function setActiveCategoryId(id: string) {
  if (id === activeCategoryId) return;
  activeCategoryId = id;
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return activeCategoryId;
}

function getServerSnapshot() {
  return DEFAULT_SOLUTION_ID;
}

export function useActiveCategoryId() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
