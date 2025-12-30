# Specification: Testimonials Section

## Goal
Create a testimonials section on the homepage that showcases client feedback and social proof, building trust with visitors. The section displays testimonials from clients who have worked with Amy Swan, including their names, titles/roles, and testimonial text.

## User Stories
- As a visitor, I want to see client testimonials so that I can understand the value and impact of working with Lumhara
- As a visitor, I want to read about others' experiences so that I can build trust and confidence
- As a visitor, I want to see diverse testimonials so that I can relate to different perspectives

## Specific Requirements

**Section Structure**
- Use existing `<section id="testimonials">` in `index.html`
- Replace placeholder content with actual testimonials content
- Position after coming soon section, before contact section
- Regular HTML/CSS implementation (not web component for now)
- Follow existing section styling patterns (max-width 1200px, centered)

**Testimonials Content**
- Display 4 testimonials from flowinallthings.com:
  1. **Naily Nevarez** - Assoc. Director of Product Design at Planned Parenthood
  2. **Finn R.** - Group Facility Administrator
  3. **Mai Dao** - Love, Vision & Hope Life Coach
  4. **John L.** - Web Developer
- Each testimonial should include:
  - Client name
  - Title/role/company
  - Testimonial text (quote)
  - Optional: Video testimonial (if available)

**Testimonial 1: Naily Nevarez**
- Name: Naily Nevarez
- Title: Assoc. Director of Product Design at Planned Parenthood
- Quote: "I feel fortunate to say Amy is my closest mentor to this day, and I know she will continue to positively change lives the way she's changed mine. Amy made the space for me to express and explore my life circumstances and aspirations. I told her about my current problems, my outlook on life, and my long term goals. Each time, she listened and responded with guidance, warmth, and empathy."

**Testimonial 2: Finn R.**
- Name: Finn R.
- Title: Group Facility Administrator
- Quote: "Amy left a lasting impact on me within a week of meeting her. Amy Swan has a gift. She is a natural coach and it is clear that her ability comes not just from professional training, but also from her intuition, intelligence and kindness, as well as her own life experiences. I will continue to utilize Amy as the amazing resource that she is. Five stars all the way!"

**Testimonial 3: Mai Dao**
- Name: Mai Dao
- Title: Love, Vision & Hope Life Coach
- Quote: "My heart is filled with gratitude for the safe, gentle, and authentic space that Amy created for me in our meeting. Something that I sincerely appreciate about Amy is that whenever I asked her a series of questions that my mind felt bogged down with, she didn't forcefully tell me what to do or pressure me to think a certain way. Instead, she gently guided me to a space of peace and calmness so that I could find any answer I seek from within me. And this empowered me."

**Testimonial 4: John L.**
- Name: John L.
- Title: Web Developer
- Quote: "Amy is a great listener and "tuned" into me almost immediately when I worked with her during an introductory session, she presented several helpful tools and ideas to get me out of my current "funk". Amy is very open and easy to talk to and has had a similar journey from music to web development as well as fitness goals. I can't wait to keep working with Amy to help unlock what's holding me back from my true potential."

**Layout Design**
- Card-based grid layout (similar to offerings section)
- Responsive grid:
  - Desktop: 2 columns
  - Tablet: 2 columns
  - Mobile: 1 column (stacked)
- Each testimonial card should include:
  - Quote text (prominently displayed)
  - Client name
  - Title/role
- Video testimonial:
  - Display YouTube video (https://youtu.be/CYgj5LVvrTg)
  - Can be featured prominently or included in grid
  - Use YouTube iframe embed for responsive video

**Visual Design**
- Match tranquil, minimal aesthetic
- Use existing color scheme (light cream background, muted green accents)
- Cards should have subtle borders or shadows for depth
- Typography: Georgia for names/titles, Lato for quotes
- Ensure sufficient contrast for all text elements

**Typography**
- Heading: "Testimonials" (h2) - Georgia font, matching existing section h2 styles
- Quote text: Lato font, possibly italic or special styling
- Client name: Georgia or Lato font (to be determined)
- Title/role: Lato font, smaller, lighter weight
- Ensure proper font sizes for hierarchy and readability

**Styling and Aesthetic**
- Match tranquil, minimal aesthetic of the site
- Use existing color scheme (light cream background, muted green accents)
- Follow existing section padding and spacing patterns
- Use existing CSS variables for colors and spacing
- Ensure sufficient contrast for all text elements
- Cards should feel peaceful and trustworthy

**Responsive Design**
- Desktop (1025px+): 2-column grid
- Tablet (769px-1024px): 2-column grid with adjusted spacing
- Mobile (max-width 768px): 1-column (stacked)
- Follow same responsive patterns as other sections
- Ensure text remains readable on all screen sizes
- Maintain proper spacing and padding across breakpoints

**Accessibility Requirements**
- All text must meet WCAG AA contrast standards
- Proper semantic HTML structure (section, h2, article or appropriate card element)
- Ensure quotes are properly marked up (blockquote or similar)
- Maintain keyboard navigation compatibility
- Proper heading hierarchy
- If video is included, ensure it has captions and proper accessibility attributes

**Video Testimonial**
- YouTube video URL: https://youtu.be/CYgj5LVvrTg
- Embed video using YouTube iframe embed
- Video should be responsive and accessible
- Include proper video attributes (controls, allowfullscreen)
- Ensure video doesn't autoplay (accessibility best practice)
- Video can be displayed as a featured testimonial or alongside text testimonials
- Use YouTube embed URL format: https://www.youtube.com/embed/CYgj5LVvrTg

## Visual Design

No specific visual mockups provided. Design should:
- Match the minimal, tranquil aesthetic seen in existing sections
- Use light cream background with muted green accents
- Cards should feel inviting and trustworthy
- Grid layout should feel balanced and harmonious

## Existing Code to Leverage

**Section Styling (`css/styles.css`)**
- Use existing section styles with max-width 1200px and centered layout
- Follow existing padding patterns (var(--spacing-xl) var(--spacing-md))
- Use existing typography choices (Georgia for h2, Lato for body)
- Use existing CSS variables for colors and spacing
- Follow same responsive design patterns with media queries
- Reference offering card styling for testimonial card inspiration

**HTML Structure (`index.html`)**
- Use existing `<section id="testimonials">` placeholder
- Follow same semantic HTML5 structure patterns
- Maintain consistency with other sections

**Content Source**
- Testimonials copied from https://flowinallthings.com/
- 4 testimonials with names, titles, and quotes
- Video content: To be determined (not found in initial search)

## Out of Scope
- Testimonial submission form
- Backend functionality
- Complex animations or interactions
- Web component implementation (using regular HTML/CSS)
- Image upload or management system
- Social sharing features
- Print-specific styling

