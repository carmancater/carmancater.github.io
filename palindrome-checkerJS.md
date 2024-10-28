---
layout: page
title: Palindrome Checker JavaScript
subtitle: JavaScript algorithms and data structures project
share-title: Carman Cater - Palindrome Checker JavaScript
share-description: Palindrome Checker JavaScript
---

``` js
// Grab elements on page using DOM
const userInputField = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultText = document.getElementById('result');

// Remove non alphanumeric characters, spaces, and underscores
function cleanInputString (str) {
    const regex = /[^\w]|_/g;
    return str.replace(regex, '');
}

// Check if user input in a palindrome
function checkIfPalindrome (userInput) {
    if (!userInput) {
        alert("Please input a value");
        return;
    }

    let cleanStr = cleanInputString(userInput);
    cleanStr = cleanStr.toLowerCase();
    const cleanStrReversed = cleanStr.split('').reverse().join('');

    resultText.innerHTML = `<b style="font-size:24px">${userInput}</b>
                            is ${cleanStr === cleanStrReversed ? '' : 'not'}
                            a palindrome.`;
    
    userInputField.value = null; 
}

// Send user input over to check if palindrome when button is clicked
checkButton.addEventListener("click", function () {
    checkIfPalindrome(userInputField.value);
});
userInputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkIfPalindrome(userInputField.value);
    }
});
```