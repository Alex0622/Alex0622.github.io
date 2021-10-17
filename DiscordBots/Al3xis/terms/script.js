document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});

document.querySelector(".search-btn").addEventListener("click", () => {
    document.querySelector(".msg-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.card-banner-four', { delay: 500 });
ScrollReveal().reveal('.card-banner-five', { delay: 500 });
ScrollReveal().reveal('.news-cards', { delay: 500 });