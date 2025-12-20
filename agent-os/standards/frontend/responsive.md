## Responsive design best practices

- **Mobile-First Development**: Start with mobile layout and progressively enhance for larger screens
- **Standard Breakpoints**: Consistently use standard breakpoints across the application (e.g., mobile, tablet, desktop)
- **Fluid Layouts**: Use percentage-based widths and flexible containers that adapt to screen size
- **Relative Units**: Prefer rem/em units over fixed pixels for better scalability and accessibility
- **Test Across Devices**: Test and verify UI changes across multiple screen sizes from mobile to tablet to desktop screen sizes and ensure a balanced, user-friendly viewing and reading experience on all
- **Touch-Friendly Design**: Ensure tap targets are appropriately sized (minimum 44x44px) for mobile users
- **Performance on Mobile**: Optimize images and assets for mobile network conditions and smaller screens
- **Readable Typography**: Maintain readable font sizes across all breakpoints without requiring zoom
- **Content Priority**: Show the most important content first on smaller screens through thoughtful layout decisions

---

## Responsive Container System

The container system adapts responsively while maintaining consistent structure across all breakpoints.

### Container Responsiveness

- **Site Max Width**: Remains constant or scales appropriately at different breakpoints
- **Content Side Padding**: Scales responsively (smaller on mobile, larger on desktop)
- **Grid Columns**: Column count can vary by breakpoint (e.g., 4 columns mobile, 12 columns desktop)
- **Grid Gutters**: Gutter spacing scales with breakpoint (typically smaller on mobile, larger on desktop)

### Responsive Grid Implementation

Plan grid column counts for each breakpoint:

- **Mobile (default)**: Fewer columns (e.g., 4 columns) for simpler layouts
- **Tablet**: Medium column count (e.g., 8 columns) for intermediate complexity
- **Desktop**: Full column count (e.g., 12 or 16 columns) for maximum layout flexibility

Use CSS variables for responsive grid configuration:

```css
:root {
  --grid-columns: 4;
  --grid-gutter: 1rem;
  --content-side-padding: 1rem;
}

@media (min-width: 768px) {
  :root {
    --grid-columns: 8;
    --grid-gutter: 1.5rem;
    --content-side-padding: 1.5rem;
  }
}

@media (min-width: 1024px) {
  :root {
    --grid-columns: 12;
    --grid-gutter: 2rem;
    --content-side-padding: 2rem;
  }
}
```

---

## Grid-Based Responsive Design

Use CSS Grid Layout for responsive design with precise control over element placement at each breakpoint.

### Responsive Grid Placement

- **Breakpoint-Specific Placement**: Elements can span different column counts at different breakpoints
- **Centering Elements**: Use calculated center columns that adapt to breakpoint column counts
- **Sidebar Layouts**: Grid Layout makes responsive sidebars straightforward (e.g., 3-column sidebar on desktop, full-width on mobile)
- **Nested Grids**: Create grid containers within grid items for complex responsive layouts

### Grid Element Responsiveness

When placing elements in the grid:

1. **Mobile First**: Define mobile grid placement (fewer columns, simpler layout)
2. **Progressive Enhancement**: Add tablet and desktop placements that utilize more columns
3. **Consistent Spans**: Maintain element proportions across breakpoints when possible
4. **Flexible Wrapping**: Use `grid-auto-flow` and `auto-fit`/`auto-fill` for flexible responsive grids

### Example: Responsive Grid Element

```css
.grid-item {
  /* Mobile: full width (4 columns) */
  grid-column: 1 / -1;
}

@media (min-width: 768px) {
  .grid-item {
    /* Tablet: 6 columns (centered in 8-column grid) */
    grid-column: 2 / 8;
  }
}

@media (min-width: 1024px) {
  .grid-item {
    /* Desktop: 8 columns (centered in 12-column grid) */
    grid-column: 3 / 11;
  }
}
```

---

## Tailwind CSS Responsive Design

When using Tailwind CSS, leverage responsive prefixes for breakpoint-specific styling.

### Tailwind Breakpoints

Use Tailwind's default breakpoints or customize to match your design system:

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

### Responsive Utilities

- **Container Classes**: Use Tailwind's container class with max-width configuration
- **Responsive Spacing**: Apply spacing utilities with breakpoint prefixes (`md:p-4`, `lg:px-8`)
- **Responsive Grid**: Use `grid-cols-*` utilities with responsive prefixes
- **Responsive Display**: Show/hide elements at specific breakpoints (`hidden md:block`)

### Combining Grid Layout with Tailwind Responsive

- Use CSS Grid Layout for major responsive layout structures
- Use Tailwind responsive utilities for component-level responsive styling
- Ensure Tailwind breakpoints align with your grid system breakpoints
- Maintain consistency between grid column changes and Tailwind responsive classes

---

## Responsive Typography

Typography scales responsively while maintaining readability and hierarchy.

### Responsive Font Sizes

- **Base Font Size**: Set root font size (typically 16px) for accessibility
- **Scalable Typography**: Use rem/em units that scale with root font size
- **Breakpoint Scaling**: Adjust font sizes at breakpoints for optimal readability
- **Line Height**: Maintain appropriate line heights across breakpoints

### Typography with CSS Variables

```css
:root {
  --font-size-base: 1rem;
  --font-size-sm: 0.875rem;
  --font-size-lg: 1.125rem;
  --line-height-base: 1.5;
}

@media (min-width: 1024px) {
  :root {
    --font-size-base: 1.125rem;
    --font-size-lg: 1.25rem;
  }
}
```

---

## Responsive Images and Media

Ensure images and media adapt to container and grid constraints.

### Image Responsiveness

- **Container-Aware**: Images respect container max-width and padding
- **Grid-Aware**: Images can span specific grid columns responsively
- **Aspect Ratios**: Maintain aspect ratios across breakpoints
- **Srcset/Sizes**: Use responsive image techniques for performance

### Media Queries for Containers

Apply media queries that align with your container and grid system:

- Match breakpoints to grid column change points
- Adjust container padding at same breakpoints as grid changes
- Ensure consistent breakpoint usage across all responsive styles
