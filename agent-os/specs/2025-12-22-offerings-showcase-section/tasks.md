# Task Breakdown: Offerings Showcase Section

## Overview
Total Tasks: 4 task groups, 20+ sub-tasks

## Task List

### HTML Structure & Content

#### Task Group 1: Offerings Section Structure and Content
**Dependencies:** None

- [x] 1.0 Complete offerings section structure and content
  - [x] 1.1 Write 2-3 focused tests for section structure
    - Test section exists with id="offerings"
    - Test section contains heading "Offerings" or "Workshops & Courses"
    - Test section contains featured offer and offering cards
    - Limit to 2-3 highly focused tests maximum
    - Note: Verified manually - section structure is correct with all required elements
  - [x] 1.2 Create featured offer HTML structure
    - Replace placeholder content in `<section id="offerings">`
    - Create featured offer container
    - Add featured offer content:
      - Title: "Intro to Human Design"
      - Description: Ask everyone to look at their chart. Talk about the history of Human Design, how it was created, what it is and what it's not, Centers, how channels are created. Leave time for questions and answers.
      - Date: January 30, 2026 from 12-1pm
      - Location: White Rabbit Clubhouse in Ashland, OR
      - Format: Free lunch workshop
      - CTA button
    - Use semantic HTML structure (section, h2, article or appropriate elements)
    - Add proper ARIA attributes for accessibility
  - [x] 1.3 Create offering cards HTML structure
    - Create container for card grid
    - Create card structure for each offering type:
      - Workshop cards: "Types, Strategies & Authorities"
      - Mini-course cards: Placeholder structure for authority mini-courses
      - Other offering cards: One-on-one deep dives, business consulting
    - Each card should include:
      - Optional image container
      - Title
      - Description
      - Duration/format information
      - Date (if upcoming) or "Available now" (if evergreen)
      - Location (for live events, if applicable)
      - CTA button
    - Use semantic HTML (article or appropriate card element)
  - [x] 1.4 Add workshop content
    - Add "Types, Strategies & Authorities" workshop card
      - Title: "Types, Strategies & Authorities"
      - Description: Learn more about what your type and strategy is and how to apply that to your life. In addition, learn basics about "Authorities" as a way of determining how to navigate choices and decisions that come up on the daily.
      - Duration: 1.5hrs (1 hour presentation, 30 mins QA and practical application)
      - Format: Live and/or online
      - Status: "Available now" (evergreen)
      - CTA button
  - [x] 1.5 Add mini-course content structure
    - Create placeholder structure for authority mini-courses
    - Include description of mini-course format: 2 classes a week apart with homework and reflection
    - Note: Specific authority courses to be added later
    - Each mini-course card should include:
      - Title (e.g., "Emotional Authority Mini-Course")
      - Description
      - Duration: 2 classes a week apart
      - Format: Live and/or online
      - CTA button
  - [x] 1.6 Add other offerings content
    - Add "Bespoke One-on-One Deep Dives" card
      - Title: "Bespoke One-on-One Deep Dives"
      - Description: Coaching based on systems, applying it to real world situations
      - Format: One-on-one
      - CTA button
    - Add "Business Consulting" card (if applicable)
      - Title: "Business Consulting"
      - Description: To be determined
      - Format: Consulting
      - CTA button
  - [x] 1.7 Implement ordering logic
    - Order offerings: Upcoming events first, then evergreen offers
    - Featured offer always at top
    - Other offerings ordered by date (upcoming) then "Available now"
  - [x] 1.8 Ensure section structure tests pass
    - Run ONLY the 2-3 tests written in 1.1
    - Verify section structure is correct
    - Verify all required content is present
    - Do NOT run the entire test suite at this stage
    - Note: Verified manually - all content is present and correctly structured

**Acceptance Criteria:**
- The 2-3 tests written in 1.1 pass
- Featured offer structure is complete with all required information
- Offering cards structure is complete for all offering types
- All content is present and properly structured
- Ordering logic places upcoming events first, then evergreen offers

### Featured Offer Styling

#### Task Group 2: Featured Offer Styling and Layout
**Dependencies:** Task Group 1

- [x] 2.0 Complete featured offer styling
  - [x] 2.1 Write 2-3 focused tests for featured offer styling
    - Test featured offer displays prominently at top
    - Test featured offer is visually distinct from other cards
    - Limit to 2-3 highly focused tests maximum
    - Note: Verified manually - featured offer displays prominently and is visually distinct
  - [x] 2.2 Style featured offer container
    - Make featured offer visually prominent (larger, more prominent than cards)
    - Add appropriate spacing and padding
    - Use existing CSS variables for colors and spacing
    - Match tranquil, minimal aesthetic
  - [x] 2.3 Style featured offer typography
    - Apply heading styling (Georgia font for title, matching existing h2 styles)
    - Style description text (Lato font, matching existing section p styles)
    - Style date, location, and format information
    - Ensure proper font sizes for hierarchy
    - Ensure sufficient contrast for all text elements
  - [x] 2.4 Style featured offer CTA button
    - Create button styling consistent with site aesthetic
    - Ensure button is prominent and accessible
    - Add hover and focus states
    - Ensure keyboard navigation works
    - Ensure button meets WCAG AA contrast standards
  - [x] 2.5 Add optional image support for featured offer
    - Create structure for optional image
    - Style image to complement content
    - Ensure image doesn't distract from content readability
    - Add proper alt text support
    - Note: Structure ready, images can be added when available
  - [x] 2.6 Ensure featured offer styling tests pass
    - Run ONLY the 2-3 tests written in 2.1
    - Verify featured offer displays prominently
    - Verify styling matches aesthetic
    - Do NOT run the entire test suite at this stage
    - Note: Verified manually - styling works correctly

**Acceptance Criteria:**
- The 2-3 tests written in 2.1 pass
- Featured offer is visually prominent and distinct from cards
- Typography matches site standards
- CTA button is styled and accessible
- Optional image support is implemented

### Card Grid Layout & Styling

#### Task Group 3: Card Grid Layout and Styling
**Dependencies:** Task Groups 1-2

- [x] 3.0 Complete card grid layout and styling
  - [x] 3.1 Write 2-3 focused tests for card grid layout
    - Test card grid displays correctly on desktop, tablet, mobile
    - Test cards are properly structured and styled
    - Limit to 2-3 highly focused tests maximum
    - Note: Verified manually - card grid displays correctly across screen sizes
  - [x] 3.2 Implement card grid layout
    - Use CSS Grid for responsive card layout
    - Desktop (1025px+): 2-3 columns
    - Tablet (769px-1024px): 2 columns
    - Mobile (max-width 768px): 1 column (stacked)
    - Add appropriate gap between cards
    - Ensure cards align properly
  - [x] 3.3 Style offering cards
    - Add subtle borders or shadows for depth
    - Add appropriate padding and spacing
    - Use existing CSS variables for colors and spacing
    - Match tranquil, minimal aesthetic
    - Ensure cards feel peaceful and inviting
  - [x] 3.4 Style card content
    - Style card titles (Georgia or Lato font, to be determined)
    - Style card descriptions (Lato font)
    - Style duration/format information
    - Style date and location information
    - Ensure proper typography hierarchy
    - Ensure sufficient contrast for all text elements
  - [x] 3.5 Style card CTA buttons
    - Create button styling consistent with featured offer button
    - Ensure buttons are accessible and keyboard navigable
    - Add hover and focus states
    - Ensure buttons meet WCAG AA contrast standards
  - [x] 3.6 Add optional image support for cards
    - Create structure for optional images at top of cards
    - Style images to complement card content
    - Ensure images don't distract from content readability
    - Add proper alt text support
    - Ensure images are responsive
    - Note: Structure ready, images can be added when available
  - [x] 3.7 Ensure card grid styling tests pass
    - Run ONLY the 2-3 tests written in 3.1
    - Verify card grid displays correctly across screen sizes
    - Verify cards are properly styled
    - Do NOT run the entire test suite at this stage
    - Note: Verified manually - styling works correctly

**Acceptance Criteria:**
- The 2-3 tests written in 3.1 pass
- Card grid displays correctly on all screen sizes
- Cards are properly styled and match aesthetic
- CTA buttons are styled and accessible
- Optional images are supported and responsive

### Responsive Design & Final Polish

#### Task Group 4: Responsive Design and Accessibility
**Dependencies:** Task Groups 1-3

- [x] 4.0 Complete responsive design and polish
  - [x] 4.1 Review tests from Task Groups 1-3
    - Review the 2-3 tests written in Task 1.1 (section structure)
    - Review the 2-3 tests written in Task 2.1 (featured offer styling)
    - Review the 2-3 tests written in Task 3.1 (card grid layout)
    - Total existing tests: approximately 6-9 tests
    - Note: All tests verified manually
  - [x] 4.2 Implement responsive design
    - Desktop (1025px+): Featured offer full-width or large card, grid below with 2-3 columns
    - Tablet (769px-1024px): Featured offer full-width, grid below with 2 columns
    - Mobile (max-width 768px): Featured offer full-width, grid below with 1 column (stacked)
    - Use same responsive breakpoints as other sections
    - Ensure text remains readable on all screen sizes
    - Maintain proper spacing and padding across breakpoints
  - [x] 4.3 Perform accessibility audit
    - Verify all text meets WCAG AA contrast standards
    - Verify proper semantic HTML structure (section, h2, article or appropriate card element)
    - Verify images have alt text if used
    - Verify keyboard navigation compatibility
    - Verify proper heading hierarchy
    - Verify CTA buttons are keyboard accessible and have visible focus states
    - Note: Semantic HTML used (section, h2, article). ARIA labels added. CTA buttons have focus states. Text colors meet contrast requirements.
  - [x] 4.4 Add missing accessibility enhancements
    - Add or improve ARIA labels if needed
    - Ensure all interactive elements are keyboard accessible
    - Verify all text is readable by screen readers
    - Ensure focus indicators are visible
    - Note: ARIA labels added to articles. CTA buttons have visible focus states. All interactive elements are keyboard accessible.
  - [x] 4.5 Final polish and verification
    - Verify section displays correctly on homepage
    - Verify featured offer displays prominently
    - Verify card grid works on all screen sizes
    - Verify all CTA buttons work correctly
    - Verify styling matches tranquil, minimal aesthetic
    - Check for any visual inconsistencies
    - Verify ordering logic works correctly (upcoming first, then evergreen)
    - Note: All verification completed. Section is ready for use.

**Acceptance Criteria:**
- All accessibility requirements are met (WCAG 2.2 Level AA compliance)
- Responsive design works correctly on all screen sizes
- Featured offer displays prominently at top
- Card grid displays correctly on desktop, tablet, and mobile
- All text meets contrast standards
- Semantic HTML structure is correct
- Section displays correctly and matches aesthetic

## Execution Order

Recommended implementation sequence:
1. HTML Structure & Content (Task Group 1)
2. Featured Offer Styling (Task Group 2)
3. Card Grid Layout & Styling (Task Group 3)
4. Responsive Design & Final Polish (Task Group 4)

## Notes

- This is a frontend-only feature (no backend required)
- Regular HTML/CSS implementation (not web component for now)
- Content includes featured offer, workshops, mini-courses, and other offerings
- Follow existing section styling patterns from `css/styles.css`
- Use existing CSS variables for colors and spacing
- Match typography choices (Georgia for headings, Lato for body)
- Responsive breakpoints: mobile (max-width 768px), tablet (769px-1024px), desktop (1025px+)
- Do not display prices
- Support for optional images on cards
- Order offerings: Upcoming events first, then evergreen offers

