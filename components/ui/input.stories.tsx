import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "./input"
import { Label } from "./label"
import { Button } from "./button"
import { Search, Eye, EyeOff } from "lucide-react"
import { useState } from "react"

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url", "search"],
    },
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Offline Input Component

Standard input field using CSS variables for consistent theming.

### States
- **Default**: Gray border (#DFDFDF)
- **Focus**: Ring with gray-900
- **Disabled**: Reduced opacity, not-allowed cursor
- **Error**: Use \`input-field error\` class from globals.css

### Usage
- Always pair with a Label for accessibility
- Use appropriate input types for validation
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
}

export const WithButton: Story = {
  render: () => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
}

export const File: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input placeholder="Search..." className="pl-10" />
    </div>
  ),
}

export const Password: Story = {
  render: function PasswordInput() {
    const [showPassword, setShowPassword] = useState(false)
    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    )
  },
}

export const OfflineInputField: Story = {
  name: "Error State (input-field)",
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-4">
      <div className="space-y-1.5">
        <Label>Standard Input</Label>
        <input className="input-field w-full" placeholder="Using input-field class" />
      </div>
      <div className="space-y-1.5">
        <Label>Error State</Label>
        <input className="input-field error w-full" placeholder="Error input" />
        <p className="text-sm" style={{ color: "var(--colors-red-400)" }}>
          This field has an error
        </p>
      </div>
    </div>
  ),
}

export const AllTypes: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <div className="space-y-1.5">
        <Label>Text</Label>
        <Input type="text" placeholder="Text input" />
      </div>
      <div className="space-y-1.5">
        <Label>Email</Label>
        <Input type="email" placeholder="email@example.com" />
      </div>
      <div className="space-y-1.5">
        <Label>Number</Label>
        <Input type="number" placeholder="0" />
      </div>
      <div className="space-y-1.5">
        <Label>Tel</Label>
        <Input type="tel" placeholder="(555) 123-4567" />
      </div>
      <div className="space-y-1.5">
        <Label>URL</Label>
        <Input type="url" placeholder="https://example.com" />
      </div>
    </div>
  ),
}
