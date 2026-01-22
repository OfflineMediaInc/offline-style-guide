import type { Meta, StoryObj } from "@storybook/react"
import { AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react"
import { Alert, AlertTitle, AlertDescription } from "./alert"

const meta: Meta<typeof Alert> = {
  title: "Draft/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Alert Component (Draft)

Inline banner for displaying messages - informational, warnings, errors, or success states.

### Variants
- **default**: Neutral informational message
- **destructive**: Error or critical warning
- **warning**: Caution or pending state
- **success**: Positive confirmation

### Usage
Use Alert for inline feedback that doesn't interrupt the user's workflow.
For critical decisions requiring user action, use AlertDialog instead.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "warning", "success"],
      description: "The visual style of the alert",
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: () => (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
}

export const Warning: Story = {
  render: () => (
    <Alert variant="warning">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Pending Review</AlertTitle>
      <AlertDescription>
        Your submission is being reviewed. This may take up to 24 hours.
      </AlertDescription>
    </Alert>
  ),
}

export const Success: Story = {
  render: () => (
    <Alert variant="success">
      <CheckCircle className="h-4 w-4" />
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>
          Neutral informational message for general notices.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Positive confirmation - action completed successfully.
        </AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Caution - something needs attention but isn't critical.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Critical issue - immediate attention required.
        </AlertDescription>
      </Alert>
    </div>
  ),
}

export const WithoutIcon: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Note</AlertTitle>
      <AlertDescription>
        Alerts can also be used without icons for simpler messages.
      </AlertDescription>
    </Alert>
  ),
}

export const DescriptionOnly: Story = {
  render: () => (
    <Alert>
      <AlertDescription>
        A simple alert with just a description, no title needed.
      </AlertDescription>
    </Alert>
  ),
}
