# @offlinemediainc/offline-ui

Design system knowledge for building Offline interfaces.

---

## The Brand Identity

Offline's visual identity is **bold, modern, and premium**. The palette is restrained: black dominates, yellow accents, blue links.

**Black (#191919) is the hero.** Primary buttons, text, key UI elements. It grounds everything.

**Yellow (#DE8E0F) is sacred.** It's the brand accent — badges, highlights, chart emphasis, premium touches. Never use it for buttons. When users see yellow, it should feel special, not routine.

**Blue (#004FFF) means interaction.** Links, clickable text. Users learn: blue = I can click this.

This restraint creates hierarchy. When everything is colorful, nothing stands out. When color is rare, it commands attention.

---

## Shadows Communicate Elevation

Three levels, each with purpose:

- **shadow-card**: Subtle. Cards sit gently on the page. This is your default.
- **shadow-tag**: Medium. Floating badges, tags that "hover" above content.
- **shadow-elevated**: Dramatic. Modals, popovers — things that demand focus.

Match shadow to importance. A settings card? `shadow-card`. A critical modal? `shadow-elevated`.

---

## Typography Creates Rhythm

**Cabinet Grotesk** (display-*) is for moments. Hero headlines, major section titles. It's bold, distinctive — use sparingly.

**Satoshi** handles everything else. Headlines, titles, body, labels. It's the workhorse. Clean, readable, professional.

**DM Mono** is for data. Stats, numbers, code. When precision matters.

The scale flows: display (36/32/29) → headline (26/23/20) → title (18/16/14) → body (16/14/12/10) → label (14/12/10).

Pick based on content importance, not aesthetic preference.

---

## The Navigation System

Sidebar and Breadcrumb work together. They answer different questions:

**Sidebar**: "Where can I go?" Shows all destinations.

**Breadcrumb**: "Where am I? How did I get here?" Shows the path back.

The current page appears in BOTH places — this is intentional:
- In breadcrumb: muted, shows hierarchy
- As page h1: primary identifier, shows content

Don't "fix" this by removing one. They serve different cognitive purposes.

### Breadcrumb Placement

Breadcrumbs live in the **sticky header row**, not the content area:

```
┌─────────────────────────────────────────────────┐
│ [☰] │ Home / Partners / Wye Hill / Offers       │  ← Header (sticky)
├─────────────────────────────────────────────────┤
│                                                 │
│  Offers                                         │  ← h1 in content
│  Manage offers for Wye Hill Kitchen             │
│                                                 │
```

Use "Home" text, not an icon. The sidebar trigger already provides an icon — two icons side by side creates noise.

---

## Overlays: Dialog vs Sheet vs AlertDialog

Three overlay types, each for specific situations:

**Dialog**: Forms, content, multi-step flows. User initiates, can dismiss freely.
- Edit profile, view details, complex forms
- Add `max-h-[90vh] overflow-y-auto` for mobile

**Sheet**: Slide-in panels. Secondary content, navigation, filters.
- `side="right"`: Detail panels (default)
- `side="left"`: Mobile navigation
- `side="bottom"`: Mobile action sheets (add `h-auto max-h-[80vh]`)

**AlertDialog**: Interruptions that demand a decision. Blocks until resolved.
- Destructive confirmations ("Delete this? Cannot undo.")
- Unsaved changes warnings
- Header is title + description ONLY. No icons, no decoration. Keep it serious.

The choice matters for UX. Dialog = user-driven exploration. AlertDialog = system demands attention. Sheet = supplementary panel.

---

## Status Patterns with Badge

Badges communicate state. The variant tells the story:

| State | Variant | Examples |
|-------|---------|----------|
| Needs attention | `warning` | "Pending Review", "Draft" |
| Active/live | `secondary` | "Active", "Live", "Today!" |
| Completed/past | `outline` | "Launched Dec '24", "Event Recap" |
| Problem | `destructive` | "Failed", "Expired" |
| Success | `success` | "Approved", "Verified" |

For premium/VIP content, use the `badge-premium` class — black background with gold gradient text.

Add `shadow-tag` for badges that need to "float" above content.

---

## Chart Colors Tell Stories

Colors aren't random. They're semantic:

| Color | Variable | Meaning |
|-------|----------|---------|
| Yellow | `--chart-1` | Primary data, brand highlight |
| Blue | `--chart-2` | Secondary series |
| Green | `--chart-3` | Positive, growth, success |
| Gray | `--chart-4` | Neutral, baseline, comparison |
| Red | `--chart-5` | Negative, alerts, problems |

For rating distributions:
- 5 stars → green (chart-3)
- 4 stars → yellow (chart-1)
- 3 stars → gray (chart-4)
- 1-2 stars → red (chart-5)

Users intuitively understand: green good, red bad. Don't fight this.

---

## Premium Styling

For VIP, premium, or featured content:

**surface-premium**: Card with gold gradient border. Instantly signals "special."

**badge-premium**: Black pill with gold gradient text. Use for "PREMIUM", "VIP ACCESS", "EXCLUSIVE."

Use sparingly. If everything is premium, nothing is.

---

## Card Composition

Cards are compositional — mix pieces as needed:

- **Card**: Container
- **CardHeader**: Top section (title area)
- **CardTitle**: Heading
- **CardDescription**: Subtitle/helper
- **CardContent**: Main body
- **CardFooter**: Actions

Add separators with borders:
- `border-b` on CardHeader
- `border-t` on CardFooter

For compact cards, override padding: `className="p-4"` on sub-components.

---

## Item: The List Building Block

Item is flexible — use it for any list-style UI:

**Variants**:
- `default`: Clean, no border (use inside bordered container)
- `outline`: Individual border per item
- `muted`: Gray background fill

**Composition**:
- ItemMedia: Icon or image on left
- ItemContent: Title + description
- ItemActions: Buttons on right

For image thumbnails, use `<ItemMedia variant="image">`.

For clickable items, use `asChild` with an anchor: `<Item asChild><a href="#">...`

---

## Tabs: Two Styles

**Default (pill/segment)**: Solid background tabs. Good for switching views.

**Line style**: Underline indicator. More subtle, good for content categories.

For line style, override the defaults:
```
TabsList: bg-transparent border-b rounded-none h-auto p-0
TabsTrigger: rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 pb-2
```

Add icons with `className="gap-1.5"` on the trigger.

---

## Mobile Considerations

**Dialogs**: Add `max-h-[90vh] overflow-y-auto` to DialogContent. Prevents content from being cut off.

**Sheets**: Bottom sheets need `h-auto max-h-[80vh]`. Left sheets work great for mobile nav.

**Sidebar**: Automatically becomes a sheet on mobile. The `OfflineSidebar` component handles this.

---

## Accessibility Essentials

- Icon-only buttons need `aria-label`
- Inputs and checkboxes need `<Label htmlFor>`
- AlertDialog traps focus — use for real decisions
- Tabs support arrow key navigation

---

## Common Anti-Patterns

1. **Yellow buttons** — Yellow is accent, not action. Use black (default variant).

2. **Home icon in breadcrumb** — Sidebar trigger already has an icon. Use "Home" text.

3. **Decorating AlertDialog headers** — Keep them clean. Title + description only. This is serious UI.

4. **Missing input labels** — Screen readers need them. Always pair inputs with Label.

5. **Hardcoded colors** — Use CSS variables. They're designed to work together.

6. **Overusing premium styling** — Reserve gold borders and badges for actually premium content.
