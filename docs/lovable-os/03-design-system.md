# 03 — Design System

The **only** place where visual tokens are defined. Every other section references this one.

Tokens live in `src/styles.css` as CSS custom properties and Tailwind v4 `@theme` variables. Never hardcode values in components.

## Container

- Max width: **1280px**
- Never exceed. Never use full-width content without purpose.

## Spacing Scale

Only these values, in `px`:

```
8, 16, 24, 32, 48, 64, 80, 96
```

No random spacing. No arbitrary values in Tailwind unless they map to a token.

## Radius Scale

```
8, 12, 16, 24
```

## Typography Scale

| Level | Desktop | Mobile |
|---|---|---|
| H1 | 56–64 | 36–40 |
| H2 | 40–48 | 28–30 |
| H3 | 28–32 | 22–24 |
| Body | 18 | 16 (minimum) |
| Nav | 16 | 16 |
| Eyebrow | 12 | 12 (minimum) |

- Never smaller than 16px for body on mobile.
- Never smaller than 12px anywhere.
- Line length: max ~70 characters.

## Color System

- **White** — primary background.
- **Dark gray / near-black** — contrast sections for visual rhythm.
- **AbuFarha Red (`#E53935`)** — accent only. Never as a flooded background.

All colors must be semantic tokens in `src/styles.css`. No hex values in components. No `text-white`, `bg-black`, or arbitrary colors in JSX.

## Shadow Scale

Small / Medium / Large. Defined in tokens. No custom `box-shadow` in components.

## Imagery Rules

**Preferred:**

- Real medical equipment
- Real hospitals
- Real engineers and installations
- Editorial medical photography with natural lighting

**Forbidden:**

- AI-generated hero imagery that looks synthetic
- Fantasy, neon, sci-fi renders
- Watermarked stock imagery
- Stretched or distorted images

**Exceptions** are listed in the [Exceptions Register](./11-exceptions-register.md).

## Icon Rules

- **One icon style per project.** Never mix outline / filled / 3D / gradient.
- Icons are semantic — every icon-only button carries an `aria-label`.

## Section Rhythm

Sections must alternate. Forbidden pattern:

```
Cards → Cards → Cards → Cards
```

Preferred pattern:

```
Hero → Image + Text → Timeline → Statistics → Bento → Accordion → CTA
```

Every section should feel different from its neighbors.

## Whitespace

Whitespace is intentional. Never fill empty space just to avoid emptiness.

---

**Next:** [04 — Component Library](./04-component-library.md)
