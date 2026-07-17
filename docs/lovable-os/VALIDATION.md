# VALIDATION — LOVABLE OS v2.0

**Date:** 2026-07-17
**Scope:** All files in `docs/lovable-os/`
**Method:** Automated link/anchor scan + manual rule-ownership review
**Result:** ✅ PASS — handbook is internally consistent

---

## 1. File Inventory

17 documentation files, 1,529 lines total.

| Group | Files |
|---|---|
| Philosophy | `00` |
| Process | `01`, `02` |
| Design | `03`, `04` |
| Architecture | `05` |
| Checklists | `06`, `07`, `08`, `09` |
| Release | `10` |
| Governance | `11`, `12`, `CHANGELOG`, `ROADMAP`, `VALIDATION` |
| AI & Prompts | `13`, `14` |
| Memory | `15` |
| Index | `README` |

## 2. Link & Anchor Integrity

- **Relative file links:** 100% resolve. Zero broken targets.
- **Section anchors:** 100% match generated GitHub-style anchors of the target headings.
- **Every numbered section carries a `Next:` footer link** for linear reading.

## 3. Rule Ownership Audit

Each rule was traced to exactly one canonical owner. Downstream files reference — never redefine.

| Rule | Canonical owner | Referenced in |
|---|---|---|
| Spacing scale (8/16/…/96) | [03 § Spacing Scale](./03-design-system.md#spacing-scale) | 06, 07 |
| Radius scale (8/12/16/24) | [03 § Radius Scale](./03-design-system.md#radius-scale) | 04 |
| Typography scale | [03 § Typography Scale](./03-design-system.md#typography-scale) | 07, 08 |
| Color / accent policy | [03 § Color System](./03-design-system.md#color-system) | 06, 14, 15 |
| Imagery rules | [03 § Imagery Rules](./03-design-system.md#imagery-rules) | 11 (exception) |
| Hero contract | [04 § Hero](./04-component-library.md#hero) | 07 |
| Mobile header (Logo/Search/Menu) | [04 § Header](./04-component-library.md#header--navigation) | 07 (verification), 15 (history) |
| Tap targets ≥ 48×48 | [04 § Header + Buttons](./04-component-library.md#header--navigation) | 07 |
| Card contract (padding 32, radius 16) | [04 § Card](./04-component-library.md#card) | 06 |
| Framework standards | [05 Architecture](./05-architecture.md) | 06, 14 |
| Single source of truth (data) | [05 § Single Source of Truth](./05-architecture.md#single-source-of-truth) | 06, 11, 15 |
| Head metadata / SEO structure | [05 § Head Metadata](./05-architecture.md#head-metadata) | 06, 08 |
| Task modes | [01 § Mode Matrix](./01-decision-engine.md#mode-matrix) | 09, 10, 13 |
| Risk scoring | [01 § Risk Scoring](./01-decision-engine.md#risk-scoring) | 02, 10, 14 |
| Pre-code workflow | [02 Thinking Engine](./02-thinking-engine.md) | 14 |
| Definition of Done | [09 Definition of Done](./09-definition-of-done.md) | 01, 06, 07, 08, 10, 12, 13, 14 |
| Full QA loop | [08 QA Checklist](./08-qa-checklist.md) | 01, 07, 09, 10 |
| Desktop lock | [00 § Source of Truth](./00-constitution.md#source-of-truth) | 01, 07, 09, 14 |
| Enterprise Question | [00 § The Enterprise Question](./00-constitution.md#the-enterprise-question) | 09, 12 |
| Approved deviations | [11 Exceptions Register](./11-exceptions-register.md) | 03, 04, 05, 14, 15 |

**Result:** no rule appears with a redefinition anywhere. Duplicates from v1.0 (spacing / typography / hero rules restated across 3+ parts) are eliminated.

## 4. Contradiction Check

Three contradictions inherited from v1.0 were flagged and resolved:

| Contradiction | Resolution |
|---|---|
| "Filters never duplicate pages" vs "SEO may require it" | [05 § Single Source of Truth](./05-architecture.md#single-source-of-truth) + [11 § Category SEO routes](./11-exceptions-register.md#category-seo-routes) |
| "Real photography only" vs `JourneyScene3D` on `/turnkey` | [11 § JourneyScene3D](./11-exceptions-register.md#journeyscene3d-on-turnkey) |
| "Accordions for FAQ only" vs approved mobile footer accordion | [11 § Mobile footer accordion](./11-exceptions-register.md#mobile-footer-accordion) |

**No unresolved contradictions remain.**

## 5. Framework Alignment

All framework references are TanStack Start + React + Vite. Zero Next.js references outside historical notes in [CHANGELOG](./CHANGELOG.md). Forbidden imports (`next/*`, `react-router-dom`, `src/pages/`) explicitly listed as anti-patterns in [05 § Anti-Patterns](./05-architecture.md#anti-patterns-forbidden).

## 6. Cross-Reference Density

Every checklist references its canonical source(s):

- [06 Engineering](./06-engineering-checklist.md) → 03, 05, 09
- [07 Responsive](./07-responsive-checklist.md) → 00, 03, 04, 11
- [08 QA](./08-qa-checklist.md) → 03, 05, 09, 15
- [09 Definition of Done](./09-definition-of-done.md) → 00, 01, 06, 07, 08, 10

## 7. AI Integration Coverage

- [14 AI Rules](./14-ai-rules.md) references 00, 01, 02, 03, 05, 09, 11.
- [13 Prompts](./13-prompts.md) references 05, 07, 08, 09, 10.
- [15 Project Memory](./15-project-memory.md) references 03, 05, 11.

Every AI-facing document points into the canonical rule sources.

## 8. Known Limitations

- Link and anchor validation is currently manual (script in the message log). Automating it is on the [ROADMAP](./ROADMAP.md#near-term-v21--v23) for v2.1.
- No lint rule yet enforces "no hardcoded hex" or "no `text-white`" — these rely on reviewer discipline.

## 9. Verdict

**LOVABLE OS v2.0 is internally consistent, framework-aligned, and ready to serve as the permanent engineering operating system for this repository.**

Re-run this validation on every rule change or version bump.
