---
layout: page
title: Roman Numeral Converter HTML
subtitle: JavaScript algorithms and data structures project
share-title: Carman Cater - Roman Numeral Converter HTML
share-description: Roman Numeral Converter HTML
---

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="/assets/css/roman-numeral-converter.css">
        <title>Roman Numeral Converter</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
        <main>
            <h1>...~Carman Cater~...</h1>
            <section class="header">
                <h1>Roman Numeral Converter</h1>
            </section>
            <div id="main-area">
                <div id="instructions">
                    <p>Enter a Positive Integer:</p>
                </div>
                <div id="user-input">
                    <input type="number" id="number" size=21/>
                    <button type="button" id="convert-btn">Convert</button>
                </div>
            </div>
            <div id="output" class="hidden">
            </div>
            <div id="explanation">
                <p>
                    <i class="fa-solid fa-lightbulb"></i> <em><b>Roman numerals</b></em> are a numerical system used in ancient Rome, 
                    consisting of combinations of letters from the Latin alphabet (I, V, X, L, C, D, M) to represent values. 
                    They are based on additive and subtractive principles, where smaller numbers before larger ones are subtracted, 
                    and smaller numbers after larger ones are added.
                </p>
            </div>
        </main>
        <script src="/assets/js/roman-numeral-converter.js"></script>
    </body>
</html>
```