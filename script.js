/**
 * Enterprise Portfolio Script Infrastructure
 * Author: Tanzeel Raza
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Loading Screen Cleanup
    window.addEventListener("load", () => {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }
    });

    // 2. Navigation & Mobile Menu Handler
    const menuBtn = document.getElementById("menu-btn");
    const navbar = document.getElementById("navbar");

    if (menuBtn && navbar) {
        menuBtn.addEventListener("click", () => {
            navbar.classList.toggle("active");
            const icon = menuBtn.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-xmark");
            }
        });

        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navbar.classList.remove("active");
                const icon = menuBtn.querySelector("i");
                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-xmark");
                }
            });
        });
    }

    // 3. Theme Toggle (Dark / Light Mode)
    const themeBtn = document.getElementById("theme-btn");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light");
            const icon = themeBtn.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-moon");
                icon.classList.toggle("fa-sun");
            }
        });
    }

    // 4. Header Scroll Behaviors & Progress Bar
    const header = id("header");
    const progressBar = id("progress-bar");
    const topBtn = id("top-btn");

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        // Sticky Header
        if (header) {
            header.classList.toggle("sticky", scrollY > 50);
        }

        // Top Button Visibility
        if (topBtn) {
            topBtn.classList.toggle("active", scrollY > 400);
        }

        // Progress Bar Calculation
        if (progressBar) {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + "%";
        }
    });

    // 5. Typing Animation
    const typing = id("typing");
    if (typing) {
        const roles = [
            "Full Stack Developer",
            "Python Engineer",
            "Frontend Architect",
            "UI/UX Specialist"
        ];
        let roleIdx = 0;
        let charIdx = 0;
        let isDeleting = false;

        function typeEffect() {
            const current = roles[roleIdx];
            if (isDeleting) {
                typing.textContent = current.substring(0, charIdx--);
            } else {
                typing.textContent = current.substring(0, charIdx++);
            }

            let typeSpeed = isDeleting ? 40 : 100;

            if (!isDeleting && charIdx === current.length + 1) {
                typeSpeed = 1800;
                isDeleting = true;
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                roleIdx = (roleIdx + 1) % roles.length;
                typeSpeed = 500;
            }

            setTimeout(typeEffect, typeSpeed);
        }

        typeEffect();
    }

    // 6. Intersection Observer for Scroll Animations
    const observerOptions = { threshold: 0.15 };

    // Section Animations
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

    // Skill Bar Fill Animations
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll(".bar span");
                bars.forEach(bar => {
                    bar.style.width = bar.getAttribute("data-width");
                });
            }
        });
    }, observerOptions);

    const skillsSection = id("skills");
    if (skillsSection) skillObserver.observe(skillsSection);

    // Dynamic Counter Animation
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll(".counter-box h2");
                counters.forEach(counter => {
                    const target = +counter.getAttribute("data-target");
                    let count = 0;
                    const speed = target / 50;

                    const updateCount = () => {
                        count += speed;
                        if (count < target) {
                            counter.innerText = Math.ceil(count) + "+";
                            setTimeout(updateCount, 30);
                        } else {
                            counter.innerText = target + "+";
                        }
                    };
                    updateCount();
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const counterSection = document.querySelector(".counter");
    if (counterSection) counterObserver.observe(counterSection);

    // 7. Cursor Following Physics
    const cursor = document.querySelector(".cursor");
    const cursor2 = document.querySelector(".cursor2");

    if (cursor && cursor2) {
        document.addEventListener("mousemove", (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";

            cursor2.animate({
                left: `${e.clientX}px`,
                top: `${e.clientY}px`
            }, { duration: 500, fill: "forwards" });
        });
    }

    // Utility Helper
    function id(str) {
        return document.getElementById(str);
    }
});
