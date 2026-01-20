import type { Meta, StoryObj } from "@storybook/react"
import { PanelLeft } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./breadcrumb"
import { Button } from "./button"

const meta: Meta<typeof Breadcrumb> = {
  title: "UI/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Breadcrumb Component

A navigation aid that shows the user's current location within the site hierarchy.

### Features
- "Home" text link for root navigation (not an icon—see below)
- Chevron separators between items
- Ellipsis for collapsing deep paths
- Current page styled as non-link with \`aria-current="page"\`

### Placement: Sticky Header (shadcn Pattern)

Breadcrumbs belong in the **sticky header row**, not the scrollable content area:

\`\`\`
┌──────────────────────────────────────────────────────────┐
│ [☰] │ Home / Partners / Wye Hill Kitchen / Offers        │  ← Sticky header
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Offers                                                  │  ← Page title (h1)
│  Manage offers for Wye Hill Kitchen                      │
│                                                          │
└──────────────────────────────────────────────────────────┘
\`\`\`

The sidebar trigger [☰] is followed by a vertical separator, then the breadcrumb.

### Why "Home" Text, Not an Icon?

The **sidebar trigger already provides the icon** in the header row. Adding a Home icon to the breadcrumb creates visual noise (two icons stacked horizontally). Use "Home" text instead—it's clearer and follows shadcn's pattern.

### Breadcrumb + Page Title (Why Both?)

Breadcrumbs and page titles answer **different user questions**:
- **Breadcrumb**: "How did I get here? Where can I go back to?"
- **Page title (h1)**: "What content is on this page?"

The current page appears in BOTH places intentionally:
- In breadcrumb: muted styling, non-link, \`aria-current="page"\`
- As h1: primary page identifier

This redundancy reinforces location for users who scan differently. **Do not "fix" this by removing one or the other.**

### Usage with OfflineSidebar

Pass breadcrumbs via the \`topbarContent\` prop:

\`\`\`tsx
<OfflineSidebar
  topbarContent={
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Account</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  }
>
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
    {/* Page content */}
  </div>
</OfflineSidebar>
\`\`\`

### Usage Guidelines
- Use "Home" text for root navigation, not an icon
- Use ellipsis when path depth exceeds 4 levels
- Current page should always be the last item and use \`BreadcrumbPage\`
- See **UI/Sidebar** for full layout examples with navigation
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "Default",
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Account</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const WithEllipsis: Story = {
  name: "With Ellipsis (Deep Path)",
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/admin/partners/wye-hill">Wye Hill Kitchen</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Offers</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: "Use ellipsis to collapse middle segments when the path exceeds 4 levels. Show the root, one context level, ellipsis, parent, and current page.",
      },
    },
  },
}

export const InPageHeader: Story = {
  name: "In Topbar Header (Primary Pattern)",
  render: () => (
    <div className="space-y-4">
      {/* This simulates the sticky header row */}
      <div className="flex items-center gap-2 border-b pb-4">
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <PanelLeft className="h-4 w-4" />
        </Button>
        <div className="w-px h-4 bg-border" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/partners">Partners</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/partners/wye-hill">Wye Hill Kitchen</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Offers</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {/* This simulates the content area */}
      <div>
        <h1 className="text-2xl font-bold">Offers</h1>
        <p className="text-sm text-muted-foreground">
          Manage offers for Wye Hill Kitchen
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `**This is the standard pattern.** The breadcrumb lives in the sticky header (after sidebar trigger and vertical separator). The h1 title lives in the content area. Both show "Offers" intentionally—they serve different cognitive purposes: the breadcrumb shows path/hierarchy, the h1 identifies page content.`,
      },
    },
  },
}

export const PartnerDashboard: Story = {
  name: "Partner Dashboard Example",
  render: () => (
    <div className="space-y-4">
      {/* Header row simulation */}
      <div className="flex items-center gap-2 border-b pb-4">
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <PanelLeft className="h-4 w-4" />
        </Button>
        <div className="w-px h-4 bg-border" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {/* Content area */}
      <h1 className="text-2xl font-bold">Partner Dashboard</h1>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Simple two-level breadcrumb for a dashboard page. The h1 can include more context than the breadcrumb item.",
      },
    },
  },
}
