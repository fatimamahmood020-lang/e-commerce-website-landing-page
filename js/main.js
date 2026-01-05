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
      heroContent.style.transition = 'opacity 800ms ease, transform 800ms ease';
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    });
  }
});
// Fade-in second section on scroll
const featureSection = document.querySelector('.features-section');

if (featureSection) {
  featureSection.style.opacity = '0';
  featureSection.style.transform = 'translateY(40px)';

  window.addEventListener('scroll', () => {
    const rect = featureSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 150) {
      featureSection.style.transition =
        'opacity 900ms ease, transform 900ms ease';
      featureSection.style.opacity = '1';
      featureSection.style.transform = 'translateY(0)';
    }
  });
}
