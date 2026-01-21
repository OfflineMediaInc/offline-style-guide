import type { Meta, StoryObj } from "@storybook/react"
import { Progress } from "./progress"
import { useState, useEffect } from "react"

const meta: Meta<typeof Progress> = {
  title: "UI/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Progress Component

A progress bar indicating loading or completion status.

### Features
- Built on Radix UI Progress primitive
- Accessible with ARIA attributes
- Smooth animation on value changes
- Customizable colors via CSS variables

### Usage
- Use for file uploads
- Use for multi-step forms
- Use for loading indicators
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Progress value={33} className="w-[60%]" />,
}

export const Values: Story = {
  name: "Different Values",
  render: () => (
    <div className="w-[60%] space-y-4">
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">0%</p>
        <Progress value={0} />
      </div>
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">25%</p>
        <Progress value={25} />
      </div>
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">50%</p>
        <Progress value={50} />
      </div>
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">75%</p>
        <Progress value={75} />
      </div>
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">100%</p>
        <Progress value={100} />
      </div>
    </div>
  ),
}

export const Animated: Story = {
  render: function AnimatedProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0
          return prev + 10
        })
      }, 500)
      return () => clearInterval(timer)
    }, [])

    return (
      <div className="w-[60%] space-y-2">
        <Progress value={progress} />
        <p className="text-sm text-muted-foreground">{progress}% complete</p>
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="w-[60%] space-y-4">
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">Small (h-2)</p>
        <Progress value={60} className="h-2" />
      </div>
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">Default (h-4)</p>
        <Progress value={60} />
      </div>
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">Large (h-6)</p>
        <Progress value={60} className="h-6" />
      </div>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="w-[60%] space-y-2">
      <div className="flex justify-between text-sm">
        <span>Uploading file...</span>
        <span className="text-muted-foreground">66%</span>
      </div>
      <Progress value={66} />
    </div>
  ),
}

export const FileUpload: Story = {
  name: "File Upload (Use Case)",
  render: function FileUploadProgress() {
    const [progress, setProgress] = useState(0)
    const [status, setStatus] = useState<"idle" | "uploading" | "complete">("idle")

    const startUpload = () => {
      setStatus("uploading")
      setProgress(0)
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer)
            setStatus("complete")
            return 100
          }
          return prev + 12
        })
      }, 300)
    }

    return (
      <div className="w-full max-w-md space-y-4">
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">document.pdf</p>
              <p className="text-sm text-muted-foreground">2.4 MB</p>
            </div>
            {status === "complete" && (
              <span className="text-sm text-green-600">Complete</span>
            )}
          </div>
          {status === "uploading" && (
            <div className="mt-3 space-y-1">
              <Progress value={Math.min(progress, 100)} className="h-2" />
              <p className="text-xs text-muted-foreground">
                {Math.round(Math.min(progress, 100))}% uploaded
              </p>
            </div>
          )}
        </div>
        {status === "idle" && (
          <button
            onClick={startUpload}
            className="text-sm text-primary underline"
          >
            Start Upload
          </button>
        )}
      </div>
    )
  },
}

export const MultiStep: Story = {
  name: "Multi-Step Form (Use Case)",
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Step 2 of 4</span>
          <span className="text-muted-foreground">50%</span>
        </div>
        <Progress value={50} className="h-2" />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Details</span>
        <span className="font-medium text-foreground">Address</span>
        <span>Payment</span>
        <span>Review</span>
      </div>
    </div>
  ),
}

export const ChartColors: Story = {
  name: "Chart Color Variants",
  render: () => (
    <div className="w-[60%] space-y-4">
      <p className="body-medium text-muted-foreground mb-2">
        Progress bars can use the chart color palette for data visualization contexts.
        Override the indicator color using the <code>{"[&>div]:"}</code> selector.
      </p>
      <div className="space-y-3">
        <div className="space-y-1">
          <p className="text-sm">chart-1 (Yellow-400)</p>
          <Progress value={70} className="[&>div]:bg-[hsl(var(--chart-1))]" />
        </div>
        <div className="space-y-1">
          <p className="text-sm">chart-2 (Blue-400)</p>
          <Progress value={55} className="[&>div]:bg-[hsl(var(--chart-2))]" />
        </div>
        <div className="space-y-1">
          <p className="text-sm">chart-3 (Success Green)</p>
          <Progress value={85} className="[&>div]:bg-[hsl(var(--chart-3))]" />
        </div>
        <div className="space-y-1">
          <p className="text-sm">chart-4 (Gray-600)</p>
          <Progress value={40} className="[&>div]:bg-[hsl(var(--chart-4))]" />
        </div>
        <div className="space-y-1">
          <p className="text-sm">chart-5 (Red-400)</p>
          <Progress value={25} className="[&>div]:bg-[hsl(var(--chart-5))]" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Use the `[&>div]:bg-[hsl(var(--chart-N))]` pattern to apply chart colors to progress bars. This keeps the color system consistent across charts and progress indicators.",
      },
    },
  },
}

// Color class mapping - Tailwind JIT needs static class names
const chartColorClasses = {
  1: "[&>div]:bg-[hsl(var(--chart-1))]",
  2: "[&>div]:bg-[hsl(var(--chart-2))]",
  3: "[&>div]:bg-[hsl(var(--chart-3))]",
  4: "[&>div]:bg-[hsl(var(--chart-4))]",
  5: "[&>div]:bg-[hsl(var(--chart-5))]",
  6: "[&>div]:bg-[hsl(var(--chart-6))]",
  7: "[&>div]:bg-[hsl(var(--chart-7))]",
  8: "[&>div]:bg-[hsl(var(--chart-8))]",
} as const

export const LabeledBreakdown: Story = {
  name: "Labeled Breakdown (Data Viz Pattern)",
  render: () => {
    const data = [
      { label: "Food", value: 70, chartColor: 5 as const },
      { label: "Service", value: 33, chartColor: 1 as const },
      { label: "Value", value: 21, chartColor: 2 as const },
      { label: "Parking", value: 16, chartColor: 3 as const },
      { label: "Atmosphere", value: 7, chartColor: 4 as const },
      { label: "Drinks", value: 7, chartColor: 6 as const },
      { label: "Other", value: 2, chartColor: 7 as const },
    ]

    return (
      <div className="w-full max-w-lg rounded-lg border bg-card p-6 shadow-card">
        <div className="mb-4">
          <h3 className="title-medium">3 Stars & Below Ratings (150)</h3>
          <p className="body-small text-muted-foreground">Areas That Require Improvements</p>
        </div>
        <div className="space-y-3">
          {data.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              {/* Color dot indicator */}
              <div
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: `hsl(var(--chart-${item.chartColor}))` }}
              />
              {/* Label */}
              <span className="w-24 shrink-0 body-small">{item.label}</span>
              {/* Progress bar */}
              <Progress
                value={item.value}
                className={`h-2.5 flex-1 [&>div]:transition-all ${chartColorClasses[item.chartColor]}`}
              />
              {/* Percentage */}
              <span className="w-10 text-right body-small text-muted-foreground">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: `
A common data visualization pattern: labeled horizontal bars with legend dots.

**Anatomy:**
- Color dot (legend indicator)
- Category label (fixed width for alignment)
- Progress bar (flexible width)
- Percentage value (right-aligned)

**When to use:**
- Showing breakdown by category (ratings, sources, types)
- When you need labels visible alongside bars
- When percentages should be prominently displayed

**Why Progress instead of Recharts?**
- Simpler, lighter weight
- No axes or complex interactions needed
- Each bar is independent (not comparative on shared scale)
- Easier to style exactly as designed
        `,
      },
    },
  },
}

