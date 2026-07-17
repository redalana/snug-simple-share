# 08 — QA Checklist

The single authoritative gate for pre-release quality. Runs after [Engineering](./06-engineering-checklist.md) and [Responsive](./07-responsive-checklist.md) pass.

## Visual QA

- [ ] Alignment, spacing, typography consistent across sections
- [ ] Cards equal height and padding within a row
- [ ] Images preserve aspect ratio
- [ ] No "almost correct" spacing anywhere
- [ ] Design tokens used everywhere — no rogue values

## Content QA

- [ ] Grammar and tone consistent
- [ ] Medical terminology accurate
- [ ] No placeholder or lorem ipsum text
- [ ] No invented statistics, testimonials, or company facts
- [ ] Positioning matches [Project Memory](./15-project-memory.md#brand-rules) (medical equipment supplier, not hospital builder)

## Accessibility QA

- [ ] Keyboard navigation works on every interactive element
- [ ] Visible focus rings on every focusable element
- [ ] Color contrast passes WCAG AA
- [ ] Every icon-only button has `aria-label`
- [ ] Every image has meaningful `alt` (or `alt=""` if decorative)
- [ ] Every form field has an associated label
- [ ] Heading hierarchy is monotonic (H1 → H2 → H3, no skips)
- [ ] Screen reader can navigate every page

## Performance QA

- [ ] Images lazy-loaded (`loading="lazy"` + `decoding="async"`)
- [ ] Route-level code splitting active
- [ ] Web fonts loaded via `<link>` in root `head()`
- [ ] No layout shift on hero (CLS ≈ 0)
- [ ] Bundle size reviewed — no unexpected heavy deps
- [ ] Animations run at 60fps

## SEO QA

- [ ] Unique `title` per route (< 60 chars)
- [ ] Unique `description` per route (< 160 chars)
- [ ] `og:title`, `og:description`, `og:type` set per route
- [ ] `og:image` set on leaf routes with meaningful imagery (absolute HTTPS URL) or omitted
- [ ] `canonical` on leaf routes, self-referencing
- [ ] Heading hierarchy correct
- [ ] Every image has `alt`
- [ ] Structured data (JSON-LD) present where applicable (Organization, Article, Product, BreadcrumbList)
- [ ] `sitemap.xml` and `robots.txt` verified
- [ ] No duplicate metadata across routes

## Regression QA

- [ ] Desktop screenshots match approved baseline
- [ ] Approved layouts unchanged
- [ ] Shared components unaffected
- [ ] All prior features still work

## Security QA

- [ ] No secrets in client bundle
- [ ] Server env vars read only inside handlers
- [ ] All user input validated (Zod on server functions)
- [ ] Webhooks verify signatures before processing
- [ ] Admin client (`supabaseAdmin`) not reachable from client bundle

## Cross-Browser QA

- [ ] Chrome
- [ ] Edge
- [ ] Firefox
- [ ] Safari (desktop + iOS)

---

**Next:** [09 — Definition of Done](./09-definition-of-done.md)
