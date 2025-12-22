# Spec Requirements: Brief Description/Philosophy Section

## Initial Description
Brief description/philosophy section — Add a section immediately following the hero that presents a brief description of Lumhara's philosophy and approach, providing visitors with deeper context about the Human Systems guidance and compassionate approach to self-discovery.

## Requirements Discussion

### First Round Questions

**Q1:** Content: What should the philosophy section say? Should it explain Lumhara's approach to Human Systems guidance, the compassionate approach to self-discovery, or both? Do you have the text ready, or should I draft it based on the mission statement?
**Answer:** I don't have text ready. Please base it on the mission statement. I think it's important for me to express that I want to teach people to listen to the inner guidance that rests within themselves. Perhaps add the Rumi quote, "The universe is not outside of you. Look inside yourself; everything that you want, you already are."

**Q2:** Layout: I see there's already a placeholder `<section id="philosophy">` in `index.html` right after the hero. Should we use that existing section structure, or create a new component?
**Answer:** yes, use the section that currently exists.

**Q3:** Component approach: Should this be a web component (like `<lumhara-philosophy>`) for reusability, or regular HTML/CSS in the existing section?
**Answer:** Regular HTML/CSS for now, please.

**Q4:** Visual styling: Should it match the existing section styling (centered, max-width 1200px, with Georgia headings and Lato body text), or do you want a different layout (e.g., two-column, image + text, or other)?
**Answer:** I think two-column might be best. Maybe the Rumi poem featured on the left and the description and other items on the right.

**Q5:** Length: How long should the content be? A short paragraph, a few paragraphs, or a longer description?
**Answer:** As short and discreet as possible while still being informative.

**Q6:** Heading: Should it use "Philosophy" as the h2 heading, or something else (e.g., "Our Approach", "About Lumhara", "The Lumhara Way")?
**Answer:** "Our Approach"

**Q7:** Visual elements: Should it include any images, icons, or decorative elements, or be text-only?
**Answer:** I would like something visual. Not sure what yet.

**Follow-up Q7:** For the visual element, what type would you prefer?
**Answer:** Some zen symbols, mandalas, and Japanese imagery are welcome. A yin/yang is also appropriate. I would love a subtle background pattern or texture! Your suggestions are welcome.

**Q8:** Responsive behavior: Should it follow the same responsive patterns as other sections (padding adjustments on mobile/tablet), or do you want different behavior?
**Answer:** Same responsive behavior, please. Rumi text on top with the mobile version.

### Existing Code to Reference

**Similar Features Identified:**
- Existing section structure: `index.html` - `<section id="philosophy">` placeholder already exists
- Section styling patterns: `css/styles.css` - existing section styles with max-width 1200px, centered layout, Georgia headings, Lato body text
- Responsive patterns: `css/styles.css` - media queries for mobile (max-width 768px), tablet (769px-1024px), desktop (1025px+)

## Visual Assets

### Files Provided:
No visual assets provided.

### Visual Insights:
No visual assets provided.

## Requirements Summary

### Functional Requirements
- Replace placeholder content in existing `<section id="philosophy">` in `index.html`
- Create two-column layout: Rumi quote on left, description/content on right
- Include Rumi quote: "The universe is not outside of you. Look inside yourself; everything that you want, you already are."
- Include brief description based on mission statement emphasizing:
  - Teaching people to listen to inner guidance within themselves
  - Lumhara's philosophy and approach to Human Systems guidance
  - Compassionate approach to self-discovery
- Use heading "Our Approach" (h2)
- Keep content short and discreet while still informative
- Include visual element: zen symbols, mandalas, Japanese imagery, yin/yang symbol, or subtle background pattern/texture
- Visual suggestions welcome (to be refined during implementation)
- Regular HTML/CSS implementation (not web component)
- Follow existing section styling patterns (max-width 1200px, centered)
- Use existing typography (Georgia for headings, Lato for body)
- Responsive design: Two-column on desktop, stacked on mobile with Rumi quote on top
- Follow same responsive patterns as other sections (padding adjustments)

### Reusability Opportunities
- Reuse existing section structure and styling from `css/styles.css`
- Follow same responsive breakpoints and patterns
- Use existing CSS variables for colors and spacing
- Match typography choices from existing sections

### Scope Boundaries
**In Scope:**
- Two-column layout implementation
- Rumi quote display (left column on desktop, top on mobile)
- Brief philosophy/approach description (right column on desktop, bottom on mobile)
- Visual element (type to be determined)
- Responsive design with mobile stacking
- Regular HTML/CSS implementation
- Content based on mission statement

**Out of Scope:**
- Web component implementation
- Complex animations or interactions
- Backend functionality
- Content management system
- Multiple visual variations
- Extended content or detailed explanations

### Technical Considerations
- Use existing `<section id="philosophy">` structure in `index.html`
- Implement two-column layout using CSS Grid or Flexbox
- Follow existing section styling patterns from `css/styles.css`
- Use existing CSS variables for colors and spacing
- Match typography (Georgia for h2, Lato for body text)
- Responsive breakpoints: mobile (max-width 768px), tablet (769px-1024px), desktop (1025px+)
- Visual element implementation (type to be determined - could be decorative icon, subtle background, or other element)
- Content will be drafted based on mission statement with emphasis on inner guidance

