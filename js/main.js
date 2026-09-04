/* =========================================
   FORT-ROYAL HOMES
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   PAGE LOADER
========================================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("pageLoader");

    if (loader) {
        loader.classList.add("hidden");
    }

});


/* =========================================
   HEADER SCROLL
========================================= */

const header = document.getElementById("siteHeader");

if (header) {

    function handleHeaderScroll() {

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", handleHeaderScroll);

    handleHeaderScroll();

}


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const mobileMenu = document.getElementById("mobileMenu");


function openMenu() {

    if (!mobileMenu) return;

    mobileMenu.classList.add("active");

    document.body.classList.add("menu-open");

    if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "true");
    }

}


function closeMenu() {

    if (!mobileMenu) return;

    mobileMenu.classList.remove("active");

    document.body.classList.remove("menu-open");

    if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
    }

}


if (menuToggle) {

    menuToggle.addEventListener("click", function (event) {

        event.preventDefault();

        event.stopPropagation();

        if (mobileMenu.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }

    });

}


if (menuClose) {

    menuClose.addEventListener("click", function (event) {

        event.preventDefault();

        closeMenu();

    });

}


/* =========================================
   MOBILE MENU LINKS
========================================= */

const mobileLinks = document.querySelectorAll(
    ".mobile-menu nav a, .mobile-menu-cta"
);

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        closeMenu();

    });

});


/* =========================================
   ESCAPE KEY CLOSES MENU
========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeMenu();
    }

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".intro-content, .property-card, .estate-content, .lifestyle-item, .service-item, .about-content"
);


if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

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


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

    });

} else {

    revealElements.forEach(function (element) {

        element.classList.add("revealed");

    });

}
