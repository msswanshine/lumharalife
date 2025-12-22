// Lumhara Navigation Menu Web Component
class LumharaNavMenu extends HTMLElement {
    constructor() {
        super();
        this.isOpen = false;
        this.firstMenuItem = null;
        this.hamburgerButton = null;
    }

    connectedCallback() {
        if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' });
        }
        this.render();
        this.attachEventListeners();
    }

    disconnectedCallback() {
        this.removeEventListeners();
    }

    render() {
        if (!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                
                .hamburger-button {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: var(--spacing-xs, 0.5rem);
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    min-width: 44px;
                    min-height: 44px;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-text, #2c2c2c);
                    filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.8));
                    transition: filter 0.3s ease;
                }
                
                :host-context(lumhara-header.scrolled) .hamburger-button {
                    filter: none;
                }
                
                .hamburger-button:focus {
                    outline: 2px solid var(--color-accent, #7a9b7a);
                    outline-offset: 2px;
                }
                
                .hamburger-line {
                    width: 24px;
                    height: 2px;
                    background-color: currentColor;
                    transition: transform 0.3s ease, opacity 0.3s ease;
                }
                
                .hamburger-button[aria-expanded="true"] .hamburger-line:nth-child(1) {
                    transform: rotate(45deg) translate(5px, 5px);
                }
                
                .hamburger-button[aria-expanded="true"] .hamburger-line:nth-child(2) {
                    opacity: 0;
                }
                
                .hamburger-button[aria-expanded="true"] .hamburger-line:nth-child(3) {
                    transform: rotate(-45deg) translate(7px, -6px);
                }
                
                .menu-overlay {
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: 100%;
                    max-width: 400px;
                    height: 100vh;
                    background-color: var(--color-background, #faf8f5);
                    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
                    transform: translateX(100%);
                    transition: transform 0.3s ease;
                    z-index: 1000;
                    padding: var(--spacing-lg, 3rem) var(--spacing-md, 2rem);
                    overflow-y: auto;
                }
                
                @media (max-width: 768px) {
                    .menu-overlay {
                        max-width: 100%;
                        padding: var(--spacing-lg, 3rem) var(--spacing-sm, 1rem);
                    }
                }
                
                .menu-overlay.open {
                    transform: translateX(0);
                }
                
                .menu-backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background-color: rgba(0, 0, 0, 0.3);
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.3s ease;
                    z-index: 999;
                }
                
                .menu-backdrop.visible {
                    opacity: 1;
                    pointer-events: all;
                }
                
                .menu-nav {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .menu-item {
                    margin-bottom: var(--spacing-md, 2rem);
                }
                
                .menu-link {
                    display: block;
                    color: var(--color-text, #2c2c2c);
                    text-decoration: none;
                    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    font-size: 1.25rem;
                    padding: var(--spacing-sm, 1rem) 0;
                    min-height: 44px;
                    display: flex;
                    align-items: center;
                    transition: color 0.2s ease;
                }
                
                .menu-link:hover,
                .menu-link:focus {
                    color: var(--color-accent, #7a9b7a);
                    outline: none;
                }
                
                .menu-link:focus {
                    outline: 2px solid var(--color-accent, #7a9b7a);
                    outline-offset: 4px;
                }
            </style>
            <button 
                class="hamburger-button" 
                aria-label="Toggle navigation menu"
                aria-expanded="false"
                type="button">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
            <div class="menu-backdrop"></div>
            <nav class="menu-overlay" role="navigation" aria-label="Main navigation">
                <ul class="menu-nav">
                    <li class="menu-item">
                        <a href="#our-approach" class="menu-link">Our Approach</a>
                    </li>
                    <li class="menu-item">
                        <a href="#offerings" class="menu-link">Offerings</a>
                    </li>
                    <li class="menu-item">
                        <a href="#testimonials" class="menu-link">Testimonials</a>
                    </li>
                    <li class="menu-item">
                        <a href="about.html" class="menu-link">About Me</a>
                    </li>
                    <li class="menu-item">
                        <a href="#contact" class="menu-link">Contact</a>
                    </li>
                </ul>
            </nav>
        `;
    }

    attachEventListeners() {
        this.hamburgerButton = this.shadowRoot.querySelector('.hamburger-button');
        const menuOverlay = this.shadowRoot.querySelector('.menu-overlay');
        const menuBackdrop = this.shadowRoot.querySelector('.menu-backdrop');
        const menuLinks = this.shadowRoot.querySelectorAll('.menu-link');
        this.firstMenuItem = menuLinks[0];

        // Hamburger button click
        this.hamburgerButton.addEventListener('click', () => this.toggleMenu());

        // Backdrop click to close
        menuBackdrop.addEventListener('click', () => this.closeMenu());

        // Menu link clicks
        menuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Handle jump links with smooth scrolling
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        this.closeMenu();
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                } else {
                    // Regular page links - just close menu
                    this.closeMenu();
                }
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
    }

    removeEventListeners() {
        // Cleanup handled by browser when element is removed
    }

    handleKeyDown(e) {
        if (!this.isOpen) return;

        // Escape key closes menu
        if (e.key === 'Escape') {
            e.preventDefault();
            this.closeMenu();
        }
    }

    toggleMenu() {
        if (this.isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.isOpen = true;
        this.hamburgerButton.setAttribute('aria-expanded', 'true');
        const menuOverlay = this.shadowRoot.querySelector('.menu-overlay');
        const menuBackdrop = this.shadowRoot.querySelector('.menu-backdrop');
        
        menuOverlay.classList.add('open');
        menuBackdrop.classList.add('visible');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = 'hidden';
        
        // Move focus to first menu item
        if (this.firstMenuItem) {
            setTimeout(() => {
                this.firstMenuItem.focus();
            }, 100);
        }
    }

    closeMenu() {
        this.isOpen = false;
        this.hamburgerButton.setAttribute('aria-expanded', 'false');
        const menuOverlay = this.shadowRoot.querySelector('.menu-overlay');
        const menuBackdrop = this.shadowRoot.querySelector('.menu-backdrop');
        
        menuOverlay.classList.remove('open');
        menuBackdrop.classList.remove('visible');
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Return focus to hamburger button
        if (this.hamburgerButton) {
            this.hamburgerButton.focus();
        }
    }
}

// Register the custom element
customElements.define('lumhara-nav-menu', LumharaNavMenu);

