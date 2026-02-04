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
  "flex items-center justify-center rounded-full shrink-0",
  {
    variants: {
      status: {
        completed:
          "h-4 w-4 bg-[var(--semantic-success500)] text-white",
        current:
          "h-4 w-4 bg-[var(--colors-gray-900)]",
        upcoming:
          "h-4 w-4 border border-[var(--colors-gray-300)] bg-white",
      },
    },
    defaultVariants: {
      status: "upcoming",
    },
  }
)

const labelVariants = cva("body-x-small mt-1 max-w-16 text-center leading-tight", {
  variants: {
    status: {
      completed: "text-[var(--colors-gray-500)]",
      current: "font-semibold text-[var(--colors-gray-900)]",
      upcoming: "text-[var(--colors-gray-400)]",
    },
  },
  defaultVariants: {
    status: "upcoming",
  },
})

function ProgressStepper({ steps, variant = "stepper", className, ...props }: ProgressStepperProps) {
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
          <span className="body-x-small font-semibold text-[var(--colors-gray-900)]">
            {currentStep ? currentStep.label : "Complete"}
          </span>
          <span className="body-x-small text-[var(--colors-gray-400)]">
            {completedCount}/{totalSteps}
          </span>
        </div>
      </div>
    )
  }

  // Stepper variant: inline flexbox with per-segment connecting lines
  return (
    <div className={cn("w-full", className)} {...props}>
      <div className="flex w-full items-start px-6">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1
          const isCompleted = step.status === "completed"
          const isCurrent = step.status === "current"

          return (
            <React.Fragment key={index}>
              {/* Dot + label column — pinned to dot width so lines reach the dot */}
              <div className="flex w-4 flex-col items-center overflow-visible">
                <div className={cn(circleVariants({ status: step.status }))}>
                  {isCompleted && (
                    <Check className="h-2.5 w-2.5" strokeWidth={3} />
                  )}
                  {isCurrent && (
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  )}
                </div>
                <span className={cn(labelVariants({ status: step.status }))}>
                  {step.label}
                </span>
              </div>

              {/* Connecting line — vertically centered with the dot */}
              {!isLast && (
                <div
                  className={cn(
                    "mt-[7px] h-[2px] flex-1 min-w-2",
                    isCompleted
                      ? "bg-[var(--semantic-success500)]"
                      : isCurrent
                        ? "border-t-[2px] border-dashed border-[var(--colors-gray-300)]"
                        : "border-t-[2px] border-dashed border-[var(--colors-gray-200)]"
                  )}
                />
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export { ProgressStepper }
