import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./badge"
import { Check, X, AlertCircle, Clock, ArrowRight, ArrowUpRight, Loader2 } from "lucide-react"

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "success", "warning", "outline", "link"],
      description: "Visual style variant",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Offline Badge Component

Badges are used for status indicators, tags, and labels.

### Variants
- **default**: Primary black (#191919)
- **secondary**: Light gray background
- **destructive**: Red tinted background with red text
- **success**: Green (#099250) for success states
- **warning**: Yellow background - for pending/review states
- **outline**: Bordered style
- **link**: Underlines on hover

### Custom Offline Badges
Use the \`badge-premium\` class for gold gradient premium badges.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  ),
}

export const IconLeft: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">
        <Check className="mr-1 h-3 w-3" />
        Default
      </Badge>
      <Badge variant="secondary">
        <Clock className="mr-1 h-3 w-3" />
        Secondary
      </Badge>
      <Badge variant="destructive">
        <X className="mr-1 h-3 w-3" />
        Destructive
      </Badge>
      <Badge variant="outline">
        <AlertCircle className="mr-1 h-3 w-3" />
        Outline
      </Badge>
      <Badge variant="link">
        <Check className="mr-1 h-3 w-3" />
        Link
      </Badge>
    </div>
  ),
}

export const IconRight: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">
        Default
        <ArrowRight className="ml-1 h-3 w-3" />
      </Badge>
      <Badge variant="secondary">
        Secondary
        <ArrowRight className="ml-1 h-3 w-3" />
      </Badge>
      <Badge variant="destructive">
        Destructive
        <ArrowRight className="ml-1 h-3 w-3" />
      </Badge>
      <Badge variant="outline">
        Outline
        <ArrowRight className="ml-1 h-3 w-3" />
      </Badge>
      <Badge variant="link">
        Link
        <ArrowRight className="ml-1 h-3 w-3" />
      </Badge>
    </div>
  ),
}

export const WithSpinner: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">
        <Loader2 className="mr-1 h-3 w-3 animate-spin" />
        Default
      </Badge>
      <Badge variant="secondary">
        <Loader2 className="mr-1 h-3 w-3 animate-spin" />
        Secondary
      </Badge>
      <Badge variant="destructive">
        <Loader2 className="mr-1 h-3 w-3 animate-spin" />
        Destructive
      </Badge>
      <Badge variant="outline">
        <Loader2 className="mr-1 h-3 w-3 animate-spin" />
        Outline
      </Badge>
      <Badge variant="link">
        <Loader2 className="mr-1 h-3 w-3 animate-spin" />
        Link
      </Badge>
    </div>
  ),
}

export const AsChild: Story = {
  name: "As Link",
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default" asChild>
        <a href="#">
          Link
          <ArrowUpRight className="ml-1 h-3 w-3" />
        </a>
      </Badge>
      <Badge variant="secondary" asChild>
        <a href="#">
          Link
          <ArrowUpRight className="ml-1 h-3 w-3" />
        </a>
      </Badge>
      <Badge variant="destructive" asChild>
        <a href="#">
          Link
          <ArrowUpRight className="ml-1 h-3 w-3" />
        </a>
      </Badge>
      <Badge variant="outline" asChild>
        <a href="#">
          Link
          <ArrowUpRight className="ml-1 h-3 w-3" />
        </a>
      </Badge>
      <Badge variant="link" asChild>
        <a href="#">
          Link
          <ArrowUpRight className="ml-1 h-3 w-3" />
        </a>
      </Badge>
    </div>
  ),
}

export const LongText: Story = {
  render: () => (
    <div className="max-w-xs">
      <Badge variant="secondary">
        A badge with a lot of text to see how it wraps
      </Badge>
    </div>
  ),
}

export const PremiumBadge: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
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
  ),
}

export const TagShadow: Story = {
  render: () => (
    <div className="flex gap-3">
      <Badge className="shadow-tag">With Shadow</Badge>
      <Badge variant="secondary" className="shadow-tag">Secondary Shadow</Badge>
      <Badge variant="outline" className="shadow-tag">Outline Shadow</Badge>
    </div>
  ),
}

export const StatusBadges: Story = {
  name: "Status Badges (Dashboard)",
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Offer Card Status</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="warning">Pending Setup</Badge>
          <Badge variant="secondary">Active (Pending Launch Date)</Badge>
          <Badge variant="secondary">Active (Launching Feb 15)</Badge>
          <Badge variant="outline">Launched Dec '24</Badge>
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Event Card Status</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="warning">Being Reviewed</Badge>
          <Badge variant="warning">Draft Event</Badge>
          <Badge variant="secondary">Event Live</Badge>
          <Badge variant="secondary">Today!</Badge>
          <Badge variant="outline">Event Recap</Badge>
        </div>
      </div>
    </div>
  ),
}
