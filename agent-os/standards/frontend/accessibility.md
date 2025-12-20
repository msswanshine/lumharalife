# Accessibility Standards (WCAG 2.2)

## Conformance Target
- **Level AA**: 🔴 Critical - All features must meet Level AA success criteria
- **Level AAA**: 🟡 Important - Strive for Level AAA where feasible

## Testing Tools
- **axe DevTools**: Automated testing during development
- **Lighthouse**: Performance and accessibility audits
- **WAVE Browser Extension**: Visual accessibility evaluation

---

## 1. Perceivable

Information and UI components must be presentable to users in ways they can perceive.

### 1.1 Text Alternatives (Level A)
- **Alt Text for Images**: All images must have descriptive `alt` attributes
  - Decorative images: `alt=""`
  - Informative images: Descriptive text explaining the image's purpose
  - Complex images: Consider `aria-describedby` or longdesc for detailed descriptions, or alts that are 100 characters or more
- **Form Labels**: All form inputs must have associated labels (`<label>` or `aria-label`), with a preference towards `<label>`

### 1.2 Time-based Media (Level A)
- **Captions**: Provide captions for all pre-recorded audio content
- **Audio Descriptions**: Provide audio descriptions for pre-recorded video content
- **Live Captions**: Provide captions for live audio content when possible

### 1.3 Adaptable (Level A)
- **Info and Relationships**: Use semantic HTML to convey structure
  - Use `<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`
  - Use proper heading hierarchy (h1-h6) without skipping levels
- **Meaningful Sequence**: Present content in a logical reading order
- **Sensory Characteristics**: Don't rely solely on shape, size, visual location, or sound

### 1.4 Distinguishable (Level AA - Critical)
- **Color Contrast**: 
  - Normal text: Minimum 4.5:1 contrast ratio
  - Large text (18pt+ or 14pt+ bold): Minimum 3:1 contrast ratio
  - Use tools: WebAIM Contrast Checker, axe DevTools
- **Text Resizing**: Text must be resizable up to 200% without loss of functionality
- **Images of Text**: Avoid using images of text; use actual text when possible
- **Text Spacing**: Ensure text spacing doesn't break functionality (line height, paragraph spacing, etc.)

---

## 2. Operable

UI components and navigation must be operable.

### 2.1 Keyboard Accessible (Level A)
- **Keyboard**: All functionality must be available via keyboard without requiring specific timings
- **No Keyboard Trap**: Users must be able to navigate away from all components using keyboard
- **Keyboard Shortcuts**: If custom shortcuts exist, they must not conflict with browser/OS shortcuts

### 2.2 Enough Time (Level A)
- **Timing Adjustable**: If time limits exist, allow users to turn off, adjust, or extend them
- **Pause, Stop, Hide**: Provide controls for auto-updating content (carousels, tickers, etc.)

### 2.3 Seizures and Physical Reactions (Level A)
- **Three Flashes or Below**: Content must not flash more than 3 times per second

### 2.4 Navigable (Level AA - Critical)
- **Skip Links**: Provide skip navigation links to bypass repetitive content and use `aria-live` to inform screen readers of the new context which they skipped to
- **Page Titled**: Each page must have a descriptive `<title>` tag
- **Focus Order**: Tab order must follow a logical sequence
- **Link Purpose**: Link text must be descriptive (avoid "click here", "read more"). If the designs have simple link text, add screen reader only context to the link text
- **Multiple Ways**: Provide multiple ways to locate pages (navigation, search, sitemap)
- **Headings and Labels**: Use descriptive headings and labels
- **Focus Visible**: Keyboard focus indicators must be clearly visible (minimum 2px outline)

### 2.5 Input Modalities (Level AA - Critical)
- **Pointer Gestures**: Don't require complex gestures (path-based, multi-point)
- **Pointer Cancellation**: Allow users to abort pointer operations
- **Label in Name**: Accessible names must contain the visible text
- **Motion Actuation**: Don't require device motion or user motion to operate

---

## 3. Understandable

Information and UI operation must be understandable.

### 3.1 Readable (Level AA - Critical)
- **Language of Page**: Specify page language with `<html lang="...">`
- **Language of Parts**: Specify language changes for content in different languages

### 3.2 Predictable (Level AA - Critical)
- **On Focus**: Don't change context when components receive focus
- **On Input**: Don't change context when users change form inputs
- **Consistent Navigation**: Navigation must be consistent across pages
- **Consistent Identification**: Components with the same functionality must be identified consistently

### 3.3 Input Assistance (Level AA - Critical)
- **Error Identification**: Clearly identify and describe input errors
- **Labels or Instructions**: Provide labels or instructions for inputs
- **Error Suggestion**: Provide suggestions for correcting errors when possible
- **Error Prevention**: For legal/financial transactions, allow users to review, confirm, and correct information

---

## 4. Robust

Content must be robust enough to be interpreted by assistive technologies.

### 4.1 Compatible (Level AA - Critical)
- **Parsing**: Use valid HTML (no duplicate IDs, properly nested elements)
- **Name, Role, Value**: All UI components must have accessible names, roles, and values
  - Use semantic HTML first
  - Use ARIA attributes when semantic HTML isn't sufficient
  - Ensure ARIA attributes are properly implemented (don't use `role="button"` on a `<button>`)

---

## ARIA Guidelines

### When to Use ARIA
- **Use semantic HTML first**: Prefer `<button>`, `<nav>`, `<main>`, etc. over ARIA
- **Enhance, don't replace**: Use ARIA to enhance complex components, not replace semantic HTML
- **Common ARIA patterns**:
  - `aria-label`: When visible label isn't sufficient
  - `aria-labelledby`: Reference existing element as label
  - `aria-describedby`: Additional descriptive information
  - `aria-expanded`: For collapsible content
  - `aria-hidden`: Hide decorative content from screen readers
  - `role`: When semantic HTML doesn't exist (e.g., `role="dialog"`)

### ARIA Best Practices
- **Don't overuse**: If semantic HTML works, use it instead
- **Test with screen readers**: Always verify ARIA implementations
- **Keep it simple**: Prefer simple ARIA over complex patterns

---

## Focus Management

### Dynamic Content
- **Modals**: Trap focus within modal, return focus to trigger on close
- **Single Page Apps**: Manage focus when route changes
- **Dynamic Updates**: Announce dynamic content changes with `aria-live` regions

### Focus Indicators
- **Visible Focus**: All interactive elements must have visible focus indicators
- **Custom Focus Styles**: If customizing, ensure 2px minimum outline
- **High Contrast**: Focus indicators must meet contrast requirements

---

## Testing Checklist

### Automated Testing (Run before commits)
- [ ] Run axe DevTools and fix all critical/important issues
- [ ] Run Lighthouse accessibility audit (target: 90+ score)
- [ ] Use WAVE extension to identify visual accessibility issues

### Manual Testing
- [ ] Navigate entire app using only keyboard (Tab, Enter, Space, Arrow keys)
- [ ] Test with screen reader (NVDA, JAWS, or VoiceOver)
- [ ] Verify all images have appropriate alt text
- [ ] Check color contrast ratios meet requirements
- [ ] Verify form labels are properly associated
- [ ] Test focus indicators are visible on all interactive elements
- [ ] Verify page titles are descriptive and unique

### Browser Testing
- [ ] Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test with browser zoom at 200%
- [ ] Test with high contrast mode enabled

---

## Resources

- [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools Documentation](https://www.deque.com/axe/devtools/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)

---

## Framework-Specific Notes

### React (when applicable)
- Use semantic HTML elements in JSX
- Ensure `aria-*` attributes are properly bound (not just strings)
- Test with React Testing Library's accessibility queries
- Use `aria-label` for icon-only buttons
- Consider using libraries like `react-aria` or `reach-ui` for complex components
