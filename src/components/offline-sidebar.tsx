"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  LogOut,
  Settings,
  HelpCircle,
  User2,
  LayoutDashboard,
  Tag,
  Calendar,
  FileText,
} from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "./sidebar"

// ============================================================================
// TYPES
// ============================================================================

/** Sub-item for nested navigation */
export interface NavSubItem {
  title: string
  url?: string
  isActive?: boolean
  /** Optional icon for the sub-item */
  icon?: React.ElementType
  /** Click handler (alternative to url) for action-style sub-items */
  onClick?: () => void
  /** External href — opens in new tab */
  href?: string
}

/** Navigation item - can have sub-items for collapsible menus */
export interface NavItem {
  title: string
  url: string
  icon: React.ElementType
  isActive?: boolean
  /** Sub-items for collapsible nested menu */
  items?: NavSubItem[]
  /** Badge to show (e.g., count or "New") */
  badge?: string | number
}

/** Group of navigation items with a label */
export interface NavGroup {
  label: string
  items: NavItem[]
}

/** User info for the footer */
export interface SidebarUser {
  name: string
  email: string
  avatar?: string
}

/** Workspace/company info for the header */
export interface SidebarWorkspace {
  name: string
  subtitle?: string
  logo?: string
}

/** Props for the OfflineSidebar component */
export interface OfflineSidebarProps {
  /** Navigation groups to display */
  navGroups?: NavGroup[]
  /** Flat navigation items (alternative to groups) */
  navItems?: NavItem[]
  /** User info for the footer */
  user?: SidebarUser
  /** Workspace info for the header */
  workspace?: SidebarWorkspace
  /** Whether the sidebar starts collapsed */
  defaultCollapsed?: boolean
  /** Callback when user clicks logout */
  onLogout?: () => void
  /** Callback when user clicks settings */
  onSettings?: () => void
  /** Callback when user clicks help */
  onHelp?: () => void
  /** Available workspaces for switcher */
  workspaces?: SidebarWorkspace[]
  /** Callback when workspace changes */
  onWorkspaceChange?: (workspace: SidebarWorkspace) => void
  /** Children for the main content area */
  children?: React.ReactNode
}

// ============================================================================
// DEFAULT DATA
// ============================================================================

const defaultNavGroups: NavGroup[] = [
  {
    label: "Main",
    items: [
      { title: "Dashboard", url: "/partner/dashboard", icon: LayoutDashboard },
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
      { title: "Events", url: "/partner/events", icon: Calendar },
      { title: "Contracts", url: "/partner/contracts", icon: FileText },
    ],
  },
]

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

/** Offline App Icon - rounded square icon like shadcn/App Store style */
function OfflineAppIcon() {
  return (
    <div className="flex aspect-square size-8 items-center justify-center rounded-lg overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://premium-production.s3.us-east-1.amazonaws.com/public-assets/icon-styles/icon-white-on-black.svg"
        alt="Offline"
        width={32}
        height={32}
        className="size-8"
      />
    </div>
  )
}

/** Workspace/Company Header with optional dropdown */
function WorkspaceHeader({
  workspace,
  workspaces,
  onWorkspaceChange,
}: {
  workspace?: SidebarWorkspace
  workspaces?: SidebarWorkspace[]
  onWorkspaceChange?: (workspace: SidebarWorkspace) => void
}) {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  const defaultWorkspace: SidebarWorkspace = {
    name: "Partner App",
    subtitle: "Offline",
  }

  const currentWorkspace = workspace || defaultWorkspace
  const hasMultipleWorkspaces = workspaces && workspaces.length > 1

  const content = (
    <div className="flex items-center gap-2">
      <OfflineAppIcon />
      {!isCollapsed && (
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">{currentWorkspace.name}</span>
          {currentWorkspace.subtitle && (
            <span className="truncate text-xs text-sidebar-foreground/70">
              {currentWorkspace.subtitle}
            </span>
          )}
        </div>
      )}
      {!isCollapsed && hasMultipleWorkspaces && (
        <ChevronsUpDown className="ml-auto size-4" />
      )}
    </div>
  )

  if (!hasMultipleWorkspaces) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" className="cursor-default hover:bg-transparent">
            {content}
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    )
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              {content}
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isCollapsed ? "right" : "bottom"}
            sideOffset={4}
          >
            {workspaces?.map((ws) => (
              <DropdownMenuItem
                key={ws.name}
                onClick={() => onWorkspaceChange?.(ws)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-sm border">
                  <span className="text-xs font-medium">{ws.name[0]}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">{ws.name}</span>
                  {ws.subtitle && (
                    <span className="text-xs text-muted-foreground">{ws.subtitle}</span>
                  )}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

/** Collapsible Nav Item with sub-items */
function CollapsibleNavItem({ item }: { item: NavItem }) {
  const pathname = usePathname()
  const isActive = item.isActive ?? pathname === item.url
  const hasActiveChild = item.items?.some(
    (subItem) => subItem.isActive ?? pathname === subItem.url
  )

  return (
    <Collapsible
      asChild
      defaultOpen={isActive || hasActiveChild}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          {/* Only show parent as active if IT is active, not if a child is active */}
          <SidebarMenuButton tooltip={item.title} isActive={isActive && !hasActiveChild}>
            <item.icon className="size-4" />
            <span className="truncate">{item.title}</span>
            <ChevronDown className="ml-auto size-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.items?.map((subItem) => {
              const subIsActive = subItem.isActive ?? (subItem.url ? pathname === subItem.url : false)

              // Action sub-item (onClick or external href, no internal route)
              if (subItem.onClick || (subItem.href && !subItem.url)) {
                return (
                  <SidebarMenuSubItem key={subItem.title}>
                    <SidebarMenuSubButton
                      isActive={false}
                      onClick={subItem.onClick || (() => subItem.href && window.open(subItem.href, "_blank"))}
                    >
                      {subItem.icon && <subItem.icon className="size-3.5" />}
                      <span>{subItem.title}</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                )
              }

              // Standard link sub-item
              return (
                <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton asChild isActive={subIsActive}>
                    <Link href={subItem.url || "#"}>
                      {subItem.icon && <subItem.icon className="size-3.5" />}
                      <span>{subItem.title}</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              )
            })}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

/** Simple Nav Item (no sub-items) */
function SimpleNavItem({ item }: { item: NavItem }) {
  const pathname = usePathname()
  const isActive = item.isActive ?? pathname === item.url

  // Determine if badge is a single character (for circular styling)
  const badgeStr = item.badge?.toString() ?? ""
  const isSingleChar = badgeStr.length === 1

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
        <Link href={item.url}>
          <item.icon className="size-4" />
          <span>{item.title}</span>
          {item.badge && (
            <span
              className={`ml-auto text-xs font-medium bg-sidebar-primary text-sidebar-primary-foreground ${
                isSingleChar
                  ? "size-5 flex items-center justify-center rounded-full"
                  : "px-2 py-0.5 rounded-full"
              }`}
            >
              {item.badge}
            </span>
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

/** Nav Group with label and items */
function NavGroupComponent({ group }: { group: NavGroup }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {group.items.map((item) =>
            item.items && item.items.length > 0 ? (
              <CollapsibleNavItem key={item.title} item={item} />
            ) : (
              <SimpleNavItem key={item.title} item={item} />
            )
          )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

/** User Footer with dropdown */
function UserFooter({
  user,
  onLogout,
  onSettings,
  onHelp,
}: {
  user?: SidebarUser
  onLogout?: () => void
  onSettings?: () => void
  onHelp?: () => void
}) {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  if (!user) return null

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-accent text-sidebar-accent-foreground">
                {user.avatar ? (
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={32}
                    height={32}
                    className="size-full rounded-lg object-cover"
                  />
                ) : (
                  <User2 className="size-4" />
                )}
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user.name}</span>
                <span className="truncate text-xs text-sidebar-foreground/70">
                  {user.email}
                </span>
              </div>
              <ChevronUp className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isCollapsed ? "right" : "top"}
            align="end"
            sideOffset={4}
          >
            {onHelp && (
              <DropdownMenuItem onClick={onHelp}>
                <HelpCircle className="mr-2 size-4" />
                Help & Support
              </DropdownMenuItem>
            )}
            {onSettings && (
              <DropdownMenuItem onClick={onSettings}>
                <Settings className="mr-2 size-4" />
                Settings
              </DropdownMenuItem>
            )}
            {(onHelp || onSettings) && onLogout && <DropdownMenuSeparator />}
            {onLogout && (
              <DropdownMenuItem onClick={onLogout}>
                <LogOut className="mr-2 size-4" />
                Log out
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

/** Top bar with sidebar trigger */
function OfflineTopbar({ children }: { children?: React.ReactNode }) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 md:px-6">
      <SidebarTrigger className="-ml-1" />
      <div className="flex-1">{children}</div>
    </header>
  )
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

/**
 * OfflineSidebar - A standardized sidebar layout for Offline applications
 *
 * **Note: This component requires Next.js** as it uses next/image, next/link,
 * and next/navigation internally.
 *
 * Features:
 * - Collapsible to icon-only mode (Cmd+B)
 * - Mobile responsive (uses sheet on mobile)
 * - Nested/collapsible menu items
 * - Grouped navigation with labels
 * - Workspace switcher in header
 * - User dropdown in footer
 * - Offline brand styling (black bg, yellow accents)
 *
 * @example
 * ```tsx
 * <OfflineSidebar
 *   workspace={{ name: "Offline", subtitle: "Partners" }}
 *   user={{ name: "John Doe", email: "john@example.com" }}
 *   navGroups={[
 *     {
 *       label: "Main",
 *       items: [
 *         { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
 *         {
 *           title: "Offers",
 *           url: "/offers",
 *           icon: Tag,
 *           items: [
 *             { title: "Active", url: "/offers/active" },
 *             { title: "Draft", url: "/offers/draft" },
 *           ]
 *         },
 *       ]
 *     }
 *   ]}
 *   onLogout={() => signOut()}
 * >
 *   <YourPageContent />
 * </OfflineSidebar>
 * ```
 */
export function OfflineSidebar({
  navGroups,
  navItems,
  user,
  workspace,
  workspaces,
  defaultCollapsed = false,
  onLogout,
  onSettings,
  onHelp,
  onWorkspaceChange,
  children,
}: OfflineSidebarProps) {
  // Convert flat navItems to a single group if provided
  const groups = navGroups || (navItems ? [{ label: "Navigation", items: navItems }] : defaultNavGroups)

  return (
    <SidebarProvider defaultOpen={!defaultCollapsed}>
      <Sidebar collapsible="icon" className="border-r-0">
        {/* Header with App Icon/Workspace */}
        <SidebarHeader>
          <WorkspaceHeader
            workspace={workspace}
            workspaces={workspaces}
            onWorkspaceChange={onWorkspaceChange}
          />
        </SidebarHeader>

        {/* Navigation Content */}
        <SidebarContent>
          {groups.map((group) => (
            <NavGroupComponent key={group.label} group={group} />
          ))}
        </SidebarContent>

        {/* Footer with User */}
        <SidebarFooter>
          <UserFooter
            user={user}
            onLogout={onLogout}
            onSettings={onSettings}
            onHelp={onHelp}
          />
        </SidebarFooter>

        {/* Rail for expanding/collapsing */}
        <SidebarRail />
      </Sidebar>

      <SidebarInset>
        <OfflineTopbar />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

// Export sub-components for customization
export {
  OfflineAppIcon,
  WorkspaceHeader,
  CollapsibleNavItem,
  SimpleNavItem,
  NavGroupComponent,
  UserFooter,
  OfflineTopbar,
}
