// @offlinemediainc/offline-ui Design System
// LLM-friendly design decisions and patterns

// Type definitions
export * from "./types";

// Semantic mappings
export * from "./semantics";

// Component decisions and registry
export * from "./components";

// Layout, state, and interaction patterns
export * from "./patterns";

// Icon and badge mappings
export * from "./mappings";

// Import all modules for the combined export
import { semanticColors, colorHexValues } from "./semantics/colors";
import { typographyDecisions, fontFamilyDecisions, typographyScale } from "./semantics/typography";
import { componentDecisions } from "./components/decisions";
import { componentRegistry, approvedComponents, draftComponents } from "./components/registry";
import { layoutPatterns } from "./patterns/layout";
import { statePatterns } from "./patterns/states";
import { interactionPatterns } from "./patterns/interactions";
import { chartPatterns } from "./patterns/charts";
import { modalPatterns } from "./patterns/modals";
import { iconMappings } from "./mappings/icons";
import { badgeMappings, statusLabels } from "./mappings/badges";

/**
 * Complete Offline Design System
 *
 * Use this object for LLM consumption - it contains all design decisions,
 * patterns, and component guidance in a single queryable structure.
 *
 * @example
 * // What color for positive feedback?
 * offlineDesignSystem.semantics.colors.feedback.positive // "chart-3"
 *
 * // What component for delete confirmation?
 * offlineDesignSystem.components.decisions.modals.confirmDestructive // "AlertDialog"
 *
 * // What typography for stat values?
 * offlineDesignSystem.semantics.typography.statValueLarge // "display-medium"
 *
 * // What icon for delete action?
 * offlineDesignSystem.mappings.icons.actions.delete // "Trash2"
 *
 * // What spacing between form fields?
 * offlineDesignSystem.patterns.layout.forms.fieldGap // "space-y-4"
 */
export const offlineDesignSystem = {
  /** Package metadata */
  meta: {
    name: "@offlinemediainc/offline-ui",
    version: "0.2.1",
    description: "Offline Media Design System - LLM-friendly design decisions and patterns",
  },

  /** Quick reference for most common decisions */
  quickReference: {
    colors: {
      primary: "#191919 (gray-900) - buttons, text, UI elements",
      accent: "#de8e0f (yellow-400) - ACCENT ONLY, never buttons",
      link: "#004fff (blue-400) - clickable text only",
      success: "#099250 (chart-3) - positive feedback",
      error: "#d31a0c (chart-5) - errors, destructive",
    },
    fonts: {
      display: "Cabinet Grotesk - hero headlines only",
      body: "Satoshi - everything else",
      mono: "DM Mono - stats and numbers",
    },
    shadows: {
      card: "shadow-card - default for containers",
      floating: "shadow-tag - floating badges",
      modal: "shadow-elevated - dialogs, popovers",
    },
    components: {
      formModal: "Dialog",
      destructiveConfirm: "AlertDialog",
      sidePanel: "Sheet side=right",
      listItem: "Item",
      toast: "toast.success / toast.error",
    },
  },

  /** Semantic color and typography mappings */
  semantics: {
    colors: semanticColors,
    colorHexValues,
    typography: typographyDecisions,
    fontFamilies: fontFamilyDecisions,
    typographyScale,
  },

  /** Component decisions and metadata */
  components: {
    decisions: componentDecisions,
    registry: componentRegistry,
    approved: approvedComponents,
    draft: draftComponents,
  },

  /** Layout, state, and interaction patterns */
  patterns: {
    layout: layoutPatterns,
    states: statePatterns,
    interactions: interactionPatterns,
    charts: chartPatterns,
    modals: modalPatterns,
  },

  /** Icon and badge mappings */
  mappings: {
    icons: iconMappings,
    badges: badgeMappings,
    statusLabels,
  },

  /** Design rules and anti-patterns */
  rules: {
    critical: [
      "NEVER use yellow (#de8e0f) for buttons - yellow is accent only",
      "Blue (#004fff) is ONLY for clickable text links",
      "AlertDialog headers: title + description only, NO icons or decoration",
      "Icon-only buttons MUST have aria-label",
      "Inputs MUST be paired with Label using htmlFor",
    ],
    guidelines: [
      "Use CSS variables instead of hardcoded hex values",
      "Match shadow level to element importance: card < tag < elevated",
      "Use Cabinet Grotesk (display-*) sparingly for hero headlines",
      "Use stat-mono for numerical data and statistics",
      "Add max-h-[90vh] overflow-y-auto to Dialog for mobile",
    ],
    antiPatterns: [
      { bad: "Yellow buttons", fix: "Use Button variant='default' (black)" },
      { bad: "Home icon in breadcrumb", fix: "Use 'Home' text instead" },
      { bad: "Decorated AlertDialog headers", fix: "Title + description only" },
      { bad: "Missing input labels", fix: "Always pair Input with Label htmlFor" },
      { bad: "Hardcoded colors", fix: "Use CSS variables or semantic classes" },
      { bad: "Overusing premium styling", fix: "Reserve for actual premium content" },
    ],
  },
} as const;

export type OfflineDesignSystem = typeof offlineDesignSystem;
