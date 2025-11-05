# Offline Brand Style Guide

The official design system and style guide for all Offline properties and subdomains.

## 📁 Files

### **index.html**
Visual, interactive style guide meant for human consumption. View this on GitHub Pages to see:
- Live examples of all typography styles
- Color swatches with hex values and CSS variable names
- Premium styling demonstrations
- Shadow and elevation examples
- Logo usage guidelines

**View live:** [https://yourusername.github.io/offline-styleguide](https://yourusername.github.io/offline-styleguide)

### **ai-style-guide.md**
Comprehensive markdown guide optimized for AI consumption. Feed this to AI tools (like Claude, ChatGPT, etc.) when:
- Building new pages or features
- Applying consistent styling
- Understanding brand guidelines
- Making design decisions

This file contains:
- Complete typography system documentation
- Full color palette with usage guidelines
- Layout and responsive patterns
- Component patterns and code examples
- Best practices and do's/don'ts
- Animation and performance guidelines

### **offline_styles.css**
Ready-to-use CSS file containing:
- All CSS custom properties (color variables, typography variables, shadows)
- Typography utility classes (`.headline-large`, `.body-medium`, etc.)
- Premium styling classes
- Animation keyframes

**Usage:**
```html
<link rel="stylesheet" href="offline_styles.css">
```

## 🎨 Quick Start

### For Developers

1. Include the CSS file in your project:
```html
<link rel="stylesheet" href="path/to/offline_styles.css">
```

2. Use the typography classes:
```html
<h1 class="headline-large">Page Title</h1>
<p class="body-large">Body text content</p>
```

3. Reference CSS variables:
```css
.my-button {
  background-color: var(--colors-yellow-400);
  color: white;
  box-shadow: var(--card-shadow);
}
```

### For AI Tools

Point your AI assistant to `ai-style-guide.md`:
```
Please review the style guide at ai-style-guide.md and apply these styles to the new landing page.
```

### For Designers & Marketers

View the visual guide at [index.html](index.html) to see:
- Typography hierarchy with live examples
- Complete color palette
- Spacing and layout patterns
- Logo specifications

## 🎯 Key Brand Elements

### Typography
- **Display**: Cabinet Grotesk (800 weight) for hero headlines
- **Body/UI**: Satoshi (400-700 weight) for content
- **Numbers**: DM Mono (600 weight) for statistics

### Colors
- **Primary**: Yellow-400 (#DE8E0F) for CTAs
- **Secondary**: Blue-400 (#004FFF) for links and landing pages
- **Text**: Gray-900 (#191919) for primary text
- **Background**: Gray-25 (#F2F2F2) for page backgrounds

### Premium Styling
- Black background with yellow-400 border
- Gold gradient text effect
- Used for offers $25+ and premium partners

## 📚 Font Loading

The fonts used in this design system:

```html
<!-- Satoshi -->
<link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet">

<!-- Cabinet Grotesk -->
<link href="https://fonts.cdnfonts.com/css/cabinet-grotesk" rel="stylesheet">

<!-- DM Mono -->
<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

## 🔗 Useful Links

- [Offline Website](https://letsgetoffline.com)
- [AI Style Guide](ai-style-guide.md)
- [CSS Variables](offline_styles.css)

## 📝 Version

**v1.1** - Updated with landing page styles, DM Mono typography, and animation guidelines

---

© 2025 Offline Media, Inc. • For internal use across Offline properties
