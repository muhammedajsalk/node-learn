// Import the built-in 'events' module
const event = require("events");

// Create a new EventEmitter instance
const eventEmitter = new event.EventEmitter();

// Register an event listener for the event named 'aju'
// The callback function takes two parameters: a and b
eventEmitter.on("aju", (a, b) => {
    console.log(a + b); // Adds a and b, then logs the result
});

// Emit the 'aju' event and pass two arguments: 1 and 2
// These values are received as a = 1, b = 2 in the listener above
eventEmitter.emit("aju", 1, 2); // Output: 3
