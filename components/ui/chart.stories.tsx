import type { Meta, StoryObj } from "@storybook/react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../../src/components/chart"

const meta: Meta = {
  title: "UI/Chart",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Chart Components (Recharts + shadcn)

Data visualization components using [Recharts](https://recharts.org/) wrapped with shadcn styling.

### Color Palette

Brand-aligned chart colors accessible via CSS variables:

| Variable | Color | Use Case |
|----------|-------|----------|
| \`--chart-1\` | Yellow-400 | Primary brand, main data series |
| \`--chart-2\` | Blue-400 | Secondary data series |
| \`--chart-3\` | Green (Success) | Positive values, growth |
| \`--chart-4\` | Gray-600 | Neutral, comparison baseline |
| \`--chart-5\` | Red-400 | Negative values, alerts |
| \`--chart-6\` | Yellow-600 | Extended palette |
| \`--chart-7\` | Blue-600 | Extended palette |
| \`--chart-8\` | Gray-400 | Extended palette |

### Usage

\`\`\`tsx
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

const chartConfig = {
  value: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

<ChartContainer config={chartConfig} className="h-[300px]">
  <BarChart data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="value" fill="var(--color-value)" />
  </BarChart>
</ChartContainer>
\`\`\`

### Key Concepts

- **ChartContainer**: Wraps Recharts ResponsiveContainer with CSS variable injection
- **ChartConfig**: Defines labels and colors for each data key
- **ChartTooltip/ChartLegend**: Styled tooltip and legend components
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// =============================================================================
// SAMPLE DATA
// =============================================================================

const ratingData = [
  { rating: "5 stars", count: 245, fill: "hsl(var(--chart-3))" },
  { rating: "4 stars", count: 182, fill: "hsl(var(--chart-1))" },
  { rating: "3 stars", count: 67, fill: "hsl(var(--chart-4))" },
  { rating: "2 stars", count: 23, fill: "hsl(var(--chart-5))" },
  { rating: "1 star", count: 8, fill: "hsl(var(--chart-5))" },
]

const categoryData = [
  { category: "Food Quality", score: 4.7 },
  { category: "Service", score: 4.5 },
  { category: "Ambiance", score: 4.2 },
  { category: "Value", score: 3.9 },
  { category: "Cleanliness", score: 4.8 },
]

const monthlyData = [
  { month: "Jan", revenue: 4200, orders: 186 },
  { month: "Feb", revenue: 3800, orders: 165 },
  { month: "Mar", revenue: 5100, orders: 223 },
  { month: "Apr", revenue: 4600, orders: 198 },
  { month: "May", revenue: 5800, orders: 251 },
  { month: "Jun", revenue: 6200, orders: 274 },
]

const multiSeriesData = [
  { month: "Jan", partner1: 120, partner2: 95, partner3: 78, partner4: 62, partner5: 45 },
  { month: "Feb", partner1: 135, partner2: 88, partner3: 92, partner4: 71, partner5: 52 },
  { month: "Mar", partner1: 148, partner2: 102, partner3: 85, partner4: 68, partner5: 58 },
  { month: "Apr", partner1: 162, partner2: 118, partner3: 95, partner4: 82, partner5: 61 },
  { month: "May", partner1: 175, partner2: 125, partner3: 108, partner4: 89, partner5: 67 },
  { month: "Jun", partner1: 188, partner2: 138, partner3: 112, partner4: 95, partner5: 72 },
]

// =============================================================================
// CHART CONFIGS
// =============================================================================

const ratingConfig = {
  count: {
    label: "Reviews",
  },
} satisfies ChartConfig

const categoryConfig = {
  score: {
    label: "Score",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const revenueConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
  orders: {
    label: "Orders",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const multiSeriesConfig = {
  partner1: { label: "Wye Hill Kitchen", color: "hsl(var(--chart-1))" },
  partner2: { label: "Brewery Bhavana", color: "hsl(var(--chart-2))" },
  partner3: { label: "Bida Manda", color: "hsl(var(--chart-3))" },
  partner4: { label: "Transfer Co.", color: "hsl(var(--chart-4))" },
  partner5: { label: "Jolie", color: "hsl(var(--chart-5))" },
} satisfies ChartConfig

// =============================================================================
// STORIES
// =============================================================================

export const VerticalBarChart: Story = {
  name: "Vertical Bar Chart",
  render: () => (
    <div className="w-full max-w-lg">
      <h3 className="title-medium mb-4">Rating Distribution</h3>
      <ChartContainer config={ratingConfig} className="h-[300px] w-full">
        <BarChart data={ratingData} layout="vertical" margin={{ left: 16, right: 32 }}>
          <CartesianGrid horizontal={false} />
          <YAxis
            dataKey="rating"
            type="category"
            tickLine={false}
            axisLine={false}
            width={60}
          />
          <XAxis type="number" hide />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="count" radius={4}>
            {ratingData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
            <LabelList dataKey="count" position="right" className="fill-foreground" />
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Horizontal bar chart showing rating distribution. Uses semantic colors: green for 5-star, yellow for 4-star, gray for 3-star, red for low ratings.",
      },
    },
  },
}

export const HorizontalBarChart: Story = {
  name: "Horizontal Bar Chart",
  render: () => (
    <div className="w-full max-w-lg">
      <h3 className="title-medium mb-4">Category Scores</h3>
      <ChartContainer config={categoryConfig} className="h-[300px] w-full">
        <BarChart data={categoryData} margin={{ left: 8, right: 8 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="category"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis domain={[0, 5]} tickLine={false} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="score" fill="var(--color-score)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Standard vertical bar chart comparing category scores. Good for showing discrete category comparisons.",
      },
    },
  },
}

export const LineChartDualAxis: Story = {
  name: "Line Chart (Dual Series)",
  render: () => (
    <div className="w-full max-w-2xl">
      <h3 className="title-medium mb-4">Monthly Performance</h3>
      <ChartContainer config={revenueConfig} className="h-[300px] w-full">
        <LineChart data={monthlyData} margin={{ left: 8, right: 8 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis tickLine={false} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="var(--color-revenue)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="orders"
            stroke="var(--color-orders)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Line chart with two data series showing revenue and orders over time. Uses the legend component to distinguish series.",
      },
    },
  },
}

export const MultiSeries: Story = {
  name: "Multi-Series (5+ Partners)",
  render: () => (
    <div className="w-full max-w-3xl">
      <h3 className="title-medium mb-4">Partner Order Comparison</h3>
      <ChartContainer config={multiSeriesConfig} className="h-[350px] w-full">
        <LineChart data={multiSeriesData} margin={{ left: 8, right: 8 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis tickLine={false} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Line type="monotone" dataKey="partner1" stroke="var(--color-partner1)" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="partner2" stroke="var(--color-partner2)" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="partner3" stroke="var(--color-partner3)" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="partner4" stroke="var(--color-partner4)" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="partner5" stroke="var(--color-partner5)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Line chart with 5 data series demonstrating the full chart color palette. Uses chart-1 through chart-5 for distinct visual separation.",
      },
    },
  },
}

export const ColorPalette: Story = {
  name: "Color Palette",
  render: () => {
    const colors = [
      { name: "chart-1", hex: "#de8e0f", desc: "Yellow-400 (Primary)" },
      { name: "chart-2", hex: "#004fff", desc: "Blue-400 (Secondary)" },
      { name: "chart-3", hex: "#099250", desc: "Success Green" },
      { name: "chart-4", hex: "#636363", desc: "Gray-600 (Neutral)" },
      { name: "chart-5", hex: "#d31a0c", desc: "Red-400 (Alert)" },
      { name: "chart-6", hex: "#a76700", desc: "Yellow-600 (Extended)" },
      { name: "chart-7", hex: "#003bbb", desc: "Blue-600 (Extended)" },
      { name: "chart-8", hex: "#959595", desc: "Gray-400 (Extended)" },
    ]

    return (
      <div className="space-y-6">
        <div>
          <h3 className="title-medium mb-2">Chart Color Palette</h3>
          <p className="body-medium text-muted-foreground mb-4">
            8 brand-aligned colors for data visualization. Use chart-1 through chart-5 for primary series,
            chart-6 through chart-8 for extended needs.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {colors.map((color) => (
            <div key={color.name} className="space-y-2">
              <div
                className="h-16 rounded-lg shadow-card"
                style={{ backgroundColor: `hsl(var(--${color.name}))` }}
              />
              <div>
                <p className="label-medium">{color.name}</p>
                <p className="body-small text-muted-foreground">{color.desc}</p>
                <p className="body-x-small font-mono text-muted-foreground">{color.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Visual reference for all 8 chart colors. These are mapped to the Offline brand palette and accessible via CSS custom properties.",
      },
    },
  },
}

export const StackedBarChart: Story = {
  name: "Stacked Bar Chart",
  render: () => {
    const data = [
      { month: "Jan", google: 65, yelp: 42, direct: 23 },
      { month: "Feb", google: 72, yelp: 38, direct: 28 },
      { month: "Mar", google: 85, yelp: 45, direct: 32 },
      { month: "Apr", google: 78, yelp: 52, direct: 35 },
      { month: "May", google: 92, yelp: 48, direct: 41 },
      { month: "Jun", google: 98, yelp: 55, direct: 38 },
    ]

    const config = {
      google: { label: "Google", color: "hsl(var(--chart-1))" },
      yelp: { label: "Yelp", color: "hsl(var(--chart-5))" },
      direct: { label: "Direct", color: "hsl(var(--chart-4))" },
    } satisfies ChartConfig

    return (
      <div className="w-full max-w-2xl">
        <h3 className="title-medium mb-4">Reviews by Source</h3>
        <ChartContainer config={config} className="h-[300px] w-full">
          <BarChart data={data} margin={{ left: 8, right: 8 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="google" stackId="a" fill="var(--color-google)" radius={[0, 0, 0, 0]} />
            <Bar dataKey="yelp" stackId="a" fill="var(--color-yelp)" radius={[0, 0, 0, 0]} />
            <Bar dataKey="direct" stackId="a" fill="var(--color-direct)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Stacked bar chart showing composition over time. Useful for showing how different sources contribute to a total.",
      },
    },
  },
}
