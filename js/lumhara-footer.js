// Lumhara Footer Web Component
class LumharaFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' });
        }
        this.render();
        this.setCurrentYear();
    }

    setCurrentYear() {
        const yearElement = this.shadowRoot.querySelector('#current-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

    render() {
        if (!this.shadowRoot) return;
        
        // Add Font Awesome stylesheet to Shadow DOM
        const faLink = document.createElement('link');
        faLink.rel = 'stylesheet';
        faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
        this.shadowRoot.appendChild(faLink);
        
        this.shadowRoot.innerHTML += `
            <style>
                :host {
                    display: block;
                    width: 100%;
                }
                
                .pre-footer {
                    padding: var(--spacing-xl, 4rem) var(--spacing-md, 2rem);
                    background-color: var(--color-background, #faf8f5);
                    border-top: 1px solid rgba(0, 0, 0, 0.05);
                }
                
                .pre-footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--spacing-xl, 4rem);
                    align-items: start;
                }
                
                .contact-info h3 {
                    font-family: Georgia, 'Times New Roman', serif;
                    font-size: 1.5rem;
                    color: var(--color-accent, #445A44);
                    margin-bottom: var(--spacing-sm, 1rem);
                    font-weight: 400;
                }
                
                .contact-info p {
                    color: var(--color-text, #2c2c2c);
                    font-size: 1rem;
                    line-height: 1.8;
                }
                
                .contact-info a {
                    color: var(--color-accent, #445A44);
                    text-decoration: none;
                    transition: color 0.2s ease;
                }
                
                .contact-info a:hover,
                .contact-info a:focus {
                    color: var(--color-text, #2c2c2c);
                    text-decoration: underline;
                    outline: none;
                }
                
                lumhara-newsletter {
                    display: block;
                    width: 100%;
                }
                
                footer {
                    background-color: #f5f3f0;
                    border-top: 1px solid rgba(0, 0, 0, 0.08);
                    padding: var(--spacing-lg, 3rem) var(--spacing-md, 2rem);
                    margin-top: var(--spacing-xl, 4rem);
                }
                
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: var(--spacing-md, 2rem);
                }
                
                .footer-copyright p {
                    color: var(--color-text-light, #666666);
                    font-size: 0.9rem;
                    margin: 0;
                    font-family: 'Lato', sans-serif;
                }
                
                .footer-links {
                    display: flex;
                    gap: var(--spacing-md, 2rem);
                    flex-wrap: wrap;
                }
                
                .footer-links a {
                    color: var(--color-text-light, #666666);
                    text-decoration: none;
                    font-size: 0.9rem;
                    font-family: 'Lato', sans-serif;
                    transition: color 0.2s ease;
                    padding: 0.25rem 0;
                }
                
                .footer-links a:hover,
                .footer-links a:focus {
                    color: var(--color-accent, #445A44);
                    outline: none;
                    text-decoration: underline;
                }
                
                .footer-social {
                    display: flex;
                    gap: var(--spacing-md, 2rem);
                    align-items: center;
                }
                
                .footer-social a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 44px;
                    height: 44px;
                    color: var(--color-accent, #445A44);
                    text-decoration: none;
                    transition: color 0.2s ease, transform 0.1s ease;
                    border-radius: 50%;
                }
                
                .footer-social a:hover {
                    color: var(--color-text, #2c2c2c);
                    transform: scale(1.1);
                }
                
                .footer-social a:focus {
                    outline: 2px solid var(--color-accent, #445A44);
                    outline-offset: 2px;
                }
                
                .footer-social i {
                    font-size: 1.25rem;
                }
                
                @media (max-width: 768px) {
                    .pre-footer {
                        padding: var(--spacing-lg, 3rem) var(--spacing-sm, 1rem);
                    }
                    
                    .pre-footer-content {
                        grid-template-columns: 1fr;
                        gap: var(--spacing-lg, 3rem);
                    }
                    
                    .contact-info h3 {
                        font-size: 1.25rem;
                    }
                    
                    footer {
                        padding: var(--spacing-md, 2rem) var(--spacing-sm, 1rem);
                    }
                    
                    .footer-content {
                        flex-direction: column;
                        text-align: center;
                        gap: var(--spacing-sm, 1rem);
                    }
                    
                    .footer-links {
                        justify-content: center;
                        gap: var(--spacing-sm, 1rem);
                    }
                    
                    .footer-social {
                        justify-content: center;
                    }
                }
                
                @media (min-width: 769px) and (max-width: 1024px) {
                    .pre-footer-content {
                        gap: var(--spacing-lg, 3rem);
                    }
                    
                    .footer-content {
                        gap: var(--spacing-sm, 1rem);
                    }
                }
            </style>
            <section class="pre-footer">
                <div class="pre-footer-content">
                    <lumhara-newsletter></lumhara-newsletter>
                </div>
            </section>
            <footer>
                <div class="footer-content">
                    <div class="footer-copyright">
                        <p>&copy; <span id="current-year">2025</span> Lumhara. All rights reserved.</p>
                    </div>
                    <div class="footer-links">
                        <a href="privacy.html">Privacy</a>
                        <a href="terms.html">Terms & Conditions</a>
                        <a href="accessibility.html">Accessibility</a>
                    </div>
                    <div class="footer-social">
                        <a href="https://substack.com/@lumhara" target="_blank" rel="noopener noreferrer" aria-label="Follow on Substack">
                            <i class="fab fa-substack" aria-hidden="true"></i>
                        </a>
                        <a href="https://instagram.com/lumhara" target="_blank" rel="noopener noreferrer" aria-label="Follow on Instagram">
                            <i class="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="https://youtube.com/@lumhara" target="_blank" rel="noopener noreferrer" aria-label="Follow on YouTube">
                            <i class="fab fa-youtube" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Register the custom element
customElements.define('lumhara-footer', LumharaFooter);

