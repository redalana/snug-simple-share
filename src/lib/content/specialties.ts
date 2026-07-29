/**
 * Medical specialties — a first-class entity vocabulary.
 *
 * The roster is NOT hand-written: it is derived at module load from the
 * `specialty` values that already exist on every product in
 * `src/lib/products.ts`. Aliases exist only so that free text (articles,
 * services, FAQs) can be normalised onto the same ids.
 */

import { PRODUCTS } from "@/lib/products";
import { normaliseTags } from "./taxonomy";

export type SpecialtyId = string;

export type SpecialtyDef = {
  id: SpecialtyId;
  /** Canonical label exactly as it appears in the product data. */
  label: string;
  aliases: string[];
};

/** Extra prose spellings, keyed by canonical label (lowercased). */
const SPECIALTY_ALIASES: Record<string, string[]> = {
  cardiology: ["cardiac", "cardiovascular", "interventional cardiology", "heart"],
  radiology: ["radiologist", "diagnostic imaging", "medical imaging"],
  oncology: ["cancer", "tumour", "tumor", "oncologic"],
  neurology: ["neuro", "neurological", "neurosurgery", "brain"],
  urology: ["urological", "kidney stone", "renal"],
  orthopedics: ["orthopaedic", "orthopedic", "bone", "musculoskeletal"],
  "women's health": ["womens health", "obstetric", "gynecolog", "gynaecolog", "breast"],
};

function build(): SpecialtyDef[] {
  const labels = new Map<string, string>();
  for (const product of PRODUCTS) {
    for (const specialty of product.specialty) {
      const key = specialty.trim().toLowerCase();
      if (key && !labels.has(key)) labels.set(key, specialty.trim());
    }
  }
  return [...labels.entries()]
    .map(([key, label]) => ({
      id: normaliseTags([label])[0],
      label,
      aliases: [key, ...(SPECIALTY_ALIASES[key] ?? [])],
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

export const SPECIALTIES: SpecialtyDef[] = build();

const BY_ID = new Map(SPECIALTIES.map((s) => [s.id, s]));
const BY_ALIAS = new Map<string, SpecialtyDef>();
for (const specialty of SPECIALTIES) {
  BY_ALIAS.set(specialty.label.toLowerCase(), specialty);
  for (const alias of specialty.aliases) BY_ALIAS.set(alias, specialty);
}

export function getSpecialty(id: SpecialtyId): SpecialtyDef | undefined {
  return BY_ID.get(id) ?? BY_ALIAS.get(id.trim().toLowerCase());
}

/** Normalise a free-text specialty label onto a canonical specialty id. */
export function normaliseSpecialty(value: string): SpecialtyId | undefined {
  const v = value.trim().toLowerCase();
  return BY_ID.get(v)?.id ?? BY_ALIAS.get(v)?.id;
}

/** Extract every specialty mentioned in free text. */
export function inferSpecialties(...parts: (string | undefined)[]): SpecialtyId[] {
  const haystack = ` ${parts.filter(Boolean).join(" ").toLowerCase()} `;
  const found = new Set<SpecialtyId>();
  for (const specialty of SPECIALTIES) {
    const terms = [specialty.label.toLowerCase(), ...specialty.aliases];
    if (terms.some((term) => haystack.includes(term))) found.add(specialty.id);
  }
  return [...found];
}
