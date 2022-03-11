/*
Key: 
Y = correct letter and placement
P = correct letter, but wrong placement
N = incorrect letter
*/
let word = 'APPLE';

//function to check if the input is valid (5 letter lowercase alphabet)
//later on, potentially implement dictionary so game only accepts valid English words
function inputValidator(userInput) {
    if(userInput.length==5 && /^[A-Z]+$/.test(userInput)){
        return true;
    }
    return false;
}

//function to create feedback based off of user's guess
function inputCheck(userInput) {
    let inputResults = new Array();

    //initializing Map to track character count in solution word
    const charCountMap = new Map();
    for(let i = 0; i < word.length; i++) {
        if(!charCountMap.has(word[i])) {
            charCountMap.set(word[i],1);
        }
        else {
            charCountMap.set(word[i],charCountMap.get(word[i])+1);
        }
    }

    //Go through user input once to see if any letters are in the right place;
    // if so, decrement hashmap value entry
    for(let i = 0; i < word.length; i++) {
        if(userInput[i] == word[i]){
            inputResults[i] = 'Y';
            charCountMap.set(word[i],charCountMap.get(word[i])-1);
        }
    }

    //Go through user input a second time to check for partial and wrong letters
    // if partial correct found, decrement hashmap value entry
    for(let i = 0; i < word.length; i++) {
        if(word.includes(userInput[i]) && charCountMap.get(userInput[i])>0) {
            inputResults[i] = 'P';
            charCountMap.set(userInput[i],charCountMap.get(userInput[i])-1);
        } else if(inputResults[i] != 'Y') {
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

    //while input is not valid, guess again
    while(!inputValidator(input = prompt("Please enter your guess: "))){
        console.log("Invalid Input");
    }

    let answer = inputCheck(input);
    console.log('feedback: ');
    console.log(answer.join(''));
    if(isCorrect(answer)) {
        console.log("Congrats! You guessed the word!");
        break;
    }
}

console.log("The correct word was: " + word);
