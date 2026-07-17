# 07 — Responsive Checklist

The single authoritative gate for responsive quality.

**Desktop is locked** ([Constitution](./00-constitution.md#source-of-truth)). Every responsive fix must be scoped to `sm:` / `md:` / `lg:` breakpoints and never modify shared desktop styles.

## Breakpoints Tested

| Name | Width |
|---|---|
| Small mobile | 320 |
| Mobile | 375 |
| Large mobile | 414 |
| Tablet | 768 |
| Laptop | 1024 |
| Desktop | 1440 |
| Large desktop | 1920 |

## Per-Breakpoint Checks

For every page × breakpoint:

- [ ] No horizontal scroll
- [ ] No overlapping content
- [ ] No cropped text or images
- [ ] Navigation usable
- [ ] Hero legible
- [ ] Cards intact (aligned, equal height)
- [ ] Images not stretched
- [ ] Forms usable (inputs ≥ 48px tall on mobile)
- [ ] Tables scroll horizontally if needed — never shrink below readable size
- [ ] Footer intact
- [ ] All tap targets ≥ 48×48 on mobile

## Typography Minimums

- [ ] Body ≥ 16px on mobile
- [ ] No text below 12px anywhere
- [ ] Uppercase eyebrows ≥ 12px on mobile
- [ ] Line length ≤ ~70 characters

## Mobile-Specific Rules

- [ ] Mobile header shows only Logo + Search + Menu
- [ ] Mobile nav opens as drawer, tap targets ≥ 48×48
- [ ] Multi-column footer collapses to accordion ([approved](./11-exceptions-register.md#mobile-footer-accordion))
- [ ] Long horizontal timelines convert to vertical below 768px
- [ ] Hero CTAs stack, capped at 2 per slide

## Regression Guard

- [ ] Desktop screenshot at 1440 matches pre-change baseline pixel-for-pixel
- [ ] Desktop screenshot at 1920 matches pre-change baseline
- [ ] No shared component's default styles were changed to fix mobile

## Verification Method

Playwright via shell:

```bash
# See browser-use in AGENTS: launch, viewport 1280×1800 (or the target),
# navigate, screenshot per breakpoint, compare.
```

Screenshots at every breakpoint attached to the release report.

---

**Next:** [08 — QA Checklist](./08-qa-checklist.md)
