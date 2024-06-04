// Define a function to greet users
function greetUser(username) {
    return `Welcome to Zwanski Bot, ${username}!`;
}

// Get the username from the user input (you can replace this with your bot's logic to get the username)
const username = prompt("Please enter your username:");

// Display the welcome message
alert(greetUser(username));
