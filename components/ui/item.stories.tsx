import type { Meta, StoryObj } from "@storybook/react"
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemGroup,
  ItemSeparator,
  ItemActions,
  ItemHeader,
  ItemFooter,
} from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

/**
 * Item Component
 *
 * A flexible primitive for displaying list items, metadata rows, and content with media.
 */
const meta: Meta = {
  title: "UI/Item",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj

// ============================================================================
// DEFAULT VARIANT
// ============================================================================

export const Default: Story = {
  name: "Default",
  render: () => (
    <div className="space-y-2 rounded-lg border p-4">
      <Item>
        <ItemContent>
          <ItemTitle>Title Only</ItemTitle>
        </ItemContent>
      </Item>

      <Item>
        <ItemContent>
          <ItemTitle>Title + Button</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item>
        <ItemContent>
          <ItemTitle>Title + Description</ItemTitle>
          <ItemDescription>This is a description that provides additional context.</ItemDescription>
        </ItemContent>
      </Item>

      <Item>
        <ItemContent>
          <ItemTitle>Title + Description + Button</ItemTitle>
          <ItemDescription>This item includes a title, description, and action button.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item>
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title</ItemTitle>
        </ItemContent>
      </Item>

      <Item>
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title + Button</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item>
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title + Description</ItemTitle>
          <ItemDescription>This item includes media, title, and description.</ItemDescription>
        </ItemContent>
      </Item>

      <Item>
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title + Description + Button</ItemTitle>
          <ItemDescription>Complete item with all components: media, title, description, and button.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item>
        <ItemContent>
          <ItemTitle>Multiple Actions</ItemTitle>
          <ItemDescription>Item with multiple action buttons in the actions area.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Cancel</Button>
          <Button size="sm">Confirm</Button>
        </ItemActions>
      </Item>
    </div>
  ),
}

// ============================================================================
// OUTLINE VARIANT
// ============================================================================

export const Outline: Story = {
  name: "Outline",
  render: () => (
    <div className="space-y-2">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Title Only</ItemTitle>
        </ItemContent>
      </Item>

      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Title + Button</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Title + Description</ItemTitle>
          <ItemDescription>This is a description that provides additional context.</ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Title + Description + Button</ItemTitle>
          <ItemDescription>This item includes a title, description, and action button.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item variant="outline">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title</ItemTitle>
        </ItemContent>
      </Item>

      <Item variant="outline">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title + Button</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item variant="outline">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title + Description</ItemTitle>
          <ItemDescription>This item includes media, title, and description.</ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title + Description + Button</ItemTitle>
          <ItemDescription>Complete item with all components: media, title, description, and button.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Multiple Actions</ItemTitle>
          <ItemDescription>Item with multiple action buttons in the actions area.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Cancel</Button>
          <Button size="sm">Confirm</Button>
        </ItemActions>
      </Item>
    </div>
  ),
}

// ============================================================================
// MUTED VARIANT
// ============================================================================

export const Muted: Story = {
  name: "Muted",
  render: () => (
    <div className="space-y-2">
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Title Only</ItemTitle>
        </ItemContent>
      </Item>

      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Title + Button</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Title + Description</ItemTitle>
          <ItemDescription>This is a description that provides additional context.</ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Title + Description + Button</ItemTitle>
          <ItemDescription>This item includes a title, description, and action button.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item variant="muted">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title</ItemTitle>
        </ItemContent>
      </Item>

      <Item variant="muted">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title + Button</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item variant="muted">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title + Description</ItemTitle>
          <ItemDescription>This item includes media, title, and description.</ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="muted">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title + Description + Button</ItemTitle>
          <ItemDescription>Complete item with all components: media, title, description, and button.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Multiple Actions</ItemTitle>
          <ItemDescription>Item with multiple action buttons in the actions area.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Cancel</Button>
          <Button size="sm">Confirm</Button>
        </ItemActions>
      </Item>
    </div>
  ),
}

// ============================================================================
// SMALL SIZE
// ============================================================================

export const Small: Story = {
  name: "Small",
  render: () => (
    <div className="space-y-2 rounded-lg border p-4">
      <Item size="sm">
        <ItemContent>
          <ItemTitle>Title Only</ItemTitle>
        </ItemContent>
      </Item>

      <Item size="sm">
        <ItemContent>
          <ItemTitle>Title + Button</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item size="sm">
        <ItemContent>
          <ItemTitle>Title + Description</ItemTitle>
          <ItemDescription>This is a description that provides additional context.</ItemDescription>
        </ItemContent>
      </Item>

      <Item size="sm">
        <ItemContent>
          <ItemTitle>Title + Description + Button</ItemTitle>
          <ItemDescription>This item includes a title, description, and action button.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item size="sm">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title</ItemTitle>
        </ItemContent>
      </Item>

      <Item size="sm">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title + Button</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item size="sm">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title + Description</ItemTitle>
          <ItemDescription>This item includes media, title, and description.</ItemDescription>
        </ItemContent>
      </Item>

      <Item size="sm">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title + Description + Button</ItemTitle>
          <ItemDescription>Complete item with all components: media, title, description, and button.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item size="sm">
        <ItemContent>
          <ItemTitle>Multiple Actions</ItemTitle>
          <ItemDescription>Item with multiple action buttons in the actions area.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Cancel</Button>
          <Button size="sm">Confirm</Button>
        </ItemActions>
      </Item>
    </div>
  ),
}

// ============================================================================
// OUTLINE - SMALL
// ============================================================================

export const OutlineSmall: Story = {
  name: "Outline - Small",
  render: () => (
    <div className="space-y-2">
      <Item variant="outline" size="sm">
        <ItemContent>
          <ItemTitle>Title Only</ItemTitle>
        </ItemContent>
      </Item>

      <Item variant="outline" size="sm">
        <ItemContent>
          <ItemTitle>Title + Button</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item variant="outline" size="sm">
        <ItemContent>
          <ItemTitle>Title + Description</ItemTitle>
          <ItemDescription>This is a description that provides additional context.</ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline" size="sm">
        <ItemContent>
          <ItemTitle>Title + Description + Button</ItemTitle>
          <ItemDescription>This item includes a title, description, and action button.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item variant="outline" size="sm">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title</ItemTitle>
        </ItemContent>
      </Item>

      <Item variant="outline" size="sm">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title + Button</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item variant="outline" size="sm">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title + Description</ItemTitle>
          <ItemDescription>This item includes media, title, and description.</ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline" size="sm">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title + Description + Button</ItemTitle>
          <ItemDescription>Complete item with all components: media, title, description, and button.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item variant="outline" size="sm">
        <ItemContent>
          <ItemTitle>Multiple Actions</ItemTitle>
          <ItemDescription>Item with multiple action buttons in the actions area.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Cancel</Button>
          <Button size="sm">Confirm</Button>
        </ItemActions>
      </Item>
    </div>
  ),
}

// ============================================================================
// MUTED - SMALL
// ============================================================================

export const MutedSmall: Story = {
  name: "Muted - Small",
  render: () => (
    <div className="space-y-2">
      <Item variant="muted" size="sm">
        <ItemContent>
          <ItemTitle>Title Only</ItemTitle>
        </ItemContent>
      </Item>

      <Item variant="muted" size="sm">
        <ItemContent>
          <ItemTitle>Title + Button</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item variant="muted" size="sm">
        <ItemContent>
          <ItemTitle>Title + Description</ItemTitle>
          <ItemDescription>This is a description that provides additional context.</ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="muted" size="sm">
        <ItemContent>
          <ItemTitle>Title + Description + Button</ItemTitle>
          <ItemDescription>This item includes a title, description, and action button.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item variant="muted" size="sm">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title</ItemTitle>
        </ItemContent>
      </Item>

      <Item variant="muted" size="sm">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title + Button</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item variant="muted" size="sm">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title + Description</ItemTitle>
          <ItemDescription>This item includes media, title, and description.</ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="muted" size="sm">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Media + Title + Description + Button</ItemTitle>
          <ItemDescription>Complete item with all components: media, title, description, and button.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Action</Button>
        </ItemActions>
      </Item>

      <Item variant="muted" size="sm">
        <ItemContent>
          <ItemTitle>Multiple Actions</ItemTitle>
          <ItemDescription>Item with multiple action buttons in the actions area.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Cancel</Button>
          <Button size="sm">Confirm</Button>
        </ItemActions>
      </Item>
    </div>
  ),
}

// ============================================================================
// AS CHILD (LINKS)
// ============================================================================

export const AsChild: Story = {
  name: "asChild",
  render: () => (
    <div className="space-y-2 rounded-lg border p-4">
      <Item asChild>
        <a href="#">
          <ItemContent>
            <ItemTitle>Title Only (Link)</ItemTitle>
          </ItemContent>
        </a>
      </Item>

      <Item asChild>
        <a href="#">
          <ItemContent>
            <ItemTitle>Title + Description (Link)</ItemTitle>
            <ItemDescription>Clickable item with title and description.</ItemDescription>
          </ItemContent>
        </a>
      </Item>

      <Item asChild>
        <a href="#">
          <ItemMedia>
            <Mail className="h-4 w-4" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Media + Title (Link)</ItemTitle>
          </ItemContent>
        </a>
      </Item>

      <Item asChild>
        <a href="#">
          <ItemMedia>
            <Mail className="h-4 w-4" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Media + Title + Description (Link)</ItemTitle>
            <ItemDescription>Complete link item with media, title, and description.</ItemDescription>
          </ItemContent>
        </a>
      </Item>

      <Item asChild>
        <a href="#">
          <ItemContent>
            <ItemTitle>With Actions (Link)</ItemTitle>
            <ItemDescription>Link item that also has action buttons.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm">Share</Button>
          </ItemActions>
        </a>
      </Item>
    </div>
  ),
}

// ============================================================================
// OUTLINE - AS CHILD
// ============================================================================

export const OutlineAsChild: Story = {
  name: "Outline - asChild",
  render: () => (
    <div className="space-y-2">
      <Item variant="outline" asChild>
        <a href="#">
          <ItemContent>
            <ItemTitle>Title Only (Link)</ItemTitle>
          </ItemContent>
        </a>
      </Item>

      <Item variant="outline" asChild>
        <a href="#">
          <ItemContent>
            <ItemTitle>Title + Description (Link)</ItemTitle>
            <ItemDescription>Clickable item with title and description.</ItemDescription>
          </ItemContent>
        </a>
      </Item>

      <Item variant="outline" asChild>
        <a href="#">
          <ItemMedia>
            <Mail className="h-4 w-4" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Media + Title (Link)</ItemTitle>
          </ItemContent>
        </a>
      </Item>

      <Item variant="outline" asChild>
        <a href="#">
          <ItemMedia>
            <Mail className="h-4 w-4" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Media + Title + Description (Link)</ItemTitle>
            <ItemDescription>Complete link item with media, title, and description.</ItemDescription>
          </ItemContent>
        </a>
      </Item>

      <Item variant="outline" asChild>
        <a href="#">
          <ItemContent>
            <ItemTitle>With Actions (Link)</ItemTitle>
            <ItemDescription>Link item that also has action buttons.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm">Share</Button>
          </ItemActions>
        </a>
      </Item>
    </div>
  ),
}

// ============================================================================
// MUTED - AS CHILD
// ============================================================================

export const MutedAsChild: Story = {
  name: "Muted - asChild",
  render: () => (
    <div className="space-y-2">
      <Item variant="muted" asChild>
        <a href="#">
          <ItemContent>
            <ItemTitle>Title Only (Link)</ItemTitle>
          </ItemContent>
        </a>
      </Item>

      <Item variant="muted" asChild>
        <a href="#">
          <ItemContent>
            <ItemTitle>Title + Description (Link)</ItemTitle>
            <ItemDescription>Clickable item with title and description.</ItemDescription>
          </ItemContent>
        </a>
      </Item>

      <Item variant="muted" asChild>
        <a href="#">
          <ItemMedia>
            <Mail className="h-4 w-4" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Media + Title (Link)</ItemTitle>
          </ItemContent>
        </a>
      </Item>

      <Item variant="muted" asChild>
        <a href="#">
          <ItemMedia>
            <Mail className="h-4 w-4" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Media + Title + Description (Link)</ItemTitle>
            <ItemDescription>Complete link item with media, title, and description.</ItemDescription>
          </ItemContent>
        </a>
      </Item>

      <Item variant="muted" asChild>
        <a href="#">
          <ItemContent>
            <ItemTitle>With Actions (Link)</ItemTitle>
            <ItemDescription>Link item that also has action buttons.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm">Share</Button>
          </ItemActions>
        </a>
      </Item>
    </div>
  ),
}

// ============================================================================
// ITEM GROUP
// ============================================================================

export const ItemGroupStory: Story = {
  name: "ItemGroup",
  render: () => (
    <div className="space-y-2 rounded-lg border p-4">
      <ItemGroup>
        <Item>
          <ItemContent>
            <ItemTitle>Item 1</ItemTitle>
            <ItemDescription>First item in the group.</ItemDescription>
          </ItemContent>
        </Item>
        <Item>
          <ItemContent>
            <ItemTitle>Item 2</ItemTitle>
            <ItemDescription>Second item in the group.</ItemDescription>
          </ItemContent>
        </Item>
        <Item>
          <ItemContent>
            <ItemTitle>Item 3</ItemTitle>
            <ItemDescription>Third item in the group.</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  ),
}

// ============================================================================
// OUTLINE - ITEM GROUP
// ============================================================================

export const OutlineItemGroup: Story = {
  name: "Outline - ItemGroup",
  render: () => (
    <ItemGroup>
      <Item variant="outline">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Item 1</ItemTitle>
          <ItemDescription>First item with icon.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Item 2</ItemTitle>
          <ItemDescription>Second item with icon.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Item 3</ItemTitle>
          <ItemDescription>Third item with icon.</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
}

// ============================================================================
// MUTED - ITEM GROUP
// ============================================================================

export const MutedItemGroup: Story = {
  name: "Muted - ItemGroup",
  render: () => (
    <ItemGroup>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Item 1</ItemTitle>
          <ItemDescription>First item in muted group.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Action</Button>
        </ItemActions>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Item 2</ItemTitle>
          <ItemDescription>Second item in muted group.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Action</Button>
        </ItemActions>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Item 3</ItemTitle>
          <ItemDescription>Third item in muted group.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Action</Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  ),
}

// ============================================================================
// ITEM SEPARATOR
// ============================================================================

export const ItemSeparatorStory: Story = {
  name: "ItemSeparator",
  render: () => (
    <ItemGroup className="rounded-lg border">
      <Item variant="outline">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Inbox</ItemTitle>
          <ItemDescription>View all incoming messages.</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item variant="outline">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Sent</ItemTitle>
          <ItemDescription>View all sent messages.</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item variant="outline">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Drafts</ItemTitle>
          <ItemDescription>View all draft messages.</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item variant="outline">
        <ItemMedia>
          <Mail className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Archive</ItemTitle>
          <ItemDescription>View archived messages.</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
}

// ============================================================================
// ITEM HEADER
// ============================================================================

export const ItemHeaderStory: Story = {
  name: "ItemHeader",
  render: () => (
    <div className="space-y-4 rounded-lg border p-4">
      <ItemGroup>
        <ItemHeader>
          <span className="text-sm font-medium">Design System</span>
        </ItemHeader>
        <Item>
          <ItemContent>
            <ItemTitle>Component Library</ItemTitle>
            <ItemDescription>A comprehensive collection of reusable UI components for building consistent interfaces.</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>

      <ItemGroup>
        <ItemHeader>
          <span className="text-sm font-medium">Marketing</span>
        </ItemHeader>
        <Item>
          <ItemContent>
            <ItemTitle>Campaign Analytics</ItemTitle>
            <ItemDescription>Track performance metrics and engagement rates across all marketing channels.</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>

      <ItemGroup>
        <ItemHeader>
          <span className="text-sm font-medium">Engineering</span>
        </ItemHeader>
        <Item>
          <ItemContent>
            <ItemTitle>API Documentation</ItemTitle>
            <ItemDescription>Complete reference guide for all available endpoints and authentication methods.</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  ),
}

// ============================================================================
// ITEM FOOTER
// ============================================================================

export const ItemFooterStory: Story = {
  name: "ItemFooter",
  render: () => (
    <div className="space-y-4 rounded-lg border p-4">
      <ItemGroup>
        <Item>
          <ItemContent>
            <ItemTitle>Quarterly Report Q4 2024</ItemTitle>
            <ItemDescription>Financial overview including revenue, expenses, and growth metrics for the fourth quarter.</ItemDescription>
          </ItemContent>
        </Item>
        <ItemFooter>
          <span className="text-sm text-muted-foreground">Last updated 2 hours ago</span>
        </ItemFooter>
      </ItemGroup>

      <ItemGroup>
        <Item>
          <ItemContent>
            <ItemTitle>User Research Findings</ItemTitle>
            <ItemDescription>Insights from interviews and surveys conducted with 50+ users across different demographics.</ItemDescription>
          </ItemContent>
        </Item>
        <ItemFooter>
          <span className="text-sm text-muted-foreground">Created by Sarah Chen</span>
        </ItemFooter>
      </ItemGroup>

      <ItemGroup>
        <Item>
          <ItemContent>
            <ItemTitle>Product Roadmap</ItemTitle>
            <ItemDescription>Planned features and improvements scheduled for the next three months.</ItemDescription>
          </ItemContent>
        </Item>
        <ItemFooter>
          <span className="text-sm text-muted-foreground">12 comments</span>
        </ItemFooter>
      </ItemGroup>
    </div>
  ),
}

// ============================================================================
// ITEM HEADER + ITEM FOOTER
// ============================================================================

export const ItemHeaderFooter: Story = {
  name: "ItemHeader + ItemFooter",
  render: () => (
    <div className="space-y-4 rounded-lg border p-4">
      <ItemGroup>
        <ItemHeader>
          <span className="text-sm font-medium">Team Project</span>
        </ItemHeader>
        <Item>
          <ItemContent>
            <ItemTitle>Website Redesign</ItemTitle>
            <ItemDescription>Complete overhaul of the company website with modern design principles and improved user...</ItemDescription>
          </ItemContent>
        </Item>
        <ItemFooter>
          <span className="text-sm text-muted-foreground">Updated 5 minutes ago</span>
        </ItemFooter>
      </ItemGroup>

      <ItemGroup>
        <ItemHeader>
          <span className="text-sm font-medium">Client Work</span>
        </ItemHeader>
        <Item>
          <ItemContent>
            <ItemTitle>Mobile App Development</ItemTitle>
            <ItemDescription>Building a cross-platform mobile application for iOS and Android with React Native.</ItemDescription>
          </ItemContent>
        </Item>
        <ItemFooter>
          <span className="text-sm text-muted-foreground">Status: In Progress</span>
        </ItemFooter>
      </ItemGroup>

      <ItemGroup>
        <ItemHeader>
          <span className="text-sm font-medium">Documentation</span>
        </ItemHeader>
        <Item>
          <ItemContent>
            <ItemTitle>API Integration Guide</ItemTitle>
            <ItemDescription>Step-by-step instructions for integrating third-party APIs with authentication and error handling.</ItemDescription>
          </ItemContent>
        </Item>
        <ItemFooter>
          <span className="text-sm text-muted-foreground">Category: Technical • 3 attachments</span>
        </ItemFooter>
      </ItemGroup>
    </div>
  ),
}

// ============================================================================
// ITEM MEDIA - IMAGE VARIANT
// ============================================================================

export const ItemMediaImage: Story = {
  name: "Default - ItemMedia image",
  render: () => (
    <div className="space-y-2 rounded-lg border p-4">
      <Item>
        <ItemMedia variant="image">
          <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Project Dashboard</ItemTitle>
          <ItemDescription>Overview of project settings and configuration.</ItemDescription>
        </ItemContent>
      </Item>

      <Item>
        <ItemMedia variant="image">
          <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Document</ItemTitle>
          <ItemDescription>A document with metadata displayed.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">View</Button>
        </ItemActions>
      </Item>

      <Item>
        <ItemMedia variant="image">
          <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>File Attachment</ItemTitle>
          <ItemDescription>Complete file with image, title, description, and action button.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Download</Button>
        </ItemActions>
      </Item>
    </div>
  ),
}

// ============================================================================
// OUTLINE - ITEM MEDIA IMAGE
// ============================================================================

export const OutlineItemMediaImage: Story = {
  name: "Outline - ItemMedia image",
  render: () => (
    <div className="space-y-2">
      <Item variant="outline">
        <ItemMedia variant="image">
          <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Project Dashboard</ItemTitle>
          <ItemDescription>Overview of project settings and configuration.</ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline">
        <ItemMedia variant="image">
          <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Document</ItemTitle>
          <ItemDescription>A document with metadata displayed.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">View</Button>
        </ItemActions>
      </Item>

      <Item variant="outline">
        <ItemMedia variant="image">
          <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>File Attachment</ItemTitle>
          <ItemDescription>Complete file with image, title, description, and action button.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Download</Button>
        </ItemActions>
      </Item>
    </div>
  ),
}

// ============================================================================
// MUTED - ITEM MEDIA IMAGE
// ============================================================================

export const MutedItemMediaImage: Story = {
  name: "Muted - ItemMedia image",
  render: () => (
    <div className="space-y-2">
      <Item variant="muted">
        <ItemMedia variant="image">
          <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Project Dashboard</ItemTitle>
          <ItemDescription>Overview of project settings and configuration.</ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="muted">
        <ItemMedia variant="image">
          <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Document</ItemTitle>
          <ItemDescription>A document with metadata displayed.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">View</Button>
        </ItemActions>
      </Item>

      <Item variant="muted">
        <ItemMedia variant="image">
          <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>File Attachment</ItemTitle>
          <ItemDescription>Complete file with image, title, description, and action button.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Download</Button>
        </ItemActions>
      </Item>
    </div>
  ),
}

// ============================================================================
// OUTLINE - ITEM MEDIA IMAGE - SMALL
// ============================================================================

export const OutlineItemMediaImageSmall: Story = {
  name: "Outline - ItemMedia image - Small",
  render: () => (
    <div className="space-y-2">
      <Item variant="outline" size="sm">
        <ItemMedia variant="image">
          <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Project Dashboard</ItemTitle>
        </ItemContent>
      </Item>

      <Item variant="outline" size="sm">
        <ItemMedia variant="image">
          <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Document</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">View</Button>
        </ItemActions>
      </Item>

      <Item variant="outline" size="sm">
        <ItemMedia variant="image">
          <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>File Attachment</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Download</Button>
        </ItemActions>
      </Item>
    </div>
  ),
}
