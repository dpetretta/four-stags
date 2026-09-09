

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 45);
});

const revealEls = [...document.querySelectorAll('.location-card, .detail-list div, .activity-grid div')];
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      entry.target.animate(
        [
          { opacity: 0, transform: 'translateY(18px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 700, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'both' }
      );
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => io.observe(el));

