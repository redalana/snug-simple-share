import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { PRODUCTS, productSlug } from "@/lib/products";
import { ARTICLES } from "@/lib/blog";

const BASE_URL = "https://snug-simple-share.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
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
  { path: "/products/pet-ct-scanners", changefreq: "monthly", priority: "0.8" },
  { path: "/products/cath-lab", changefreq: "monthly", priority: "0.8" },
  { path: "/products/c-arm-systems", changefreq: "monthly", priority: "0.8" },
  { path: "/products/x-ray-systems", changefreq: "monthly", priority: "0.8" },
  { path: "/products/mammography-systems", changefreq: "monthly", priority: "0.8" },
  { path: "/products/bone-densitometers", changefreq: "monthly", priority: "0.8" },
  { path: "/products/lithotripsy-eswl", changefreq: "monthly", priority: "0.8" },
  { path: "/products/drug-eluting-stents", changefreq: "monthly", priority: "0.8" },
  { path: "/products/others", changefreq: "monthly", priority: "0.8" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          ...STATIC_ROUTES,
          // Dynamic product detail pages — one entry per product.
          ...PRODUCTS.map((p) => ({
            path: `/products/${productSlug(p)}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          // Dynamic blog article pages — one entry per article.
          ...ARTICLES.map((a) => ({
            path: `/blog/${a.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
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
