// Contact Form Handler for FormSubmit
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formMessages = document.getElementById('form-messages');
    
    if (!contactForm) return;
    
    // Check consent status on load and when it changes
    function checkConsentStatus() {
        const consent = localStorage.getItem('lumhara-cookie-consent');
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        if (consent === 'declined') {
            // Disable form
            inputs.forEach(input => {
                input.disabled = true;
                input.setAttribute('aria-disabled', 'true');
            });
            submitButton.disabled = true;
            submitButton.setAttribute('aria-disabled', 'true');
            
            // Show message
            formMessages.textContent = 'To contact us, please accept our cookie and data collection policy.';
            formMessages.className = 'form-messages info';
            formMessages.style.display = 'block';
        } else if (consent === 'accepted') {
            // Enable form
            inputs.forEach(input => {
                input.disabled = false;
                input.removeAttribute('aria-disabled');
            });
            submitButton.disabled = false;
            submitButton.removeAttribute('aria-disabled');
            
            // Hide info message if it exists
            if (formMessages.classList.contains('info')) {
                formMessages.style.display = 'none';
                formMessages.textContent = '';
            }
        }
    }
    
    // Check on load
    checkConsentStatus();
    
    // Listen for consent changes
    window.addEventListener('gdpr-consent-changed', checkConsentStatus);
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Check GDPR consent before submission
        const consent = localStorage.getItem('lumhara-cookie-consent');
        if (consent === 'declined') {
            formMessages.textContent = 'To contact us, please accept our cookie and data collection policy.';
            formMessages.className = 'form-messages info';
            formMessages.style.display = 'block';
            formMessages.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            return;
        }
        
        if (!consent) {
            formMessages.textContent = 'Please accept or decline our cookie and data collection policy before submitting.';
            formMessages.className = 'form-messages info';
            formMessages.style.display = 'block';
            formMessages.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            return;
        }
        
        // Disable submit button
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        // Hide previous messages
        formMessages.style.display = 'none';
        formMessages.className = 'form-messages';
        
        // Get form data
        const formData = new FormData(contactForm);
        
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Success - FormSubmit returns success
                formMessages.textContent = 'Thank you! Your message has been sent. I\'ll get back to you as soon as possible.';
                formMessages.className = 'form-messages success';
                formMessages.style.display = 'block';
                contactForm.reset();
                
                // Scroll to message
                formMessages.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                // Error from FormSubmit
                formMessages.textContent = 'Oops! There was a problem sending your message. Please try again or email me directly.';
                formMessages.className = 'form-messages error';
                formMessages.style.display = 'block';
            }
        } catch (error) {
            // Network error
            formMessages.textContent = 'Oops! There was a problem sending your message. Please check your connection and try again.';
            formMessages.className = 'form-messages error';
            formMessages.style.display = 'block';
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
});

