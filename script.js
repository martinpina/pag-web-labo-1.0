const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', nav.classList.contains('open'));
});
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Resalta en navegación la sección visible (sin dependencias externas).
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('#nav a');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-25% 0px -65% 0px' });
sections.forEach(section => observer.observe(section));
