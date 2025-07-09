// Smooth Scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');

for (const link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}

// Animate on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

const elements = document.querySelectorAll('.card, .hero-content, .about-section p');
elements.forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});

// Reveal animation classes
const style = document.createElement('style');
style.innerHTML = `
  .hidden {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease-out;
  }

  .show {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.style.backgroundColor = '#1f2937';
    nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
  } else {
    nav.style.backgroundColor = '#111827';
    nav.style.boxShadow = 'none';
  }
});

// Form submission animation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  form.reset();
});
