/* =========================================
   FORT-ROYAL HOMES
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   PAGE LOADER
========================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("pageLoader");

    if (loader) {
        loader.classList.add("hidden");
    }

});


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header = document.getElementById("siteHeader");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });

}


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const mobileMenu = document.getElementById("mobileMenu");


function openMenu() {

    if (mobileMenu) {
        mobileMenu.classList.add("active");
    }

    document.body.classList.add("menu-open");

}


function closeMenu() {

    if (mobileMenu) {
        mobileMenu.classList.remove("active");
    }

    document.body.classList.remove("menu-open");

}


if (menuToggle) {
    menuToggle.addEventListener("click", openMenu);
}


if (menuClose) {
    menuClose.addEventListener("click", closeMenu);
}


/* =========================================
   CLOSE MOBILE MENU AFTER LINK CLICK
========================================= */

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", closeMenu);

});


/* =========================================
   SCROLL REVEAL ANIMATIONS
========================================= */

const revealElements = document.querySelectorAll(
    ".intro-content, .property-card, .estate-content, .lifestyle-item, .service-item, .about-content"
);


if ("IntersectionObserver" in window) {

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

} else {

    revealElements.forEach(element => {

        element.classList.add("revealed");

    });

}
