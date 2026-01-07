import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  title: "Theme/Surfaces",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Offline Surface System

Surfaces are pre-composed utility classes that combine background, border, border-radius, and shadow for common UI patterns.

### Available Surfaces
- **surface-card** - Standard card surface (20px radius)
- **surface-card-compact** - Compact card surface (16px radius)
- **surface-premium** - Premium gold gradient border

### Usage
\`\`\`html
<div class="surface-card p-6">Standard card</div>
<div class="surface-card-compact p-4">Compact card</div>
<div class="surface-premium p-6">Premium card</div>
\`\`\`
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const SurfaceCard: Story = {
  name: "Surface Card",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Surface Card</h3>
      <p className="text-sm text-muted-foreground">
        Standard card surface with white background, gray border, 20px radius, and card shadow.
      </p>
      <div className="bg-gray-100 p-8 rounded-xl">
        <div className="surface-card p-6 max-w-md">
          <h4 className="title-medium mb-2">Standard Card</h4>
          <p className="body-medium text-muted-foreground">
            This uses the surface-card utility class which combines all the styling for a standard card.
          </p>
        </div>
      </div>
      <div className="mt-4 p-4 bg-muted rounded-lg">
        <p className="text-xs font-mono mb-2">CSS Definition:</p>
        <pre className="text-xs overflow-x-auto">
{`.surface-card {
  background-color: #ffffff;
  border: 1px solid var(--colors-gray-100);
  border-radius: 1.25rem; /* 20px */
  box-shadow: var(--card-shadow);
}`}
        </pre>
      </div>
    </div>
  ),
}

export const SurfaceCardCompact: Story = {
  name: "Surface Card Compact",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Surface Card Compact</h3>
      <p className="text-sm text-muted-foreground">
        Compact card surface with tighter 16px radius, ideal for smaller UI elements.
      </p>
      <div className="bg-gray-100 p-8 rounded-xl">
        <div className="flex gap-4">
          <div className="surface-card-compact p-4">
            <h4 className="title-small mb-1">Compact Card</h4>
            <p className="body-small text-muted-foreground">Smaller radius</p>
          </div>
          <div className="surface-card-compact p-4">
            <h4 className="title-small mb-1">Compact Card</h4>
            <p className="body-small text-muted-foreground">Smaller radius</p>
          </div>
          <div className="surface-card-compact p-4">
            <h4 className="title-small mb-1">Compact Card</h4>
            <p className="body-small text-muted-foreground">Smaller radius</p>
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 bg-muted rounded-lg">
        <p className="text-xs font-mono mb-2">CSS Definition:</p>
        <pre className="text-xs overflow-x-auto">
{`.surface-card-compact {
  background-color: #ffffff;
  border: 1px solid var(--colors-gray-100);
  border-radius: 1rem; /* 16px */
  box-shadow: var(--card-shadow);
}`}
        </pre>
      </div>
    </div>
  ),
}

export const SurfacePremium: Story = {
  name: "Surface Premium",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Surface Premium</h3>
      <p className="text-sm text-muted-foreground">
        Premium surface with gold gradient border. Used for VIP, premium, or featured content.
      </p>
      <div className="bg-gray-100 p-8 rounded-xl">
        <div className="surface-premium p-6 max-w-md">
          <div className="badge-premium mb-4">
            <span>PREMIUM</span>
          </div>
          <h4 className="title-medium mb-2">Premium Experience</h4>
          <p className="body-medium text-muted-foreground">
            This card uses the surface-premium utility which adds a sophisticated gold gradient border.
          </p>
        </div>
      </div>
      <div className="mt-4 p-4 bg-muted rounded-lg">
        <p className="text-xs font-mono mb-2">CSS Definition:</p>
        <pre className="text-xs overflow-x-auto">
{`.surface-premium {
  position: relative;
  border-radius: 1.25rem;
  border: 3px solid transparent;
  background:
    linear-gradient(#ffffff, #ffffff) padding-box,
    linear-gradient(92deg,
      #bca687 2.57%, #b8a284 8.96%,
      #f9f2e8 10.5%, #c1b5a2 32.05%,
      #ab8f76 35.52%, #735b42 65.89%,
      #a68b6e 74%, #b79a7a 90.26%,
      #8f7e61 98.62%
    ) border-box;
  box-shadow: var(--card-shadow);
}`}
        </pre>
      </div>
    </div>
  ),
}

export const BadgePremium: Story = {
  name: "Badge Premium",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Badge Premium</h3>
      <p className="text-sm text-muted-foreground">
        Premium badge with black background and gold gradient text.
      </p>
      <div className="bg-gray-100 p-8 rounded-xl">
        <div className="flex gap-4">
          <div className="badge-premium">
            <span>PREMIUM</span>
          </div>
          <div className="badge-premium">
            <span>VIP ACCESS</span>
          </div>
          <div className="badge-premium">
            <span>EXCLUSIVE</span>
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 bg-muted rounded-lg">
        <p className="text-xs font-mono mb-2">CSS Definition:</p>
        <pre className="text-xs overflow-x-auto">
{`.badge-premium {
  background-color: #000000;
  border: 1px solid #323232;
  border-radius: 0.5rem;
  color: var(--colors-yellow-400);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
}

.badge-premium span {
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  background: linear-gradient(135deg,
    #a76700 0%, #ffd386 50%, #a76700 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}`}
        </pre>
      </div>
    </div>
  ),
}

export const InputField: Story = {
  name: "Input Field",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Input Field Surface</h3>
      <p className="text-sm text-muted-foreground">
        Styled input field with consistent border, focus, and error states.
      </p>
      <div className="bg-gray-100 p-8 rounded-xl space-y-4 max-w-md">
        <div>
          <label className="label-medium block mb-2">Standard Input</label>
          <input
            className="input-field w-full"
            placeholder="Enter text..."
          />
        </div>
        <div>
          <label className="label-medium block mb-2">Error State</label>
          <input
            className="input-field error w-full"
            placeholder="Invalid input"
          />
          <p className="text-xs mt-1" style={{ color: "var(--colors-red-400)" }}>
            This field has an error
          </p>
        </div>
      </div>
      <div className="mt-4 p-4 bg-muted rounded-lg">
        <p className="text-xs font-mono mb-2">CSS Definition:</p>
        <pre className="text-xs overflow-x-auto">
{`.input-field {
  border-radius: 0.5rem;
  border: 1px solid var(--colors-gray-100);
  background-color: #ffffff;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--colors-gray-900);
  transition: all 0.2s ease-in-out;
}

.input-field:focus-visible {
  outline: none;
  border-color: var(--colors-gray-900);
  box-shadow: 0 0 0 2px rgba(25, 25, 25, 0.12);
}

.input-field.error {
  border-color: var(--colors-red-400);
  box-shadow: 0 0 0 2px rgba(211, 26, 12, 0.1);
}`}
        </pre>
      </div>
    </div>
  ),
}

export const SurfaceComparison: Story = {
  name: "Surface Comparison",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Surface Comparison</h3>
      <div className="bg-gray-100 p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="surface-card p-6 text-center">
            <p className="title-small mb-1">surface-card</p>
            <p className="body-small text-muted-foreground">20px radius</p>
          </div>
          <div className="surface-card-compact p-6 text-center">
            <p className="title-small mb-1">surface-card-compact</p>
            <p className="body-small text-muted-foreground">16px radius</p>
          </div>
          <div className="surface-premium p-6 text-center">
            <p className="title-small mb-1">surface-premium</p>
            <p className="body-small text-muted-foreground">Gold border</p>
          </div>
        </div>
      </div>
    </div>
  ),
}
