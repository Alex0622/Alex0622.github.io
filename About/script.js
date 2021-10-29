document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});

document.querySelector(".search-btn").addEventListener("click", () => {
    document.querySelector(".msg-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.about-banner', { delay: 500 });
ScrollReveal().reveal('.banner-cards', { delay: 500 });
ScrollReveal().reveal('.news-cards', { delay: 500 });