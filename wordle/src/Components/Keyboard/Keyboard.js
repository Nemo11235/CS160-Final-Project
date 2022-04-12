import React from "react";
import "./Keyboard.scss";
import PropTypes from "prop-types";
import gameUtils from "../../Utils/gameUtils";

Keyboard.propTypes = {
  input: PropTypes.string,
  row: PropTypes.number,
  updateInput: PropTypes.func,
  updateRow: PropTypes.func,
  updateWordList: PropTypes.func,
  wordList: PropTypes.array,
  word: PropTypes.string,
  usedLetters: PropTypes.array,
  updateUsedLetters: PropTypes.func,
  updateShowWinPopUp: PropTypes.func,
};

function Keyboard({
  input,
  updateInput,
  row,
  updateRow,
  wordList,
  updateWordList,
  word,
  usedLetters,
  updateUsedLetters,
  updateShowWinPopUp,
}) {
  // onclick function for letter keys
  const keyClick = (letter) => {
    if (input.length < 5) updateInput((prev) => prev + letter);
  };

  // onclick function of backspace key
  const backspaceClick = () => {
    updateInput(input.substring(0, input.length - 1));
  };

  // onclick function of enter key
  const enterClick = () => {
    let feedback = gameUtils.inputCheck(word, input);
    let isCorrect = gameUtils.isCorrect(feedback);
    // if this is not the last attempt and input is valid
    if (row < 5 && input.length == 5) {
      if (isCorrect) {
        updateShowWinPopUp(true);
      } else {
        alert(feedback);
      }
      // update the wordList, row number, and reset the input to empty
      const temp = wordList;
      temp[row] = input;
      let oldLetters = gameUtils.usedLetters(input, feedback, usedLetters);

      updateUsedLetters(oldLetters);
      updateWordList(temp);
      updateRow((prev) => prev + 1);
      updateInput("");
      // if this is the last valid attempt
    } else if (row == 5 && input.length == 5) {
      if (isCorrect) {
        updateShowWinPopUp(true);
      } else {
        alert("game over");
      }
    } else {
      alert("word incomplete");
    }
  };

  // only accept valide keys
  function keyValidator(userInput) {
    return (
      /^[a-z]+$/.test(userInput) ||
      userInput == "Enter" ||
      userInput == "Backspace"
    );
  }

  function keyPress(e) {
    if (keyValidator(e.key)) {
      if (/^[a-z]+$/.test(e.key)) {
        if (input.length < 5) updateInput((prev) => prev + e.key.toUpperCase());
      } else if (e.key == "Enter") {
        enterClick();
      } else {
        // backspace
        backspaceClick();
      }
    }
  }

  // allow physical keyboard input, it should do exactly the same thing as the virtual keyboard.
  React.useEffect(() => {
    window.addEventListener("keydown", keyPress);
    return () => {
      window.removeEventListener("keydown", keyPress);
    };
  });

  return (
    <div className="keyboard-style">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <button className="key" onClick={() => keyClick("Q")}>
        Q
      </button>
      <button className="key-partial" onClick={() => keyClick("W")}>
        W
      </button>
      <button className="key-correct" onClick={() => keyClick("E")}>
        E
      </button>
      <button className="key-wrong" onClick={() => keyClick("R")}>
        R
      </button>
      <button className="key" onClick={() => keyClick("T")}>
        T
      </button>
      <button className="key" onClick={() => keyClick("Y")}>
        Y
      </button>
      <button className="key" onClick={() => keyClick("U")}>
        U
      </button>
      <button className="key" onClick={() => keyClick("I")}>
        I
      </button>
      <button className="key" onClick={() => keyClick("O")}>
        O
      </button>
      <button className="key" onClick={() => keyClick("P")}>
        P
      </button>
      <br></br>
      <button className="special-key" onClick={() => keyClick("A")}>
        A
      </button>
      <button className="key" onClick={() => keyClick("S")}>
        S
      </button>
      <button className="key" onClick={() => keyClick("D")}>
        D
      </button>
      <button className="key" onClick={() => keyClick("F")}>
        F
      </button>
      <button className="key" onClick={() => keyClick("G")}>
        G
      </button>
      <button className="key" onClick={() => keyClick("H")}>
        H
      </button>
      <button className="key" onClick={() => keyClick("J")}>
        J
      </button>
      <button className="key" onClick={() => keyClick("K")}>
        K
      </button>
      <button className="key" onClick={() => keyClick("L")}>
        L
      </button>
      <br></br>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <button className="big-key" onClick={() => backspaceClick()}>
        <i className="material-icons">backspace</i>
      </button>
      <button className="key" onClick={() => keyClick("Z")}>
        Z
      </button>
      <button className="key" onClick={() => keyClick("X")}>
        X
      </button>
      <button className="key" onClick={() => keyClick("C")}>
        C
      </button>
      <button className="key" onClick={() => keyClick("V")}>
        V
      </button>
      <button className="key" onClick={() => keyClick("B")}>
        B
      </button>
      <button className="key" onClick={() => keyClick("N")}>
        N
      </button>
      <button className="key" onClick={() => keyClick("M")}>
        M
      </button>
      <button className="big-key" onClick={enterClick}>
        Enter
      </button>
    </div>
  );
}

export default Keyboard;
