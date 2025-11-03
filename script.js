// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Highlight active page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Form Validation for Contact/Booking Form
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const formGroups = form.querySelectorAll('.form-group');
        
        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea, select');
            const errorMessage = group.querySelector('.error-message');
            
            if (input) {
                // Remove previous error state
                group.classList.remove('error');
                
                // Validate required fields
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    group.classList.add('error');
                    if (errorMessage) {
                        errorMessage.textContent = 'This field is required';
                    }
                }
                
                // Validate email
                if (input.type === 'email' && input.value) {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(input.value)) {
                        isValid = false;
                        group.classList.add('error');
                        if (errorMessage) {
                            errorMessage.textContent = 'Please enter a valid email address';
                        }
                    }
                }
                
                // Validate phone
                if (input.type === 'tel' && input.value) {
                    const phonePattern = /^[\d\s\-\+\(\)]+$/;
                    if (!phonePattern.test(input.value) || input.value.replace(/\D/g, '').length < 10) {
                        isValid = false;
                        group.classList.add('error');
                        if (errorMessage) {
                            errorMessage.textContent = 'Please enter a valid phone number';
                        }
                    }
                }
                
                // Validate date
                if (input.type === 'date' && input.value) {
                    const selectedDate = new Date(input.value);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    
                    if (selectedDate < today) {
                        isValid = false;
                        group.classList.add('error');
                        if (errorMessage) {
                            errorMessage.textContent = 'Please select a future date';
                        }
                    }
                }
                
                // Validate number of travelers
                if (input.type === 'number' && input.value) {
                    const value = parseInt(input.value);
                    if (value < 1 || value > 50) {
                        isValid = false;
                        group.classList.add('error');
                        if (errorMessage) {
                            errorMessage.textContent = 'Please enter a valid number (1-50)';
                        }
                    }
                }
            }
        });
        
        if (isValid) {
            // Show success message
            const successMessage = form.querySelector('.success-message');
            if (successMessage) {
                successMessage.style.display = 'block';
                successMessage.textContent = 'Thank you! Your booking request has been submitted successfully. We will contact you soon.';
            }
            
            // Reset form after 2 seconds
            setTimeout(() => {
                form.reset();
                if (successMessage) {
                    successMessage.style.display = 'none';
                }
            }, 3000);
        }
    });
    
    // Real-time validation on input
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            const formGroup = this.closest('.form-group');
            if (formGroup && this.value.trim() && formGroup.classList.contains('error')) {
                // Re-validate on blur if field has error
                const event = new Event('submit', { cancelable: true });
                form.dispatchEvent(event);
            }
        });
        
        input.addEventListener('input', function() {
            const formGroup = this.closest('.form-group');
            if (formGroup && formGroup.classList.contains('error')) {
                formGroup.classList.remove('error');
            }
        });
    });
}

// Initialize form validation
document.addEventListener('DOMContentLoaded', function() {
    validateForm('bookingForm');
    validateForm('contactForm');
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.destination-card, .feature-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s, transform 0.6s';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Destination search/filter functionality (for destinations page)
function initializeDestinationFilter() {
    const searchInput = document.getElementById('destinationSearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const destinationCards = document.querySelectorAll('.destination-card');
        
        destinationCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeDestinationFilter);
