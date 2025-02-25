// Grab elements on page using DOM
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');
const clearButton = document.getElementById('clear-btn');

// Check if user input is a valid US phone number
function checkIfValidNumber (input) {

    if (!input) {
        alert("Please provide a phone number");
        return;
    }

    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

    resultsDiv.innerHTML = `<b>${regex.test(input) ? 'Valid' : 'Invalid'}</b> US number: ${input}`;
    
    userInput.value = null; 
}

// Send user input over to check if phone number is valid when button is clicked
checkBtn.addEventListener("click", function () {
    checkIfValidNumber(userInput.value);
});
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkIfValidNumber(userInput.value);
    }
});

// Clear the result when button is clicked
clearButton.addEventListener("click", function () {
    resultsDiv.innerHTML = null;
    userInput.value = null;
});