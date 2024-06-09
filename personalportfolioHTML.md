---
layout: page
title: Personal Portfolio CSS
subtitle: Responsive web design project
share-title: Carman Cater - Personal Portfolio CSS
share-description: Personal Portfolio CSS
---

``` css
:root {
    --off-white: #e7e7e7;
    --off-blue: #007da3;
    --dark-green: #0b6b10;
    --dark-gray: #3d3d3d;
}

* {
    margin: 0;
    padding: 0;
}

*, *::before, *::after {
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 60%;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
    font-weight: 360;
    line-height: 1.3;
    color: var(--off-white)
}

#navbar {
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--off-blue);
}

#navbar > ul {
    display: flex;
    margin-right: 1.8rem;
    list-style: none;
}

a {
    text-decoration: none;
    color: var(--off-white);
}

#navbar a {
    display: block;
    font-size: 2.5rem;
    padding: 1.8rem;
    transition: background 0.3s ease-out;
}

#navbar a:hover {
    background: var(--dark-green)
}

#welcome-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: var(--dark-gray);
}

#welcome-section > p {
    font-size: 2.8rem;
    font-weight: 200;
    font-style: italic;
    color: var(--off-blue);
}

h1 {
    font-size: 4.8rem;
}

h1, h2 {
    font-weight: 700;
    text-align: center;
}

#projects {
    text-align: center;
    padding: 7rem 2.2rem;
    background: var(--dark-green);
}

#projects h2 {
    margin: 0rem auto 3rem auto;
    border-bottom: 0.2rem solid;
    max-width: 380px;
    font-size: 3.6rem;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 3.5rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto 5.5rem auto;
}

.project-tile {
    background: var(--dark-gray);
    border-radius: 3px;
}

.p-image {
    height: calc(100% - 7rem);
    width: 100%;
    object-fit: cover;
}

img {
    display: block;
    width: 100%;
}

.project-title {
    font-size: 2.1rem;
    padding: 2rem .6rem;
    transition: background 0.3s ease-out;
}

.project-title:hover {
    background-color: var(--off-blue);
}

.btn.all-projects {
    font-size: 3rem;
    background: var(--dark-gray);
    transition: background 0.3s ease-out;
}

.btn {
    display: inline-block;
    padding: 1.2rem 2.3rem;
}

.btn.all-projects:hover {
    background-color: var(--off-blue);
}

.contact-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 80vh;
    padding: 0 2.2rem;
    background: var(--dark-gray)
}

.contact-info-msg > h2 {
    font-size: 4rem;
}

.contact-info-msg > p {
    font-style: italic;
}

.contact-links {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 900px;
    margin-top: 5rem;
    flex-wrap: wrap;
}

.btn.contact-det {
    font-size: 2rem;
    transition: background 0.3s ease-out;
}

.btn.contact-det:hover {
    background: var(--dark-green);
}

footer {
    font-weight: 400;
    display: flex;
    justify-content: center;
    padding: 3rem;
    background: var(--dark-gray);
    border-top: 3px solid var(--off-blue);
}

footer p {
    color: orange;
    text-align: center;
}

@media (max-width: 28em) {
    h1 {
        font-size: 3rem;
    }
    #welcome-section > p {
        font-size: 2.2rem;
    }
    #projects h2 {
        font-size: 2.8rem;
    }
    .contact-info-msg > h2 {
        font-size: 2.8rem;
    }
}
```