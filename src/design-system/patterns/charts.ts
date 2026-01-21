// Chart Patterns
// Color rules, axis styles, and data visualization patterns

export const chartPatterns = {
  /** Order of colors when assigning to data series */
  colorPriority: ["chart-1", "chart-3", "chart-5", "chart-4", "chart-6", "chart-8"],

  /** Rating distribution color mapping (5-star to 1-star) */
  ratingDistribution: {
    "5": "chart-3", // Green - great
    "4": "chart-1", // Yellow - good
    "3": "chart-4", // Gray - neutral
    "2": "chart-5", // Red - poor
    "1": "chart-5", // Red - poor
  },

  /** Colors for positive/growth metrics */
  positiveMetrics: ["chart-1", "chart-3", "chart-6"],

  /** Colors for negative/decline metrics */
  negativeMetrics: ["chart-5", "chart-4", "chart-8"],

  /** Comparison pairs (e.g., this period vs last period) */
  comparisonPairs: {
    current: "chart-1",
    previous: "chart-4",
  },

  /** Axis styling (Recharts) */
  axisStyle: {
    tickLine: false,
    axisLine: false,
    tick: {
      fill: "hsl(var(--muted-foreground))",
      fontSize: 12,
    },
    tickMargin: 8,
  },

  /** Y-axis specific */
  yAxisStyle: {
    tickLine: false,
    axisLine: false,
    tick: {
      fill: "hsl(var(--muted-foreground))",
      fontSize: 12,
    },
    width: 40,
  },

  /** X-axis specific */
  xAxisStyle: {
    tickLine: false,
    axisLine: false,
    tick: {
      fill: "hsl(var(--muted-foreground))",
      fontSize: 12,
    },
    height: 40,
  },

  /** Bar chart corner radius */
  barRadius: [4, 4, 0, 0] as [number, number, number, number],

  /** Grid styling */
  gridStyle: {
    stroke: "hsl(var(--border))",
    strokeDasharray: "3 3",
  },

  /** Tooltip styling */
  tooltipStyle: {
    contentStyle: {
      backgroundColor: "hsl(var(--popover))",
      border: "1px solid hsl(var(--border))",
      borderRadius: "6px",
      boxShadow: "var(--card-shadow)",
    },
    labelStyle: {
      fontWeight: 600,
      marginBottom: 4,
    },
  },

  /** Legend styling */
  legendStyle: {
    iconType: "circle" as const,
    iconSize: 8,
    wrapperStyle: {
      paddingTop: 16,
    },
  },

  /** Chart container sizing */
  containerSizing: {
    /** Small chart (sparkline, mini) */
    small: { height: 100 },
    /** Medium chart (card) */
    medium: { height: 200 },
    /** Large chart (main view) */
    large: { height: 300 },
    /** Full height (dashboard) */
    full: { height: 400 },
  },

  /** Margin presets */
  margins: {
    /** No labels */
    none: { top: 0, right: 0, bottom: 0, left: 0 },
    /** With axis labels */
    withAxis: { top: 10, right: 10, bottom: 30, left: 40 },
    /** With legend */
    withLegend: { top: 10, right: 10, bottom: 50, left: 40 },
  },

  /** Semantic data series names */
  semanticSeries: {
    revenue: { color: "chart-1", label: "Revenue" },
    growth: { color: "chart-3", label: "Growth" },
    decline: { color: "chart-5", label: "Decline" },
    baseline: { color: "chart-4", label: "Baseline" },
    target: { color: "chart-2", label: "Target" },
  },
} as const;

export type ChartPatterns = typeof chartPatterns;
