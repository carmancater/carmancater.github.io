---
layout: page
title: Telephone Number Validator HTML
subtitle: JavaScript algorithms and data structures project
share-title: Carman Cater - Telephone Number Validator HTML
share-description: Telephone Number Validator HTML
---

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="./telephone-number-validator.css">
        <title>Telephone Number Validator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
        <main>
            <h1>...~Carman Cater~...</h1>
            <section class="header">
                <h1>Telephone Number Validator</h1>
            </section>
            <div id="main-area">
                <div id="instructions">
                    <p>Enter a Phone Number:</p>
                </div>
                <div>
                    <input type="text" id="user-input" size=21/>
                </div>
                <button type="button" id="check-btn">Check</button>
                <button type="button" id="clear-btn">Clear</button>
                <div id="results-div"></div>
            </div>
        </main>
        <script src="./telephone-number-validator.js"></script>
    </body>
</html>
```