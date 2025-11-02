function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

function Contact() {
    window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=tomas240605@gmail.com";
}

const items = document.querySelectorAll('.portfo-items .item');
let current = 0;
let autoPlayInterval;
const AUTOPLAY_DELAY = 4000;

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('active', 'prev', 'next');
        
        if (index === current) {
            item.classList.add('active');
        } else if (index === current - 1 || (current === 0 && index === items.length - 1)) {
            item.classList.add('prev');
        } else if (index === current + 1 || (current === items.length - 1 && index === 0)) {
            item.classList.add('next');
        }
    });
}

function nextSlide() {
    current = (current + 1) % items.length;
    updateCarousel();
    resetAutoPlay();
}

function prevSlide() {
    current = (current - 1 + items.length) % items.length;
    updateCarousel();
    resetAutoPlay();
}

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, AUTOPLAY_DELAY);
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

updateCarousel();
startAutoPlay();

document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

const carouselContainer = document.querySelector('.portfo-items');
if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });

    carouselContainer.addEventListener('mouseleave', () => {
        startAutoPlay();
    });
}

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = "<i class='bx bx-sun'></i>";
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = "<i class='bx bx-sun'></i>";
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = "<i class='bx bx-moon'></i>";
        localStorage.setItem('theme', 'light');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelector('.skill-items');
    if (window.innerWidth <= 900 && skillItems) {
        skillItems.scrollLeft = 0;
    }
});