# Specification: Footer with Copyright and Social Media

## Goal
Create a footer section with copyright information, social media links (Substack, Instagram, YouTube), newsletter signup, contact info, and footer links (Privacy, Terms & Conditions, Accessibility), all styled to match the tranquil, minimal aesthetic with a subtle difference from the header.

## User Stories
- As a visitor, I want to find social media links so that I can follow Lumhara on various platforms
- As a visitor, I want to see copyright information so that I understand the site's ownership
- As a visitor, I want to sign up for the newsletter so that I can stay informed about updates
- As a visitor, I want to see contact information so that I know how to reach out
- As a visitor, I want to access legal pages (Privacy, Terms, Accessibility) so that I can understand site policies

## Specific Requirements

**Newsletter Signup Section (Above Footer)**
- Create newsletter signup section positioned above the footer
- Include email input field with label
- Include submit button styled to match site aesthetic
- Use Lato font for form elements (matching body text)
- Ensure form is accessible (proper labels, ARIA attributes)
- Note: Form submission functionality is out of scope (UI only)

**Contact Info Section (Above Footer)**
- Create contact info section positioned above newsletter signup or alongside it
- Display contact information (email, phone, or other contact methods)
- Use minimal, clean layout
- Ensure contact info is easily readable and accessible
- Style consistently with site aesthetic

**Footer Structure**
- Create semantic `<footer>` element
- Simple layout: copyright on left, social media links on right (or stacked on mobile)
- Include footer links: Privacy, Terms & Conditions, Accessibility
- Footer links can be positioned below main footer content or integrated into footer layout
- Ensure footer appears after all page content (standard placement, not sticky)

**Social Media Links**
- Include three social media platforms: Substack, Instagram, YouTube
- Use Font Awesome icons for each platform
- Icons should be single color (matching site color scheme - muted green or text color)
- Icons should be properly sized and have adequate touch targets (minimum 44x44px)
- Links should open in new tab/window (target="_blank" with rel="noopener noreferrer")
- Include proper ARIA labels for accessibility

**Copyright Information**
- Display copyright text: "© 2025 Lumhara" (or current year dynamically)
- Position on left side of footer (or top if stacked layout)
- Use appropriate font size and color for readability

**Footer Links**
- Include links to: Privacy Policy, Terms & Conditions, Accessibility Statement
- Links can be simple text links or styled buttons
- Ensure links are accessible and keyboard navigable
- Links can point to placeholder pages for now (actual content is out of scope)

**Styling and Aesthetic**
- Footer should match tranquil, minimal aesthetic
- Add subtle difference from header (lighter background, subtle border, or other subtle styling)
- Use light cream/off-white background (matching site)
- Use muted green accent color for links/icons
- Ensure sufficient contrast for accessibility
- Use Georgia font for any headings, Lato for body text (matching site typography)

**Responsive Design**
- Footer should work seamlessly on mobile, tablet, and desktop
- On mobile: consider stacked layout (copyright on top, social links below, or vice versa)
- Newsletter signup and contact info should stack appropriately on mobile
- Ensure touch targets are adequate on mobile devices
- Footer links should be easily accessible on all screen sizes

**Font Awesome Integration**
- Include Font Awesome CSS (via CDN or local file)
- Use appropriate Font Awesome icon classes for Substack, Instagram, YouTube
- Ensure icons load properly and have fallbacks
- Icons should be single color (use Font Awesome's solid style or apply CSS color)

**Accessibility Requirements**
- All links must have proper ARIA labels
- Social media links should have descriptive text (e.g., "Follow on Instagram")
- Form inputs must have associated labels
- Keyboard navigation must work for all interactive elements
- Color contrast must meet WCAG AA standards
- Footer should be properly announced by screen readers

## Visual Design

No specific visual mockups provided. Design should:
- Match the minimal, tranquil aesthetic seen in wireframes from navigation spec
- Use light cream background with muted green accents
- Maintain consistency with header styling while having subtle differences
- Feel peaceful and professional

## Existing Code to Leverage

**Navigation Implementation (`js/components.js`, `css/styles.css`)**
- Follow same color scheme and styling patterns
- Use same CSS variables for colors and spacing
- Match typography choices (Georgia for headings, Lato for body)
- Follow same responsive design patterns
- Use similar minimal aesthetic approach

**HTML Structure (`index.html`, `about.html`)**
- Add footer to both pages
- Use semantic HTML5 structure
- Follow same document structure patterns

## Out of Scope
- Newsletter signup backend functionality (form submission, email collection)
- Privacy Policy, Terms & Conditions, Accessibility Statement page content (just links)
- Contact form functionality (just contact info display)
- Social media account setup or content
- Font Awesome local installation (can use CDN)
- Complex footer layouts or multiple columns
- Footer sticky/fixed positioning

