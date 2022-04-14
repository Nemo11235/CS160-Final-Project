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
    for(let i = 0; i < userInput.length; i++){
      let index = userInput[i].charCodeAt() - 'A'.charCodeAt();
        if(feedback[i] == 'Y'){
            oldLetters[index] = 'Y';
        } else if (feedback[i] == 'P' && oldLetters[index] != 'Y'){
            oldLetters[index] = 'P';
        } else if (feedback[i] == 'N' && oldLetters[index] != 'Y' && oldLetters[index] != 'P'){
            oldLetters[index] = 'N';
        }
    }
    return oldLetters;
  },

};

export default gameUtils;
