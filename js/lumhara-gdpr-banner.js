// Lumhara GDPR Cookie Consent Banner
class LumharaGDPRBanner extends HTMLElement {
    constructor() {
        super();
        this.storageKey = 'lumhara-cookie-consent';
    }

    connectedCallback() {
        // Check if user has already made a choice
        const consent = localStorage.getItem(this.storageKey);
        if (consent) {
            // User has already made a choice, don't show banner initially
            this.style.display = 'none';
            // But still render it so it can be shown later
            this.render();
            return;
        }

        // User hasn't made a choice, show banner
        this.render();
        this.attachEventListeners();
        this.showBanner();
    }

    showBanner() {
        // Ensure banner is rendered
        if (!this.shadowRoot || !this.shadowRoot.querySelector('.gdpr-banner')) {
            this.render();
        }
        
        // Update text if user has already made a choice
        const consent = localStorage.getItem(this.storageKey);
        const descriptionText = this.shadowRoot.querySelector('#gdpr-description');
        if (descriptionText && consent) {
            // Clear existing content
            descriptionText.innerHTML = '';
            // Add new text
            const textNode1 = document.createTextNode('You can update your cookie and data collection preferences at any time. By accepting, you consent to our use of cookies and data collection as described in our ');
            const privacyLink = document.createElement('a');
            privacyLink.href = 'privacy.html';
            privacyLink.textContent = 'Privacy Policy';
            const textNode2 = document.createTextNode('.');
            descriptionText.appendChild(textNode1);
            descriptionText.appendChild(privacyLink);
            descriptionText.appendChild(textNode2);
        } else if (descriptionText && !consent) {
            // Reset to original text if no consent exists
            descriptionText.innerHTML = 'This website uses minimal cookies and collects personal information (email addresses) when you subscribe to our newsletter or contact us. By continuing to use this site, you consent to our use of cookies and data collection as described in our <a href="privacy.html">Privacy Policy</a>.';
        }
        
        // Show the banner
        this.style.display = 'block';
        this.style.opacity = '0';
        this.style.transform = 'translateY(100%)';
        
        // Trigger reflow
        this.offsetHeight;
        
        // Animate in
        requestAnimationFrame(() => {
            this.style.opacity = '1';
            this.style.transform = 'translateY(0)';
        });
        
        // Reattach event listeners
        this.attachEventListeners();
    }

    attachEventListeners() {
        const acceptButton = this.shadowRoot.querySelector('.gdpr-accept');
        const declineButton = this.shadowRoot.querySelector('.gdpr-decline');
        const closeButton = this.shadowRoot.querySelector('.gdpr-close');

        if (acceptButton) {
            acceptButton.addEventListener('click', () => this.handleAccept());
        }

        if (declineButton) {
            declineButton.addEventListener('click', () => this.handleDecline());
        }

        if (closeButton) {
            closeButton.addEventListener('click', () => this.handleClose());
        }

        // Keyboard support
        this.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.handleClose();
            }
        });
    }

    handleAccept() {
        localStorage.setItem(this.storageKey, 'accepted');
        localStorage.setItem(this.storageKey + '-date', new Date().toISOString());
        this.hideBanner();
        // Dispatch event so forms can react
        window.dispatchEvent(new CustomEvent('gdpr-consent-changed', { 
            detail: { consent: 'accepted' },
            bubbles: true 
        }));
    }

    handleDecline() {
        localStorage.setItem(this.storageKey, 'declined');
        localStorage.setItem(this.storageKey + '-date', new Date().toISOString());
        this.hideBanner();
        // Dispatch event so forms can react
        window.dispatchEvent(new CustomEvent('gdpr-consent-changed', { 
            detail: { consent: 'declined' },
            bubbles: true 
        }));
    }

    handleClose() {
        // Close without making a choice (temporary dismissal)
        // Banner will show again on next visit
        this.hideBanner();
    }

    hideBanner() {
        this.style.opacity = '0';
        this.style.transform = 'translateY(100%)';
        setTimeout(() => {
            this.style.display = 'none';
        }, 300);
    }

    render() {
        if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' });
        }

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    z-index: 10000;
                    background-color: var(--color-background, #faf8f5);
                    border-top: 2px solid var(--color-accent, #445A44);
                    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.15);
                    padding: var(--spacing-md, 2rem);
                    transform: translateY(0);
                    opacity: 1;
                    transition: opacity 0.3s ease, transform 0.3s ease;
                }

                .gdpr-banner {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-lg, 3rem);
                    position: relative;
                }

                .gdpr-content-container {
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-lg, 3rem);
                    padding: 20px;
                }

                .gdpr-content {
                    flex: 1;
                }

                .gdpr-text {
                    font-family: 'Lato', sans-serif;
                    font-size: 0.95rem;
                    line-height: 1.6;
                    color: var(--color-text, #2c2c2c);
                    margin: 0;
                }

                .gdpr-text a {
                    color: var(--color-accent, #445A44);
                    text-decoration: underline;
                    transition: color 0.2s ease;
                }

                .gdpr-text a:hover,
                .gdpr-text a:focus {
                    color: var(--color-forest-shadow-green, #4F6F57);
                    outline: none;
                }

                .gdpr-actions {
                    display: flex;
                    gap: var(--spacing-sm, 1rem);
                    align-items: center;
                    flex-shrink: 0;
                }

                .gdpr-button {
                    padding: 0.625rem 1.5rem;
                    border-radius: 4px;
                    font-family: 'Lato', sans-serif;
                    font-size: 0.9rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    border: none;
                    min-height: 44px;
                    white-space: nowrap;
                }

                .gdpr-accept {
                    background: linear-gradient(135deg, var(--color-accent, #445A44) 0%, var(--color-forest-shadow-green, #4F6F57) 100%);
                    color: #ffffff;
                    box-shadow: 0 2px 4px rgba(68, 90, 68, 0.2);
                }

                .gdpr-accept:hover {
                    background: linear-gradient(135deg, var(--color-meadow-green, #7FAF7B) 0%, var(--color-accent, #445A44) 100%);
                    transform: translateY(-1px);
                    box-shadow: 0 4px 8px rgba(68, 90, 68, 0.3);
                }

                .gdpr-accept:focus {
                    outline: 2px solid var(--color-accent, #445A44);
                    outline-offset: 2px;
                }

                .gdpr-decline {
                    background-color: transparent;
                    color: var(--color-text, #2c2c2c);
                    border: 2px solid var(--color-accent, #445A44);
                }

                .gdpr-decline:hover {
                    background-color: rgba(68, 90, 68, 0.05);
                }

                .gdpr-decline:focus {
                    outline: 2px solid var(--color-accent, #445A44);
                    outline-offset: 2px;
                }

                .gdpr-close {
                    background: none;
                    border: none;
                    color: var(--color-text-light, #666666);
                    font-size: 1.5rem;
                    line-height: 1;
                    cursor: pointer;
                    padding: 0.5rem;
                    min-width: 44px;
                    min-height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: color 0.2s ease;
                }

                .gdpr-close:hover {
                    color: var(--color-text, #2c2c2c);
                }

                .gdpr-close:focus {
                    outline: 2px solid var(--color-accent, #445A44);
                    outline-offset: 2px;
                    border-radius: 4px;
                }

                @media (max-width: 426px) {
                    .gdpr-content-container {
                        flex-direction: column;
                        align-items: stretch;
                        gap: var(--spacing-sm, 1rem);
                    }

                    .gdpr-banner {
                        flex-direction: column;
                        align-items: stretch;
                        gap: var(--spacing-md, 2rem);
                    }

                    .gdpr-actions {
                        flex-direction: row
                    }

                    .gdpr-button {
                        width: 100px;
                    }

                    .gdpr-close {
                        position: absolute;
                        top: 0.5rem;
                        right: 0.5rem;
                    }

                    :host {
                        padding: var(--spacing-md, 2rem) var(--spacing-sm, 1rem);
                    }
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

                @media (prefers-reduced-motion: reduce) {
                    :host {
                        transition: none;
                    }

                    .gdpr-accept:hover {
                        transform: none;
                    }
                }
            </style>
            <div class="gdpr-banner" role="dialog" aria-labelledby="gdpr-title" aria-describedby="gdpr-description">
                <h2 id="gdpr-title" class="sr-only">Cookie Consent</h2>
                <div class="gdpr-content-container">
                    <div class="gdpr-content">
                        <p class="gdpr-text" id="gdpr-description">
                            This website uses minimal cookies and collects personal information (email addresses) when you subscribe to our newsletter or contact us. By continuing to use this site, you consent to our use of cookies and data collection as described in our <a href="privacy.html">Privacy Policy</a>.
                        </p>
                    </div>
                    <div class="gdpr-actions">
                        <button class="gdpr-button gdpr-accept" aria-label="Accept cookies and data collection">
                        Accept
                        </button>
                        <button class="gdpr-button gdpr-decline" aria-label="Decline cookies and data collection">
                        Decline
                        </button>
                        <button class="gdpr-close" aria-label="Close cookie banner" type="button">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

// Register the custom element
customElements.define('lumhara-gdpr-banner', LumharaGDPRBanner);

// Utility function to check GDPR consent status
export function getGDPRConsent() {
    return localStorage.getItem('lumhara-cookie-consent');
}

// Utility function to check if consent has been given
export function hasGDPRConsent() {
    return getGDPRConsent() === 'accepted';
}

// Global function to show GDPR banner (called from footer link)
window.showGDPRBanner = function() {
    const banner = document.querySelector('lumhara-gdpr-banner');
    if (banner) {
        banner.showBanner();
        // Scroll to banner
        banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
};

