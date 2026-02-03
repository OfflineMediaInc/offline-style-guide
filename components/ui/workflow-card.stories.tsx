import type { Meta, StoryObj } from "@storybook/react"
import { ClipboardCheck, Monitor, ArrowRight } from "lucide-react"
import { ProgressStepper } from "../../src/components/progress-stepper"
import type { ProgressStepperStep } from "../../src/components/progress-stepper"
import { Badge } from "../../src/components/badge"
import { Button } from "../../src/components/button"
import { Separator } from "../../src/components/separator"
import { Card, CardHeader, CardContent } from "../../src/components/card"

// ---------------------------------------------------------------------------
// WorkflowRow — matches UnifiedWorkflowRow from Partners app exactly.
// Local demo component, not exported from the library.
// ---------------------------------------------------------------------------

type StatusBadge =
  | { type: "complete" }
  | { type: "waiting"; label: string }
  | { type: "action"; label: string; onClick?: () => void }

interface WorkflowRowProps {
  icon: React.ReactNode
  title: string
  description: string
  steps: ProgressStepperStep[]
  status: StatusBadge
}

function WorkflowRow({ icon, title, description, steps, status }: WorkflowRowProps) {
  return (
    <div className="flex items-center gap-4 px-5 py-4">
      {/* Icon — h-10 w-10, rounded-full, gray-25 fill */}
      <span className="flex h-10 w-10 flex-shrink-0 self-start items-center justify-center rounded-full bg-[var(--colors-gray-25)]">
        {icon}
      </span>

      {/* Center column — flex-1, gap-1.5 between elements */}
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <p className="label-medium uppercase tracking-[0.24em] text-[var(--colors-gray-900)]">
          {title}
        </p>
        <p className="body-small text-[var(--colors-gray-500)]">
          {description}
        </p>
        <div className="mt-1">
          <ProgressStepper steps={steps} />
        </div>
      </div>

      {/* Right action — flex-shrink-0 */}
      <div className="flex flex-shrink-0">
        {status.type === "complete" && (
          <Badge variant="success">Complete</Badge>
        )}
        {status.type === "waiting" && (
          <Badge variant="secondary">{status.label}</Badge>
        )}
        {status.type === "action" && (
          <Button size="sm" onClick={status.onClick}>
            {status.label}
            <ArrowRight className="ml-1.5 size-4" />
          </Button>
        )}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Step builders
// ---------------------------------------------------------------------------

const prelaunchLabels = [
  "Creating Offer",
  "Adding Content",
  "Partner Feedback",
  "Admin Review",
  "Ready",
  "Announced",
]

const posLabels = [
  "Setup Instructions",
  "Connecting",
  "Validating",
  "Verified",
]

const contractLabels = ["Draft", "Review", "Signed"]

function buildSteps(labels: string[], currentIndex: number): ProgressStepperStep[] {
  return labels.map((label, i) => {
    if (i < currentIndex) return { label, status: "completed" as const }
    if (i === currentIndex) return { label, status: "current" as const }
    return { label, status: "upcoming" as const }
  })
}

function allCompleted(labels: string[]): ProgressStepperStep[] {
  return labels.map((label) => ({ label, status: "completed" as const }))
}

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta = {
  title: "Draft/WorkflowCard",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Workflow Card (Demo)

A composite demo showing \`ProgressStepper\` in the context of the Partners dashboard.
Each row matches \`UnifiedWorkflowRow\` from the Partners app: icon, title, description,
stepper, and status badge — wrapped in actual \`Card\`/\`CardHeader\`/\`CardContent\` components.

This is **not an exported component** — it exists to verify the ProgressStepper renders
correctly in a real-world layout.

### Layout (matches Partners exactly)
- Uses \`Card\`, \`CardHeader\` (p-6), \`CardContent\` (px-0 pb-0) from the library
- Rows use \`px-5 py-4\` with \`Separator\` between them
- Icon: \`h-10 w-10\` rounded-full with \`gray-25\` fill
- Title: \`label-medium uppercase tracking-[0.24em]\`
- Description: \`body-small\` in \`gray-500\`
- Badge variants: \`success\` (complete), \`secondary\` (waiting), Button (action)
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 800, padding: "2rem" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj

// ---------------------------------------------------------------------------
// Full dashboard — matches the Wye Hill screenshot from Partners
// ---------------------------------------------------------------------------

export const FullDashboard: Story = {
  name: "Full Dashboard (Wye Hill)",
  render: () => (
    <Card>
      <CardHeader>
        <h3 className="headline-small">Wye Hill</h3>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <WorkflowRow
          icon={<ClipboardCheck className="h-5 w-5 text-[var(--colors-gray-600)]" />}
          title="Pre-Launch"
          description="Offer announced in app"
          steps={[
            { label: "Creating Offer", status: "completed" },
            { label: "Adding Content", status: "completed" },
            { label: "Partner Feedback", status: "completed" },
            { label: "Admin Review", status: "completed" },
            { label: "Ready", status: "completed" },
            { label: "Announced", status: "current" },
          ]}
          status={{ type: "complete" }}
        />
        <Separator />
        <WorkflowRow
          icon={<ClipboardCheck className="h-5 w-5 text-[var(--colors-gray-600)]" />}
          title="Pre-Launch"
          description="Adding base-level content and photos"
          steps={buildSteps(prelaunchLabels, 1)}
          status={{ type: "waiting", label: "Waiting on Offline" }}
        />
        <Separator />
        <WorkflowRow
          icon={<Monitor className="h-5 w-5 text-[var(--colors-gray-600)]" />}
          title="POS Integration"
          description="You have a task in Setup Instructions."
          steps={buildSteps(posLabels, 0)}
          status={{ type: "action", label: "Setup Instructions" }}
        />
      </CardContent>
    </Card>
  ),
}

// ---------------------------------------------------------------------------
// Individual status variations
// ---------------------------------------------------------------------------

export const PreLaunchComplete: Story = {
  name: "Pre-Launch — Complete",
  render: () => (
    <Card>
      <CardContent className="px-0">
        <WorkflowRow
          icon={<ClipboardCheck className="h-5 w-5 text-[var(--colors-gray-600)]" />}
          title="Pre-Launch"
          description="Offer announced in app"
          steps={allCompleted(prelaunchLabels)}
          status={{ type: "complete" }}
        />
      </CardContent>
    </Card>
  ),
}

export const PreLaunchMidway: Story = {
  name: "Pre-Launch — Midway (Adding Content)",
  render: () => (
    <Card>
      <CardContent className="px-0">
        <WorkflowRow
          icon={<ClipboardCheck className="h-5 w-5 text-[var(--colors-gray-600)]" />}
          title="Pre-Launch"
          description="Adding base-level content and photos"
          steps={buildSteps(prelaunchLabels, 1)}
          status={{ type: "waiting", label: "Waiting on Offline" }}
        />
      </CardContent>
    </Card>
  ),
}

export const PreLaunchPartnerFeedback: Story = {
  name: "Pre-Launch — Partner Feedback",
  render: () => (
    <Card>
      <CardContent className="px-0">
        <WorkflowRow
          icon={<ClipboardCheck className="h-5 w-5 text-[var(--colors-gray-600)]" />}
          title="Pre-Launch"
          description="We need your feedback on the offer details"
          steps={buildSteps(prelaunchLabels, 2)}
          status={{ type: "action", label: "Give Feedback" }}
        />
      </CardContent>
    </Card>
  ),
}

export const PreLaunchAdminReview: Story = {
  name: "Pre-Launch — Admin Review",
  render: () => (
    <Card>
      <CardContent className="px-0">
        <WorkflowRow
          icon={<ClipboardCheck className="h-5 w-5 text-[var(--colors-gray-600)]" />}
          title="Pre-Launch"
          description="Final review before launch"
          steps={buildSteps(prelaunchLabels, 3)}
          status={{ type: "waiting", label: "Waiting on Offline" }}
        />
      </CardContent>
    </Card>
  ),
}

export const PreLaunchReady: Story = {
  name: "Pre-Launch — Ready to Announce",
  render: () => (
    <Card>
      <CardContent className="px-0">
        <WorkflowRow
          icon={<ClipboardCheck className="h-5 w-5 text-[var(--colors-gray-600)]" />}
          title="Pre-Launch"
          description="Offer is ready and scheduled"
          steps={buildSteps(prelaunchLabels, 4)}
          status={{ type: "waiting", label: "Waiting on Offline" }}
        />
      </CardContent>
    </Card>
  ),
}

export const PreLaunchNotStarted: Story = {
  name: "Pre-Launch — Not Started",
  render: () => (
    <Card>
      <CardContent className="px-0">
        <WorkflowRow
          icon={<ClipboardCheck className="h-5 w-5 text-[var(--colors-gray-600)]" />}
          title="Pre-Launch"
          description="Workflow has not started yet"
          steps={buildSteps(prelaunchLabels, 0)}
          status={{ type: "waiting", label: "Waiting on Offline" }}
        />
      </CardContent>
    </Card>
  ),
}

// ---------------------------------------------------------------------------
// POS Integration variations
// ---------------------------------------------------------------------------

export const POSNotStarted: Story = {
  name: "POS — Setup Instructions",
  render: () => (
    <Card>
      <CardContent className="px-0">
        <WorkflowRow
          icon={<Monitor className="h-5 w-5 text-[var(--colors-gray-600)]" />}
          title="POS Integration"
          description="You have a task in Setup Instructions."
          steps={buildSteps(posLabels, 0)}
          status={{ type: "action", label: "Setup Instructions" }}
        />
      </CardContent>
    </Card>
  ),
}

export const POSConnecting: Story = {
  name: "POS — Connecting",
  render: () => (
    <Card>
      <CardContent className="px-0">
        <WorkflowRow
          icon={<Monitor className="h-5 w-5 text-[var(--colors-gray-600)]" />}
          title="POS Integration"
          description="Connecting to your point-of-sale system"
          steps={buildSteps(posLabels, 1)}
          status={{ type: "waiting", label: "Waiting on Offline" }}
        />
      </CardContent>
    </Card>
  ),
}

export const POSValidating: Story = {
  name: "POS — Validating",
  render: () => (
    <Card>
      <CardContent className="px-0">
        <WorkflowRow
          icon={<Monitor className="h-5 w-5 text-[var(--colors-gray-600)]" />}
          title="POS Integration"
          description="Validating POS connection"
          steps={buildSteps(posLabels, 2)}
          status={{ type: "waiting", label: "Waiting on Offline" }}
        />
      </CardContent>
    </Card>
  ),
}

export const POSComplete: Story = {
  name: "POS — Verified",
  render: () => (
    <Card>
      <CardContent className="px-0">
        <WorkflowRow
          icon={<Monitor className="h-5 w-5 text-[var(--colors-gray-600)]" />}
          title="POS Integration"
          description="POS integration verified and active"
          steps={allCompleted(posLabels)}
          status={{ type: "complete" }}
        />
      </CardContent>
    </Card>
  ),
}

// ---------------------------------------------------------------------------
// Contract workflow
// ---------------------------------------------------------------------------

export const ContractDraft: Story = {
  name: "Contract — Draft",
  render: () => (
    <Card>
      <CardContent className="px-0">
        <WorkflowRow
          icon={<ClipboardCheck className="h-5 w-5 text-[var(--colors-gray-600)]" />}
          title="Contract"
          description="Contract is being drafted"
          steps={buildSteps(contractLabels, 0)}
          status={{ type: "waiting", label: "Waiting on Offline" }}
        />
      </CardContent>
    </Card>
  ),
}

export const ContractReview: Story = {
  name: "Contract — Review",
  render: () => (
    <Card>
      <CardContent className="px-0">
        <WorkflowRow
          icon={<ClipboardCheck className="h-5 w-5 text-[var(--colors-gray-600)]" />}
          title="Contract"
          description="Please review and sign the contract"
          steps={buildSteps(contractLabels, 1)}
          status={{ type: "action", label: "Review Contract" }}
        />
      </CardContent>
    </Card>
  ),
}

export const ContractSigned: Story = {
  name: "Contract — Signed",
  render: () => (
    <Card>
      <CardContent className="px-0">
        <WorkflowRow
          icon={<ClipboardCheck className="h-5 w-5 text-[var(--colors-gray-600)]" />}
          title="Contract"
          description="Contract signed"
          steps={allCompleted(contractLabels)}
          status={{ type: "complete" }}
        />
      </CardContent>
    </Card>
  ),
}

// ---------------------------------------------------------------------------
// Multi-row card with separators
// ---------------------------------------------------------------------------

export const MultiRowCard: Story = {
  name: "Multi-Row Card (Shared Across Offers)",
  render: () => (
    <Card>
      <CardHeader>
        <h3 className="headline-small">Shared Across Offers</h3>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <WorkflowRow
          icon={<Monitor className="h-5 w-5 text-[var(--colors-gray-600)]" />}
          title="POS Integration"
          description="You have a task in Setup Instructions."
          steps={buildSteps(posLabels, 0)}
          status={{ type: "action", label: "Setup Instructions" }}
        />
        <Separator />
        <WorkflowRow
          icon={<ClipboardCheck className="h-5 w-5 text-[var(--colors-gray-600)]" />}
          title="Contract"
          description="Please review and sign the contract"
          steps={buildSteps(contractLabels, 1)}
          status={{ type: "action", label: "Review Contract" }}
        />
      </CardContent>
    </Card>
  ),
}

// ---------------------------------------------------------------------------
// Compact variant — mobile card context
// ---------------------------------------------------------------------------

export const CompactMobile: Story = {
  name: "Compact Variant — Mobile View",
  render: () => (
    <div className="max-w-sm space-y-4">
      <Card>
        <CardContent>
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--colors-gray-25)]">
              <ClipboardCheck className="h-3.5 w-3.5 text-[var(--colors-gray-600)]" />
            </span>
            <span className="label-medium uppercase tracking-[0.24em] text-[var(--colors-gray-900)]">
              Pre-Launch
            </span>
          </div>
          <ProgressStepper variant="compact" steps={buildSteps(prelaunchLabels, 2)} />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--colors-gray-25)]">
              <Monitor className="h-3.5 w-3.5 text-[var(--colors-gray-600)]" />
            </span>
            <span className="label-medium uppercase tracking-[0.24em] text-[var(--colors-gray-900)]">
              POS Integration
            </span>
          </div>
          <ProgressStepper variant="compact" steps={buildSteps(posLabels, 0)} />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--colors-gray-25)]">
              <ClipboardCheck className="h-3.5 w-3.5 text-[var(--colors-gray-600)]" />
            </span>
            <span className="label-medium uppercase tracking-[0.24em] text-[var(--colors-gray-900)]">
              Pre-Launch
            </span>
          </div>
          <ProgressStepper variant="compact" steps={allCompleted(prelaunchLabels)} />
        </CardContent>
      </Card>
    </div>
  ),
}
