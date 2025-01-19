// Array of sample messages
const messages = [
    "Hello, world!",
    "Stay positive and keep going.",
    "Believe in yourself!",
    "JavaScript makes the web fun!",
    "Success is the best revenge."
];

// Function to generate a random message
function generateMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// Add an event listener to the button
document.getElementById("generateMessageBtn").addEventListener("click", function() {
    const message = generateMessage();
    document.getElementById("messageDisplay").textContent = message;
});
