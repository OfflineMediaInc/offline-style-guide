// Layout Patterns
// Spacing, grids, and structural patterns

export const layoutPatterns = {
  page: {
    /** Content area max width */
    maxWidth: "max-w-4xl",
    /** Wider content area (dashboards, tables) */
    maxWidthWide: "max-w-6xl",
    /** Page padding */
    padding: "px-4 py-6",
    /** Gap between major sections */
    sectionGap: "space-y-8",
    /** Main content wrapper */
    wrapper: "mx-auto px-4 py-6",
  },

  cards: {
    /** Standard card padding */
    padding: "p-6",
    /** Compact card padding */
    paddingCompact: "p-4",
    /** Gap between cards in grid */
    gap: "gap-4",
    /** 2-column responsive grid */
    grid2col: "grid grid-cols-1 md:grid-cols-2 gap-4",
    /** 3-column responsive grid */
    grid3col: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
    /** 4-column responsive grid */
    grid4col: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
    /** Stack of cards */
    stack: "flex flex-col gap-4",
  },

  forms: {
    /** Gap between form fields */
    fieldGap: "space-y-4",
    /** Gap between label and input */
    labelGap: "mb-2",
    /** Gap between input and helper text */
    helperGap: "mt-1",
    /** Gap between buttons in button group */
    buttonGap: "gap-2",
    /** Gap between form sections */
    sectionGap: "space-y-6",
    /** Form container */
    container: "space-y-4",
    /** Form actions row */
    actions: "flex justify-end gap-2 pt-4",
    /** Full-width form field */
    fieldFull: "w-full",
    /** Inline field pair */
    fieldPair: "grid grid-cols-2 gap-4",
  },

  inline: {
    /** Icon + text alignment */
    iconText: "inline-flex items-center gap-2",
    /** Badge group spacing */
    badges: "flex flex-wrap gap-2",
    /** Button group spacing */
    buttons: "flex items-center gap-2",
    /** Tag list */
    tags: "flex flex-wrap gap-1",
  },

  header: {
    /** Page header with title and actions */
    pageHeader: "flex items-center justify-between mb-6",
    /** Section header */
    sectionHeader: "flex items-center justify-between mb-4",
    /** Card header */
    cardHeader: "flex items-center justify-between",
  },

  sidebar: {
    /** Sidebar width */
    width: "w-64",
    /** Collapsed sidebar width */
    widthCollapsed: "w-16",
    /** Content area with sidebar */
    contentWithSidebar: "ml-64",
    /** Mobile: full width content */
    contentMobile: "ml-0",
  },

  responsive: {
    /** Hide on mobile, show on tablet+ */
    hideMobile: "hidden md:block",
    /** Show on mobile, hide on tablet+ */
    showMobile: "md:hidden",
    /** Stack on mobile, row on tablet+ */
    stackToRow: "flex flex-col md:flex-row",
    /** Full width on mobile, auto on tablet+ */
    fullToAuto: "w-full md:w-auto",
  },
} as const;

export type LayoutPatterns = typeof layoutPatterns;
