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
  description: string;
  /** Clinical workflow highlights. */
  highlights: string[];
  cta: { label: string; to: string };
  image: { src: string; alt: string };
};

export const CLINICAL_SOLUTIONS: ClinicalSolution[] = [
  {
    id: "stroke-programs",
    tab: "Stroke Programs",
    title: "Comprehensive Stroke Programs",
    description:
      "Acute stroke care is a time-dependent pathway rather than a single device: triage, imaging, treatment decision and intervention are coordinated as one workflow across the emergency department, radiology and the angiography suite.",
    highlights: [
      "Rapid stroke assessment",
      "CT / MRI diagnosis",
      "Thrombectomy pathway",
      "Clinical decision support",
    ],
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
      "Non-contrast CT, CT angiography and CT perfusion, together with MRI diffusion-weighted sequences, are used to distinguish ischaemic from haemorrhagic stroke and to characterise the affected brain tissue before treatment.",
    highlights: [
      "High-resolution brain imaging",
      "CT Perfusion",
      "MRI Diffusion",
      "Neurovascular visualization",
    ],
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
      "Endovascular treatment of large-vessel occlusion is performed in an angiography suite, where cerebral angiography and real-time fluoroscopy guide catheter navigation and device deployment.",
    highlights: [
      "Mechanical thrombectomy",
      "Cerebral angiography",
      "Neurovascular intervention",
      "Real-time fluoroscopy guidance",
    ],
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
      "After treatment, patients are managed in a stroke unit or neuro intensive care setting where haemodynamic parameters, ventilation and neurological status are observed continuously by the clinical team.",
    highlights: [
      "Patient monitoring",
      "Hemodynamic support",
      "Ventilation integration",
      "Continuous neurological assessment",
    ],
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
      "Rehabilitation begins early and continues after discharge, with mobility and functional assessment guiding physiotherapy, occupational therapy and structured follow-up for long-term neurological recovery.",
    highlights: [
      "Functional recovery",
      "Mobility assessment",
      "Follow-up care",
      "Long-term neurological recovery",
    ],
    cta: { label: "Explore Rehabilitation", to: "/products/others" },
    image: {
      src: rehabilitation,
      alt: "Physiotherapist assisting a patient with gait training between parallel bars in a stroke rehabilitation room",
    },
  },
];
