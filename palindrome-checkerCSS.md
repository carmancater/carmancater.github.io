---
layout: page
title: Palindrome Checker CSS
subtitle: JavaScript algorithms and data structures project
share-title: Carman Cater - Palindrome Checker CSS
share-description: Palindrome Checker CSS
---

``` css
:root {
    --csc-blue: #00003d;
    --light-grey: #f5f6f7;
    --font-color-main-area: #000000;
    --input-and-button: #005513;
    --shadow: #44ac7b;
}

body {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-size: 14px;
    background-color: var(--csc-blue);
    color: var(--light-grey);
    display: flex; 
    align-items: flex-start;    
    height: 100vh;         
    margin: 0;            
    justify-content: center;
}

main {
    margin: 15px;
}

h1 {
    text-align: center;
    margin-top: 10px;
}

.header  h1 {
    font-size: 50px;
    margin: 0px;
}

#main-area {
    min-width: 200px;
    max-width: 420px;
    text-align: center;
    background-color: var(--light-grey);
    color: var(--font-color-main-area);
    margin: 40px auto 0px;
    padding: 5px 20px;
    border-radius: 15px;
    box-shadow: 1px 1px 10px var(--shadow), -1px 1px 10px var(--shadow),
                 -1px -1px 10px var(--shadow), 1px -1px 10px var(--shadow);
    overflow-wrap: break-word;
}

#instructions {
    font-size: 20px;
    padding-top: 0px;
}

#text-input {
    text-align: center;
    min-height: 30px;
    border: none;
    border-bottom: 3px solid var(--input-and-button);
    background-color: var(--light-grey);
    color: var(--font-color-main-area);
    font-size: 20px;
    margin-bottom: 20px;
}

#text-input:focus {
    outline-color: black;
}

#check-btn {
    background-color: var(--input-and-button);
    border-radius: 15px;
    color: var(--light-grey);
    min-height: 35px;
    padding: 8px 25px;
    margin-left: 10px;
}

#explanation {
    min-width: 200px;
    max-width: 450px;
    text-align: center;
    background-color: var(--input-and-button);
    color: var(--light-grey);
    padding: 10px;
    margin-top: 30px;
    margin-bottom: 10px;
    border-radius: 15px;
    font-size: 22px;
}

#result {
    max-width: 450px;
    text-align: center;
    font-size: 22px;
    margin: 5px 0px 20px 0px;
}
```