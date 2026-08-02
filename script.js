// Sierra Autos — interactions
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar scroll state
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// Animated stat counters
const counters = document.querySelectorAll('.stat-num');
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const tick = () => {
      current += step;
      if (current >= target) { el.textContent = target; return; }
      el.textContent = current;
      requestAnimationFrame(tick);
    };
    tick();
    counterIO.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(c => counterIO.observe(c));

// Subtle 3D tilt on hero content following mouse (desktop only)
const hero = document.querySelector('.hero');
if (window.matchMedia('(hover: hover)').matches) {
  hero.addEventListener('mousemove', (e) => {
    const { innerWidth: w, innerHeight: h } = window;
    const x = (e.clientX / w - 0.5) * 2;
    const y = (e.clientY / h - 0.5) * 2;
    hero.style.setProperty('--mx', x.toFixed(3));
    hero.style.setProperty('--my', y.toFixed(3));
    const grid = document.querySelector('.hero-grid');
    if (grid) grid.style.transform = `perspective(600px) rotateX(55deg) translateY(-10%) scale(2) translate(${x * 10}px, ${y * 10}px)`;
  });
}
