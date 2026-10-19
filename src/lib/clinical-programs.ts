/**
 * Clinical program pages — content for every `/programs/*` page.
 *
 * Each program is keyed to an entry in `CLINICAL_SOLUTIONS` (the homepage
 * "Complete Care Pathways" tabs), which stays the single source for the
 * program's tab label, CTA route and image. This file only adds the long-form
 * page copy. Copy describes workflows and AbuFarha's supply / engineering /
 * training / support role only — no outcome claims, statistics or specs.
 */
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Brain,
  Cable,
  ClipboardCheck,
  Gauge,
  GraduationCap,
  HeartPulse,
  Monitor,
  ScanLine,
  ShieldCheck,
  Timer,
  TrendingUp,
  Wrench,
  Footprints,
  Radiation,
  Syringe,
} from "lucide-react";
import { CLINICAL_SOLUTIONS, type ClinicalSolution } from "@/lib/clinical-solutions";

export type ProgramNode = {
  icon: LucideIcon;
  category: string;
  title: string;
  copy: string;
};

export type ClinicalProgram = {
  /** Matches `ClinicalSolution.id`. */
  solutionId: string;
  path: string;
  /** Short program name used on the /programs directory. */
  name: string;
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  /** Exactly six: three left (first = primary), three right (first = primary). */
  nodes: [ProgramNode, ProgramNode, ProgramNode, ProgramNode, ProgramNode, ProgramNode];
  /** Anatomical illustration (stroke) vs. clinical photograph. */
  anatomical: boolean;
  invitation: string;
  footnote: string;
  secondaryCta: string;
  visitPoints: string[];
  visit: {
    headline: string;
    lead: string;
    specialistsLabel: string;
    specialistsHighlight: string;
    workflowLabel: string;
    workflowHighlight: string;
    bannerLead: string;
    bannerBody: string;
  };
  seo: { title: string; description: string; ogDescription: string };
  /** Knowledge graph reference for the related-content section. */
  knowledgeRef: string;
};

const VISIT_COMMON = (specialists: string, workflow: string) => [
  `Meet our ${specialists}`,
  "Meet our biomedical engineering team",
  "Tour AbuFarha headquarters",
  "Explore our engineering laboratories",
  "Visit our medical equipment warehouse",
  `Observe ${workflow}`,
  "Visit hospitals using our technologies",
  "Exchange knowledge with our leadership team",
];

export const CLINICAL_PROGRAMS: ClinicalProgram[] = [
  {
    solutionId: "stroke-programs",
    path: "/programs/stroke-care",
    name: "Stroke Care",
    eyebrow: "The Stroke Care Ecosystem",
    headline: "A Stroke Program Is an Ecosystem —",
    headlineAccent: "Not a Single Device.",
    intro:
      "When a cerebral artery is blocked, brain tissue is lost every minute until blood flow is restored. Restoring it in time depends on precision imaging, rapid clinical decisions, biomedical engineering, efficient workflows and reliable technical support acting as one system. Each element below explains how it protects the patient's brain — and how AbuFarha helps hospitals bring them together.",
    nodes: [
      {
        icon: Gauge,
        category: "Patient Impact",
        title: "Save Brain Tissue Faster",
        copy: "Early diagnosis and rapid intervention help preserve healthy brain tissue and reduce permanent neurological damage.",
      },
      {
        icon: Timer,
        category: "Clinical Workflow",
        title: "Reduce Treatment Delays",
        copy: "Efficient clinical workflows shorten the time between diagnosis and intervention, improving the chances of successful recovery.",
      },
      {
        icon: Brain,
        category: "Patient Outcome",
        title: "Improve Functional Recovery",
        copy: "Integrated stroke pathways increase the likelihood of better neurological recovery and a faster return to independent living.",
      },
      {
        icon: ScanLine,
        category: "Technology",
        title: "Precision Neurovascular Imaging",
        copy: "High-resolution imaging helps physicians identify blocked vessels quickly and perform safer, more accurate interventions.",
      },
      {
        icon: TrendingUp,
        category: "Hospital Value",
        title: "Increase Stroke Center Performance",
        copy: "Reliable technology, optimized workflows and trained clinical teams improve operational efficiency and strengthen hospital performance.",
      },
      {
        icon: ShieldCheck,
        category: "Long-Term Success",
        title: "Build Sustainable Stroke Services",
        copy: "Continuous biomedical engineering, preventive maintenance and clinical education help hospitals deliver reliable stroke care for years.",
      },
    ],
    anatomical: true,
    invitation:
      "We invite healthcare leaders, physicians and biomedical engineers to experience firsthand how comprehensive stroke programs are planned, engineered, implemented and supported before making one of their hospital's most important technology investments.",
    footnote:
      "Helping hospitals build comprehensive stroke programs across Africa and the Middle East since 1999.",
    secondaryCta: "Talk With Our Stroke Program Team",
    visitPoints: VISIT_COMMON("stroke physicians", "comprehensive stroke workflows"),
    visit: {
      headline: "Experience Comprehensive Stroke Programs",
      lead: "comprehensive stroke programs",
      specialistsLabel: "Meet our Stroke Physicians",
      specialistsHighlight: "Stroke Physicians",
      workflowLabel: "Observe Comprehensive Stroke Workflows",
      workflowHighlight: "Comprehensive Stroke Workflows",
      bannerLead: "Helping hospitals build comprehensive stroke programs across",
      bannerBody:
        "From planning and procurement to installation, training, and long-term support, AbuFarha partners with hospitals to deliver sustainable stroke care solutions.",
    },
    seo: {
      title: "Comprehensive Stroke Programs | AbuFarha Medical",
      description:
        "How AbuFarha helps hospitals build complete stroke programs — precision neurovascular imaging, integrated clinical workflows, biomedical engineering and lifetime technical support.",
      ogDescription:
        "A stroke program is an ecosystem, not a single device. Explore how AbuFarha plans, engineers, implements and supports advanced stroke care.",
    },
    knowledgeRef: "clinical-application:stroke",
  },
  {
    solutionId: "neuro-imaging",
    path: "/programs/neuro-imaging",
    name: "Neuro Imaging",
    eyebrow: "The Neuro Imaging Program",
    headline: "Neuro Imaging Is a Workflow —",
    headlineAccent: "Not a Single Scanner.",
    intro:
      "Non-contrast CT, CT angiography and CT perfusion, together with MRI diffusion-weighted sequences, are used to distinguish ischaemic from haemorrhagic stroke and to characterise brain tissue before treatment. Reproducible neuroimaging depends on the scanner, the room it is installed in, the protocols it runs and the team that operates it. Each element below explains one part of that workflow — and how AbuFarha helps hospitals deliver it.",
    nodes: [
      {
        icon: ScanLine,
        category: "CT Imaging",
        title: "CT, CT Angiography & Perfusion",
        copy: "Non-contrast CT, CT angiography and CT perfusion support the first diagnostic decisions in the acute neurological pathway.",
      },
      {
        icon: Brain,
        category: "MRI Imaging",
        title: "MRI Diffusion Imaging",
        copy: "Diffusion-weighted MRI sequences help clinicians characterise affected brain tissue alongside CT findings.",
      },
      {
        icon: Activity,
        category: "Neurovascular",
        title: "Cerebral Vascular Visualisation",
        copy: "Angiographic CT and MR techniques visualise the cerebral vessels that guide treatment planning.",
      },
      {
        icon: Wrench,
        category: "Engineering",
        title: "Room Planning & Installation",
        copy: "Room planning, shielding, power and cooling are engineered as one package before the scanner is installed.",
      },
      {
        icon: ClipboardCheck,
        category: "Quality",
        title: "Acceptance Testing & Protocols",
        copy: "Acceptance testing, QA and protocol optimisation are completed so image quality is reproducible from the first patient onward.",
      },
      {
        icon: GraduationCap,
        category: "Long-Term Support",
        title: "Radiographer Training & Service",
        copy: "Application specialists stay involved after handover, refining sequences and dose protocols with your radiology team.",
      },
    ],
    anatomical: false,
    invitation:
      "We invite radiology leaders, radiographers and biomedical engineers to see firsthand how neuroimaging suites are planned, engineered, commissioned and supported before making their next imaging investment.",
    footnote:
      "Supplying, installing and supporting medical imaging technology across Africa and the Middle East since 1999.",
    secondaryCta: "Talk With Our Imaging Team",
    visitPoints: VISIT_COMMON("application specialists", "neuroimaging workflows"),
    visit: {
      headline: "Experience Neuro Imaging Programs",
      lead: "neuroimaging programs",
      specialistsLabel: "Meet our Application Specialists",
      specialistsHighlight: "Application Specialists",
      workflowLabel: "Observe Neuro Imaging Workflows",
      workflowHighlight: "Neuro Imaging Workflows",
      bannerLead: "Supporting hospital neuroimaging services across",
      bannerBody:
        "From room planning and installation to acceptance testing, protocol optimisation and long-term service, AbuFarha supports every stage of your imaging program.",
    },
    seo: {
      title: "Neuro Imaging Programs | AbuFarha Medical",
      description:
        "CT, CT angiography, CT perfusion and MRI diffusion workflows for neurological imaging — supplied, installed, commissioned and supported by AbuFarha.",
      ogDescription:
        "Neuro imaging is a workflow, not a single scanner. See how AbuFarha plans, installs, tests and supports neuroimaging suites.",
    },
    knowledgeRef: "clinical-application:stroke",
  },
  {
    solutionId: "interventional-neurology",
    path: "/programs/interventional-neurology",
    name: "Interventional Neurology",
    eyebrow: "The Interventional Neurology Program",
    headline: "Neurointervention Is a Suite —",
    headlineAccent: "Not a Single System.",
    intro:
      "Endovascular treatment of large-vessel occlusion is performed in an angiography suite, where cerebral angiography and real-time fluoroscopy guide catheter navigation and device deployment. The suite depends on the imaging system, monitor wall, hemodynamic integration, radiation protection and a rehearsed team. Each element below explains one part of that suite — and how AbuFarha helps hospitals deliver it.",
    nodes: [
      {
        icon: Syringe,
        category: "Procedure",
        title: "Mechanical Thrombectomy",
        copy: "Endovascular removal of a large-vessel occlusion is performed under angiographic guidance in a dedicated suite.",
      },
      {
        icon: ScanLine,
        category: "Imaging",
        title: "Cerebral Angiography",
        copy: "Angiographic imaging of the cerebral vessels supports diagnosis and planning of neurovascular intervention.",
      },
      {
        icon: Monitor,
        category: "Guidance",
        title: "Real-Time Fluoroscopy",
        copy: "Live fluoroscopy and the monitor wall guide catheter navigation and device deployment during the procedure.",
      },
      {
        icon: HeartPulse,
        category: "Integration",
        title: "Hemodynamic Integration",
        copy: "Hemodynamic recording is integrated into the suite so the team works from one clinical view.",
      },
      {
        icon: Radiation,
        category: "Safety",
        title: "Radiation Protection",
        copy: "Shielding and dose verification are completed during commissioning, before the first case.",
      },
      {
        icon: ClipboardCheck,
        category: "Handover",
        title: "Commissioning & Team Rehearsal",
        copy: "Workflow rehearsal with the interventional team and documented handover support procurement and accreditation files.",
      },
    ],
    anatomical: false,
    invitation:
      "We invite interventional physicians, cath lab teams and biomedical engineers to see firsthand how angiography suites are planned, installed, commissioned and supported before making their next interventional investment.",
    footnote:
      "Supplying, installing and supporting interventional technology across Africa and the Middle East since 1999.",
    secondaryCta: "Talk With Our Interventional Team",
    visitPoints: VISIT_COMMON("application specialists", "interventional suite workflows"),
    visit: {
      headline: "Experience Interventional Neurology Programs",
      lead: "interventional neurology suites",
      specialistsLabel: "Meet our Application Specialists",
      specialistsHighlight: "Application Specialists",
      workflowLabel: "Observe Interventional Suite Workflows",
      workflowHighlight: "Interventional Suite Workflows",
      bannerLead: "Supporting interventional suites across",
      bannerBody:
        "From suite planning and radiation protection to installation, commissioning, consumables supply and long-term service, AbuFarha supports every stage of your interventional program.",
    },
    seo: {
      title: "Interventional Neurology Programs | AbuFarha Medical",
      description:
        "Angiography suites for cerebral angiography, mechanical thrombectomy and neurovascular intervention — installed, commissioned and supported by AbuFarha.",
      ogDescription:
        "Neurointervention is a suite, not a single system. See how AbuFarha delivers angiography, integration, radiation protection and commissioning.",
    },
    knowledgeRef: "clinical-application:stroke",
  },
  {
    solutionId: "neuro-icu",
    path: "/programs/neuro-icu",
    name: "Neuro ICU",
    eyebrow: "The Neuro ICU Program",
    headline: "Neurocritical Care Is Connected —",
    headlineAccent: "Not a Single Bedside.",
    intro:
      "After treatment, patients are managed in a stroke unit or neuro intensive care setting where haemodynamic parameters, ventilation and neurological status are observed continuously by the clinical team. Monitoring, ventilation, infusion and central station networking must be specified together so data from every bed reaches the same clinical view. Each element below explains one part of that environment — and how AbuFarha helps hospitals deliver it.",
    nodes: [
      {
        icon: HeartPulse,
        category: "Monitoring",
        title: "Neurological Patient Monitoring",
        copy: "Bedside monitoring supports continuous observation of haemodynamic parameters and neurological status.",
      },
      {
        icon: Activity,
        category: "Respiratory",
        title: "Ventilation Integration",
        copy: "Ventilators are specified alongside monitoring so respiratory data joins the same clinical view.",
      },
      {
        icon: Syringe,
        category: "Bedside",
        title: "Infusion & Bedside Equipment",
        copy: "Infusion systems and bedside equipment are planned per bed as part of one critical-care specification.",
      },
      {
        icon: Cable,
        category: "Networking",
        title: "Central Station Networking",
        copy: "Central station integration brings data from every bed to the nursing station.",
      },
      {
        icon: GraduationCap,
        category: "Training",
        title: "Nursing Team Training",
        copy: "Nursing and clinical teams are trained on the installed monitoring and critical-care equipment.",
      },
      {
        icon: ShieldCheck,
        category: "Availability",
        title: "Preventive Maintenance & Parts",
        copy: "Preventive maintenance programmes and OEM spare-part supply keep critical-care equipment available around the clock.",
      },
    ],
    anatomical: false,
    invitation:
      "We invite critical-care leaders, nursing managers and biomedical engineers to see firsthand how neurocritical care environments are specified, integrated, commissioned and supported before their next investment.",
    footnote:
      "Supplying, installing and supporting critical-care technology across Africa and the Middle East since 1999.",
    secondaryCta: "Talk With Our Critical Care Team",
    visitPoints: VISIT_COMMON("application specialists", "critical-care workflows"),
    visit: {
      headline: "Experience Neuro ICU Programs",
      lead: "neurocritical care environments",
      specialistsLabel: "Meet our Application Specialists",
      specialistsHighlight: "Application Specialists",
      workflowLabel: "Observe Critical-Care Workflows",
      workflowHighlight: "Critical-Care Workflows",
      bannerLead: "Supporting neurocritical care across",
      bannerBody:
        "From specification and integration to installation, nursing training, preventive maintenance and spare-part supply, AbuFarha supports every stage of your critical-care program.",
    },
    seo: {
      title: "Neuro ICU Programs | AbuFarha Medical",
      description:
        "Patient monitoring, ventilation integration, infusion systems and central station networking for neurocritical care — supplied, installed and supported by AbuFarha.",
      ogDescription:
        "Neurocritical care is connected, not a single bedside. See how AbuFarha integrates monitoring, ventilation and central stations.",
    },
    knowledgeRef: "clinical-application:stroke",
  },
  {
    solutionId: "rehabilitation",
    path: "/programs/rehabilitation",
    name: "Rehabilitation",
    eyebrow: "The Rehabilitation Program",
    headline: "Recovery Is a Pathway —",
    headlineAccent: "Not a Single Session.",
    intro:
      "Rehabilitation begins early and continues after discharge, with mobility and functional assessment guiding physiotherapy, occupational therapy and structured follow-up for long-term neurological recovery. Therapy rooms must be equipped so assessment, training and follow-up take place with compatible, serviceable technology. Each element below explains one part of that pathway — and how AbuFarha helps hospitals deliver it.",
    nodes: [
      {
        icon: Footprints,
        category: "Assessment",
        title: "Mobility & Functional Assessment",
        copy: "Mobility and functional assessment guide the physiotherapy and occupational therapy plan.",
      },
      {
        icon: Activity,
        category: "Therapy",
        title: "Physiotherapy Technology",
        copy: "Therapy rooms are equipped with physiotherapy technology chosen with the rehabilitation team.",
      },
      {
        icon: ClipboardCheck,
        category: "Follow-Up",
        title: "Structured Follow-Up Care",
        copy: "Rehabilitation continues after discharge with structured follow-up for long-term neurological recovery.",
      },
      {
        icon: Wrench,
        category: "Equipping",
        title: "Therapy Room Equipping",
        copy: "Therapy rooms are equipped and commissioned so assessment, training and follow-up use compatible technology.",
      },
      {
        icon: GraduationCap,
        category: "Training",
        title: "Therapist Training",
        copy: "Therapists are trained on the installed rehabilitation equipment at handover.",
      },
      {
        icon: ShieldCheck,
        category: "Long-Term Support",
        title: "One Maintenance Partner",
        copy: "Rehabilitation equipment is serviced on the same maintenance agreements as imaging and interventional systems.",
      },
    ],
    anatomical: false,
    invitation:
      "We invite rehabilitation leaders, therapists and biomedical engineers to see firsthand how therapy rooms are equipped, commissioned and supported before their next rehabilitation investment.",
    footnote:
      "Supplying, installing and supporting medical technology across Africa and the Middle East since 1999.",
    secondaryCta: "Talk With Our Rehabilitation Team",
    visitPoints: VISIT_COMMON("application specialists", "rehabilitation workflows"),
    visit: {
      headline: "Experience Rehabilitation Programs",
      lead: "rehabilitation programs",
      specialistsLabel: "Meet our Application Specialists",
      specialistsHighlight: "Application Specialists",
      workflowLabel: "Observe Rehabilitation Workflows",
      workflowHighlight: "Rehabilitation Workflows",
      bannerLead: "Supporting neurological rehabilitation across",
      bannerBody:
        "From therapy room equipping and installation to therapist training and long-term maintenance, AbuFarha supports every stage of your rehabilitation program.",
    },
    seo: {
      title: "Neurological Rehabilitation Programs | AbuFarha Medical",
      description:
        "Therapy room equipping, physiotherapy technology, therapist training and long-term maintenance for neurological rehabilitation — delivered by AbuFarha.",
      ogDescription:
        "Recovery is a pathway, not a single session. See how AbuFarha equips, trains and supports rehabilitation services.",
    },
    knowledgeRef: "clinical-application:stroke",
  },
];

export function getClinicalProgram(path: string): ClinicalProgram {
  const p = CLINICAL_PROGRAMS.find((x) => x.path === path);
  if (!p) throw new Error(`Unknown clinical program: ${path}`);
  return p;
}

export function getProgramSolution(program: ClinicalProgram): ClinicalSolution {
  const s = CLINICAL_SOLUTIONS.find((x) => x.id === program.solutionId);
  if (!s) throw new Error(`Missing clinical solution: ${program.solutionId}`);
  return s;
}
