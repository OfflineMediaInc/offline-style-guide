// State Patterns
// Loading, empty, error, and disabled state patterns

export const statePatterns = {
  loading: {
    /** Full page loading skeleton */
    page: "Skeleton matching page structure",
    /** Card loading skeleton */
    card: "Skeleton matching card structure",
    /** Button loading state */
    button: {
      icon: "Loader2",
      text: "Loading...",
      classes: "disabled opacity-50",
      iconClasses: "animate-spin mr-2 h-4 w-4",
    },
    /** Inline loading spinner */
    inline: {
      icon: "Loader2",
      classes: "animate-spin h-4 w-4",
    },
    /** Table row skeleton */
    tableRow: "Skeleton h-12 w-full",
    /** List item skeleton */
    listItem: "Skeleton h-16 w-full",
    /** Avatar skeleton */
    avatar: "Skeleton h-10 w-10 rounded-full",
  },

  empty: {
    /** Empty state container structure */
    structure: "flex flex-col items-center justify-center py-12 text-center",
    /** Empty state icon */
    icon: {
      classes: "h-12 w-12 text-muted-foreground mb-4",
      note: "Use relevant lucide icon for context",
    },
    /** Empty state title */
    title: {
      classes: "headline-small mb-2",
    },
    /** Empty state description */
    description: {
      classes: "body-medium text-muted-foreground max-w-sm mx-auto mb-4",
    },
    /** Empty state action button */
    action: {
      variant: "outline" as const,
      note: "Optional - only if user can take action to fill empty state",
    },
  },

  error: {
    /** Full page error */
    page: {
      component: "Alert",
      variant: "destructive",
      includeRetry: true,
      classes: "max-w-lg mx-auto my-8",
    },
    /** Inline error message */
    inline: {
      classes: "body-small text-destructive",
    },
    /** Form field error */
    field: {
      inputClasses: "border-destructive focus:ring-destructive",
      messageClasses: "body-small text-destructive mt-1",
    },
    /** Error banner */
    banner: {
      component: "Alert",
      variant: "destructive",
      classes: "mb-4",
    },
  },

  disabled: {
    /** Disabled opacity */
    opacity: "opacity-50",
    /** Disabled cursor */
    cursor: "cursor-not-allowed",
    /** Prevent interaction */
    interaction: "pointer-events-none",
    /** Combined disabled classes */
    combined: "opacity-50 cursor-not-allowed pointer-events-none",
  },

  success: {
    /** Success toast */
    toast: {
      method: "toast.success",
      duration: 3000,
    },
    /** Inline success message */
    inline: {
      classes: "body-small text-[var(--semantic-success500)]",
    },
    /** Success banner */
    banner: {
      component: "Alert",
      variant: "default",
      icon: "CheckCircle",
      classes: "border-[var(--semantic-success500)] bg-green-50",
    },
  },

  warning: {
    /** Warning banner */
    banner: {
      component: "Alert",
      variant: "warning",
      icon: "AlertTriangle",
    },
    /** Inline warning */
    inline: {
      classes: "body-small text-[var(--colors-yellow-600)]",
    },
  },
} as const;

export type StatePatterns = typeof statePatterns;
