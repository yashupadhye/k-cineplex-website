/* =========================================================
   K CINEPLEX - JAVASCRIPT
========================================================= */

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    const toggleMenu = (open) => {
        const isOpen = typeof open === "boolean" ? open : !navMenu.classList.contains("open");
        navMenu.classList.toggle("open", isOpen);
        menuToggle.setAttribute("aria-expanded", isOpen);

        const icon = menuToggle.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-bars", !isOpen);
            icon.classList.toggle("fa-xmark", isOpen);
        }
    };

    menuToggle.addEventListener("click", () => toggleMenu());

    /* Close mobile menu after clicking a link */
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => toggleMenu(false));
    });
}

/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
});

/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        const target = link.getAttribute("href");

        if (target === "#" + currentSection) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNav);
updateActiveNav();

/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (backToTop) {
        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    }
});

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear = document.getElementById("currentYear");
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (targetId === "#" || !document.querySelector(targetId)) {
            return;
        }

        event.preventDefault();
        const target = document.querySelector(targetId);
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    });
});

/* =========================================================
   SIMPLE REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".movie-card, .feature-card, .coming-card, " +
    ".contact-card, .gallery-item"
);

const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1
    }
);

revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});

/* =========================================================
   ADD REVEAL CSS DYNAMICALLY
========================================================= */

const revealStyle = document.createElement("style");
revealStyle.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(25px);
        transition:
            opacity 0.7s ease,
            transform 0.7s ease;
    }

    .reveal.revealed {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(revealStyle);

/* =========================================================
   CONSOLE BRAND MESSAGE
========================================================= */

console.log(
    "%c K CINEPLEX KOPARGAON ",
    "background:#d9a441;color:#080808;font-size:16px;font-weight:bold;padding:8px;"
);
console.log("A Luxurious 2 Screen Multiplex");