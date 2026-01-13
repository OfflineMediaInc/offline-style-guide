import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  title: "Theme/Colors",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Offline Color System

The Offline brand uses a carefully curated color palette. Colors are defined as CSS custom properties in \`globals.css\`.

### Primary Colors
- **Gray 900 (#191919)** - Primary text, buttons, UI elements
- **Yellow 400 (#DE8E0F)** - Brand accent, highlights (NEVER for buttons)
- **Blue 400 (#004FFF)** - Links, interactive elements

### Usage Guidelines
- Primary buttons use **black (#191919)**, not yellow
- Yellow is reserved for accents, badges, and highlights
- Use semantic colors for status (success, error, warning)
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const ColorSwatch = ({
  name,
  variable,
  hex
}: {
  name: string
  variable: string
  hex: string
}) => (
  <div className="flex items-center gap-4 p-2">
    <div
      className="w-16 h-16 rounded-lg shadow-sm border border-gray-200"
      style={{ backgroundColor: hex }}
    />
    <div>
      <p className="font-semibold text-sm">{name}</p>
      <p className="text-xs text-muted-foreground font-mono">{variable}</p>
      <p className="text-xs text-muted-foreground font-mono">{hex}</p>
    </div>
  </div>
)

const ColorScale = ({
  name,
  colors
}: {
  name: string
  colors: { level: string; hex: string }[]
}) => (
  <div className="mb-8">
    <h3 className="text-lg font-bold mb-4">{name}</h3>
    <div className="flex flex-wrap gap-2">
      {colors.map(({ level, hex }) => (
        <div key={level} className="text-center">
          <div
            className="w-16 h-16 rounded-lg shadow-sm border border-gray-100"
            style={{ backgroundColor: hex }}
          />
          <p className="text-xs font-mono mt-1">{level}</p>
          <p className="text-[10px] text-muted-foreground font-mono">{hex}</p>
        </div>
      ))}
    </div>
  </div>
)

export const YellowScale: Story = {
  name: "Yellow (Brand Accent)",
  render: () => (
    <ColorScale
      name="Yellow - Brand Accent"
      colors={[
        { level: "25", hex: "#fff2d8" },
        { level: "50", hex: "#ffe9bd" },
        { level: "100", hex: "#ffd386" },
        { level: "200", hex: "#ffbd54" },
        { level: "300", hex: "#f0a52c" },
        { level: "400", hex: "#de8e0f" },
        { level: "500", hex: "#c57900" },
        { level: "600", hex: "#a76700" },
        { level: "700", hex: "#835100" },
        { level: "800", hex: "#5c3900" },
        { level: "900", hex: "#331f00" },
      ]}
    />
  ),
}

export const GrayScale: Story = {
  name: "Gray (UI & Text)",
  render: () => (
    <ColorScale
      name="Gray - UI & Text"
      colors={[
        { level: "25", hex: "#f2f2f2" },
        { level: "50", hex: "#ececec" },
        { level: "100", hex: "#dfdfdf" },
        { level: "200", hex: "#c6c6c6" },
        { level: "300", hex: "#aeaeae" },
        { level: "400", hex: "#959595" },
        { level: "500", hex: "#7c7c7c" },
        { level: "600", hex: "#636363" },
        { level: "700", hex: "#4a4a4a" },
        { level: "800", hex: "#323232" },
        { level: "900", hex: "#191919" },
      ]}
    />
  ),
}

export const BlueScale: Story = {
  name: "Blue (Links & Actions)",
  render: () => (
    <ColorScale
      name="Blue - Links & Actions"
      colors={[
        { level: "25", hex: "#d8e7ff" },
        { level: "50", hex: "#bed6ff" },
        { level: "100", hex: "#85afff" },
        { level: "200", hex: "#508bff" },
        { level: "300", hex: "#236aff" },
        { level: "400", hex: "#004fff" },
        { level: "500", hex: "#0046e0" },
        { level: "600", hex: "#003bbb" },
        { level: "700", hex: "#002e91" },
        { level: "800", hex: "#001f63" },
        { level: "900", hex: "#001033" },
      ]}
    />
  ),
}

export const SemanticColors: Story = {
  name: "Semantic Colors",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Semantic Colors</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ColorSwatch
          name="Success"
          variable="--semantic-success500"
          hex="#099250"
        />
        <ColorSwatch
          name="Error / Destructive"
          variable="--colors-red-400"
          hex="#d31a0c"
        />
        <ColorSwatch
          name="Primary"
          variable="--colors-gray-900"
          hex="#191919"
        />
        <ColorSwatch
          name="Accent"
          variable="--colors-yellow-400"
          hex="#de8e0f"
        />
      </div>
    </div>
  ),
}

export const ShadcnMapping: Story = {
  name: "shadcn Variable Mapping",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">shadcn CSS Variable Mapping</h3>
      <p className="text-sm text-muted-foreground mb-4">
        How Offline colors map to shadcn&apos;s semantic variables.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 pr-4">shadcn Variable</th>
              <th className="text-left py-2 pr-4">Offline Token</th>
              <th className="text-left py-2 pr-4">Value</th>
              <th className="text-left py-2">Preview</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-4 font-mono text-xs">--primary</td>
              <td className="py-2 pr-4">Gray 900</td>
              <td className="py-2 pr-4 font-mono text-xs">#191919</td>
              <td className="py-2"><div className="w-8 h-8 rounded" style={{ backgroundColor: "#191919" }} /></td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4 font-mono text-xs">--background</td>
              <td className="py-2 pr-4">White</td>
              <td className="py-2 pr-4 font-mono text-xs">#ffffff</td>
              <td className="py-2"><div className="w-8 h-8 rounded border" style={{ backgroundColor: "#ffffff" }} /></td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4 font-mono text-xs">--muted</td>
              <td className="py-2 pr-4">Gray 25</td>
              <td className="py-2 pr-4 font-mono text-xs">#f2f2f2</td>
              <td className="py-2"><div className="w-8 h-8 rounded" style={{ backgroundColor: "#f2f2f2" }} /></td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4 font-mono text-xs">--border</td>
              <td className="py-2 pr-4">Gray 100</td>
              <td className="py-2 pr-4 font-mono text-xs">#dfdfdf</td>
              <td className="py-2"><div className="w-8 h-8 rounded" style={{ backgroundColor: "#dfdfdf" }} /></td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4 font-mono text-xs">--destructive</td>
              <td className="py-2 pr-4">Red 400</td>
              <td className="py-2 pr-4 font-mono text-xs">#d31a0c</td>
              <td className="py-2"><div className="w-8 h-8 rounded" style={{ backgroundColor: "#d31a0c" }} /></td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-mono text-xs">--accent</td>
              <td className="py-2 pr-4">Yellow 400</td>
              <td className="py-2 pr-4 font-mono text-xs">#de8e0f</td>
              <td className="py-2"><div className="w-8 h-8 rounded" style={{ backgroundColor: "#de8e0f" }} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
}
