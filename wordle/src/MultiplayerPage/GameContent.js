/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import NestedGrid from "../Components/GameGrid/GameGrid";
import Keyboard from "../Components/Keyboard/Keyboard";
import WinPopUp from "../HomePage/WinPopUp";
import "./GameContent.scss";

function GameContent({ socket, room, word }) {
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

  const sendGameData = () => {
    const gameData = {
      room: room,
      row: row,
      wordList: wordList,
      savedColor: savedColor,
    };
    socket.emit("send_data", gameData);
  };

  useEffect(() => {
    socket.on("receive_data", (data) => {
      // console.log("received data from use Effect", data);
      setRowB(data.row);
      setSavedColorB(data.savedColor);
    });
  }, [socket]);

  useEffect(() => {
    sendGameData();
  }, [row, savedColorB]);

  // function keyPress(e) {
  //   if (e.key == "Enter") {
  //     sendGameData();
  //   }
  // }

  // React.useEffect(() => {
  //   window.addEventListener("keydown", keyPress);
  // }, []);

  return (
    <div>
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
          room={room}
          socket={socket}
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
