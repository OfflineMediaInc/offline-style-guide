import type { Meta, StoryObj } from "@storybook/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import { Home, Settings, LayoutGrid, Code, Search } from "lucide-react"

const meta: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Offline Tabs Component

Tabs organize content into separate views where only one view is visible at a time.

### Structure
- **Tabs**: Root container
- **TabsList**: Container for tab triggers
- **TabsTrigger**: Clickable tab button
- **TabsContent**: Content panel for each tab

### Keyboard Navigation
- Arrow keys to navigate between tabs
- Enter/Space to select a tab
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Wrapper component for consistent example styling
const ExampleBox = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="space-y-2">
    <p className="text-xs text-muted-foreground">{label}</p>
    <div className="border rounded-lg p-6 flex items-start justify-center min-h-[120px]">
      {children}
    </div>
  </div>
)

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="grid grid-cols-2 gap-6 max-w-4xl">
      {/* Basic */}
      <ExampleBox label="Basic">
        <Tabs defaultValue="home" className="w-auto">
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
        </Tabs>
      </ExampleBox>

      {/* Line */}
      <ExampleBox label="Line">
        <Tabs defaultValue="overview" className="w-auto">
          <TabsList className="bg-transparent border-b rounded-none h-auto p-0">
            <TabsTrigger
              value="overview"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 pb-2"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 pb-2"
            >
              Analytics
            </TabsTrigger>
            <TabsTrigger
              value="reports"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 pb-2"
            >
              Reports
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </ExampleBox>

      {/* Disabled */}
      <ExampleBox label="Disabled">
        <Tabs defaultValue="home" className="w-auto">
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="disabled" disabled>
              Disabled
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </ExampleBox>

      {/* With Icons */}
      <ExampleBox label="With Icons">
        <Tabs defaultValue="preview" className="w-auto">
          <TabsList>
            <TabsTrigger value="preview" className="gap-1.5">
              <LayoutGrid className="h-4 w-4" />
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="gap-1.5">
              <Code className="h-4 w-4" />
              Code
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </ExampleBox>

      {/* Icon Only */}
      <ExampleBox label="Icon Only">
        <Tabs defaultValue="home" className="w-auto">
          <TabsList>
            <TabsTrigger value="home" aria-label="Home">
              <Home className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="search" aria-label="Search">
              <Search className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="settings" aria-label="Settings">
              <Settings className="h-4 w-4" />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </ExampleBox>

      {/* Multiple */}
      <ExampleBox label="Multiple">
        <Tabs defaultValue="overview" className="w-auto">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
        </Tabs>
      </ExampleBox>

      {/* With Content */}
      <ExampleBox label="With Content">
        <Tabs defaultValue="account" className="w-[300px]">
          <TabsList className="w-full">
            <TabsTrigger value="account" className="flex-1">Account</TabsTrigger>
            <TabsTrigger value="password" className="flex-1">Password</TabsTrigger>
            <TabsTrigger value="notifications" className="flex-1">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="mt-4 p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground">
              Manage your account preferences and profile information.
            </p>
          </TabsContent>
          <TabsContent value="password" className="mt-4 p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground">
              Update your password and security settings.
            </p>
          </TabsContent>
          <TabsContent value="notifications" className="mt-4 p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground">
              Configure your notification preferences.
            </p>
          </TabsContent>
        </Tabs>
      </ExampleBox>

      {/* Line With Content */}
      <ExampleBox label="Line With Content">
        <Tabs defaultValue="account" className="w-[300px]">
          <TabsList className="bg-transparent border-b rounded-none w-full justify-start h-auto p-0">
            <TabsTrigger
              value="account"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 pb-2"
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 pb-2"
            >
              Password
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 pb-2"
            >
              Notifications
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="mt-4 p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground">
              Manage your account preferences and profile information.
            </p>
          </TabsContent>
          <TabsContent value="password" className="mt-4 p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground">
              Update your password and security settings.
            </p>
          </TabsContent>
          <TabsContent value="notifications" className="mt-4 p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground">
              Configure your notification preferences.
            </p>
          </TabsContent>
        </Tabs>
      </ExampleBox>

      {/* With Input and Button */}
      <ExampleBox label="With Input and Button">
        <Tabs defaultValue="overview" className="w-[400px]">
          <div className="flex items-center gap-2">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <Input placeholder="Search..." className="w-32 h-9" />
            <Button size="sm">Action</Button>
          </div>
          <TabsContent value="overview" className="mt-4 p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground">
              View your dashboard metrics and key performance indicators.
            </p>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4 p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground">
              Detailed analytics and reporting data.
            </p>
          </TabsContent>
        </Tabs>
      </ExampleBox>

      {/* Vertical */}
      <ExampleBox label="Vertical">
        <Tabs defaultValue="account" orientation="vertical" className="w-[350px]">
          <div className="flex gap-4">
            <TabsList className="flex-col h-auto bg-transparent gap-1">
              <TabsTrigger value="account" className="justify-start w-full">
                Account
              </TabsTrigger>
              <TabsTrigger value="password" className="justify-start w-full">
                Password
              </TabsTrigger>
              <TabsTrigger value="notifications" className="justify-start w-full">
                Notifications
              </TabsTrigger>
            </TabsList>
            <div className="flex-1">
              <TabsContent value="account" className="mt-0 p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Manage your account preferences and profile information.
                </p>
              </TabsContent>
              <TabsContent value="password" className="mt-0 p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Update your password and security settings.
                </p>
              </TabsContent>
              <TabsContent value="notifications" className="mt-0 p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Configure your notification preferences.
                </p>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </ExampleBox>
    </div>
  ),
}

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

export const PartnerDashboardTabs: Story = {
  name: "Partner Dashboard",
  render: () => (
    <Tabs defaultValue="events" className="w-full">
      <TabsList className="bg-transparent border-b rounded-none w-full justify-start h-auto p-0">
        <TabsTrigger
          value="events"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 pb-2"
        >
          My Events
        </TabsTrigger>
        <TabsTrigger
          value="offers"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 pb-2"
        >
          My Offers
        </TabsTrigger>
        <TabsTrigger
          value="contracts"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 pb-2"
        >
          Contracts
        </TabsTrigger>
      </TabsList>
      <TabsContent value="events" className="pt-6">
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Wine Wednesday</CardTitle>
              <CardDescription>Every Wednesday • 5pm - 9pm</CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm">View Details</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Happy Hour Special</CardTitle>
              <CardDescription>Mon-Fri • 4pm - 7pm</CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm">View Details</Button>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="offers" className="pt-6">
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">20% Off First Visit</CardTitle>
              <CardDescription>Valid through Dec 31</CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm">Edit Offer</Button>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="contracts" className="pt-6">
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Partner Agreement 2025</CardTitle>
              <CardDescription>Status: Pending Signature</CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm">Review & Sign</Button>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  ),
}
