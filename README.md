# Offline Design System

A Storybook-based design system for Offline applications. Contains reusable UI components, theme documentation, and brand styling.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start Storybook
pnpm storybook
```

Storybook will be available at http://localhost:6006

## What's Included

### Theme
Documentation for the Offline visual language:
- **Colors** - Brand colors, semantic colors, and color palette
- **Typography** - Reference and component typography scales
- **Shadows** - Elevation and shadow styles
- **Surfaces** - Card and surface treatments

### UI Components
Reusable React components built with shadcn/ui patterns:
- Badge, Button, Card, Dialog, Input, Sheet, Tabs
- Item (metadata rows)
- Sidebar (full application sidebar layout)

## Project Structure

```
offline-style-guide/
├── .storybook/          # Storybook configuration
├── components/
│   └── ui/              # UI components + stories
├── stories/
│   └── theme/           # Theme documentation stories
├── lib/                 # Utilities (cn function)
├── hooks/               # React hooks (useIsMobile)
├── app/
│   └── globals.css      # CSS variables and typography
├── tailwind.config.ts   # Tailwind theme configuration
└── Style Guide V1/      # Legacy static style guide
```

## Tech Stack

- **Framework**: Next.js 16 + React 19
- **Styling**: Tailwind CSS with CSS variables
- **Component Primitives**: Radix UI
- **Icons**: Lucide React
- **Documentation**: Storybook 10

## Legacy Style Guide

The original static HTML/CSS style guide is preserved in the `Style Guide V1/` folder for reference. This included:
- `index.html` - Interactive visual guide
- `offline_styles.css` - CSS library
- `ai-style-guide.md` - Markdown documentation
