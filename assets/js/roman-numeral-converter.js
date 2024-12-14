// Grab elements on page using DOM
const userInputField = document.getElementById('number');
const checkButton = document.getElementById('convert-btn');
const resultText = document.getElementById('output');

// Convert user input to roman numerals
function convertToRomanNumeral (userInput) {

    // Terminate if user did not enter valid input
    if (!verifyInput(userInput)) {
        return;
    }

    const decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    
    let result = "";
    let num = parseInt(userInput);
    for (let i = 0; i < decimalValues.length; i++) {
        while (num >= decimalValues[i]) {
            result += romanNumerals[i];
            num -= decimalValues[i];
        }
    }

    displayOutput(result);
}

// Verify input is valid based on a set of criteria
function verifyInput (userInput) {
    if (!userInput || userInput.includes(".") || userInput.includes("e")) {
        displayOutput(`<p style="font-size:24px"><b>Please enter a valid number<b></p>`);
        toggleErrorClass();
        return false;
    } else if (parseInt(userInput) < 1) {
        displayOutput(`<p style="font-size:24px"><b>Please enter a number greater than or equal to 1<b></p>`);
        toggleErrorClass();
        return false;
    } else if (parseInt(userInput) > 3999) {
        displayOutput(`<p style="font-size:24px"><b>Please enter a number less than or equal to 3999<b></p>`);
        toggleErrorClass();
        return false; 
    } else {
        resultText.classList.remove("error");
        resultText.classList.add("no-error");
        return true;
    }

    function toggleErrorClass () {
        resultText.classList.add("error");
        resultText.classList.remove("no-error");
    }    
}

// Display output
function displayOutput (output) {
    resultText.classList.remove("hidden");
    resultText.innerHTML = output;
}

// Send user input to convert to roman numerals when button is clicked
checkButton.addEventListener("click", function () {
    convertToRomanNumeral(userInputField.value);
});
userInputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        convertToRomanNumeral(userInputField.value);
    }
});