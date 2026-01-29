// Workshop Modal JavaScript
// Opens/closes the workshop signup modal with focus trap.

class WorkshopModal {
    constructor() {
        this.modal = document.getElementById('workshop-modal');
        this.backdrop = this.modal?.querySelector('.modal-backdrop');
        this.closeButton = this.modal?.querySelector('.modal-close');
        this.triggerButton = document.getElementById('types-strategies-authorities-btn');

        // Focus trap elements
        this.focusableElements = [];
        this.firstFocusableElement = null;
        this.lastFocusableElement = null;
        this.boundHandleTabKey = this.handleTabKey.bind(this);

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

        // Show modal - remove hidden class and inline style
        this.modal.classList.remove('hidden');
        this.modal.style.display = ''; // allow CSS to control display
        this.modal.style.pointerEvents = '';
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

        // Mark as hidden for accessibility (prevents interaction)
        this.modal.setAttribute('aria-hidden', 'true');
        this.modal.style.pointerEvents = 'none';

        // Add fade-out animation (if motion is allowed)
        if (!this.prefersReducedMotion) {
            this.modal.classList.add('fade-out');

            setTimeout(() => {
                this.modal.classList.remove('fade-out');
                this.modal.classList.add('hidden');
                this.modal.style.display = 'none';
                this.modal.style.pointerEvents = '';
            }, 300);
        } else {
            this.modal.classList.add('hidden');
            this.modal.style.display = 'none';
            this.modal.style.pointerEvents = '';
        }

        // Remove animation classes
        this.modal.classList.remove('fade-in');

        // Re-enable body scroll
        document.body.style.overflow = '';

        // Remove focus trap
        this.removeFocusTrap();

        // Return focus to trigger button
        if (this.previousActiveElement && typeof this.previousActiveElement.focus === 'function') {
            this.previousActiveElement.focus();
        } else {
            this.triggerButton?.focus();
        }
    }

    setupFocusTrap() {
        if (!this.modal) return;

        // Get all focusable elements within modal
        const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        this.focusableElements = Array.from(this.modal.querySelectorAll(focusableSelectors)).filter((el) => {
            return el instanceof HTMLElement && el.offsetParent !== null && !(el instanceof HTMLButtonElement && el.disabled);
        });

        if (this.focusableElements.length === 0) return;

        this.firstFocusableElement = this.focusableElements[0];
        this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1];

        // Add event listener for Tab key
        this.modal.addEventListener('keydown', this.boundHandleTabKey);
    }

    removeFocusTrap() {
        if (!this.modal) return;
        this.modal.removeEventListener('keydown', this.boundHandleTabKey);
        this.focusableElements = [];
        this.firstFocusableElement = null;
        this.lastFocusableElement = null;
    }

    handleTabKey(e) {
        if (e.key !== 'Tab') return;
        if (!this.firstFocusableElement || !this.lastFocusableElement) return;

        if (this.focusableElements.length === 1) {
            e.preventDefault();
            this.firstFocusableElement.focus();
            return;
        }

        if (e.shiftKey && document.activeElement === this.firstFocusableElement) {
            e.preventDefault();
            this.lastFocusableElement.focus();
        } else if (!e.shiftKey && document.activeElement === this.lastFocusableElement) {
            e.preventDefault();
            this.firstFocusableElement.focus();
        }
    }
}

// Initialize modal when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new WorkshopModal();
    });
} else {
    new WorkshopModal();
}

