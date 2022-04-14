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
      if (word.includes(userInput[i]) && charCountMap.get(userInput[i]) > 0 && inputResults[i] != 'Y') {
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
    for (let i = 0; i < userInput.length; i++) {
      let index = userInput[i].charCodeAt() - "A".charCodeAt();
      if (feedback[i] == "Y") {
        oldLetters[index] = "Y";
      } else if (feedback[i] == "P" && oldLetters[index] != "Y") {
        oldLetters[index] = "P";
      } else if (
        feedback[i] == "N" &&
        oldLetters[index] != "Y" &&
        oldLetters[index] != "P"
      ) {
        oldLetters[index] = "N";
      }
    }
    return oldLetters;
  },

  // this function is called in keyboard.js file in enterClick() function
  // when the function is called it returns color array according to the feedback
  // this function is for setting the color for the grid
  colorArray(feedback) {
    let colorArray = [];
    if (feedback && Array.isArray(feedback) && feedback.length) {
      for (let i = 0; i < feedback.length; i++) {
        switch (feedback[i]) {
          case "Y":
            colorArray[i] = "green";
            break;
          case "N":
            colorArray[i] = "gray";
            break;
          case "P":
            colorArray[i] = "yellow";
            break;
          default:
        }
      }
    }
    return colorArray;
  },

  //this function is called in Keyboard.js file
  //to set color style for each key for the key button
  eachKeyColor(letter, usedLetters) {
    if (usedLetters && Array.isArray(usedLetters) && usedLetters.length) {
      if (usedLetters[letter.charCodeAt() - "A".charCodeAt()] == "Y")
        return "key-correct";
      else if (usedLetters[letter.charCodeAt() - "A".charCodeAt()] == "N")
        return "key-wrong";
      else if (usedLetters[letter.charCodeAt() - "A".charCodeAt()] == "P")
        return "key-partial";
      else return "key";
    }
  },
};

export default gameUtils;
