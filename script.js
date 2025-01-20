// Arrays of random messages and additional phrases
const messages = [
    "Hello, world!",
    "Stay positive and keep going.",
    "Believe in yourself!",
    "JavaScript makes the web fun!",
    "Success is the best revenge."
];

const additionalPhrases = [
    "You're doing great!",
    "Keep up the good work.",
    "You're a coding rockstar!",
    "Never stop learning!",
    "Keep pushing forward!"
];

// Function to generate a random message
function generateMessage() {
    // Select a random message from the messages array
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Select a random additional phrase from the additionalPhrases array
    const randomPhrase = additionalPhrases[Math.floor(Math.random() * additionalPhrases.length)];
    
    // Combine both messages
    const combinedMessage = `${randomMessage} ${randomPhrase}`;
    
    // Return the combined message
    return combinedMessage;
}

// Add an event listener to the button
document.getElementById("generateMessageBtn").addEventListener("click", function() {
    // Generate a new message
    const message = generateMessage();
    
    // Display the message in the paragraph element
    document.getElementById("messageDisplay").textContent = message;
});

