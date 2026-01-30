# CLAUDE.md — Offline Style Guide (Design System)

## Project Overview

This is the **Offline Design System** Storybook project. It contains reusable UI components published as `@offlinemediainc/offline-ui`, Storybook stories for documentation, and the Offline brand theme (colors, typography, shadows, surfaces).

## Development Commands

```bash
pnpm install                # Install dependencies
pnpm storybook              # Start Storybook on port 6006
pnpm build:lib              # Build the component library for publishing
pnpm test                   # Run Vitest unit tests
```

Storybook runs on **port 6006** (see Port Registry in root CLAUDE.md).

## CRITICAL: Typography in Components

**Use Tailwind utilities, NOT Offline spec classes.**

This is the #1 source of bugs in this project. The design system has two typography systems:

| System | Classes | Purpose | Use in components? |
|--------|---------|---------|-------------------|
| **Tailwind utilities** | `text-xs`, `text-sm`, `font-medium`, `font-bold` | Component styling | **YES — always use these** |
| **Offline spec classes** | `body-small`, `headline-large`, `title-medium` | Brand reference docs | **NO — never use in components** |

### Why this matters

The typography architecture works like this:

```
body {
  font-family: Satoshi, sans-serif;    ← set once on <body>
  letter-spacing: 0.02em;             ← set once on <body>
}

/* Tailwind utilities — CLEAN PATH ✅ */
.text-xs  { font-size: 12px; }   → inherits Satoshi + 0.02em ✅
.text-sm  { font-size: 14px; }   → inherits Satoshi + 0.02em ✅
.text-base { font-size: 16px; }  → inherits Satoshi + 0.02em ✅

/* Offline spec classes — BROKEN IN STORYBOOK ❌ */
.body-small {
  font-family: var(--font-satoshi);   ← redundant
  font-size: 12px;
  font-weight: 500;
  line-height: 1;                     ← WRONG (should be 16px)
  letter-spacing: 0;                  ← BLOCKS 0.02em inheritance
}
```

The Offline spec classes are defined in `globals.css` inside `@layer components`. In Tailwind v4, layered styles have **lower specificity** than unlayered styles, so Storybook can't render them correctly. A workaround file (`.storybook/fonts.css`) re-declares them without `@layer`, but with incorrect `line-height` and `letter-spacing` values.

**Tailwind utilities don't have this problem** because they only set `font-size` and inherit everything else from the body cascade.

### Mapping cheat sheet

| What you want | Use this (Tailwind) | NOT this (Offline spec) |
|---------------|--------------------|-----------------------|
| 12px medium text | `text-xs font-medium` | ~~`body-small`~~ |
| 14px medium text | `text-sm font-medium` | ~~`body-medium`~~ |
| 16px medium text | `text-base font-medium` | ~~`body-large`~~ |
| 14px bold text | `text-sm font-bold` | ~~`title-small`~~ |
| 16px bold text | `text-base font-bold` | ~~`title-medium`~~ |
| 20px bold text | `text-xl font-bold` | ~~`headline-small`~~ |
| 12px bold text | `text-xs font-bold` | ~~`label-medium`~~ |

See `Theme/Component Typography` in Storybook for the full mapping and rationale.

### Where Offline spec classes ARE appropriate

- **Story files** (`*.stories.tsx`) that demonstrate the branded reference typography
- **`src/styles/theme.css`** — the exported theme for consuming apps
- **NEVER** in `src/components/` — actual component implementations

## CRITICAL: Colors in Components

Use CSS variables from the theme, not Tailwind color utilities:

```tsx
// ✅ Correct — uses design system colors
className="text-[var(--colors-gray-700)]"
className="bg-[var(--semantic-success500)]"
className="border-[var(--colors-blue-400)]"

// ✅ Also correct — shadcn semantic colors
className="text-muted-foreground"
className="bg-primary"

// ❌ Wrong — Tailwind defaults, not Offline palette
className="text-gray-700"
className="bg-green-600"
className="border-blue-500"
```

Color reference: see `Theme/Colors` in Storybook, or the skill file at `.claude/skills/offline-style-guide.md`.

## Component Layout Patterns

### Horizontal stepper / progress indicators

Use **absolute-positioned connecting lines** behind percentage-placed steps. Do NOT use CSS grid for line+circle layouts — it creates intractable conflicts between line width and label centering.

Reference implementation: `src/components/progress-stepper.tsx`
Original source: `offline-event-form/features/workflows/core/components/WorkflowRowTimeline.tsx`

## File Structure

```
src/
  components/     ← Actual component implementations (published to npm)
  lib/            ← Utilities (cn, etc.)
  styles/         ← Exportable theme CSS
components/
  ui/             ← Storybook re-exports + story files
stories/
  theme/          ← Theme documentation stories (colors, typography, shadows)
app/
  globals.css     ← Main CSS with @layer components (typography, theme vars)
.storybook/
  fonts.css       ← Storybook-only typography overrides (workaround for @layer)
```

## Git Rules

- **NEVER commit or push unless the user explicitly asks**
