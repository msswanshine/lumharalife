# Specification: Basic HTML Structure and Minimal Hamburger Navigation

## Goal
Create semantic HTML5 structure with a minimal hamburger menu navigation that slides in from the side, includes jump links to homepage sections and links to separate pages, and maintains a clean, tranquil aesthetic aligned with the Lumhara brand.

## User Stories
- As a visitor, I want to navigate easily between sections and pages so that I can find the information I need about Lumhara's services
- As a keyboard user, I want to navigate the menu using keyboard controls so that I can access all content without a mouse
- As a screen reader user, I want the navigation to be properly labeled and announced so that I understand the site structure and can navigate effectively

## Specific Requirements

**Semantic HTML5 Structure**
- Create `index.html` as single-page homepage with semantic sections: header, main, and sections for Philosophy, Offerings, Testimonials, Contact
- Create `about.html` as separate About Me page with semantic structure
- Use proper HTML5 semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Include proper document structure: `<!DOCTYPE html>`, `<html lang="en">`, `<head>` with meta tags, `<body>`
- Add section IDs for jump link navigation: `#philosophy`, `#offerings`, `#testimonials`, `#contact`

**Header with Logo and Hamburger Menu**
- Create header component using web component (`<lumhara-header>`)
- Position Lumhara logo on top left, linking to homepage (`index.html`)
- Position hamburger menu icon on top right corner
- Logo uses `lumhara_logo.png` image file
- Header is fixed or sticky at top of page
- Header maintains minimal, clean appearance with ample spacing

**Hamburger Menu Component**
- Create hamburger menu as web component (`<lumhara-nav-menu>`)
- Menu visible on all screen sizes (desktop, tablet, mobile)
- Hamburger icon toggles menu open/closed state
- Menu slides in from right side when opened, slides out when closed
- Menu overlays page content when open
- Menu includes navigation links: About Me (links to `about.html`), Philosophy (jump link to `#philosophy`), Offerings (jump link to `#offerings`), Testimonials (jump link to `#testimonials`), Contact (jump link to `#contact`)
- Exclude "Hero" and "Home" links (logo serves as home link)
- Menu styling aligns with tranquil, minimal aesthetic (watercolor/Japanese brushstroke feel)

**Web Component Implementation**
- Use Custom Elements API (native browser support, no framework)
- Create `<lumhara-header>` web component encapsulating header structure and logo
- Create `<lumhara-nav-menu>` web component encapsulating hamburger menu functionality
- Components use Shadow DOM for style encapsulation
- Components expose necessary attributes/properties for configuration
- Follow web component best practices: lifecycle callbacks, event handling, property observation

**Menu Interaction and Behavior**
- Vanilla JavaScript handles hamburger toggle functionality (open/close)
- Menu state managed within web component (open/closed)
- Clicking hamburger icon toggles menu visibility
- Clicking outside menu or on menu link closes menu
- Smooth scrolling implemented for jump links using `scrollIntoView` or similar
- Menu animation uses CSS transitions for slide-in/slide-out effect

**Accessibility Requirements**
- Hamburger button includes `aria-label="Toggle navigation menu"` and `aria-expanded` attribute (true/false)
- Menu container includes `role="navigation"` and `aria-label="Main navigation"`
- Menu links use proper semantic `<a>` tags with descriptive text
- Keyboard navigation: Tab key moves focus through menu items, Enter/Space activates links
- Focus management: When menu opens, focus moves to first menu item; when closed, focus returns to hamburger button
- Escape key closes menu and returns focus to hamburger button
- Screen reader announcements: Menu state changes announced (expanded/collapsed)
- Ensure color contrast meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)

**Responsive Design**
- Header and menu work seamlessly across desktop, tablet, and mobile screen sizes
- Hamburger menu visible and functional on all breakpoints
- Menu slide-in animation works consistently across devices
- Touch-friendly: Menu items have adequate touch target sizes (minimum 44x44px)
- Layout adapts to different viewport widths without horizontal scrolling

**Styling and Aesthetic Alignment**
- Menu styling incorporates tranquil, minimal aesthetic
- Use light cream/off-white background color (user preference)
- Use muted green accent color for active states or highlights (user preference)
- Menu design hints at watercolor/Japanese brushstroke aesthetic (subtle, not fully implemented in this spec)
- Ensure sufficient contrast between text and backgrounds (user requested more contrast)
- Typography choices align with site aesthetic (fonts not finalized, but should feel elegant and minimal)

## Visual Design

**`planning/visuals/lumhara_logo.png`**
- Stylized monochromatic flame outline with brushstroke-like texture
- White outline on black background provides high contrast
- Minimal design with nested inner flame shape
- Use as logo image in header, linking to homepage
- Consider inverting colors or adapting for light background if needed

**`planning/visuals/main_nav_and_hero_wireframe.png`**
- Header layout shows logo on left, navigation on right (treat as reference for positioning)
- Light beige background with subtle translucent watercolor-like shapes
- Navigation items positioned on right side of header
- Use as wireframe reference for header structure and layout
- Note: Current wireframe shows text links, but implement hamburger menu instead

**`planning/visuals/offerings_wireframe.png`**
- Shows overall page structure and section organization
- Light cream background color (user likes this)
- Muted green accents (user likes this color)
- Use as reference for overall page aesthetic and color palette
- Note: Focus on navigation structure, not offerings content in this spec

**`planning/visuals/philosophy.png`**
- Two-column layout structure
- Light cream background with good contrast for dark text
- Use as reference for page structure and section layout
- Note: Focus on navigation, not philosophy section content in this spec

**`planning/visuals/offerings_card_hover_state.png`**
- Shows card styling with rounded corners and subtle shadows
- Light background with muted green accents
- Use as reference for overall aesthetic and color usage
- Note: Focus on navigation component styling alignment, not card components

## Existing Code to Leverage

**Frontend Accessibility Standards (`agent-os/standards/frontend/accessibility.md`)**
- Follow WCAG 2.2 Level AA conformance requirements
- Use semantic HTML elements (`<nav>`, `<header>`, `<main>`, `<section>`)
- Implement proper ARIA attributes for navigation components
- Ensure keyboard navigation support and focus management
- Maintain proper heading hierarchy and document structure

**Frontend Component Standards (`agent-os/standards/frontend/components.md`)**
- Apply single responsibility principle to web components
- Design components for reusability and composability
- Keep component interfaces clear and well-documented
- Use encapsulation (Shadow DOM) for style isolation
- Follow consistent naming conventions for components

**Core Coding Principles (`agent-os/standards/global/core-principles.md`)**
- Keep functions small and focused (ideally < 10 lines, max 20 lines)
- Use descriptive variable and function names
- Extract complex logic into well-named functions
- Follow DRY (Don't Repeat Yourself) principles
- Use early returns and guard clauses for cleaner code

## Out of Scope
- Hero section content and styling (separate roadmap item)
- Footer component and content (separate roadmap item)
- Page content sections (Philosophy, Offerings, Testimonials, Contact content - separate roadmap items)
- Full watercolor/brushstroke styling implementation (will be applied in later roadmap item, menu should align with aesthetic direction)
- Font selection and typography system finalization (user not sold on fonts yet, use reasonable defaults)
- Newsletter signup functionality (separate roadmap item)
- Contact form implementation (separate roadmap item)
- About Me page content (separate roadmap item)
- Full responsive breakpoint system definition (focus on navigation working across sizes, detailed breakpoints in later work)
- Logo color adaptation or multiple logo variants (use provided logo as-is for now)

