import type { Meta, StoryObj } from "@storybook/react"
import { Toaster, toast } from "./sonner"
import { Button } from "./button"

const meta: Meta<typeof Toaster> = {
  title: "Draft/Sonner",
  component: Toaster,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
## Sonner (Toast) Component

A toast notification component built on the sonner library.

### Features
- Multiple toast types (success, error, warning, info)
- Action buttons
- Promise-based toasts
- Customizable position
- Auto-dismiss with configurable duration

### Usage
- Use for non-blocking notifications
- Use for action confirmations
- Use for async operation status
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast("Event has been created.")}
    >
      Show Toast
    </Button>
  ),
}

export const Success: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast.success("Successfully saved!")}
    >
      Show Success Toast
    </Button>
  ),
}

export const Error: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast.error("Something went wrong.")}
    >
      Show Error Toast
    </Button>
  ),
}

export const Warning: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast.warning("Please review your changes.")}
    >
      Show Warning Toast
    </Button>
  ),
}

export const Info: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast.info("New update available.")}
    >
      Show Info Toast
    </Button>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event Created", {
          description: "Your event has been scheduled for Monday at 3pm.",
        })
      }
    >
      Toast with Description
    </Button>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast("File deleted", {
          description: "The file has been moved to trash.",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo clicked"),
          },
        })
      }
    >
      Toast with Action
    </Button>
  ),
}

export const PromiseToast: Story = {
  name: "Promise Toast",
  render: function PromiseToastStory() {
    const handleClick = () => {
      const asyncOperation = new window.Promise<{ name: string }>((resolve) =>
        setTimeout(() => resolve({ name: "Sonner" }), 2000)
      )

      toast.promise(asyncOperation, {
        loading: "Loading...",
        success: "Data fetched successfully!",
        error: "Error fetching data",
      })
    }

    return (
      <Button variant="outline" onClick={handleClick}>
        Show Promise Toast
      </Button>
    )
  },
}

export const AllTypes: Story = {
  name: "All Types",
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast("Default toast")}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.success("Success!")}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.error("Error!")}>
        Error
      </Button>
      <Button variant="outline" onClick={() => toast.warning("Warning!")}>
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.info("Info")}>
        Info
      </Button>
    </div>
  ),
}

export const NotificationUseCase: Story = {
  name: "Notification Use Case",
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Common notification scenarios:
      </p>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() =>
            toast.success("Changes saved", {
              description: "Your profile has been updated.",
            })
          }
        >
          Save Success
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.error("Failed to save", {
              description: "Please check your connection and try again.",
            })
          }
        >
          Save Error
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("Item deleted", {
              description: "The item has been removed.",
              action: {
                label: "Undo",
                onClick: () => toast.success("Item restored"),
              },
            })
          }
        >
          Delete with Undo
        </Button>
      </div>
    </div>
  ),
}
