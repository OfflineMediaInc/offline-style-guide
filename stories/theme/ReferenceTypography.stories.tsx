import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  title: "Theme/Reference Typography",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Offline Brand Typography

**This is the "true north" from the Figma design system.**

These classes are defined in \`globals.css\` and represent the official Offline brand typography.
Use them when you need explicit brand consistency in dashboards, marketing content, or branded sections.

\`\`\`jsx
// ✅ For branded content
<h1 className="display-large">Hero Headline</h1>
<span className="stat-mono">$12,345.67</span>
\`\`\`

For shadcn components, use Tailwind utilities instead. See **Theme/Component Typography**.

**Figma Source:** [v0 Design System](https://www.figma.com/design/Zwkc7tgKOp3PCA7KAzlYVR/v0-Design-System-Test?node-id=14-173)
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const SpecRow = ({
  preview,
  token,
  font,
  size,
  weight,
  lineHeight,
  letterSpacing = "0%",
}: {
  preview: string
  token: string
  font: string
  size: string
  weight: string
  lineHeight: string
  letterSpacing?: string
}) => (
  <tr className="border-t">
    <td className="p-3">
      <span className={token}>{preview}</span>
    </td>
    <td className="p-3 font-mono text-xs">{token}</td>
    <td className="p-3 text-sm">{font}</td>
    <td className="p-3 text-sm">{size}</td>
    <td className="p-3 text-sm">{weight}</td>
    <td className="p-3 text-sm">{lineHeight}</td>
    <td className="p-3 text-sm">{letterSpacing}</td>
  </tr>
)

export const FullSpec: Story = {
  name: "Full Specification",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold mb-2">Offline Typography Specification</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Complete typography spec from the Figma design system.
      </p>

      <div className="border rounded-lg overflow-x-auto">
        <table className="w-full text-sm min-w-[800px]">
          <thead className="bg-muted">
            <tr>
              <th className="text-left p-3 font-semibold w-[280px]">Preview</th>
              <th className="text-left p-3 font-semibold">Name / Token</th>
              <th className="text-left p-3 font-semibold">Font</th>
              <th className="text-left p-3 font-semibold">Size</th>
              <th className="text-left p-3 font-semibold">Weight</th>
              <th className="text-left p-3 font-semibold">Line Height</th>
              <th className="text-left p-3 font-semibold">Letter Spacing</th>
            </tr>
          </thead>
          <tbody>
            <SpecRow
              preview="A long time ago in a galaxy far, far away."
              token="display-large"
              font="Cabinet Grotesk"
              size="36px"
              weight="Extra Bold: 800"
              lineHeight="100%"
            />
            <SpecRow
              preview="A long time ago in a galaxy far, far away."
              token="display-medium"
              font="Cabinet Grotesk"
              size="32px"
              weight="Extra Bold: 800"
              lineHeight="100%"
            />
            <SpecRow
              preview="A long time ago in a galaxy far, far away."
              token="display-small"
              font="Cabinet Grotesk"
              size="29px"
              weight="Extra Bold: 800"
              lineHeight="100%"
            />
            <SpecRow
              preview="A long time ago in a galaxy far, far away."
              token="headline-large"
              font="Satoshi"
              size="26px"
              weight="Bold: 700"
              lineHeight="100%"
            />
            <SpecRow
              preview="A long time ago in a galaxy far, far away."
              token="headline-medium"
              font="Satoshi"
              size="23px"
              weight="Bold: 700"
              lineHeight="100%"
            />
            <SpecRow
              preview="A long time ago in a galaxy far, far away."
              token="headline-small"
              font="Satoshi"
              size="20px"
              weight="Bold: 700"
              lineHeight="100%"
            />
            <SpecRow
              preview="A long time ago in a galaxy far, far away."
              token="title-large"
              font="Satoshi"
              size="18px"
              weight="Bold: 700"
              lineHeight="100%"
            />
            <SpecRow
              preview="A long time ago in a galaxy far, far away."
              token="title-medium"
              font="Satoshi"
              size="16px"
              weight="Bold: 700"
              lineHeight="100%"
            />
            <SpecRow
              preview="A long time ago in a galaxy far, far away."
              token="title-small"
              font="Satoshi"
              size="14px"
              weight="Bold: 700"
              lineHeight="100%"
            />
            <SpecRow
              preview="A long time ago in a galaxy far, far away."
              token="body-large"
              font="Satoshi"
              size="16px"
              weight="Medium: 500"
              lineHeight="100%"
            />
            <SpecRow
              preview="A long time ago in a galaxy far, far away."
              token="body-medium"
              font="Satoshi"
              size="14px"
              weight="Medium: 500"
              lineHeight="100%"
            />
            <SpecRow
              preview="A long time ago in a galaxy far, far away."
              token="body-small"
              font="Satoshi"
              size="12px"
              weight="Medium: 500"
              lineHeight="100%"
            />
            <SpecRow
              preview="A long time ago in a galaxy far, far away."
              token="body-x-small"
              font="Satoshi"
              size="10px"
              weight="Medium: 500"
              lineHeight="14px"
            />
            <SpecRow
              preview="A long time ago in a galaxy far, far away."
              token="label-large"
              font="Satoshi"
              size="14px"
              weight="Bold: 700"
              lineHeight="100%"
            />
            <SpecRow
              preview="A long time ago in a galaxy far, far away."
              token="label-medium"
              font="Satoshi"
              size="12px"
              weight="Bold: 700"
              lineHeight="100%"
            />
            <SpecRow
              preview="A long time ago in a galaxy far, far away."
              token="label-small"
              font="Satoshi"
              size="10px"
              weight="Bold: 700"
              lineHeight="100%"
            />
          </tbody>
        </table>
      </div>
    </div>
  ),
}

export const Display: Story = {
  name: "Display (Cabinet Grotesk)",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold mb-2">Display Styles</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Cabinet Grotesk Extra Bold - Used for hero headlines and major section titles.
      </p>

      <div className="border rounded-lg p-6 space-y-6">
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-2">.display-large — 36px / 800</p>
          <p className="display-large">A long time ago in a galaxy far, far away.</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-2">.display-medium — 32px / 800</p>
          <p className="display-medium">A long time ago in a galaxy far, far away.</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-2">.display-small — 29px / 800</p>
          <p className="display-small">A long time ago in a galaxy far, far away.</p>
        </div>
      </div>
    </div>
  ),
}

export const Headlines: Story = {
  name: "Headlines (Satoshi Bold)",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold mb-2">Headline Styles</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Satoshi Bold - Used for section headings.
      </p>

      <div className="border rounded-lg p-6 space-y-6">
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-2">.headline-large — 26px / 700</p>
          <p className="headline-large">A long time ago in a galaxy far, far away.</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-2">.headline-medium — 23px / 700</p>
          <p className="headline-medium">A long time ago in a galaxy far, far away.</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-2">.headline-small — 20px / 700</p>
          <p className="headline-small">A long time ago in a galaxy far, far away.</p>
        </div>
      </div>
    </div>
  ),
}

export const Titles: Story = {
  name: "Titles (Satoshi Bold)",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold mb-2">Title Styles</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Satoshi Bold - Used for card headers and list items.
      </p>

      <div className="border rounded-lg p-6 space-y-6">
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-2">.title-large — 18px / 700</p>
          <p className="title-large">A long time ago in a galaxy far, far away.</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-2">.title-medium — 16px / 700</p>
          <p className="title-medium">A long time ago in a galaxy far, far away.</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-2">.title-small — 14px / 700</p>
          <p className="title-small">A long time ago in a galaxy far, far away.</p>
        </div>
      </div>
    </div>
  ),
}

export const Body: Story = {
  name: "Body (Satoshi Medium)",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold mb-2">Body Styles</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Satoshi Medium - Used for paragraphs and descriptions.
      </p>

      <div className="border rounded-lg p-6 space-y-6">
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-2">.body-large — 16px / 500</p>
          <p className="body-large">A long time ago in a galaxy far, far away.</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-2">.body-medium — 14px / 500</p>
          <p className="body-medium">A long time ago in a galaxy far, far away.</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-2">.body-small — 12px / 500</p>
          <p className="body-small">A long time ago in a galaxy far, far away.</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-2">.body-x-small — 10px / 500</p>
          <p className="body-x-small">A long time ago in a galaxy far, far away.</p>
        </div>
      </div>
    </div>
  ),
}

export const Labels: Story = {
  name: "Labels (Satoshi Bold)",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold mb-2">Label Styles</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Satoshi Bold - Used for form labels and badges.
      </p>

      <div className="border rounded-lg p-6 space-y-6">
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-2">.label-large — 14px / 700</p>
          <p className="label-large">A long time ago in a galaxy far, far away.</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-2">.label-medium — 12px / 700</p>
          <p className="label-medium">A long time ago in a galaxy far, far away.</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-2">.label-small — 10px / 700</p>
          <p className="label-small">A long time ago in a galaxy far, far away.</p>
        </div>
      </div>
    </div>
  ),
}

export const Special: Story = {
  name: "Special (Nav & Stats)",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold mb-2">Special Styles</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Navigation and monospace styles for specific use cases.
      </p>

      <div className="border rounded-lg p-6 space-y-6">
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-2">.nav-label — 12px / 800 / letter-spacing: 0.33em</p>
          <p className="nav-label uppercase">Navigation Label</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-2">.nav-link — 22px / 500 / hover: opacity 0.72</p>
          <a href="#" className="nav-link">Navigation Link</a>
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-2">.stat-mono — DM Mono / 500 / letter-spacing: 0.04em</p>
          <p className="stat-mono text-2xl">$12,345.67</p>
        </div>
      </div>
    </div>
  ),
}

export const FontFamilies: Story = {
  name: "Font Families",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold mb-2">Font Stack</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Three fonts used in the Offline design system.
      </p>

      <div className="space-y-4">
        <div className="border rounded-lg p-4">
          <p className="text-xs font-mono text-muted-foreground mb-2">Cabinet Grotesk — Display headings</p>
          <p className="display-medium">The quick brown fox jumps over the lazy dog</p>
        </div>
        <div className="border rounded-lg p-4">
          <p className="text-xs font-mono text-muted-foreground mb-2">Satoshi — Body text, UI elements</p>
          <p className="text-lg">The quick brown fox jumps over the lazy dog</p>
        </div>
        <div className="border rounded-lg p-4">
          <p className="text-xs font-mono text-muted-foreground mb-2">DM Mono — Numbers, stats, code</p>
          <p className="stat-mono text-lg">The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
    </div>
  ),
}
