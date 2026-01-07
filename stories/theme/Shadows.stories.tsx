import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  title: "Theme/Shadows",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Offline Shadow System

Shadows provide depth and hierarchy to the UI. Three shadow levels are defined in \`globals.css\`.

### Shadow Levels
- **Card Shadow** - Subtle, for most cards and containers
- **Tag Shadow** - Medium, for floating elements like tags
- **Elevated Shadow** - Strong, for modals and popovers

### CSS Custom Properties
\`\`\`css
--card-shadow
--tag-shadow
--new-shadow (elevated)
\`\`\`

### Utility Classes
\`\`\`html
<div class="shadow-card">...</div>
<div class="shadow-tag">...</div>
<div class="shadow-elevated">...</div>
\`\`\`
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const ShadowBox = ({
  label,
  className,
  cssVar,
  description,
}: {
  label: string
  className: string
  cssVar: string
  description: string
}) => (
  <div className="flex flex-col items-center gap-4 p-6">
    <div
      className={`w-40 h-40 bg-white rounded-xl flex items-center justify-center ${className}`}
    >
      <span className="text-sm font-medium">{label}</span>
    </div>
    <div className="text-center">
      <p className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded mb-1">
        .{className}
      </p>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  </div>
)

export const AllShadows: Story = {
  name: "Shadow Comparison",
  render: () => (
    <div className="bg-gray-50 p-8 rounded-xl">
      <h3 className="text-lg font-bold mb-6">Shadow Levels</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ShadowBox
          label="Card"
          className="shadow-card"
          cssVar="--card-shadow"
          description="Subtle depth for cards"
        />
        <ShadowBox
          label="Tag"
          className="shadow-tag"
          cssVar="--tag-shadow"
          description="Medium depth for tags"
        />
        <ShadowBox
          label="Elevated"
          className="shadow-elevated"
          cssVar="--new-shadow"
          description="Strong depth for modals"
        />
      </div>
    </div>
  ),
}

export const CardShadow: Story = {
  name: "Card Shadow",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Card Shadow</h3>
      <p className="text-sm text-muted-foreground">
        The subtlest shadow level, used for most cards and content containers.
      </p>
      <div className="bg-gray-50 p-8 rounded-xl">
        <div className="shadow-card bg-white rounded-xl p-6 max-w-md">
          <h4 className="title-medium mb-2">Card Title</h4>
          <p className="body-medium text-muted-foreground">
            This card uses the standard card shadow for subtle depth.
          </p>
        </div>
      </div>
      <div className="mt-4 p-4 bg-muted rounded-lg">
        <p className="text-xs font-mono mb-2">CSS Variable:</p>
        <code className="text-xs">
          --card-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06),
          0px 2px 2px 0px rgba(0, 0, 0, 0.05),
          0px 6px 3px 0px rgba(0, 0, 0, 0.03),
          0px 10px 4px 0px rgba(0, 0, 0, 0.01),
          0px 15px 4px 0px rgba(0, 0, 0, 0);
        </code>
      </div>
    </div>
  ),
}

export const TagShadow: Story = {
  name: "Tag Shadow",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Tag Shadow</h3>
      <p className="text-sm text-muted-foreground">
        Medium shadow level, used for floating elements like tags and badges.
      </p>
      <div className="bg-gray-50 p-8 rounded-xl flex gap-4">
        <span className="shadow-tag bg-white rounded-full px-4 py-2 text-sm font-medium">
          Featured
        </span>
        <span className="shadow-tag bg-white rounded-full px-4 py-2 text-sm font-medium">
          New
        </span>
        <span className="shadow-tag bg-white rounded-full px-4 py-2 text-sm font-medium">
          Popular
        </span>
      </div>
      <div className="mt-4 p-4 bg-muted rounded-lg">
        <p className="text-xs font-mono mb-2">CSS Variable:</p>
        <code className="text-xs">
          --tag-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1),
          0px 4px 4px 0px rgba(0, 0, 0, 0.09),
          0px 9px 6px 0px rgba(0, 0, 0, 0.05),
          0px 17px 7px 0px rgba(0, 0, 0, 0.01),
          0px 26px 7px 0px rgba(0, 0, 0, 0);
        </code>
      </div>
    </div>
  ),
}

export const ElevatedShadow: Story = {
  name: "Elevated Shadow",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Elevated Shadow</h3>
      <p className="text-sm text-muted-foreground">
        The strongest shadow level, used for modals, popovers, and highly elevated elements.
      </p>
      <div className="bg-gray-50 p-8 rounded-xl">
        <div className="shadow-elevated bg-white rounded-xl p-6 max-w-md">
          <h4 className="title-medium mb-2">Modal Title</h4>
          <p className="body-medium text-muted-foreground mb-4">
            This element uses the elevated shadow for maximum depth.
          </p>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">
            Action
          </button>
        </div>
      </div>
      <div className="mt-4 p-4 bg-muted rounded-lg">
        <p className="text-xs font-mono mb-2">CSS Variable:</p>
        <code className="text-xs">
          --new-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.1),
          0px 13px 13px 0px rgba(0, 0, 0, 0.09),
          0px 29px 17px 0px rgba(0, 0, 0, 0.05),
          0px 52px 21px 0px rgba(0, 0, 0, 0.01),
          0px 81px 23px 0px rgba(0, 0, 0, 0);
        </code>
      </div>
    </div>
  ),
}

export const ShadowUsage: Story = {
  name: "Usage Guidelines",
  render: () => (
    <div className="space-y-6">
      <h3 className="text-lg font-bold">Shadow Usage Guidelines</h3>
      <div className="grid gap-4">
        <div className="p-4 border rounded-lg">
          <h4 className="title-small mb-2">Cards & Containers</h4>
          <p className="body-small text-muted-foreground">
            Use <code className="bg-muted px-1 rounded">shadow-card</code> for content cards, panels, and containers.
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h4 className="title-small mb-2">Floating Elements</h4>
          <p className="body-small text-muted-foreground">
            Use <code className="bg-muted px-1 rounded">shadow-tag</code> for badges, tags, and floating buttons.
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h4 className="title-small mb-2">Modals & Overlays</h4>
          <p className="body-small text-muted-foreground">
            Use <code className="bg-muted px-1 rounded">shadow-elevated</code> for dialogs, modals, and popovers.
          </p>
        </div>
      </div>
    </div>
  ),
}
