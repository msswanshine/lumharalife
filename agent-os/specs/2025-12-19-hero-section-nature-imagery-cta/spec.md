# Specification: Hero Section with Nature Imagery and CTA

## Goal
Create a hero section web component featuring a peaceful nature image (`home_hero.png`) as a full-width background, with text overlay including the business name "Lumhara", a decoded message "Illuminate your unique personal core", tagline "Discover your authentic self through integrated Human Systems", and a prominent "Know Thyself" CTA button linking to `#offerings`. The section should emphasize the glowing plant as the focal point and ensure text readability with a white transparent gradient overlay.

## User Stories
- As a visitor, I want to immediately understand what Lumhara is about so that I can determine if it's right for me
- As a visitor, I want to see a beautiful, peaceful image that reflects the tranquil nature of the service so that I feel welcomed and at ease
- As a visitor, I want to see a clear call-to-action so that I know how to proceed if I'm interested
- As a visitor, I want to understand the meaning of "Lumhara" so that I can connect with the brand's essence

## Specific Requirements

**Web Component Structure**
- Create reusable web component: `<lumhara-hero>`
- Use Custom Elements API
- Implement Shadow DOM for style encapsulation
- Component should be self-contained and reusable on other pages
- Follow same pattern as `<lumhara-header>` and `<lumhara-footer>` components

**Background Image**
- Use `home_hero.png` as full-width background image
- Image should cover entire hero section width and height
- Use CSS `background-image` with `background-size: cover` and `background-position: center`
- Ensure image maintains aspect ratio and doesn't distort
- Focal point should emphasize the glowing plant in the center (slightly below vertical center)
- Image path: `assets/images/home_hero.png` (copy from spec visuals folder)

**Gradient Overlay**
- Add white transparent gradient overlay on background image for text readability
- Gradient should be subtle enough to maintain image visibility while ensuring text contrast
- Use CSS `linear-gradient` with white color and appropriate opacity
- Gradient direction: top to bottom (darker at top, lighter at bottom) or bottom to top depending on text placement
- Ensure gradient provides sufficient contrast for text to meet WCAG AA standards

**Text Content and Hierarchy**
- **H1 Heading:** "Lumhara" (business name, largest text)
- **Decoded Message (Animated):** Progressive fade-in/fade-out animation cycling through three messages:
  1. "lum = lumen/light" (italicized) - fades in
  2. Fades out
  3. "hara = Japanese for 'core'" (italicized) - fades in
  4. Fades out
  5. "Illuminate your unique personal core" (italicized) - fades in
  6. Cycle repeats continuously
- **Tagline:** "Discover your authentic self through integrated Human Systems" (descriptive text)
- **CTA Button:** "Know Thyself" (prominent button linking to `#offerings`)
- Text order: Lumhara → Animated decoded message → Tagline → CTA button (vertical stack)

**Typography**
- Use Georgia font for "Lumhara" heading (h1) - matching header typography
- Use Lato font for decoded message (italicized), tagline, and button text - matching body typography
- Ensure appropriate font sizes for hierarchy (h1 largest, then decoded message, then tagline)
- Button text should be clearly readable and appropriately sized
- Decoded message text should be italicized for all three animation states

**Decoded Message Animation**
- Implement CSS keyframe animation or JavaScript-based fade transitions
- Animation cycle: fade in → hold → fade out → fade in next message → repeat
- Animation should be smooth and tranquil (not jarring or distracting)
- Each message should be visible long enough to be read comfortably (suggest 3-4 seconds visible, 0.5-1 second fade transition)
- Animation should respect `prefers-reduced-motion` media query (disable or slow down for accessibility)
- All three messages should be italicized:
  - "lum = lumen/light" (italicized)
  - "hara = Japanese for 'core'" (italicized)
  - "Illuminate your unique personal core" (italicized)
- Animation should loop continuously
- Ensure text remains readable during fade transitions (maintain sufficient opacity)

**CTA Button**
- Button text: "Know Thyself"
- Button links to: `#offerings` (smooth scroll to offerings section)
- Button should be prominent and visually distinct
- Use muted green accent color or complementary color matching site aesthetic
- Ensure button has adequate padding and touch target size (minimum 44x44px)
- Button should have hover and focus states for interactivity
- Use smooth scrolling behavior (can leverage existing smooth scroll from navigation)

**Layout and Positioning**
- Full-width hero section (100% viewport width)
- Text overlay centered or positioned appropriately over background image
- Text should be positioned to avoid covering the glowing plant focal point (consider left, right, or top positioning)
- Vertical centering or appropriate vertical positioning for text content
- Adequate padding around text content for readability

**Responsive Design**
- Hero section should be fully responsive
- On desktop: Full-width background image with text overlay
- On mobile/tablet: 
  - Image stacks above text content
  - H1 ("Lumhara") stays on/over the image
  - Decoded message, tagline, and CTA button appear below the image
  - Ensure text remains readable on all screen sizes
- Use media queries to adjust layout for different breakpoints
- Ensure image doesn't become too small or cropped awkwardly on mobile
- Maintain aspect ratio and focal point visibility across all screen sizes

**Styling and Aesthetic**
- Match tranquil, minimal aesthetic of the site
- Use existing color scheme (light cream/off-white, muted green accents)
- Ensure sufficient contrast for all text elements
- Maintain peaceful, professional feeling
- No additional watercolor/brushstroke effects needed (image provides the aesthetic)

**Accessibility Requirements**
- All text must meet WCAG AA contrast standards (especially with gradient overlay)
- Heading hierarchy must be semantic (h1 for Lumhara)
- CTA button must be keyboard accessible
- Button must have proper focus states
- Smooth scroll should respect `prefers-reduced-motion` media query
- Animation must respect `prefers-reduced-motion` media query (disable or significantly slow down animations)
- Image should have appropriate `alt` text or `aria-label` if used as background
- Ensure text is readable by screen readers (proper semantic structure)
- Consider using `aria-live="polite"` for animated text to announce changes to screen readers

## Visual Design

**Image Details:**
- File: `home_hero.png`
- Description: Vibrant, magical forest scene with a glowing plant as the central focal point
- Focal Point: Glowing plant in center (slightly below vertical center)
- Atmosphere: Magical, ethereal, serene, enchanted woodland
- Colors: Predominantly greens with golden/yellow light accents
- Mood: Growth, magic, natural beauty, transformation

**Text Positioning Considerations:**
- Text should be positioned to avoid covering the glowing plant
- Consider left, right, or top positioning for text overlay
- Gradient overlay should ensure readability regardless of background image colors

## Existing Code to Leverage

**Component Pattern (`js/lumhara-header.js`, `js/lumhara-footer.js`)**
- Follow same web component structure and Shadow DOM implementation
- Use same pattern for `connectedCallback`, `render`, and lifecycle methods
- Follow same style encapsulation approach

**Styling (`css/styles.css`)**
- Use existing CSS variables for colors and spacing
- Match typography choices (Georgia for headings, Lato for body)
- Follow same responsive design patterns
- Use similar minimal aesthetic approach

**Smooth Scrolling (`js/lumhara-nav-menu.js`)**
- Leverage existing smooth scroll implementation for CTA button
- Ensure consistent scroll behavior across site

**HTML Structure (`index.html`)**
- Add `<lumhara-hero>` component to homepage
- Place hero section after header, before other content sections
- Use semantic structure

## Out of Scope
- Image editing or manipulation (use image as provided)
- Additional watercolor/brushstroke effects (image is enough)
- Multiple hero variations or configurations
- Complex animations beyond the decoded message fade cycle
- Image lazy loading (can be added later if needed)
- Background image optimization or multiple image sizes (can be added later)
- Video backgrounds or other media types
- Parallax effects or scroll animations
- User-controlled animation (pause/play buttons)

## Technical Implementation Notes

**Web Component Structure:**
```javascript
class LumharaHero extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.render();
  }
  
  render() {
    // Shadow DOM template with styles and HTML
  }
}

customElements.define('lumhara-hero', LumharaHero);
```

**CSS Considerations:**
- Use `::before` or `::after` pseudo-element for gradient overlay
- Use `background-image` with `background-size: cover` for full-width image
- Use flexbox or grid for text positioning
- Use media queries for responsive layout changes

**Animation Implementation:**
- Option 1: CSS keyframe animation with `@keyframes` and `animation` property
  - Use `opacity` transitions for fade in/out
  - Use `animation-delay` to sequence the three messages
  - Use `animation-iteration-count: infinite` for continuous loop
- Option 2: JavaScript-based animation with `setInterval` or `requestAnimationFrame`
  - More control over timing and transitions
  - Can dynamically update text content
  - Easier to respect `prefers-reduced-motion`
- Recommended: CSS keyframes for performance, with JavaScript fallback for `prefers-reduced-motion`
- Animation timing: 3-4 seconds visible per message, 0.5-1 second fade transition
- Ensure smooth transitions using `transition` or `animation-timing-function: ease-in-out`

**Image Path:**
- Copy `home_hero.png` from `agent-os/specs/2025-12-19-hero-section-nature-imagery-cta/planning/visuals/` to `assets/images/home_hero.png`

**Animation Sequence Example:**
```
Timeline (approximate):
0s:    "lum = lumen/light" fades in (opacity 0 → 1)
3.5s:  "lum = lumen/light" fades out (opacity 1 → 0)
4s:    "hara = Japanese for 'core'" fades in (opacity 0 → 1)
7.5s:  "hara = Japanese for 'core'" fades out (opacity 1 → 0)
8s:    "Illuminate your unique personal core" fades in (opacity 0 → 1)
11.5s: "Illuminate your unique personal core" fades out (opacity 1 → 0)
12s:   Cycle repeats (back to "lum = lumen/light")
```

Total cycle duration: ~12 seconds

