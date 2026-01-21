// Design System Type Definitions

export type ColorToken =
  | `yellow-${25 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900}`
  | `blue-${25 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900}`
  | `gray-${25 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900}`
  | `chart-${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`
  | "red-400"
  | "semantic-success500"
  | "white"
  | "black";

export type TypographyClass =
  | "display-large"
  | "display-medium"
  | "display-small"
  | "headline-large"
  | "headline-medium"
  | "headline-small"
  | "title-large"
  | "title-medium"
  | "title-small"
  | "body-large"
  | "body-medium"
  | "body-small"
  | "body-x-small"
  | "label-large"
  | "label-medium"
  | "label-small"
  | "stat-mono"
  | "nav-label"
  | "nav-link";

export type ShadowLevel = "shadow-card" | "shadow-tag" | "shadow-elevated";

export type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "success"
  | "warning"
  | "outline"
  | "link";

export type ButtonVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "ghost"
  | "link";

export type ButtonSize = "default" | "sm" | "lg" | "icon";

export type LucideIconName = string;

export type TailwindClass = string;

export interface ComponentMeta {
  name: string;
  status: "approved" | "draft";
  description: string;
  imports: string[];
  variants?: Record<string, string[]>;
  sizes?: string[];
  composition?: string[];
}
