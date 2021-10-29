document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});

document.querySelector(".search-btn").addEventListener("click", () => {
    document.querySelector(".msg-menu").classList.toggle("show");
});

ScrollReveal().reveal('.warning-banner');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.card-banner-one', { delay: 500 });
ScrollReveal().reveal('.card-banner-two', { delay: 500 });