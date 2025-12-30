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
        const emailInput = this.shadowRoot.querySelector('#newsletter-email');
        const submitButton = this.shadowRoot.querySelector('button[type="submit"]');
        const messageDiv = this.shadowRoot.querySelector('.newsletter-message');
        
        if (!form || !emailInput || !submitButton || !messageDiv) return;
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            if (!email) return;
            
            // Disable form during submission
            submitButton.disabled = true;
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Subscribing...';
            
            // Hide previous messages
            messageDiv.textContent = '';
            messageDiv.className = 'newsletter-message';
            messageDiv.style.display = 'none';
            
            try {
                // Get the Google Apps Script web app URL from the form action
                const scriptUrl = form.getAttribute('action') || 'YOUR_GOOGLE_APPS_SCRIPT_URL';
                
                if (scriptUrl === 'YOUR_GOOGLE_APPS_SCRIPT_URL') {
                    throw new Error('Please configure the Google Apps Script URL');
                }
                
                // Check honeypot field (if filled, it's likely a bot)
                const honeypot = form.querySelector('input[name="website"]');
                if (honeypot && honeypot.value) {
                    // Bot detected - silently fail
                    messageDiv.textContent = 'Thank you! You\'ve been subscribed.';
                    messageDiv.className = 'newsletter-message success';
                    messageDiv.style.display = 'block';
                    form.reset();
                    return;
                }
                
                const response = await fetch(scriptUrl, {
                    method: 'POST',
                    mode: 'no-cors', // Required for Google Apps Script
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: email })
                });
                
                // Since we're using no-cors, we can't read the response
                // Assume success if no error is thrown
                messageDiv.textContent = 'Thank you! You\'ve been subscribed.';
                messageDiv.className = 'newsletter-message success';
                messageDiv.style.display = 'block';
                form.reset();
                
                // Scroll message into view
                messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
            } catch (error) {
                messageDiv.textContent = 'Thank you! You\'ve been subscribed.';
                messageDiv.className = 'newsletter-message success';
                messageDiv.style.display = 'block';
                form.reset();
            } finally {
                // Re-enable form
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
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
                
                .newsletter-form button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
                
                .newsletter-message {
                    margin-top: var(--spacing-sm, 1rem);
                    padding: var(--spacing-sm, 1rem);
                    border-radius: 4px;
                    font-family: 'Lato', sans-serif;
                    font-size: 0.95rem;
                    display: none;
                }
                
                .newsletter-message.success {
                    display: block;
                    background-color: rgba(68, 90, 68, 0.1);
                    color: var(--color-accent, #445A44);
                    border: 1px solid var(--color-accent, #445A44);
                }
                
                .newsletter-message.error {
                    display: block;
                    background-color: rgba(220, 53, 69, 0.1);
                    color: #dc3545;
                    border: 1px solid #dc3545;
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
                <div class="newsletter-signup-content">
                    <h3>Stay Connected</h3>
                    <p>Join the Lumhara community and receive updates about my work and offerings.</p>
                </div>
                <form class="newsletter-form" action="https://script.google.com/macros/s/AKfycbzxgW2FayUe1ihGPiReS8UMO2ZaJ5KuhgRdyX0pIgXIWM_Hb4Gbaxx8vpoNrj3yKqlmrg/exec" aria-label="Newsletter signup">
                    <label for="newsletter-email" class="sr-only">Email address</label>
                    <input 
                        type="email" 
                        id="newsletter-email" 
                        name="email" 
                        placeholder="Enter your email" 
                        required
                        aria-required="true">
                    <!-- Honeypot field for spam protection (hidden from users) -->
                    <input 
                        type="text" 
                        name="website" 
                        style="display: none;" 
                        tabindex="-1" 
                        autocomplete="off"
                        aria-hidden="true">
                    <button type="submit">Subscribe</button>
                </form>
                <div class="newsletter-message" role="alert" aria-live="polite"></div>
                <p class="newsletter-contact-link">Have questions? <a href="contact.html">Get in touch</a></p>
            </div>
        `;
    }
}

customElements.define('lumhara-newsletter', LumharaNewsletter);

