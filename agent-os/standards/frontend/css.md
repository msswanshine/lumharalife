## CSS best practices

- **Consistent Methodology**: Apply and stick to the project's consistent CSS methodology (Tailwind, BEM, utility classes, etc.) across the entire project
- **Avoid Overriding Framework Styles**: Work with your framework's patterns rather than fighting against them with excessive overrides
- **Maintain Design System**: Establish and document design tokens (colors, spacing, typography) for consistency
- **Minimize Custom CSS**: Leverage framework utilities and components to reduce custom CSS maintenance burden
- **Performance Considerations**: Optimize for production with CSS purging/tree-shaking to remove unused styles

---

## Layout Foundation: Container System

Establish global site containers at the foundational level to create pixel-perfect, responsive layouts. The container system consists of four key layers:

### Container Layers

1. **Full Screen Width**: The maximum width the screen allows. This is the viewport boundary.
2. **Site Max Width**: Limits how wide the website stretches. Set on the root element (e.g., `<html>` or `<body>`) and centered using `margin-left: auto; margin-right: auto;`. Full-site width elements (background images, full-width sections) live here.
3. **Content Side Padding**: Always exists regardless of device. Creates left/right spacing between elements and the screen edge. Essential for text elements and prevents content from touching viewport edges.
4. **Grid Area**: Where design-determined columns start and end. Designers typically work with 12-column grids, though column counts can vary. Plan the full grid area pixel width with designers at the beginning for precisely planned grid walls and perfectly centered elements.

### Implementation with CSS Variables

Use CSS variables to define container dimensions for easy maintenance. Follow mobile-first approach:

```css
:root {
  --site-max-width: 3000px; /* or appropriate max width */
  --content-side-padding: 1rem; /* responsive padding */
  --grid-gutter: 1rem; /* spacing between grid columns */
  --grid-columns: 4; /* mobile-first: default column count */
}

@media (min-width: 768px) {
  :root {
    --content-side-padding: 1.5rem;
    --grid-gutter: 1.5rem;
    --grid-columns: 8; /* tablet column count */
  }
}

@media (min-width: 1024px) {
  :root {
    --content-side-padding: 2rem;
    --grid-gutter: 2rem;
    --grid-columns: 12; /* desktop column count */
  }
}
```

---

## CSS Grid Layout

Use CSS Grid Layout for precise, pixel-perfect layouts. Grid Layout is designed specifically for grid styling and provides superior control over element placement compared to floats or flexbox-only solutions.

### Grid Setup

- **Grid Container**: Apply `display: grid` to parent elements that need grid layout
- **Column Definition**: Define columns using `grid-template-columns` with repeat() and CSS variables
- **Gutter Control**: Use `gap` property (or `grid-gap`) for consistent spacing between grid items
- **Responsive Grids**: Adjust column counts and gutters at different breakpoints

### Grid Placement

- **Grid Column**: Use `grid-column` property with start and end column values for precise placement
- **Centering Elements**: Calculate center columns: `(total-columns - element-columns) / 2 + 1` for start, `start + element-columns` for end
- **Auto-placement**: Use `grid-auto-flow` for automatic placement of child elements when specific placement isn't needed

### Browser Compatibility

- Use CSS Grid Layout polyfills for older browser support when required
- Test grid layouts across target browsers
- Provide fallback layouts for critical content when necessary

---

## CSS Variables (Custom Properties)

Use CSS variables for design tokens to create maintainable, consistent styling systems.

### Design Tokens as Variables

Define all design decisions as CSS variables:

- **Colors**: Primary, secondary, accent, neutral palettes
- **Spacing**: Grid gutters, content padding, component spacing
- **Typography**: Font families, sizes, line heights, weights
- **Breakpoints**: Media query breakpoint values
- **Grid System**: Column counts, gutters, max widths

### Benefits

- **Single Source of Truth**: Change a variable value once, update everywhere
- **Theme Support**: Easy to create light/dark themes or brand variations
- **Runtime Updates**: Variables can be updated via JavaScript for dynamic theming
- **Cascade Support**: Variables respect CSS cascade and can be overridden at component level

### Variable Naming Convention

Use descriptive, hierarchical naming:

```css
:root {
  /* Colors */
  --color-primary: #0066cc;
  --color-primary-dark: #004499;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  
  /* Grid */
  --grid-columns: 4; /* mobile-first, overridden at breakpoints */
  --grid-gutter: var(--spacing-md);
}
```

---

## Vertical Spacing System

Establish a systematic approach to vertical spacing between block-level elements to create consistent, predictable layouts. The vertical spacing system uses three block types that interact intelligently based on their relationships.

### Block Types

1. **Spaced Blocks**: Elements that require consistent vertical padding (`--padding-vertical-[breakpoint]`) between themselves and other elements. These blocks maintain a "personal bubble" and always provide bottom padding equal to the vertical padding value.

2. **Cohesive Blocks**: Elements that function as a unified group. The last element within a cohesive block provides bottom spacing equal to the grid gutter (`--grid-gutter-[breakpoint]`), while the block itself has no bottom padding. Useful for multi-column layouts (like card grids) that appear as single columns on mobile.

3. **Compact Blocks**: Elements that should appear with zero spacing between each other. These blocks have no bottom padding and are designed to group tightly together. They only provide top padding when following non-compact blocks to maintain comfortable spacing.

### Spacing Logic

#### Like Follows Like

- **Compact + Compact**: Zero spacing between blocks
- **Cohesive + Cohesive**: Spacing equal to grid gutter between blocks
- **Spaced + Spaced**: Spacing equal to vertical padding (first block provides bottom padding)

#### Unlike Follows Unlike

When different block types follow each other:

- **Compact following non-Compact**: Compact block provides top padding equal to vertical padding
- **Cohesive following non-Cohesive**: Cohesive block provides top margin equal to vertical padding
- **Spaced following non-Spaced**: Spaced block provides top padding equal to vertical padding

### Implementation with CSS Variables

Define vertical spacing variables that scale with breakpoints:

```css
:root {
  --padding-vertical: 2rem;
  --grid-gutter: 1rem;
}

@media (min-width: 768px) {
  :root {
    --padding-vertical: 3rem;
    --grid-gutter: 1.5rem;
  }
}

@media (min-width: 1024px) {
  :root {
    --padding-vertical: 4rem;
    --grid-gutter: 2rem;
  }
}
```

### Spaced Block Implementation

```css
.spaced-block {
  padding-bottom: var(--padding-vertical);
}

/* Spaced blocks following cohesive blocks */
.cohesive-block + .spaced-block {
  padding-top: calc(var(--padding-vertical) - var(--grid-gutter));
}

/* Spaced blocks following compact blocks */
.compact-block + .spaced-block {
  padding-top: var(--padding-vertical);
}
```

### Cohesive Block Implementation

```css
.cohesive-block {
  margin-bottom: var(--grid-gutter);
}

/* Cohesive blocks following compact blocks */
.compact-block + .cohesive-block {
  margin-top: var(--padding-vertical);
}

/* Last cohesive block in series */
.cohesive-block:last-of-type {
  margin-bottom: var(--padding-vertical);
}
```

### Compact Block Implementation

```css
.compact-block {
  padding-bottom: 0;
}

/* Compact blocks following cohesive blocks */
.cohesive-block + .compact-block {
  margin-top: var(--padding-vertical);
}

/* Compact blocks following spaced blocks */
.spaced-block + .compact-block {
  margin-top: var(--padding-vertical);
}
```

### Utility Classes

Create utility classes for consistent vertical padding:

```css
.padding-top {
  padding-top: var(--padding-vertical);
}

.padding-bottom {
  padding-bottom: var(--padding-vertical);
}

.padding-vertical {
  padding-top: var(--padding-vertical);
  padding-bottom: var(--padding-vertical);
}
```

### Use Cases

- **Spaced Blocks**: Use for major content sections, hero sections, feature sections that need clear separation
- **Cohesive Blocks**: Use for card grids, product listings, article lists that group together visually
- **Compact Blocks**: Use for related content that should appear as a single unit (headings with paragraphs, form fields, related links)

### Tailwind CSS Integration

When using Tailwind, configure utilities that reference your CSS variables:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        'vertical': 'var(--padding-vertical)',
        'gutter': 'var(--grid-gutter)',
      },
    },
  },
}
```

Then use Tailwind utilities with your block classes:

```html
<div class="spaced-block pb-vertical">
  <!-- Content -->
</div>

<div class="cohesive-block mb-gutter">
  <!-- Content -->
</div>

<div class="compact-block">
  <!-- Content -->
</div>
```

### Benefits

- **Consistent Spacing**: Predictable vertical rhythm across the entire site
- **Responsive Scaling**: Spacing automatically adjusts at breakpoints
- **Maintainable**: Change spacing values in one place (CSS variables) to update everywhere
- **Context-Aware**: Blocks intelligently adjust spacing based on adjacent block types
- **Design System Alignment**: Integrates seamlessly with grid system and container foundation

---

## Tailwind CSS Integration

When using Tailwind CSS, leverage its utility-first approach while maintaining the container and grid foundation.

### Tailwind Core Concepts

- **Utility-First**: Build complex components from small, single-purpose utility classes
- **Responsive Design**: Use responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) for breakpoint-specific styles
- **Design Tokens**: Configure Tailwind's theme to use your CSS variables
- **Custom Utilities**: Extend Tailwind with custom utilities that align with your container system

### Tailwind Configuration

Configure Tailwind to work with your CSS variable system:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      maxWidth: {
        'site': 'var(--site-max-width)',
      },
      spacing: {
        'content-padding': 'var(--content-side-padding)',
        'grid-gutter': 'var(--grid-gutter)',
      },
    },
  },
}
```

### Combining Grid Layout with Tailwind

- Use CSS Grid Layout for major layout structures (containers, page sections)
- Use Tailwind utilities for component-level styling and spacing
- Create custom Tailwind utilities for grid column placement when needed
- Maintain consistency between grid system and Tailwind spacing scale

---

## Visual Grid Debugging

Implement visual grid overlays during development to verify pixel-perfect alignment.

### Development Tools

- **Visual Grid Overlay**: Create a development-only visual grid that can be toggled (e.g., via URL parameter `?show-grid=1`)
- **Grid Lines**: Display grid column boundaries and gutters visually
- **Container Boundaries**: Show container max-width and padding boundaries
- **Remove in Production**: Ensure visual debugging tools are excluded from production builds

### Benefits

- **Alignment Verification**: Quickly verify elements align to grid columns
- **Team Communication**: Visual reference for designers and developers
- **Consistency Check**: Ensure all team members follow the same grid system
- **Design Fidelity**: Match designs precisely by seeing exact grid boundaries
