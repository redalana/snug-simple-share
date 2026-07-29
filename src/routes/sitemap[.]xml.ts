import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { PRODUCTS, productSlug } from "@/lib/products";
import { ARTICLES } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";

const BASE_URL = SITE_URL;

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

// Static, indexable routes. Keep in sync with src/routes/*.tsx.
// Layout files (products.tsx, blog.tsx) and dynamic $slug routes are
// intentionally excluded — they are represented by their index leaves and
// generated entries below.
const STATIC_ROUTES: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/services", changefreq: "monthly", priority: "0.8" },
  { path: "/after-sales", changefreq: "monthly", priority: "0.7" },
  { path: "/turnkey", changefreq: "monthly", priority: "0.8" },
  { path: "/brands", changefreq: "monthly", priority: "0.7" },
  { path: "/categories", changefreq: "monthly", priority: "0.7" },
  { path: "/projects", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.6" },
  { path: "/hospital-readiness-assessment", changefreq: "monthly", priority: "0.6" },
  { path: "/programs/stroke-care", changefreq: "monthly", priority: "0.6" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  // Product catalog
  { path: "/products", changefreq: "weekly", priority: "0.9" },
  { path: "/products/mri-scanners", changefreq: "monthly", priority: "0.8" },
  { path: "/products/ct-scanners", changefreq: "monthly", priority: "0.8" },
  { path: "/products/pet-ct-scanners", changefreq: "monthly", priority: "0.8" },
  { path: "/products/cath-lab", changefreq: "monthly", priority: "0.8" },
  { path: "/products/c-arm-systems", changefreq: "monthly", priority: "0.8" },
  { path: "/products/x-ray-systems", changefreq: "monthly", priority: "0.8" },
  { path: "/products/mammography-systems", changefreq: "monthly", priority: "0.8" },
  { path: "/products/bone-densitometers", changefreq: "monthly", priority: "0.8" },
  { path: "/products/lithotripsy-eswl", changefreq: "monthly", priority: "0.8" },
  { path: "/products/drug-eluting-stents", changefreq: "monthly", priority: "0.8" },
  { path: "/products/others", changefreq: "monthly", priority: "0.8" },
  // Utility / legal
  { path: "/faqs", changefreq: "monthly", priority: "0.5" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
  { path: "/sitemap", changefreq: "monthly", priority: "0.3" },
];


export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        // `lastmod` is only emitted when a page-specific, authoritative date
        // exists (articles). Static routes and products have no per-page
        // timestamp, so the element is omitted rather than faked with
        // the generation date.
        const toIso = (d: string) => {
          const t = Date.parse(d);
          return Number.isFinite(t) ? new Date(t).toISOString().slice(0, 10) : undefined;
        };
        const entries: (SitemapEntry & { lastmod?: string })[] = [
          ...STATIC_ROUTES,
          ...PRODUCTS.map((p) => ({
            path: `/products/${productSlug(p)}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          ...ARTICLES.map((a) => ({
            path: `/blog/${a.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
            lastmod: toIso(a.lastUpdated ?? a.publishedDate),
          })),
        ];


        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
