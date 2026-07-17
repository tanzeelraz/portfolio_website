/*=========================================
    LOADING SCREEN
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

});


/*=========================================
    MOBILE MENU
=========================================*/

const menuBtn = document.getElementById("menu-btn");

const navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {

    navbar.classList.toggle("active");

    if (menuBtn.classList.contains("fa-bars")) {

        menuBtn.classList.remove("fa-bars");

        menuBtn.classList.add("fa-xmark");

    }

    else {

        menuBtn.classList.remove("fa-xmark");

        menuBtn.classList.add("fa-bars");

    }

};


/*=========================================
    DARK / LIGHT MODE
=========================================*/

const themeBtn = document.getElementById("theme-btn");

themeBtn.onclick = () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.classList.remove("fa-moon");

        themeBtn.classList.add("fa-sun");

    }

    else {

        themeBtn.classList.remove("fa-sun");

        themeBtn.classList.add("fa-moon");

    }

};


/*=========================================
    STICKY HEADER
=========================================*/

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 80);

});


/*=========================================
    ACTIVE NAVBAR
=========================================*/

let sections = document.querySelectorAll("section");

let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {

    let top = window.scrollY;

    sections.forEach(sec => {

        let offset = sec.offsetTop - 150;

        let height = sec.offsetHeight;

        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {

                link.classList.remove("active");

            });

            document.querySelector(".navbar a[href*=" + id + "]").classList.add("active");

        }

    });

};


/*=========================================
    SCROLL PROGRESS BAR
=========================================*/

window.addEventListener("scroll", () => {

    const progress = document.getElementById("progress-bar");

    const totalHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progressHeight =

        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressHeight + "%";

});
/*=========================================
    TYPING ANIMATION
=========================================*/

const typing = document.getElementById("typing");

const words = [

    "Full Stack Developer",

    "Frontend Developer",

    "Python Developer",

    "Web Designer",

    "Freelancer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 120);

}

typeEffect();


/*=========================================
    CUSTOM CURSOR
=========================================*/

const cursor = document.querySelector(".cursor");

const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursor2.style.left = e.clientX + "px";
    cursor2.style.top = e.clientY + "px";

});


/*=========================================
    SCROLL REVEAL
=========================================*/

const reveals = document.querySelectorAll(".reveal");

function revealSection() {

    reveals.forEach((item) => {

        const top = item.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 120) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSection);

revealSection();


/*=========================================
    COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".counter-box h2");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    const counterSection = document.querySelector(".counter");

    if (!counterSection) return;

    const top = counterSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = parseInt(counter.innerText);

            let count = 0;

            const speed = target / 80;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count) + "+";

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", startCounter);


/*=========================================
    AUTO CLOSE MOBILE MENU
=========================================*/

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.classList.remove("fa-xmark");

        menuBtn.classList.add("fa-bars");

    });

});


/*=========================================
    SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*=========================================
    IMAGE PARALLAX
=========================================*/

const homeImage = document.querySelector(".home-image img");

document.addEventListener("mousemove", (e) => {

    if (!homeImage) return;

    const x = (window.innerWidth / 2 - e.pageX) / 40;

    const y = (window.innerHeight / 2 - e.pageY) / 40;

    homeImage.style.transform = `translate(${x}px, ${y}px)`;

});


/*=========================================
    BUTTON RIPPLE EFFECT
=========================================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-8px) scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0) scale(1)";

    });

});


console.log("🚀 Premium Portfolio Loaded Successfully");