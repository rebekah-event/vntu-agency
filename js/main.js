/* VNTU Agency — Main JS */

// ---- Nav: mobile toggle + scroll class ----
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav__mobile-toggle');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}
window.addEventListener('scroll', () => {
  if (nav) nav.style.borderBottomColor = window.scrollY > 20 ? '#2A2A2A' : 'transparent';
}, { passive: true });

// ---- FAQ accordion ----
document.querySelectorAll('.faq-item__question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ---- Scroll reveal ----
const revealEls = document.querySelectorAll('.service-card, .case-card, .testimonial-card, .process-step, .ci-card');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ---- Active nav link ----
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__link').forEach(link => {
  if (link.getAttribute('href') === currentPath || 
      (currentPath === '' && link.getAttribute('href') === 'index.html')) {
    link.classList.add('active');
  }
});
