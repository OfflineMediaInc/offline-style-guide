import type { Meta, StoryObj } from "@storybook/react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from "./select"
import { Label } from "./label"

const meta: Meta<typeof Select> = {
  title: "Draft/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Select Component

A dropdown menu for selecting from a list of options.

### Features
- Built on Radix UI Select primitive
- Keyboard navigation
- Grouped options support
- Scrollable content for long lists
- Custom trigger styling

### Usage
- Use for form fields with predefined options
- Group related options with SelectGroup and SelectLabel
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="framework">Framework</Label>
      <Select>
        <SelectTrigger id="framework">
          <SelectValue placeholder="Select a framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="next">Next.js</SelectItem>
          <SelectItem value="remix">Remix</SelectItem>
          <SelectItem value="astro">Astro</SelectItem>
          <SelectItem value="nuxt">Nuxt</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
          <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const DisabledItem: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a plan" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="free">Free</SelectItem>
        <SelectItem value="pro">Pro</SelectItem>
        <SelectItem value="enterprise" disabled>
          Enterprise (Contact us)
        </SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const OfferSelection: Story = {
  name: "Offer Selection (Use Case)",
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="offer">Select Offer</Label>
      <Select>
        <SelectTrigger id="offer">
          <SelectValue placeholder="Choose an offer..." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Active Offers</SelectLabel>
            <SelectItem value="summer-2024">Summer 2024 Promo</SelectItem>
            <SelectItem value="new-customer">New Customer Discount</SelectItem>
            <SelectItem value="loyalty">Loyalty Rewards</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Seasonal</SelectLabel>
            <SelectItem value="holiday">Holiday Special</SelectItem>
            <SelectItem value="black-friday">Black Friday</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const LocationSelection: Story = {
  name: "Location Selection (Use Case)",
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="location">Select Location</Label>
      <Select>
        <SelectTrigger id="location">
          <SelectValue placeholder="Choose a location..." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>West Coast</SelectLabel>
            <SelectItem value="sf">San Francisco, CA</SelectItem>
            <SelectItem value="la">Los Angeles, CA</SelectItem>
            <SelectItem value="seattle">Seattle, WA</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>East Coast</SelectLabel>
            <SelectItem value="nyc">New York, NY</SelectItem>
            <SelectItem value="boston">Boston, MA</SelectItem>
            <SelectItem value="miami">Miami, FL</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
}
