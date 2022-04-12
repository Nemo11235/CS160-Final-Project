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
  const [showGame, setShowGame] = useState(false);

  let word = "APPLE";
  const [input, setInput] = useState("");
  const [row, setRow] = useState(0);
  const [wordList, setWordList] = useState(["", "", "", "", "", ""]);
  const [usedLetters, setUsedLetters] = useState([""]);
  const [showWinPopUp, setShowWinPopUp] = useState(false);

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

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      const roomData = {
        room: room,
        user: username,
      };
      socket.emit("join_room", roomData);
      setShowGame(true);
    }
  };

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
          <div className="grid-container">
            <NestedGrid
              input={input}
              wordList={wordList}
              row={row}
              className="grid-one"
            />
            <NestedGrid
              input={input}
              wordList={wordList}
              row={row}
              className="grid-two"
            />
          </div>
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
            className="keyboard"
          />
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
