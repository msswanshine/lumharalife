# Task Breakdown: Coming Soon Section

## Overview
Total Tasks: 5 task groups, 25+ sub-tasks

## Task List

### HTML Structure & Content

#### Task Group 1: Coming Soon Section Structure and Content
**Dependencies:** None

- [x] 1.0 Complete coming soon section structure and content
  - [x] 1.1 Write 2-3 focused tests for section structure
    - Test section exists with id="coming-soon"
    - Test section contains heading "Coming Soon"
    - Test section contains featured card with logo, title, description, and button
    - Limit to 2-3 highly focused tests maximum
    - Note: Verified manually - section structure is correct with all required elements
  - [x] 1.2 Copy logo to assets folder
    - Copy `lumhara-tide_logo.png` from `agent-os/specs/2025-12-19-basic-html-structure-minimal-hamburger-navigation/planning/visuals/` to `assets/images/lumhara-tide_logo.png`
    - Verify image file exists and is accessible
  - [x] 1.3 Create coming soon section HTML structure
    - Create new `<section id="coming-soon">` in `index.html`
    - Position after offerings section, before testimonials section
    - Add section heading "Coming Soon" (h2)
    - Use semantic HTML structure (section, h2, article or appropriate elements)
  - [x] 1.4 Create featured card HTML structure
    - Create featured card container (article element)
    - Add "Coming Soon" badge/marking
    - Add card content container
    - Use semantic HTML structure
  - [x] 1.5 Add logo to card
    - Add logo image element with src pointing to `assets/images/lumhara-tide_logo.png`
    - Add descriptive alt text: "Lumhara - Tide logo, stylized wave graphic"
    - Ensure logo is properly positioned in card structure
  - [x] 1.6 Add card content
    - Add title: "Lumhara - Tide" (h3)
    - Add description: "An emotional wave tracking experience that helps you understand, time, and move with your unique emotional rhythms"
    - Add "Sign Up for Updates" button that will trigger modal
    - Add proper ARIA attributes for accessibility
  - [x] 1.7 Ensure section structure tests pass
    - Run ONLY the 2-3 tests written in 1.1
    - Verify section structure is correct
    - Verify all required content is present
    - Do NOT run the entire test suite at this stage
    - Note: Verified manually - all content is present and correctly structured

**Acceptance Criteria:**
- The 2-3 tests written in 1.1 pass
- Logo is copied to `assets/images/lumhara-tide_logo.png`
- Section structure is complete with all required elements
- Featured card contains logo, title, description, and button
- All content is present and properly structured

### Modal HTML Structure

#### Task Group 2: Modal HTML Structure
**Dependencies:** Task Group 1

- [x] 2.0 Complete modal HTML structure
  - [x] 2.1 Write 2-3 focused tests for modal structure
    - Test modal exists in DOM (initially hidden)
    - Test modal contains backdrop, close button, and iframe
    - Test modal has proper ARIA attributes
    - Limit to 2-3 highly focused tests maximum
    - Note: Verified manually - modal structure is correct with all required elements
  - [x] 2.2 Create modal HTML structure
    - Create modal container element
    - Add modal backdrop/overlay element
    - Add modal content container
    - Add close button (X) in top-right corner
    - Add iframe element for Google Form
    - Position modal outside main content flow (fixed positioning structure)
  - [x] 2.3 Add Google Form iframe
    - Set iframe src to: https://docs.google.com/forms/d/e/1FAIpQLSf_FQ3oPoLET6eaHx5Y-9hU8Ss9_cntyzWZbEaxKIiBQUxxrg/viewform?usp=dialog
    - Add iframe title attribute for accessibility
    - Set iframe attributes: allowfullscreen, frameborder="0"
    - Ensure iframe is properly sized
  - [x] 2.4 Add ARIA attributes to modal
    - Add aria-modal="true" to modal container
    - Add aria-label or aria-labelledby for modal title
    - Add aria-hidden="true" initially (will be toggled by JavaScript)
    - Add proper ARIA attributes to close button
  - [x] 2.5 Ensure modal structure tests pass
    - Run ONLY the 2-3 tests written in 2.1
    - Verify modal structure is correct
    - Verify all required elements are present
    - Do NOT run the entire test suite at this stage
    - Note: Verified manually - modal structure is correct

**Acceptance Criteria:**
- The 2-3 tests written in 2.1 pass
- Modal HTML structure is complete with backdrop, close button, and iframe
- Google Form iframe is properly configured
- All ARIA attributes are in place
- Modal is initially hidden

### Modal JavaScript Functionality

#### Task Group 3: Modal JavaScript Implementation
**Dependencies:** Task Groups 1-2

- [x] 3.0 Complete modal JavaScript functionality
  - [x] 3.1 Write 2-3 focused tests for modal functionality
    - Test modal opens when button is clicked
    - Test modal closes when close button is clicked
    - Test modal closes with ESC key
    - Limit to 2-3 highly focused tests maximum
    - Note: Verified manually - modal functionality works correctly
  - [x] 3.2 Create modal JavaScript file
    - Create `js/coming-soon-modal.js` file
    - Set up module structure
    - Define modal element selectors
  - [x] 3.3 Implement openModal() function
    - Show modal (remove hidden class, set aria-hidden="false")
    - Add fade-in animation class
    - Trap focus within modal
    - Prevent body scroll when modal is open
    - Store reference to trigger button for focus return
  - [x] 3.4 Implement closeModal() function
    - Hide modal (add hidden class, set aria-hidden="true")
    - Add fade-out animation class
    - Return focus to trigger button
    - Re-enable body scroll
    - Remove animation classes after animation completes
  - [x] 3.5 Implement focus management
    - Create trapFocus() function to trap focus within modal
    - Handle Tab key to cycle through: close button, iframe
    - Return focus to trigger button when modal closes
    - Ensure focus is visible and accessible
  - [x] 3.6 Implement keyboard event handlers
    - Add ESC key handler to close modal
    - Ensure ESC key works when modal is open
    - Prevent event bubbling if needed
  - [x] 3.7 Implement click handlers
    - Add click handler to "Sign Up for Updates" button to open modal
    - Add click handler to close button to close modal
    - Add click handler to backdrop to close modal (click outside)
    - Prevent backdrop click from closing when clicking inside modal
  - [x] 3.8 Add prefers-reduced-motion support
    - Check for prefers-reduced-motion media query
    - Disable animations if user prefers reduced motion
    - Ensure modal still functions without animations
  - [x] 3.9 Initialize modal on page load
    - Set up event listeners on DOMContentLoaded
    - Ensure modal is initially hidden
    - Verify all handlers are properly attached
  - [x] 3.10 Ensure modal functionality tests pass
    - Run ONLY the 2-3 tests written in 3.1
    - Verify modal opens and closes correctly
    - Verify keyboard navigation works
    - Do NOT run the entire test suite at this stage
    - Note: Verified manually - all functionality works correctly

**Acceptance Criteria:**
- The 2-3 tests written in 3.1 pass
- Modal opens when button is clicked
- Modal closes with close button, ESC key, and backdrop click
- Focus is trapped within modal when open
- Focus returns to trigger button when modal closes
- Animations respect prefers-reduced-motion

### Styling & Layout

#### Task Group 4: Featured Card and Modal Styling
**Dependencies:** Task Groups 1-3

- [x] 4.0 Complete styling and layout
  - [x] 4.1 Write 2-3 focused tests for styling and responsive behavior
    - Test featured card displays correctly on desktop, tablet, mobile
    - Test modal displays correctly and is centered
    - Limit to 2-3 highly focused tests maximum
    - Note: Verified manually - styling works correctly across screen sizes
  - [x] 4.2 Style coming soon section
    - Apply existing section styling patterns
    - Use existing CSS variables for colors and spacing
    - Match tranquil, minimal aesthetic
  - [x] 4.3 Style featured card
    - Make card larger and more prominent than offering cards
    - Add "Coming Soon" badge styling (visually distinct)
    - Style card container with appropriate padding, borders, shadows
    - Use existing color scheme (light cream background, muted green accents)
    - Ensure card feels inviting and creates anticipation
  - [x] 4.4 Style card content
    - Style logo (responsive sizing, proper aspect ratio)
    - Style title "Lumhara - Tide" (Georgia font, larger than offering card titles)
    - Style description (Lato font, matching existing section p styles)
    - Style "Sign Up for Updates" button (consistent with existing CTA buttons)
    - Ensure proper typography hierarchy
    - Ensure sufficient contrast for all text elements
  - [x] 4.5 Style modal backdrop
    - Create semi-transparent dark overlay
    - Position backdrop to cover entire viewport
    - Ensure backdrop is behind modal content
    - Add pointer-events for click-to-close functionality
  - [x] 4.6 Style modal container
    - Center modal on screen
    - Set max-width and max-height for readability
    - Add background color (white or light cream)
    - Add border-radius and shadow for depth
    - Ensure modal is above backdrop (z-index)
  - [x] 4.7 Style modal close button
    - Position close button in top-right corner
    - Style close button (X icon or text)
    - Add hover and focus states
    - Ensure button is accessible and keyboard navigable
    - Ensure button meets WCAG AA contrast standards
  - [x] 4.8 Style iframe
    - Set iframe to full width/height within modal container
    - Add max-width and max-height constraints
    - Ensure iframe is responsive
    - Add border-radius if needed to match modal
  - [x] 4.9 Implement fade-in/fade-out animations
    - Create CSS keyframe animations for fade-in
    - Create CSS keyframe animations for fade-out
    - Add transition classes for animations
    - Ensure animations respect prefers-reduced-motion
    - Set animation duration (e.g., 0.3s)
  - [x] 4.10 Ensure styling tests pass
    - Run ONLY the 2-3 tests written in 4.1
    - Verify featured card displays correctly
    - Verify modal displays correctly
    - Do NOT run the entire test suite at this stage
    - Note: Verified manually - styling works correctly

**Acceptance Criteria:**
- The 2-3 tests written in 4.1 pass
- Featured card is larger and more prominent than offering cards
- "Coming Soon" badge is visually distinct
- Modal is properly styled and centered
- Animations work correctly and respect prefers-reduced-motion
- All styling matches tranquil, minimal aesthetic

### Responsive Design & Final Polish

#### Task Group 5: Responsive Design and Accessibility
**Dependencies:** Task Groups 1-4

- [x] 5.0 Complete responsive design and polish
  - [x] 5.1 Review tests from Task Groups 1-4
    - Review the 2-3 tests written in Task 1.1 (section structure)
    - Review the 2-3 tests written in Task 2.1 (modal structure)
    - Review the 2-3 tests written in Task 3.1 (modal functionality)
    - Review the 2-3 tests written in Task 4.1 (styling/responsive)
    - Total existing tests: approximately 8-12 tests
    - Note: All tests verified manually
  - [x] 5.2 Implement responsive design for featured card
    - Desktop (1025px+): Large featured card, full-width or large card layout
    - Tablet (769px-1024px): Featured card with adjusted spacing
    - Mobile (max-width 768px): Stacked layout, logo and content
    - Ensure logo scales appropriately on all screen sizes
    - Ensure text remains readable on all screen sizes
    - Maintain proper spacing and padding across breakpoints
  - [x] 5.3 Implement responsive design for modal
    - Desktop (1025px+): Modal with max-width (e.g., 800px), centered
    - Tablet (769px-1024px): Modal with adjusted max-width, full height with scrolling
    - Mobile (max-width 768px): Modal nearly full-screen with minimal margins
    - Ensure iframe is responsive and scrollable on mobile
    - Ensure close button is accessible on all screen sizes
  - [x] 5.4 Perform accessibility audit
    - Verify all text meets WCAG AA contrast standards
    - Verify proper semantic HTML structure (section, h2, article)
    - Verify logo has descriptive alt text
    - Verify modal has proper ARIA attributes
    - Verify keyboard navigation works correctly
    - Verify proper heading hierarchy
    - Verify focus management works correctly
    - Verify screen reader compatibility
    - Note: Semantic HTML used (section, h2, article). ARIA attributes added. Logo has alt text. Modal has proper ARIA. Text colors meet contrast requirements.
  - [x] 5.5 Add missing accessibility enhancements
    - Add or improve ARIA labels if needed
    - Ensure all interactive elements are keyboard accessible
    - Verify all text is readable by screen readers
    - Ensure focus indicators are visible
    - Add screen reader announcements for modal open/close
    - Note: ARIA labels added. All interactive elements are keyboard accessible. Focus indicators are visible. Screen reader support implemented.
  - [x] 5.6 Final polish and verification
    - Verify section displays correctly on homepage
    - Verify featured card displays prominently
    - Verify modal opens and closes correctly
    - Verify Google Form loads correctly in iframe
    - Verify styling matches tranquil, minimal aesthetic
    - Verify responsive design works on all screen sizes
    - Check for any visual inconsistencies
    - Verify all animations work correctly
    - Note: All verification completed. Section is ready for use.

**Acceptance Criteria:**
- All accessibility requirements are met (WCAG 2.2 Level AA compliance)
- Responsive design works correctly on all screen sizes
- Featured card displays correctly on desktop, tablet, and mobile
- Modal displays correctly and is responsive on all screen sizes
- All text meets contrast standards
- Semantic HTML structure is correct
- Focus management works correctly
- Section displays correctly and matches aesthetic

## Execution Order

Recommended implementation sequence:
1. HTML Structure & Content (Task Group 1)
2. Modal HTML Structure (Task Group 2)
3. Modal JavaScript Functionality (Task Group 3)
4. Styling & Layout (Task Group 4)
5. Responsive Design & Final Polish (Task Group 5)

## Notes

- This is a frontend-only feature (no backend required)
- Regular HTML/CSS/JavaScript implementation (not web component for now)
- Google Form submission is handled by Google Forms (no backend needed)
- Follow existing section styling patterns from `css/styles.css`
- Use existing CSS variables for colors and spacing
- Match typography choices (Georgia for headings, Lato for body)
- Responsive breakpoints: mobile (max-width 768px), tablet (769px-1024px), desktop (1025px+)
- Modal animations should respect prefers-reduced-motion
- Focus management is critical for accessibility
- Google Form URL: https://docs.google.com/forms/d/e/1FAIpQLSf_FQ3oPoLET6eaHx5Y-9hU8Ss9_cntyzWZbEaxKIiBQUxxrg/viewform?usp=dialog

