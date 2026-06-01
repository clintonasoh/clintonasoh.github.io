/* ============================================================
   Theme Toggle (Dark / Light Mode)
   ============================================================ */
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeIcon.className = next === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
});

/* ============================================================
   Navbar — scroll glass effect + active link
   ============================================================ */
const navbar = document.getElementById('navbar');

function updateNavbar() {
    navbar.classList.toggle('scrolled', window.scrollY > 40);

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute('id');
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
}

window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

/* ============================================================
   Mobile Menu
   ============================================================ */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
    });
});

/* ============================================================
   Scroll Progress Bar
   ============================================================ */
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress.style.width = docHeight > 0 ? `${(scrollTop / docHeight) * 100}%` : '0%';
}, { passive: true });

/* ============================================================
   Typing Animation
   ============================================================ */
const titles = ['AI/ML Engineer', 'Data Scientist', 'Researcher'];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.getElementById('typedText');

function type() {
    const current = titles[titleIndex];

    if (isDeleting) {
        typedText.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedText.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    let delay = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === current.length) {
        delay = 1800;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        delay = 400;
    }

    setTimeout(type, delay);
}

type();

/* ============================================================
   Scroll Reveal Animations
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // Stagger children in the same parent grid
            const siblings = entry.target.parentElement.querySelectorAll('.reveal');
            let delay = 0;
            siblings.forEach((el, idx) => {
                if (el === entry.target) delay = idx * 80;
            });
            setTimeout(() => entry.target.classList.add('visible'), Math.min(delay, 400));
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ============================================================
   Animated Counters
   ============================================================ */
function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1400;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current);
        }
    }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(el => counterObserver.observe(el));

/* ============================================================
   Project Filter Tabs
   ============================================================ */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        projectCards.forEach(card => {
            const category = card.dataset.category;
            const show = filter === 'all' || category === filter;
            card.classList.toggle('hidden', !show);
        });
    });
});

/* ============================================================
   Back to Top Button
   ============================================================ */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================================
   Contact Form
   ============================================================ */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) return;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('email').focus();
            return;
        }

        formSuccess.classList.add('show');
        contactForm.reset();
        setTimeout(() => formSuccess.classList.remove('show'), 5000);
    });
}

/* ============================================================
   Smooth Scroll for Anchor Links
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
