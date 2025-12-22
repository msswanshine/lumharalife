# Specification: Coming Soon Section

## Goal
Create a "Coming Soon" section on the homepage that showcases upcoming projects and products, starting with "Lumhara - Tide" (an emotional wave tracking app). The section features a prominent hero-style card with the app logo, description, and a unified newsletter signup form for all coming-soon updates.

## User Stories
- As a visitor, I want to see upcoming projects and products so that I can stay informed about new offerings
- As a visitor, I want to sign up for updates about coming soon items so that I don't miss their launch
- As a visitor, I want to understand what "Lumhara - Tide" is so that I can determine if I'm interested

## Specific Requirements

**Section Structure**
- Create new `<section id="coming-soon">` in `index.html`
- Position after offerings section, before testimonials section
- Regular HTML/CSS implementation (not web component for now)
- Follow existing section styling patterns (max-width 1200px, centered)

**Featured Hero-Style Card**
- Display prominently as a large, featured card (larger than offering cards)
- Include "Coming Soon" badge/marking to indicate status
- Visually distinct from other sections (hero-style presentation)
- Include:
  - Logo: lumhara-tide_logo.png
  - Title: "Lumhara - Tide"
  - Description: "An emotional wave tracking experience that helps you understand, time, and move with your unique emotional rhythms"
  - "Coming Soon" status indicator
  - Newsletter signup form

**Logo Display**
- Include lumhara-tide_logo.png image
- Position logo prominently (top of card or alongside content)
- Ensure logo is responsive and maintains aspect ratio
- Add proper alt text for accessibility

**Newsletter Signup Modal**
- Button/link that opens a modal when clicked
- Modal displays Google Form in an iframe
- Google Form URL: https://docs.google.com/forms/d/e/1FAIpQLSf_FQ3oPoLET6eaHx5Y-9hU8Ss9_cntyzWZbEaxKIiBQUxxrg/viewform?usp=dialog
- Modal features:
  - Fade-in animation when opened (CSS transition/opacity)
  - Fade-out animation when closed
  - Close button (X) in top-right corner
  - Click outside modal (on backdrop) to close
  - ESC key to close
  - Focus management (trap focus within modal, return focus to button on close)
  - Backdrop/overlay behind modal (semi-transparent, dark overlay)
  - Responsive iframe sizing (full width/height within modal, max dimensions)
  - Modal should be centered on screen
  - Modal should have max-width and max-height for readability
- Button text: "Sign Up for Updates" or similar
- Modal should be accessible:
  - ARIA attributes: aria-label, aria-modal="true", aria-labelledby
  - Keyboard navigation: Tab through close button and iframe
  - Screen reader support: Announce modal open/close
  - Focus trap: Keep focus within modal when open
  - Respect prefers-reduced-motion for animations

**Visual Design**
- Hero-style card that is larger and more prominent than offering cards
- Match tranquil, minimal aesthetic
- Use existing color scheme (light cream background, muted green accents)
- "Coming Soon" badge should be visually distinct
- Card should feel inviting and create anticipation

**Typography**
- Heading: "Coming Soon" or section title (h2) - Georgia font, matching existing section h2 styles
- Card title: "Lumhara - Tide" - Georgia font, larger than offering card titles
- Description: Lato font, matching existing section p styles
- Ensure proper font sizes for hierarchy and readability

**Styling and Aesthetic**
- Match tranquil, minimal aesthetic of the site
- Use existing color scheme (light cream background, muted green accents)
- Follow existing section padding and spacing patterns
- Use existing CSS variables for colors and spacing
- Ensure sufficient contrast for all text elements
- Card should feel peaceful yet create excitement for upcoming products

**Responsive Design**
- Desktop (1025px+): Large featured card, full-width or large card layout
- Tablet (769px-1024px): Featured card with adjusted spacing
- Mobile (max-width 768px): Stacked layout, logo and content
- Follow same responsive patterns as other sections
- Ensure text remains readable on all screen sizes
- Maintain proper spacing and padding across breakpoints
- Logo should scale appropriately on all screen sizes

**Accessibility Requirements**
- All text must meet WCAG AA contrast standards
- Proper semantic HTML structure (section, h2, article or appropriate card element)
- Logo image must have descriptive alt text
- Modal must have proper ARIA attributes (aria-label, aria-modal, aria-labelledby)
- Maintain keyboard navigation compatibility
- Proper heading hierarchy
- Modal button must be keyboard accessible and have visible focus states
- Focus management: trap focus within modal when open, return focus to trigger button when closed
- Modal backdrop must be keyboard accessible (can close with ESC key)
- Screen reader announcements when modal opens/closes

## Visual Design

Logo available: `lumhara-tide_logo.png` (stylized wave graphic on black background)

Design should:
- Match the minimal, tranquil aesthetic seen in existing sections
- Use light cream background with muted green accents
- Featured card should stand out visually (larger, more prominent)
- "Coming Soon" badge should be clear and visible
- Newsletter form should be inviting and easy to use

## Existing Code to Leverage

**Section Styling (`css/styles.css`)**
- Use existing section styles with max-width 1200px and centered layout
- Follow existing padding patterns (var(--spacing-xl) var(--spacing-md))
- Use existing typography choices (Georgia for h2, Lato for body)
- Use existing CSS variables for colors and spacing
- Follow same responsive design patterns with media queries
- Reference featured offer styling from offerings section for hero-style card inspiration

**HTML Structure (`index.html`)**
- Create new `<section id="coming-soon">` after offerings section
- Follow same semantic HTML5 structure patterns
- Maintain consistency with other sections

**Modal Implementation**
- Use vanilla JavaScript for modal functionality
- Modal HTML structure: backdrop, modal container, close button, iframe
- JavaScript functions: openModal(), closeModal(), handleEscapeKey(), trapFocus()
- CSS for modal: positioning, backdrop, animations, responsive sizing
- Reference accessibility standards for modal implementation

**Logo**
- Copy lumhara-tide_logo.png to `assets/images/` directory
- Reference from planning visuals location

## Out of Scope
- Backend form submission functionality (handled by Google Forms)
- Email service integration (handled by Google Forms)
- Multiple coming soon items (for now, just Lumhara - Tide)
- Complex animations beyond fade-in/out
- Web component implementation (using regular HTML/CSS/JavaScript)
- Image upload or management system
- Social sharing features
- Print-specific styling
- Form validation (handled by Google Forms)

