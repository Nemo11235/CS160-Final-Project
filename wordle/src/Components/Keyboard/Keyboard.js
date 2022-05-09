import React from "react";
import "./Keyboard.scss";
import PropTypes from "prop-types";
import gameUtils from "../../Utils/gameUtils";
import axios from "axios";

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
  savedColor,
  updateSavedColor,
  updateShowWinPopUp,
  updateHasLost,
  room,
  socket,
  singleplayer,
  hasLost,
  oppHasLost,
}) {
  // onclick function for letter keys
  const keyClick = (letter) => {
    if (input.length < 5) updateInput((prev) => prev + letter);
  };

  // onclick function of backspace key
  const backspaceClick = () => {
    updateInput(input.substring(0, input.length - 1));
  };
  let updateWin = async () => {
    let win = localStorage.getItem("win");
    console.log("THANHVY");
    console.log(win);
    win = parseInt(win);
    console.log("HUYNGUYEN");
    win = win + 1;
    console.log(win);
    const email = localStorage.getItem("email");
    let formField = new FormData();
    formField.append("email", email);
    formField.append("win", win);
    formField.append("action", "updatewin");
    await axios({
      method: "POST",
      url: "/api/user/updatewin/",
      data: formField,
    }).then((response) => {
      console.log(response);
    });
  };
  let updateLoose = async () => {
    let loose = localStorage.getItem("loose");
    loose = parseInt(loose);
    console.log(loose);
    loose = loose + 1;
    const email = localStorage.getItem("email");
    console.log(email);
    console.log(loose);
    let formField = new FormData();
    formField.append("email", email);
    formField.append("loose", loose);
    formField.append("action", "updateloose");
    await axios({
      method: "POST",
      url: "/api/user/updateloose/",
      data: formField,
    }).then((response) => {
      console.log("FCANXUAN");
      console.log(response.data);
      console.log("FCANTHANH");
    });
  };

  const sendGameData = () => {
    const gameData = {
      room: room,
      row: row,
      wordList: wordList,
      savedColor: savedColor,
    };
    socket.emit("send_data", gameData);
  };

  // onclick function of enter key
  const enterClick = () => {
    // if this is not the last attempt and input is valid
    if (input.length == 5 && row <= 5) {
      let feedback = gameUtils.inputCheck(word, input);
      if (gameUtils.isCorrect(feedback)) {
        updateWin();
        updateShowWinPopUp(true);
      } else if (singleplayer && row == 5) {
        // Game over, out of guesses.
        updateLoose();
        updateHasLost(true);

        updateShowWinPopUp(true);
      } else if (hasLost && oppHasLost) {
        updateShowWinPopUp(true);
      }
      let tempcolor = gameUtils.colorArray(feedback);
      const tempArray = savedColor;
      const temp = wordList;
      temp[row] = input;
      tempArray[row] = tempcolor;
      let oldLetters = gameUtils.usedLetters(input, feedback, usedLetters);
      updateUsedLetters(oldLetters);
      updateWordList(temp);
      updateSavedColor(tempArray);
      updateRow((prev) => prev + 1);
      if (row != 5) {
        updateInput("");
      }
      sendGameData();
    } else {
      alert("word incomplete");
    }
  };

  // only accept valid keys
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
      <button
        className={gameUtils.eachKeyColor("Q", usedLetters)}
        onClick={() => keyClick("Q")}
      >
        Q
      </button>
      <button
        className={gameUtils.eachKeyColor("W", usedLetters)}
        onClick={() => keyClick("W")}
      >
        W
      </button>
      <button
        className={gameUtils.eachKeyColor("E", usedLetters)}
        onClick={() => keyClick("E")}
      >
        E
      </button>
      <button
        className={gameUtils.eachKeyColor("R", usedLetters)}
        onClick={() => keyClick("R")}
      >
        R
      </button>
      <button
        className={gameUtils.eachKeyColor("T", usedLetters)}
        onClick={() => keyClick("T")}
      >
        T
      </button>
      <button
        className={gameUtils.eachKeyColor("Y", usedLetters)}
        onClick={() => keyClick("Y")}
      >
        Y
      </button>
      <button
        className={gameUtils.eachKeyColor("U", usedLetters)}
        onClick={() => keyClick("U")}
      >
        U
      </button>
      <button
        className={gameUtils.eachKeyColor("I", usedLetters)}
        onClick={() => keyClick("I")}
      >
        I
      </button>
      <button
        className={gameUtils.eachKeyColor("O", usedLetters)}
        onClick={() => keyClick("O")}
      >
        O
      </button>
      <button
        className={gameUtils.eachKeyColor("P", usedLetters)}
        onClick={() => keyClick("P")}
      >
        P
      </button>
      <br></br>
      <button
        className={gameUtils.eachKeyColor("A", usedLetters)}
        onClick={() => keyClick("A")}
      >
        A
      </button>
      <button
        className={gameUtils.eachKeyColor("S", usedLetters)}
        onClick={() => keyClick("S")}
      >
        S
      </button>
      <button
        className={gameUtils.eachKeyColor("D", usedLetters)}
        onClick={() => keyClick("D")}
      >
        D
      </button>
      <button
        className={gameUtils.eachKeyColor("F", usedLetters)}
        onClick={() => keyClick("F")}
      >
        F
      </button>
      <button
        className={gameUtils.eachKeyColor("G", usedLetters)}
        onClick={() => keyClick("G")}
      >
        G
      </button>
      <button
        className={gameUtils.eachKeyColor("H", usedLetters)}
        onClick={() => keyClick("H")}
      >
        H
      </button>
      <button
        className={gameUtils.eachKeyColor("J", usedLetters)}
        onClick={() => keyClick("J")}
      >
        J
      </button>
      <button
        className={gameUtils.eachKeyColor("K", usedLetters)}
        onClick={() => keyClick("K")}
      >
        K
      </button>
      <button
        className={gameUtils.eachKeyColor("L", usedLetters)}
        onClick={() => keyClick("L")}
      >
        L
      </button>
      <br></br>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <button className="big-key" onClick={() => backspaceClick()}>
        <i className="material-icons">backspace</i>
      </button>
      <button
        className={gameUtils.eachKeyColor("Z", usedLetters)}
        onClick={() => keyClick("Z")}
      >
        Z
      </button>
      <button
        className={gameUtils.eachKeyColor("X", usedLetters)}
        onClick={() => keyClick("X")}
      >
        X
      </button>
      <button
        className={gameUtils.eachKeyColor("C", usedLetters)}
        onClick={() => keyClick("C")}
      >
        C
      </button>
      <button
        className={gameUtils.eachKeyColor("V", usedLetters)}
        onClick={() => keyClick("V")}
      >
        V
      </button>
      <button
        className={gameUtils.eachKeyColor("B", usedLetters)}
        onClick={() => keyClick("B")}
      >
        B
      </button>
      <button
        className={gameUtils.eachKeyColor("N", usedLetters)}
        onClick={() => keyClick("N")}
      >
        N
      </button>
      <button
        className={gameUtils.eachKeyColor("M", usedLetters)}
        onClick={() => keyClick("M")}
      >
        M
      </button>
      <button className="big-key" onClick={() => enterClick()}>
        Enter
      </button>
    </div>
  );
}

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
  updateSavedColor: PropTypes.func,
  savedColor: PropTypes.array,
  updateShowWinPopUp: PropTypes.func,
  updateHasLost: PropTypes.func,
  socket: PropTypes.func,
  room: PropTypes.string,
  singleplayer: PropTypes.bool,
  hasLost: PropTypes.bool,
  oppHasLost: PropTypes.bool,
};

export default Keyboard;
