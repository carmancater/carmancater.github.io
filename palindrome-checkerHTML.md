---
layout: page
title: Palindrome Checker HTML
subtitle: JavaScript algorithms and data structures project
share-title: Carman Cater - Palindrome Checker HTML
share-description: Palindrome Checker HTML
---

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="./palindrome-checker.css">
        <title>Palindrome Checker</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
        <main>
            <h1>...~Carman Cater~...</h1>
            <section class="header">
                <h1>Is it a Palindrome?</h1>
            </section>
            <div id="main-area">
                <div id="instructions">
                    <p>Enter in text to check for a palindrome:</p>
                </div>
                <div id="user-input">
                    <input type="text" id="text-input" size=21/>
                    <button type="button" id="check-btn">Check</button>
                </div>
                <div id="result">
                </div>
            </div>
            <div id="explanation">
                <p><i class="fa-solid fa-lightbulb"></i> A <em>palindrome</em> is a word or sentence that's spelled
                the same way both forward and backward, ignoring punctuation,
                case, and spacing.</p>
            </div>
        </main>
        <script src="./palindrome-checker.js"></script>
    </body>
</html>
```