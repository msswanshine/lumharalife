# Spec Requirements: Hero Section with Nature Imagery and CTA

## Initial Description
Hero section with nature imagery and CTA — Create hero section featuring a peaceful nature image, the transformative message "I finally know myself!", business name (Lumhara), brief description, and prominent call-to-action button.

## Requirements Discussion

### First Round Questions

**Q1:** Nature image: Do you have a specific image, or should we use a placeholder? If you have one, where should it be placed?
**Answer:** I have an idea for it. I just put @home_hero.png in the @2025-12-19-footer-copyright-social-media planning/visuals directory. Open to feedback on it. I want the focal point to be on the plant that is lighting up.

**Q2:** Layout: Should the text overlay the image, or be positioned beside/above it? Full-width background image with text overlay, or a side-by-side layout?
**Answer:** I want to make sure the text and buttons are visible. I like the idea of a full-width background image, but might need a white transparent gradient overlay on the background image so the text is readable.

**Q3:** CTA button: What should the button say and where should it link? (e.g., "Begin Your Journey" → `#offerings`, "Book a Session" → contact section, etc.)
**Answer:** "Know Thyself" and link to #offerings

**Q4:** Brief description: What should it say? A tagline about Lumhara, or a short description of what you offer?
**Answer:** Tagline about Lumhara please.

**Q5:** Text positioning: Where should "I finally know myself!" appear relative to the business name and description? (above, below, or integrated)
**Answer:** I'm unsure what you mean by this question.

**Q6:** Responsive behavior: On mobile, should the image stack above the text, or should we use a different image/cropping?
**Answer:** Stack above please, yes, but keep the h1 on the image and the description below it.

**Q7:** Component approach: Should this be a web component like the header/footer, or regular HTML/CSS?
**Answer:** web component, in case I want to reuse the hero for other pages.

**Q8:** Visual style: Any specific watercolor/brushstroke effects for the hero, or keep it minimal for now?
**Answer:** I think the image will be enough.

## Visual Assets

### Files Provided:
- `home_hero.png`: Vibrant, magical forest scene with a glowing plant as the central focal point. The image features a lush green forest bathed in golden sunlight, with a small vibrant green plant emitting golden light and sparkling particles. The plant sits on a mossy mound beside a flowing stream, with sunbeams piercing through the forest canopy in the background. The overall mood is one of growth, magic, and natural beauty. The focal point should be on the glowing plant.

### Visual Insights:
- **Focal Point:** Glowing plant in the center (slightly below vertical center)
- **Atmosphere:** Magical, ethereal, serene, enchanted woodland
- **Lighting:** Golden sunlight with misty/hazy quality
- **Colors:** Predominantly greens with golden/yellow light accents
- **Composition:** Central plant with forest background and stream in foreground
- **Mood:** Growth, magic, natural beauty, transformation

## Requirements Summary

### Functional Requirements
- Create hero section as web component (`<lumhara-hero>`)
- Use `home_hero.png` as full-width background image
- Focal point should emphasize the glowing plant in the center
- Full-width background image with text overlay
- Add white transparent gradient overlay on background image for text readability
- Display business name: "Lumhara" (as h1 heading)
- Display decoded message with animated progressive reveal:
  - Fade in: "lum = lumen/light" (italicized)
  - Fade out
  - Fade in: "hara = Japanese for 'core'" (italicized)
  - Fade out
  - Fade in: "Illuminate your unique personal core" (italicized)
  - Cycle repeats continuously
- Include tagline: "Discover your authentic self through integrated Human Systems"
- Include prominent CTA button: "Know Thyself" linking to `#offerings`
- Ensure text and buttons are clearly visible and readable
- Web component for reusability on other pages
- Responsive design: On mobile, image stacks above text, but h1 stays on image, description below

### Technical Considerations
- Create web component using Custom Elements API
- Use Shadow DOM for style encapsulation
- Full-width background image implementation
- White transparent gradient overlay (CSS linear-gradient or similar)
- Ensure text contrast meets accessibility standards
- Responsive image handling (object-fit, background-size, etc.)
- Web component should be reusable

### Scope Boundaries
**In Scope:**
- Hero section web component
- Full-width background image with overlay
- Text overlay (h1, business name, tagline, CTA button)
- Responsive design (mobile stacking)
- Web component implementation
- Image optimization considerations

**Out of Scope:**
- Image editing or manipulation (use image as provided)
- Additional watercolor/brushstroke effects (image is enough)
- Multiple hero variations
- Complex animations (keep minimal for now)
- Image lazy loading (can be added later if needed)

### Design Decisions Made
- Text order: "Lumhara" (h1) → Animated decoded message (progressive reveal) → "Discover your authentic self through integrated Human Systems" (tagline) → "Know Thyself" CTA button
- Tagline content: "Discover your authentic self through integrated Human Systems"
- Decoded message animation: Progressive fade-in/fade-out cycle:
  1. "lum = lumen/light" (italicized) fades in
  2. Fades out
  3. "hara = Japanese for 'core'" (italicized) fades in
  4. Fades out
  5. "Illuminate your unique personal core" (italicized) fades in
  6. Cycle repeats continuously

