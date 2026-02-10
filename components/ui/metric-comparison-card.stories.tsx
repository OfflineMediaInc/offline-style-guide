import type { Meta, StoryObj } from "@storybook/react"
import { Star } from "lucide-react"
import { MetricComparisonCard } from "../../src/components/metric-comparison-card"

const meta: Meta<typeof MetricComparisonCard> = {
  title: "Draft/MetricComparisonCard",
  component: MetricComparisonCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Metric Comparison Card

Displays a single metric with optional comparison text against a benchmark (e.g., Offline averages).

### Visual States
- **Default**: Standard card with muted comparison text
- **Highlighted** (\`isHighlighted\`): Blue border + light blue background, comparison text uses blue accent color

### Usage
\`\`\`tsx
<MetricComparisonCard
  label="First-Time Guests"
  value="85%"
  comparisonText="Higher than Offline avg. of 77%"
  isHighlighted
/>
\`\`\`
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300, padding: "2rem" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof MetricComparisonCard>

export const Default: Story = {
  name: "Default (Not Highlighted)",
  args: {
    label: "Would Return",
    value: "82%",
    comparisonText: "Offline avg: 89%",
  },
}

export const Highlighted: Story = {
  name: "Highlighted (Above Average)",
  args: {
    label: "First-Time Guests",
    value: "85%",
    comparisonText: "Higher than Offline avg. of 77%",
    isHighlighted: true,
  },
}

export const WithSubtitle: Story = {
  name: "With Subtitle",
  args: {
    label: "Est. Total Customers",
    value: "1,234",
    subtitle: "Members + friends they brought",
  },
}

export const WithIcon: Story = {
  name: "With Icon",
  args: {
    label: "Average Rating",
    value: "4.8",
    comparisonText: "Higher than Offline avg. of 4.67",
    isHighlighted: true,
    icon: <Star className="size-5 text-yellow-400 fill-current" />,
  },
}

export const NoComparison: Story = {
  name: "No Comparison Text",
  args: {
    label: "Total Offline Members",
    value: "847",
  },
}