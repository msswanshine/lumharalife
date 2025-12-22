# Lumhara

A personal business website for Human Systems guidance and coaching, featuring a peaceful, tranquil, minimal aesthetic with natural watercolor-like feeling and Japanese brushstrokes.

## About

Lumhara combines "Lum" (luminate) and "Hara" (unique personal core in Japanese), reflecting the mission to illuminate each person's unique essence. The website offers Human Systems guidance and coaching, combining Human Design, Gene Keys, Astrology, and Enneagram with tools inspired by Neuroscience, Neuroplasticity, Meditation, Visualization, and Life Coaching.

## Features

- **Hero Section**: Full-width nature imagery with animated decoded message explaining the meaning of "Lumhara"
- **Minimal Navigation**: Transparent header with hamburger menu that fades to solid background on scroll
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Web Components**: Reusable custom elements built with the Web Components API
- **Accessibility**: WCAG 2.2 Level AA compliant with proper ARIA labels, keyboard navigation, and screen reader support
- **Smooth Animations**: Tranquil fade animations that respect `prefers-reduced-motion` preferences

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with CSS variables, flexbox, and responsive design
- **Vanilla JavaScript**: ES6+ modules for interactivity and web components
- **Web Components**: Custom Elements API with Shadow DOM for component encapsulation
- **Google Fonts**: Lato for body text
- **System Fonts**: Georgia for headings
- **Font Awesome**: Social media icons

## Project Structure

```
lumharalife/
├── index.html              # Homepage
├── about.html              # About page
├── privacy.html            # Privacy policy page
├── terms.html              # Terms & conditions page
├── accessibility.html      # Accessibility statement page
├── css/
│   └── styles.css          # Global styles and CSS variables
├── js/
│   ├── lumhara-header.js   # Header web component
│   ├── lumhara-nav-menu.js # Navigation menu web component
│   ├── lumhara-hero.js     # Hero section web component
│   └── lumhara-footer.js   # Footer web component
├── assets/
│   └── images/
│       ├── lumhara_logo.png
│       └── home_hero.png
└── agent-os/               # Project documentation and specs
```

## Getting Started

### Prerequisites

No build tools or dependencies required! This is a static website that can be opened directly in a browser.

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lumharalife
```

2. Open `index.html` in your web browser, or use a local development server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

3. Navigate to `http://localhost:8000` in your browser

## Web Components

The site uses custom web components for reusable UI elements:

### `<lumhara-header>`
Transparent header with logo and navigation menu. Fades to solid background when scrolling past the hero section.

### `<lumhara-nav-menu>`
Hamburger menu with slide-in navigation. Includes smooth scrolling to page sections.

### `<lumhara-hero>`
Hero section with full-width background image, animated decoded message, and call-to-action button.

### `<lumhara-footer>`
Footer with copyright, social media links, newsletter signup, and contact information.

## Customization

### Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --color-background: #faf8f5; /* Light cream/off-white */
    --color-accent: #445A44;     /* Muted green */
    --color-text: #2c2c2c;       /* Dark grey */
    --color-text-light: #666666;
}
```

### Spacing

Adjust spacing variables:

```css
:root {
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 3rem;
    --spacing-xl: 4rem;
}
```

### Typography

- **Headings**: Georgia (system font)
- **Body**: Lato (Google Fonts)

To change fonts, update the font-family declarations in `css/styles.css` and the component files.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Web Components are supported in all modern browsers. For older browser support, consider using a polyfill.

## Accessibility

This website is designed to meet WCAG 2.2 Level AA standards:

- Semantic HTML5 structure
- Proper heading hierarchy
- ARIA labels and live regions
- Keyboard navigation support
- Focus management
- Color contrast compliance
- `prefers-reduced-motion` support for animations

## Development

### Adding a New Page

1. Create a new HTML file (e.g., `new-page.html`)
2. Copy the structure from `index.html`
3. Update the content in the `<main>` section
4. Ensure all web component scripts are included

### Modifying Components

Each component is self-contained in its own file:
- `js/lumhara-header.js`
- `js/lumhara-nav-menu.js`
- `js/lumhara-hero.js`
- `js/lumhara-footer.js`

Components use Shadow DOM for style encapsulation, so styles are scoped to each component.

## License

All rights reserved. This is a personal business website.

## Contact

For inquiries about Human Systems guidance and coaching services, please visit the website or use the contact information provided in the footer.

---

Built with care for a peaceful, tranquil user experience.

