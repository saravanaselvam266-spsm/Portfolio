// Wait for the DOM to fully load before running scripts
document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Typewriter Effect Removed ---
  // (User requested removal)


  // --- 2. Smooth Scrolling for Navigation Links ---
  document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // --- 3. Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll(
    ".card, .skill-box, .about-card, section h2"
  );

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150; // How much of the element needs to be visible

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  // Trigger once on load
  revealOnScroll();
});
