/**
 * Clinical applications — the "why", as opposed to technologies (the "what").
 *
 * The base roster is derived from the existing clinical solutions module
 * (`src/lib/clinical-solutions.ts`, the homepage Clinical Solutions data) and
 * extended with applications that already appear in the product / article
 * vocabulary. Each entry declares aliases only; every relationship it takes
 * part in is inferred from content, never hand-linked.
 */

import { CLINICAL_SOLUTIONS } from "@/lib/clinical-solutions";
import { normaliseTags } from "./taxonomy";

export type ClinicalApplicationId = string;

export type ClinicalApplicationDef = {
  id: ClinicalApplicationId;
  label: string;
  aliases: string[];
  /** True when the entry originates from the clinical solutions data set. */
  fromClinicalSolutions: boolean;
};

/** Applications already present in product/article language across the site. */
const ADDITIONAL_APPLICATIONS: Omit<ClinicalApplicationDef, "fromClinicalSolutions">[] = [
  {
    id: "stroke",
    label: "Stroke Care",
    aliases: ["stroke", "thrombectomy", "ischaemic", "ischemic", "cerebral infarct"],
  },
  {
    id: "coronary-intervention",
    label: "Coronary Intervention",
    aliases: ["coronary", "pci", "angioplasty", "stent", "cath lab", "catheterization"],
  },
  {
    id: "cancer-staging",
    label: "Cancer Staging & Oncology Imaging",
    aliases: ["cancer", "oncolog", "staging", "tumour", "tumor", "pet/ct", "metabolic imaging"],
  },
  {
    id: "breast-screening",
    label: "Breast Screening",
    aliases: ["breast screening", "mammograph", "tomosynthesis", "breast cancer"],
  },
  {
    id: "kidney-stone-treatment",
    label: "Kidney Stone Treatment",
    aliases: ["kidney stone", "lithotripsy", "eswl", "urolith", "renal calculi"],
  },
  {
    id: "osteoporosis-assessment",
    label: "Osteoporosis Assessment",
    aliases: ["osteoporosis", "bone density", "bone mineral", "dexa", "dxa"],
  },
  {
    id: "trauma-imaging",
    label: "Trauma & Emergency Imaging",
    aliases: ["trauma", "emergency imaging", "fracture", "polytrauma"],
  },
  {
    id: "surgical-imaging",
    label: "Intra-operative Imaging",
    aliases: ["intra-operative", "intraoperative", "surgical imaging", "hybrid or", "c-arm"],
  },
  {
    id: "maternal-fetal-care",
    label: "Maternal & Fetal Care",
    aliases: ["obstetric", "fetal", "foetal", "prenatal", "pregnan", "ivf", "fertility"],
  },
];

function build(): ClinicalApplicationDef[] {
  const byId = new Map<string, ClinicalApplicationDef>();

  for (const solution of CLINICAL_SOLUTIONS) {
    const id = normaliseTags([solution.id])[0];
    byId.set(id, {
      id,
      label: solution.title,
      aliases: normaliseAliases([
        solution.tab,
        solution.title,
        solution.id.replace(/-/g, " "),
        ...solution.highlights,
      ]),
      fromClinicalSolutions: true,
    });
  }

  for (const extra of ADDITIONAL_APPLICATIONS) {
    const existing = byId.get(extra.id);
    if (existing) {
      existing.aliases = [...new Set([...existing.aliases, ...extra.aliases])];
      continue;
    }
    byId.set(extra.id, { ...extra, fromClinicalSolutions: false });
  }

  return [...byId.values()].sort((a, b) => a.label.localeCompare(b.label));
}

function normaliseAliases(values: string[]): string[] {
  return [
    ...new Set(
      values
        .map((v) => v.trim().toLowerCase())
        .filter((v) => v.length > 3),
    ),
  ];
}

export const CLINICAL_APPLICATIONS: ClinicalApplicationDef[] = build();

const BY_ID = new Map(CLINICAL_APPLICATIONS.map((c) => [c.id, c]));

export function getClinicalApplication(
  id: ClinicalApplicationId,
): ClinicalApplicationDef | undefined {
  const direct = BY_ID.get(id);
  if (direct) return direct;
  const v = id.trim().toLowerCase();
  return CLINICAL_APPLICATIONS.find(
    (c) => c.label.toLowerCase() === v || c.aliases.includes(v),
  );
}

/** Extract every clinical application mentioned in free text. */
export function inferClinicalApplications(
  ...parts: (string | undefined)[]
): ClinicalApplicationId[] {
  const haystack = ` ${parts.filter(Boolean).join(" ").toLowerCase()} `;
  const found: ClinicalApplicationId[] = [];
  for (const application of CLINICAL_APPLICATIONS) {
    if (application.aliases.some((alias) => haystack.includes(alias))) found.push(application.id);
  }
  return found;
}
