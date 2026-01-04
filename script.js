// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Typewriter Effect ---
    const textElement = document.querySelector('.badge');
    const texts = ["Full Stack Developer", "Python Enthusiast", "Web Designer"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            // Finished typing, pause then delete
            isDeleting = true;
            setTimeout(type, 2000); 
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting, move to next word
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500);
        } else {
            // Typing speed
            const speed = isDeleting ? 50 : 100;
            setTimeout(type, speed);
        }
    }
    
    // Start the typing effect
    type();


    // --- 2. Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


    // --- 3. Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.card, .skill-item, .about-card, section h2');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150; // How much of the element needs to be visible

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();

    // --- 4. Contact Form Handler (Beginner Friendly) ---
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop page from reloading

            // Get the values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if(name && email && message) {
                // Construct mailto link
                // This opens the user's default email app with the message pre-filled
                const subject = `Portfolio Message from ${name}`;
                const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                
                window.location.href = `mailto:saravana@email.com?subject=${subject}&body=${body}`;
                
                // Optional: Alert the user
                alert("Opening your email client to send the message!");
                
                // Clear form
                contactForm.reset();
            }
        });
    }
});
