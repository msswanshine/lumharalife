# Specification: Offerings Showcase Section

## Goal
Create an offerings showcase section on the homepage that displays Lumhara's workshops, mini-courses, and other services. The section features the next upcoming event prominently at the top, followed by a card-based grid of other offerings. Focus is on workshops and mini-courses, with the concept of workshops and courses as part of a "Dojo" experience.

## User Stories
- As a visitor, I want to see what workshops and courses are available so that I can find learning opportunities that interest me
- As a visitor, I want to see the next upcoming event prominently so that I don't miss time-sensitive opportunities
- As a visitor, I want to understand the format and duration of each offering so that I can make informed decisions
- As a visitor, I want to easily access more information or register for offerings through clear call-to-action buttons

## Specific Requirements

**Section Structure**
- Use existing `<section id="offerings">` in `index.html`
- Replace placeholder content with actual offerings content
- Regular HTML/CSS implementation (not web component for now)
- Follow existing section styling patterns (max-width 1200px, centered)

**Featured Offer Section**
- Display prominently at the top of the offerings section
- Highlight the next upcoming event
- Include:
  - Title: "Intro to Human Design"
  - Description: Ask everyone to look at their chart. Talk about the history of Human Design, how it was created, what it is and what it's not, Centers, how channels are created. Leave time for questions and answers.
  - Date: January 30, 2026 from 12-1pm
  - Location: White Rabbit Clubhouse in Ashland, OR
  - Format: Free lunch workshop
  - CTA button (e.g., "Learn More", "Register", or custom text)
- Visually distinct from other offering cards (larger, more prominent)
- Optional image support

**Card-Based Grid Layout**
- Display other offerings in a responsive card-based grid
- Cards should include:
  - Optional image at the top of card
  - Title
  - Description
  - Duration/format information
  - Date (if upcoming) or "Available now" (if evergreen)
  - Location (for live events, if applicable)
  - CTA button
- Grid should be responsive:
  - Desktop: 2-3 columns
  - Tablet: 2 columns
  - Mobile: 1 column (stacked)

**Workshop Offerings**
- Format: One-off workshops, 1.5hrs total
  - 1 hour presentation
  - 30 mins QA and practical application
- Available in both live and online versions
- Examples to include:
  1. "Intro to Human Design" (featured as upcoming)
  2. "Types, Strategies & Authorities" (future/evergreen)
    - Description: Learn more about what your type and strategy is and how to apply that to your life. In addition, learn basics about "Authorities" as a way of determining how to navigate choices and decisions that come up on the daily.
- Each workshop card should display:
  - Title
  - Description
  - Duration: 1.5hrs
  - Format: Live and/or online
  - Date (if upcoming) or "Available now"
  - Location (for live events)
  - CTA button

**Mini-Course Offerings**
- Format: 2 classes a week apart with homework and reflection in between
- Structure:
  1. First class: Talking about, if they have it, ways to recognize that authority inside of us
  2. Second class: Methods for calibration of the authorities (working in groups, sensei talks and demonstrates, students put it into practice)
- Concept: Workshops and courses as part of a "Dojo" experience
- Focus: Mini-courses on each authority (e.g., "Emotional Authority Mini-Course", "Sacral Authority Mini-Course", etc.)
- Each mini-course card should display:
  - Title
  - Description
  - Duration: 2 classes a week apart
  - Format: Live and/or online
  - CTA button
  - Optional image

**Other Offerings**
- Bespoke one-on-one deep dives:
  - Description: Coaching based on systems, applying it to real world situations
  - Format: One-on-one
  - CTA button
- Business consulting:
  - Description: Possibly (to be determined)
  - Format: Consulting
  - CTA button
- Note: Chart creation offer is a future feature and not included for now

**Ordering Logic**
- Order offerings by: What's up and coming first, then evergreen offers
- Featured offer (upcoming event) always at the top
- Other offerings ordered by:
  1. Upcoming events (with dates)
  2. Evergreen offers (available now)

**Visual Design**
- Card-based grid layout
- Featured offer prominently displayed at top
- Cards should have:
  - Subtle borders or shadows for depth
  - Optional images at top
  - Clear typography hierarchy
  - Spacing for readability
- Match tranquil, minimal aesthetic
- Use existing color scheme (light cream background, muted green accents)
- Optional images should complement the aesthetic

**Typography**
- Heading: "Offerings" or "Workshops & Courses" (h2) - Georgia font, matching existing section h2 styles
- Card titles: Georgia or Lato font (to be determined)
- Body text: Lato font, matching existing section p styles
- Ensure proper font sizes for hierarchy and readability

**Styling and Aesthetic**
- Match tranquil, minimal aesthetic of the site
- Use existing color scheme (light cream background, muted green accents)
- Follow existing section padding and spacing patterns
- Use existing CSS variables for colors and spacing
- Ensure sufficient contrast for all text elements
- Cards should feel peaceful and inviting

**Responsive Design**
- Desktop (1025px+): Featured offer full-width or large card, grid below with 2-3 columns
- Tablet (769px-1024px): Featured offer full-width, grid below with 2 columns
- Mobile (max-width 768px): Featured offer full-width, grid below with 1 column (stacked)
- Follow same responsive patterns as other sections
- Ensure text remains readable on all screen sizes
- Maintain proper spacing and padding across breakpoints

**Accessibility Requirements**
- All text must meet WCAG AA contrast standards
- Proper semantic HTML structure (section, h2, article or appropriate card element)
- Ensure images have alt text if used
- Maintain keyboard navigation compatibility
- Proper heading hierarchy
- CTA buttons must be keyboard accessible and have visible focus states

**CTA Buttons**
- Each offering should have an optional CTA button
- Button text: "Learn More", "Register", "Get Started", or custom text
- Buttons should be styled consistently
- Buttons should link to:
  - Registration page (if available)
  - Contact form (if registration not available)
  - More information page
  - Or anchor link to contact section

## Visual Design

No specific visual mockups provided. Design should:
- Match the minimal, tranquil aesthetic seen in existing sections
- Use light cream background with muted green accents
- Cards should feel inviting and peaceful
- Featured offer should stand out visually
- Grid layout should feel balanced and harmonious

## Existing Code to Leverage

**Section Styling (`css/styles.css`)**
- Use existing section styles with max-width 1200px and centered layout
- Follow existing padding patterns (var(--spacing-xl) var(--spacing-md))
- Use existing typography choices (Georgia for h2, Lato for body)
- Use existing CSS variables for colors and spacing
- Follow same responsive design patterns with media queries

**HTML Structure (`index.html`)**
- Use existing `<section id="offerings">` placeholder
- Follow same semantic HTML5 structure patterns
- Maintain consistency with other sections

**Content Source**
- Featured offer: "Intro to Human Design" workshop details provided
- Workshops: Details provided for "Intro to Human Design" and "Types, Strategies & Authorities"
- Mini-courses: Concept and structure provided (specific authority courses to be determined)
- Other offerings: One-on-one deep dives and business consulting details provided

## Out of Scope
- Price display (not showing prices for now)
- Booking/payment integration
- Calendar integration
- User accounts or login
- Backend functionality
- Chart creation offer (future feature)
- Complex animations or interactions
- Image upload or management system
- Social sharing features
- Print-specific styling


