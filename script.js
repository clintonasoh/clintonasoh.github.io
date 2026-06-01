/* ============================================================
   Theme Toggle
   ============================================================ */
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');
const themeIcon = document.getElementById('themeIcon');
const themeIconMobile = document.getElementById('themeIconMobile');
const themeLabel = document.getElementById('themeLabel');

function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const isDark = theme === 'dark';
    const iconClass = isDark ? 'fas fa-sun' : 'fas fa-moon';
    themeIcon.className = iconClass;
    themeIconMobile.className = iconClass;
    if (themeLabel) themeLabel.textContent = isDark ? 'Light mode' : 'Dark mode';
}

applyTheme(localStorage.getItem('theme') || 'light');

themeToggle.addEventListener('click', () => applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));
themeToggleMobile.addEventListener('click', () => applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));

/* ============================================================
   Mobile Sidebar
   ============================================================ */
const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');
const sidebarOverlay = document.getElementById('sidebarOverlay');

function openSidebar() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('active');
    hamburger.classList.add('active');
}

function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
    hamburger.classList.remove('active');
}

hamburger.addEventListener('click', () => sidebar.classList.contains('open') ? closeSidebar() : openSidebar());
sidebarOverlay.addEventListener('click', closeSidebar);

/* ============================================================
   Typing Animation
   ============================================================ */
const titles = ['AI/ML Engineer', 'Data Scientist', 'Researcher'];
let titleIndex = 0, charIndex = 0, isDeleting = false;
const typedText = document.getElementById('typedText');

function type() {
    const current = titles[titleIndex];
    typedText.textContent = isDeleting
        ? current.substring(0, charIndex - 1)
        : current.substring(0, charIndex + 1);
    isDeleting ? charIndex-- : charIndex++;

    let delay = isDeleting ? 55 : 95;
    if (!isDeleting && charIndex === current.length) { delay = 1800; isDeleting = true; }
    else if (isDeleting && charIndex === 0) { isDeleting = false; titleIndex = (titleIndex + 1) % titles.length; delay = 350; }

    setTimeout(type, delay);
}
type();

/* ============================================================
   Scroll Progress Bar
   ============================================================ */
const scrollProgress = document.getElementById('scrollProgress');
const mainContent = document.querySelector('.main-content');

function updateScrollProgress() {
    const el = mainContent || document.documentElement;
    const scrollTop = mainContent ? mainContent.scrollTop : window.scrollY;
    const scrollHeight = mainContent ? mainContent.scrollHeight - mainContent.clientHeight : document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress.style.width = scrollHeight > 0 ? `${(scrollTop / scrollHeight) * 100}%` : '0%';
}

if (mainContent) {
    mainContent.addEventListener('scroll', updateScrollProgress, { passive: true });
} else {
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
}

/* ============================================================
   Sidebar Active Nav — updates based on scroll position
   ============================================================ */
const snavItems = document.querySelectorAll('.snav-item');
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    const scrollContainer = mainContent || window;
    const scrollTop = mainContent ? mainContent.scrollTop : window.scrollY;
    let current = '';

    sections.forEach(sec => {
        const top = sec.offsetTop - (mainContent ? mainContent.getBoundingClientRect().top : 0) - 120;
        if (scrollTop >= top) current = sec.getAttribute('id');
    });

    snavItems.forEach(item => {
        item.classList.toggle('active', item.dataset.section === current);
    });
}

if (mainContent) {
    mainContent.addEventListener('scroll', updateActiveNav, { passive: true });
} else {
    window.addEventListener('scroll', updateActiveNav, { passive: true });
}

/* Sidebar nav click — smooth scroll + close on mobile */
snavItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById(item.dataset.section);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            closeSidebar();
        }
    });
});

/* ============================================================
   Reveal on Scroll
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
            const idx = siblings.indexOf(entry.target);
            setTimeout(() => entry.target.classList.add('visible'), Math.min(idx * 70, 350));
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ============================================================
   Animated Counters
   ============================================================ */
function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const step = target / (1200 / 16);
    let current = 0;
    const timer = setInterval(() => {
        current += step;
        if (current >= target) { el.textContent = target; clearInterval(timer); }
        else el.textContent = Math.floor(current);
    }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { animateCounter(entry.target); counterObserver.unobserve(entry.target); }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.sidebar-stat-num').forEach(el => counterObserver.observe(el));

/* ============================================================
   Project Filter
   ============================================================ */
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.project-card').forEach(card => {
            card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
        });
    });
});

/* ============================================================
   Back to Top
   ============================================================ */
const backToTop = document.getElementById('backToTop');
const scrollSource = mainContent || window;

scrollSource.addEventListener('scroll', () => {
    const scrollTop = mainContent ? mainContent.scrollTop : window.scrollY;
    backToTop.classList.toggle('visible', scrollTop > 400);
}, { passive: true });

backToTop.addEventListener('click', () => {
    if (mainContent) mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================================
   Contact Form — Web3Forms
   ============================================================ */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const formError   = document.getElementById('formError');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const original  = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        formSuccess.classList.remove('show');
        formError.classList.remove('show');

        const name    = document.getElementById('name').value.trim();
        const email   = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const data    = { name, email, message };

        try {
            const res  = await fetch('https://formspree.io/f/xwvzdadz', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(data)
            });

            if (res.ok) {
                formSuccess.classList.add('show');
                contactForm.reset();
                setTimeout(() => formSuccess.classList.remove('show'), 6000);
            } else {
                formError.classList.add('show');
                setTimeout(() => formError.classList.remove('show'), 6000);
            }
        } catch {
            formError.classList.add('show');
            setTimeout(() => formError.classList.remove('show'), 6000);
        } finally {
            submitBtn.innerHTML = original;
            submitBtn.disabled  = false;
        }
    });
}
