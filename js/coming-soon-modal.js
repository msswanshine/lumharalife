// Coming Soon Modal JavaScript
// Handles opening/closing the newsletter signup modal

class ComingSoonModal {
    constructor() {
        this.modal = document.getElementById('newsletter-modal');
        this.backdrop = this.modal?.querySelector('.modal-backdrop');
        this.closeButton = this.modal?.querySelector('.modal-close');
        this.triggerButton = document.getElementById('newsletter-signup-btn');
        this.iframe = this.modal?.querySelector('.modal-iframe');
        
        // Focus trap elements
        this.focusableElements = [];
        this.firstFocusableElement = null;
        this.lastFocusableElement = null;
        
        // Check for prefers-reduced-motion
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        this.init();
    }
    
    init() {
        if (!this.modal || !this.triggerButton) return;
        
        // Set up event listeners
        this.triggerButton.addEventListener('click', () => this.openModal());
        this.closeButton?.addEventListener('click', () => this.closeModal());
        this.backdrop?.addEventListener('click', () => this.closeModal());
        
        // ESC key handler
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
                this.closeModal();
            }
        });
        
        // Initially hide modal
        this.modal.classList.add('hidden');
        this.modal.setAttribute('aria-hidden', 'true');
    }
    
    openModal() {
        if (!this.modal) return;
        
        // Store reference to trigger button for focus return
        this.previousActiveElement = document.activeElement;
        
        // Show modal
        this.modal.classList.remove('hidden');
        this.modal.setAttribute('aria-hidden', 'false');
        
        // Add fade-in animation (if motion is allowed)
        if (!this.prefersReducedMotion) {
            this.modal.classList.add('fade-in');
        }
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Set up focus trap
        this.setupFocusTrap();
        
        // Focus on close button
        this.closeButton?.focus();
    }
    
    closeModal() {
        if (!this.modal) return;
        
        // Add fade-out animation (if motion is allowed)
        if (!this.prefersReducedMotion) {
            this.modal.classList.add('fade-out');
            
            // Remove fade-out class after animation completes
            setTimeout(() => {
                this.modal.classList.remove('fade-out');
            }, 300);
        }
        
        // Hide modal
        this.modal.classList.add('hidden');
        this.modal.setAttribute('aria-hidden', 'true');
        
        // Remove animation classes
        this.modal.classList.remove('fade-in');
        
        // Re-enable body scroll
        document.body.style.overflow = '';
        
        // Remove focus trap
        this.removeFocusTrap();
        
        // Return focus to trigger button
        if (this.previousActiveElement) {
            this.previousActiveElement.focus();
        } else {
            this.triggerButton?.focus();
        }
    }
    
    setupFocusTrap() {
        // Get all focusable elements within modal
        const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        this.focusableElements = Array.from(
            this.modal.querySelectorAll(focusableSelectors)
        ).filter(el => {
            // Filter out hidden elements
            return el.offsetParent !== null && !el.disabled;
        });
        
        if (this.focusableElements.length === 0) return;
        
        this.firstFocusableElement = this.focusableElements[0];
        this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1];
        
        // Add event listener for Tab key
        this.modal.addEventListener('keydown', this.handleTabKey.bind(this));
    }
    
    removeFocusTrap() {
        // Remove Tab key event listener
        this.modal.removeEventListener('keydown', this.handleTabKey.bind(this));
        
        // Clear focus trap references
        this.focusableElements = [];
        this.firstFocusableElement = null;
        this.lastFocusableElement = null;
    }
    
    handleTabKey(e) {
        if (e.key !== 'Tab') return;
        
        // If only one focusable element, keep focus on it
        if (this.focusableElements.length === 1) {
            e.preventDefault();
            this.firstFocusableElement.focus();
            return;
        }
        
        // If Shift+Tab on first element, move to last
        if (e.shiftKey && document.activeElement === this.firstFocusableElement) {
            e.preventDefault();
            this.lastFocusableElement.focus();
        }
        // If Tab on last element, move to first
        else if (!e.shiftKey && document.activeElement === this.lastFocusableElement) {
            e.preventDefault();
            this.firstFocusableElement.focus();
        }
    }
}

// Initialize modal when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ComingSoonModal();
    });
} else {
    new ComingSoonModal();
}

