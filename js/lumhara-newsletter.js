// Lumhara Newsletter Web Component
class LumharaNewsletter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
        this.setupForm();
        this.checkConsentStatus();
        // Listen for consent changes
        window.addEventListener('gdpr-consent-changed', () => this.checkConsentStatus());
    }

    checkConsentStatus() {
        const consent = localStorage.getItem('lumhara-cookie-consent');
        const form = this.shadowRoot?.querySelector('.newsletter-form');
        const emailInput = this.shadowRoot?.querySelector('#newsletter-email');
        const submitButton = this.shadowRoot?.querySelector('button[type="submit"]');
        const messageDiv = this.shadowRoot?.querySelector('.newsletter-message');
        
        if (!form || !emailInput || !submitButton || !messageDiv) return;

        if (consent === 'declined') {
            // Disable form
            emailInput.disabled = true;
            submitButton.disabled = true;
            emailInput.setAttribute('aria-disabled', 'true');
            submitButton.setAttribute('aria-disabled', 'true');
            
            // Show message
            messageDiv.textContent = 'To subscribe to our newsletter, please accept our cookie and data collection policy.';
            messageDiv.className = 'newsletter-message info';
            messageDiv.style.display = 'block';
        } else if (consent === 'accepted') {
            // Enable form
            emailInput.disabled = false;
            submitButton.disabled = false;
            emailInput.removeAttribute('aria-disabled');
            submitButton.removeAttribute('aria-disabled');
            
            // Hide info message if it exists
            if (messageDiv.classList.contains('info')) {
                messageDiv.style.display = 'none';
                messageDiv.textContent = '';
            }
        }
        // If no consent choice yet, form remains enabled but will be checked on submit
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
            
            // Check GDPR consent before submission
            const consent = localStorage.getItem('lumhara-cookie-consent');
            if (consent === 'declined') {
                messageDiv.textContent = 'To subscribe to our newsletter, please accept our cookie and data collection policy.';
                messageDiv.className = 'newsletter-message info';
                messageDiv.style.display = 'block';
                messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                return;
            }
            
            if (!consent) {
                messageDiv.textContent = 'Please accept or decline our cookie and data collection policy before subscribing.';
                messageDiv.className = 'newsletter-message info';
                messageDiv.style.display = 'block';
                messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                return;
            }
            
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
                    display: inline-block;
                    padding: 0.75rem 2rem;
                    background: linear-gradient(135deg, var(--color-accent, #445A44) 0%, var(--color-forest-shadow-green, #4F6F57) 100%);
                    color: #ffffff;
                    text-decoration: none;
                    border-radius: 4px;
                    font-family: 'Lato', sans-serif;
                    font-size: 1rem;
                    font-weight: 600;
                    transition: all 0.3s ease, transform 0.2s ease;
                    border: none;
                    cursor: pointer;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 2px 4px rgba(68, 90, 68, 0.2);
                    min-height: 44px;
                }
                
                /* Subtle watercolor wash on button */
                .newsletter-form button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                    transition: left 0.5s ease;
                }
                
                .newsletter-form button:hover::before {
                    left: 100%;
                }
                
                .newsletter-form button:hover {
                    background: linear-gradient(135deg, var(--color-meadow-green, #7FAF7B) 0%, var(--color-accent, #445A44) 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 8px rgba(68, 90, 68, 0.3);
                }
                
                .newsletter-form button:focus {
                    outline: 2px solid var(--color-accent, #445A44);
                    outline-offset: 2px;
                }
                
                .newsletter-form button:active {
                    transform: translateY(0);
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

                .newsletter-message.info {
                    display: block;
                    background-color: rgba(68, 90, 68, 0.1);
                    color: var(--color-accent, #445A44);
                    border: 1px solid var(--color-accent, #445A44);
                }

                .newsletter-form input[type="email"]:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                    background-color: #f5f5f5;
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

