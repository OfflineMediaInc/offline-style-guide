import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  title: "Theme/Component Typography",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Tailwind Typography Utilities

**Use these in shadcn components.** All text utilities inherit the **Satoshi font** from the body cascade.

\`\`\`jsx
// ✅ In shadcn components
<CardTitle className="text-lg font-semibold">Title</CardTitle>
<p className="text-sm text-muted-foreground">Description</p>
<Button className="text-sm font-medium">Click me</Button>
\`\`\`

These utilities map to the Offline design spec. See **Theme/Reference Typography** for the brand standard.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const TextSample = ({
  className,
  label,
  size,
}: {
  className: string
  label: string
  size: string
}) => (
  <div className="flex items-baseline gap-4 py-3 border-b last:border-b-0">
    <span className="w-24 text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded shrink-0">
      {className}
    </span>
    <span className="w-16 text-xs text-muted-foreground shrink-0">{size}</span>
    <span className={className}>{label}</span>
  </div>
)

const WeightSample = ({
  className,
  label,
  weight,
}: {
  className: string
  label: string
  weight: string
}) => (
  <div className="flex items-baseline gap-4 py-3 border-b last:border-b-0">
    <span className="w-28 text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded shrink-0">
      {className}
    </span>
    <span className="w-12 text-xs text-muted-foreground shrink-0">{weight}</span>
    <span className={`text-base ${className}`}>{label}</span>
  </div>
)

export const TextSizes: Story = {
  name: "Text Sizes",
  render: () => (
    <div className="space-y-2">
      <h3 className="text-lg font-bold mb-2">Text Size Utilities</h3>
      <p className="text-sm text-muted-foreground mb-6">
        All sizes inherit Satoshi font from the body cascade.
      </p>
      <div className="border rounded-lg p-4">
        <TextSample className="text-2xl" label="The quick brown fox jumps over the lazy dog" size="24px" />
        <TextSample className="text-xl" label="The quick brown fox jumps over the lazy dog" size="20px" />
        <TextSample className="text-lg" label="The quick brown fox jumps over the lazy dog" size="18px" />
        <TextSample className="text-base" label="The quick brown fox jumps over the lazy dog" size="16px" />
        <TextSample className="text-sm" label="The quick brown fox jumps over the lazy dog" size="14px" />
        <TextSample className="text-xs" label="The quick brown fox jumps over the lazy dog" size="12px" />
      </div>
    </div>
  ),
}

export const FontWeights: Story = {
  name: "Font Weights",
  render: () => (
    <div className="space-y-2">
      <h3 className="text-lg font-bold mb-2">Font Weight Utilities</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Satoshi supports weights 400, 500, and 700.
      </p>
      <div className="border rounded-lg p-4">
        <WeightSample className="font-normal" label="The quick brown fox jumps over the lazy dog" weight="400" />
        <WeightSample className="font-medium" label="The quick brown fox jumps over the lazy dog" weight="500" />
        <WeightSample className="font-semibold" label="The quick brown fox jumps over the lazy dog" weight="600" />
        <WeightSample className="font-bold" label="The quick brown fox jumps over the lazy dog" weight="700" />
      </div>
      <p className="text-xs text-muted-foreground mt-4">
        Note: font-semibold (600) will render as font-bold (700) since Satoshi only has 400, 500, 700.
      </p>
    </div>
  ),
}

export const CommonCombinations: Story = {
  name: "Common Combinations",
  render: () => (
    <div className="space-y-6">
      <h3 className="text-lg font-bold mb-2">Common Combinations in Components</h3>
      <p className="text-sm text-muted-foreground mb-6">
        These are the patterns you'll see in shadcn components.
      </p>

      <div className="border rounded-lg p-4 space-y-4">
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-1">Card Title: text-lg font-semibold</p>
          <p className="text-lg font-semibold">Dashboard Overview</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-1">Card Description: text-sm text-muted-foreground</p>
          <p className="text-sm text-muted-foreground">View your recent activity and statistics.</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-1">Button: text-sm font-medium</p>
          <span className="text-sm font-medium">Submit Form</span>
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-1">Label: text-sm font-medium</p>
          <span className="text-sm font-medium">Email Address</span>
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-1">Helper Text: text-xs text-muted-foreground</p>
          <p className="text-xs text-muted-foreground">Enter your email to receive updates.</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-1">Badge: text-xs font-semibold</p>
          <span className="text-xs font-semibold">NEW</span>
        </div>
      </div>
    </div>
  ),
}

export const MappingToOffline: Story = {
  name: "Mapping to Offline Spec",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold mb-2">Tailwind → Offline Mapping</h3>
      <p className="text-sm text-muted-foreground mb-6">
        How Tailwind utilities approximate the Offline design spec.
      </p>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="text-left p-3 font-semibold">Tailwind</th>
              <th className="text-left p-3 font-semibold">≈ Offline Class</th>
              <th className="text-left p-3 font-semibold">Size/Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3 font-mono text-xs">text-base font-medium</td>
              <td className="p-3">body-large</td>
              <td className="p-3 text-muted-foreground">16px / 500</td>
            </tr>
            <tr className="border-t">
              <td className="p-3 font-mono text-xs">text-sm font-medium</td>
              <td className="p-3">body-medium</td>
              <td className="p-3 text-muted-foreground">14px / 500</td>
            </tr>
            <tr className="border-t">
              <td className="p-3 font-mono text-xs">text-xs font-medium</td>
              <td className="p-3">body-small</td>
              <td className="p-3 text-muted-foreground">12px / 500</td>
            </tr>
            <tr className="border-t">
              <td className="p-3 font-mono text-xs">text-base font-bold</td>
              <td className="p-3">title-medium</td>
              <td className="p-3 text-muted-foreground">16px / 700</td>
            </tr>
            <tr className="border-t">
              <td className="p-3 font-mono text-xs">text-sm font-bold</td>
              <td className="p-3">title-small</td>
              <td className="p-3 text-muted-foreground">14px / 700</td>
            </tr>
            <tr className="border-t">
              <td className="p-3 font-mono text-xs">text-xl font-bold</td>
              <td className="p-3">headline-small</td>
              <td className="p-3 text-muted-foreground">20px / 700</td>
            </tr>
            <tr className="border-t">
              <td className="p-3 font-mono text-xs">text-xs font-bold</td>
              <td className="p-3">label-medium</td>
              <td className="p-3 text-muted-foreground">12px / 700</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-foreground">
        See <strong>Theme/Reference Typography</strong> for the complete Offline design spec.
      </p>
    </div>
  ),
}

export const FontInheritance: Story = {
  name: "Font Inheritance",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold mb-2">How Font Inheritance Works</h3>
      <p className="text-sm text-muted-foreground mb-6">
        The body element sets Satoshi font and 0.02em letter-spacing. All children inherit these.
      </p>

      <div className="border rounded-lg p-4 space-y-4">
        <div className="p-3 bg-muted rounded">
          <p className="text-xs font-mono text-muted-foreground mb-2">CSS Cascade:</p>
          <pre className="text-xs">
{`body {
  font-family: Satoshi, sans-serif;
  letter-spacing: 0.02em;
}

/* All Tailwind text-* utilities inherit Satoshi */
.text-sm { font-size: 14px; }  /* + Satoshi */
.text-lg { font-size: 18px; }  /* + Satoshi */`}
          </pre>
        </div>

        <div>
          <p className="text-xs font-mono text-muted-foreground mb-2">Result:</p>
          <p className="text-sm">This text is 14px Satoshi with 0.02em letter-spacing.</p>
          <p className="text-lg">This text is 18px Satoshi with 0.02em letter-spacing.</p>
        </div>
      </div>
    </div>
  ),
}
