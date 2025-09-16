// Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggleBtn.querySelector('i');

const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-times');
    icon.classList.toggle('fa-bars');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            navLinks.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
            window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
        }
    });
});

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Scroll Header Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        header.style.padding = '10px 0';
    } else {
        header.style.boxShadow = 'var(--shadow)';
        header.style.padding = '15px 0';
    }
});
