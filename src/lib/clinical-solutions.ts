/**
 * Clinical solutions showcase — single data model for the homepage
 * "Clinical Solutions" interactive module.
 *
 * Content follows established stroke-care terminology (WHO, American Stroke
 * Association, European Stroke Organisation) and describes clinical workflows
 * only — no performance claims, no statistics.
 */

import strokeWorkflow from "@/assets/stroke-brain-hero.jpg";
import neuroImaging from "@/assets/sol-mri.jpg";
import interventional from "@/assets/why-cathlab.jpg";
import neuroIcu from "@/assets/clinical-neuro-icu.jpg";
import rehabilitation from "@/assets/clinical-rehabilitation.jpg";

export type ClinicalSolution = {
  id: string;
  /** Short pill label. */
  tab: string;
  title: string;
  /** Render the panel title in the brand accent. */
  accentTitle?: boolean;
  description: string;
  /** Clinical workflow highlights. */
  highlights: string[];
  /** Short supporting paragraph closing the content block. */
  note: string;
  cta: { label: string; to: string };
  image: { src: string; alt: string };
};

export const CLINICAL_SOLUTIONS: ClinicalSolution[] = [
  {
    id: "stroke-programs",
    tab: "Stroke Programs",
    title: "Comprehensive Stroke Programs",
    accentTitle: true,
    description:
      "Acute stroke care is a time-dependent pathway rather than a single device: triage, imaging, treatment decision and intervention are coordinated as one workflow across the emergency department, radiology and the angiography suite. We equip and commission each step of that chain — from the CT room that confirms the diagnosis to the interventional suite where the occlusion is treated — so the clinical team works with one consistent standard of technology.",
    highlights: [
      "Rapid stroke assessment",
      "CT / MRI diagnosis",
      "Thrombectomy pathway",
      "Clinical decision support",
      "Emergency-to-angio coordination",
      "Stroke unit monitoring",
      "Team training & protocols",
    ],
    note: "Every programme is planned with your clinical and biomedical teams, installed and commissioned by our engineers, and supported for the full lifecycle of the installed technology.",
    cta: { label: "Explore Stroke Programs", to: "/programs/stroke-care" },
    image: {
      src: strokeWorkflow,
      alt: "Anatomical illustration of the cerebral arteries with an occluded vessel, representing the acute stroke workflow",
    },
  },
  {
    id: "neuro-imaging",
    tab: "Neuro Imaging",
    title: "Neuro Imaging",
    description:
      "Non-contrast CT, CT angiography and CT perfusion, together with MRI diffusion-weighted sequences, are used to distinguish ischaemic from haemorrhagic stroke and to characterise the affected brain tissue before treatment. Room planning, shielding, power and cooling, acceptance testing and protocol optimisation are delivered as one engineering package so image quality is reproducible from the first patient onward.",
    highlights: [
      "High-resolution brain imaging",
      "CT Perfusion",
      "MRI Diffusion",
      "Neurovascular visualization",
      "Protocol optimisation",
      "Acceptance testing & QA",
      "Radiographer training",
    ],
    note: "Application specialists remain involved after handover, refining sequences and dose protocols alongside your radiology team.",
    cta: { label: "Explore Neuro Imaging", to: "/products/mri-scanners" },
    image: {
      src: neuroImaging,
      alt: "MRI scanner installed in a hospital imaging suite used for neurological examinations",
    },
  },
  {
    id: "interventional-neurology",
    tab: "Interventional Neurology",
    title: "Interventional Neurology",
    description:
      "Endovascular treatment of large-vessel occlusion is performed in an angiography suite, where cerebral angiography and real-time fluoroscopy guide catheter navigation and device deployment. We deliver the complete suite — angiography system, monitor wall, hemodynamic integration and radiation protection — installed, commissioned and validated before the first case.",
    highlights: [
      "Mechanical thrombectomy",
      "Cerebral angiography",
      "Neurovascular intervention",
      "Real-time fluoroscopy guidance",
      "Hemodynamic integration",
      "Radiation protection",
      "Consumables & device supply",
    ],
    note: "Commissioning includes dose verification, workflow rehearsal with the interventional team and documented handover for procurement and accreditation files.",
    cta: { label: "Explore Neuro Intervention", to: "/products/cath-lab" },
    image: {
      src: interventional,
      alt: "Interventional cath lab with angiography system prepared for a neurovascular procedure",
    },
  },
  {
    id: "neuro-icu",
    tab: "Neuro ICU",
    title: "Neurocritical Care",
    description:
      "After treatment, patients are managed in a stroke unit or neuro intensive care setting where haemodynamic parameters, ventilation and neurological status are observed continuously by the clinical team. Monitoring, ventilation and central station integration are specified together so data from every bed reaches the same clinical view.",
    highlights: [
      "Patient monitoring",
      "Hemodynamic support",
      "Ventilation integration",
      "Continuous neurological assessment",
      "Central station networking",
      "Infusion & bedside equipment",
      "Nursing team training",
    ],
    note: "Preventive maintenance programmes and OEM spare-part supply keep critical-care equipment available around the clock.",
    cta: { label: "Explore Critical Care", to: "/products/others" },
    image: {
      src: neuroIcu,
      alt: "Clinician reviewing vital signs on a patient monitor beside a ventilated patient in a neuro intensive care unit",
    },
  },
  {
    id: "rehabilitation",
    tab: "Rehabilitation",
    title: "Stroke Rehabilitation",
    description:
      "Rehabilitation begins early and continues after discharge, with mobility and functional assessment guiding physiotherapy, occupational therapy and structured follow-up for long-term neurological recovery. Therapy rooms are equipped and commissioned so assessment, training and follow-up all take place with compatible, serviceable technology.",
    highlights: [
      "Functional recovery",
      "Mobility assessment",
      "Follow-up care",
      "Long-term neurological recovery",
      "Therapy room equipping",
      "Physiotherapy technology",
      "Therapist training",
    ],
    note: "Our engineers service rehabilitation equipment on the same maintenance agreements as imaging and interventional systems — one partner across the pathway.",
    cta: { label: "Explore Rehabilitation", to: "/products/others" },
    image: {
      src: rehabilitation,
      alt: "Physiotherapist assisting a patient with gait training between parallel bars in a stroke rehabilitation room",
    },
  },
];
