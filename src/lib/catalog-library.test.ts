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
import { PRODUCTS, type Product } from "./products";

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

// Automatic product → library sync (fixtures only).
const prod = (over: Partial<Product>): Product => ({ ...PRODUCTS[0]!, brochures: [], ...over }) as Product;

describe("product catalog sync", () => {
  test("a new product with a PDF appears automatically in the right category", () => {
    const p = prod({ slug: "new-mri", name: "New MRI", brand: "Siemens Healthineers", category: "MRI Scanners", brochures: [{ filename: "Magnetom Brochure.pdf", url: "https://example.org/magnetom.pdf" }] });
    const out = productBrochureCatalogs([p]);
    expect(out.length).toBe(1);
    expect(out[0]!.category).toBe("mri");
    expect(out[0]!.origin).toBe("product");
    expect(out[0]!.linkedProducts).toEqual([{ name: "New MRI", slug: "new-mri" }]);
  });
  test("a product without a PDF creates no entry", () => {
    expect(productBrochureCatalogs([prod({ slug: "x", brochures: [] })]).length).toBe(0);
  });
  test("a replaced PDF shows the new document", () => {
    const p = prod({ slug: "x", brochures: [{ filename: "B.pdf", url: "https://example.org/v2.pdf" }] });
    expect(productBrochureCatalogs([p])[0]!.document).toEqual({ kind: "external", url: "https://example.org/v2.pdf" });
  });
  test("multiple PDFs on one product become separate entries", () => {
    const p = prod({ slug: "x", brochures: [{ filename: "A.pdf", url: "https://example.org/a.pdf" }, { filename: "B.pdf", url: "https://example.org/b.pdf" }] });
    expect(productBrochureCatalogs([p]).length).toBe(2);
  });
  test("one PDF shared by two products is one entry linked to both", () => {
    const doc = [{ filename: "Shared.pdf", url: "https://example.org/shared.pdf" }];
    const out = productBrochureCatalogs([prod({ slug: "p1", name: "P1", brochures: doc }), prod({ slug: "p2", name: "P2", brochures: doc })]);
    expect(out.length).toBe(1);
    expect(out[0]!.linkedProducts!.map((l) => l.slug)).toEqual(["p1", "p2"]);
  });
  test("different PDFs with the same title are not merged", () => {
    const out = productBrochureCatalogs([
      prod({ slug: "p1", brochures: [{ filename: "Brochure.pdf", url: "https://example.org/1.pdf" }] }),
      prod({ slug: "p2", brochures: [{ filename: "Brochure.pdf", url: "https://example.org/2.pdf" }] }),
    ]);
    expect(out.length).toBe(2);
    expect(new Set(out.map((e) => e.slug)).size).toBe(2);
  });
});
