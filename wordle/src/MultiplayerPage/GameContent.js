/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import NestedGrid from "../Components/GameGrid/GameGrid";
import Keyboard from "../Components/Keyboard/Keyboard";
import MultiplayerPopup from "../Components/MultiplayerPopup/MultiplayerPopup";
import "./GameContent.scss";

function GameContent({ socket, room, word, username }) {
  // states for the user
  const [input, setInput] = useState(""); // user's input of the current row
  const [row, setRow] = useState(0); // current row number, first row is row 0
  const [wordList, setWordList] = useState(["", "", "", "", "", ""]); // the words that the user entered so far
  const [usedLetters, setUsedLetters] = useState([""]); // feedback on each letter, N Y P
  const [showWinPopUp, setShowWinPopUp] = useState(false); // whether or not show the win pop-up window
  const [nameGameOver, setNameGameOver] = useState(false);
  const [curUserWin, setCurUserWin] = useState(false);
  const [hasLost, setHasLost] = useState(false);
  const [oppHasLost, setOppHasLost] = useState(false);
  const [resultDraw, setResultDraw] = useState(false);
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

  // These may not be needed if I can just call the 'set' stuff
  function updateCurUserWin(value) {
    setCurUserWin(value);
  }

  function updateHasLost(value) {
    setHasLost(value);
  }

  function updateOppHasLost(value) {
    setOppHasLost(value);
  }

  const sendGameData = () => {
    if (row < 6 && wordList[row - 1] === word) {
      // setCurUserWin(true);
      updateCurUserWin(true);
    } else if (row === 6 && wordList[row - 1] !== word) {
      // setHasLost(true);
      updateHasLost(true);
      console.log("Value from sendGameData for hasLost is: " + hasLost);
    }

    const gameData = {
      name: username,
      room: room,
      row: row,
      wordList: wordList,
      savedColor: savedColor,
      hasLost: hasLost,
    };

    socket.emit("send_data", gameData);
  };

  useEffect(() => {
    socket.on("receive_data", (data) => {
      console.log("received data from use Effect", data);

      if (data.hasLost) {
        updateOppHasLost(true);
      }

      // Since the variable inside doesn't update, maybe just take from here
      console.log("inside receive_data, data.hasLost is: " + data.hasLost + " and hasLost is: " + hasLost)

      if (data.hasLost && hasLost) {
        // Draw
        setResultDraw(true);
        updateShowWinPopUp(true);
      } else if (data.wordList[data.row - 1] === word) {
        // Enemy won, send enemy name and display popup.
        setNameGameOver(data.name);
        updateShowWinPopUp(true);
      }

      setRowB(data.row);
      setSavedColorB(data.savedColor);
    });
  }, [hasLost, oppHasLost]);

  useEffect(() => {
    sendGameData();
  }, [row, savedColorB]);

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
          singleplayer={false}
          hasLost={hasLost}
          oppHasLost={oppHasLost}
        />
      </div>
      {showWinPopUp && (
        <MultiplayerPopup
          curUserName={username}
          curUserWin={curUserWin}

          word={word}
          draw={resultDraw}
          opponentName={nameGameOver}
        />
      )}
    </div>
  );
}

export default GameContent;
