# Spec Requirements: Basic HTML Structure and Minimal Hamburger Navigation

## Initial Description
Basic HTML structure and minimal hamburger navigation — Set up semantic HTML5 structure with header, main content areas, and a minimal hamburger menu navigation that includes necessary jump links (to sections on the homepage) and/or links to separate pages (About Me, etc.), maintaining a clean, uncluttered appearance.

## Requirements Discussion

### First Round Questions

**Q1:** Navigation links: I assume the hamburger menu includes: Home, About Me, and jump links to homepage sections (Hero, Philosophy, Offerings, Testimonials, Contact). Is that correct, or should we include/exclude any?
**Answer:** We can leave out "Hero" and "Home" from the hamburger menu links. I'd like there to be a hamburger menu on the right corner and my logo on the left. I'd like the logo to link to the homepage.

**Q2:** Hamburger menu visibility: Should the hamburger menu be visible on all screen sizes (desktop, tablet, mobile), or only on mobile/tablet with a different navigation style on desktop?
**Answer:** Yes, I'd like the hamburger menu on all screen sizes.

**Q3:** Menu behavior: When opened, should the menu overlay the page content, slide in from a side, or appear as a dropdown below the hamburger icon?
**Answer:** Slide in from the side, and slide out when done.

**Q4:** Menu styling: Should the menu styling align with the tranquil, minimal aesthetic (watercolor/Japanese brushstroke), or keep it simple and functional?
**Answer:** Yes, please keep the menu styling in alignment with the rest of the site.

**Q5:** HTML structure: I assume we're creating a single-page homepage (`index.html`) with sections, plus a separate `about.html` page. Is that correct?
**Answer:** Yes, that's correct.

**Q6:** Accessibility: Should the hamburger menu include ARIA labels, keyboard navigation support, and focus management for screen readers?
**Answer:** Yes, definitely make the hamburger menu web accessible, using aria labels and keyboard navigation.

**Q7:** JavaScript functionality: I assume vanilla JavaScript handles the hamburger toggle (open/close) and smooth scrolling for jump links. Is that correct?
**Answer:** Yes to the functionality.

**Q8:** Header content: Besides the hamburger menu, should the header include the Lumhara logo/name, or remain minimal with just the hamburger icon?
**Answer:** Header should include lumhara logo on the top left.

### Existing Code to Reference

**Similar Features Identified:**
- User doesn't currently have any code for this project
- User likes the idea of reusing blocks of code, if possible
- User suggests considering "web components" for reusability
- User can help code if using a static React website tech stack for more interactive features
- User wants comparison of web components versus React

**Tech Stack Consideration:**
- Current tech stack document specifies HTML5, CSS3, vanilla JavaScript
- User is open to React or web components for reusability
- Decision needed: vanilla JS, web components, or React

### Follow-up Questions

**Follow-up 1:** Tech Stack Decision: The product tech stack specifies HTML5, CSS3, and vanilla JavaScript. You mentioned considering React for reusability and interactivity, and also mentioned web components. For this navigation feature, should we: Option A - Stick with vanilla HTML/CSS/JS (as per current tech stack), Option B - Use Web Components (custom elements) for reusable navigation components, or Option C - Switch to React for the entire project (would require updating tech-stack.md)? Which approach do you prefer? Web Components could provide reusability while staying close to vanilla JS, or we can proceed with vanilla JS for now and revisit React later if needed.
**Answer:** Let's use web components for all reusable components. I'd like to learn more about those anyway.

## Visual Assets

### Files Provided:
- `lumhara_logo.png`: Stylized monochromatic flame outline with brushstroke-like texture, white outline on black background, high contrast, minimal design with nested inner flame shape
- `main_nav_and_hero_wireframe.png`: Landing page wireframe showing header with "HSG" logo on left, navigation with "About" and "Services" links plus "Book a Call" button on right, hero section with "Illuminate Your Authentic Self" headline, descriptive philosophy text, and two CTA buttons, light beige background with subtle translucent watercolor-like shapes
- `offerings_card_hover_state.png`: Light-colored card with rounded corners showing "Composite Analysis" service, muted green title, light grey body text, subtle shadow, number "03" in top right, bullet points with green circles
- `offerings_wireframe.png`: Four service cards in grid layout (One-on-One Sessions, Workshops, Composite Analysis, Business Consulting), each with title, description, and bulleted services list, muted green accents, light cream background, elegant serif fonts
- `philosophy.png`: Two-column layout with "Where Science Meets Soul" heading, left column with philosophy text and quote, right column with "Integrated Modalities" list in rounded box, light grey text on cream background

### Visual Insights:
- **Design Patterns Identified:**
  - Header layout: Logo on left, navigation/actions on right
  - Minimal, clean aesthetic with ample whitespace
  - Light cream/off-white background color (user likes this)
  - Muted green accent color for text and accents (user likes this)
  - Elegant serif fonts for headings, sans-serif for body text
  - Subtle watercolor-like translucent shapes in background
  - Cards with rounded corners and subtle shadows
  - Numbered sections/cards with large, faint numbers
  
- **User Flow Implications:**
  - Logo links to homepage (confirmed)
  - Hamburger menu slides in from side (confirmed)
  - Navigation includes jump links to sections and separate pages
  
- **UI Components Shown:**
  - Header with logo and navigation
  - Hero section with headline and CTAs
  - Service/offering cards
  - Two-column philosophy section
  - Buttons with rounded corners
  
- **Fidelity Level:** Low-fidelity wireframes (user confirmed treating as wireframes/starting points)
  
- **Design Feedback from User:**
  - Need more contrast between backgrounds and text
  - Want more watercolor-like feel
  - Want more contrast between light and dark colors
  - Like the background color (light cream/off-white)
  - Like the green text color (muted green)
  - Not completely sold on the fonts yet
  - Treat visuals as wireframes and good places to start from

## Requirements Summary

### Functional Requirements
- Create semantic HTML5 structure with header, main content areas
- Header includes Lumhara logo on top left (links to homepage)
- Hamburger menu icon on top right corner
- Hamburger menu visible on all screen sizes (desktop, tablet, mobile)
- Menu slides in from side when opened, slides out when closed
- Navigation links include: Philosophy (jump link), Offerings (jump link), Testimonials (jump link), About Me (separate page), Contact (jump link)
- Exclude "Hero" and "Home" from navigation links (logo serves as home link)
- Menu styling aligns with tranquil, minimal aesthetic (watercolor/Japanese brushstroke feel)
- Single-page homepage (`index.html`) with sections
- Separate `about.html` page
- Vanilla JavaScript handles hamburger toggle (open/close)
- Smooth scrolling for jump links
- Full web accessibility: ARIA labels, keyboard navigation, focus management for screen readers

### Reusability Opportunities
- **DECISION:** Use web components for all reusable components
- User wants to learn more about web components
- Create reusable navigation component as web component
- Consider other reusable UI elements as web components (header, menu, etc.)

### Scope Boundaries
**In Scope:**
- Basic HTML5 semantic structure
- Header with logo and hamburger menu
- Hamburger menu functionality (slide in/out)
- Navigation links (About Me page + jump links to homepage sections)
- Accessibility features (ARIA, keyboard navigation)
- Smooth scrolling for jump links
- Responsive design (all screen sizes)
- Menu styling aligned with site aesthetic

**Out of Scope:**
- Hero section content (separate roadmap item)
- Footer (separate roadmap item)
- Page content sections (separate roadmap items)
- Watercolor/brushstroke styling details (will be applied in later roadmap item, but menu should align with aesthetic)
- Font selection finalized (user not sold on fonts yet)

### Technical Considerations
- Tech stack: HTML5, CSS3, vanilla JavaScript with Web Components (custom elements)
- **DECISION:** Use web components for all reusable components
- Web components will use Custom Elements API (native browser support)
- Logo file available: `lumhara_logo.png` (flame outline, brushstroke texture, high contrast)
- Visual wireframes provide layout guidance but need enhanced contrast and watercolor styling
- Background color preference: light cream/off-white
- Accent color preference: muted green
- Fonts: user not finalized on font choices yet

