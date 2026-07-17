# LOVABLE OS

**Version:** v2.0
**Status:** Active
**Scope:** AbuFarha Medical — TanStack Start + React + Vite

LOVABLE OS is the permanent engineering operating system for this repository. It defines how every task — by any human contributor or AI assistant — is classified, executed, reviewed, and shipped.

---

## How to Use LOVABLE OS

### If you are a human contributor

1. Read [00 — Constitution](./00-constitution.md) once to internalize the philosophy.
2. Before every task, classify it using the [01 — Decision Engine](./01-decision-engine.md) mode matrix.
3. Follow the [02 — Thinking Engine](./02-thinking-engine.md) sequence: Understand → Inspect → Plan → Predict → Validate → Implement → Review.
4. Use only tokens from [03 — Design System](./03-design-system.md) and contracts from [04 — Component Library](./04-component-library.md).
5. Follow [05 — Architecture](./05-architecture.md) for all framework decisions.
6. Pass the [06 Engineering](./06-engineering-checklist.md), [07 Responsive](./07-responsive-checklist.md), and [08 QA](./08-qa-checklist.md) checklists before declaring the task complete via the [09 Definition of Done](./09-definition-of-done.md).
7. If your change conflicts with a rule, propose an entry in the [11 Exceptions Register](./11-exceptions-register.md) — do not silently override.

### If you are an AI assistant

1. Treat [14 — AI Rules](./14-ai-rules.md) as your permanent behavior contract for this project.
2. Load [15 — Project Memory](./15-project-memory.md) at the start of every session — it is the fact sheet.
3. When the user issues a mode command (BUILD, FIX, IMPROVE, …), respond with the corresponding template from [13 — Prompts](./13-prompts.md).
4. Never claim a task is done until [09 Definition of Done](./09-definition-of-done.md) passes.

### If you are a reviewer

1. Match the task's mode to its gate in the [Mode Matrix](./01-decision-engine.md#mode-matrix).
2. Run the appropriate checklist.
3. Confirm no rule in [11 Exceptions Register](./11-exceptions-register.md) was silently overridden.
4. Reject anything that would not survive the [Enterprise Question](./00-constitution.md#the-enterprise-question).

---

## Table of Contents

| # | Section | Purpose | Owner Discipline |
|---|---|---|---|
| 00 | [Constitution](./00-constitution.md) | Identity, Golden Rule, Source of Truth | Philosophy |
| 01 | [Decision Engine](./01-decision-engine.md) | Task types + mode matrix + risk scoring | Process |
| 02 | [Thinking Engine](./02-thinking-engine.md) | Pre-code workflow, root cause, self-critique | Process |
| 03 | [Design System](./03-design-system.md) | Tokens, typography, spacing, color, imagery | Design |
| 04 | [Component Library](./04-component-library.md) | Canonical component contracts | Design + Engineering |
| 05 | [Architecture](./05-architecture.md) | TanStack Start + React + Vite standards | Engineering |
| 06 | [Engineering Checklist](./06-engineering-checklist.md) | Code-quality gate | Engineering |
| 07 | [Responsive Checklist](./07-responsive-checklist.md) | Breakpoint gate | QA |
| 08 | [QA Checklist](./08-qa-checklist.md) | Visual / A11y / Perf / SEO / Regression | QA |
| 09 | [Definition of Done](./09-definition-of-done.md) | Single "done" gate | All |
| 10 | [Release Manual](./10-release-manual.md) | Pipeline, versioning, rollback | Release |
| 11 | [Exceptions Register](./11-exceptions-register.md) | Approved deviations | Governance |
| 12 | [Glossary](./12-glossary.md) | Terms + abbreviations | Reference |
| 13 | [Prompts](./13-prompts.md) | Reusable prompt templates per mode | AI + human |
| 14 | [AI Rules](./14-ai-rules.md) | Permanent AI behavior rules | AI |
| 15 | [Project Memory](./15-project-memory.md) | Framework, brand, exceptions, decisions | Governance |
| — | [CHANGELOG](./CHANGELOG.md) | Version history + template | Governance |
| — | [ROADMAP](./ROADMAP.md) | Planned handbook improvements | Governance |
| — | [VALIDATION](./VALIDATION.md) | Internal consistency report | Governance |

---

## Reading Paths by Role

- **New contributor:** 00 → 01 → 02 → 05 → 15
- **Designer:** 00 → 03 → 04 → 11
- **Engineer:** 05 → 06 → 07 → 08 → 09
- **QA / Release:** 07 → 08 → 09 → 10
- **Prompt author / AI operator:** 01 → 13 → 14 → 15

---

## Governance

- Every rule lives in **exactly one** section. Other sections link to it — they never restate it. Duplication is a bug; open a PR against this folder.
- Every change to a rule requires: (1) a PR in `docs/lovable-os/`, (2) an entry in the [Exceptions Register](./11-exceptions-register.md) if it overrides an existing rule, (3) a [CHANGELOG](./CHANGELOG.md) entry, (4) a version bump.
- Semantic versioning: MAJOR for breaking rule changes, MINOR for new rules, PATCH for clarifications.

---

## Version

**LOVABLE OS v2.0** — reorganized, deduplicated, TanStack Start-aligned. Philosophy preserved verbatim from v1.0 in [00 — Constitution](./00-constitution.md). See [CHANGELOG](./CHANGELOG.md) for full history.
