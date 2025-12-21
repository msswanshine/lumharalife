// Lumhara Hero Web Component
class LumharaHero extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' });
        }
        this.render();
        this.attachEventListeners();
        this.handleReducedMotion();
    }

    handleReducedMotion() {
        // Check for prefers-reduced-motion and disable animation if needed
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        const updateAnimation = (e) => {
            const messageTexts = this.shadowRoot.querySelectorAll('.message-text');
            if (e.matches) {
                // Disable animation - show only first message
                messageTexts.forEach((text, index) => {
                    if (index === 0) {
                        text.style.opacity = '1';
                        text.style.animation = 'none';
                    } else {
                        text.style.display = 'none';
                    }
                });
            } else {
                // Enable animation - show all messages with animation
                messageTexts.forEach((text) => {
                    text.style.display = '';
                    text.style.animation = '';
                    text.style.opacity = '';
                });
            }
        };
        
        // Check initial state
        updateAnimation(prefersReducedMotion);
        
        // Listen for changes
        prefersReducedMotion.addEventListener('change', updateAnimation);
    }

    attachEventListeners() {
        const ctaButtons = this.shadowRoot.querySelectorAll('.cta-button');
        ctaButtons.forEach(button => {
            button.addEventListener('click', this.handleCTAClick.bind(this));
        });
    }

    handleCTAClick(e) {
        const href = e.currentTarget.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Check for prefers-reduced-motion
                const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                
                targetElement.scrollIntoView({
                    behavior: prefersReducedMotion ? 'auto' : 'smooth',
                    block: 'start'
                });
            }
        }
    }

    render() {
        if (!this.shadowRoot) return;
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    position: relative;
                }
                
                .hero-container {
                    position: relative;
                    width: 100%;
                    min-height: 100vh;
                    background-image: url('assets/images/home_hero.png');
                    background-size: cover;
                    background-position: center 55%;
                    background-repeat: no-repeat;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    overflow: hidden;
                    margin-top: 0;
                    padding-top: 0;
                }
                
                /* Gradient overlay for text readability - stronger at top for better contrast */
                .hero-container::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(to bottom, 
                        rgba(255, 255, 255, 0.5) 0%, 
                        rgba(255, 255, 255, 0.3) 30%,
                        rgba(255, 255, 255, 0.2) 60%,
                        rgba(255, 255, 255, 0.25) 100%);
                    z-index: 1;
                }
                
                .hero-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    z-index: 2;
                    text-align: center;
                    max-width: 700px;
                    width: 100%;
                    margin: 0 auto;
                    height: 100vh;
                }

                .hero-content-top {
                    padding-top: 14rem;
                    width: 100%;
                }

                .hero-content-bottom {
                    padding-bottom: 8rem;
                    width: 100%;
                }
 
                .hero-logo {
                    height: 8rem;
                    width: auto;
                    display: block;
                    margin: 0 auto;
                }

                .hero-content h1 {
                    font-family: Georgia, 'Times New Roman', serif;
                    font-size: 4.5rem;
                    font-weight: 500;
                    font-style: italic;
                    color: var(--color-accent, #2c2c2c);
                    margin: 0;
                    line-height: 1.1;
                    text-shadow: 0 2px 4px rgba(255, 255, 255, 0.8);
                }
                
                .decoded-message {
                    font-family: 'Lato', sans-serif;
                    font-size: 2.25rem;
                    font-style: italic;
                    font-weight: 500;
                    color: var(--color-text, #2c2c2c);
                    margin-bottom: var(--spacing-md, 2rem);
                    min-height: 2.5rem;
                    text-shadow: 0 1px 3px rgba(255, 255, 255, 0.9);
                    position: relative;
                    width: 100%;
                }
                
                .message-text {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    width: 100%;
                    opacity: 0;
                    animation: fadeCycle 12s infinite;
                }
                
                .message-text:nth-child(1) {
                    animation-delay: 0s;
                }
                
                .message-text:nth-child(2) {
                    animation-delay: 4s;
                }
                
                .message-text:nth-child(3) {
                    animation-delay: 8s;
                }
                
                @keyframes fadeCycle {
                    0% {
                        opacity: 0;
                    }
                    8.33% {
                        opacity: 1;
                    }
                    29.17% {
                        opacity: 1;
                    }
                    33.33% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 0;
                    }
                }
                
                /* Smooth fade transitions */
                .message-text {
                    animation-timing-function: ease-in-out;
                }
                
                /* Respect prefers-reduced-motion */
                @media (prefers-reduced-motion: reduce) {
                    .message-text {
                        animation: none;
                        opacity: 1;
                    }
                    
                    .message-text:not(:first-child) {
                        display: none;
                    }
                }
                
                .tagline {
                    font-family: 'Lato', sans-serif;
                    font-size: 1.5rem;
                    font-weight: 400;
                    color: var(--color-text, #2c2c2c);
                    margin-bottom: var(--spacing-lg, 3rem);
                    line-height: 1.7;
                    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
                }
                
                .cta-button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: .5rem 2rem;
                    background-color: var(--color-accent, #445A44);
                    color: #ffffff;
                    text-decoration: none;
                    font-family: 'Lato', sans-serif;
                    font-size: 1.125rem;
                    font-weight: 500;
                    border-radius: 6px;
                    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
                    min-height: 48px;
                    min-width: 160px;
                    cursor: pointer;
                    border: none;
                    box-shadow: 0 2px 8px rgba(68, 90, 68, 0.3);
                }
                
                .cta-button:hover {
                    background-color: var(--color-text, #2c2c2c);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(68, 90, 68, 0.4);
                }
                
                .cta-button:active {
                    transform: translateY(0);
                    box-shadow: 0 2px 6px rgba(68, 90, 68, 0.3);
                }
                
                .cta-button:focus {
                    outline: 3px solid var(--color-accent, #445A44);
                    outline-offset: 3px;
                }
                
                /* Tablet styles */
                @media (min-width: 769px) and (max-width: 1024px) {  
                    .hero-logo {
                        height: 6rem;
                    }

                    .hero-content h1 {
                        font-size: 3.5rem;
                    }
                }
                
                /* Mobile styles - h1 stays on image, rest below */
                @media (max-width: 768px) {
                    .hero-container {
                        min-height: 50vh;
                        flex-direction: column;
                        align-items: stretch;
                        justify-content: flex-start;
                        background-position: center 45%;
                    }
                    
                    .hero-content-top {
                        padding-top: 6rem;
                    }

                    .hero-content {
                        height: 100%;
                        text-align: center;
                        margin-left: 0;
                        max-width: 100%;
                    }

                    .hero-logo {
                        height: 4rem;
                    }
                    
                    .hero-content h1 {
                        font-size: 2.75rem;
                        margin-bottom: var(--spacing-sm, 1rem);
                        text-shadow: 0 2px 6px rgba(255, 255, 255, 0.9);
                    }
                    
                    /* On mobile, decoded message, tagline, and CTA appear below image */
                    .hero-content .decoded-message,
                    .hero-content-bottom {
                        display: none;
                    }
                }
                
                /* Mobile content below image */
                .hero-mobile-content {
                    display: none;
                }
                
                @media (max-width: 768px) {
                    .hero-mobile-content {
                        display: block;
                        background-color: var(--color-background, #faf8f5);
                        padding: var(--spacing-lg, 3rem) var(--spacing-sm, 1rem);
                        text-align: center;
                    }
                    
                    .hero-mobile-content .decoded-message {
                        font-family: 'Lato', sans-serif;
                        font-size: 1.75rem;
                        font-style: italic;
                        font-weight: 500;
                        color: var(--color-text, #2c2c2c);
                        margin-bottom: var(--spacing-sm, 1rem);
                        min-height: 2rem;
                        position: relative;
                    }
                    
                    .hero-mobile-content .message-text {
                        position: absolute;
                        width: 100%;
                        opacity: 0;
                        animation: fadeCycle 12s infinite;
                    }
                    
                    .hero-mobile-content .message-text:nth-child(1) {
                        animation-delay: 0s;
                    }
                    
                    .hero-mobile-content .message-text:nth-child(2) {
                        animation-delay: 4s;
                    }
                    
                    .hero-mobile-content .message-text:nth-child(3) {
                        animation-delay: 8s;
                    }
                    
                    @media (prefers-reduced-motion: reduce) {
                        .hero-mobile-content .message-text {
                            animation: none;
                            opacity: 1;
                        }
                        
                        .hero-mobile-content .message-text:not(:first-child) {
                            display: none;
                        }
                    }
                    
                    .hero-mobile-content .tagline {
                        font-family: 'Lato', sans-serif;
                        font-size: 1.25rem;
                        font-weight: 400;
                        color: var(--color-text, #2c2c2c);
                        margin-bottom: var(--spacing-md, 2rem);
                        line-height: 1.7;
                    }
                }
            </style>
            <div class="hero-container" role="img" aria-label="Peaceful forest scene with glowing plant">
                <div class="hero-content">
                    <div class="hero-content-top">
                    <img src="assets/images/lumhara_logo.png" alt="Lumhara Logo" class="hero-logo">
                        <h1>Lumhara</h1>
                
                        <div class="decoded-message" aria-live="polite">
                            <span class="message-text">lum = lumen/light</span>
                            <span class="message-text">hara = Japanese for 'core'</span>
                            <span class="message-text">Illuminate your unique personal core</span>
                        </div>
                    </div>
                        <div class="hero-content-bottom">
                        <p class="tagline">Discover your authentic self through integrated Human Systems</p>
                        <a href="#offerings" class="cta-button" aria-label="Know Thyself - Navigate to offerings section">Know Thyself</a>
                    </div>
                </div>
            </div>
            <div class="hero-mobile-content">
                <div class="decoded-message" aria-live="polite">
                    <span class="message-text">lum = lumen/light</span>
                    <span class="message-text">hara = Japanese for 'core'</span>
                    <span class="message-text">Illuminate your unique personal core</span>
                </div>
                <p class="tagline">Discover your authentic self through integrated Human Systems</p>
                <a href="#offerings" class="cta-button" aria-label="Know Thyself - Navigate to offerings section">Know Thyself</a>
            </div>
        `;
    }
}

// Register the custom element
customElements.define('lumhara-hero', LumharaHero);

