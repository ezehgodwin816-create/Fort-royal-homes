/* =========================================
   FORT-ROYAL HOMES
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   PAGE LOADER
========================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("pageLoader");

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 700);

});


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header = document.getElementById("siteHeader");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const mobileMenu = document.getElementById("mobileMenu");

function openMenu() {

    mobileMenu.classList.add("active");

    document.body.classList.add("menu-open");

}

function closeMenu() {

    mobileMenu.classList.remove("active");

    document.body.classList.remove("menu-open");

}

menuToggle.addEventListener("click", openMenu);

menuClose.addEventListener("click", closeMenu);


/* Close menu after clicking a link */

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", closeMenu);

});


/* =========================================
   SIMPLE REVEAL ANIMATIONS
========================================= */

const revealElements = document.querySelectorAll(
    ".intro-content, .property-card, .estate-content, .lifestyle-item, .service-item, .about-content"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});
