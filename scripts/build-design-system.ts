/**
 * Build script to generate design-system.json
 * Run with: tsx scripts/build-design-system.ts
 */

import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

// Import all design system modules
import { semanticColors, colorHexValues } from "../src/design-system/semantics/colors";
import { typographyDecisions, fontFamilyDecisions, typographyScale } from "../src/design-system/semantics/typography";
import { componentDecisions } from "../src/design-system/components/decisions";
import { componentRegistry, approvedComponents, draftComponents } from "../src/design-system/components/registry";
import { layoutPatterns } from "../src/design-system/patterns/layout";
import { statePatterns } from "../src/design-system/patterns/states";
import { interactionPatterns } from "../src/design-system/patterns/interactions";
import { chartPatterns } from "../src/design-system/patterns/charts";
import { modalPatterns } from "../src/design-system/patterns/modals";
import { iconMappings } from "../src/design-system/mappings/icons";
import { badgeMappings, statusLabels } from "../src/design-system/mappings/badges";

const designSystem = {
  $schema: "https://offlinemediainc.github.io/offline-ui/design-system.schema.json",
  meta: {
    name: "@offlinemediainc/offline-ui",
    version: "0.2.0",
    generatedAt: new Date().toISOString(),
    description: "Offline Media Design System - LLM-friendly design decisions and patterns",
  },

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

  semantics: {
    colors: semanticColors,
    colorHexValues,
    typography: typographyDecisions,
    fontFamilies: fontFamilyDecisions,
    typographyScale,
  },

  components: {
    decisions: componentDecisions,
    registry: componentRegistry,
    approved: approvedComponents,
    draft: draftComponents,
  },

  patterns: {
    layout: layoutPatterns,
    states: statePatterns,
    interactions: interactionPatterns,
    charts: chartPatterns,
    modals: modalPatterns,
  },

  mappings: {
    icons: iconMappings,
    badges: badgeMappings,
    statusLabels,
  },

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
};

// Ensure dist directory exists
const distPath = join(process.cwd(), "dist");
if (!existsSync(distPath)) {
  mkdirSync(distPath, { recursive: true });
}

// Write the JSON file
const outputPath = join(distPath, "design-system.json");
writeFileSync(outputPath, JSON.stringify(designSystem, null, 2));

console.log(`✓ Generated ${outputPath}`);
console.log(`  - ${Object.keys(designSystem.semantics.colorHexValues).length} color tokens`);
console.log(`  - ${Object.keys(designSystem.semantics.typography).length} typography decisions`);
console.log(`  - ${approvedComponents.length} approved components`);
console.log(`  - ${Object.keys(designSystem.mappings.icons.actions).length + Object.keys(designSystem.mappings.icons.navigation).length + Object.keys(designSystem.mappings.icons.status).length + Object.keys(designSystem.mappings.icons.domain).length} icon mappings`);
