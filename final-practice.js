const readline = require('readline-sync'); // Using the READLINE-SYNC from the VALUES DATA TYPES AND OPERATIONS

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

if (pathChoicePrompt === '0') { // Used an if statement to check which path the user chose and present them with the tools needed for that path
    console.log(`You will need the following tools to rescue the princess: ${rescuePrincessTools.join(', ')}.`); // Used the join method to convert the array into a string
} else {
    console.log(`You will need the following tools to slay the dragon: ${slayDragonTools.join(', ')}.`); // Used the join method to convert the array into a string
};

let toolsReadiness = readline.question('Are you ready with your tools? (yes/no)\n'); // Used a conditional statement to check tool readiness

if (toolsReadiness === 'yes') {
    console.log('Great! You are ready for your journey.\n\nYour quest begins with a long journey through the forest of darkness.\nYou will face many challenges and obstacles along the way, but with your tools and courage, you will succeed!\nUse your wits traveler, you will need to use brain strength to obtain the keys to unlock the doors to either slay the dragon, or unlock the princess\'s cell.\nYou\'re first challenge is the gate to the forbidden cave and the dark tower!\n'); // Used a template literal to create a message, used the ESCAPING QUOTES FROM THE STRINGING CHARCTERS TOGETHER.
} else {
    console.log('Please gather your tools before starting your journey.');
};

/*Task 3
Create a question to ask the user to allow them to pass through gate or stage. I used the MATH OPERATIONS and USING THE WHILE LOOPS sections to create a math question that the user must answer correctly to pass through the gate.
*/
let numberOne = 3; // Created a variable to store the first number
let numberTwo = 4; // Created a variable to store the second number
let numberThree = numberOne * numberTwo; // Created a variable to store the product of the first and second numbers
let mathTry = 0; // Created a variable to store the number of attempts for the math question
let maxTries = 3; // Created a constant to limit the number of attempts for the math question
let gatePassQuestion = readline.question('To pass through the gate, you must answer this question: What is the product of 3 and 4?\n'); {
    while (gatePassQuestion !== numberThree.toString() && mathTry < maxTries) { // Used a while loop to validate the input
        console.log('Incorrect. Please try again.');
        gatePassQuestion = readline.question(`What is the product of ${numberOne} and ${numberTwo}?\n`); // Asked the user to answer the question again
        mathTry++; // Incremented the attempt counter
    };
    if (gatePassQuestion === numberThree.toString()) { //converting the input to a string to accept the user input
        console.log('Correct! You may pass through the gate.\n\nYou look up and read a sign that says: \n\"To slay the dragon, you must go left, bring your COURAGE as it will be the KEY to your success!\n\"To rescue the princess, you must go right, bring your wits and make haste as the KEY to freeing her will only come at high NOON!\"'); // Used a template literal to create a message
    } else {
        console.log('Incorrect. You shall not pass. This is the end of your journey.'); 
    }
};

/*
Task 4
Create a message to indicate that the princess is in danger and you will need to decrypt a message to obtain the key and create messages to states success or failure. This will also beusing VALUES DATA TYPES AND OPERATIONS and STRINGING CHARACTERS AND STRINGS sections to create a message to indicate if the key is a plalindrome or not.
*/
let missionDecision = ['0. Left', '1. Right']; // Created an array to store the mission decisions paths
let journeyMission = readline.question(`Choose your mission path!\n${missionDecision[0]}\n${missionDecision[1]}\n`); { // Used a multi-line string for options
    if (journeyMission === '0') {
        console.log('You have chosen to slay the dragon. Prepare for battle!\n\nAs you approach the mouth of the cave, you hear a loud roar and see the dragon\'s fiery breath illuminating the darkness.\nYou must use your sword and shield to defeat the dragon and claim its treasure.\n\nRemember, COURAGE is your key to success!\n');
    } else if (journeyMission === '1') {
        console.log('You have chosen to rescue the princess. Time is of the essence!\n\nAs you make your way through the dense forest, you hear the distant cries of the princess.\nYou must use your wits and agility to navigate the obstacles in your path and reach her before it\'s too late.\n\nRemember, the key to freeing her is at NOON!');
    } else {
        console.log('Invalid choice. Please choose a valid mission path.');
    }
};
let dragonKey = ['courage']; // Created a variable to store the key for the dragon mission
let princessKey = ['noon']; // Created a variable to store the key for the princess mission
let dragonRiddle = dragonKey[0].split('').reverse().join('') // Reversing the string to create a riddle for the dragon mission
let princessRiddle = princessKey[0].split('').reverse().join(''); // Reversing the string to create a riddle for the princess mission
let finalChallenge = readline.question(`A veil of darkness falls over you while approaching the finale of your journey. You hear a voice whispering to you: \n"Unscramble the one of these words to give me your key: ${dragonRiddle} or ${princessRiddle}!!\n`);
    while (finalChallenge !== dragonKey[0] && finalChallenge !== princessKey[0]) { // Used a while loop to validate the input
        console.log('Incorrect key. Please try again.');
        finalChallenge = readline.question(`Unscramble one of these words to give me your key: ${dragonRiddle} or ${princessRiddle}!!\n`); 
    }
    if (finalChallenge === dragonKey[0] || finalChallenge === princessKey[0]) { // Checking if the user input matches either key
        console.log('You have successfully decrypted the message and obtained the key! You may now proceed to complete your mission.');
    } else {
        console.log('You have failed to decrypt the message. This is the end of  your journey.');
};

function palindromeCheck(word) { // Function to check if a word is a palidrome
    let matchedWord = word.toLowerCase().trim(); // Converting the word to lowercase and trimming whitespace for comparison
    let reversedWord = word.split('').reverse().join(''); // Reversing the string
    return reversedWord === word;
};
/*let currentKeys = [dragonKey[0], princessKey[0]]; // Created an array for the keys
for (let key of currentKeys) { // Creating a for if loop to check the boolean value of the palindromeCheck function
*/
let palindromeCheckResult = palindromeCheck(finalChallenge);
let optionalQuestion = readline.question('True or False, Your key is a palindrome?\n');
let userInput = optionalQuestion.toLowerCase().trim() === "true"; // Converting the user input to lowercase and trimming whitespace for comparison
    if (userInput === palindromeCheckResult) {
        console.log('Correct! You can have the reward.');
    } else {
        console.log('Incorrect. You completed your mission, but you cannot have the reward.\n');
    };
/*/ 
Task 5
Create a message to indicate the end of the game and the outcome.
*/
console.log('Congratulations! You have completed your journey.\n\nThank you for playing!');