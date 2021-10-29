document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});

document.querySelector(".search-btn").addEventListener("click", () => {
    document.querySelector(".msg-menu").classList.toggle("show");
});

ScrollReveal().reveal('.warning-banner');
ScrollReveal().reveal('.card-banner-three', { delay: 500 });
ScrollReveal().reveal('.bots-cards', { delay: 500 });