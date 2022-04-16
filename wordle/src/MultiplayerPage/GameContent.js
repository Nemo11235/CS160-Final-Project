/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import NestedGrid from "../Components/GameGrid/GameGrid";
import Keyboard from "../Components/Keyboard/Keyboard";
import WinPopUp from "../HomePage/WinPopUp";
import "./GameContent.scss";

function GameContent({ socket, username, room, word }) {
  // states for the user
  const [input, setInput] = useState(""); // user's input of the current row
  const [row, setRow] = useState(0); // current row number, first row is row 0
  const [wordList, setWordList] = useState(["", "", "", "", "", ""]); // the words that the user entered so far
  const [usedLetters, setUsedLetters] = useState([""]); // feedback on each letter, N Y P
  const [showWinPopUp, setShowWinPopUp] = useState(false); // whether or not show the win pop-up window
  const [savedColor, setSavedColor] = useState([
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
  ]);

  const [savedColorB, setSavedColorB] = useState([
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
  ]);
  const [rowB, setRowB] = useState(0);

  function updateInput(replace) {
    setInput(replace);
  }

  function updateRow(value) {
    setRow(value);
  }

  function updateWordList(newArray) {
    setWordList(newArray);
  }

  function updateUsedLetters(newArray) {
    setUsedLetters(newArray);
  }

  function updateShowWinPopUp(value) {
    setShowWinPopUp(value);
  }

  function updateSavedColor(newArray) {
    setSavedColor(newArray);
  }

  const sendGameData = async () => {
    const gameData = {
      room: room,
      username: username,
      row: row,
      wordList: wordList,
      savedColor: savedColor,
    };

    await socket.emit("send_data", gameData);
  };

  useEffect(() => {
    socket.on("receive_data", (data) => {
      setRowB(data.row);
      setSavedColorB(data.savedColor);
    });
  }, [socket]);

  return (
    <div>
      <button onClick={sendGameData}>send</button>
      <div className="grid-container">
        <div className="grid-one">
          <NestedGrid
            input={input}
            wordList={wordList}
            row={row}
            savedColor={savedColor}
          />
        </div>
        <div className="grid-two">
          <NestedGrid
            input={""}
            wordList={[[""], [""], [""], [""], [""], [""]]}
            row={rowB}
            savedColor={savedColorB}
          />
        </div>
      </div>
      <div className="keyboard">
        <Keyboard
          input={input}
          updateInput={updateInput}
          row={row}
          updateRow={updateRow}
          wordList={wordList}
          updateWordList={updateWordList}
          word={word}
          usedLetters={usedLetters}
          updateUsedLetters={updateUsedLetters}
          updateShowWinPopUp={updateShowWinPopUp}
          savedColor={savedColor}
          updateSavedColor={updateSavedColor}
        />
      </div>
      {showWinPopUp && (
        <WinPopUp
          updateShowWinPopUp={updateShowWinPopUp}
          className="winpopup"
        />
      )}
    </div>
  );
}

export default GameContent;
