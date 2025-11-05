# Offline Premium — Design Style Guide

This style guide is the source of truth for all design and styling decisions across the Offline Premium website and related properties. It ensures consistency across subdomains and provides clear guidance for developers, marketers, and AI tools building new pages and features.

## Table of Contents

1. [Overview & Purpose](#overview--purpose)
2. [Typography System](#typography-system)
3. [Color System](#color-system)
4. [Layout & Responsive Patterns](#layout--responsive-patterns)
5. [Component Patterns](#component-patterns)
6. [Premium Styling](#premium-styling)
7. [Shadows & Elevation](#shadows--elevation)
8. [Animations & Performance](#animations--performance)
9. [Best Practices](#best-practices)
10. [Quick Reference](#quick-reference)

---

## Overview & Purpose

### Who This Guide Is For

- **Marketers** building landing pages in Webflow or other page builders
- **Developers** implementing new features and pages
- **AI Tools** applying consistent styling to generated code
- **Designers** ensuring brand consistency across platforms

### How to Use This Guide

This guide provides both high-level principles and specific implementation details. Each section includes:
- Design rationale and usage guidelines
- Specific CSS variables and Tailwind classes
- Code examples where applicable
- Do's and Don'ts

---

## Typography System

Offline uses three primary font families to create a clear visual hierarchy:

- **Satoshi**: Used for body text, UI elements, labels, and most content
- **Cabinet Grotesk**: Used for large display text and hero headlines
- **DM Mono**: Used for numerical data, statistics, and counters

### Font Hierarchy

#### Display Styles
Large, bold text used for hero sections and major page headers. Always uses Cabinet Grotesk at 800 weight.

**Display Large**
- CSS Variable: `var(--display-large-*)`
- Font: Cabinet Grotesk, 36px, 800 weight
- Line Height: 100%
- Letter Spacing: 0px
- Tailwind Class: `.display-large`
- Usage: Hero headlines, major landing page titles

**Display Medium**
- CSS Variable: `var(--display-medium-*)`
- Font: Cabinet Grotesk, 32px, 800 weight
- Line Height: 100%
- Letter Spacing: 0px
- Tailwind Class: `.display-medium`
- Usage: Section hero text

**Display Small**
- CSS Variable: `var(--display-small-*)`
- Font: Cabinet Grotesk, 29px, 800 weight
- Line Height: 100%
- Letter Spacing: 0px
- Tailwind Class: `.display-small`
- Usage: Smaller hero text, feature callouts

#### Headline Styles
Used for page titles and major section headers. Uses Satoshi at 700 weight.

**Headline Large**
- CSS Variable: `var(--headline-large-*)`
- Font: Satoshi, 26px, 700 weight
- Line Height: 32px
- Letter Spacing: 0px
- Tailwind Class: `.headline-large`
- Usage: Main page titles (e.g., "$30 to spend at Restaurant Name")

**Headline Medium**
- CSS Variable: `var(--headline-medium-*)`
- Font: Satoshi, 23px, 700 weight
- Line Height: 28px
- Letter Spacing: 0px
- Tailwind Class: `.headline-medium`
- Usage: Secondary section headers

**Headline Small**
- CSS Variable: `var(--headline-small-*)`
- Font: Satoshi, 20px, 700 weight
- Line Height: 24px
- Letter Spacing: 0px
- Tailwind Class: `.headline-small`
- Usage: Subsection headers ("Restaurant Info", "How can I use this?")

#### Title Styles
Used for emphasized UI elements and card headers. Uses Satoshi at 700 weight.

**Title Large**
- CSS Variable: `var(--title-large-*)`
- Font: Satoshi, 18px, 700 weight
- Line Height: 22px
- Letter Spacing: 0px
- Tailwind Class: `.title-large`
- Usage: Card titles, emphasized list items

**Title Medium**
- CSS Variable: `var(--title-medium-*)`
- Font: Satoshi, 16px, 700 weight
- Line Height: 20px
- Letter Spacing: 0px
- Tailwind Class: `.title-medium`
- Usage: FAQ questions, small card headers

**Title Small**
- CSS Variable: `var(--title-small-*)`
- Font: Satoshi, 14px, 700 weight
- Line Height: 18px
- Letter Spacing: 0px
- Tailwind Class: `.title-small`
- Usage: Small UI headers, emphasized labels

#### Body Styles
Used for all body text and paragraph content. Uses Satoshi at 500 weight.

**Body Large**
- CSS Variable: `var(--body-large-*)`
- Font: Satoshi, 16px, 500 weight
- Line Height: 24px
- Letter Spacing: 0px
- Tailwind Class: `.body-large`
- Usage: Primary paragraph text, main content

**Body Medium**
- CSS Variable: `var(--body-medium-*)`
- Font: Satoshi, 14px, 500 weight
- Line Height: 20px
- Letter Spacing: 0px
- Tailwind Class: `.body-medium`
- Usage: Secondary text, descriptions, help text

**Body Small**
- CSS Variable: `var(--body-small-*)`
- Font: Satoshi, 12px, 500 weight
- Line Height: 16px
- Letter Spacing: 0px
- Tailwind Class: `.body-small`
- Usage: Fine print, captions, small descriptive text

**Body X-Small**
- CSS Variable: `var(--body-x-small-*)`
- Font: Satoshi, 10px, 500 weight
- Line Height: 14px
- Letter Spacing: 0px
- Tailwind Class: `.body-x-small`
- Usage: Micro copy, legal text

#### Label Styles
Used for form labels, buttons, and UI controls. Uses Satoshi at 700 weight.

**Label Large**
- CSS Variable: `var(--label-large-*)`
- Font: Satoshi, 14px, 700 weight
- Line Height: 18px
- Letter Spacing: 0px
- Tailwind Class: `.label-large`
- Usage: Button text, primary labels

**Label Medium**
- CSS Variable: `var(--label-medium-*)`
- Font: Satoshi, 12px, 700 weight
- Line Height: 16px
- Letter Spacing: 0px
- Tailwind Class: `.label-medium`
- Usage: Form labels, small button text

**Label Small**
- CSS Variable: `var(--label-small-*)`
- Font: Satoshi, 10px, 700 weight
- Line Height: 14px
- Letter Spacing: 0px
- Tailwind Class: `.label-small`
- Usage: Tiny labels, badges

#### Navigation Styles

**Nav Label**
- Custom class: `.nav-label`
- Font: Open Sans, 0.75rem (12px), 800 weight
- Letter Spacing: 0.33em (very wide)
- Usage: Footer section headers (e.g., "OUR COMPANY", "FOLLOW")
- Treatment: Uppercase, yellow text on black background

**Nav Link**
- Custom class: `.nav-link`
- Font: Satoshi, 22px, 500 weight
- Transition: opacity 0.3s
- Usage: Footer navigation links

#### Monospace Styles (Numbers & Statistics)

**DM Mono for Counters**
- Font: DM Mono, 600 weight
- Usage: Statistical displays, live counters, numerical emphasis
- Context: Landing pages showing member counts, restaurant counts, and other metrics
- Best Practice: Use for numbers that need to stand out or animate (e.g., with Odometer.js)

Example usage:
```jsx
<span style={{ fontFamily: 'DM Mono', fontWeight: 600 }}>
  1,234
</span>
```

**When to Use DM Mono**:
- Large statistical numbers on landing pages
- Real-time counters
- Numerical data that needs emphasis
- Metrics displays

**When NOT to Use**:
- Body text with numbers
- Prices in regular content (use Satoshi)
- Form inputs
- Standard UI elements

---

## Color System

Offline uses a carefully designed color system with semantic naming and a full tonal scale for each color family.

### Brand Colors

#### Primary Yellow
The signature Offline brand color, used for CTAs, accents, and highlighting important elements.

| Name | CSS Variable | Hex | Usage |
|------|-------------|-----|-------|
| Yellow 25 | `--colors-yellow-25` / `--p-yellow25` | `#FFF2D8` | Very light backgrounds |
| Yellow 50 | `--colors-yellow-50` / `--p-yellow50` | `#FFE9BD` | Light backgrounds |
| Yellow 100 | `--colors-yellow-100` / `--p-yellow100` | `#FFD386` | Subtle accents |
| Yellow 200 | `--colors-yellow-200` / `--p-yellow200` | `#FFBD54` | Selected states, borders |
| Yellow 300 | `--colors-yellow-300` / `--p-yellow300` | `#F0A52C` | Hover states |
| Yellow 400 | `--colors-yellow-400` / `--p-yellow400` | `#DE8E0F` | **Primary CTA, Premium borders** |
| Yellow 500 | `--colors-yellow-500` / `--p-yellow500` | `#C57900` | Active states |
| Yellow 600 | `--colors-yellow-600` / `--p-yellow600` | `#A76700` | Darker accents |
| Yellow 700 | `--colors-yellow-700` / `--p-yellow700` | `#835100` | Very dark yellow |
| Yellow 800 | `--colors-yellow-800` / `--p-yellow800` | `#5C3900` | Darkest yellow |
| Yellow 900 | `--colors-yellow-900` / `--p-yellow900` | `#331F00` | Almost black yellow |

**Primary Usage**: CTAs, accent colors, banners, Premium treatment borders

#### Secondary Blue
Used for links, secondary actions, and informational elements. On landing pages, blue serves as the primary interactive color.

| Name | CSS Variable | Hex | Usage |
|------|-------------|-----|-------|
| Blue 25 | `--colors-blue-25` / `--s-blue25` | `#D8E7FF` | Very light backgrounds |
| Blue 50 | `--colors-blue-50` / `--s-blue50` | `#BED6FF` | Light backgrounds |
| Blue 100 | `--colors-blue-100` / `--s-blue100` | `#85AFFF` | Subtle accents |
| Blue 200 | `--colors-blue-200` / `--s-blue200` | `#508BFF` | Secondary elements |
| Blue 300 | `--colors-blue-300` / `--s-blue300` | `#236AFF` | Links |
| Blue 400 | `--colors-blue-400` / `--s-blue400` | `#004FFF` | **Primary blue, landing page CTAs** |
| Blue 500 | `--colors-blue-500` / `--s-blue500` | `#0046E0` | Active links |
| Blue 600 | `--colors-blue-600` / `--s-blue600` | `#003BBB` | Darker blue |
| Blue 700 | `--colors-blue-700` / `--s-blue700` | `#002E91` | Very dark blue |
| Blue 800 | `--colors-blue-800` / `--s-blue800` | `#001F63` | Darkest blue |
| Blue 900 | `--colors-blue-900` / `--s-blue900` | `#001033` | Almost black blue |

**Primary Usage**: Links, secondary buttons, informational callouts, landing page CTAs

**Landing Page Context**: Blue-400 is the primary interactive color on marketing landing pages (e.g., letsgetoffline.com/raleigh), used for "Join the Club →" buttons and hover effects.

#### Neutral Grays
The foundation of the UI, used for text, borders, and backgrounds.

| Name | CSS Variable | Hex | Usage |
|------|-------------|-----|-------|
| Gray 25 | `--colors-gray-25` / `--neutral-gray25` | `#F2F2F2` | Page backgrounds |
| Gray 50 | `--colors-gray-50` / `--neutral-gray50` | `#ECECEC` | Light backgrounds |
| Gray 100 | `--colors-gray-100` / `--neutral-gray100` | `#DFDFDF` | Borders, dividers |
| Gray 200 | `--colors-gray-200` / `--neutral-gray200` | `#C6C6C6` | Stronger borders |
| Gray 300 | `--colors-gray-300` / `--neutral-gray300` | `#AEAEAE` | Disabled text |
| Gray 400 | `--colors-gray-400` / `--neutral-gray400` | `#959595` | Muted text |
| Gray 500 | `--colors-gray-500` / `--neutral-gray500` | `#7C7C7C` | Secondary text |
| Gray 600 | `--colors-gray-600` / `--neutral-gray600` | `#636363` | Body text |
| Gray 700 | `--colors-gray-700` / `--neutral-gray700` | `#4A4A4A` | Dark text |
| Gray 800 | `--colors-gray-800` / `--neutral-gray800` | `#323232` | Very dark text |
| Gray 900 | `--colors-gray-900` / `--neutral-gray900` | `#191919` | **Primary text, black backgrounds** |

**Primary Usage**: Text hierarchy, borders, backgrounds, UI chrome

### Accent Colors

#### Teal
Used for informational elements and secondary accents.

| Name | CSS Variable | Hex |
|------|-------------|-----|
| Teal 25 | `--colors-teal-25` / `--s-teal25` | `#E2F5F9` |
| Teal 50 | `--colors-teal-50` / `--s-teal50` | `#D3EDF2` |
| Teal 100 | `--colors-teal-100` / `--s-teal100` | `#A9DDE8` |
| Teal 200 | `--colors-teal-200` / `--s-teal200` | `#86CCDA` |
| Teal 300 | `--colors-teal-300` / `--s-teal300` | `#6BBBC9` |
| Teal 400 | `--colors-teal-400` / `--s-teal400` | `#44A8BC` |
| Teal 500 | `--colors-teal-500` / `--s-teal500` / `--teal-500` | `#2594AB` / `#14B8A7` |
| Teal 600 | `--colors-teal-600` / `--s-teal600` | `#187F93` |
| Teal 700 | `--colors-teal-700` / `--s-teal700` | `#0D6576` |
| Teal 800 | `--colors-teal-800` / `--s-teal800` | `#054855` |
| Teal 900 | `--colors-teal-900` / `--s-teal900` | `#002B33` |

#### Red
Used for errors, warnings, and destructive actions.

| Name | CSS Variable | Hex |
|------|-------------|-----|
| Red 25 | `--colors-red-25` / `--s-red25` | `#FED7D4` |
| Red 50 | `--colors-red-50` / `--s-red50` | `#FEBBB6` |
| Red 100 | `--colors-red-100` / `--s-red100` | `#F9867D` |
| Red 200 | `--colors-red-200` / `--s-red200` | `#F1574B` |
| Red 300 | `--colors-red-300` / `--s-red300` | `#E43426` |
| Red 400 | `--colors-red-400` / `--s-red400` | `#D31A0C` |
| Red 500 | `--colors-red-500` / `--s-red500` | `#BD0D00` |
| Red 600 | `--colors-red-600` / `--s-red600` | `#A10B00` |
| Red 700 | `--colors-red-700` / `--s-red700` | `#7F0900` |
| Red 800 | `--colors-red-800` / `--s-red800` | `#5A0600` |
| Red 900 | `--colors-red-900` / `--s-red900` | `#330300` |

#### Semantic Error (Red Variant)
Alternate red palette for semantic error states.

| Name | CSS Variable | Hex |
|------|-------------|-----|
| Error 25 | `--semantic-error25` | `#FFECEC` |
| Error 50 | `--semantic-error50` | `#FFD2D2` |
| Error 100 | `--semantic-error100` | `#FFB8B8` |
| Error 200 | `--semantic-error200` | `#FF9C9C` |
| Error 300 | `--semantic-error300` | `#FF7F7F` |
| Error 400 | `--semantic-error400` | `#FF5555` |
| Error 500 | `--semantic-error500` | `#FE3131` |
| Error 600 | `--semantic-error600` | `#E91414` |
| Error 700 | `--semantic-error700` | `#B22626` |
| Error 800 | `--semantic-error800` | `#782A2A` |
| Error 900 | `--semantic-error900` | `#402020` |

#### Green (Success)
Used for success states and positive feedback.

| Name | CSS Variable | Hex |
|------|-------------|-----|
| Green 500 | `--colors-green-500` | `#39B96C` |
| Success 500 | `--semantic-success500` | `#099250` |

### Special Colors

| Name | CSS Variable | Hex | Usage |
|------|-------------|-----|-------|
| Black | `--black` | `#000000` | Pure black, used for backgrounds |
| Gray 900 Alt | `--gray-900` | `#252525` | Alternative dark gray |

---

## Layout & Responsive Patterns

### Container Structure

All public-facing pages use a consistent container pattern for content centering:

```jsx
<div className="flex relative flex-col md:flex-row max-w-7xl mx-auto w-full min-h-screen">
  {/* Content */}
</div>
```

- **Max Width**: `max-w-7xl` (1280px)
- **Centering**: `mx-auto` for horizontal centering
- **Full Width**: `w-full` to fill available space
- **Minimum Height**: `min-h-screen` for full viewport coverage

### Two-Column Layout Pattern

The primary layout pattern for OfferShare and EventShare pages:

```jsx
<div className="flex relative flex-col md:flex-row max-w-7xl mx-auto w-full">
  {/* Left Column - Images */}
  <div className="w-full md:w-1/2 md:pr-12">
    <div className="md:pt-9 md:sticky md:top-0">
      {/* Sticky image content */}
    </div>
  </div>

  {/* Right Column - Content */}
  <div className="w-full md:w-1/2 px-4 md:pl-12">
    <div className="pt-4 md:pt-9">
      {/* Scrollable content */}
    </div>
  </div>
</div>
```

**Key Features**:
- Mobile: Stacked vertically (`flex-col`)
- Desktop: Side-by-side (`md:flex-row`)
- Image column is sticky on desktop
- 12-unit padding between columns (`pr-12`, `pl-12`)
- Consistent top padding (`pt-9`)

### Responsive Breakpoints

Offline uses Tailwind's default breakpoint system with mobile-first approach:

| Breakpoint | CSS | Usage |
|------------|-----|-------|
| Mobile | Default | Base styles, < 768px |
| `md:` | `@media (min-width: 768px)` | Tablets and up |
| `lg:` | `@media (min-width: 1024px)` | Desktops |
| `xl:` | `@media (min-width: 1280px)` | Large desktops |

### Custom Breakpoints

**Desktop-Mobile Switcher** (for signup flows):
- Content max-width: `768px` on tablet/desktop
- Side splash panel: Shows at `1132px+`, `480-590px` width
- Special tablet handling: `768px - 1023px`

**Utility Classes**:
- `.global-hide-on-desktop` - Hidden at 768px and up
- `.global-hide-on-mobile` - Hidden below 768px

### Spacing System

Use Tailwind's spacing scale consistently:

- **Small gaps**: `gap-2` (8px), `gap-3` (12px), `gap-4` (16px)
- **Medium gaps**: `gap-6` (24px), `gap-8` (32px)
- **Large gaps**: `gap-12` (48px), `gap-16` (64px)
- **Section padding**: `py-4` (16px), `py-6` (24px), `py-8` (32px)
- **Container padding**: `px-4` (16px mobile), `px-5` (20px)

### Common Layout Patterns

**Section with Divider**:
```jsx
<hr className='my-6'/>
<div className='py-4'>
  <h2 className='headline-small'>Section Title</h2>
  {/* Section content */}
</div>
```

**Image Grid Pattern**:
```jsx
<div className="aspect-square overflow-hidden rounded-lg">
  <img className="w-full h-full object-cover object-center" src={image} />
</div>
```

---

## Component Patterns

### Buttons

The primary button component (`Primary`) supports three color variants and multiple states.

#### Button Variants

**Black Button** (Primary CTA):
```jsx
<Button color="black">Download the app</Button>
```
- Background: `var(--colors-gray-900)` (#191919)
- Text: White
- Hover: `var(--colors-gray-700)` (#4A4A4A)
- Active: Pure black (#000000)

**White Button** (Secondary CTA):
```jsx
<Button color="white">Learn More</Button>
```
- Background: White
- Text: `var(--colors-gray-900)` (#191919)
- Hover: `var(--colors-gray-25)` (#F2F2F2)
- Active: `var(--colors-gray-200)` (#C6C6C6)

**Gray Button** (Tertiary):
```jsx
<Button color="gray">Cancel</Button>
```
- Background: `var(--colors-gray-50)` (#ECECEC)
- Text: `var(--colors-gray-700)` (#4A4A4A)
- Hover: `var(--colors-gray-100)` (#DFDFDF)
- Active: `var(--colors-gray-200)` (#C6C6C6)

#### Button Structure

```jsx
// Standard button
<Button color="black">Button Text</Button>

// With icon
<Button color="black" icon="right">Download the app</Button>
<Button color="black" icon="left">Go Back</Button>

// Icon only
<Button color="black" icon="only" />

// Loading state
<Button color="black" stateProp="loading">Processing...</Button>

// Disabled
<Button color="black" stateProp="disabled">Unavailable</Button>
```

#### Button Sizing & Styling

- **Padding**: `px-6 py-3` (24px horizontal, 12px vertical)
- **Height**: `h-12` (48px)
- **Border Radius**: `rounded-lg` (8px)
- **Gap**: `gap-1` (4px between icon and text)
- **Font**: Uses `.font-label-large` (14px, 700 weight)
- **Icon Size**: `w-4 h-4` (16px)

#### Button Hover Effects

**Landing Page Button Hover** (Blue accent):
```css
button:hover {
  box-shadow: inset 0px -2em var(--colors-blue-400);
  transition: all 0.3s ease;
}
```

This creates an animated "fill from bottom" effect commonly used on marketing landing pages.

**Standard App Button Hovers**:
- Black buttons: Lighten to `var(--colors-gray-700)`
- White buttons: Darken to `var(--colors-gray-25)`
- Gray buttons: Darken to `var(--colors-gray-100)`
- All transitions: `0.3s ease`

### Headers

#### WebHeader

The standard header for public-facing pages.

```jsx
<WebHeader
  center_element={<span>Banner text here</span>}
  right_element={<Button>Sign Up</Button>}
/>
```

**Structure**:
- Black background (`bg-black`)
- Logo left (98px × 25px)
- Optional centered banner (yellow on mobile, white text on desktop)
- Optional right element
- Height: 51px (with banner), auto (without)

**Mobile Banner** (when center_element provided):
```jsx
<div className="flex h-[51px] items-center justify-center gap-2.5 px-5 py-[9px] bg-colors-yellow-300">
  <p className="relative w-[350px] body-small text-black text-center">
    {center_element}
  </p>
</div>
```

### Footers

#### WebFooter

The standard footer with company info, links, and social media.

**Structure**:
- Black background (`bg-black`)
- Multi-column layout (4 columns on desktop, stacked on mobile)
- Yellow section labels (`.nav-label`, uppercase)
- White body text
- Padding: `px-5 py-16`
- Top margin: `mt-16`

**Column Pattern**:
```jsx
<div className="min-w-3xs flex flex-col md:items-start">
  <h2 className="uppercase text-colors-yellow-200 nav-label mb-4">
    SECTION TITLE
  </h2>
  <div className="flex flex-col gap-3">
    <a className="text-white nav-link" href="#">Link Text</a>
  </div>
</div>
```

#### StickyFooter

A sticky CTA footer that remains visible while scrolling.

```jsx
<StickyFooter
  content={
    <div className='flex justify-between items-center w-full'>
      <p className="title-medium">$30 to spend</p>
      <Button color="black">Download</Button>
    </div>
  }
/>
```

### Form Inputs

#### Standard Input

```jsx
<div className="input-wrapper">
  <label className="input-label">Label Text</label>
  <div className="input-container">
    <input className="input-field" type="text" placeholder="Enter text" />
  </div>
</div>
```

**States**:
- Default: `border: 1px solid var(--colors-gray-100)`
- Hover: `border-color: var(--colors-gray-300)`
- Focus: `border-color: var(--colors-gray-900)`, `border-width: 2px`, shadow
- Error: `border-color: var(--colors-red-400)`
- Success: `border-color: var(--semantic-success500)`

#### Input Styling

- **Border Radius**: `0.5rem` (8px)
- **Padding**: `0.75rem 1rem` (12px vertical, 16px horizontal)
- **Background**: White
- **Font**: `var(--body-large-*)` (16px, 500 weight)
- **Transition**: `all 0.2s ease-in-out`

---

## Premium Styling

Premium partners and offers receive special visual treatment to distinguish them from standard offerings.

### When to Use Premium Styling

- Restaurant partners classified as "Premium"
- Offers valued at $25 or more
- Exclusive or high-value experiences
- Special event packages

### Premium Visual Treatment

Premium elements use a **black background with gold borders** to create an elevated, luxury feel.

#### Premium Box

```jsx
<div className="premium-box">
  <span className="premium-text">PREMIUM</span>
</div>
```

CSS:
```css
.premium-box {
  border: 2px solid var(--colors-yellow-400);
  position: relative;
  background-color: black;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  z-index: 30;
}
```

#### Premium Label Badge

```jsx
<div className="premium-label">
  <span className="premium-text">PREMIUM</span>
</div>
```

CSS:
```css
.premium-label {
  @apply inline-flex items-center px-6 py-2 rounded-lg bg-black text-yellow-400 shadow-sm border border-gray-800 relative overflow-hidden;
}

.premium-text {
  @apply font-semibold text-sm tracking-[.15em] relative z-10 bg-gradient-to-br from-yellow-600 via-yellow-100 via-35% to-yellow-600 bg-clip-text text-transparent;
}
```

**Text Gradient**: Creates gold shimmer effect
- From: `from-yellow-600` (#A76700)
- Via: `via-yellow-100` (#FFD386) at 35%
- To: `to-yellow-600` (#A76700)

#### Premium Card Border (Full Implementation)

For cards containing Premium content, use this gradient border treatment:

```jsx
<div
  className="relative border-[3px] border-transparent rounded-lg p-6"
  style={{
    background: "linear-gradient(white, white) padding-box, linear-gradient(92deg, #BCA687 2.57%, #B8A284 8.96%, #F9F2E8 10.5%, #C1B5A2 32.05%, #AB8F76 35.52%, #735B42 65.89%, #A68B6E 74%, #B79A7A 90.26%, #8F7E61 98.62%) border-box"
  }}
>
  {/* Premium card content */}
</div>
```

**Important**: The card background remains white - only the border has the gradient.

### Premium Color Palette

Use these specific colors for Premium elements:

- **Primary Border**: `var(--colors-yellow-400)` (#DE8E0F)
- **Background**: Black (#000000)
- **Text Gradient**: Yellow-600 → Yellow-100 → Yellow-600
- **Secondary Border**: `border-gray-800` (#323232)

### Premium vs Standard Distinction

| Element | Standard | Premium |
|---------|----------|---------|
| Background | White / Gray | Black |
| Border | Gray-100 (#DFDFDF) | Yellow-400 (#DE8E0F) or gradient |
| Text | Gray-900 (#191919) | White / Gold gradient |
| Badge | Not shown | Gold gradient "PREMIUM" badge |
| Shadow | Standard card shadow | Subtle or none |

---

## Shadows & Elevation

Offline uses a three-tier shadow system for different UI elevations.

### Shadow Variables

#### Card Shadow (Standard)
```css
--card-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06),
               0px 2px 2px 0px rgba(0, 0, 0, 0.05),
               0px 6px 3px 0px rgba(0, 0, 0, 0.03),
               0px 10px 4px 0px rgba(0, 0, 0, 0.01),
               0px 15px 4px 0px rgba(0, 0, 0, 0);
```

**Usage**: Standard cards, panels, modals
```css
box-shadow: var(--card-shadow);
/* or in JSX */
<div className="shadow-[var(--card-shadow)]">
```

#### New Shadow (Elevated)
```css
--new-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.1),
              0px 13px 13px 0px rgba(0, 0, 0, 0.09),
              0px 29px 17px 0px rgba(0, 0, 0, 0.05),
              0px 52px 21px 0px rgba(0, 0, 0, 0.01),
              0px 81px 23px 0px rgba(0, 0, 0, 0);
```

**Usage**: Floating elements, popovers, elevated modals

#### Tag Shadow (Subtle)
```css
--tag-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1),
              0px 4px 4px 0px rgba(0, 0, 0, 0.09),
              0px 9px 6px 0px rgba(0, 0, 0, 0.05),
              0px 17px 7px 0px rgba(0, 0, 0, 0.01),
              0px 26px 7px 0px rgba(0, 0, 0, 0);
```

**Usage**: Badges, tags, small floating elements

### Border Radius Standards

- **Buttons**: `rounded-lg` (8px)
- **Cards**: `rounded-lg` or `rounded-2xl` (8px or 16px)
- **Images**: `rounded-lg` (8px)
- **Small elements**: `rounded` (4px) via `--primitives-radius-s: 4px`
- **Circles**: `rounded-full` (50%)

---

## Animations & Performance

### Animation Patterns

Offline uses subtle, purposeful animations to enhance the user experience without overwhelming.

#### Smooth Scrolling

For horizontal scroll containers (like restaurant carousels):
```css
.scroll-container {
  scroll-behavior: smooth;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```

#### Transition Standards

All interactive elements should have consistent transitions:
```css
transition: all 0.3s ease;  /* Standard transition */
transition: opacity 0.3s;    /* For fade effects */
transition: all 0.2s ease-in-out;  /* For quick interactions */
```

**Common Durations**:
- **0.2s**: Fast interactions (input focus, small hovers)
- **0.3s**: Standard interactions (button hovers, navigation)
- **0.5s**: Slower animations (number counters, slide transitions)

### Performance Optimizations

#### Hardware Acceleration

Use GPU acceleration for smooth animations, especially on mobile:

```css
.animated-element {
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
```

**When to Use**:
- Elements with CSS animations or transitions
- Scrolling containers
- Elements that change position frequently
- Mobile Safari optimizations to prevent flicker

#### Animation Best Practices

1. **Use transform instead of position**: `transform: translateX()` instead of `left`
2. **Prefer opacity over visibility**: For fade effects
3. **Enable hardware acceleration**: For smooth 60fps animations
4. **Limit concurrent animations**: Don't animate too many elements simultaneously
5. **Use will-change sparingly**: Only on elements that will definitely animate

### Specific Animation Use Cases

#### Number Counters (Odometer.js)

For animated number counting on landing pages:
```javascript
// Duration: 500ms
// Theme: default
// Format: grouped numbers with commas
```

Use with DM Mono font for best visual effect.

#### Shake Animation

For error states and form validation:
```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}

.animate-shake {
  animation: shake 0.2s ease-in-out 0s 2;
}
```

Applied to code inputs and forms on validation errors.

#### Fade In

For content that loads dynamically:
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.3s ease;
}
```

### Scroll Behavior

#### Horizontal Scrolling

For restaurant cards and image sliders:
```css
.horizontal-scroll {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.horizontal-scroll > * {
  scroll-snap-align: start;
  flex-shrink: 0;
}
```

#### Smooth Page Scroll

```css
html {
  scroll-behavior: smooth;
}
```

---

## Best Practices

### Do's ✅

1. **Typography**
   - Use the semantic typography classes (`.headline-large`, `.body-medium`, etc.)
   - Maintain clear hierarchy: Display → Headline → Title → Body
   - Use Satoshi for body/UI, Cabinet Grotesk for large display text
   - Use DM Mono for statistics, counters, and numerical emphasis
   - Apply consistent font weights (400, 500, 700, 800 only)

2. **Colors**
   - Stick to the defined color palette and CSS variables
   - Use Yellow-400 for primary CTAs and Premium borders
   - Use Gray-900 for primary text and black backgrounds
   - Use semantic colors (Red for errors, Green for success)

3. **Layout**
   - Use mobile-first responsive design
   - Apply `max-w-7xl mx-auto` for content centering
   - Use the two-column pattern for content pages
   - Maintain consistent spacing with Tailwind's spacing scale

4. **Components**
   - Use the Primary button component with appropriate color variants
   - Apply WebHeader and WebFooter consistently
   - Use defined shadow variables for elevation
   - Follow established input styling patterns

5. **Premium Styling**
   - Apply Premium treatment only to qualified partners/offers
   - Use black background with gold border
   - Include Premium badge for clarity
   - Maintain white card backgrounds even with gradient borders

6. **Logo**
   - Use exact specified dimensions (98×25 header, 172×42 footer)
   - Always place in top-left
   - Maintain black background
   - Ensure consistent placement across all subdomains

7. **Animations & Performance**
   - Use hardware acceleration (`transform: translateZ(0)`) for smooth animations
   - Apply consistent transition durations (0.2s, 0.3s, 0.5s)
   - Use `transform` instead of position properties for animations
   - Enable smooth scrolling for better UX
   - Optimize for mobile with `-webkit-overflow-scrolling: touch`

### Don'ts ❌

1. **Typography**
   - Don't mix font families arbitrarily
   - Don't create custom font sizes outside the system
   - Don't use font weights other than 400, 500, 700, 800
   - Don't ignore the established hierarchy

2. **Colors**
   - Don't use arbitrary color values or hex codes directly
   - Don't create custom color variations
   - Don't use colors outside the palette
   - Don't apply Premium styling to non-premium elements

3. **Layout**
   - Don't create inconsistent breakpoints
   - Don't ignore mobile-first approach
   - Don't use arbitrary max-widths
   - Don't stack elements differently than established patterns

4. **Components**
   - Don't create custom button styles without updating this guide
   - Don't add heavy borders or shadows beyond defined system
   - Don't modify logo dimensions
   - Don't create new shadow values

5. **Premium Styling**
   - Don't use Premium styling for standard offers
   - Don't change Premium color scheme (gold must stay gold)
   - Don't apply Premium treatment inconsistently
   - Don't use colored backgrounds for Premium cards (keep white)

6. **General**
   - Don't add decorative elements that conflict with minimal aesthetic
   - Don't use rounded corners inconsistently
   - Don't ignore hover/focus states
   - Don't skip accessibility considerations

7. **Animations**
   - Don't create animations longer than 0.5s without good reason
   - Don't animate too many elements simultaneously
   - Don't use `will-change` on everything (performance impact)
   - Don't forget to test animations on mobile devices
   - Don't use jarring or distracting animation effects

---

## Quick Reference

### Most Common Classes

**Typography**:
```css
.headline-large      /* Main page titles (26px, bold) */
.headline-small      /* Section headers (20px, bold) */
.body-large          /* Primary text (16px, medium) */
.body-medium         /* Secondary text (14px, medium) */
.label-large         /* Button text (14px, bold) */
font-family: 'DM Mono', monospace; font-weight: 600;  /* Numbers/statistics */
```

**Layout**:
```jsx
max-w-7xl mx-auto w-full              /* Container centering */
flex flex-col md:flex-row             /* Responsive columns */
w-full md:w-1/2                       /* Half-width on desktop */
px-4 md:px-12                         /* Responsive padding */
gap-4 md:gap-6                        /* Responsive gaps */
```

**Colors**:
```jsx
bg-black                              /* Black backgrounds */
bg-colors-yellow-400                  /* Yellow CTA */
text-colors-gray-900                  /* Primary text */
text-colors-gray-500                  /* Secondary text */
border-colors-gray-100                /* Light borders */
```

**Buttons**:
```jsx
<Button color="black">Primary</Button>
<Button color="white">Secondary</Button>
<Button color="gray">Tertiary</Button>
```

**Spacing**:
```jsx
p-3    /* 12px padding */
p-4    /* 16px padding */
py-6   /* 24px vertical padding */
gap-4  /* 16px gap */
my-6   /* 24px vertical margin */
```

### Color Variables Quick Lookup

**Primary Colors**:
- Yellow CTA: `var(--colors-yellow-400)` / `#DE8E0F`
- Black: `var(--colors-gray-900)` / `#191919`
- White: `#FFFFFF`

**Text Colors**:
- Primary: `var(--colors-gray-900)` / `#191919`
- Secondary: `var(--colors-gray-500)` / `#7C7C7C`
- Muted: `var(--colors-gray-400)` / `#959595`

**Borders**:
- Light: `var(--colors-gray-100)` / `#DFDFDF`
- Medium: `var(--colors-gray-300)` / `#AEAEAE`
- Dark: `var(--colors-gray-900)` / `#191919`

**Status**:
- Error: `var(--colors-red-400)` / `#D31A0C`
- Success: `var(--semantic-success500)` / `#099250`

### Common Patterns

**Page Container**:
```jsx
<div className='flex flex-col justify-between min-h-screen'>
  <WebHeader />
  <div className="flex relative flex-col md:flex-row max-w-7xl mx-auto w-full">
    {/* Content */}
  </div>
  <WebFooter />
</div>
```

**Section with Header**:
```jsx
<hr className='my-6'/>
<div className='py-4'>
  <h2 className='headline-small mb-5'>Section Title</h2>
  {/* Content */}
</div>
```

**Image with Aspect Ratio**:
```jsx
<img
  className="w-full aspect-square object-cover object-center rounded-lg"
  src={image}
/>
```

---

## Revision History

- **v1.1** - Added DM Mono typography for statistics, landing page styling patterns (blue CTAs, hover effects), animations & performance section
- **v1.0** - Initial style guide created based on Tailwind configuration and existing component patterns
