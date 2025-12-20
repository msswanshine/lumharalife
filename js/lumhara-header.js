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
                    background-color: var(--color-background, #faf8f5);
                    max-width: 100%;
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
                }

                .logo-text {
                    font-family: Georgia, 'Times New Roman', serif;
                    font-size: 1.75rem;
                    font-weight: 500;
                    font-style: italic;
                    padding-top: 0.5rem;
                    color: var(--color-text, #000000);
                }
                
                .menu-button-container {
                    display: flex;
                    align-items: center;
                }
            </style>
            <div class="header">
                <a href="index.html" class="logo-link" aria-label="Lumhara Home">
                    <img src="assets/images/lumhara_logo.png" alt="Lumhara Logo" class="logo">
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

