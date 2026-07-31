import {
  HUB_BASE_PATH,
  HUB_FAMILY_LABEL,
  listHubs,
  type HubDef,
  type HubKind,
} from "@/lib/content";
import { SITE_URL, OG_IMAGES, breadcrumbJsonLd } from "@/lib/seo";

/** Head payload shared by every hub detail route. */
export function hubHead(def: HubDef, itemCount: number) {
  const url = SITE_URL + def.path;
  return {
    meta: [
      { title: def.metaTitle },
      { name: "description", content: def.metaDescription },
      { property: "og:title", content: def.metaTitle },
      { property: "og:description", content: def.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGES.blog },
      { name: "twitter:image", content: OG_IMAGES.blog },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: def.heading,
          description: def.metaDescription,
          url,
          about: { "@type": "Thing", name: def.name },
          isPartOf: { "@type": "WebSite", name: "AbuFarha Medical", url: SITE_URL },
          mainEntity: { "@type": "ItemList", numberOfItems: itemCount },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Knowledge Center", path: "/blog" },
            { name: HUB_FAMILY_LABEL[def.kind], path: HUB_BASE_PATH[def.kind] },
            { name: def.name, path: def.path },
          ]),
        ),
      },
    ],
  };
}

/** Head payload shared by every hub directory (index) route. */
export function hubDirectoryHead(kind: HubKind, title: string, description: string) {
  const path = HUB_BASE_PATH[kind];
  const url = SITE_URL + path;
  const hubs = listHubs(kind);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGES.blog },
      { name: "twitter:image", content: OG_IMAGES.blog },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: title,
          description,
          url,
          isPartOf: { "@type": "WebSite", name: "AbuFarha Medical", url: SITE_URL },
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: hubs.length,
            itemListElement: hubs.map((h, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: h.name,
              url: SITE_URL + h.path,
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Knowledge Center", path: "/blog" },
            { name: HUB_FAMILY_LABEL[kind], path },
          ]),
        ),
      },
    ],
  };
}
