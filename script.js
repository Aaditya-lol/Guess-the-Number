// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Initialize variables
let attempts = 0;
const maxAttempts = 10;

// Function to check the user's guess
function checkGuess() {
    const guess = parseInt(document.getElementById("guessInput").value);
    const message = document.querySelector(".message");
    const attemptNumber = document.getElementById("attemptNumber");

    attempts++;

    if (guess === secretNumber) {
        message.textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts!`;
        message.style.color = "green";
        document.getElementById("guessButton").disabled = true;
    } else if (guess < secretNumber) {
        message.textContent = "Too low. Try again.";
        message.style.color = "red";
    } else {
        message.textContent = "Too high. Try again.";
        message.style.color = "red";
    }

    if (attempts >= maxAttempts) {
        message.textContent = `Game over! The number was ${secretNumber}.`;
        message.style.color = "red";
        document.getElementById("guessButton").disabled = true;
    }

    attemptNumber.textContent = attempts;
}

// Event listener for the guess button
document.getElementById("guessButton").addEventListener("click", checkGuess);
