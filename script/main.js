// Smooth Scroll for internal links
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))?.scrollIntoView({
      behavior: 'smooth'
    });
  });
}

// Simple fade-in animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .hero-text').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});

// Fade-in animation styles
const style = document.createElement('style');
style.innerHTML = `
.hidden {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
}
.show {
  opacity: 1;
  transform: translateY(0);
}
`;
document.head.appendChild(style);
