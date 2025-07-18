const readline = require('readline-sync');
/*
Task 1
Create a UserName and Password to start the user off on the journey. The inputs will be already stored as arrays to allow the user to log in.
*/
/*
Task 2
Create a welcome message and present the user with two options for a journey path, also ask quesitons about jouney readiness.
*/
/*
Task 3
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
let userInfo = {
    userName: 'mrodarte',
    passWord: '123qwe',
};
let userNameCorrect = userInfo.userName;
let passWordCorrect = userInfo.passWord;
let passwordAttempts = 0;
const passwordMax = 3;
let loginAttempts = 0;
const maxAttempts = 3;
userInfoPrompt = readline.question('What is your username?\n'); {
    while (userInfoPrompt !== userNameCorrect && loginAttempts < maxAttempts) {
        console.log('Sorry, that username cannot be found');
        userInfoPrompt = readline.question('What is your username?\n');
        loginAttempts++;
    }
};
if (userNameCorrect === userInfo.userName) {
        console.log(`One step closer to your journey, ${userNameCorrect}!`);
        passWordPrompt = readline.question('What is your password?\n'); 
    while (passWordPrompt !== passWordCorrect && passwordAttempts < passwordMax) {
        console.log('Sorry, that password is incorrect');
        passWordPrompt = readline.question('What is your password?\n');
        loginAttempts++;
    }
    if (passWordCorrect === userInfo.passWord) {
        console.log('Off to a an adventure!');
    }
};

let journeyPath = ['Rescue Princess', 'Slay the Dragon'];

pathChoicePrompt = readline.question(`Choose your path!\n0. ${journeyPath[0]}\n1. ${journeyPath[1]}\n`); {
if (pathChoicePrompt === '0') {
        console.log('You have chosen to rescue the princess!');
    } else {
        console.log('You have chosen to slay the dragon!');
    }
};