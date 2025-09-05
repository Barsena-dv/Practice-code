// script.js
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("app").style.display = "block";
});
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("menu-toggle");
    const links = document.getElementById("navbar-links");

    toggleBtn.addEventListener("click", () => {
        links.classList.toggle("show");
    });
});
// Smooth scroll for in-page hash links only
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: prefersReducedMotion ? "auto" : "smooth"
            });
        }
    });
});


