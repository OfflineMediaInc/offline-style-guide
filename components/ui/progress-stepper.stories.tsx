import type { Meta, StoryObj } from "@storybook/react"
import { ProgressStepper } from "../../src/components/progress-stepper"
import type { ProgressStepperStep } from "../../src/components/progress-stepper"

const meta: Meta<typeof ProgressStepper> = {
  title: "Draft/ProgressStepper",
  component: ProgressStepper,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Progress Stepper (Draft)

A horizontal progress stepper showing where a partner is in their journey.
Each step shows a circle (completed ✓, current ●, or upcoming ○) connected by lines.

### Status
- **Draft** — Not yet published to \`@offlinemediainc/offline-ui\`
- Extracted from the admin workflow stepper in the Partners App
- Intended for re-use on the partner-facing dashboard (Issue #14)

### Visual States
- **Completed**: Green circle with white checkmark, blue connecting line
- **Current**: Blue-bordered circle (larger), blue label text
- **Upcoming**: Gray-bordered circle, gray label text, gray connecting line
- **All completed**: Green labels on all steps

### Variants
- **stepper** (default): Dots with connecting lines and labels below each dot
- **compact**: Thin progress bar with current stage label and step counter — designed for mobile
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 700, padding: "2rem" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

// ---------------------------------------------------------------------------
// Helper to build step arrays
// ---------------------------------------------------------------------------
function buildSteps(
  labels: string[],
  currentIndex: number | null
): ProgressStepperStep[] {
  return labels.map((label, i) => {
    if (currentIndex === null) return { label, status: "upcoming" as const }
    if (i < currentIndex) return { label, status: "completed" as const }
    if (i === currentIndex) return { label, status: "current" as const }
    return { label, status: "upcoming" as const }
  })
}

function allCompletedSteps(labels: string[]): ProgressStepperStep[] {
  return labels.map((label) => ({ label, status: "completed" as const }))
}

// ---------------------------------------------------------------------------
// Contract workflow (3 steps)
// ---------------------------------------------------------------------------
const contractLabels = ["Draft", "Review", "Signed"]

// Pre-launch workflow (6 steps)
const prelaunchLabels = [
  "Creating Offer",
  "Adding Content",
  "Partner Feedback",
  "Admin Review",
  "Ready",
  "Announced",
]

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

export const NotStarted: Story = {
  name: "Not Started (all upcoming)",
  args: {
    steps: buildSteps(contractLabels, null),
  },
}

export const FirstStepActive: Story = {
  name: "First Step Active",
  render: () => (
    <ProgressStepper steps={buildSteps(contractLabels, 0)} />
  ),
}

export const MidwayProgress: Story = {
  name: "Midway Progress",
  render: () => (
    <ProgressStepper steps={buildSteps(prelaunchLabels, 1)} />
  ),
}

export const NearComplete: Story = {
  name: "Near Complete",
  render: () => (
    <ProgressStepper steps={buildSteps(prelaunchLabels, 4)} />
  ),
}

export const AllCompleted: Story = {
  name: "All Completed",
  render: () => (
    <ProgressStepper steps={allCompletedSteps(contractLabels)} />
  ),
}

export const TwoSteps: Story = {
  name: "Two Steps (minimal)",
  render: () => (
    <ProgressStepper
      steps={[
        { label: "Setup", status: "completed" },
        { label: "Verified", status: "current" },
      ]}
    />
  ),
}

export const SixSteps: Story = {
  name: "Six Steps (full pre-launch)",
  render: () => (
    <ProgressStepper steps={buildSteps(prelaunchLabels, 3)} />
  ),
}

export const Playground: Story = {
  name: "Playground",
  args: {
    steps: buildSteps(prelaunchLabels, 2),
  },
}

// ---------------------------------------------------------------------------
// Compact variant stories
// ---------------------------------------------------------------------------

export const CompactNotStarted: Story = {
  name: "Compact — Not Started",
  render: () => (
    <ProgressStepper variant="compact" steps={buildSteps(prelaunchLabels, 0)} />
  ),
}

export const CompactMidway: Story = {
  name: "Compact — Midway",
  render: () => (
    <ProgressStepper variant="compact" steps={buildSteps(prelaunchLabels, 2)} />
  ),
}

export const CompactNearComplete: Story = {
  name: "Compact — Near Complete",
  render: () => (
    <ProgressStepper variant="compact" steps={buildSteps(prelaunchLabels, 5)} />
  ),
}

export const CompactAllDone: Story = {
  name: "Compact — All Done",
  render: () => (
    <ProgressStepper variant="compact" steps={allCompletedSteps(prelaunchLabels)} />
  ),
}
