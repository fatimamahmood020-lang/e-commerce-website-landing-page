document.addEventListener("DOMContentLoaded", () => {

  /* Mint buttons click */
  const mintButtons = document.querySelectorAll(".mint-button");
  mintButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert(button.innerText + " clicked");
    });
  });

  /* Smooth scroll for links */
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* Simple fade-in on scroll */
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.6s ease";
    observer.observe(section);
  });

});
