---
layout: page
title: Survey Form CSS
subtitle: freeCodeCamp Project
share-title: Carman Cater - Survey Form CSS
share-description: Survey Form CSS
---

``` css
body {
    width: 100%;
    height: 100vh;
    margin: 0;
    color: #f5f6f7;
    font-family: Poppins, sans-serif;
    font-size: 17px;
  }

.description {
  font-style:italic;
  text-shadow: 1px 1px 1px rgb(0 0 0 / 40%)
}

html {
 background: no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-image: linear-gradient( 115deg, rgba(58, 58, 158, 0.8), rgba(136, 136, 206, 0.7) ), url(https://cdn.freecodecamp.org/testable-projects-fcc/images/survey-form-background.jpeg);
    background-size: cover;
}

h1 {
    margin: 1em .2em .2em .2em;
    text-align: center;
}
p {
    margin: .9em .2em 1.75em .2em;
    text-align: center;
}

form {
    width: 60vw;
    max-width: 600px;
    min-width: 400px;
    margin: 0 auto;
    padding-bottom: 2em;
    background-color: #1B1B32CC;
}

fieldset {
    border: none;
    padding: 2rem 30;
    border-bottom: 3px solid #3b3b4f;
  }

 fieldset:last-of-type {
    border-bottom: none;
  }  

label {
    display: block;
    margin: 0.5rem 0;
  }

input, select, textarea {
    margin: 5px 0 10px 0;
    width: 100%;
    min-height: 2.375em;
}

.inline {
    display:inline-block;
    width: unset;
    margin: 0 0.5em 0 0;
    vertical-align: middle;
    min-height: 1rem;
  }

input[type="submit"] {
    display: block;
    color: #f5f6f7;
    font-size: 1.1rem;
    background-color: #37AF65;
    border-color: #1B1B32CC;
    min-width: 300px;
    cursor: pointer;
    border-radius: 2px;
  }  

 .clue {
   font-size: 0.75rem;
 }
```