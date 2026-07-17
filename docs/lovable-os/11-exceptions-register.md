# 11 — Exceptions Register

A living record of approved deviations from the handbook. Every entry must justify itself.

## Entry Template

```
### <Name>
- **Rule overridden:** <link to rule>
- **Scope:** <where the exception applies — file/route/component>
- **Reason:** <why the exception exists>
- **Approved by:** <name/role>
- **Approved on:** <YYYY-MM-DD>
- **Review date:** <when to revisit>
```

---

## Ratified Exceptions

### JourneyScene3D on `/turnkey`
- **Rule overridden:** [03 — Design System / Imagery Rules](./03-design-system.md#imagery-rules) ("Real medical photography only, no AI/3D renders")
- **Scope:** `src/components/site/turnkey/JourneyScene3D.tsx` and related 3D components on `/turnkey`
- **Reason:** The 3D scene visually communicates the turnkey delivery journey in a way editorial photography cannot; it uses real medical imagery on the 3D surfaces rather than synthetic renders.
- **Approved by:** Client (prior phases)
- **Approved on:** Pre-v2.0
- **Review date:** On next major redesign

### Category SEO routes
- **Rule overridden:** [05 — Architecture / Single Source of Truth](./05-architecture.md#single-source-of-truth) ("Filters never duplicate pages")
- **Scope:** `src/routes/products.<category>.tsx` files (e.g. `products.mri-scanners.tsx`)
- **Reason:** Search engines need discrete indexable pages per category. These routes are **thin views** over `src/lib/products.ts` — they never duplicate data, only present a filtered slice with route-specific SEO metadata.
- **Approved by:** SEO Lead
- **Approved on:** Pre-v2.0
- **Review date:** On SEO strategy change

### Mobile footer accordion
- **Rule overridden:** [04 — Component Library / Accordion](./04-component-library.md#faq) ("Accordions for FAQ / technical details only")
- **Scope:** `src/components/site/Footer.tsx` at breakpoints `< md`
- **Reason:** A 5-column footer at 320–414px is unreadable. Accordion is the accepted enterprise pattern (Philips, Siemens Healthineers) at mobile widths only; desktop remains multi-column.
- **Approved by:** UX Director
- **Approved on:** Pre-v2.0
- **Review date:** On next footer redesign

---

## Rejected Proposals (do not re-propose)

- **Rebuilding `/products` with a v2 duplicate route** — Rejected. Use the existing filterable route.
- **Purple/indigo gradients on hero** — Rejected. Off-brand, generic-AI aesthetic.
- **Dashboard section on homepage** — Rejected. Confusing for medical procurement audience.

---

**Next:** [12 — Glossary](./12-glossary.md)
