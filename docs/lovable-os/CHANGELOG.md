# CHANGELOG

Every rule change is recorded here. Use the template at the bottom for new entries.

---

## v2.0 — 2026-07-17

### Changed
- Reorganized the handbook from 10 monolithic parts into 16 single-purpose files under `docs/lovable-os/`.
- Rewrote all framework-specific rules for **TanStack Start + React + Vite** (removed Next.js Server Components, `next/image`, `next/link`, `next/font`, Metadata API, `app/` folder conventions).
- Consolidated duplicated rules into single canonical owners (spacing/typography in [03](./03-design-system.md), component contracts in [04](./04-component-library.md), Done gate in [09](./09-definition-of-done.md)).
- Merged three conflicting "Done" lists into one [Definition of Done](./09-definition-of-done.md) with universal + mode-specific tiers.

### Added
- [11 — Exceptions Register](./11-exceptions-register.md) for approved deviations (JourneyScene3D, category SEO routes, mobile footer accordion).
- [12 — Glossary](./12-glossary.md) with a canonical terms table.
- [13 — Prompts](./13-prompts.md) with reusable mode templates.
- [14 — AI Rules](./14-ai-rules.md) as a permanent behavior contract.
- [15 — Project Memory](./15-project-memory.md) as the project fact sheet.
- [CHANGELOG](./CHANGELOG.md), [ROADMAP](./ROADMAP.md), [VALIDATION](./VALIDATION.md).
- Cross-linked navigation (`Next:` footer + role-based reading paths in README).
- Risk-scored task modes and Approval Gate in [01](./01-decision-engine.md) and [10](./10-release-manual.md).

### Preserved (verbatim)
- Identity, Golden Rule, Source of Truth, Design Philosophy, Minimum Change Principle, Enterprise Question, Final Rule — all in [00 — Constitution](./00-constitution.md).

### Resolved contradictions
- Filters vs SEO pages: clarified in [05 Architecture / Single Source of Truth](./05-architecture.md#single-source-of-truth) and ratified in [11](./11-exceptions-register.md#category-seo-routes).
- Accordion usage: mobile footer explicitly approved in [11](./11-exceptions-register.md#mobile-footer-accordion).
- Imagery policy: 3D `JourneyScene3D` grandfathered in [11](./11-exceptions-register.md#journeyscene3d-on-turnkey).

---

## v1.0 — Pre-2026-07-17

Original LOVABLE OS ENTERPRISE constitution (Next.js-flavored). Superseded by v2.0.

---

## Entry Template

```
## vX.Y.Z — YYYY-MM-DD

### Added
- <new rule / section>

### Changed
- <rule wording change, with link to section>

### Removed
- <rule removed, with justification>

### Deprecated
- <rule marked for removal in a future major version>

### Exceptions ratified
- <link to Exceptions Register entry>

### Migration notes
- <what contributors must do to comply>
```

Version bump rules:

- **MAJOR** — a rule that would invalidate previously approved work.
- **MINOR** — a new rule or a new section.
- **PATCH** — wording, formatting, or clarification with no behavioral change.
