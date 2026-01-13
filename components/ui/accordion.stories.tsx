import type { Meta, StoryObj } from "@storybook/react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion"

const meta: Meta<typeof Accordion> = {
  title: "Draft/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Accordion Component

A vertically stacked set of interactive headings that reveal content.

### Features
- Built on Radix UI Accordion primitive
- Single or multiple items open
- Animated expand/collapse
- Keyboard accessible

### Usage
- Use for FAQs, collapsible sections
- Use for workflow summaries
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>
          Yes. You can set type=&quot;multiple&quot; to allow multiple items to be open at once.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it customizable?</AccordionTrigger>
        <AccordionContent>
          Yes. You can customize the styles using className props.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Does it support keyboard navigation?</AccordionTrigger>
        <AccordionContent>
          Yes. Use arrow keys to navigate between items and Enter/Space to toggle.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const WorkflowSummary: Story = {
  name: "Workflow Summary (Use Case)",
  render: () => (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="step-1">
        <AccordionTrigger>
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs text-green-700">
              ✓
            </span>
            Step 1: Customer Information
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2 text-muted-foreground">
            <p>Name: John Doe</p>
            <p>Email: john@example.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="step-2">
        <AccordionTrigger>
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs text-green-700">
              ✓
            </span>
            Step 2: Service Selection
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2 text-muted-foreground">
            <p>Service: Premium Package</p>
            <p>Duration: 12 months</p>
            <p>Add-ons: Priority Support, Extended Storage</p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="step-3">
        <AccordionTrigger>
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs text-blue-700">
              3
            </span>
            Step 3: Payment (Current)
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2 text-muted-foreground">
            <p>Awaiting payment information...</p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="step-4">
        <AccordionTrigger>
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs text-gray-500">
              4
            </span>
            Step 4: Confirmation
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="text-muted-foreground">
            <p>Pending completion of previous steps.</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const FAQ: Story = {
  name: "FAQ Section",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Frequently Asked Questions</h3>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1">
          <AccordionTrigger>How do I cancel my subscription?</AccordionTrigger>
          <AccordionContent>
            You can cancel your subscription at any time from your account settings.
            Navigate to Settings → Billing → Cancel Subscription. Your access will
            continue until the end of your current billing period.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
          <AccordionContent>
            We accept all major credit cards (Visa, MasterCard, American Express),
            PayPal, and bank transfers for annual plans. All payments are processed
            securely through Stripe.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionTrigger>Can I change my plan later?</AccordionTrigger>
          <AccordionContent>
            Yes! You can upgrade or downgrade your plan at any time. When upgrading,
            you&apos;ll be charged the prorated difference. When downgrading, the new rate
            takes effect at your next billing cycle.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4">
          <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
          <AccordionContent>
            We offer a 30-day money-back guarantee for all new subscriptions. If
            you&apos;re not satisfied, contact our support team within 30 days of your
            purchase for a full refund.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}
