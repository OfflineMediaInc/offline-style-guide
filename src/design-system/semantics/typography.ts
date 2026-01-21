// Typography Decision Tree
// Maps UI contexts to typography classes for consistent usage

export const typographyDecisions = {
  // Page structure
  /** Hero headlines, major section titles - Cabinet Grotesk, use sparingly */
  pageTitle: "display-small",
  /** Section headings within pages */
  sectionHeading: "headline-medium",
  /** Card titles, panel headers */
  cardTitle: "headline-small",

  // Stats & metrics
  /** Large stat values in dashboards */
  statValueLarge: "display-medium",
  /** Smaller stat values */
  statValueSmall: "display-small",
  /** Labels under stat values */
  statLabel: "body-small",

  // Body text
  /** Default body text */
  bodyDefault: "body-medium",
  /** Secondary/supporting body text */
  bodySecondary: "body-small",

  // Forms
  /** Form field labels */
  formLabel: "label-medium",
  /** Helper text below inputs */
  formHelper: "body-small text-muted",
  /** Error messages below inputs */
  formError: "body-small text-negative",

  // UI elements
  /** Button text */
  buttonText: "label-medium",
  /** Sidebar/nav items */
  navItem: "body-medium",
  /** Badge text */
  badgeText: "label-small",
  /** Table header cells */
  tableHeader: "label-medium",
  /** Table body cells */
  tableCell: "body-medium",
  /** Timestamps, dates */
  timestamp: "body-small text-muted",

  // Empty states
  /** Empty state headline */
  emptyStateTitle: "headline-small",
  /** Empty state description */
  emptyStateDescription: "body-medium text-muted",

  // Dialog/Modal
  /** Dialog title */
  dialogTitle: "headline-medium",
  /** Dialog description */
  dialogDescription: "body-medium text-muted",

  // Sidebar
  /** Sidebar section labels */
  sidebarLabel: "nav-label",
  /** Sidebar navigation items */
  sidebarItem: "body-medium",

  // Breadcrumb
  /** Breadcrumb items */
  breadcrumbItem: "body-small",
  /** Current breadcrumb (muted) */
  breadcrumbCurrent: "body-small text-muted",
} as const;

// Font family decisions
export const fontFamilyDecisions = {
  /** Cabinet Grotesk - hero headlines, major titles. Use sparingly for impact */
  display: "var(--font-cabinet-grotesk), var(--font-satoshi), sans-serif",
  /** Satoshi - everything else: headlines, body, labels. The workhorse font */
  body: "var(--font-satoshi), sans-serif",
  /** DM Mono - stats, numbers, code. When precision matters */
  mono: "var(--font-dm-mono), 'DM Mono', monospace",
} as const;

// Typography scale reference (for documentation)
export const typographyScale = {
  "display-large": { size: "36px", lineHeight: "100%", weight: 800, font: "Cabinet Grotesk" },
  "display-medium": { size: "32px", lineHeight: "100%", weight: 800, font: "Cabinet Grotesk" },
  "display-small": { size: "29px", lineHeight: "100%", weight: 800, font: "Cabinet Grotesk" },
  "headline-large": { size: "26px", lineHeight: "32px", weight: 700, font: "Satoshi" },
  "headline-medium": { size: "23px", lineHeight: "28px", weight: 700, font: "Satoshi" },
  "headline-small": { size: "20px", lineHeight: "24px", weight: 700, font: "Satoshi" },
  "title-large": { size: "18px", lineHeight: "22px", weight: 700, font: "Satoshi" },
  "title-medium": { size: "16px", lineHeight: "20px", weight: 700, font: "Satoshi" },
  "title-small": { size: "14px", lineHeight: "18px", weight: 700, font: "Satoshi" },
  "body-large": { size: "16px", lineHeight: "24px", weight: 500, font: "Satoshi" },
  "body-medium": { size: "14px", lineHeight: "20px", weight: 500, font: "Satoshi" },
  "body-small": { size: "12px", lineHeight: "16px", weight: 500, font: "Satoshi" },
  "body-x-small": { size: "10px", lineHeight: "14px", weight: 500, font: "Satoshi" },
  "label-large": { size: "14px", lineHeight: "18px", weight: 700, font: "Satoshi" },
  "label-medium": { size: "12px", lineHeight: "16px", weight: 700, font: "Satoshi" },
  "label-small": { size: "10px", lineHeight: "14px", weight: 700, font: "Satoshi" },
  "stat-mono": { weight: 500, letterSpacing: "0.04em", font: "DM Mono" },
} as const;

export type TypographyDecisions = typeof typographyDecisions;
export type FontFamilyDecisions = typeof fontFamilyDecisions;
export type TypographyScale = typeof typographyScale;
