import type { Meta, StoryObj } from "@storybook/react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "./input-otp"
import { Label } from "./label"

const meta: Meta<typeof InputOTP> = {
  title: "UI/InputOTP",
  component: InputOTP,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## InputOTP Component

A one-time password input component for verification codes.

### Features
- Built on input-otp library
- Accessible by default
- Customizable number of slots
- Support for separators
- Auto-focus and paste support

### Usage
- Use for login verification codes
- Use for two-factor authentication
- Use for phone number verification
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const WithSeparator: Story = {
  render: () => (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const FourDigits: Story = {
  name: "4-Digit Code",
  render: () => (
    <InputOTP maxLength={4}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="otp">One-Time Password</Label>
      <InputOTP maxLength={6} id="otp">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-sm text-muted-foreground">
        Enter the 6-digit code sent to your email.
      </p>
    </div>
  ),
}

export const LoginVerification: Story = {
  name: "Login Verification (Use Case)",
  render: () => (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2 text-center">
        <h3 className="text-lg font-semibold">Verify your identity</h3>
        <p className="text-sm text-muted-foreground">
          We sent a verification code to your email address.
        </p>
      </div>
      <div className="flex justify-center">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <p className="text-center text-sm text-muted-foreground">
        Didn&apos;t receive a code?{" "}
        <button className="text-primary underline">Resend</button>
      </p>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <InputOTP maxLength={6} disabled>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
}
