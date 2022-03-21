const gameUtils = {
  inputCheck(word, userInput) {
    let inputResults = new Array();

    //initializing Map to track character count in solution word
    const charCountMap = new Map();
    for (let i = 0; i < word.length; i++) {
      if (!charCountMap.has(word[i])) {
        charCountMap.set(word[i], 1);
      } else {
        charCountMap.set(word[i], charCountMap.get(word[i]) + 1);
      }
    }

    //Go through user input once to see if any letters are in the right place;
    // if so, decrement hashmap value entry
    for (let i = 0; i < word.length; i++) {
      if (userInput[i] == word[i]) {
        inputResults[i] = "Y";
        charCountMap.set(word[i], charCountMap.get(word[i]) - 1);
      }
    }

    //Go through user input a second time to check for partial and wrong letters
    // if partial correct found, decrement hashmap value entry
    for (let i = 0; i < word.length; i++) {
      if (word.includes(userInput[i]) && charCountMap.get(userInput[i]) > 0) {
        inputResults[i] = "P";
        charCountMap.set(userInput[i], charCountMap.get(userInput[i]) - 1);
      } else if (inputResults[i] != "Y") {
        inputResults[i] = "N";
      }
    }
    return inputResults;
  },

  isCorrect(guessed) {
    if (guessed.includes("N") || guessed.includes("P")) {
      return false;
    }
    return true;
  },

  usedLetters(userInput, feedback, oldLetters) {
    function indexOfLetter(letter) {
      let alphabet = new Map([['A', 0], ['B', 1], ['C', 2], ['D', 3], ['E', 4], ['F', 5], ['G', 6], ['H', 7], ['I', 8], ['J', 9], ['K', 10], ['L', 11], ['M', 12], ['N', 13], ['O', 14], ['P', 15], ['Q', 16], ['R', 17], ['S', 18], ['T', 19], ['U', 20], ['V', 21], ['W', 22], ['X', 23], ['Y', 24], ['Z', 25]]);
      return alphabet.get(letter);
    }

    for(let i = 0; i < userInput.length; i++){
        if(feedback[i] == 'Y'){
            oldLetters[indexOfLetter(userInput[i])] = 'Y';
        } else if (feedback[i] == 'P' && oldLetters[indexOfLetter(userInput[i])] != 'Y'){
            oldLetters[indexOfLetter(userInput[i])] = 'P';
        } else if (feedback[i] == 'N' && oldLetters[indexOfLetter(userInput[i])] != 'Y' && oldLetters[indexOfLetter(userInput[i])] != 'P'){
            oldLetters[indexOfLetter(userInput[i])] = 'N';
        }
    }
    return oldLetters;
  },

};

export default gameUtils;
