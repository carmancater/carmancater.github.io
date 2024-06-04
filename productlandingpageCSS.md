---
layout: page
title: Product Landing Page CSS
subtitle: Responsive web design project
share-title: Carman Cater - Product Landing Page CSS
share-description: Product Landing Page CSS
---

``` css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: aliceblue;
}

main {
    position: relative;
}

header {
    width: 100%;
    position: fixed;
    top: 0;
    min-height: 100px;
    padding: 0px 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: lightgrey;
}

.imagelogo {
    width: 35vw;
}

.imagelogo > img {
    width: 100%;
    height: 100%;
    max-width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 100px;
    padding: 1vh;
}

nav > ul {
    width: 65vw;
    display: flex;
    flex-direction: row;
    /* justify-content: space-around; */
    justify-content: end;
}

li {
    list-style: none;
    font-weight: 700;
    padding: 0px 20px;
}

a {
    text-decoration: none;
}

li > a:hover {
    background-color: #306203;
    color: white;
}

#top-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 175px;
    margin-top: 120px;
}

#top-form > h2 {
    margin-bottom: 10px;
    word-wrap: break-word;
    padding: 0px 5px;
}

#top-form input[type='email'] {
    width: 100%;
    max-width: 300px;
    padding: 7px;
}

.btn {
    padding: 0 15px;
    font-size: 1.2em;
    font-weight: 700;
    border-radius: 25px;
    background: transparent;
    cursor: pointer;
    background-color: aqua;
    border: 10;
    margin: 10px 0;
    max-width: 150px;
    width: 100%;
    height: 30px;
    text-align: center;
}

.container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
}

#information {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#information .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 85px;
    width: 100%;
    padding: 4px 20px;
}

#customertestimonial {
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
}

#customertestimonial > iframe {
    max-width: 500px;
    width: 100%;
}

#pricing {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.product {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 33%;
    margin: 8px;
    border: 2px solid black;
}

.product > .productitem {
    background-color: lightcoral;
    color: black;
    padding: 13px 0;
    width: 100%;
    font-weight: 700;
    font-size: 1.5rem;
}

.product > h2 {
    padding: 13px 0px 7px 0px;
}

.product > ul {
    padding: 13px 0px;
}

.product > ul > li {
    padding: 5px 0;
    font-weight: 400;
}

footer {
    margin-top: 20px;
    background-color: lightgrey;
    padding: 15px;
    width: 100%;
}

footer > ul {
    display: flex;
    justify-content: flex-end;
}

footer > ul > li {
    padding: 0px 8px;
}

footer > span {
    display: flex;
    justify-content: flex-end;
    margin-top: 6px;
}

@media (max-width: 688px) {
    header {
        flex-wrap: wrap;
    }
    #top-form {
        height: 240px;
        justify-content: end;
    }
    nav > ul {
        flex-direction: column;
        align-items: center;
    }
    #header-img {
        display: block;
        margin: auto;
    }
    #nav-bar > ul > li {
        padding: 3px 0px;
    }
    #pricing {
        flex-direction: column;
        align-items: center;
    }
    .product {
        width: 60vw
    }
}
```