/**
 * Category enrichment content for Product Category landing pages.
 *
 * Source rules (Enterprise Data Governance):
 *  - Company facts come from `src/config/companyFacts.ts` — never hardcode.
 *  - No fabricated statistics, no invented OEM certifications, no unverified claims.
 *  - Clinical descriptions describe the modality in general professional terms,
 *    not manufacturer-specific specifications. Every AbuFarha capability
 *    referenced below (supply, site planning, installation, commissioning,
 *    biomedical engineering, preventive maintenance, clinical training,
 *    refurbishment inspection, warranty) is a verified service.
 *
 * Keyed by category route slug (see `CATEGORY_SLUGS`).
 */

export type CategoryFAQ = { question: string; answer: string };

export type CategoryContent = {
  /** Short lead paragraph shown directly under the hero. */
  intro: string;
  /** 3–5 clinical / operational applications. */
  applications: string[];
  /** Buyer / procurement considerations. */
  buyerConsiderations: string[];
  /** AbuFarha support services relevant to this modality (label + service page hash/anchor). */
  supportServices: { label: string; href: string; anchor?: string }[];
  /** 4–8 FAQPage-schema questions. */
  faqs: CategoryFAQ[];
  /** Related category slugs for cross-linking. */
  related: string[];
};

/** Map from PRODUCTS `category` field to landing-page slug. */
export const CATEGORY_NAME_TO_SLUG: Record<string, string> = {
  "Cath Lab Systems": "cath-lab",
  "PET/CT Scanners": "pet-ct-scanners",
  "MRI Scanners": "mri-scanners",
  "CT Scanners": "ct-scanners",
  Mammography: "mammography-systems",
  "Bone Densitometers (DEXA)": "bone-densitometers",
  "Lithotripsy Systems": "lithotripsy-eswl",
};

const SERVICE_LINKS = {
  turnkey: { label: "Turnkey project delivery", href: "/turnkey" },
  aftersales: { label: "After-sales & preventive maintenance", href: "/after-sales" },
  services: { label: "Biomedical engineering services", href: "/services" },
  training: { label: "Clinical & operator training", href: "/services" },
  contact: { label: "Talk to a biomedical engineer", href: "/contact" },
} as const;

export const CATEGORY_CONTENT: Record<string, CategoryContent> = {
  "mri-scanners": {
    intro:
      "Magnetic Resonance Imaging (MRI) uses strong magnetic fields and radiofrequency pulses to produce high-contrast, non-ionising cross-sectional images of soft tissue. Whole-body 1.5T systems remain the workhorse of general radiology, while 3T platforms deliver the signal-to-noise ratio needed for advanced neurological, musculoskeletal, cardiac and oncology protocols. AbuFarha supplies MRI systems from Philips, Siemens Healthineers and GE HealthCare — new and Certified Refurbished — and delivers the full project: RF shielding, magnet room design, cryogen logistics, quench pipe routing, chiller integration, commissioning, ACR-style acceptance testing, radiographer training and long-term preventive maintenance by our in-house biomedical engineers.",
    applications: [
      "Neurological imaging — stroke, tumour, MS and epilepsy workups",
      "Musculoskeletal imaging — joints, spine and sports injuries",
      "Body imaging — abdominal, pelvic and oncological staging",
      "Cardiac MRI — function, perfusion and viability studies",
      "Breast MRI as a complement to mammography for high-risk screening",
    ],
    buyerConsiderations: [
      "Field strength (1.5T vs 3T) matched to case mix and clinical priorities",
      "Bore size and patient throughput requirements",
      "Room readiness — RF shielding, floor loading, HVAC and cryogen handling",
      "Coil configuration for planned clinical protocols",
      "Warranty scope, spare-part strategy and preventive-maintenance coverage",
    ],
    supportServices: [
      SERVICE_LINKS.turnkey,
      SERVICE_LINKS.aftersales,
      SERVICE_LINKS.services,
      SERVICE_LINKS.training,
    ],
    faqs: [
      {
        question: "Should we choose a 1.5T or a 3T MRI?",
        answer:
          "1.5T systems cover the vast majority of general-radiology indications with excellent image quality and lower siting requirements. 3T is preferred where higher signal-to-noise directly benefits protocols — advanced neuro, MSK, cardiac and research work. Our biomedical engineers help match field strength to your case mix, patient volume and room constraints before quoting.",
      },
      {
        question: "Do you supply refurbished MRI systems?",
        answer:
          "Yes. Our Certified Refurbished MRI systems are professionally inspected, tested and re-certified before delivery. Every refurbished system is supplied with the same installation, commissioning and warranty pathway as a new unit.",
      },
      {
        question: "What is included in an MRI turnkey installation?",
        answer:
          "Site survey, magnet-room design, RF and magnetic shielding, floor reinforcement review, HVAC and chiller coordination, cryogen and quench-pipe routing, magnet delivery and rigging, ramp-up, coil calibration, acceptance testing, radiographer training and handover documentation.",
      },
      {
        question: "What warranty is offered on MRI systems?",
        answer:
          "Every AbuFarha-supplied MRI system is backed by a standard manufacturer warranty covering parts and labour, extendable through our preventive-maintenance contracts.",
      },
      {
        question: "Do you provide long-term service and preventive maintenance?",
        answer:
          "Yes. Our in-house biomedical engineering team provides scheduled preventive maintenance, remote diagnostics support, corrective service and spare-part logistics across Africa and the Middle East.",
      },
      {
        question: "Which clinical staff do you train after installation?",
        answer:
          "Radiographers, MRI technologists and radiologists are trained on system operation, standard protocols and safety procedures during commissioning, with refresher and applications support available afterwards.",
      },
    ],
    related: ["ct-scanners", "pet-ct-scanners", "x-ray-systems"],
  },

  "ct-scanners": {
    intro:
      "Computed Tomography (CT) combines rotating X-ray tubes with detector arrays and reconstruction algorithms to produce fast, high-resolution volumetric imaging. Modern multi-slice systems support routine emergency and oncology workflows as well as dedicated cardiac, vascular and interventional protocols. AbuFarha supplies multi-slice CT systems from Canon Medical (formerly Toshiba), GE HealthCare, Siemens Healthineers and Philips — new and Certified Refurbished — and manages the complete deployment: shielded-room design, power and cooling coordination, gantry rigging, tube commissioning, dose-optimisation setup, radiographer training and ongoing preventive maintenance by our biomedical engineering team.",
    applications: [
      "Emergency and trauma imaging (head, chest, abdomen, spine)",
      "Oncology staging and follow-up imaging",
      "Cardiac CT and CT coronary angiography",
      "Vascular and interventional planning",
      "Pulmonary, hepatic and urological workups",
    ],
    buyerConsiderations: [
      "Slice count and rotation speed matched to case mix and throughput",
      "Detector configuration for cardiac or vascular workloads",
      "Room readiness — lead shielding, power quality, HVAC",
      "Tube life and replacement strategy",
      "Dose-optimisation and iterative-reconstruction features",
    ],
    supportServices: [
      SERVICE_LINKS.turnkey,
      SERVICE_LINKS.aftersales,
      SERVICE_LINKS.services,
      SERVICE_LINKS.training,
    ],
    faqs: [
      {
        question: "How many slices do we actually need?",
        answer:
          "Slice count should be driven by case mix. 16–64 slice systems cover routine emergency, oncology and general imaging. Higher slice counts are indicated when cardiac CT, complex vascular work or advanced perfusion protocols are a routine part of the workload. We help right-size the platform to avoid over- or under-investment.",
      },
      {
        question: "Do you supply refurbished CT scanners?",
        answer:
          "Yes. Certified Refurbished CT systems are professionally inspected and tested, delivered with the same installation, commissioning and warranty pathway as new units.",
      },
      {
        question: "What is included in a CT turnkey project?",
        answer:
          "Room design and lead-shielding review, power and UPS coordination, HVAC sizing, gantry delivery and rigging, tube installation, calibration, acceptance testing, dose-optimisation setup, radiographer training and full handover documentation.",
      },
      {
        question: "How is X-ray tube life managed?",
        answer:
          "Tube health is monitored during preventive-maintenance visits. When replacement is required, our team coordinates OEM-sourced tubes and performs the swap-out and re-calibration with minimal downtime.",
      },
      {
        question: "What warranty is supplied?",
        answer:
          "Every CT system is backed by a standard manufacturer warranty covering parts and labour, extendable through our preventive-maintenance contracts.",
      },
      {
        question: "Can you support hybrid rooms and PET/CT deployments?",
        answer:
          "Yes. Our biomedical engineering team routinely integrates CT rooms with adjacent modalities such as PET/CT and interventional cath-lab suites, including workflow, PACS and shielding coordination.",
      },
    ],
    related: ["pet-ct-scanners", "mri-scanners", "x-ray-systems"],
  },

  "pet-ct-scanners": {
    intro:
      "Positron Emission Tomography combined with CT (PET/CT) fuses functional radiotracer imaging with high-resolution anatomical CT, providing the reference standard for oncology staging, treatment response assessment and a growing set of cardiac and neurological indications. Deploying PET/CT is a complex, multi-disciplinary project — hot-lab and radiopharmacy planning, radiation-protection design, shielded-room construction, radiotracer logistics and clinical workflow must all be aligned before imaging begins. AbuFarha delivers this end-to-end: system supply from leading OEMs, site design, shielding, installation, physics acceptance, workflow integration with PACS and RIS, and long-term preventive maintenance from our biomedical engineering team.",
    applications: [
      "Oncology staging, restaging and treatment-response assessment",
      "Cardiac viability and perfusion imaging",
      "Neurological imaging — dementia workup, epilepsy foci",
      "Infection and inflammation imaging",
      "Radiotherapy planning support",
    ],
    buyerConsiderations: [
      "Radiopharmacy strategy — on-site cyclotron vs regional tracer supply",
      "Shielded room and hot-lab design",
      "Detector technology and time-of-flight capability",
      "Integration with radiation-oncology and PACS/RIS",
      "Preventive-maintenance and physics-QA coverage",
    ],
    supportServices: [
      SERVICE_LINKS.turnkey,
      SERVICE_LINKS.aftersales,
      SERVICE_LINKS.services,
      SERVICE_LINKS.training,
    ],
    faqs: [
      {
        question: "What does a full PET/CT project involve?",
        answer:
          "A PET/CT project covers system supply, hot-lab and shielded-room design, radiation-protection sign-off, power and HVAC coordination, tracer logistics planning, gantry installation, physics acceptance and QA setup, workflow integration and clinical training.",
      },
      {
        question: "Do you support both on-site cyclotron and delivered-tracer models?",
        answer:
          "Yes. Our project team helps hospitals decide between on-site radiopharmacy and third-party tracer delivery based on case volume, geography and regulatory environment.",
      },
      {
        question: "Which radiotracers are typically supported?",
        answer:
          "Modern PET/CT systems support the standard clinical tracer set — including FDG for oncology and the growing family of specific-target tracers — subject to local radiopharmacy availability.",
      },
      {
        question: "What warranty and service coverage is available?",
        answer:
          "Every AbuFarha-supplied PET/CT system is backed by a standard manufacturer warranty and can be enrolled in a preventive-maintenance contract covering scheduled service, physics QA support and priority spare-part logistics.",
      },
      {
        question: "Do you offer refurbished PET/CT systems?",
        answer:
          "Yes. Certified Refurbished PET/CT systems are available when new-system budget or lead time is a constraint, delivered with the same installation and warranty pathway as new units.",
      },
      {
        question: "How long does a typical PET/CT deployment take?",
        answer:
          "Project duration depends on room readiness and shielding scope. Once civil works are complete, gantry installation, commissioning and physics acceptance typically run for several weeks before clinical go-live.",
      },
    ],
    related: ["ct-scanners", "mri-scanners", "cath-lab"],
  },

  "cath-lab": {
    intro:
      "A cardiac catheterisation laboratory (cath lab) is a specialised interventional suite built around a high-performance fluoroscopy system for diagnostic and therapeutic procedures on the heart and vasculature. Modern single-plane and bi-plane systems deliver low-dose, high-detail imaging for coronary angiography, PCI, structural-heart interventions, electrophysiology and peripheral vascular work. AbuFarha delivers the full cath-lab project — system supply, room design, lead shielding, power and UPS, hemodynamic and recording integration, boom and lighting coordination, commissioning, physics acceptance and long-term biomedical engineering support — alongside consumables such as drug-eluting stents from OEM-certified partners.",
    applications: [
      "Coronary angiography and percutaneous coronary intervention (PCI)",
      "Structural-heart interventions (TAVI, mitral, ASD/PFO closure)",
      "Electrophysiology and device implantation",
      "Peripheral vascular and neuro-interventional procedures",
      "Emergency primary-PCI programmes",
    ],
    buyerConsiderations: [
      "Single-plane vs bi-plane based on planned case mix",
      "Detector size, dose-management features and image-processing chain",
      "Room dimensions, lead-shielding calculations and boom layout",
      "Hemodynamic recording and PACS/RIS integration",
      "Uptime targets and preventive-maintenance coverage for primary-PCI hospitals",
    ],
    supportServices: [SERVICE_LINKS.turnkey, SERVICE_LINKS.aftersales, SERVICE_LINKS.services],
    faqs: [
      {
        question: "Single-plane or bi-plane — which do we need?",
        answer:
          "Single-plane suites cover the vast majority of coronary work and are the standard for most centres. Bi-plane systems reduce contrast load and procedure time for complex neuro-interventional, paediatric and electrophysiology cases; we help match configuration to planned case mix.",
      },
      {
        question: "Do you supply cath-lab consumables such as drug-eluting stents?",
        answer:
          "Yes. AbuFarha supplies drug-eluting stents and related interventional consumables from OEM-certified partners alongside the imaging platform.",
      },
      {
        question: "How is uptime protected for a primary-PCI service?",
        answer:
          "We build preventive-maintenance schedules, spare-part stocking and priority response into service contracts for hospitals running 24/7 primary-PCI programmes.",
      },
      {
        question: "What does room readiness involve?",
        answer:
          "Structural review, lead-shielding design, HVAC and clean-air coordination, medical-gas provision, UPS and generator backup, boom and lighting layout, and cabling for hemodynamic, recording and PACS integration.",
      },
      {
        question: "Are refurbished cath-lab systems available?",
        answer:
          "Yes. Certified Refurbished cath-lab systems are professionally inspected and re-certified, and are delivered with the same installation, commissioning and warranty pathway as new systems.",
      },
      {
        question: "Do you provide clinical and technical training?",
        answer:
          "Yes. Radiographers, cath-lab technicians and biomedical engineers receive operational and safety training during commissioning, with applications and refresher support available afterwards.",
      },
    ],
    related: ["drug-eluting-stents", "c-arm-systems", "x-ray-systems"],
  },

  "drug-eluting-stents": {
    intro:
      "Drug-eluting stents (DES) are the interventional standard of care for treating obstructive coronary artery disease, releasing an antiproliferative drug from a polymer coating on a fine metallic scaffold to reduce restenosis after percutaneous coronary intervention. AbuFarha supplies coronary DES and related interventional consumables from OEM-certified partners for cath-lab programmes across Africa and the Middle East, alongside the imaging platforms, hemodynamic recording and biomedical engineering support that keep primary-PCI services running.",
    applications: [
      "Elective and urgent percutaneous coronary intervention (PCI)",
      "Primary PCI for acute coronary syndromes",
      "Multi-vessel and complex lesion treatment",
      "Bifurcation and left-main stenting with dedicated platforms",
      "Support consumables for cath-lab programmes",
    ],
    buyerConsiderations: [
      "Platform choice (drug, polymer, strut thickness) matched to clinical protocol",
      "Diameter and length range required for local case mix",
      "Compatibility with existing PCI accessories",
      "Sterile-inventory strategy and stock rotation",
      "Reliable OEM-certified supply chain and lead times",
    ],
    supportServices: [SERVICE_LINKS.aftersales, SERVICE_LINKS.services, SERVICE_LINKS.contact],
    faqs: [
      {
        question: "Which DES platforms do you supply?",
        answer:
          "AbuFarha supplies coronary drug-eluting stents from OEM-certified partners; specific platforms, diameters and length ranges are confirmed at quote based on availability and clinical requirements.",
      },
      {
        question: "Are your stents supplied through official OEM channels?",
        answer:
          "Yes. All interventional consumables are supplied through OEM-certified channels with full traceability and regulatory documentation.",
      },
      {
        question: "Can you support long-term consumable supply for a PCI programme?",
        answer:
          "Yes. We work with hospitals to plan sterile-inventory levels, forecasting and reorder cadence so that primary-PCI services never run short.",
      },
      {
        question: "Do you also supply the cath-lab imaging platform?",
        answer:
          "Yes. AbuFarha supplies cath-lab systems, hemodynamic recording and interventional consumables — the full stack for a coronary intervention programme.",
      },
      {
        question: "How are stents delivered and stored?",
        answer:
          "Stents are delivered in their original sterile packaging with full lot and expiry traceability, matching hospital sterile-store requirements.",
      },
    ],
    related: ["cath-lab", "c-arm-systems"],
  },

  "c-arm-systems": {
    intro:
      "C-arm systems are mobile fluoroscopy platforms used across operating theatres, pain-management, orthopaedic and interventional workflows. Modern C-arms combine flat-panel or image-intensifier detectors with low-dose fluoroscopy modes to give surgeons real-time imaging during procedures. AbuFarha supplies full-size and mini C-arms from leading OEMs — new and Certified Refurbished — and provides installation, biomedical engineering, preventive maintenance and operator training so surgical teams have a reliable intra-operative imaging platform.",
    applications: [
      "Orthopaedic trauma and elective procedures",
      "Pain-management injections and interventional radiology",
      "Vascular and endovascular procedures",
      "Urology (stone management and stent placement)",
      "General theatre fluoroscopy support",
    ],
    buyerConsiderations: [
      "Detector choice — flat panel vs image intensifier",
      "C-arm size (full vs mini) based on procedure mix",
      "Mobility, footprint and manoeuvrability in theatre",
      "Dose-management features and storage/PACS integration",
      "Preventive-maintenance and battery/tube service planning",
    ],
    supportServices: [SERVICE_LINKS.aftersales, SERVICE_LINKS.services, SERVICE_LINKS.training],
    faqs: [
      {
        question: "Full-size or mini C-arm?",
        answer:
          "Full-size C-arms cover general orthopaedic, vascular and pain-management work. Mini C-arms are optimised for extremity work (hand, foot, ankle) with a smaller footprint and lower dose. We help match the platform to your theatre workload.",
      },
      {
        question: "Do you supply refurbished C-arm systems?",
        answer:
          "Yes. Certified Refurbished C-arms are professionally inspected, tested and re-certified, delivered with the same installation and warranty pathway as new units.",
      },
      {
        question: "How is dose management handled?",
        answer:
          "Modern C-arms include pulsed fluoroscopy, dose-recording and image-processing chains that reduce dose without sacrificing clinical clarity. We commission these features and train operators on safe use.",
      },
      {
        question: "What service and maintenance do you provide?",
        answer:
          "Scheduled preventive maintenance, corrective service, tube and battery replacement, and priority spare-part logistics — all delivered by our in-house biomedical engineering team.",
      },
      {
        question: "Can C-arms integrate with our PACS?",
        answer:
          "Yes. DICOM export and PACS integration are configured during commissioning as part of the standard installation.",
      },
    ],
    related: ["cath-lab", "x-ray-systems"],
  },

  "x-ray-systems": {
    intro:
      "General radiography remains the highest-volume imaging modality in most hospitals, covering emergency, orthopaedic, chest and screening workloads. Digital radiography (DR) with flat-panel detectors has replaced film and CR in modern departments, delivering immediate image review, lower repeat rates and full PACS integration. AbuFarha supplies fixed radiography rooms, mobile DR units and digital detectors from leading OEMs, and provides the full installation, biomedical engineering and preventive-maintenance service that keeps busy imaging departments running.",
    applications: [
      "Emergency and trauma radiography",
      "Chest, orthopaedic and abdominal imaging",
      "Bedside and portable imaging in ICU and wards",
      "Paediatric radiography with dose-optimised protocols",
      "General screening and outpatient radiology",
    ],
    buyerConsiderations: [
      "Fixed room vs mobile DR based on department layout and workload",
      "Detector size, weight and wireless capability",
      "Generator power and tube specification",
      "PACS/RIS integration and worklist configuration",
      "Preventive-maintenance and detector-warranty coverage",
    ],
    supportServices: [SERVICE_LINKS.turnkey, SERVICE_LINKS.aftersales, SERVICE_LINKS.services],
    faqs: [
      {
        question: "What does a full DR room installation cover?",
        answer:
          "Room-shielding review, generator and tube installation, detector integration, PACS/RIS configuration, acceptance testing, radiographer training and handover documentation.",
      },
      {
        question: "Do you supply portable / mobile DR units?",
        answer:
          "Yes. Battery-powered mobile DR units for ICU, ward and theatre imaging are supplied and serviced alongside fixed rooms.",
      },
      {
        question: "Can we upgrade an existing CR room to DR?",
        answer:
          "In many cases, yes. We assess the existing generator, tube and room before proposing a detector retrofit or full DR replacement — whichever is more clinically and economically sound.",
      },
      {
        question: "What warranty is offered on flat-panel detectors?",
        answer:
          "Detectors ship with the standard manufacturer warranty, extendable through preventive-maintenance contracts. Detector handling and drop-protection training is included in operator training.",
      },
      {
        question: "How are dose and image quality maintained over time?",
        answer:
          "Scheduled preventive maintenance includes tube output QA, detector calibration and image-quality review. Our biomedical engineers maintain a documented QA history for each system.",
      },
    ],
    related: ["c-arm-systems", "mammography-systems", "ct-scanners"],
  },

  "mammography-systems": {
    intro:
      "Mammography is the front-line modality for breast-cancer screening and diagnostic workup. Modern digital mammography systems combine full-field digital detectors with tomosynthesis (3D) capability for improved lesion conspicuity, and integrate with dedicated review workstations, CAD tools and PACS. AbuFarha supplies mammography and tomosynthesis systems from leading OEMs and delivers the full deployment — room design, shielding, installation, physics acceptance, radiographer training and preventive maintenance — supporting national and hospital-level screening programmes.",
    applications: [
      "Screening mammography programmes",
      "Diagnostic mammography and problem-solving workup",
      "Digital breast tomosynthesis (DBT / 3D mammography)",
      "Stereotactic biopsy guidance",
      "Post-treatment and follow-up imaging",
    ],
    buyerConsiderations: [
      "2D vs tomosynthesis (3D) capability",
      "Detector size and pixel pitch",
      "Ergonomics for radiographer and patient comfort",
      "Integration with review workstations, CAD and PACS",
      "Physics-QA and preventive-maintenance coverage",
    ],
    supportServices: [
      SERVICE_LINKS.turnkey,
      SERVICE_LINKS.aftersales,
      SERVICE_LINKS.services,
      SERVICE_LINKS.training,
    ],
    faqs: [
      {
        question: "Should we invest in tomosynthesis (3D)?",
        answer:
          "Tomosynthesis improves lesion conspicuity and can reduce recall rates, and is increasingly considered standard of care for diagnostic and dense-breast screening. We help evaluate the clinical and workflow benefit against budget for your case mix.",
      },
      {
        question: "Do you support screening-programme deployments?",
        answer:
          "Yes. We routinely support national and hospital-level screening programmes with system supply, installation, physics acceptance, workstation integration and long-term maintenance.",
      },
      {
        question: "What does mammography commissioning include?",
        answer:
          "Room shielding review, system installation, physics acceptance testing, workstation and CAD integration, PACS connectivity, radiographer training and handover documentation.",
      },
      {
        question: "Are refurbished mammography systems available?",
        answer:
          "Yes. Certified Refurbished mammography systems are professionally inspected and re-certified, delivered with the same installation and warranty pathway as new units.",
      },
      {
        question: "What preventive-maintenance coverage do you offer?",
        answer:
          "Scheduled physics QA, tube output verification, detector calibration and mechanical inspection are all covered under our preventive-maintenance contracts.",
      },
    ],
    related: ["bone-densitometers", "x-ray-systems", "mri-scanners"],
  },

  "bone-densitometers": {
    intro:
      "Dual-energy X-ray absorptiometry (DEXA / DXA) is the reference standard for measuring bone mineral density (BMD) and diagnosing osteoporosis. Modern DEXA systems also offer body-composition analysis and vertebral fracture assessment. AbuFarha supplies DEXA scanners from leading OEMs and provides installation, commissioning, operator training and preventive maintenance for endocrinology, rheumatology, orthopaedic and screening services.",
    applications: [
      "Osteoporosis diagnosis and fracture-risk assessment",
      "Monitoring response to osteoporosis therapy",
      "Vertebral fracture assessment (VFA)",
      "Body-composition analysis (fat, lean, bone)",
      "Paediatric bone-health assessment",
    ],
    buyerConsiderations: [
      "Table dimensions and patient-weight limits",
      "Scan protocols supported (spine, hip, whole-body, VFA)",
      "Reference database and reporting workflow",
      "PACS/RIS integration",
      "Preventive-maintenance and calibration coverage",
    ],
    supportServices: [SERVICE_LINKS.aftersales, SERVICE_LINKS.services, SERVICE_LINKS.training],
    faqs: [
      {
        question: "What does a DEXA installation involve?",
        answer:
          "Room preparation, system installation, calibration with the manufacturer phantom, workflow and reference-database configuration, PACS integration and operator training.",
      },
      {
        question: "Do you supply refurbished DEXA scanners?",
        answer:
          "Yes. Certified Refurbished DEXA systems are professionally inspected and re-certified, delivered with the same installation and warranty pathway as new units.",
      },
      {
        question: "How is calibration maintained over time?",
        answer:
          "Daily QA phantom scans plus scheduled preventive maintenance keep the system within specification. Our biomedical engineers maintain a documented QA log per system.",
      },
      {
        question: "Can DEXA integrate with our EMR or PACS?",
        answer:
          "Yes. DICOM export and structured-report integration are configured during commissioning.",
      },
      {
        question: "Do you provide operator training?",
        answer:
          "Yes. Technologists are trained on scan positioning, protocol selection, analysis and reporting during commissioning, with refresher support available afterwards.",
      },
    ],
    related: ["mammography-systems", "x-ray-systems"],
  },

  "lithotripsy-eswl": {
    intro:
      "Extracorporeal Shock Wave Lithotripsy (ESWL) is a non-invasive treatment for urinary-tract stones, fragmenting stones using focused shock waves generated outside the body. Modern lithotripters combine electromagnetic or electrohydraulic sources with integrated fluoroscopy and/or ultrasound localisation, and are used across urology day-case services. AbuFarha supplies ESWL systems from leading OEMs and delivers installation, biomedical engineering, preventive maintenance and operator training.",
    applications: [
      "Kidney-stone fragmentation (renal calculi)",
      "Upper-ureteric stone treatment",
      "Selected paediatric stone cases with appropriate protocols",
      "Day-case urology workflows",
      "Retreatment and follow-up sessions",
    ],
    buyerConsiderations: [
      "Shock-wave source technology and coupling design",
      "Integrated fluoroscopy vs ultrasound localisation",
      "Patient-table ergonomics and multi-modality use",
      "Consumable strategy (electrodes, coupling media)",
      "Preventive-maintenance coverage for source and imaging chain",
    ],
    supportServices: [SERVICE_LINKS.aftersales, SERVICE_LINKS.services, SERVICE_LINKS.training],
    faqs: [
      {
        question: "What clinical services benefit most from ESWL?",
        answer:
          "Urology day-case services managing renal and upper-ureteric stones typically see the highest utilisation; ESWL is a standard non-invasive option alongside URS and PCNL.",
      },
      {
        question: "Fluoroscopy or ultrasound localisation?",
        answer:
          "Fluoroscopy remains the most flexible localisation modality; ultrasound is valuable for radiolucent stones and in radiation-sensitive populations. Many modern systems integrate both.",
      },
      {
        question: "What service and maintenance do you provide?",
        answer:
          "Scheduled preventive maintenance covers the shock-wave source, imaging chain and patient table. Consumables (electrodes, coupling gel) are supplied through the same channel.",
      },
      {
        question: "Do you supply refurbished lithotripters?",
        answer:
          "Yes. Certified Refurbished ESWL systems are professionally inspected and re-certified, delivered with the same installation and warranty pathway as new units.",
      },
      {
        question: "What operator training do you provide?",
        answer:
          "Urology and radiography teams are trained on positioning, localisation, treatment protocols and safety during commissioning.",
      },
    ],
    related: ["cath-lab", "x-ray-systems"],
  },

  others: {
    intro:
      "Beyond the major imaging and interventional modalities, hospitals rely on a wide range of specialised equipment — ultrasound, endoscopy, patient monitoring, sterilisation, anaesthesia and surgical platforms among them. AbuFarha's biomedical engineering team supplies, installs, commissions and services these systems from a portfolio of OEM-certified partners. If the equipment you are planning is not listed on a dedicated category page, talk to our engineers about current availability, specifications and lead times.",
    applications: [
      "Ultrasound and point-of-care imaging",
      "Endoscopy and minimally invasive surgery platforms",
      "Patient monitoring and critical-care equipment",
      "Sterilisation, disinfection and CSSD workflows",
      "Anaesthesia and surgical support systems",
    ],
    buyerConsiderations: [
      "OEM certification and long-term parts availability",
      "Integration with existing hospital systems (EMR, PACS)",
      "Consumable supply chain and lead times",
      "Preventive-maintenance and training coverage",
      "Compliance with local regulatory requirements",
    ],
    supportServices: [SERVICE_LINKS.services, SERVICE_LINKS.aftersales, SERVICE_LINKS.contact],
    faqs: [
      {
        question: "How do I know if you supply the equipment I need?",
        answer:
          "Our portfolio extends beyond the equipment listed online. Contact our biomedical engineers with your requirements and we will confirm OEM availability, specifications and lead times.",
      },
      {
        question: "Do you supply refurbished equipment in this category?",
        answer:
          "Yes, where suitable Certified Refurbished units are available. Every refurbished unit is professionally inspected and re-certified before delivery.",
      },
      {
        question: "What service and maintenance coverage do you provide?",
        answer:
          "Preventive maintenance, corrective service and spare-part logistics are provided by our in-house biomedical engineering team across Africa and the Middle East.",
      },
      {
        question: "Can you deliver a turnkey project for a full department?",
        answer:
          "Yes. Our turnkey delivery service covers multi-modality equipping, integration and long-term support at hospital-department scale.",
      },
    ],
    related: ["mri-scanners", "ct-scanners", "cath-lab"],
  },
};

/** Slug → display label used in related-category link cards. */
export const CATEGORY_LABELS: Record<string, string> = {
  "mri-scanners": "MRI Scanners",
  "ct-scanners": "CT Scanners",
  "pet-ct-scanners": "PET/CT Scanners",
  "cath-lab": "Cath Lab Systems",
  "drug-eluting-stents": "Drug-Eluting Stents",
  "c-arm-systems": "C-Arm Systems",
  "x-ray-systems": "X-Ray Systems",
  "mammography-systems": "Mammography Systems",
  "bone-densitometers": "Bone Densitometers (DEXA)",
  "lithotripsy-eswl": "Lithotripsy (ESWL)",
  others: "Other Equipment",
};
