import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button"
import { Mail, ChevronRight, Loader2, Plus, ArrowRight } from "lucide-react"

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "Size variant",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
    },
    asChild: {
      control: "boolean",
      description: "Renders as child element using Slot",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Offline Button Component

Primary buttons use black (#191919) background per Offline brand guidelines.
Yellow (#DE8E0F) is reserved for accents, NOT buttons.

### Variants
- **default**: Primary action (black background)
- **secondary**: Secondary action (light gray)
- **outline**: Bordered style
- **ghost**: No background until hover
- **destructive**: Dangerous actions (red)
- **link**: Text link style

### Sizes
- **default**: Standard height (h-10, 40px)
- **sm**: Compact (h-9, 36px)
- **lg**: Large (h-11, 44px)
- **icon**: Square icon button (40x40px)
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Add">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  ),
}

export const IconLeft: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">
        <Mail className="mr-2 h-4 w-4" />
        Email
      </Button>
      <Button variant="secondary">
        <Plus className="mr-2 h-4 w-4" />
        Add Item
      </Button>
      <Button variant="outline">
        <Mail className="mr-2 h-4 w-4" />
        Contact
      </Button>
    </div>
  ),
}

export const IconRight: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">
        Next
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
      <Button variant="secondary">
        Continue
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <Button variant="outline">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  ),
}

export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
      <Button variant="secondary" disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Saving...
      </Button>
      <Button variant="outline" disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading
      </Button>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button disabled>Default</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="outline" disabled>Outline</Button>
      <Button variant="ghost" disabled>Ghost</Button>
      <Button variant="destructive" disabled>Destructive</Button>
    </div>
  ),
}

export const AsLink: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button asChild>
        <a href="#">Link as Button</a>
      </Button>
      <Button variant="outline" asChild>
        <a href="#">Outline Link</a>
      </Button>
      <Button variant="ghost" asChild>
        <a href="#">Ghost Link</a>
      </Button>
    </div>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <div className="w-[300px] space-y-3">
      <Button className="w-full">Full Width Button</Button>
      <Button variant="outline" className="w-full">Full Width Outline</Button>
      <Button variant="secondary" className="w-full">Full Width Secondary</Button>
    </div>
  ),
}
