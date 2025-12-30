# Task Breakdown: Testimonials Section

## Overview
Total Tasks: 3 task groups, 15+ sub-tasks

## Task List

### HTML Structure & Content

#### Task Group 1: Testimonials Section Structure and Content
**Dependencies:** None

- [ ] 1.0 Complete testimonials section structure and content
  - [ ] 1.1 Write 2-3 focused tests for section structure
    - Test section exists with id="testimonials"
    - Test section contains heading "Testimonials"
    - Test section contains testimonial cards with quotes, names, and titles
    - Limit to 2-3 highly focused tests maximum
  - [ ] 1.2 Create testimonials section HTML structure
    - Replace placeholder content in `<section id="testimonials">`
    - Add section heading "Testimonials" (h2)
    - Create container for testimonial cards grid
    - Use semantic HTML structure (section, h2, article or appropriate card element)
  - [ ] 1.3 Create testimonial cards HTML structure
    - Create card structure for each testimonial
    - Each card should include:
      - Quote text container (blockquote)
      - Client name
      - Title/role
    - Use semantic HTML (article or appropriate card element)
    - Add proper ARIA attributes for accessibility
  - [ ] 1.4 Add Naily Nevarez testimonial
    - Name: Naily Nevarez
    - Title: Assoc. Director of Product Design at Planned Parenthood
    - Quote: "I feel fortunate to say Amy is my closest mentor to this day, and I know she will continue to positively change lives the way she's changed mine. Amy made the space for me to express and explore my life circumstances and aspirations. I told her about my current problems, my outlook on life, and my long term goals. Each time, she listened and responded with guidance, warmth, and empathy."
  - [ ] 1.5 Add Finn R. testimonial
    - Name: Finn R.
    - Title: Group Facility Administrator
    - Quote: "Amy left a lasting impact on me within a week of meeting her. Amy Swan has a gift. She is a natural coach and it is clear that her ability comes not just from professional training, but also from her intuition, intelligence and kindness, as well as her own life experiences. I will continue to utilize Amy as the amazing resource that she is. Five stars all the way!"
  - [ ] 1.6 Add Mai Dao testimonial
    - Name: Mai Dao
    - Title: Love, Vision & Hope Life Coach
    - Quote: "My heart is filled with gratitude for the safe, gentle, and authentic space that Amy created for me in our meeting. Something that I sincerely appreciate about Amy is that whenever I asked her a series of questions that my mind felt bogged down with, she didn't forcefully tell me what to do or pressure me to think a certain way. Instead, she gently guided me to a space of peace and calmness so that I could find any answer I seek from within me. And this empowered me."
  - [ ] 1.7 Add John L. testimonial
    - Name: John L.
    - Title: Web Developer
    - Quote: "Amy is a great listener and "tuned" into me almost immediately when I worked with her during an introductory session, she presented several helpful tools and ideas to get me out of my current "funk". Amy is very open and easy to talk to and has had a similar journey from music to web development as well as fitness goals. I can't wait to keep working with Amy to help unlock what's holding me back from my true potential."
  - [ ] 1.8 Add video testimonial
    - Create video testimonial card or featured video section
    - Embed YouTube video: https://youtu.be/CYgj5LVvrTg
    - Use YouTube iframe embed (convert to embed URL: https://www.youtube.com/embed/CYgj5LVvrTg)
    - Add proper iframe attributes (title, allowfullscreen, frameborder="0")
    - Ensure video is responsive
    - Add proper accessibility attributes
  - [ ] 1.9 Ensure section structure tests pass
    - Run ONLY the 2-3 tests written in 1.1
    - Verify section structure is correct
    - Verify all required content is present
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- The 2-3 tests written in 1.1 pass
- Section structure is complete with all required elements
- All 4 text testimonials are present with correct content
- Video testimonial is embedded correctly
- All content is properly structured

### Styling & Layout

#### Task Group 2: Testimonial Cards Styling and Layout
**Dependencies:** Task Group 1

- [ ] 2.0 Complete styling and layout
  - [ ] 2.1 Write 2-3 focused tests for styling and responsive behavior
    - Test testimonial grid displays correctly on desktop, tablet, mobile
    - Test testimonial cards are properly styled
    - Limit to 2-3 highly focused tests maximum
  - [ ] 2.2 Implement testimonial grid layout
    - Use CSS Grid for responsive card layout
    - Desktop (1025px+): 2 columns
    - Tablet (769px-1024px): 2 columns
    - Mobile (max-width 768px): 1 column (stacked)
    - Add appropriate gap between cards
    - Ensure cards align properly
  - [ ] 2.3 Style testimonial cards
    - Add subtle borders or shadows for depth
    - Add appropriate padding and spacing
    - Use existing CSS variables for colors and spacing
    - Match tranquil, minimal aesthetic
    - Ensure cards feel peaceful and trustworthy
  - [ ] 2.4 Style testimonial content
    - Style quote text (Lato font, possibly italic or special styling)
    - Style client names (Georgia or Lato font, to be determined)
    - Style titles/roles (Lato font, smaller, lighter weight)
    - Ensure proper typography hierarchy
    - Ensure sufficient contrast for all text elements
    - Use blockquote or appropriate quote styling
  - [ ] 2.5 Style video testimonial
    - Make video responsive (aspect ratio maintained)
    - Style video container to match card aesthetic
    - Ensure video is accessible and doesn't autoplay
    - Add proper spacing around video
  - [ ] 2.6 Ensure styling tests pass
    - Run ONLY the 2-3 tests written in 2.1
    - Verify testimonial grid displays correctly across screen sizes
    - Verify cards are properly styled
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- The 2-3 tests written in 2.1 pass
- Testimonial grid displays correctly on all screen sizes
- Cards are properly styled and match aesthetic
- Video testimonial is responsive and properly styled
- Typography hierarchy is correct

### Responsive Design & Final Polish

#### Task Group 3: Responsive Design and Accessibility
**Dependencies:** Task Groups 1-2

- [ ] 3.0 Complete responsive design and polish
  - [ ] 3.1 Review tests from Task Groups 1-2
    - Review the 2-3 tests written in Task 1.1 (section structure)
    - Review the 2-3 tests written in Task 2.1 (styling/responsive)
    - Total existing tests: approximately 4-6 tests
  - [ ] 3.2 Implement responsive design
    - Desktop (1025px+): 2-column grid
    - Tablet (769px-1024px): 2-column grid with adjusted spacing
    - Mobile (max-width 768px): 1-column (stacked)
    - Use same responsive breakpoints as other sections
    - Ensure text remains readable on all screen sizes
    - Maintain proper spacing and padding across breakpoints
    - Ensure video is responsive on all screen sizes
  - [ ] 3.3 Perform accessibility audit
    - Verify all text meets WCAG AA contrast standards
    - Verify proper semantic HTML structure (section, h2, article, blockquote)
    - Verify video has proper accessibility attributes
    - Verify keyboard navigation compatibility
    - Verify proper heading hierarchy
    - Verify quotes are properly marked up
  - [ ] 3.4 Add missing accessibility enhancements
    - Add or improve ARIA labels if needed
    - Ensure all interactive elements are keyboard accessible
    - Verify all text is readable by screen readers
    - Ensure video has proper title and accessibility attributes
    - Verify blockquote elements are properly structured
  - [ ] 3.5 Final polish and verification
    - Verify section displays correctly on homepage
    - Verify testimonial grid works on all screen sizes
    - Verify all testimonials display correctly
    - Verify video loads and plays correctly
    - Verify styling matches tranquil, minimal aesthetic
    - Check for any visual inconsistencies
    - Verify video doesn't autoplay

**Acceptance Criteria:**
- All accessibility requirements are met (WCAG 2.2 Level AA compliance)
- Responsive design works correctly on all screen sizes
- Testimonial grid displays correctly on desktop, tablet, and mobile
- All text meets contrast standards
- Semantic HTML structure is correct
- Video is accessible and responsive
- Section displays correctly and matches aesthetic

## Execution Order

Recommended implementation sequence:
1. HTML Structure & Content (Task Group 1)
2. Styling & Layout (Task Group 2)
3. Responsive Design & Final Polish (Task Group 3)

## Notes

- This is a frontend-only feature (no backend required)
- Regular HTML/CSS implementation (not web component for now)
- Content includes 4 text testimonials and 1 video testimonial
- Follow existing section styling patterns from `css/styles.css`
- Use existing CSS variables for colors and spacing
- Match typography choices (Georgia for headings, Lato for body)
- Responsive breakpoints: mobile (max-width 768px), tablet (769px-1024px), desktop (1025px+)
- YouTube video URL: https://youtu.be/CYgj5LVvrTg
- YouTube embed URL: https://www.youtube.com/embed/CYgj5LVvrTg
- Video should not autoplay (accessibility best practice)


