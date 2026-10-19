import { SITE_URL, OG_IMAGES } from "@/lib/seo";
import type { ClinicalProgram } from "@/lib/clinical-programs";

export function programHead(program: ClinicalProgram, ogKey: keyof typeof OG_IMAGES) {
  const url = SITE_URL + program.path;
  const img = OG_IMAGES[ogKey];
  return {
    meta: [
      { title: program.seo.title },
      { name: "description", content: program.seo.description },
      { property: "og:title", content: program.seo.title },
      { property: "og:description", content: program.seo.ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: img },
      { name: "twitter:image", content: img },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
