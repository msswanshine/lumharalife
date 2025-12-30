// Lumhara Newsletter Web Component
class LumharaNewsletter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
        this.setupForm();
    }

    setupForm() {
        if (!this.shadowRoot) return;
        
        const form = this.shadowRoot.querySelector('.newsletter-form');
        if (!form) return;
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Open the newsletter modal (same as Coming Soon section)
            const modal = document.getElementById('newsletter-modal');
            if (!modal) return;
            
            // Store reference to trigger element for focus return
            const previousActiveElement = document.activeElement;
            
            // Show modal
            modal.classList.remove('hidden');
            modal.setAttribute('aria-hidden', 'false');
            
            // Add fade-in animation (if motion is allowed)
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (!prefersReducedMotion) {
                modal.classList.add('fade-in');
            }
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
            
            // Focus on close button
            const closeButton = modal.querySelector('.modal-close');
            if (closeButton) {
                closeButton.focus();
            }
            
            // Set up ESC key handler for this modal instance
            const handleEscape = (e) => {
                if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                    this.closeModal(previousActiveElement);
                    document.removeEventListener('keydown', handleEscape);
                }
            };
            document.addEventListener('keydown', handleEscape);
            
            // Set up backdrop click handler
            const backdrop = modal.querySelector('.modal-backdrop');
            const backdropClickHandler = () => {
                this.closeModal(previousActiveElement);
                backdrop?.removeEventListener('click', backdropClickHandler);
            };
            backdrop?.addEventListener('click', backdropClickHandler);
            
            // Store handlers for cleanup
            this._escapeHandler = handleEscape;
            this._backdropHandler = backdropClickHandler;
        });
    }
    
    closeModal(previousActiveElement) {
        const modal = document.getElementById('newsletter-modal');
        if (!modal) return;
        
        // Add fade-out animation (if motion is allowed)
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) {
            modal.classList.add('fade-out');
            setTimeout(() => {
                modal.classList.remove('fade-out');
            }, 300);
        }
        
        // Hide modal
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
        modal.classList.remove('fade-in');
        
        // Re-enable body scroll
        document.body.style.overflow = '';
        
        // Return focus
        if (previousActiveElement) {
            previousActiveElement.focus();
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
                
                .newsletter-signup {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-sm, 1rem);
                }
                
                .newsletter-signup h3 {
                    font-family: Georgia, 'Times New Roman', serif;
                    font-size: 1.5rem;
                    color: var(--color-accent, #445A44);
                    margin-bottom: var(--spacing-sm, 1rem);
                    font-weight: 400;
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
                
                .newsletter-contact-link {
                    margin-top: var(--spacing-sm, 1rem);
                    font-family: 'Lato', sans-serif;
                    font-size: 0.95rem;
                    color: var(--color-text, #2c2c2c);
                }
                
                .newsletter-contact-link a {
                    color: var(--color-accent, #445A44);
                    text-decoration: underline;
                    transition: color 0.2s ease;
                }
                
                .newsletter-contact-link a:hover,
                .newsletter-contact-link a:focus {
                    color: var(--color-text, #2c2c2c);
                    outline: none;
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
                
                @media (max-width: 768px) {
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
                }
            </style>
            <div class="newsletter-signup">
                <h3>Stay Connected</h3>
                <form class="newsletter-form" aria-label="Newsletter signup">
                    <label for="newsletter-email" class="sr-only">Email address</label>
                    <input 
                        type="email" 
                        id="newsletter-email" 
                        name="email" 
                        placeholder="Enter your email" 
                        required
                        aria-required="true">
                    <button type="submit">Subscribe</button>
                </form>
                <p class="newsletter-contact-link">Have questions? <a href="contact.html">Get in touch</a></p>
            </div>
        `;
    }
}

customElements.define('lumhara-newsletter', LumharaNewsletter);

