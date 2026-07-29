/**
 * Countries — the geographic entity vocabulary.
 *
 * The roster mirrors the regional presence that already exists in
 * `src/components/site/turnkey/data.ts` (REGIONS). It is redeclared here as a
 * lightweight, UI-free registry on purpose: the graph layer must stay free of
 * image imports and React data so it can be consumed from server functions and
 * SSR without pulling asset modules into the bundle.
 */

import { normaliseTags } from "./taxonomy";

export type CountryId = string;

export type CountryDef = {
  id: CountryId;
  label: string;
  /** ISO 3166-1 alpha-2 code, where one exists. */
  iso2?: string;
  region: "Middle East" | "Africa" | "Central Asia" | "South Asia";
  /** True for the country hosting the company headquarters. */
  headquarters?: boolean;
  aliases: string[];
};

const RAW: Omit<CountryDef, "id">[] = [
  { label: "Jordan", iso2: "jo", region: "Middle East", headquarters: true, aliases: ["jordan", "amman"] },
  { label: "Iraq", iso2: "iq", region: "Middle East", aliases: ["iraq", "erbil", "baghdad"] },
  { label: "Syria", iso2: "sy", region: "Middle East", aliases: ["syria", "damascus"] },
  { label: "Yemen", iso2: "ye", region: "Middle East", aliases: ["yemen", "sana"] },
  { label: "Libya", iso2: "ly", region: "Africa", aliases: ["libya", "tripoli"] },
  { label: "Somalia", iso2: "so", region: "Africa", aliases: ["somalia", "mogadishu"] },
  // Somaliland is not internationally recognised and has no ISO-2 code.
  { label: "Somaliland", region: "Africa", aliases: ["somaliland", "hargeisa"] },
  { label: "Egypt", iso2: "eg", region: "Africa", aliases: ["egypt", "cairo"] },
  { label: "Uzbekistan", iso2: "uz", region: "Central Asia", aliases: ["uzbekistan", "tashkent"] },
  { label: "Bangladesh", iso2: "bd", region: "South Asia", aliases: ["bangladesh", "dhaka"] },
];

export const COUNTRIES: CountryDef[] = RAW.map((c) => ({ id: normaliseTags([c.label])[0], ...c }));

const BY_ID = new Map(COUNTRIES.map((c) => [c.id, c]));

export function getCountry(id: CountryId): CountryDef | undefined {
  const direct = BY_ID.get(id);
  if (direct) return direct;
  const v = id.trim().toLowerCase();
  return COUNTRIES.find((c) => c.label.toLowerCase() === v || c.aliases.includes(v));
}

/** Extract every country mentioned in free text. */
export function inferCountries(...parts: (string | undefined)[]): CountryId[] {
  const haystack = ` ${parts.filter(Boolean).join(" ").toLowerCase()} `;
  const found: CountryId[] = [];
  for (const country of COUNTRIES) {
    if (country.aliases.some((alias) => haystack.includes(alias))) found.push(country.id);
  }
  return found;
}
