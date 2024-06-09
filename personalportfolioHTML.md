---
layout: page
title: Personal Portfolio HTML
subtitle: Responsive web design project
share-title: Carman Cater - Personal Portfolio HTML
share-description: Personal Portfolio HTML
---

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="personalportfolio.css" />
        <title>Personal Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
        <nav id="navbar">
            <ul>
                <li>
                    <a href="#welcome-section">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
        <section id="welcome-section">
            <h1>Hello world, I am Carman Cater</h1>
            <p>a learning enthusiast</p>
        </section>
        <section id="projects">
            <h2>Sampling of projects</h2>
            <div class="project-grid">
                <a 
                href="https://carmancater.github.io/assets/img/artSandDollar.JPEG" 
                target="_blank" 
                class="project-tile" 
                >
                    <img 
                    class="p-image" 
                    src="https://carmancater.github.io/assets/img/artSandDollar.JPEG" 
                    alt="projectimage" 
                    />
                    <p class="project-title">
                        Project
                    </p>
                </a>
                <a 
                href="https://carmancater.github.io/assets/img/artSandDollar.JPEG" 
                target="_blank" 
                class="project-tile" 
                >
                    <img 
                    class="p-image" 
                    src="https://carmancater.github.io/assets/img/artSandDollar.JPEG" 
                    alt="projectimage" 
                    />
                    <p class="project-title">
                        Project
                    </p>
                </a>
                <a 
                href="https://carmancater.github.io/assets/img/artSandDollar.JPEG" 
                target="_blank" 
                class="project-tile" 
                >
                    <img 
                    class="p-image" 
                    src="https://carmancater.github.io/assets/img/artSandDollar.JPEG" 
                    alt="projectimage" 
                    />
                    <p class="project-title">
                        Project
                    </p>
                </a>
                <a 
                href="https://carmancater.github.io/assets/img/artSandDollar.JPEG" 
                target="_blank" 
                class="project-tile" 
                >
                    <img 
                    class="p-image" 
                    src="https://carmancater.github.io/assets/img/artSandDollar.JPEG" 
                    alt="projectimage" 
                    />
                    <p class="project-title">
                        Project
                    </p>
                </a>
                <a 
                href="https://carmancater.github.io/assets/img/artSandDollar.JPEG" 
                target="_blank" 
                class="project-tile" 
                >
                    <img 
                    class="p-image" 
                    src="https://carmancater.github.io/assets/img/artSandDollar.JPEG" 
                    alt="projectimage" 
                    />
                    <p class="project-title">
                        Project
                    </p>
                </a>
                <a 
                href="https://carmancater.github.io/assets/img/artSandDollar.JPEG" 
                target="_blank" 
                class="project-tile" 
                >
                    <img 
                    class="p-image" 
                    src="https://carmancater.github.io/assets/img/artSandDollar.JPEG" 
                    alt="projectimage" 
                    />
                    <p class="project-title">
                        Project
                    </p>
                </a>
            </div>
            <a 
            href="https://carmancater.github.io/projects/"
            target="_blank"
            class="btn all-projects"
            >
            Show all
            </a>
        </section>
        <section id="contact" class="contact-info">
            <div class="contact-info-msg">
                <h2>Let's get some work done...</h2>
                <p>Conact me below</p>
            </div>
            <div class="contact-links">
                <a 
                href="https://www.linkedin.com/in/carmancater/" 
                target="_blank" 
                class="btn contact-det">
                    LinkedIn
                </a>
                <a 
                href="https://github.com/carmancater" 
                target="_blank" 
                class="btn contact-det"
                id="profile-link">
                    GitHub
                </a>
                <a 
                href="https://carmancater.github.io/" 
                target="_blank" 
                class="btn contact-det">
                    Personal Website
                </a>
            </div>
        </section>
        <footer>
            <p>**This is a fake portfolio. It is an exercise in HTML and CSS. Click "Personal Website" above**</p>
        </footer>
    </body>
</html>
```