// Component Decision Tree
// Maps UI scenarios to the correct component choice

export const componentDecisions = {
  lists: {
    /** Clickable list rows (partners, offers, events) */
    clickableRow: "Item",
    /** Structured data with sorting/filtering */
    dataTable: "Table",
    /** Grid of cards (dashboard, gallery) */
    cardGrid: "Card in grid",
    /** Simple bulleted/numbered lists */
    simpleList: "ul with body-medium",
    /** Key-value pairs */
    descriptionList: "dl with label-medium dt and body-medium dd",
  },

  feedback: {
    /** Success after action (save, create, delete) */
    actionSuccess: "toast.success",
    /** Error after action */
    actionError: "toast.error",
    /** Warning banner in content area */
    inlineWarning: "Alert variant=warning",
    /** Error banner in content area */
    inlineError: "Alert variant=destructive",
    /** Form field validation error */
    fieldError: "body-small text-negative below input",
    /** Info/tip banner */
    inlineInfo: "Alert variant=default",
  },

  modals: {
    /** Forms, content entry, multi-step flows */
    formEntry: "Dialog",
    /** Destructive action confirmation (delete, discard) */
    confirmDestructive: "AlertDialog",
    /** Side panel for details, secondary content */
    sidePanel: "Sheet side=right",
    /** Mobile navigation drawer */
    mobileNav: "Sheet side=left",
    /** Mobile action sheets */
    mobileActions: "Sheet side=bottom h-auto max-h-[80vh]",
    /** Preview/detail view */
    preview: "Dialog or Sheet",
  },

  navigation: {
    /** Primary app navigation */
    primaryNav: "Sidebar",
    /** Page-level tabs */
    pageTabs: "Tabs",
    /** Location breadcrumbs */
    breadcrumbs: "Breadcrumb",
    /** Section header with back button */
    sectionHeader: "Breadcrumb + headline",
    /** Dropdown navigation menu */
    dropdownNav: "DropdownMenu",
  },

  selection: {
    /** Single choice from 2-5 options */
    singleFromFew: "radio group",
    /** Single choice from many options */
    singleFromMany: "Select",
    /** Multiple choices allowed */
    multiple: "Checkbox group",
    /** On/off toggle */
    toggle: "single Checkbox",
    /** Segmented control (view modes) */
    segmented: "Tabs variant=pill",
  },

  data: {
    /** Status indicator */
    status: "Badge",
    /** Progress indication */
    progress: "Progress",
    /** Avatar/profile image */
    avatar: "Avatar",
    /** Data visualization */
    chart: "Chart (recharts)",
    /** Loading placeholder */
    skeleton: "Skeleton",
  },

  forms: {
    /** Single-line text input */
    textInput: "Input",
    /** Multi-line text input */
    textArea: "Textarea",
    /** Email/password/number input */
    typedInput: "Input type=email|password|number",
    /** OTP/verification code */
    otpInput: "InputOTP",
    /** Form field label */
    label: "Label htmlFor={id}",
    /** Checkbox with label */
    checkbox: "Checkbox + Label",
  },

  layout: {
    /** Content card container */
    card: "Card",
    /** Expandable content */
    accordion: "Accordion",
    /** Collapsible section */
    collapsible: "Collapsible",
    /** Visual divider */
    separator: "Separator",
    /** Hover information */
    tooltip: "Tooltip",
  },
} as const;

export type ComponentDecisions = typeof componentDecisions;
