/*==================================================
        VARIABLES & SKY BLUE THEME CONFIGURATION
==================================================*/
:root {
    /* Vivid Sky Blue & Neon Cyan Palette */
    --main: #0284c7;
    --main-accent: #38bdf8;
    --main-glow: rgba(56, 189, 248, 0.45);
    --secondary-glow: rgba(2, 132, 199, 0.3);
    --neon-cyan: #00f0ff;

    /* Deep Ocean Theme Defaults */
    --bg-primary: #050b14;
    --bg-secondary: #0b1528;
    --card-bg: rgba(11, 21, 40, 0.65);
    --card-border: rgba(56, 189, 248, 0.22);
    --text-primary: #f0f9ff;
    --text-secondary: #bae6fd;
    --shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
    --nav-bg: rgba(5, 11, 20, 0.85);
}

body.light {
    --bg-primary: #f0f9ff;
    --bg-secondary: #e0f2fe;
    --card-bg: rgba(255, 255, 255, 0.85);
    --card-border: rgba(2, 132, 199, 0.2);
    --text-primary: #0369a1;
    --text-secondary: #0284c7;
    --shadow: 0 10px 30px rgba(2, 132, 199, 0.15);
    --nav-bg: rgba(240, 249, 255, 0.9);
}

/*==================================================
        RESET & BASE STYLES
==================================================*/
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', sans-serif;
    text-decoration: none;
    list-style: none;
}

html {
    overflow-x: hidden;
    scroll-behavior: smooth;
}

body {
    background: var(--bg-primary);
    color: var(--text-primary);
    overflow-x: hidden;
    transition: background 0.5s ease, color 0.5s ease;
}

/*==================================================
        DYNAMIC DUAL-ROTATING AMBIENT PARTICLES
==================================================*/
body::before {
    content: '';
    position: fixed;
    top: -20%; left: -20%;
    width: 70%; height: 70%;
    background: radial-gradient(circle, var(--main-glow) 0%, transparent 70%);
    filter: blur(100px);
    pointer-events: none;
    z-index: -1;
    animation: rotateGlow 18s linear infinite;
}

body::after {
    content: '';
    position: fixed;
    bottom: -20%; right: -20%;
    width: 70%; height: 70%;
    background: radial-gradient(circle, var(--secondary-glow) 0%, transparent 70%);
    filter: blur(100px);
    pointer-events: none;
    z-index: -1;
    animation: rotateGlow 24s linear infinite reverse;
}

/*==================================================
        ADVANCED PRO ANIMATION KEYFRAMES
==================================================*/
/* 1. Continuous Ambient Glow Orbit */
@keyframes rotateGlow {
    0% { transform: rotate(0deg) scale(1) translate(0, 0); }
    33% { transform: rotate(120deg) scale(1.2) translate(30px, -20px); }
    66% { transform: rotate(240deg) scale(0.9) translate(-20px, 30px); }
    100% { transform: rotate(360deg) scale(1) translate(0, 0); }
}

/* 2. Fluid Morphing Organic Blob */
@keyframes morphingBlob {
    0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
    100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
}

/* 3. Floating 3D Bobing & Tilt */
@keyframes float3D {
    0% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
    25% { transform: translateY(-12px) rotateX(6deg) rotateY(-4deg); }
    50% { transform: translateY(-20px) rotateX(-4deg) rotateY(6deg); }
    75% { transform: translateY(-8px) rotateX(4deg) rotateY(2deg); }
    100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
}

/* 4. Text Liquid Hologram Sweep */
@keyframes textShimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
}

/* 5. Radar Pulse Ripple Effect */
@keyframes radarPulse {
    0% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.6); }
    70% { box-shadow: 0 0 0 20px rgba(56, 189, 248, 0); }
    100% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0); }
}

/* 6. Continuous 3D Spin Flip */
@keyframes flipXContinuous {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
}

/*==================================================
        SCROLLBAR & SELECTION
==================================================*/
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
    background: var(--bg-primary);
}
::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, var(--main), var(--neon-cyan));
    border-radius: 10px;
    border: 2px solid var(--bg-primary);
}

::selection {
    background: var(--main-accent);
    color: #050b14;
}

/*==================================================
        LOADER WITH DOUBLE SPIN & PULSE
==================================================*/
#loader {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: var(--bg-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 999999;
    transition: opacity 0.6s ease, visibility 0.6s ease;
}

.loader-circle {
    width: 80px; height: 80px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top-color: var(--main-accent);
    border-right-color: var(--neon-cyan);
    animation: doubleSpin 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
    margin-bottom: 20px;
    box-shadow: 0 0 30px var(--main-glow);
    position: relative;
}

.loader-circle::after {
    content: '';
    position: absolute;
    top: 6px; left: 6px; right: 6px; bottom: 6px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-bottom-color: var(--main);
    border-left-color: var(--main-accent);
    animation: doubleSpin 0.5s linear infinite reverse;
}

#loader h2 {
    font-weight: 800;
    letter-spacing: 4px;
    background: linear-gradient(90deg, var(--main), var(--neon-cyan), var(--main-accent));
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textShimmer 2s linear infinite;
}

@keyframes doubleSpin {
    100% { transform: rotate(360deg); }
}

/*==================================================
        PROGRESS BAR & CURSOR
==================================================*/
#progress-bar {
    position: fixed;
    top: 0; left: 0;
    width: 0%; height: 4px;
    background: linear-gradient(90deg, var(--main), var(--main-accent), var(--neon-cyan));
    box-shadow: 0 0 15px var(--main-glow);
    z-index: 99999;
}

.cursor {
    position: fixed;
    width: 12px; height: 12px;
    border-radius: 50%;
    background: var(--neon-cyan);
    pointer-events: none;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 20px var(--neon-cyan);
    z-index: 99999;
}

.cursor2 {
    position: fixed;
    width: 45px; height: 45px;
    border: 2px solid var(--main-accent);
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.15s ease-out;
    z-index: 99998;
}

/*==================================================
        HEADER & NAVIGATION
==================================================*/
header {
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    padding: 22px 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    background: var(--nav-bg);
    border-bottom: 1px solid var(--card-border);
    z-index: 1000;
    transition: all 0.4s ease;
}

header.sticky {
    padding: 14px 8%;
    box-shadow: var(--shadow);
}

.logo {
    font-size: 28px;
    font-weight: 800;
    color: var(--text-primary);
    letter-spacing: -0.5px;
    transition: transform 0.4s ease;
}

.logo:hover {
    transform: scale(1.08) rotate(-3deg);
}

.logo .dot {
    color: var(--neon-cyan);
    text-shadow: 0 0 12px var(--main-glow);
}

.navbar {
    display: flex;
    gap: 35px;
}

.nav-link {
    color: var(--text-secondary);
    font-weight: 500;
    font-size: 15px;
    position: relative;
    transition: color 0.3s ease;
}

.nav-link::after {
    content: "";
    position: absolute;
    left: 50%; bottom: -6px;
    width: 0; height: 3px;
    background: linear-gradient(90deg, var(--main), var(--neon-cyan));
    border-radius: 10px;
    box-shadow: 0 0 10px var(--main-glow);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    transform: translateX(-50%);
}

.nav-link:hover, .nav-link.active {
    color: var(--text-primary);
}

.nav-link:hover::after, .nav-link.active::after {
    width: 100%;
}

.nav-icons {
    display: flex;
    gap: 15px;
}

.icon-btn {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    color: var(--text-primary);
    font-size: 18px;
    cursor: pointer;
    width: 42px; height: 42px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.icon-btn:hover {
    color: #050b14;
    background: var(--neon-cyan);
    box-shadow: 0 0 25px var(--neon-cyan);
    transform: translateY(-4px) rotate(360deg);
}

#menu-btn { display: none; }

/*==================================================
        BUTTONS WITH HOLOGRAPHIC SHIMMER & ZOOM
==================================================*/
.btn {
    padding: 14px 34px;
    border-radius: 30px;
    font-size: 15px;
    font-weight: 700;
    display: inline-block;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary {
    background: linear-gradient(135deg, var(--main), var(--main-accent));
    color: #050b14;
    box-shadow: 0 10px 25px var(--main-glow);
    border: none;
}

.btn-primary::before {
    content: '';
    position: absolute;
    top: -50%; left: -100%;
    width: 200%; height: 200%;
    background: linear-gradient(60deg, transparent, rgba(255, 255, 255, 0.6), transparent);
    transform: rotate(30deg);
    transition: all 0.6s ease;
    z-index: -1;
}

.btn-primary:hover::before {
    left: 100%;
}

.btn-primary:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 15px 35px var(--main-glow), 0 0 20px var(--neon-cyan);
}

.btn-secondary {
    background: transparent;
    border: 2px solid var(--main-accent);
    color: var(--text-primary);
}

.btn-secondary:hover {
    background: var(--main-accent);
    color: #050b14;
    box-shadow: 0 10px 25px var(--secondary-glow);
    transform: translateY(-5px) scale(1.05);
}

/*==================================================
        HOME SECTION & MORPHING HERO PORTRAIT
==================================================*/
.home {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    align-items: center;
    gap: 60px;
    padding: 150px 8% 80px;
}

.badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    background: rgba(56, 189, 248, 0.12);
    color: var(--neon-cyan);
    border: 1px solid var(--neon-cyan);
    border-radius: 30px;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 25px;
    animation: radarPulse 2.5s infinite;
}

.badge::before {
    content: '';
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--neon-cyan);
    box-shadow: 0 0 10px var(--neon-cyan);
}

.home-content h3 {
    font-size: 30px;
    font-weight: 500;
    color: var(--text-secondary);
}

.home-content h1 {
    font-size: 68px;
    font-weight: 800;
    line-height: 1.1;
    margin: 12px 0;
    background: linear-gradient(90deg, var(--text-primary), var(--neon-cyan), var(--main-accent), var(--text-primary));
    background-size: 300% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textShimmer 5s linear infinite;
}

.home-content h2 {
    font-size: 32px;
    margin-bottom: 20px;
    font-weight: 600;
}

#typing {
    color: var(--neon-cyan);
    text-shadow: 0 0 15px var(--main-glow);
}

.home-content p {
    font-size: 16px;
    line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: 35px;
    max-width: 580px;
}

/* Social Icon 3D Spin & Glow */
.social-icons {
    display: flex;
    gap: 16px;
    margin-bottom: 35px;
}

.social-icons a {
    width: 48px; height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid var(--card-border);
    background: var(--card-bg);
    color: var(--text-primary);
    font-size: 18px;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.social-icons a:hover {
    background: var(--neon-cyan);
    color: #050b14;
    transform: translateY(-8px) rotateY(360deg) scale(1.15);
    box-shadow: 0 10px 30px var(--neon-cyan);
}

.home-image {
    display: flex;
    justify-content: center;
    position: relative;
    perspective: 1000px;
}

.circle {
    position: absolute;
    width: 400px; height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--main-glow) 0%, transparent 70%);
    filter: blur(50px);
}

/* Morphing Image Avatar */
.home-image img {
    width: 360px; height: 360px;
    object-fit: cover;
    border: 4px solid var(--card-border);
    box-shadow: 0 0 40px var(--secondary-glow);
    z-index: 2;
    animation: morphingBlob 10s ease-in-out infinite, float3D 8s ease-in-out infinite;
    transition: all 0.5s ease;
}

.home-image img:hover {
    border-color: var(--neon-cyan);
    box-shadow: 0 0 50px var(--main-glow);
    transform: scale(1.08) rotate(3deg);
}

/*==================================================
        SECTIONS & HEADINGS
==================================================*/
section {
    padding: 120px 8%;
}

.heading {
    font-size: 42px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 70px;
    position: relative;
    letter-spacing: -1px;
}

.heading::after {
    content: "";
    display: block;
    width: 80px; height: 4px;
    background: linear-gradient(90deg, var(--main), var(--neon-cyan));
    margin: 12px auto 0;
    border-radius: 4px;
    box-shadow: 0 0 12px var(--neon-cyan);
}

/*==================================================
        ABOUT SECTION WITH PERSPECTIVE TILT
==================================================*/
.about {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 70px;
    align-items: center;
    background: var(--bg-secondary);
    position: relative;
}

.about-image img {
    width: 100%;
    max-width: 420px;
    border-radius: 24px;
    border: 1px solid var(--card-border);
    box-shadow: var(--shadow);
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.5s ease;
}

.about-image img:hover {
    transform: perspective(1000px) rotateY(-12deg) rotateX(6deg) scale(1.04);
    border-color: var(--neon-cyan);
    box-shadow: 0 20px 40px var(--main-glow);
}

.about-content h3 {
    font-size: 26px;
    color: var(--neon-cyan);
    margin-bottom: 18px;
}

.about-content p {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 35px;
}

.about-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

/* Info Box Spring Scale */
.info-box {
    background: var(--card-bg);
    padding: 22px;
    border-radius: 16px;
    border: 1px solid var(--card-border);
    text-align: center;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.info-box:hover {
    transform: translateY(-8px) scale(1.05);
    background: rgba(56, 189, 248, 0.08);
    border-color: var(--neon-cyan);
    box-shadow: 0 10px 25px var(--secondary-glow);
}

.info-box i {
    font-size: 30px;
    color: var(--neon-cyan);
    margin-bottom: 12px;
    transition: transform 0.5s ease;
}

.info-box:hover i {
    transform: rotateY(360deg);
}

.info-box h4 {
    font-size: 16px;
    margin-bottom: 6px;
}

.info-box span {
    color: var(--text-secondary);
    font-size: 14px;
}

/*==================================================
        SKILLS SECTION
==================================================*/
.skill-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
}

.skill-box {
    background: var(--card-bg);
    padding: 28px;
    border-radius: 20px;
    border: 1px solid var(--card-border);
    backdrop-filter: blur(10px);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.skill-box:hover {
    transform: translateY(-8px) scale(1.03);
    border-color: var(--neon-cyan);
    box-shadow: 0 15px 35px var(--secondary-glow);
}

.skill-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
}

.skill-title h3 { font-size: 16px; font-weight: 600; }
.skill-title span { color: var(--neon-cyan); font-weight: 700; }

.bar {
    height: 10px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    overflow: hidden;
    padding: 2px;
}

.bar span {
    display: block;
    height: 100%;
    width: 0;
    background: linear-gradient(90deg, var(--main), var(--neon-cyan));
    border-radius: 10px;
    box-shadow: 0 0 12px var(--neon-cyan);
    transition: width 1.5s cubic-bezier(0.1, 0, 0.2, 1);
}

/*==================================================
        PROJECTS SECTION WITH 3D FLIP TILT CARDS
==================================================*/
.projects {
    background: var(--bg-secondary);
}

.project-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 35px;
    perspective: 1000px;
}

.project-card {
    background: var(--card-bg);
    padding: 40px 30px;
    border-radius: 24px;
    border: 1px solid var(--card-border);
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    transform-style: preserve-3d;
}

.project-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 4px;
    background: linear-gradient(90deg, var(--main), var(--neon-cyan));
    opacity: 0;
    transition: opacity 0.4s ease;
}

.project-card:hover {
    transform: translateY(-12px) rotateX(8deg) rotateY(-4deg) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 240, 255, 0.15);
    border-color: var(--neon-cyan);
}

.project-card:hover::before {
    opacity: 1;
}

.card-icon i {
    font-size: 45px;
    color: var(--neon-cyan);
    margin-bottom: 22px;
    text-shadow: 0 0 15px var(--main-glow);
    transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.project-card:hover .card-icon i {
    transform: rotateY(360deg) scale(1.1);
}

.project-card h3 {
    font-size: 24px;
    margin-bottom: 14px;
}

.project-card p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 30px;
    font-size: 15px;
}

.project-btn {
    display: flex;
    gap: 14px;
}

/*==================================================
        COUNTER SECTION
==================================================*/
.counter {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 30px;
    background: var(--bg-primary);
}

.counter-box {
    padding: 35px 25px;
    text-align: center;
    background: var(--card-bg);
    border-radius: 20px;
    border: 1px solid var(--card-border);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.counter-box:hover {
    transform: translateY(-10px) scale(1.06);
    border-color: var(--neon-cyan);
    box-shadow: 0 10px 30px var(--secondary-glow);
}

.counter-box h2 {
    font-size: 48px;
    color: var(--neon-cyan);
    font-weight: 800;
    text-shadow: 0 0 18px var(--main-glow);
}

.counter-box p {
    color: var(--text-secondary);
    font-size: 15px;
    margin-top: 5px;
}

/*==================================================
        SERVICES SECTION
==================================================*/
.service-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.service-box {
    padding: 40px 30px;
    border-radius: 24px;
    text-align: center;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.service-box:hover {
    transform: translateY(-12px) scale(1.04);
    border-color: var(--neon-cyan);
    box-shadow: 0 15px 35px var(--secondary-glow);
}

.service-box i {
    font-size: 50px;
    color: var(--neon-cyan);
    margin-bottom: 22px;
    transition: transform 0.6s ease;
}

.service-box:hover i {
    transform: rotateY(180deg) scale(1.15);
}

.service-box h3 {
    font-size: 22px;
    margin-bottom: 14px;
}

.service-box p {
    color: var(--text-secondary);
    line-height: 1.7;
    font-size: 15px;
}

/*==================================================
        CONTACT SECTION
==================================================*/
.contact {
    background: var(--bg-secondary);
}

.contact-text {
    text-align: center;
    color: var(--text-secondary);
    margin-top: -45px;
    margin-bottom: 50px;
    font-size: 16px;
}

#contact-form {
    max-width: 800px;
    margin: 0 auto;
}

.input-box {
    display: flex;
    gap: 20px;
    margin-bottom: 22px;
}

.input-box input, #contact-form textarea {
    width: 100%;
    padding: 18px 24px;
    border-radius: 16px;
    background: var(--card-bg);
    color: var(--text-primary);
    border: 1px solid var(--card-border);
    outline: none;
    font-size: 15px;
    transition: all 0.3s ease;
}

.input-box input:focus, #contact-form textarea:focus {
    border-color: var(--neon-cyan);
    box-shadow: 0 0 20px var(--main-glow);
    transform: scale(1.02);
}

#contact-form textarea {
    resize: none;
    margin-bottom: 30px;
}

/*==================================================
        FOOTER & BACK TO TOP BUTTON
==================================================*/
footer {
    padding: 60px 8%;
    text-align: center;
    background: var(--bg-primary);
    border-top: 1px solid var(--card-border);
}

footer h2 { font-size: 28px; margin-bottom: 8px; }
footer p { color: var(--text-secondary); font-size: 15px; }

.footer-icons {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin: 30px 0;
}

.footer-icons a {
    width: 44px; height: 44px;
    border-radius: 50%;
    background: var(--card-bg);
    color: var(--neon-cyan);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--card-border);
    transition: all 0.4s ease;
}

.footer-icons a:hover {
    transform: translateY(-6px) rotate(360deg);
    background: var(--neon-cyan);
    color: #050b14;
    box-shadow: 0 0 25px var(--neon-cyan);
}

.top-btn {
    position: fixed;
    right: 30px; bottom: 30px;
    width: 50px; height: 50px;
    border-radius: 50%;
    background: var(--neon-cyan);
    color: #050b14;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    opacity: 0;
    visibility: hidden;
    box-shadow: 0 0 25px var(--neon-cyan);
    transition: all 0.4s ease;
    z-index: 999;
}

.top-btn.active {
    opacity: 1;
    visibility: visible;
}

.top-btn:hover {
    transform: translateY(-6px) scale(1.15) rotate(-15deg);
}

/*==================================================
        SCROLL REVEAL ANIMATIONS
==================================================*/
.reveal {
    opacity: 0;
    transform: scale(0.9) translateY(40px);
    transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.reveal.active {
    opacity: 1;
    transform: scale(1) translateY(0);
}

/*==================================================
        RESPONSIVE BREAKPOINTS
==================================================*/
@media (max-width: 991px) {
    .home {
        grid-template-columns: 1fr;
        text-align: center;
        padding-top: 160px;
    }
    .home-content p { margin: 0 auto 35px; }
    .about { grid-template-columns: 1fr; text-align: center; }
    .about-image img { margin: 0 auto; }
}

@media (max-width: 768px) {
    #menu-btn { display: flex; }
    .navbar {
        position: absolute;
        top: 100%; left: -100%;
        width: 100%;
        background: var(--bg-secondary);
        flex-direction: column;
        padding: 30px;
        transition: left 0.4s ease;
        box-shadow: var(--shadow);
        border-bottom: 1px solid var(--card-border);
    }
    .navbar.active { left: 0; }
    .input-box { flex-direction: column; gap: 15px; }
    .home-content h1 { font-size: 48px; }
    .heading { font-size: 34px; }
}
