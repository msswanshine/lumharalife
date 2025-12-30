# Specification: Brief Description/Philosophy Section

## Goal
Create a two-column philosophy section immediately following the hero that presents Lumhara's approach, emphasizing teaching people to listen to their inner guidance, featuring a Rumi quote on the left and a brief description on the right, with subtle zen/Japanese visual elements and background texture.

## User Stories
- As a visitor, I want to understand Lumhara's philosophy and approach so that I can determine if it aligns with my values and needs
- As a visitor, I want to see how Lumhara teaches inner guidance so that I understand the core methodology

## Specific Requirements

**Section Structure**
- Use existing `<section id="philosophy">` in `index.html`
- Replace placeholder content with actual philosophy content
- Regular HTML/CSS implementation (not web component)
- Follow existing section styling patterns (max-width 1200px, centered)

**Two-Column Layout**
- Desktop: Two-column layout using CSS Grid or Flexbox
- Left column: Rumi quote prominently displayed
- Right column: Brief philosophy description and approach content
- Mobile: Stacked layout with Rumi quote on top, description below
- Use same responsive breakpoints as other sections (mobile: max-width 768px, tablet: 769px-1024px, desktop: 1025px+)

**Rumi Quote**
- Display quote: "The universe is not outside of you. Look inside yourself; everything that you want, you already are."
- Position in left column on desktop, top on mobile
- Style with appropriate typography (consider italic or special styling for quote)
- Ensure quote is visually prominent and readable

**Philosophy Content**
- Brief description based on mission statement
- Emphasize teaching people to listen to inner guidance within themselves
- Explain Lumhara's approach to Human Systems guidance
- Mention compassionate approach to self-discovery
- Keep content short and discreet while still informative
- Use heading "Our Approach" (h2) - Georgia font
- Body text: Lato font, matching existing section styles

**Visual Elements**
- Include subtle visual elements: zen symbols, mandalas, Japanese imagery, yin/yang symbol, or subtle background pattern/texture
- Visual should complement tranquil, minimal aesthetic
- Consider: subtle background texture, decorative icon/symbol, or small illustration
- Visual should not distract from content readability
- Ensure visual meets accessibility standards (sufficient contrast if interactive)

**Typography**
- Heading: "Our Approach" (h2) - Georgia font, matching existing section h2 styles
- Quote text: Lato font, possibly italic or special styling
- Body text: Lato font, matching existing section p styles
- Ensure proper font sizes for hierarchy and readability

**Styling and Aesthetic**
- Match tranquil, minimal aesthetic of the site
- Use existing color scheme (light cream background, muted green accents)
- Follow existing section padding and spacing patterns
- Use existing CSS variables for colors and spacing
- Ensure sufficient contrast for all text elements

**Responsive Design**
- Desktop: Two-column layout (Rumi quote left, description right)
- Tablet: Two-column layout with adjusted spacing
- Mobile: Stacked layout (Rumi quote top, description bottom)
- Follow same responsive patterns as other sections
- Ensure text remains readable on all screen sizes
- Maintain proper spacing and padding across breakpoints

**Accessibility Requirements**
- All text must meet WCAG AA contrast standards
- Proper semantic HTML structure (section, h2, blockquote or appropriate quote element)
- Ensure visual elements don't interfere with screen readers
- Maintain keyboard navigation compatibility
- Proper heading hierarchy

## Visual Design

No specific visual mockups provided. Design should:
- Match the minimal, tranquil aesthetic seen in existing sections
- Use light cream background with muted green accents
- Incorporate subtle zen/Japanese visual elements (symbols, mandalas, yin/yang, background texture)
- Maintain peaceful and professional feeling
- Two-column layout should feel balanced and harmonious

## Existing Code to Leverage

**Section Styling (`css/styles.css`)**
- Use existing section styles with max-width 1200px and centered layout
- Follow existing padding patterns (var(--spacing-xl) var(--spacing-md))
- Use existing typography choices (Georgia for h2, Lato for body)
- Use existing CSS variables for colors and spacing
- Follow same responsive design patterns with media queries

**HTML Structure (`index.html`)**
- Use existing `<section id="philosophy">` placeholder
- Follow same semantic HTML5 structure patterns
- Maintain consistency with other sections

**Content Source (`agent-os/product/mission.md`)**
- Base philosophy description on mission statement
- Emphasize inner guidance teaching
- Reference Human Systems approach and compassionate self-discovery

## Out of Scope
- Web component implementation (using regular HTML/CSS)
- Complex animations or interactions
- Backend functionality or content management
- Multiple visual variations or A/B testing
- Extended content or detailed explanations (keeping it brief and discreet)
- Image upload or management system
- User-generated content
- Social sharing features
- Print-specific styling


