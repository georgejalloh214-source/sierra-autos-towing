/* =================================
   SIERRA AUTOS TOWING — BRAND & BASE
   ================================= */
:root {
  --green: #1BAE4A;
  --white: #FFFFFF;
  --blue: #1F4DB3;
  --black: #000000;
  --dark-bg: #05070B;
  --nav-bg: rgba(10, 15, 30, 0.95);
  --card-bg: rgba(20, 30, 60, 0.9);
}

/* Reset & base */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, sans-serif;
  background: radial-gradient(circle at top, #05070B, #000000);
  color: var(--white);
  line-height: 1.6;
}

/* Utility */
.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

/* =================================
   NAVIGATION
   ================================= */
#navbar,
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background: var(--nav-bg);
  backdrop-filter: blur(10px);
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

#navbar.scrolled {
  background: rgba(5, 7, 11, 0.98);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.7);
  border-bottom-color: rgba(255, 255, 255, 0.15);
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  font-size: 26px;
}

.logo-text {
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: var(--white);
  text-decoration: none;
  font-weight: bold;
  font-size: 15px;
  position: relative;
  padding-bottom: 2px;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: var(--green);
  transition: width 0.25s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-call {
  background: var(--green);
  padding: 8px 15px;
  border-radius: 6px;
  color: var(--white);
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  box-shadow: 0 0 18px rgba(27, 174, 74, 0.6);
  transition: background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease, transform 0.15s ease;
}

.nav-call:hover {
  background: var(--white);
  color: var(--black);
  box-shadow: 0 0 24px rgba(27, 174, 74, 0.8);
  transform: translateY(-1px);
}

/* Mobile nav */
@media (max-width: 768px) {
  #navbar,
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    width: 100%;
    justify-content: center;
    margin-top: 10px;
    flex-wrap: wrap;
  }
}

/* =================================
   HERO SECTION (3D cinematic)
   ================================= */
.hero {
  position: relative;
  padding: 80px 20px 100px;
  overflow: hidden;
}

.hero-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  perspective: 1000px;
}

.hero-text {
  flex: 1 1 320px;
  text-align: left;
}

.hero h1 {
  font-size: 42px;
  font-weight: bold;
}

.hero h2 {
  font-size: 26px;
  margin-top: 10px;
  color: var(--green);
}

.hero p {
  margin-top: 10px;
  font-size: 18px;
  max-width: 520px;
}

.hero-image {
  flex: 1 1 280px;
  display: flex;
  justify-content: center;
}

.hero-image img {
  width: 100%;
  max-width: 380px;
  border-radius: 16px;
  box-shadow: 0 0 40px rgba(0, 255, 120, 0.4);
  animation: heroFloat 4s ease-in-out infinite;
  transform-origin: center;
}

.hero-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(27, 174, 74, 0.25), transparent 60%);
  pointer-events: none;
}

/* Hero tilt target */
.hero-grid {
  transition: transform 0.2s ease-out;
}

/* HERO ANIMATIONS */
@keyframes heroFloat {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

/* Buttons */
.contact-buttons {
  margin-top: 25px;
}

.btn {
  background: var(--green);
  padding: 12px 25px;
  margin: 8px;
  display: inline-block;
  color: var(--white);
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 15px;
  border: 1px solid transparent;
  transition: background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, transform 0.15s ease;
}

.btn:hover {
  background: var(--white);
  color: var(--black);
  border-color: var(--green);
  box-shadow: 0 0 20px rgba(27, 174, 74, 0.7);
  transform: translateY(-1px);
}

.btn.secondary {
  background: var(--blue);
}

.btn.secondary:hover {
  border-color: var(--blue);
}

.sms-btn {
  background: #25D366;
}

.sms-btn:hover {
  border-color: #25D366;
}

/* MOBILE HERO */
@media (max-width: 768px) {
  .hero-text {
    text-align: center;
  }

  .hero h1 {
    font-size: 32px;
  }

  .hero h2 {
    font-size: 20px;
  }

  .hero-inner {
    flex-direction: column;
    align-items: center;
  }
}

/* =================================
   SECTIONS
   ================================= */
section {
  padding: 60px 20px;
  text-align: center;
}

section h2 {
  font-size: 32px;
  margin-bottom: 20px;
  color: var(--green);
}

/* Reveal animation hooks */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.reveal.in {
  opacity: 1;
  transform: translateY(0);
}

/* =================================
   SERVICES
   ================================= */
.services ul {
  list-style: none;
  padding: 0;
}

.services li {
  background: var(--card-bg);
  margin: 10px auto;
  padding: 12px;
  width: 85%;
  border-radius: 10px;
  color: var(--white);
  font-size: 18px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
}

/* =================================
   ABOUT — STATS BOXES
   ================================= */
.stats {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 25px;
  flex-wrap: wrap;
}

.stat-box {
  background: var(--green);
  padding: 20px;
  width: 180px;
  border-radius: 10px;
  font-size: 26px;
  font-weight: bold;
  color: var(--white);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.7);
}

.stat-box span {
  display: block;
  margin-top: 6px;
  font-size: 14px;
  font-weight: normal;
}

/* Number element for JS counters */
.stat-num {
  display: block;
}

/* =================================
   WHY CHOOSE US
   ================================= */
.why ul {
  list-style: none;
  padding: 0;
}

.why li {
  background: var(--card-bg);
  margin: 10px auto;
  padding: 12px;
  width: 85%;
  border-radius: 10px;
  color: var(--white);
  font-size: 18px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
}

/* =================================
   GALLERY
   ================================= */
.gallery-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.gallery-item {
  width: 280px;
  height: 180px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(27, 174, 74, 0.7);
  background: var(--white);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* =================================
   MAP SECTION
   ================================= */
.map-section .map-container {
  max-width: 900px;
  margin: 0 auto;
}

.map-container iframe {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.6);
}

/* =================================
   REVIEWS SECTION
   ================================= */
.reviews-widget {
  max-width: 900px;
  margin: 0 auto;
  background: #111;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid var(--green);
}

/* =================================
   CONTACT
   ================================= */
.contact-buttons a {
  display: inline-block;
  margin: 10px;
}

/* =================================
   FOOTER
   ================================= */
footer {
  text-align: center;
  padding: 20px;
  background: var(--nav-bg);
  color: var(--white);
  font-size: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
