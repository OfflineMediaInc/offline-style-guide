import type { Meta, StoryObj } from "@storybook/react"
import {
  LayoutDashboard,
  Tag,
  Calendar,
  FileText,
  Settings,
  Users,
  BarChart3,
  Store,
  Ticket,
  HelpCircle,
  Building2,
  CreditCard,
  Bell,
  Shield,
  Workflow,
  MessageSquare,
  BookOpen,
  Rocket,
  History,
} from "lucide-react"
import { OfflineSidebar, type NavGroup } from "./offline-sidebar"

const meta: Meta<typeof OfflineSidebar> = {
  title: "UI/Sidebar",
  component: OfflineSidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false, // Render in iframe to contain fixed positioning
        iframeHeight: 600,
      },
      description: {
        component: `
## Offline Sidebar Layout

A standardized sidebar layout component for Offline applications. Based on the shadcn/ui Sidebar component with Offline brand styling.

### Features
- **Collapsible**: Click the rail or use Cmd+B to collapse to icon-only mode
- **Nested Menus**: Collapsible sub-items with smooth animations
- **Grouped Navigation**: Organize items into labeled sections
- **Workspace Switcher**: Header with optional workspace dropdown
- **Mobile Responsive**: Uses a sheet/drawer on mobile devices
- **Keyboard Shortcut**: Cmd/Ctrl + B toggles sidebar

### Usage
\`\`\`tsx
import { OfflineSidebar } from "@/components/offline/OfflineSidebar"

<OfflineSidebar
  workspace={{ name: "Offline", subtitle: "Partners" }}
  user={{ name: "John Doe", email: "john@example.com" }}
  navGroups={[
    {
      label: "Main",
      items: [
        { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
        {
          title: "Offers",
          url: "/offers",
          icon: Tag,
          items: [
            { title: "Active", url: "/offers/active" },
            { title: "Draft", url: "/offers/draft" },
          ]
        },
      ]
    }
  ]}
  onLogout={() => signOut()}
>
  <YourPageContent />
</OfflineSidebar>
\`\`\`
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: "100vh", width: "100%" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof OfflineSidebar>

// Sample content component
const SampleContent = ({ title }: { title: string }) => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">{title}</h1>
    <div className="grid gap-4">
      <div className="surface-card p-6">
        <h2 className="title-medium mb-2">Welcome Card</h2>
        <p className="body-medium text-muted-foreground">
          This is sample content to demonstrate the sidebar layout. The sidebar
          can be collapsed by clicking the rail on the right edge or pressing Cmd+B.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="surface-card-compact p-4">
          <p className="label-small text-muted-foreground">METRIC 1</p>
          <p className="headline-small">1,234</p>
        </div>
        <div className="surface-card-compact p-4">
          <p className="label-small text-muted-foreground">METRIC 2</p>
          <p className="headline-small">5,678</p>
        </div>
        <div className="surface-card-compact p-4">
          <p className="label-small text-muted-foreground">METRIC 3</p>
          <p className="headline-small">$9,012</p>
        </div>
      </div>
    </div>
  </div>
)

// ============================================================================
// PARTNER PORTAL EXAMPLES
// ============================================================================

const partnerNavGroups: NavGroup[] = [
  {
    label: "Main",
    items: [
      { title: "Home", url: "/partner/dashboard", icon: LayoutDashboard, isActive: true },
      {
        title: "Offers",
        url: "/partner/offers",
        icon: Tag,
        items: [
          { title: "Active Offers", url: "/partner/offers?status=active" },
          { title: "Draft Offers", url: "/partner/offers?status=draft" },
          { title: "Archived", url: "/partner/offers?status=archived" },
        ]
      },
      {
        title: "Events",
        url: "/partner/events",
        icon: Calendar,
        items: [
          { title: "Upcoming", url: "/partner/events?status=upcoming" },
          { title: "Past Events", url: "/partner/events?status=past" },
          { title: "Drafts", url: "/partner/events?status=draft" },
        ]
      },
      { title: "Contracts", url: "/partner/contracts", icon: FileText },
    ],
  },
  {
    label: "Team",
    items: [
      { title: "Team Members", url: "/partner/team", icon: Users },
      { title: "Notifications", url: "/partner/notifications", icon: Bell },
    ],
  },
]

export const PartnerPortal: Story = {
  name: "Partner Portal",
  args: {
    workspace: {
      name: "Partner App",
      subtitle: "Offline",
    },
    user: {
      name: "Chris Borreson",
      email: "chris@example.com",
    },
    navGroups: partnerNavGroups,
  },
  render: (args) => (
    <OfflineSidebar {...args}>
      <SampleContent title="Partner Dashboard" />
    </OfflineSidebar>
  ),
}

// ============================================================================
// ADMIN PORTAL EXAMPLES
// ============================================================================

const adminNavGroups: NavGroup[] = [
  {
    label: "Platform",
    items: [
      { title: "Dashboard", url: "/admin", icon: LayoutDashboard, isActive: true },
      {
        title: "Partners",
        url: "/admin/partners",
        icon: Store,
        items: [
          { title: "All Partners", url: "/admin/partners" },
          { title: "Pending Review", url: "/admin/partners?status=pending" },
          { title: "Active", url: "/admin/partners?status=active" },
        ]
      },
      {
        title: "Offers",
        url: "/admin/offers",
        icon: Tag,
        items: [
          { title: "All Offers", url: "/admin/offers" },
          { title: "Pending Approval", url: "/admin/offers?status=pending" },
          { title: "Live", url: "/admin/offers?status=live" },
        ]
      },
      {
        title: "Events",
        url: "/admin/events",
        icon: Calendar,
        items: [
          { title: "All Events", url: "/admin/events" },
          { title: "Upcoming", url: "/admin/events?status=upcoming" },
          { title: "Flow Planning", url: "/admin/events/flow" },
        ]
      },
      { title: "Tickets", url: "/admin/tickets", icon: Ticket },
    ],
  },
  {
    label: "Management",
    items: [
      { title: "Users", url: "/admin/users", icon: Users },
      { title: "Analytics", url: "/admin/analytics", icon: BarChart3 },
      { title: "Workflows", url: "/admin/workflows", icon: Workflow },
    ],
  },
  {
    label: "Settings",
    items: [
      { title: "General", url: "/admin/settings", icon: Settings },
      { title: "Billing", url: "/admin/settings/billing", icon: CreditCard },
      { title: "Security", url: "/admin/settings/security", icon: Shield },
    ],
  },
]

export const AdminPortal: Story = {
  name: "Admin Portal",
  args: {
    workspace: {
      name: "Admin Portal",
      subtitle: "Offline",
    },
    user: {
      name: "David Shaner",
      email: "david@example.com",
    },
    navGroups: adminNavGroups,
  },
  render: (args) => (
    <OfflineSidebar {...args}>
      <SampleContent title="Admin Dashboard" />
    </OfflineSidebar>
  ),
}

// ============================================================================
// DOCUMENTATION/HELP EXAMPLE (like shadcn screenshot)
// ============================================================================

const docsNavGroups: NavGroup[] = [
  {
    label: "Platform",
    items: [
      {
        title: "Playground",
        url: "/docs/playground",
        icon: Rocket,
        items: [
          { title: "History", url: "/docs/playground/history" },
          { title: "Starred", url: "/docs/playground/starred" },
          { title: "Settings", url: "/docs/playground/settings" },
        ]
      },
      {
        title: "Models",
        url: "/docs/models",
        icon: Building2,
        items: [
          { title: "Genesis", url: "/docs/models/genesis" },
          { title: "Explorer", url: "/docs/models/explorer" },
          { title: "Quantum", url: "/docs/models/quantum" },
        ]
      },
      {
        title: "Documentation",
        url: "/docs",
        icon: BookOpen,
        isActive: true,
        items: [
          { title: "Introduction", url: "/docs/introduction", isActive: true },
          { title: "Get Started", url: "/docs/get-started" },
          { title: "Tutorials", url: "/docs/tutorials" },
          { title: "Changelog", url: "/docs/changelog" },
        ]
      },
      { title: "Settings", url: "/settings", icon: Settings },
    ],
  },
  {
    label: "Projects",
    items: [
      { title: "Design Engineering", url: "/projects/design", icon: LayoutDashboard },
      { title: "Sales & Marketing", url: "/projects/sales", icon: BarChart3 },
      { title: "Travel", url: "/projects/travel", icon: Calendar },
    ],
  },
]

export const DocumentationStyle: Story = {
  name: "Documentation Style",
  args: {
    workspace: {
      name: "Acme Inc",
      subtitle: "Enterprise",
    },
    user: {
      name: "shadcn",
      email: "m@example.com",
    },
    navGroups: docsNavGroups,
  },
  render: (args) => (
    <OfflineSidebar {...args}>
      <SampleContent title="Documentation" />
    </OfflineSidebar>
  ),
}

// ============================================================================
// WORKSPACE SWITCHER EXAMPLE
// ============================================================================

export const WithWorkspaceSwitcher: Story = {
  name: "Workspace Switcher",
  args: {
    workspace: {
      name: "Wye Hill Kitchen",
      subtitle: "Partner Account",
    },
    workspaces: [
      { name: "Wye Hill Kitchen", subtitle: "Partner Account" },
      { name: "Glasshouse Kitchen", subtitle: "Partner Account" },
      { name: "The Pit", subtitle: "Partner Account" },
    ],
    user: {
      name: "Chris Borreson",
      email: "chris@example.com",
    },
    navGroups: partnerNavGroups,
  },
  render: (args) => (
    <OfflineSidebar {...args}>
      <SampleContent title="Wye Hill Dashboard" />
    </OfflineSidebar>
  ),
}

// ============================================================================
// OTHER VARIATIONS
// ============================================================================

export const CollapsedByDefault: Story = {
  name: "Collapsed by Default",
  args: {
    workspace: {
      name: "Partner App",
      subtitle: "Offline",
    },
    user: {
      name: "Chris Borreson",
      email: "chris@example.com",
    },
    navGroups: partnerNavGroups,
    defaultCollapsed: true,
  },
  render: (args) => (
    <OfflineSidebar {...args}>
      <SampleContent title="Partner Dashboard" />
    </OfflineSidebar>
  ),
}

export const WithBadges: Story = {
  name: "With Badges",
  args: {
    workspace: {
      name: "Partner App",
      subtitle: "Offline",
    },
    user: {
      name: "Partner User",
      email: "partner@example.com",
    },
    navGroups: [
      {
        label: "Main",
        items: [
          { title: "Home", url: "/dashboard", icon: LayoutDashboard, isActive: true },
          { title: "Offers", url: "/offers", icon: Tag, badge: 3 },
          { title: "Events", url: "/events", icon: Calendar, badge: "New" },
          { title: "Contracts", url: "/contracts", icon: FileText, badge: 1 },
          { title: "Messages", url: "/messages", icon: MessageSquare, badge: 12 },
        ],
      },
    ],
  },
  render: (args) => (
    <OfflineSidebar {...args}>
      <SampleContent title="Dashboard with Badges" />
    </OfflineSidebar>
  ),
}

export const MinimalNav: Story = {
  name: "Minimal Navigation",
  args: {
    workspace: {
      name: "Simple App",
      subtitle: "Offline",
    },
    user: {
      name: "Simple User",
      email: "simple@example.com",
    },
    navItems: [
      { title: "Home", url: "/", icon: LayoutDashboard, isActive: true },
      { title: "History", url: "/history", icon: History },
      { title: "Settings", url: "/settings", icon: Settings },
    ],
  },
  render: (args) => (
    <OfflineSidebar {...args}>
      <SampleContent title="Minimal Dashboard" />
    </OfflineSidebar>
  ),
}

export const NoUser: Story = {
  name: "No User (Public)",
  args: {
    workspace: {
      name: "Events",
      subtitle: "Offline",
    },
    navItems: [
      { title: "Home", url: "/", icon: LayoutDashboard, isActive: true },
      { title: "Events", url: "/events", icon: Calendar },
      { title: "Help", url: "/help", icon: HelpCircle },
    ],
  },
  render: (args) => (
    <OfflineSidebar {...args}>
      <SampleContent title="Public Page" />
    </OfflineSidebar>
  ),
}
