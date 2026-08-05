/* ============================================================
   SIERRA AUTOS TOWING — INTERACTIONS & ANIMATIONS
   Clean, modern, optimized JavaScript for your website
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initYear();
  initNavbarScroll();
  initSmoothScroll();
  initRevealAnimations();
  initStatCounters();
  initHeroTilt();
  initParallaxLayers();
  initCallNowHighlight();
});

/* -------------------------------
   Footer Year
-------------------------------- */
function initYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* -------------------------------
   Navbar Scroll State
-------------------------------- */
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const update = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

/* -------------------------------
   Smooth Scroll for Anchor Links
-------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* -------------------------------
   Scroll Reveal Animations
-------------------------------- */
function initRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    elements.forEach(el => el.classList.add("in"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

/* -------------------------------
   Animated Stat Counters
-------------------------------- */
function initStatCounters() {
  const counters = document.querySelectorAll(".stat-num");
  if (!counters.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      if (!target) return;

      if (prefersReducedMotion) {
        el.textContent = target;
        return;
      }

      let current = 0;
      const duration = 900; // ms
      const startTime = performance.now();

      const animate = now => {
        const progress = Math.min((now - startTime) / duration, 1);
        el.textContent = Math.floor(progress * target);

        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* -------------------------------
   Hero Tilt (3D movement)
-------------------------------- */
function initHeroTilt() {
  const hero = document.querySelector(".hero-grid");
  if (!hero) return;

  const supportsHover = window.matchMedia("(hover: hover)").matches;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!supportsHover || prefersReducedMotion) return;

  hero.addEventListener("mousemove", e => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const rotateX = y * -8;
    const rotateY = x * 8;

    hero.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  });

  hero.addEventListener("mouseleave", () => {
    hero.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  });
}

/* -------------------------------
   Parallax Depth Layers
-------------------------------- */
function initParallaxLayers() {
  const layers = document.querySelectorAll(".hero-layer");
  if (!layers.length) return;

  document.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    layers.forEach(layer => {
      const depth = parseFloat(layer.dataset.depth || 0);
      const moveX = x * depth * 25;
      const moveY = y * depth * 25;

      layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
  });
}

/* -------------------------------
   Emergency Call Button Highlight
-------------------------------- */
function initCallNowHighlight() {
  const btn = document.querySelector("[data-call-now]");
  if (!btn) return;

  const hour = new Date().getHours();
  const isLate = hour >= 20 || hour < 6;

  if (isLate) {
    btn.classList.add("call-highlight");
  }
}
