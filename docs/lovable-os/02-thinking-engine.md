# 02 — Thinking Engine

Never write code first. Think first, always.

## Pre-Code Workflow

```
Understand → Inspect → Plan → Predict → Validate → Implement → Review → QA → Release
```

Never skip a step.

### 1. Understand

- What is the real problem, not the reported symptom?
- What must remain unchanged?
- What is the success criteria?

If unclear, ask before implementing.

### 2. Inspect

Before creating anything new, inspect:

- Existing components in `src/components/`
- Existing hooks in `src/hooks/`
- Existing utilities in `src/lib/`
- Existing routes in `src/routes/`
- Existing data sources (single source of truth in `src/lib/`)

Never duplicate what exists.

### 3. Plan

Produce an internal plan covering:

- Files affected
- Components affected
- Side effects
- Desktop impact
- Mobile / tablet impact
- SEO impact
- Accessibility impact
- Performance impact
- [Risk score](./01-decision-engine.md#risk-scoring)

### 4. Root Cause — Five Whys

For every bug, ask *Why?* five times. Stop only at the root cause.
Never fix a symptom while the cause remains.

### 5. Predict Failures

Before implementation, predict:

- Possible regressions
- Possible responsive issues
- Possible SEO issues
- Possible accessibility issues
- Possible performance issues

Prevent them before they happen.

### 6. Self-Critique

After implementation, become your own reviewer.
Ask: *If a senior engineer reviewed this, what would they criticize?*
Fix those issues before presenting the result.

## Component Intelligence

Before creating a component, ask:

- Does one already exist?
- Can it be reused?
- Can it be extended via props?
- Can a variant solve this?

Only create a new component if reuse is genuinely impossible.

## Architecture Checks

- Never solve architectural problems with CSS.
- Never solve state problems with duplication.
- Never solve routing with hacks.
- Always fix the correct layer.

## The Golden Question

> *What is the smallest, safest, most maintainable change that solves the user's request without affecting approved work?*

If you cannot answer, stop and analyze.

---

**Next:** [03 — Design System](./03-design-system.md)
