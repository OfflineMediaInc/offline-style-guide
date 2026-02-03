import * as React from "react"
import { cva } from "class-variance-authority"
import { Check } from "lucide-react"

import { cn } from "../lib/utils"

export interface ProgressStepperStep {
  label: string
  status: "completed" | "current" | "upcoming"
}

export interface ProgressStepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: ProgressStepperStep[]
  /** "stepper" shows dots + labels, "compact" shows a thin bar + current label */
  variant?: "stepper" | "compact"
}

const circleVariants = cva(
  "relative z-10 flex items-center justify-center rounded-full shrink-0 bg-white",
  {
    variants: {
      status: {
        completed:
          "h-6 w-6 bg-[var(--semantic-success500)] text-white",
        current:
          "h-7 w-7 border-[3px] border-[var(--colors-blue-400)] bg-white",
        upcoming:
          "h-6 w-6 border-2 border-[var(--colors-gray-200)] bg-white",
      },
    },
    defaultVariants: {
      status: "upcoming",
    },
  }
)

const labelVariants = cva("text-xs font-medium mt-2 text-center whitespace-nowrap", {
  variants: {
    status: {
      completed: "text-[var(--colors-gray-700)]",
      current: "font-semibold text-[var(--colors-blue-400)]",
      upcoming: "text-[var(--colors-gray-400)]",
    },
    allCompleted: {
      true: "text-[var(--semantic-success500)]",
    },
  },
  defaultVariants: {
    status: "upcoming",
  },
})

/**
 * Layout: absolute-positioned connecting line behind flex-distributed steps.
 * A single background line spans the full width at the vertical center of the
 * circles. A colored progress line overlays it up to the current step.
 * Steps use `flex justify-between` so circles and labels are naturally centered
 * without fighting for space with the line.
 */
function ProgressStepper({ steps, variant = "stepper", className, ...props }: ProgressStepperProps) {
  const allCompleted = steps.length > 0 && steps.every((s) => s.status === "completed")
  const completedCount = steps.filter((s) => s.status === "completed").length
  const totalSteps = steps.length

  // Compact variant: thin bar + current stage label
  if (variant === "compact") {
    const currentStep = steps.find((s) => s.status === "current")
    const pct = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0

    return (
      <div className={cn("w-full", className)} {...props}>
        <div className="h-1 w-full rounded-full bg-[var(--colors-gray-100)]">
          <div
            className="h-1 rounded-full bg-[var(--semantic-success500)] transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-xs font-semibold text-[var(--colors-gray-900)]">
            {currentStep ? currentStep.label : "Complete"}
          </span>
          <span className="text-xs text-[var(--colors-gray-400)]">
            {completedCount}/{totalSteps}
          </span>
        </div>
      </div>
    )
  }

  // Stepper variant: dots + connecting lines + labels
  // Find the index of the last completed step to size the progress line
  const lastCompletedIndex = (() => {
    let last = -1
    for (let i = 0; i < steps.length; i++) {
      if (steps[i].status === "completed") last = i
    }
    return last
  })()

  const progressWidth =
    lastCompletedIndex >= 0 && steps.length > 1
      ? (lastCompletedIndex / (steps.length - 1)) * 100
      : 0

  return (
    <div className={cn("w-full", className)} {...props}>
      {/*
       * Outer container has horizontal padding equal to half the widest
       * label so edge labels don't clip. The inner "track" div is where
       * the line and absolutely-positioned steps live. Each step center
       * is placed at (index / (N-1)) * 100% via left + translateX(-50%),
       * so the line from left:0 to right:0 spans exactly center-to-center.
       */}
      <div className="relative" style={{ height: 52 }}>
        {/* Background line */}
        <div className="absolute top-3 left-0 right-0 h-0.5 bg-[var(--colors-gray-200)]" />
        {/* Progress line */}
        {progressWidth > 0 && (
          <div
            className="absolute top-3 left-0 h-0.5 bg-[var(--colors-blue-400)] transition-all duration-300"
            style={{ width: `${progressWidth}%` }}
          />
        )}

        {/* Steps — absolutely positioned at percentage offsets */}
        {steps.map((step, index) => {
          const pct =
            totalSteps === 1
              ? 50
              : (index / (totalSteps - 1)) * 100

          return (
            <div
              key={index}
              className="absolute flex flex-col items-center"
              style={{
                left: `${pct}%`,
                transform: "translateX(-50%)",
              }}
            >
              <div className={cn(circleVariants({ status: step.status }))}>
                {step.status === "completed" && (
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                )}
              </div>
              <span
                className={cn(
                  labelVariants({
                    status: step.status,
                    allCompleted: allCompleted && step.status === "completed" ? true : undefined,
                  })
                )}
              >
                {step.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { ProgressStepper, circleVariants, labelVariants }
