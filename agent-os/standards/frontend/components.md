## UI component best practices

- **Single Responsibility**: Each component should have one clear purpose and do it well
- **Reusability**: Design components to be reused across different contexts with configurable props
- **Composability**: Build complex UIs by combining smaller, simpler components rather than monolithic structures
- **Clear Interface**: Define explicit, well-documented props with sensible defaults for ease of use
- **Encapsulation**: Keep internal implementation details private and expose only necessary APIs
- **Consistent Naming**: Use clear, descriptive names that indicate the component's purpose and follow team conventions
- **State Management**: Keep state as local as possible; lift it up only when needed by multiple components
- **Minimal Props**: Keep the number of props manageable; if a component needs many props, consider composition or splitting it
- **Documentation**: Document component usage, props, and provide examples for easier adoption by team members

---

## Layout Components

Create reusable layout components that work within the container and grid system.

### Container Component

A root container component that establishes the site max-width and centers content:

- **Max Width**: Respects `--site-max-width` CSS variable
- **Centering**: Uses `margin-left: auto; margin-right: auto;`
- **Full-Width Elements**: Allows child elements to break out for full-width backgrounds
- **Framework Agnostic**: Works with any framework or vanilla HTML/CSS

### Content Wrapper Component

A component that applies content side padding:

- **Side Padding**: Uses `--content-side-padding` CSS variable
- **Responsive**: Padding scales with breakpoints
- **Text Content**: Wraps text and content that shouldn't touch screen edges
- **Grid Container**: Can also serve as grid container when needed

### Grid Container Component

A component that establishes a CSS Grid Layout:

- **Column Definition**: Uses CSS variables for column count and gutter
- **Responsive Columns**: Adapts column count at different breakpoints
- **Gutter Control**: Uses `--grid-gutter` CSS variable
- **Flexible**: Supports different column counts for different use cases

### Grid Item Component

A component for placing content within the grid:

- **Column Spanning**: Accepts props for start/end columns or column span
- **Responsive Placement**: Supports different placements at different breakpoints
- **Centering**: Can automatically center content within grid
- **Flexible Width**: Can span variable number of columns

---

## Component Layout Patterns

Common layout patterns that work with the grid system.

### Centered Content Pattern

Components that need to be centered within the grid:

- **Calculation**: Automatically calculates center columns based on element width and total columns
- **Responsive**: Centers correctly at each breakpoint
- **Reusable**: Can be applied to any component that needs centering

### Sidebar Layout Pattern

Components that create sidebar layouts:

- **Grid-Based**: Uses CSS Grid for sidebar and main content areas
- **Responsive**: Sidebar can stack on mobile, appear on desktop
- **Flexible**: Supports left or right sidebars, or both
- **Content Width**: Main content area respects grid columns

### Full-Width Section Pattern

Components that break out of content constraints:

- **Container Breakout**: Escapes content wrapper to use full site width
- **Background Elements**: Useful for full-width backgrounds, images, or sections
- **Content Nesting**: Can contain grid containers for internal content alignment
- **Padding Control**: Maintains content side padding for nested content

### Card Grid Pattern

Components that display items in a responsive grid:

- **Auto-Placement**: Uses CSS Grid auto-placement for flexible item arrangement
- **Responsive Columns**: Adjusts number of columns per row at breakpoints
- **Equal Heights**: Grid automatically creates equal-height rows
- **Gutter Consistency**: Uses grid gutter for consistent spacing

---

## Component Styling with CSS Variables

Components should leverage CSS variables for consistent, maintainable styling.

### Variable Usage in Components

- **Colors**: Use color variables (`--color-primary`, `--color-text`, etc.)
- **Spacing**: Use spacing variables (`--spacing-sm`, `--spacing-md`, etc.)
- **Typography**: Use typography variables (`--font-size-base`, `--line-height-base`, etc.)
- **Grid**: Use grid variables when components interact with grid system

### Component-Scoped Variables

Components can define their own variables that reference global variables:

```css
.component {
  --component-padding: var(--spacing-md);
  --component-border-color: var(--color-border);
  --component-background: var(--color-surface);
  
  padding: var(--component-padding);
  border-color: var(--component-border-color);
  background: var(--component-background);
}
```

### Theme Support

Components should work with theme variables for light/dark mode or brand variations:

- **Theme Variables**: Reference theme-aware variables rather than hardcoded colors
- **Fallbacks**: Provide sensible fallbacks for variables that might not be defined
- **Inheritance**: Allow component variables to inherit from parent theme context

---

## Component Composition with Grid

Build complex layouts by composing components within the grid system.

### Nested Grids

Components can contain their own grid systems:

- **Grid Within Grid**: Create grid containers inside grid items
- **Independent Columns**: Nested grids can have different column counts
- **Isolated Gutters**: Nested grids can use different gutter spacing when appropriate
- **Responsive Nesting**: Nested grids respond independently to breakpoints

### Component Grid Integration

Components should integrate seamlessly with the grid system:

- **Grid-Aware**: Components know how to place themselves in grid
- **Flexible Placement**: Components accept grid placement props or classes
- **Responsive Behavior**: Components adapt their grid usage at different breakpoints
- **Documentation**: Component docs should explain grid integration options

### Layout Component Hierarchy

Typical component hierarchy for page layouts:

1. **Container**: Site max-width container
2. **Content Wrapper**: Content side padding wrapper
3. **Grid Container**: CSS Grid Layout container
4. **Grid Items**: Individual content components placed in grid
5. **Nested Components**: Components that may contain their own grids or layouts
