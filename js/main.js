document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for Explore button
  const exploreBtn = document.querySelector('.btn-explore');
  if (exploreBtn && exploreBtn.getAttribute('href')?.startsWith('#')) {
    exploreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = exploreBtn.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Fade-in hero content
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(12px)';
    requestAnimationFrame(() => {
      heroContent.style.transition = 'opacity 500ms ease, transform 500ms ease';
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    });
  }
});