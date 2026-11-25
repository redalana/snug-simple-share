import { describe, expect, test } from "bun:test";
import {
  CATALOGS,
  MANUAL_CATALOGS,
  productBrochureCatalogs,
  EMPTY_FILTERS,
  catalogFacets,
  filterCatalogs,
  getPublishedCatalog,
  publishedCatalogs,
  type CatalogEntry,
} from "./catalog-library";

// Test fixtures only — never rendered on the site.
const base: Omit<CatalogEntry, "slug" | "title" | "manufacturer" | "category"> = {
  document: { kind: "external", url: "https://example.org/a.pdf" },
  sourceUrl: "https://example.org/",
  allowDownload: false,
  status: "published",
  dateAdded: "2026-01-01",
};
const A: CatalogEntry = { ...base, slug: "a-mri", title: "Alpha MRI brochure", manufacturer: "Siemens Healthineers", category: "mri", model: "Magnetom X", language: "English", publicationYear: 2024, equipmentType: "Brochure" };
const B: CatalogEntry = { ...base, slug: "b-ct", title: "Beta CT datasheet", manufacturer: "Philips", category: "ct", language: "German", publicationYear: 2022, equipmentType: "Datasheet" };
const D: CatalogEntry = { ...base, slug: "d-draft", title: "Draft MRI", manufacturer: "Philips", category: "mri", status: "draft" };
const BAD: CatalogEntry = { ...base, slug: "bad", title: "Bad url", manufacturer: "Philips", category: "mri", sourceUrl: "http://insecure.example" };
const all = [A, B, D, BAD];

describe("catalog library", () => {
  test("ships with no hand-added catalogs", () => {
    expect(MANUAL_CATALOGS.length).toBe(0);
  });
  test("reuses the 3 unique product brochures, no duplicates", () => {
    const derived = productBrochureCatalogs();
    expect(derived.length).toBe(3);
    expect(new Set(CATALOGS.map((e) => e.slug)).size).toBe(CATALOGS.length);
    expect(publishedCatalogs().length).toBe(3);
    expect(derived.every((e) => e.category === "cath-lab")).toBe(true);
  });
  test("drafts and invalid entries are never public", () => {
    expect(publishedCatalogs(all).map((e) => e.slug).sort()).toEqual(["a-mri", "b-ct"]);
    expect(getPublishedCatalog("d-draft", all)).toBeUndefined();
  });
  test("search matches manufacturer alias and model", () => {
    const pub = publishedCatalogs(all);
    expect(filterCatalogs(pub, { ...EMPTY_FILTERS, q: "siemens" }).map((e) => e.slug)).toEqual(["a-mri"]);
    expect(filterCatalogs(pub, { ...EMPTY_FILTERS, q: "magnetom" }).map((e) => e.slug)).toEqual(["a-mri"]);
  });
  test("manufacturer filter uses the canonical name", () => {
    const pub = publishedCatalogs(all);
    expect(catalogFacets(pub).manufacturers).toEqual(["Philips", "Siemens"]);
    expect(filterCatalogs(pub, { ...EMPTY_FILTERS, manufacturer: "Siemens" }).map((e) => e.slug)).toEqual(["a-mri"]);
  });
  test("category, language and year filters combine", () => {
    const pub = publishedCatalogs(all);
    expect(filterCatalogs(pub, { ...EMPTY_FILTERS, category: "ct" }).map((e) => e.slug)).toEqual(["b-ct"]);
    expect(filterCatalogs(pub, { ...EMPTY_FILTERS, language: "German", year: "2024" })).toEqual([]);
    expect(filterCatalogs(pub, { ...EMPTY_FILTERS, year: "2024" }).map((e) => e.slug)).toEqual(["a-mri"]);
  });
});
