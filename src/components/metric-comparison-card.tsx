import * as React from "react"
import { Card, CardContent } from "./card"
import { cn } from "../lib/utils"

interface MetricComparisonCardProps {
  /** Label displayed above the value */
  label: string
  /** Main metric value (e.g., "85%", "4.8", "1,234") */
  value: string
  /** Optional subtitle below the value */
  subtitle?: string
  /** Comparison text (e.g., "Higher than Offline avg. of 77%") */
  comparisonText?: string
  /** Whether this card is highlighted (above average) */
  isHighlighted?: boolean
  /** Optional icon rendered next to the value */
  icon?: React.ReactNode
  /** Additional CSS classes */
  className?: string
}

/**
 * MetricComparisonCard — Displays a single metric with optional comparison text.
 *
 * When `isHighlighted` is true, the card gets a blue border and light blue background,
 * and the comparison text uses the blue accent color. Otherwise, comparison text is muted.
 *
 * @example
 * <MetricComparisonCard
 *   label="First-Time Guests"
 *   value="85%"
 *   comparisonText="Higher than Offline avg. of 77%"
 *   isHighlighted
 * />
 */
function MetricComparisonCard({
  label,
  value,
  subtitle,
  comparisonText,
  isHighlighted = false,
  icon,
  className,
}: MetricComparisonCardProps) {
  return (
    <Card
      className={cn(
        isHighlighted && "border-2 border-[var(--colors-blue-400)] bg-[var(--colors-blue-400)]/5",
        className,
      )}
    >
      <CardContent className="p-4 space-y-2">
        <p className="body-small text-muted-foreground">{label}</p>
        <div className="flex items-center gap-1">
          <p className="display-small stat-mono">{value}</p>
          {icon}
        </div>
        {subtitle && (
          <p className="body-small text-muted-foreground">{subtitle}</p>
        )}
        {comparisonText && (
          <p
            className={cn(
              "body-small",
              isHighlighted ? "text-[var(--colors-blue-400)]" : "text-muted-foreground",
            )}
          >
            {comparisonText}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

export { MetricComparisonCard, type MetricComparisonCardProps }
