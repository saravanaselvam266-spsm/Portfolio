// Wait for the DOM to fully load before running scripts
document.addEventListener("DOMContentLoaded", () => {
  // --- Smooth Scrolling for Navigation Links ---
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

  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100; // Trigger slightly earlier

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      }
      // Optional: Remove else block if you want elements to stay visible once revealed
      // else {
      //   element.classList.remove("active");
      // }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  // Trigger once on load
  revealOnScroll();
});
