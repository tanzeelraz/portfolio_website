/**
 * Enterprise 3D Portfolio Engine
 * Features: Interactive Particle Canvas, Dynamic 3D Tilt, Card Flip Handlers, Theme Switching
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

    // 2. Mobile Menu Handler
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

    // 3. Dark / Light Theme Toggle
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

    // 4. Header Scroll & Progress Bar
    const header = document.getElementById("header");
    const progressBar = document.getElementById("progress-bar");
    const topBtn = document.getElementById("top-btn");

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        if (header) header.classList.toggle("sticky", scrollY > 50);
        if (topBtn) topBtn.classList.toggle("active", scrollY > 400);

        if (progressBar) {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + "%";
        }
    });

    // 5. Dynamic Typing Animation
    const typing = document.getElementById("typing");
    if (typing) {
        const roles = [
            "Full Stack Developer",
            "Python Engineer",
            "Frontend 3D Architect",
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

    // 6. Scroll Reveal Observer & Skill Bars
    const observerOptions = { threshold: 0.15 };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

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

    const skillsSection = document.getElementById("skills");
    if (skillsSection) skillObserver.observe(skillsSection);

    // 7. Counter Animation
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

    // 8. 3D Tilt Engine for `.tilt-card`
    const tiltCards = document.querySelectorAll(".tilt-card");
    tiltCards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -12;
            const rotateY = ((x - centerX) / centerX) * 12;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
        });
    });

    // 9. Interactive Particle Canvas Background Engine
    class InteractiveCanvas {
        constructor() {
            this.canvas = document.createElement("canvas");
            this.canvas.id = "bg-canvas";
            document.body.prepend(this.canvas);
            this.ctx = this.canvas.getContext("2d");

            this.particles = [];
            this.particleCount = Math.min(Math.floor(window.innerWidth / 12), 90);
            this.mouse = { x: null, y: null, radius: 150 };

            this.init();
            this.events();
            this.animate();
        }

        init() {
            this.resize();
            this.particles = [];
            for (let i = 0; i < this.particleCount; i++) {
                this.particles.push(new Particle(this.canvas.width, this.canvas.height));
            }
        }

        events() {
            window.addEventListener("resize", () => this.init());
            window.addEventListener("mousemove", (e) => {
                this.mouse.x = e.clientX;
                this.mouse.y = e.clientY;
            });
            window.addEventListener("mouseleave", () => {
                this.mouse.x = null;
                this.mouse.y = null;
            });
        }

        resize() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }

        animate() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            const isLight = document.body.classList.contains("light");
            const nodeColor = isLight ? "rgba(2, 132, 199, " : "rgba(0, 240, 255, ";

            for (let i = 0; i < this.particles.length; i++) {
                this.particles[i].update(this.mouse, this.canvas.width, this.canvas.height);
                this.particles[i].draw(this.ctx, nodeColor);

                for (let j = i + 1; j < this.particles.length; j++) {
                    const dx = this.particles[i].x - this.particles[j].x;
                    const dy = this.particles[i].y - this.particles[j].y;
                    const distance = Math.hypot(dx, dy);

                    if (distance < 120) {
                        const alpha = (1 - distance / 120) * 0.25;
                        this.ctx.strokeStyle = `${nodeColor}${alpha})`;
                        this.ctx.lineWidth = 1;
                        this.ctx.beginPath();
                        this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                        this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                        this.ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(() => this.animate());
        }
    }

    class Particle {
        constructor(width, height) {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 1.2;
            this.vy = (Math.random() - 0.5) * 1.2;
            this.radius = Math.random() * 2 + 1;
        }

        update(mouse, width, height) {
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            this.x += this.vx;
            this.y += this.vy;

            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.hypot(dx, dy);

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    this.x -= Math.cos(angle) * force * 4;
                    this.y -= Math.sin(angle) * force * 4;
                }
            }
        }

        draw(ctx, color) {
            ctx.fillStyle = `${color}0.8)`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    new InteractiveCanvas();

    // 10. Custom Cursor Motion
    const cursor = document.querySelector(".cursor");
    const cursor2 = document.querySelector(".cursor2");

    if (cursor && cursor2) {
        document.addEventListener("mousemove", (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";

            cursor2.animate({
                left: `${e.clientX}px`,
                top: `${e.clientY}px`
            }, { duration: 400, fill: "forwards" });
        });
    }
});