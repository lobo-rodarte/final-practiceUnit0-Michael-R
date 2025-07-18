const readline = require('readline-sync'); // Using the READLINE-SYNC from the VALUES DATA TYPES AND OPERATIONS
/*Task 3
Create a question to ask the user to allow them to pass through gate or stage.
*/
/*
Task 4
Create a message to indicate that the princess is in danger and you will need to decrypt a message to obtain the key and create messages to states success or failure.
*/
/*
Task 5
Create a message to indicate the end of the game and the outcome.
*/

const welcomeMessage = readline.question('Welcome traveler, are you ready to start your jouney? Please enter "yes" or "no":\n'); 
let userInfo = { // Created an object to store the user information for username and password.
    userName: 'mrodarte',
    passWord: '123qwe',
};
/*
Task 1
Create a UserName and Password to start the user off on the journey. The inputs will be already stored as arrays to allow the user to log in. This will be using WORKING WITH LOOPS and USING THE WHILE LOOPS.
*/
let userNameCorrect = userInfo.userName; // Used dot notation to access the userName and passWord properties of the userInfo object.
let passWordCorrect = userInfo.passWord; // Used dot notation to access the passWord property of the userInfo object.
let passwordAttempts = 0; // created the variable to input into the loop to limit the number of attempts for the password.
const passwordMax = 3; // Created a constant to limit the number of attempts for the password.
let loginAttempts = 0; // created the variable to input into the loop to limit the number of attempts for the username.
const maxAttempts = 3; // Created a constant to limit the number of attempts for the username.
userInfoPrompt = readline.question('What is your username?\n'); { // First question and created a nested loop to cycle through the username and passwords
    while (userInfoPrompt !== userNameCorrect && loginAttempts < maxAttempts) { // Used a while loop to validate the inputs
        console.log('Sorry, that username cannot be found');
        userInfoPrompt = readline.question('What is your username?\n');
        loginAttempts++;
    }
};
if (userNameCorrect === userInfo.userName) { // Used an if statement to check if the username is correct and if so to move to the password
        console.log(`One step closer to your journey, ${userNameCorrect}!`); 
        passWordPrompt = readline.question('What is your password?\n'); 
    while (passWordPrompt !== passWordCorrect && passwordAttempts < passwordMax) { // Used a while loop to validate the password input
        console.log('Sorry, that password is incorrect');
        passWordPrompt = readline.question('What is your password?\n');
        loginAttempts++;
    }
    if (passWordCorrect === userInfo.passWord) {
        console.log('Off to a an adventure!');
    }
};
/*
Task 2
Create a welcome message and present the user with two options for a journey path, also ask quesitons about jouney readiness. This will be using BUILDING ARRAYS and USING ARRAYS.
*/
let journeyPath = ['Rescue Princess', 'Slay the Dragon']; // Built this array to allow the user to choose a path for their journey.

pathChoicePrompt = readline.question(`Choose your path!\n0. ${journeyPath[0]}\n1. ${journeyPath[1]}\n`); { /* Used the multi-line strings from the STRINGING CHARACTERS AND STRINGS section to present the user with two options for a journey path */
if (pathChoicePrompt === '0') {
        console.log('You have chosen to rescue the princess!');
    } else {
        console.log('You have chosen to slay the dragon!');
    }
};

let slayDragonTools = ['Sword', 'Shield', 'Armor']; // Created an array to store the tools needed to slay the dragon.
let rescuePrincessTools = ['Rope', 'Lantern', 'Map']; // Created an array to store the tools needed to rescue the princess.

let toolsReadiness = readline.question()