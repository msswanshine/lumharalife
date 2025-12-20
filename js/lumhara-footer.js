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
                
                .contact-info h3,
                .newsletter-signup h3 {
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
                
                .newsletter-form {
                    display: flex;
                    gap: var(--spacing-sm, 1rem);
                    flex-wrap: wrap;
                }
                
                .newsletter-form input[type="email"] {
                    flex: 1;
                    min-width: 200px;
                    padding: 0.75rem 1rem;
                    border: 1px solid rgba(0, 0, 0, 0.1);
                    border-radius: 4px;
                    font-family: 'Lato', sans-serif;
                    font-size: 1rem;
                    background-color: #ffffff;
                    color: var(--color-text, #2c2c2c);
                    transition: border-color 0.2s ease, box-shadow 0.2s ease;
                }
                
                .newsletter-form input[type="email"]:focus {
                    outline: none;
                    border-color: var(--color-accent, #445A44);
                    box-shadow: 0 0 0 2px rgba(68, 90, 68, 0.1);
                }
                
                .newsletter-form button {
                    padding: 0.75rem 1.5rem;
                    background-color: var(--color-accent, #445A44);
                    color: #ffffff;
                    border: none;
                    border-radius: 4px;
                    font-family: 'Lato', sans-serif;
                    font-size: 1rem;
                    font-weight: 400;
                    cursor: pointer;
                    transition: background-color 0.2s ease, transform 0.1s ease;
                    min-height: 44px;
                }
                
                .newsletter-form button:hover {
                    background-color: #6a8a6a;
                }
                
                .newsletter-form button:focus {
                    outline: 2px solid var(--color-accent, #445A44);
                    outline-offset: 2px;
                }
                
                .newsletter-form button:active {
                    transform: scale(0.98);
                }
                
                .sr-only {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0, 0, 0, 0);
                    white-space: nowrap;
                    border-width: 0;
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
                    
                    .contact-info h3,
                    .newsletter-signup h3 {
                        font-size: 1.25rem;
                    }
                    
                    .newsletter-form {
                        flex-direction: column;
                    }
                    
                    .newsletter-form input[type="email"],
                    .newsletter-form button {
                        width: 100%;
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
                    <div class="contact-info">
                        <h3>Get in Touch</h3>
                        <p>Email: <a href="mailto:contact@lumhara.com">contact@lumhara.com</a></p>
                    </div>
                    <div class="newsletter-signup">
                        <h3>Stay Connected</h3>
                        <form class="newsletter-form" aria-label="Newsletter signup">
                            <label for="newsletter-email-footer" class="sr-only">Email address</label>
                            <input 
                                type="email" 
                                id="newsletter-email-footer" 
                                name="email" 
                                placeholder="Enter your email" 
                                required
                                aria-required="true">
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
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

