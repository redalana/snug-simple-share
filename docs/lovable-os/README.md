# LOVABLE OS v2.0

The internal handbook for the AbuFarha Medical project.
Framework-agnostic principles + TanStack Start-specific architecture.

> **How to use this handbook**
> Every rule lives in exactly one section. Other sections link to it — they never restate it. If you find a rule duplicated, treat it as a bug and open a PR against this folder.

---

## Table of Contents

| # | Section | Purpose |
|---|---|---|
| 00 | [Constitution](./00-constitution.md) | Identity, Golden Rule, Source of Truth |
| 01 | [Decision Engine](./01-decision-engine.md) | Task types + mode matrix |
| 02 | [Thinking Engine](./02-thinking-engine.md) | Pre-code workflow, root cause, risk scoring |
| 03 | [Design System](./03-design-system.md) | Tokens, typography, spacing, color, imagery |
| 04 | [Component Library](./04-component-library.md) | Canonical component contracts |
| 05 | [Architecture (TanStack Start)](./05-architecture.md) | Routing, data, state, server functions |
| 06 | [Engineering Checklist](./06-engineering-checklist.md) | Code-quality gate |
| 07 | [Responsive Checklist](./07-responsive-checklist.md) | Breakpoint gate |
| 08 | [QA Checklist](./08-qa-checklist.md) | Visual / A11y / Perf / SEO / Regression gate |
| 09 | [Definition of Done](./09-definition-of-done.md) | Single "done" gate |
| 10 | [Release Manual](./10-release-manual.md) | Pipeline, versioning, rollback |
| 11 | [Exceptions Register](./11-exceptions-register.md) | Approved deviations |
| 12 | [Glossary](./12-glossary.md) | Terms + mode matrix |
| 13 | [Prompts](./13-prompts.md) | Reusable prompt templates per mode |
| 14 | [AI Rules](./14-ai-rules.md) | Permanent AI behavior rules |
| 15 | [Project Memory](./15-project-memory.md) | Framework, architecture, brand, exceptions |

---

## Reading Order

**New contributor:** 00 → 01 → 02 → 05 → 15
**Designer:** 00 → 03 → 04 → 11
**Engineer:** 05 → 06 → 07 → 08 → 09
**QA / Release:** 07 → 08 → 09 → 10
**Prompt author:** 01 → 13 → 14

---

## Versioning

- **v1.0** — Original constitution (Next.js-flavored).
- **v2.0** — Reorganized, deduplicated, rewritten for TanStack Start + React + Vite. Philosophy preserved verbatim in Section 00.

Changes to any rule require: (1) a PR in this folder, (2) an entry in the [Exceptions Register](./11-exceptions-register.md) if it overrides an existing rule, and (3) a bump of this version.
