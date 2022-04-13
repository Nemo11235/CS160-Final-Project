import io from "socket.io-client";
import React, { useState } from "react";
import "./MultiplayerPage.scss";
import Header from "../Components/Header";
import NestedGrid from "../Components/GameGrid/GameGrid";
import Keyboard from "../Components/Keyboard/Keyboard";
import WinPopUp from "../HomePage/WinPopUp";

const socket = io.connect("http://localhost:3001");

function MultiplayerPage() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showGame, setShowGame] = useState(false); // show the grid and keyboard after user entering the room

  let word = "APPLE";
  const [input, setInput] = useState(""); // user's input of the current row
  const [row, setRow] = useState(0); // current row number, first row is row 0
  const [wordList, setWordList] = useState(["", "", "", "", "", ""]); // the words that the user entered so far
  const [usedLetters, setUsedLetters] = useState([""]); // feedback on each letter, N Y P
  const [showWinPopUp, setShowWinPopUp] = useState(false); // whether or not show the win pop-up window

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

  return (
    <div className="multiplayer-style">
      <Header />
      {!showGame ? (
        <div className="join-game-container">
          <h3>Join a game room</h3>
          <input
            type="text"
            placeholder="Your ID..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room name..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join</button>
        </div>
      ) : (
        <div>
          <CountDown />
          <div className="grid-container">
            <div className="grid-one">
              <NestedGrid input={input} wordList={wordList} row={row} />
            </div>
            <div className="grid-two">
              <NestedGrid input={input} wordList={wordList} row={row} />
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
            />
          </div>
          {showWinPopUp && (
            <WinPopUp
              updateShowWinPopUp={updateShowWinPopUp}
              className="winpopup"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default MultiplayerPage;
