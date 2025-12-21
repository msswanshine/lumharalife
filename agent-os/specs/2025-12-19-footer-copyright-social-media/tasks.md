# Task Breakdown: Footer with Copyright and Social Media

## Overview
Total Tasks: 3 task groups, 15+ sub-tasks

## Task List

### HTML Structure & Content

#### Task Group 1: Footer HTML Structure and Content
**Dependencies:** None

- [x] 1.0 Complete footer HTML structure and content
  - [ ] 1.1 Write 2-4 focused tests for footer structure and accessibility
    - Test semantic HTML footer element is present
    - Test newsletter signup form structure exists
    - Test contact info section exists
    - Test social media links are present
    - Limit to 2-4 highly focused tests maximum
  - [ ] 1.2 Create newsletter signup section HTML
    - Add section above footer with newsletter signup form
    - Include email input field with proper label
    - Include submit button
    - Add proper form structure and accessibility attributes
    - Use semantic HTML (`<section>`, `<form>`, `<label>`, `<input>`, `<button>`)
  - [ ] 1.3 Create contact info section HTML
    - Add section above footer (or alongside newsletter signup)
    - Include contact information display (email, phone, etc.)
    - Use semantic HTML structure
    - Ensure information is easily readable
  - [ ] 1.4 Create footer HTML structure
    - Add semantic `<footer>` element
    - Include copyright text: "© 2025 Lumhara" (or dynamic year)
    - Add container for social media links
    - Add footer links section: Privacy, Terms & Conditions, Accessibility
    - Use semantic HTML structure
  - [ ] 1.5 Add footer to both pages
    - Add footer structure to `index.html`
    - Add footer structure to `about.html`
    - Ensure consistent footer across pages
  - [ ] 1.6 Ensure footer structure tests pass
    - Run ONLY the 2-4 tests written in 1.1
    - Verify semantic HTML structure is correct
    - Verify all required elements are present
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- The 2-4 tests written in 1.1 pass
- Newsletter signup section HTML is present and properly structured
- Contact info section HTML is present
- Footer HTML structure is complete with copyright, social links, and footer links
- Footer appears on both index.html and about.html

### Styling & Font Awesome Integration

#### Task Group 2: Footer Styling and Social Media Icons
**Dependencies:** Task Group 1

- [x] 2.0 Complete footer styling and icon integration
  - [ ] 2.1 Write 2-3 focused tests for styling and responsive behavior
    - Test footer displays correctly on mobile, tablet, desktop
    - Test Font Awesome icons load and display
    - Limit to 2-3 highly focused tests maximum
  - [ ] 2.2 Integrate Font Awesome
    - Add Font Awesome CSS link to HTML files (via CDN)
    - Verify Font Awesome loads correctly
    - Identify correct icon classes for Substack, Instagram, YouTube
  - [ ] 2.3 Style newsletter signup section
    - Style form to match tranquil, minimal aesthetic
    - Use Lato font for form elements
    - Ensure proper spacing and layout
    - Style input field and submit button
    - Ensure form is accessible (focus states, etc.)
    - Match site color scheme (light cream background, muted green accents)
  - [ ] 2.4 Style contact info section
    - Style contact information display
    - Ensure readability and proper spacing
    - Match site aesthetic
    - Use consistent typography (Lato for body text)
  - [ ] 2.5 Style footer section
    - Style footer with subtle difference from header (lighter background, subtle border, or other)
    - Style copyright text (left side or top if stacked)
    - Style social media links with Font Awesome icons (single color)
    - Style footer links (Privacy, Terms, Accessibility)
    - Ensure proper spacing and layout
    - Use muted green accent color for links/icons
    - Ensure sufficient contrast for accessibility
  - [ ] 2.6 Implement responsive footer design
    - Ensure footer works on mobile (320px - 768px) - consider stacked layout
    - Ensure footer works on tablet (768px - 1024px)
    - Ensure footer works on desktop (1024px+)
    - Ensure newsletter signup and contact info stack appropriately on mobile
    - Ensure social media icons have adequate touch targets (minimum 44x44px)
  - [ ] 2.7 Ensure styling tests pass
    - Run ONLY the 2-3 tests written in 2.1
    - Verify responsive behavior works correctly
    - Verify Font Awesome icons display correctly
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- The 2-3 tests written in 2.1 pass
- Font Awesome icons load and display correctly (Substack, Instagram, YouTube)
- Footer styling matches tranquil, minimal aesthetic with subtle difference from header
- Responsive design works across all screen sizes
- Social media icons are single color and properly sized
- Touch targets meet minimum 44x44px requirement

### Accessibility & Final Polish

#### Task Group 3: Accessibility Verification and Polish
**Dependencies:** Task Groups 1-2

- [x] 3.0 Complete accessibility verification and polish
  - [ ] 3.1 Review tests from Task Groups 1-2
    - Review the 2-4 tests written in Task 1.1 (HTML structure)
    - Review the 2-3 tests written in Task 2.1 (styling/responsive)
    - Total existing tests: approximately 4-7 tests
  - [ ] 3.2 Perform accessibility audit
    - Verify all links have proper ARIA labels
    - Verify social media links have descriptive text (e.g., "Follow on Instagram")
    - Test keyboard navigation: Tab through all interactive elements
    - Verify form inputs have associated labels
    - Verify color contrast meets WCAG AA standards
    - Test with screen reader (or verify ARIA announcements work)
    - Verify semantic HTML structure is correct
  - [ ] 3.3 Add missing accessibility enhancements
    - Add ARIA labels to social media links if needed
    - Ensure all links are keyboard accessible
    - Add proper focus states for all interactive elements
    - Verify form accessibility (labels, error states if applicable)
  - [ ] 3.4 Final polish and verification
    - Verify footer appears correctly on both pages
    - Verify all links work (can be placeholder URLs for now)
    - Verify Font Awesome icons display correctly
    - Verify responsive behavior on multiple screen sizes
    - Verify styling matches aesthetic requirements
    - Check for any visual inconsistencies

**Acceptance Criteria:**
- All accessibility requirements are met (WCAG 2.2 Level AA compliance)
- All links are keyboard accessible
- Social media links have proper ARIA labels
- Form is accessible with proper labels
- Color contrast meets standards
- Footer displays correctly on all pages and screen sizes

## Execution Order

Recommended implementation sequence:
1. HTML Structure & Content (Task Group 1)
2. Styling & Font Awesome Integration (Task Group 2)
3. Accessibility & Final Polish (Task Group 3)

## Notes

- This is a frontend-only feature (no backend required)
- Newsletter signup form is UI only (no submission functionality needed)
- Footer links can point to placeholder pages (actual content is out of scope)
- Font Awesome can be included via CDN
- Social media icons should be single color (use CSS to override Font Awesome colors if needed)
- Footer should have subtle styling difference from header (experiment with lighter background, subtle border, or other subtle changes)
- Follow existing color scheme and typography (Georgia for headings, Lato for body)

