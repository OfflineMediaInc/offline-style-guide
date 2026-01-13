import type { Meta, StoryObj } from "@storybook/react"
import { Progress } from "./progress"
import { useState, useEffect } from "react"

const meta: Meta<typeof Progress> = {
  title: "Draft/Progress",
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
