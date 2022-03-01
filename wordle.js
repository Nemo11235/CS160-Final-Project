/*
Key: 
Y = correct letter and placement
P = correct letter, but wrong placement
N = incorrect letter
*/
let word = 'apple';

//function to create feedback based off of user's guess
function inputCheck(userInput) {
    let inputResults = new Array();
    for(let i = 0; i < word.length; i++) {
        if(userInput[i] == word[i]) {
            inputResults[i] = 'Y';
        } else if(word.includes(userInput[i])) {
            inputResults[i] = 'P';
        } else {
            inputResults[i] = 'N';
        }
    }
    return inputResults;
}

//function to check if the user guessed the correct word
function isCorrect(guessed) {
    if(guessed.includes('N') || guessed.includes('P')) {return false}
    return true;
}

//start of game output
const prompt = require("prompt-sync")();  //run 'npm install prompt-sync' in terminal
console.log("Welcome to the game!\n");

for(let i = 0; i < 6; i++) {
    console.log("Attempt: " + (i+1) + '/6 ');
    const input = prompt("Please enter your guess: ");
    let answer = inputCheck(input);
    console.log('feedback: ');
    console.log(answer.join(''));
    if(isCorrect(answer)) {
        console.log("Congrats! You guessed the word!");
        break;
    }
}

console.log("The correct word was: " + word);
