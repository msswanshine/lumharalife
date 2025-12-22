# Spec Requirements: Coming Soon Section

## Initial Description
Create a "Coming Soon" section on the homepage that showcases upcoming projects and products, starting with "Lumhara - Tide" (an emotional wave tracking app), including brief descriptions and newsletter signup forms for each item so visitors can stay informed about development progress.

## Requirements Discussion

### Content

**Q1:** What should the description of "Lumhara - Tide" say?
**Answer:** "An emotional wave tracking experience that helps you understand, time, and move with your unique emotional rhythms"

**Q2:** What information should each coming soon item include?
**Answer:** 
- Logo/image (lumhara-tide_logo.png available)
- Title: "Lumhara - Tide"
- Brief description: "An emotional wave tracking experience that helps you understand, time, and move with your unique emotional rhythms"
- Newsletter signup form
- Status: "Coming Soon" badge/marking

**Q3:** Should there be a general newsletter signup, or one per item?
**Answer:** One unified Lumhara signup form for all coming-soon updates, with Tide mentioned explicitly

### Layout

**Q4:** How should the coming soon items be displayed?
**Answer:** Featured/hero-style card (larger than offerings), marked "Coming Soon"

**Q5:** Where should this section be positioned on the homepage?
**Answer:** After offerings section, before testimonials

### Visual Design

**Q6:** Should the logo be displayed prominently?
**Answer:** Yes, include the lumhara-tide_logo.png

**Q7:** Should the section match the offerings section style (cards) or have a different style?
**Answer:** (To be determined - should match tranquil, minimal aesthetic)

## Requirements Summary

### Functional Requirements
- Display "Lumhara - Tide" app with logo
- Brief description of the emotional wave tracking app
- Newsletter signup form for Lumhara - Tide updates
- Support for multiple coming soon items (future expansion)
- Positioned on homepage
- Match tranquil, minimal aesthetic

### Content Requirements

**Lumhara - Tide:**
- Logo: lumhara-tide_logo.png
- Title: "Lumhara - Tide"
- Description: "An emotional wave tracking experience that helps you understand, time, and move with your unique emotional rhythms"
- Newsletter signup form (unified Lumhara signup with Tide mentioned explicitly)
- Status: "Coming Soon" badge/marking

### Visual Requirements
- Display logo/image
- Match tranquil, minimal aesthetic
- Responsive design (mobile, tablet, desktop)
- Newsletter form styling consistent with site

### Technical Requirements
- Regular HTML/CSS implementation (not web component for now)
- Use existing section styling patterns
- Responsive breakpoints: mobile (max-width 768px), tablet (769px-1024px), desktop (1025px+)
- Use existing CSS variables for colors and spacing
- Match typography choices (Georgia for headings, Lato for body)
- Newsletter form should be accessible (proper labels, ARIA attributes)
- Note: Form submission functionality is out of scope (UI only)

### Scope Boundaries

**In Scope:**
- Coming soon section structure
- Display Lumhara - Tide with logo
- Newsletter signup form for each item
- Responsive design
- Accessible form design

**Out of Scope:**
- Backend form submission functionality
- Email service integration
- Multiple coming soon items (for now, just Lumhara - Tide)
- Complex animations or interactions

