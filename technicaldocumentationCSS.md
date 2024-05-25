---
layout: page
title: Technical Documentation CSS
subtitle: Responsive web design project
share-title: Carman Cater - Technical Documentation CSS
share-description: Technical Documentation CSS
---

``` css
* {
    font-family: Arial, Helvetica, sans-serif;
}

html body {
    line-height: 1.5;
}

header {
    font-size: 25px;
    font-weight: bold;
    margin: 10px;
    color :#3277c5;
}

nav > header {
    text-align: center;
}

code {
    background-color: #eee;
    border-radius: 3px;
    font-family: 'Courier New', Courier, monospace;
    padding: 0 3px
}

nav {
    display: block;
}

#navbar li {
    list-style: none;
    border-top: 1px solid #808080;
    position: relative;
    width: 100%;
}

#navbar {
    position: fixed;
    min-width: 290px;
    top: 0px;
    left: 0px;
    width: 300px;
    height: 100%;
    border-right: solid;
    border-bottom: solid;
    border-color: #808080;
}

main {
    display: block;
}

#main-doc {
    /* position: absolute; */
    margin-left: 310px;
    padding: 20px;
    margin-bottom: 110px;
}

#navbar a {
    display: block;
    padding: 10px 30px;
    text-decoration: none;
    color: inherit;
}

#navbar a:hover {
    background-color: #3277c5;
    color: #ffffff;
    cursor: pointer;
}

#navbar ul {
    height: 88%;
    padding: 0;
    overflow-y: auto;
    overflow-x: auto;
}

@media (max-width: 700px) {
    #navbar {
        height: 250px;
        position: absolute;
        top: 0px;
        width: 100%;
    }

    #navbar ul {
        height: 186px;
    }

    #main-doc {
        margin-left: 0px;
        margin-top: 250px;
    }
}
```