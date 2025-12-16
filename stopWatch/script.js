// Get reference to the display area (fix the selector to match your HTML)
const display = document.querySelector(".display");

// Variables to manage time
let timer = null;        // Will hold the interval ID
let startTime = 0;       // When the stopwatch starts (in ms)
let elapsedTime = 0;     // How much time has passed (in ms)
let isRunning = false;   // To check if stopwatch is already running

// Format the elapsed time into HH:MM:SS:MS
function formatTime(ms) {
    let milliseconds = Math.floor((ms % 1000) / 10); // Get 2-digit ms
    let seconds = Math.floor((ms / 1000) % 60);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);
    let hours = Math.floor((ms / (1000 * 60 * 60)));

    // Add leading zeros to each unit
    return (
        String(hours).padStart(2, '0') + ":" +
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0') + ":" +
        String(milliseconds).padStart(2, '0')
    );
}

// Start the stopwatch
function startWatch() {
    if (!isRunning) {
        isRunning = true;

        // Set start time (subtract elapsedTime to continue from paused time)
        startTime = Date.now() - elapsedTime;

        // Update every 10ms
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            display.textContent = formatTime(elapsedTime);
        }, 10);
    }
}

// Stop the stopwatch
function stopWatch() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer); // Stop the interval
    }
}

// Reset the stopwatch
function resetWatch() {
    stopWatch();              // Stop if running
    elapsedTime = 0;          // Clear time
    display.textContent = "00:00:00:00"; // Reset display
}
