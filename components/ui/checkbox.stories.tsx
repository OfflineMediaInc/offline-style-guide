import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "./checkbox"
import { Label } from "./label"

const meta: Meta<typeof Checkbox> = {
  title: "Draft/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Checkbox Component

A control that allows the user to toggle between checked and not checked.

### Features
- Built on Radix UI Checkbox primitive
- Supports indeterminate state
- Keyboard accessible
- Focus ring styling

### Usage
- Use with Label for accessibility
- Group related checkboxes together
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Checkbox />,
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked">Checked by default</Label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled" className="text-muted-foreground">
          Disabled unchecked
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <Label htmlFor="disabled-checked" className="text-muted-foreground">
          Disabled checked
        </Label>
      </div>
    </div>
  ),
}

export const CheckboxGroup: Story = {
  name: "Checkbox Group",
  render: () => (
    <div className="space-y-3">
      <p className="text-sm font-medium">Select your interests:</p>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="music" />
          <Label htmlFor="music">Music</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="movies" />
          <Label htmlFor="movies">Movies</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="sports" />
          <Label htmlFor="sports">Sports</Label>
        </div>
      </div>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms-desc" />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor="terms-desc">Accept terms and conditions</Label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  ),
}
