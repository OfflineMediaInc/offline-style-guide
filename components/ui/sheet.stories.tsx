import type { Meta, StoryObj } from "@storybook/react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./sheet"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import { Menu } from "lucide-react"

const meta: Meta<typeof Sheet> = {
  title: "UI/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Offline Sheet Component

Sheets are slide-in panels from the edges of the screen.
Perfect for mobile navigation, filters, or secondary actions.

### Sides
- **right** (default): Slide in from right
- **left**: Slide in from left (mobile nav)
- **top**: Slide down from top
- **bottom**: Slide up from bottom (mobile action sheets)

### Mobile Usage
Use \`side="left"\` for mobile navigation menus.
Use \`side="bottom"\` for mobile action sheets.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            Sheet description goes here.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p>Sheet content goes here.</p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const Left: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Left Sheet</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-2 py-4">
          <a href="#" className="nav-link">Dashboard</a>
          <a href="#" className="nav-link">Events</a>
          <a href="#" className="nav-link">Offers</a>
          <a href="#" className="nav-link">Contracts</a>
          <a href="#" className="nav-link">Settings</a>
        </nav>
      </SheetContent>
    </Sheet>
  ),
}

export const Top: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Top Sheet</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Notification</SheetTitle>
          <SheetDescription>
            You have 3 new messages.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}

export const Bottom: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Bottom Sheet</Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-auto max-h-[80vh]">
        <SheetHeader>
          <SheetTitle>Actions</SheetTitle>
          <SheetDescription>
            Choose an action to perform.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 py-4">
          <Button className="w-full">Edit</Button>
          <Button variant="secondary" className="w-full">Share</Button>
          <Button variant="destructive" className="w-full">Delete</Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Add New Event</Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Create Event</SheetTitle>
          <SheetDescription>
            Fill out the form to create a new event.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="event-name">Event Name</Label>
            <Input id="event-name" placeholder="Enter event name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="event-date">Date</Label>
            <Input id="event-date" type="date" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="event-time">Time</Label>
            <Input id="event-time" type="time" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="event-location">Location</Label>
            <Input id="event-location" placeholder="Enter location" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Create Event</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const MobileNavigation: Story = {
  name: "Mobile Navigation",
  parameters: {
    docs: {
      description: {
        story: "Basic mobile navigation using Sheet. For the full Offline Sidebar pattern, see **Layouts/Offline Sidebar**.",
      },
    },
  },
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] flex flex-col">
        <SheetHeader className="border-b border-gray-200 pb-4">
          <SheetTitle className="display-medium" style={{ color: "var(--colors-yellow-400, #de8e0f)" }}>
            OFFLINE
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 p-6 flex-1">
          <a href="#" className="title-large py-2 hover:opacity-70 transition-opacity">Dashboard</a>
          <a href="#" className="title-large py-2 hover:opacity-70 transition-opacity">My Events</a>
          <a href="#" className="title-large py-2 hover:opacity-70 transition-opacity">My Offers</a>
          <a href="#" className="title-large py-2 hover:opacity-70 transition-opacity">Contracts</a>
          <a href="#" className="title-large py-2 hover:opacity-70 transition-opacity">Settings</a>
        </nav>
        <div className="p-6 pt-0">
          <Button variant="outline" className="w-full">
            Sign Out
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
}
