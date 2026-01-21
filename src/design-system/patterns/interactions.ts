// Interaction Patterns
// Hover, focus, active, and transition states

export const interactionPatterns = {
  clickableCard: {
    /** Default state */
    default: "shadow-card transition-shadow duration-200",
    /** Hover state */
    hover: "hover:shadow-elevated",
    /** Cursor */
    cursor: "cursor-pointer",
    /** Combined classes */
    combined: "shadow-card hover:shadow-elevated cursor-pointer transition-shadow duration-200",
    /** With border change */
    withBorder: "border border-gray-200 hover:border-gray-300 cursor-pointer transition-colors",
  },

  link: {
    /** Default link styling */
    default: "text-[var(--colors-blue-400)] underline-offset-4",
    /** Hover state */
    hover: "hover:underline",
    /** Combined classes */
    combined: "text-[var(--colors-blue-400)] underline-offset-4 hover:underline",
    /** Navigation link (no underline by default) */
    nav: "text-[var(--colors-blue-400)] hover:underline underline-offset-4",
  },

  iconButton: {
    /** Default state */
    default: "p-2 rounded-md transition-colors",
    /** Hover state */
    hover: "hover:bg-muted",
    /** Combined classes */
    combined: "p-2 rounded-md hover:bg-muted transition-colors",
    /** Destructive icon button */
    destructive: "p-2 rounded-md hover:bg-destructive/10 hover:text-destructive transition-colors",
  },

  tableRow: {
    /** Default state */
    default: "transition-colors",
    /** Hover state */
    hover: "hover:bg-muted/50",
    /** Combined classes */
    combined: "hover:bg-muted/50 transition-colors",
    /** Clickable row */
    clickable: "hover:bg-muted/50 cursor-pointer transition-colors",
  },

  listItem: {
    /** Default Item hover */
    default: "transition-colors",
    /** Hover state */
    hover: "hover:bg-muted/50",
    /** Active/selected state */
    active: "bg-muted",
    /** Combined for clickable items */
    combined: "hover:bg-muted/50 cursor-pointer transition-colors",
  },

  button: {
    /** Focus ring */
    focus: "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    /** Active/pressed state */
    active: "active:scale-[0.98]",
    /** Transition */
    transition: "transition-colors",
  },

  input: {
    /** Default state */
    default: "border border-gray-200 transition-colors",
    /** Hover state */
    hover: "hover:border-gray-300",
    /** Focus state */
    focus: "focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10",
    /** Error state */
    error: "border-destructive focus:border-destructive focus:ring-destructive/10",
    /** Combined */
    combined: "border border-gray-200 hover:border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 transition-colors",
  },

  menuItem: {
    /** Default state */
    default: "transition-colors rounded-sm",
    /** Hover/focus state */
    hover: "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
    /** Combined classes */
    combined: "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-sm transition-colors",
  },

  sidebarItem: {
    /** Default state */
    default: "transition-colors rounded-md",
    /** Hover state */
    hover: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
    /** Active/current page */
    active: "bg-sidebar-accent text-sidebar-accent-foreground",
    /** Combined */
    combined: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md transition-colors",
  },

  transitions: {
    /** Fast transition (colors, opacity) */
    fast: "transition-colors duration-150",
    /** Medium transition (transform, shadow) */
    medium: "transition-all duration-200",
    /** Slow transition (layout) */
    slow: "transition-all duration-300",
    /** Ease functions */
    ease: {
      default: "ease-in-out",
      in: "ease-in",
      out: "ease-out",
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
  },
} as const;

export type InteractionPatterns = typeof interactionPatterns;
