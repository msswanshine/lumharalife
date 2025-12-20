# Task Breakdown: Basic HTML Structure and Minimal Hamburger Navigation

## Overview
Total Tasks: 4 task groups, 20+ sub-tasks

## Task List

### HTML Structure & Foundation

#### Task Group 1: Semantic HTML5 Structure
**Dependencies:** None

- [ ] 1.0 Complete HTML structure foundation
  - [ ] 1.1 Write 2-4 focused tests for HTML structure and accessibility
    - Test semantic HTML elements are present (`<header>`, `<nav>`, `<main>`, `<section>`)
    - Test proper document structure (`<!DOCTYPE html>`, `<html lang="en">`)
    - Test section IDs exist for jump links (`#philosophy`, `#offerings`, `#testimonials`, `#contact`)
    - Limit to 2-4 highly focused tests maximum
  - [ ] 1.2 Create `index.html` homepage structure
    - Add proper document structure: `<!DOCTYPE html>`, `<html lang="en">`, `<head>` with meta tags
    - Create semantic sections: `<header>`, `<main>` with placeholder sections for Philosophy, Offerings, Testimonials, Contact
    - Add section IDs: `id="philosophy"`, `id="offerings"`, `id="testimonials"`, `id="contact"`
    - Include placeholder content for each section (minimal text for structure testing)
  - [ ] 1.3 Create `about.html` page structure
    - Add proper document structure matching `index.html`
    - Create semantic structure: `<header>`, `<main>` with placeholder content
    - Ensure consistent structure with homepage
  - [ ] 1.4 Set up basic file structure and assets
    - Create `assets/` directory for images and styles
    - Copy `lumhara_logo.png` to `assets/images/` from `planning/visuals/`
    - Create `css/` directory for stylesheets
    - Create `js/` directory for JavaScript files
  - [ ] 1.5 Ensure HTML structure tests pass
    - Run ONLY the 2-4 tests written in 1.1
    - Verify semantic HTML structure is correct
    - Verify section IDs are present and valid
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- The 2-4 tests written in 1.1 pass
- Both `index.html` and `about.html` have proper semantic HTML5 structure
- Section IDs are present and correctly formatted
- Logo image file is accessible in assets directory

### Web Components Development

#### Task Group 2: Header and Navigation Web Components
**Dependencies:** Task Group 1

- [ ] 2.0 Complete web components for header and navigation
  - [ ] 2.1 Write 2-6 focused tests for web component functionality
    - Test `<lumhara-header>` component renders correctly
    - Test `<lumhara-nav-menu>` component renders and toggles
    - Test logo links to homepage
    - Test menu slide-in/slide-out animation triggers
    - Test smooth scrolling for jump links
    - Limit to 2-6 highly focused tests maximum
  - [ ] 2.2 Create `<lumhara-header>` web component
    - Use Custom Elements API (extend `HTMLElement`)
    - Implement Shadow DOM for style encapsulation
    - Include logo image (`lumhara_logo.png`) positioned on left
    - Make logo link to `index.html`
    - Include hamburger menu button on right
    - Add proper ARIA attributes: `aria-label` for logo link
    - Follow web component lifecycle callbacks (`connectedCallback`, `disconnectedCallback`)
  - [ ] 2.3 Create `<lumhara-nav-menu>` web component
    - Use Custom Elements API (extend `HTMLElement`)
    - Implement Shadow DOM for style encapsulation
    - Create hamburger icon button with `aria-label="Toggle navigation menu"` and `aria-expanded` attribute
    - Create menu container with `role="navigation"` and `aria-label="Main navigation"`
    - Include navigation links: Philosophy (`#philosophy`), Offerings (`#offerings`), Testimonials (`#testimonials`), About Me (`about.html`), Contact (`#contact`)
    - Implement menu state management (open/closed)
    - Add click handler for hamburger toggle
    - Add click handlers for menu links (close menu on click)
    - Implement smooth scrolling for jump links using `scrollIntoView({ behavior: 'smooth' })`
  - [ ] 2.4 Implement menu slide animation
    - Add CSS transitions for slide-in from right side
    - Add CSS transitions for slide-out to right side
    - Ensure menu overlays page content when open
    - Add backdrop/overlay behind menu when open (optional, for better UX)
  - [ ] 2.5 Implement keyboard navigation and accessibility
    - Add keyboard event handlers: Tab navigation through menu items
    - Add Escape key handler to close menu and return focus to hamburger button
    - Implement focus management: move focus to first menu item when opened, return to hamburger button when closed
    - Ensure all interactive elements are keyboard accessible (Enter/Space activation)
    - Add proper ARIA states (`aria-expanded` updates on toggle)
  - [ ] 2.6 Register web components
    - Create `js/components.js` or similar file to define and register components
    - Use `customElements.define()` to register `<lumhara-header>` and `<lumhara-nav-menu>`
    - Include component files in HTML (`<script>` tags)
    - Ensure components load and render correctly
  - [ ] 2.7 Ensure web component tests pass
    - Run ONLY the 2-6 tests written in 2.1
    - Verify components render and function correctly
    - Verify menu toggle works
    - Verify smooth scrolling works
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- The 2-6 tests written in 2.1 pass
- Both web components render correctly
- Menu slides in from right and slides out correctly
- Keyboard navigation works (Tab, Enter, Escape)
- Smooth scrolling works for jump links
- ARIA attributes are properly implemented

### Styling & Responsive Design

#### Task Group 3: CSS Styling and Responsive Layout
**Dependencies:** Task Group 2

- [ ] 3.0 Complete styling and responsive design
  - [ ] 3.1 Write 2-4 focused tests for responsive behavior and styling
    - Test header displays correctly on mobile, tablet, desktop
    - Test menu is accessible and functional on all screen sizes
    - Test touch target sizes meet minimum 44x44px requirement
    - Limit to 2-4 highly focused tests maximum
  - [ ] 3.2 Create base CSS stylesheet
    - Set up CSS variables for colors (light cream background, muted green accent)
    - Add base typography styles (elegant, minimal feel - fonts not finalized, use reasonable defaults)
    - Add CSS reset or normalize styles
    - Create base layout styles
  - [ ] 3.3 Style header component
    - Position header as fixed or sticky at top
    - Style logo on left with proper spacing
    - Style hamburger icon on right with proper spacing
    - Ensure minimal, clean appearance with ample whitespace
    - Match wireframe reference: `planning/visuals/main_nav_and_hero_wireframe.png`
    - Use light cream/off-white background color (user preference)
  - [ ] 3.4 Style navigation menu component
    - Style menu container with tranquil, minimal aesthetic
    - Use light cream/off-white background with muted green accents (user preferences)
    - Ensure sufficient contrast between text and backgrounds (user requested more contrast)
    - Add subtle watercolor/Japanese brushstroke hints (not full implementation, just alignment with aesthetic direction)
    - Style menu links with adequate spacing and touch targets (minimum 44x44px)
    - Add hover/focus states for menu items
    - Ensure menu styling aligns with overall site aesthetic
  - [ ] 3.5 Implement responsive design
    - Ensure header and menu work on mobile (320px - 768px)
    - Ensure header and menu work on tablet (768px - 1024px)
    - Ensure header and menu work on desktop (1024px+)
    - Test menu slide animation works consistently across all breakpoints
    - Ensure no horizontal scrolling issues
    - Verify touch targets are adequate on mobile devices
  - [ ] 3.6 Style page sections (minimal placeholder styling)
    - Add basic section styling for Philosophy, Offerings, Testimonials, Contact sections
    - Ensure sections have proper spacing and layout
    - Use light cream background color consistently
    - Add placeholder content styling (minimal, just for structure)
    - Note: Full content styling is out of scope (separate roadmap items)
  - [ ] 3.7 Ensure styling and responsive tests pass
    - Run ONLY the 2-4 tests written in 3.1
    - Verify responsive behavior works correctly
    - Verify styling matches aesthetic requirements
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- The 2-4 tests written in 3.1 pass
- Header and menu are styled with tranquil, minimal aesthetic
- Responsive design works across all screen sizes
- Color contrast meets WCAG AA standards (4.5:1 for normal text)
- Touch targets meet minimum 44x44px requirement

### Testing & Accessibility Verification

#### Task Group 4: Test Review & Accessibility Audit
**Dependencies:** Task Groups 1-3

- [ ] 4.0 Review tests and verify accessibility compliance
  - [ ] 4.1 Review tests from Task Groups 1-3
    - Review the 2-4 tests written in Task 1.1 (HTML structure)
    - Review the 2-6 tests written in Task 2.1 (web components)
    - Review the 2-4 tests written in Task 3.1 (styling/responsive)
    - Total existing tests: approximately 6-14 tests
  - [ ] 4.2 Perform accessibility audit
    - Verify ARIA attributes are correctly implemented (hamburger button, menu container, links)
    - Test keyboard navigation: Tab, Enter, Space, Escape keys
    - Test focus management: focus moves correctly when menu opens/closes
    - Verify color contrast meets WCAG AA standards (use WebAIM Contrast Checker or similar)
    - Test with screen reader (or verify ARIA announcements work)
    - Verify semantic HTML structure is correct
  - [ ] 4.3 Write up to 6 additional strategic tests maximum
    - Add integration tests for menu interaction flow (open → navigate → close)
    - Add accessibility tests for keyboard navigation
    - Add tests for focus management behavior
    - Add tests for smooth scrolling functionality
    - Focus on end-to-end user workflows
    - Do NOT write exhaustive coverage for all scenarios
  - [ ] 4.4 Run feature-specific tests and verify functionality
    - Run ONLY tests related to this spec's feature (tests from 1.1, 2.1, 3.1, and 4.3)
    - Expected total: approximately 12-20 tests maximum
    - Do NOT run the entire application test suite
    - Verify all critical navigation workflows pass
    - Verify accessibility requirements are met

**Acceptance Criteria:**
- All feature-specific tests pass (approximately 12-20 tests total)
- Accessibility audit passes (WCAG 2.2 Level AA compliance)
- Keyboard navigation works correctly
- Focus management works correctly
- Color contrast meets standards
- No more than 6 additional tests added when filling in testing gaps

## Execution Order

Recommended implementation sequence:
1. HTML Structure & Foundation (Task Group 1)
2. Web Components Development (Task Group 2)
3. Styling & Responsive Design (Task Group 3)
4. Testing & Accessibility Verification (Task Group 4)

## Notes

- This is a frontend-only feature (no backend/database required)
- Web components use native Custom Elements API (no framework dependencies)
- Visual references available in `planning/visuals/` directory
- Logo file: `planning/visuals/lumhara_logo.png` (copy to `assets/images/`)
- Focus on navigation structure and functionality; content sections are placeholders
- Full watercolor/brushstroke styling will be applied in later roadmap item
- Font selection is not finalized; use reasonable defaults that feel elegant and minimal

