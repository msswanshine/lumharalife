// Lumhara Header Web Component
class LumharaHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' });
        }
        this.render();
        this.attachScrollListener();
    }

    disconnectedCallback() {
        this.removeScrollListener();
    }

    attachScrollListener() {
        this.handleScroll = this.handleScroll.bind(this);
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        // Check initial scroll position
        this.handleScroll();
    }

    removeScrollListener() {
        if (this.handleScroll) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

    handleScroll() {
        const heroElement = document.querySelector('lumhara-hero');
        if (!heroElement) return;

        const heroHeight = heroElement.offsetHeight;
        const scrollY = window.scrollY || window.pageYOffset;
        
        // Add solid background class when scrolled 40% past the hero
        if (scrollY > heroHeight * 0.3) {
            this.classList.add('scrolled');
        } else {
            this.classList.remove('scrolled');
        }
    }

    render() {
        if (!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    min-height: 60px;
                }
                
                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: var(--spacing-sm, 1rem) var(--spacing-md, 2rem);
                    background-color: transparent;
                    max-width: 100%;
                    transition: background-color 0.3s ease, box-shadow 0.3s ease;
                }
                
                :host(.scrolled) .header {
                    background-color: var(--color-background, #faf8f5);
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                }
                
                @media (max-width: 768px) {
                    .header {
                        padding: var(--spacing-sm, 1rem) var(--spacing-sm, 1rem);
                    }
                }
                
                .logo-link {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    text-decoration: none;
                }
                
                .logo {
                    height: 40px;
                    width: auto;
                    display: block;
                    filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.8));
                    transition: filter 0.3s ease;
                }
                
                :host(.scrolled) .logo {
                    filter: none;
                }

                .logo-text {
                    font-family: Georgia, 'Times New Roman', serif;
                    font-size: 1.75rem;
                    font-weight: 500;
                    font-style: italic;
                    padding-top: 0.5rem;
                    color: var(--color-text, #000000);
                    text-shadow: 0 2px 4px rgba(255, 255, 255, 0.8);
                    transition: text-shadow 0.3s ease;
                }
                
                :host(.scrolled) .logo-text {
                    text-shadow: none;
                }
                
                .menu-button-container {
                    display: flex;
                    align-items: center;
                }
            </style>
            <div class="header">
                <a href="index.html" class="logo-link" aria-label="Lumhara Home">
                    <img src="assets/images/lumhara_logo_nav.png" alt="Lumhara Logo" class="logo">
                    <span class="logo-text">Lumhara</span>
                </a>
                <div class="menu-button-container">
                    <lumhara-nav-menu></lumhara-nav-menu>
                </div>
            </div>
        `;
    }
}

// Register the custom element
customElements.define('lumhara-header', LumharaHeader);

