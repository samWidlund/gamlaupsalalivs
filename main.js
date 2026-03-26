'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const hero = document.getElementById('hero');

    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }, { threshold: 0.1 });

    heroObserver.observe(hero);

    const animateOnScroll = document.querySelectorAll('.animate-on-scroll');
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    animateOnScroll.forEach(el => scrollObserver.observe(el));
});
