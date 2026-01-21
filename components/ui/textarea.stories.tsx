import type { Meta, StoryObj } from "@storybook/react"
import { Textarea } from "./textarea"
import { Label } from "./label"
import { Button } from "./button"

const meta: Meta<typeof Textarea> = {
  title: "Draft/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Textarea Component

A multi-line text input for longer form content.

### Features
- Auto-resizing capability (with CSS or JS)
- Consistent styling with Input component
- Support for rows/cols attributes
- Placeholder support

### Usage
- Use for notes, descriptions, feedback
- Pair with Label for accessibility
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Textarea placeholder="Type your message here." />,
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  ),
}

export const WithText: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message-2">Your message</Label>
      <Textarea placeholder="Type your message here." id="message-2" />
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
  ),
}

export const WithButton: Story = {
  render: () => (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Textarea placeholder="This textarea is disabled." disabled />
  ),
}

export const WithRows: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="grid gap-1.5">
        <Label>Small (3 rows)</Label>
        <Textarea placeholder="Small textarea..." rows={3} />
      </div>
      <div className="grid gap-1.5">
        <Label>Medium (5 rows)</Label>
        <Textarea placeholder="Medium textarea..." rows={5} />
      </div>
      <div className="grid gap-1.5">
        <Label>Large (8 rows)</Label>
        <Textarea placeholder="Large textarea..." rows={8} />
      </div>
    </div>
  ),
}
