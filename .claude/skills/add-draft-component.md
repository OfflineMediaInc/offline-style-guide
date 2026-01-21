# Add Draft Component Skill

This skill guides adding new shadcn/ui components to @offlinemediainc/offline-ui with a draft review workflow.

## Workflow Overview

```
Draft → David Reviews in Storybook → Approved → Published
```

## Steps to Add a New Component

### 1. Install Dependencies (if needed)

Most components use Radix UI primitives:
```bash
pnpm add @radix-ui/react-<primitive>
```

Common mappings:
- Checkbox → `@radix-ui/react-checkbox`
- Select → `@radix-ui/react-select`
- AlertDialog → `@radix-ui/react-alert-dialog`
- Accordion → `@radix-ui/react-accordion`
- Progress → `@radix-ui/react-progress`

Some components have no dependencies (Textarea, Table) or use other libraries (InputOTP → `input-otp`, Sonner → `sonner`).

### 2. Create Component File

Add component to `src/components/<component-name>.tsx`

⚠️ **IMPORTANT:** Component source MUST go in `src/components/`, NOT in `components/ui/`.
- `src/components/` → Package source (gets exported and published)
- `components/ui/` → Stories only (NOT exported)

Use the shadcn/ui component code as base. Components will automatically pick up Offline theme via CSS variables in `theme.css`.

### 3. Create Story File (Draft)

Add story to `components/ui/<component-name>.stories.tsx`

**Important:** Use `title: "Draft/<ComponentName>"` to place in Draft section:

```tsx
import type { Meta, StoryObj } from "@storybook/react"
import { ComponentName } from "../../src/components/component-name"

const meta: Meta<typeof ComponentName> = {
  title: "Draft/ComponentName",  // ← Draft section for review
  component: ComponentName,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  // ...
}
```

### 4. Review in Storybook

Run Storybook and have David review the component under the "Draft" section:
```bash
pnpm storybook
```

### 5. Iterate with Claude

If David wants changes, work with Claude to adjust:
- Styling (colors, spacing, variants)
- Behavior (props, defaults)
- Documentation (story examples)

### 6. Approve Component

When David approves, make these changes:

#### 6.1 Update story title
```tsx
title: "Draft/ComponentName"  →  title: "UI/ComponentName"
```

#### 6.2 Add export to `src/index.ts` ⚠️ CRITICAL
**This step is required for the component to be usable from the package.**

```tsx
export * from "./components/component-name"
```

#### 6.3 Verify the export works
```bash
pnpm build:lib
grep "ComponentName" dist/index.d.ts
```

#### 6.4 Bump version in `package.json`

#### 6.5 Publish
```bash
pnpm publish
```

### 7. Pre-Publish Verification ⚠️ REQUIRED

Run this before every publish to catch missing exports:

```bash
# Check for UI/ components missing from src/index.ts
echo "=== Checking for missing exports ==="
for story in components/ui/*.stories.tsx; do
  grep -q 'title: "UI/' "$story" || continue
  name=$(basename "$story" .stories.tsx)
  grep -q "components/$name" src/index.ts || echo "MISSING EXPORT: $name"
  [ -f "src/components/$name.tsx" ] || echo "MISSING SOURCE: $name"
done
echo "=== Check complete ==="
```

This catches both failure modes:
1. **Missing export:** Component in `src/components/` but not added to `src/index.ts`
2. **Wrong location:** Story imports from `./component` instead of `../../src/components/`

## Component Locations

| Type | Location | Notes |
|------|----------|-------|
| Component source | `src/components/<name>.tsx` | ⚠️ Required for export |
| Story file | `components/ui/<name>.stories.tsx` | Import from `../../src/components/` |
| Exports | `src/index.ts` | Add when approved |
| Theme/styles | `src/styles/theme.css` | |

**Common mistake:** Creating component in `components/ui/<name>.tsx` instead of `src/components/<name>.tsx`. The `components/ui/` folder is for stories only—component source files there won't be exported.

## Storybook Sections

- **UI/** - Approved, published components
- **Draft/** - Components pending David's review
- **Theme/** - Design tokens documentation

## Notes

- Components use CSS variables from `theme.css` (automatically themed)
- Do NOT add to `src/index.ts` until approved
- **ALWAYS add to `src/index.ts` when moving Draft → UI** (step 6.2)
- BarChart and custom visualizations are not standard shadcn - handle separately

## Style Sync Checklist

When working on this repo, verify these files stay in sync:

### CSS Variables (theme.css ↔ globals.css)
- [ ] Chart colors (`--chart-1` through `--chart-8`)
- [ ] Sidebar variables (`--sidebar-*`)
- [ ] Brand colors (`--colors-yellow-*`, `--colors-blue-*`, `--colors-gray-*`)

### Typography Classes
Both files should have identical definitions for:
- `.display-large`, `.display-medium`, `.display-small`
- `.headline-*`, `.title-*`, `.body-*`, `.label-*`
- `.nav-label`, `.nav-link`, `.stat-mono`
- `.badge-premium`

### Key Locations
| What | npm package | Storybook/dev |
|------|-------------|---------------|
| CSS variables & classes | `src/styles/theme.css` | `app/globals.css` |
| Components | `src/components/` | - |
| Stories | - | `components/ui/*.stories.tsx` |

### Before Publishing
Run `pnpm build:lib` and verify `dist/styles.css` contains all expected classes and variables.

## Past Issues (Why This Workflow Exists)

In v0.1.3, components were promoted from Draft → UI but weren't usable from the package:

| Issue | What Happened | Prevention |
|-------|---------------|------------|
| Missing exports | Accordion, AlertDialog, Checkbox, InputOTP, Progress moved to UI/ but step 6.2 skipped | Step 7 verification script |
| Wrong file location | Chart, Breadcrumb created in `components/ui/` instead of `src/components/` | ⚠️ warnings in steps 2-3 |
| Story imports | Stories imported `from "./chart"` instead of `from "../../src/components/chart"` | Step 3 example shows correct import |

**Result:** 8 components appeared in Storybook but couldn't be imported from the package. Always run the step 7 verification before publishing.
