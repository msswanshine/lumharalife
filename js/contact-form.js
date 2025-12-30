// Contact Form Handler for FormSubmit
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formMessages = document.getElementById('form-messages');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
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

