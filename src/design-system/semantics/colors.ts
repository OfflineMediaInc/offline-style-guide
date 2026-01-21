// Semantic Color Mappings
// Maps semantic purposes to color tokens for consistent usage

export const semanticColors = {
  brand: {
    /** Yellow-400 (#de8e0f) - brand accent for highlights, badges, premium touches. NEVER for buttons */
    primary: "yellow-400",
    /** Blue-400 (#004fff) - for links and clickable text ONLY */
    interactive: "blue-400",
  },

  text: {
    /** Gray-900 (#191919) - primary text, headings, important content */
    primary: "gray-900",
    /** Gray-600 (#636363) - secondary/supporting text */
    secondary: "gray-600",
    /** Gray-500 (#7c7c7c) - muted text, timestamps, helpers */
    muted: "gray-500",
    /** White text on dark backgrounds */
    onDark: "white",
    /** Blue-400 for clickable links */
    link: "blue-400",
    /** Success green for positive text */
    positive: "semantic-success500",
    /** Red for error/negative text */
    negative: "red-400",
  },

  surface: {
    /** White - default page/card background */
    default: "white",
    /** Gray-50 (#ececec) - muted/secondary backgrounds */
    muted: "gray-50",
    /** White with shadow-elevated for floating surfaces */
    elevated: "white + shadow-elevated",
  },

  border: {
    /** Gray-200 (#c6c6c6) - default borders */
    default: "gray-200",
    /** Gray-300 (#aeaeae) - stronger borders */
    strong: "gray-300",
    /** Yellow-400 - interactive/accent borders */
    interactive: "yellow-400",
    /** Gray-900 - focus ring borders */
    focus: "gray-900",
  },

  feedback: {
    /** Chart-3 (#099250) - success, positive, growth */
    positive: "chart-3",
    /** Chart-5 (#d31a0c) - error, negative, problems */
    negative: "chart-5",
    /** Yellow-400 - warning states */
    warning: "yellow-400",
    /** Chart-4 (#636363) - neutral/baseline */
    neutral: "chart-4",
  },
} as const;

// Hex value reference for when CSS variables aren't available
export const colorHexValues = {
  "yellow-25": "#fff2d8",
  "yellow-50": "#ffe9bd",
  "yellow-100": "#ffd386",
  "yellow-200": "#ffbd54",
  "yellow-300": "#f0a52c",
  "yellow-400": "#de8e0f",
  "yellow-500": "#c57900",
  "yellow-600": "#a76700",
  "yellow-700": "#835100",
  "yellow-800": "#5c3900",
  "yellow-900": "#331f00",

  "blue-25": "#d8e7ff",
  "blue-50": "#bed6ff",
  "blue-100": "#85afff",
  "blue-200": "#508bff",
  "blue-300": "#236aff",
  "blue-400": "#004fff",
  "blue-500": "#0046e0",
  "blue-600": "#003bbb",
  "blue-700": "#002e91",
  "blue-800": "#001f63",
  "blue-900": "#001033",

  "gray-25": "#f2f2f2",
  "gray-50": "#ececec",
  "gray-100": "#dfdfdf",
  "gray-200": "#c6c6c6",
  "gray-300": "#aeaeae",
  "gray-400": "#959595",
  "gray-500": "#7c7c7c",
  "gray-600": "#636363",
  "gray-700": "#4a4a4a",
  "gray-800": "#323232",
  "gray-900": "#191919",

  "red-400": "#d31a0c",
  "semantic-success500": "#099250",

  "chart-1": "#de8e0f",
  "chart-2": "#004fff",
  "chart-3": "#099250",
  "chart-4": "#636363",
  "chart-5": "#d31a0c",
  "chart-6": "#a76700",
  "chart-7": "#003bbb",
  "chart-8": "#959595",
} as const;

export type SemanticColors = typeof semanticColors;
export type ColorHexValues = typeof colorHexValues;
