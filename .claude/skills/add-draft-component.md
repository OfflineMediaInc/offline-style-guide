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

1. **Update story title:**
   ```tsx
   title: "Draft/ComponentName"  →  title: "UI/ComponentName"
   ```

2. **Add export to `src/index.ts`:**
   ```tsx
   export * from "./components/component-name"
   ```

3. **Bump version in `package.json`**

4. **Publish:**
   ```bash
   pnpm publish
   ```

## Component Locations

| Type | Location |
|------|----------|
| Component source | `src/components/<name>.tsx` |
| Story file | `components/ui/<name>.stories.tsx` |
| Exports | `src/index.ts` |
| Theme/styles | `src/styles/theme.css` |

## Storybook Sections

- **UI/** - Approved, published components
- **Draft/** - Components pending David's review
- **Theme/** - Design tokens documentation

## Notes

- Components use CSS variables from `theme.css` (automatically themed)
- Do NOT add to `src/index.ts` until approved
- BarChart and custom visualizations are not standard shadcn - handle separately
