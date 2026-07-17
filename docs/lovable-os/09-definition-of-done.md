# 09 — Definition of Done

The **only** place "done" is defined. Every task passes this gate.

## Universal Gate (Every Task)

A task is not done until all of the following are true:

- [ ] No console errors
- [ ] No TypeScript or ESLint errors
- [ ] No horizontal overflow at any breakpoint
- [ ] No tiny text (< 12px) or unreadable body (< 16px on mobile)
- [ ] No duplicated components or data
- [ ] No placeholder content, TODO, or fake data
- [ ] No desktop regression
- [ ] No accessibility blocker
- [ ] No broken responsive breakpoints
- [ ] No SEO regression
- [ ] [Engineering Checklist](./06-engineering-checklist.md) passed
- [ ] [Enterprise Question](./00-constitution.md#the-enterprise-question) answered yes

## Mode-Specific Gate

Added to the universal gate based on the task's [mode](./01-decision-engine.md#mode-matrix):

### Build
- [ ] New route has route-specific `head()` metadata
- [ ] Reuses existing components where possible
- [ ] Data reads from single source of truth

### Fix
- [ ] Root cause documented (not just symptom)
- [ ] Reproduction steps captured
- [ ] Category of bug fixed everywhere, not only reported instance

### Improve
- [ ] Before/after screenshots attached
- [ ] No layout or identity change
- [ ] Measurable improvement (a11y score, spacing consistency, etc.)

### Refactor
- [ ] Pixel-identical screenshots before and after
- [ ] No behavioral change

### Responsive
- [ ] [Responsive Checklist](./07-responsive-checklist.md) passed at every breakpoint
- [ ] Desktop pixel-identical to baseline

### SEO
- [ ] [SEO section of QA](./08-qa-checklist.md#seo-qa) passed
- [ ] No visual change
- [ ] Report of changes attached

### Performance
- [ ] Lighthouse before/after attached
- [ ] No UX regression

### Accessibility
- [ ] [A11y section of QA](./08-qa-checklist.md#accessibility-qa) passed
- [ ] Manual keyboard walkthrough completed

### QA
- [ ] Report generated (not implemented)
- [ ] Findings prioritized P0/P1/P2/P3
- [ ] Each finding includes: location, severity, cause, recommendation

### Release
- [ ] Full [QA Checklist](./08-qa-checklist.md) passed
- [ ] Changelog entry written
- [ ] Rollback plan documented
- [ ] Version bumped

## The Two Rejection Rules

1. If any box above is unchecked, the task is not done — continue working.
2. If a shipped task later reveals a missed box, treat it as a P0 regression and open a fix task.

---

**Next:** [10 — Release Manual](./10-release-manual.md)
