import { createFileRoute, notFound } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/site/NotFoundPage";

/**
 * Catch-all route for unmatched URLs.
 *
 * Its only job is SEO correctness: the root `notFoundComponent` has no
 * route-level `head()`, so unmatched URLs were server-rendered with the
 * homepage title/description and no `noindex`. This route owns the 404
 * metadata in the initial HTML response, and throwing `notFound()` from the
 * loader keeps the HTTP 404 status code intact.
 */
const notFoundHead = () => ({
  meta: [
    { title: "Page Not Found (404) | AbuFarha Medical Supplies" },
    {
      name: "description",
      content:
        "This page could not be found. Search the AbuFarha Medical equipment catalog or return to the homepage.",
    },
    { name: "robots", content: "noindex, follow" },
    { property: "og:title", content: "Page Not Found (404) | AbuFarha Medical Supplies" },
    {
      property: "og:description",
      content:
        "This page could not be found. Search the AbuFarha Medical equipment catalog or return to the homepage.",
    },
  ],
});

export const Route = createFileRoute("/$")({
  loader: () => {
    throw notFound();
  },
  head: notFoundHead,
  component: NotFoundPage,
  notFoundComponent: NotFoundPage,
  errorComponent: NotFoundPage,
});
