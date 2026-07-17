# 04 — Component Library

Canonical component contracts. Every component must be reusable, composable, responsive, accessible, maintainable, and predictable.

Visual tokens (spacing, radius, typography, color) are defined in [03 — Design System](./03-design-system.md) and referenced here — never redefined.

## Header / Navigation

**Desktop:**

- Height 72–88px
- Nav label size 16px
- Contains: Logo, Nav, Search, Language, Contact CTA
- Sticky; transparent over Hero, solid after scroll

**Mobile:**

- Contains only: Logo, Search, Menu
- Nothing else. Never place six buttons on mobile.
- Mobile nav opens as a drawer with 48×48 minimum tap targets.

## Hero

Every Hero contains, in order:

1. Small eyebrow label
2. Strong heading (H1)
3. Description (≤ 2 lines desktop, ≤ 3 lines mobile)
4. Primary CTA
5. Secondary CTA (optional)
6. Trust indicators
7. Hero image (real photography)

**Caps:** 1 heading, 1 description paragraph, max 2 buttons, ≤ 5 trust indicators.

## Section

Every content section contains:

1. Heading
2. Short description
3. Content
4. Optional CTA

Never jump directly into content without a heading.

## Card

- Padding 32
- Radius 16
- Equal height and equal padding across a row
- Icon / image → Title → Description → Action
- Hover: small lift + small shadow
- No floating buttons

## Feature Grid

- Desktop: 2, 3, or 4 columns
- Tablet: 2 columns
- Mobile: 1 column
- Never 5 columns

## Timeline

Only for process explanation. Never for statistics or random content.

## Statistics

- Max 6 items
- Large number + short label
- Only real numbers. Never fabricated.

## Testimonial

- Photo + Name + Position + Company + Quote
- If no real testimonials exist, remove the section. Never invent.

## Logo Cloud

- Equal visual height
- Original aspect ratio
- Lazy-loaded

## FAQ

- Accordion, one answer open at a time
- Max width 900px, centered

## Form

Every form must implement:

- Visible labels (always)
- Inline validation
- Loading state
- Success state
- Error state (friendly, not raw stack traces)
- Keyboard-accessible
- Mobile inputs ≥ 48px tall

## Buttons

Primary (filled red) / Secondary (outline) / Ghost (text only) / Danger (red) / Disabled (visible difference) / Loading (spinner).

- Never more than **one Primary CTA per visual group**.
- Tap targets ≥ 48×48 on mobile.

## Modal

- Centered
- ESC closes
- Focus trap
- Fullscreen on mobile if needed

## Table

- Sticky header
- Horizontal scroll on mobile — never shrink text below readable size

## Footer

Contains: Company, Solutions, Products, Services, Support, Countries, Contact, Social, Legal, Copyright.
Nothing decorative. Nothing unnecessary.
Mobile: [approved accordion pattern](./11-exceptions-register.md#mobile-footer-accordion).

## Empty / Error / Loading States

Every stateful component must handle all three. Never leave blank screens or raw errors.

## Component Review Checklist

Before approval:

- Reusable? Responsive? Accessible? Maintainable?
- Matches design system tokens?
- Understandable by another engineer in < 5 minutes?

If any answer is no — redesign.

---

**Next:** [05 — Architecture (TanStack Start)](./05-architecture.md)
