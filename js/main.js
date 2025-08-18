// js/main.js
document.addEventListener('DOMContentLoaded', function() {
    /// Smooth scrolling ONLY for internal anchors on the same page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(135deg, rgba(249, 244, 248, 0.95) 0%, rgba(242, 218, 237, 0.95) 100%)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style['-webkit-backdrop-filter'] = 'blur(10px)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, var(--background) 0%, var(--background-soft) 100%)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style['-webkit-backdrop-filter'] = 'blur(10px)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Form validation for contact page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;
            let errorMessage = '';
            
            if (!name) {
                isValid = false;
                errorMessage += 'Por favor, ingresa tu nombre.\n';
            }
            
            if (!email) {
                isValid = false;
                errorMessage += 'Por favor, ingresa tu email.\n';
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                isValid = false;
                errorMessage += 'Por favor, ingresa un email válido.\n';
            }
            
            if (!message) {
                isValid = false;
                errorMessage += 'Por favor, ingresa tu mensaje.\n';
            }
            
            if (isValid) {
                // Simulate form submission
                document.getElementById('formSuccess').style.display = 'block';
                contactForm.reset();
                setTimeout(() => {
                    document.getElementById('formSuccess').style.display = 'none';
                }, 3000);
            } else {
                alert(errorMessage);
            }
        });
    }

    // WhatsApp button animation
    const whatsappButton = document.querySelector('.whatsapp-float');
    if (whatsappButton) {
        // Animate on load
        setTimeout(() => {
            whatsappButton.style.opacity = '1';
            whatsappButton.style.transform = 'scale(1)';
        }, 1000);
    }
});