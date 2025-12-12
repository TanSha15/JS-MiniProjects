const min = 50;
const max = 100;
let target;
let attempts;

const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn");

function startGame() {
  target = Math.floor(Math.random() * (max - min + 1)) + min;
  attempts = 0;
  message.textContent = "";
  attemptsDisplay.textContent = "";
  guessInput.value = "";
  guessInput.disabled = false;
  submitBtn.disabled = false;
  restartBtn.style.display = "none";
}

function checkGuess() {
  const guess = Number(guessInput.value);
  attempts++;

  if (isNaN(guess) || guess < min || guess > max) {
    message.textContent = `Please enter a valid number between ${min} and ${max}.`;
    message.style.color = "orange";
    return;
  }

  if (guess < target) {
    message.textContent = "Too low!";
    message.style.color = "red";
  } else if (guess > target) {
    message.textContent = "Too high!";
    message.style.color = "red";
  } else {
    message.textContent = `Congratulations! You guessed ${target} in ${attempts} attempts.`;
    message.style.color = "lightgreen";
    guessInput.disabled = true;
    submitBtn.disabled = true;
    restartBtn.style.display = "inline-block";
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
}

submitBtn.addEventListener("click", checkGuess);
guessInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkGuess();
  }
});
restartBtn.addEventListener("click", startGame);

startGame();
