// Component Registry
// Metadata for all approved components

import type { ComponentMeta } from "../types";

export const componentRegistry: Record<string, ComponentMeta> = {
  // Layout Components
  Card: {
    name: "Card",
    status: "approved",
    description: "Container for grouped content with optional header/footer",
    imports: ["Card", "CardHeader", "CardTitle", "CardDescription", "CardContent", "CardFooter"],
    composition: ["CardHeader", "CardTitle", "CardDescription", "CardContent", "CardFooter"],
  },

  Item: {
    name: "Item",
    status: "approved",
    description: "Flexible list item with media, content, and actions slots",
    imports: ["Item", "ItemMedia", "ItemContent", "ItemTitle", "ItemDescription", "ItemActions"],
    variants: { variant: ["default", "outline", "muted"] },
    composition: ["ItemMedia", "ItemContent", "ItemTitle", "ItemDescription", "ItemActions"],
  },

  Separator: {
    name: "Separator",
    status: "approved",
    description: "Visual divider between sections",
    imports: ["Separator"],
  },

  // Navigation Components
  Sidebar: {
    name: "Sidebar",
    status: "approved",
    description: "Primary navigation sidebar with collapsible state",
    imports: [
      "Sidebar", "SidebarContent", "SidebarGroup", "SidebarGroupLabel",
      "SidebarGroupContent", "SidebarMenu", "SidebarMenuItem", "SidebarMenuButton",
      "SidebarHeader", "SidebarFooter", "SidebarTrigger", "SidebarProvider",
    ],
    composition: ["SidebarHeader", "SidebarContent", "SidebarGroup", "SidebarFooter"],
  },

  OfflineSidebar: {
    name: "OfflineSidebar",
    status: "approved",
    description: "Pre-configured sidebar with Offline branding (requires Next.js)",
    imports: ["OfflineSidebar", "OfflineSidebarNav", "OfflineSidebarFooter"],
  },

  Breadcrumb: {
    name: "Breadcrumb",
    status: "approved",
    description: "Location breadcrumb trail",
    imports: [
      "Breadcrumb", "BreadcrumbList", "BreadcrumbItem", "BreadcrumbLink",
      "BreadcrumbPage", "BreadcrumbSeparator",
    ],
    composition: ["BreadcrumbList", "BreadcrumbItem", "BreadcrumbLink", "BreadcrumbPage"],
  },

  Tabs: {
    name: "Tabs",
    status: "approved",
    description: "Tab navigation for switching views",
    imports: ["Tabs", "TabsList", "TabsTrigger", "TabsContent"],
    variants: { style: ["default (pill)", "line (underline)"] },
    composition: ["TabsList", "TabsTrigger", "TabsContent"],
  },

  DropdownMenu: {
    name: "DropdownMenu",
    status: "approved",
    description: "Dropdown menu for actions",
    imports: [
      "DropdownMenu", "DropdownMenuTrigger", "DropdownMenuContent",
      "DropdownMenuItem", "DropdownMenuSeparator", "DropdownMenuLabel",
    ],
    composition: ["DropdownMenuTrigger", "DropdownMenuContent", "DropdownMenuItem"],
  },

  // Action Components
  Button: {
    name: "Button",
    status: "approved",
    description: "Primary action trigger. Black (default) is primary color per brand",
    imports: ["Button", "buttonVariants"],
    variants: {
      variant: ["default", "secondary", "outline", "ghost", "destructive", "link"],
      size: ["default", "sm", "lg", "icon"],
    },
  },

  Badge: {
    name: "Badge",
    status: "approved",
    description: "Status indicators, tags, labels",
    imports: ["Badge", "badgeVariants"],
    variants: {
      variant: ["default", "secondary", "destructive", "success", "warning", "outline"],
    },
  },

  // Form Components
  Input: {
    name: "Input",
    status: "approved",
    description: "Single-line text input",
    imports: ["Input"],
  },

  Label: {
    name: "Label",
    status: "approved",
    description: "Form field label - always use with htmlFor",
    imports: ["Label"],
  },

  Checkbox: {
    name: "Checkbox",
    status: "approved",
    description: "Checkbox for boolean/multi-select",
    imports: ["Checkbox"],
  },

  InputOTP: {
    name: "InputOTP",
    status: "approved",
    description: "OTP/verification code input",
    imports: ["InputOTP", "InputOTPGroup", "InputOTPSlot", "InputOTPSeparator"],
    composition: ["InputOTPGroup", "InputOTPSlot"],
  },

  Progress: {
    name: "Progress",
    status: "approved",
    description: "Progress bar indicator",
    imports: ["Progress"],
  },

  // Overlay Components
  Dialog: {
    name: "Dialog",
    status: "approved",
    description: "Modal for forms and content. User can dismiss freely",
    imports: [
      "Dialog", "DialogTrigger", "DialogContent", "DialogHeader",
      "DialogFooter", "DialogTitle", "DialogDescription", "DialogClose",
    ],
    composition: ["DialogTrigger", "DialogContent", "DialogHeader", "DialogFooter"],
  },

  AlertDialog: {
    name: "AlertDialog",
    status: "approved",
    description: "Interruption requiring decision. Cannot dismiss by clicking outside",
    imports: [
      "AlertDialog", "AlertDialogTrigger", "AlertDialogContent", "AlertDialogHeader",
      "AlertDialogFooter", "AlertDialogTitle", "AlertDialogDescription",
      "AlertDialogAction", "AlertDialogCancel",
    ],
    composition: ["AlertDialogTrigger", "AlertDialogContent", "AlertDialogAction", "AlertDialogCancel"],
  },

  Sheet: {
    name: "Sheet",
    status: "approved",
    description: "Slide-in panel for secondary content",
    imports: [
      "Sheet", "SheetTrigger", "SheetContent", "SheetHeader",
      "SheetFooter", "SheetTitle", "SheetDescription", "SheetClose",
    ],
    variants: { side: ["right", "left", "top", "bottom"] },
    composition: ["SheetTrigger", "SheetContent", "SheetHeader", "SheetFooter"],
  },

  Tooltip: {
    name: "Tooltip",
    status: "approved",
    description: "Hover/focus information overlay",
    imports: ["Tooltip", "TooltipTrigger", "TooltipContent", "TooltipProvider"],
    composition: ["TooltipTrigger", "TooltipContent"],
  },

  // Data Display Components
  Avatar: {
    name: "Avatar",
    status: "approved",
    description: "User/entity avatar with fallback",
    imports: ["Avatar", "AvatarImage", "AvatarFallback"],
    composition: ["AvatarImage", "AvatarFallback"],
    sizes: ["default", "sm", "lg"],
  },

  Skeleton: {
    name: "Skeleton",
    status: "approved",
    description: "Loading placeholder matching content shape",
    imports: ["Skeleton"],
  },

  Chart: {
    name: "Chart",
    status: "approved",
    description: "Data visualization wrapper for Recharts",
    imports: ["ChartContainer", "ChartTooltip", "ChartTooltipContent", "ChartLegend", "ChartLegendContent"],
  },

  // Interactive Components
  Accordion: {
    name: "Accordion",
    status: "approved",
    description: "Expandable content sections",
    imports: ["Accordion", "AccordionItem", "AccordionTrigger", "AccordionContent"],
    composition: ["AccordionItem", "AccordionTrigger", "AccordionContent"],
  },

  Collapsible: {
    name: "Collapsible",
    status: "approved",
    description: "Single collapsible section",
    imports: ["Collapsible", "CollapsibleTrigger", "CollapsibleContent"],
    composition: ["CollapsibleTrigger", "CollapsibleContent"],
  },

  // Draft Components (not recommended for production)
  Select: {
    name: "Select",
    status: "draft",
    description: "Dropdown select - still being refined",
    imports: [
      "Select", "SelectTrigger", "SelectContent", "SelectItem",
      "SelectValue", "SelectGroup", "SelectLabel",
    ],
  },

  Sonner: {
    name: "Sonner",
    status: "draft",
    description: "Toast notifications - integration in progress",
    imports: ["Toaster", "toast"],
  },

  Table: {
    name: "Table",
    status: "draft",
    description: "Data table - needs more patterns",
    imports: [
      "Table", "TableHeader", "TableBody", "TableFooter",
      "TableHead", "TableRow", "TableCell", "TableCaption",
    ],
  },

  Textarea: {
    name: "Textarea",
    status: "draft",
    description: "Multi-line text input - under review",
    imports: ["Textarea"],
  },
};

// List of approved component names
export const approvedComponents = Object.entries(componentRegistry)
  .filter(([_, meta]) => meta.status === "approved")
  .map(([name]) => name);

// List of draft component names
export const draftComponents = Object.entries(componentRegistry)
  .filter(([_, meta]) => meta.status === "draft")
  .map(([name]) => name);

export type ComponentRegistry = typeof componentRegistry;
