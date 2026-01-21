// Modal Patterns
// Dialog, AlertDialog, and Sheet patterns

export const modalPatterns = {
  sizes: {
    /** Small dialogs (simple confirm, single field) */
    small: "max-w-sm",
    /** Default dialogs (forms, content) */
    default: "max-w-lg",
    /** Large dialogs (complex forms, multi-step) */
    large: "max-w-2xl",
    /** Extra large (previews, rich content) */
    xl: "max-w-3xl",
    /** Full width (tables, complex layouts) */
    full: "max-w-4xl",
  },

  /** Header with icon (for important dialogs) */
  headerWithIcon: {
    /** Icon container base classes */
    iconContainer: "size-12 rounded-full flex items-center justify-center mb-4",
    /** Positive/success icon background */
    iconPositive: "bg-yellow-100 text-yellow-600",
    /** Info icon background */
    iconInfo: "bg-blue-100 text-blue-600",
    /** Destructive/warning icon background */
    iconDestructive: "bg-red-100 text-red-600",
    /** Success icon background */
    iconSuccess: "bg-green-100 text-green-600",
    /** Icon size inside container */
    iconSize: "h-6 w-6",
  },

  /** Footer patterns */
  footer: {
    /** Standard alignment */
    alignment: "flex justify-end gap-2",
    /** Cancel button comes first (left) */
    cancelFirst: true,
    /** Destructive actions */
    destructive: {
      cancelVariant: "outline" as const,
      actionVariant: "destructive" as const,
    },
    /** Standard actions */
    standard: {
      cancelVariant: "outline" as const,
      actionVariant: "default" as const,
    },
  },

  /** Mobile considerations */
  mobile: {
    /** Dialog content height constraint */
    dialogHeight: "max-h-[90vh] overflow-y-auto",
    /** Bottom sheet height */
    bottomSheetHeight: "h-auto max-h-[80vh]",
    /** Full screen dialog */
    fullScreen: "fixed inset-0 max-w-none rounded-none",
  },

  /** Sheet-specific patterns */
  sheet: {
    /** Right panel (default) - detail views */
    right: {
      side: "right" as const,
      width: "w-[400px] sm:max-w-[540px]",
    },
    /** Left panel - mobile navigation */
    left: {
      side: "left" as const,
      width: "w-[300px] sm:max-w-[400px]",
    },
    /** Bottom panel - mobile actions */
    bottom: {
      side: "bottom" as const,
      height: "h-auto max-h-[80vh]",
      rounded: "rounded-t-xl",
    },
  },

  /** AlertDialog specific (destructive confirmations) */
  alertDialog: {
    /** Header: title + description only. NO icons, NO decoration */
    headerRule: "Title and description text only",
    /** Footer button order */
    buttonOrder: ["AlertDialogCancel", "AlertDialogAction"],
    /** Action button for destructive */
    destructiveAction: {
      variant: "destructive" as const,
      text: "Delete", // or appropriate action verb
    },
    /** Standard messaging */
    messaging: {
      title: "Action verb + object (e.g., 'Delete this item?')",
      description: "Consequence explanation (e.g., 'This action cannot be undone.')",
    },
  },

  /** Common dialog content patterns */
  contentPatterns: {
    /** Form dialog */
    form: {
      spacing: "space-y-4",
      footerSpacing: "pt-4",
    },
    /** Confirmation dialog */
    confirmation: {
      textAlign: "text-center",
      spacing: "space-y-2",
    },
    /** Detail/preview dialog */
    detail: {
      maxHeight: "max-h-[70vh]",
      overflow: "overflow-y-auto",
    },
  },

  /** Animation timing */
  animation: {
    /** Dialog fade/scale */
    dialog: "duration-200",
    /** Sheet slide */
    sheet: "duration-300",
    /** Overlay fade */
    overlay: "duration-200",
  },
} as const;

export type ModalPatterns = typeof modalPatterns;
