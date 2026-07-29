/**
 * Service registry — the missing single source of truth for services.
 *
 * Services were previously only expressed as inline arrays inside
 * `src/components/site/ServicesPage.tsx` (the six CORE services) and as
 * standalone routes (`/turnkey`, `/after-sales`, `/services`). No service page
 * imports this module yet, so nothing renders differently; it exists so the
 * relationship engine can link products and articles to real services.
 *
 * Every entry below mirrors a service the site already publishes. Nothing new
 * is invented — titles and descriptions are taken from the existing pages.
 */

export type ServiceEntry = {
  slug: string;
  title: string;
  description: string;
  /** Existing route this service is presented on. */
  url: string;
  /** Free-text keywords used to infer technologies and to power search. */
  keywords: string[];
};

export const SERVICES: ServiceEntry[] = [
  {
    slug: "installation-commissioning",
    title: "Installation & Commissioning",
    description:
      "Professional installation, configuration, calibration and testing according to OEM standards.",
    url: "/services",
    keywords: [
      "site preparation",
      "system installation",
      "calibration",
      "acceptance testing",
      "clinical handover",
      "MRI",
      "CT",
      "cath lab",
      "PET/CT",
      "X-Ray",
      "mammography",
      "ultrasound",
      "C-arm",
    ],
  },
  {
    slug: "preventive-maintenance",
    title: "Preventive Maintenance",
    description:
      "Scheduled maintenance keeps your equipment reliable and extends its lifespan.",
    url: "/services",
    keywords: [
      "routine inspections",
      "performance check",
      "calibration",
      "safety tests",
      "preventive maintenance",
      "after sales",
      "uptime",
    ],
  },
  {
    slug: "clinical-training",
    title: "Clinical Training",
    description:
      "On-site and remote training for doctors, technologists and biomedical engineers.",
    url: "/services",
    keywords: [
      "user operation training",
      "protocol optimization",
      "image quality",
      "safety and compliance",
      "radiographer training",
    ],
  },
  {
    slug: "spare-parts-supply",
    title: "Spare Parts Supply",
    description: "Genuine OEM and premium compatible parts with fast regional delivery.",
    url: "/services",
    keywords: ["spare parts", "OEM parts", "logistics", "after sales"],
  },
  {
    slug: "technical-support",
    title: "Technical Support",
    description: "Expert support whenever you need it to minimize downtime.",
    url: "/services",
    keywords: ["technical support", "helpdesk", "downtime", "after sales", "biomedical"],
  },
  {
    slug: "remote-diagnostics",
    title: "Remote Diagnostics",
    description:
      "We remotely monitor your systems to detect issues early and prevent failures.",
    url: "/services",
    keywords: ["remote diagnostics", "monitoring", "predictive", "after sales", "uptime"],
  },
  {
    slug: "turnkey-projects",
    title: "Turnkey Project Delivery",
    description:
      "Complete healthcare departments delivered from planning and design through installation, commissioning and handover.",
    url: "/turnkey",
    keywords: [
      "turnkey",
      "hospital planning",
      "department build",
      "commissioning",
      "operating room",
      "cath lab",
      "MRI",
      "CT",
    ],
  },
  {
    slug: "after-sales-support",
    title: "After-Sales Support",
    description:
      "Long-term maintenance, spare parts, technical support and remote diagnostics that keep installed equipment running.",
    url: "/after-sales",
    keywords: [
      "after sales",
      "preventive maintenance",
      "spare parts",
      "technical support",
      "remote diagnostics",
      "biomedical",
      "uptime",
    ],
  },
  {
    slug: "biomedical-engineering",
    title: "Biomedical Engineering Services",
    description:
      "In-house biomedical engineers supporting hospitals across installation, servicing and equipment lifecycle management.",
    url: "/services",
    keywords: ["biomedical", "engineering", "lifecycle", "service contracts"],
  },
];

const BY_SLUG = new Map(SERVICES.map((s) => [s.slug, s]));

export function getServiceBySlug(slug: string): ServiceEntry | undefined {
  return BY_SLUG.get(slug);
}
