import type { Meta, StoryObj } from "@storybook/react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./table"
import { Badge } from "./badge"

const meta: Meta<typeof Table> = {
  title: "Draft/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Table Component

A responsive table component for displaying tabular data.

### Features
- Responsive with horizontal scroll
- Hover states for rows
- Support for header, body, footer
- Caption support for accessibility

### Usage
- Use for data display (reviews, diffs, lists)
- Combine with other components like Badge, Checkbox
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const invoices = [
  { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { invoice: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
  { invoice: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
  { invoice: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
]

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$1,750.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

const reviews = [
  { id: 1, customer: "John D.", rating: 5, status: "Published", date: "2024-01-15" },
  { id: 2, customer: "Sarah M.", rating: 4, status: "Pending", date: "2024-01-14" },
  { id: 3, customer: "Mike R.", rating: 3, status: "Published", date: "2024-01-13" },
  { id: 4, customer: "Emily L.", rating: 5, status: "Flagged", date: "2024-01-12" },
]

export const ReviewsTable: Story = {
  name: "Reviews Table (Use Case)",
  render: () => (
    <Table>
      <TableCaption>Customer reviews for your products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Customer</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reviews.map((review) => (
          <TableRow key={review.id}>
            <TableCell className="font-medium">{review.customer}</TableCell>
            <TableCell>{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</TableCell>
            <TableCell>
              <Badge
                variant={
                  review.status === "Published"
                    ? "default"
                    : review.status === "Pending"
                    ? "secondary"
                    : "destructive"
                }
              >
                {review.status}
              </Badge>
            </TableCell>
            <TableCell>{review.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

const diffs = [
  { field: "Name", before: "John Smith", after: "John A. Smith", changed: true },
  { field: "Email", before: "john@example.com", after: "john@example.com", changed: false },
  { field: "Phone", before: "(555) 123-4567", after: "(555) 987-6543", changed: true },
  { field: "Address", before: "123 Main St", after: "456 Oak Ave", changed: true },
]

export const DiffTable: Story = {
  name: "Diff Table (Use Case)",
  render: () => (
    <Table>
      <TableCaption>Changes to customer record.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Field</TableHead>
          <TableHead>Before</TableHead>
          <TableHead>After</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {diffs.map((diff) => (
          <TableRow key={diff.field} className={diff.changed ? "bg-yellow-50" : ""}>
            <TableCell className="font-medium">{diff.field}</TableCell>
            <TableCell className={diff.changed ? "text-red-600 line-through" : ""}>
              {diff.before}
            </TableCell>
            <TableCell className={diff.changed ? "text-green-600 font-medium" : ""}>
              {diff.after}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const SimpleTable: Story = {
  name: "Simple Table",
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Alice Johnson</TableCell>
          <TableCell>alice@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Wilson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Carol Davis</TableCell>
          <TableCell>carol@example.com</TableCell>
          <TableCell>Editor</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}
