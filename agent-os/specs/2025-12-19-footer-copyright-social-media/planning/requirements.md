# Spec Requirements: Footer with Copyright and Social Media

## Initial Description
Footer with copyright and social media — Create a footer section with copyright information and social media links, along with any additional footer content, all styled to match the tranquil, minimal aesthetic.

## Requirements Discussion

### First Round Questions

**Q1:** Copyright text: Should it be "© 2025 Lumhara" or include your name, or something else?
**Answer:** Copyright text looks fine (presumably "© 2025 Lumhara" or similar standard format).

**Q2:** Social media platforms: Which should be included? (e.g., Instagram, LinkedIn, Facebook, Twitter/X, etc.)
**Answer:** Social Media should just be Substack, Instagram, and YouTube for now.

**Q3:** Footer layout: Should it be simple single row with copyright on left, social links on right? Stacked? Multiple columns?
**Answer:** Simple, please.

**Q4:** Additional footer content: Any other content? (e.g., newsletter signup, quick links, contact info)
**Answer:** Above the footer, I would like a Newsletter signup and contact info. In the footer, I would like links to: privacy, terms & conditions, and accessibility please.

**Q5:** Footer placement: Should it stick to the bottom of the page, or appear after all content?
**Answer:** (Not explicitly answered, will use standard footer placement - appears after content)

**Q6:** Social media icons: Use icon fonts (Font Awesome, etc.), SVG icons, or simple text links?
**Answer:** Font Awesome works great. Please make them a single color.

**Q7:** Styling: Should it match the header's minimal aesthetic, or have subtle differences (e.g., lighter background, border)?
**Answer:** Try adding a subtle difference, in case I like it.

## Requirements Summary

### Functional Requirements
- Create footer section with copyright information
- Include social media links: Substack, Instagram, YouTube
- Use Font Awesome icons for social media (single color)
- Simple layout (single row: copyright on left, social links on right, or simple stacked layout)
- Include links in footer: Privacy, Terms & Conditions, Accessibility
- Add newsletter signup section above footer
- Add contact info section above footer
- Footer styling should match tranquil, minimal aesthetic with subtle difference from header (lighter background or border)
- Footer appears after all page content (standard placement)

### Technical Considerations
- Use Font Awesome for social media icons
- Icons should be single color (matching site color scheme)
- Footer should be responsive (mobile, tablet, desktop)
- Newsletter signup and contact info sections should be styled consistently with site aesthetic
- Footer links should be accessible (proper ARIA labels, keyboard navigation)

### Scope Boundaries
**In Scope:**
- Footer with copyright and social media links
- Newsletter signup section above footer
- Contact info section above footer
- Footer links (Privacy, Terms & Conditions, Accessibility)
- Font Awesome integration
- Responsive footer design
- Styling aligned with tranquil aesthetic

**Out of Scope:**
- Actual newsletter signup functionality/backend (just the form UI)
- Privacy, Terms & Conditions, Accessibility page content (just the links)
- Contact form functionality (just contact info display)

