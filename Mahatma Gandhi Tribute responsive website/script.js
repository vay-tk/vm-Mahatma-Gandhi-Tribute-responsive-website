const toggle = document.getElementById('toggle');
const navLinks = document.getElementById('nav-links');
const navbar = document.querySelector('.navbar');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});