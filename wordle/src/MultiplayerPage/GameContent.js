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

  // const sendGameData = () => {
  //   const gameData = {
  //     room: room,
  //     username: username,
  //     row: row,
  //     wordList: wordList,
  //     savedColor: savedColor,
  //   };
  //   socket.emit("send_data", gameData);
  // };

  const sendGameData = () => {
    const gameData = {
      room: room,
      row: row,
      wordList: wordList,
      savedColor: savedColor,
    };
    socket.emit("send_data", gameData);
  };


  // Work on this part, create a use-state hook (boolean) 
  // If true, pop-up show,    if false, don't show yet

  // Component tells socket to start, server recieves, sends to room. From there, component checks 
  useEffect(() => {   // when there is a change, update all components.  
                      // if anything happens to the socket, re-render everything
    socket.on("receive_data", (data) => {
      console.log("received data from use Effect", data);
      setRowB(data.row);
      setSavedColorB(data.savedColor);
                          // socket.on() iss what you do when this happened
    });                   // socket.emit() means something happened
  }, [socket]);           // emit in the server, then server sends to the component       
                          // socket.emit to socket.on, then socket.emit to socket.on

  useEffect(() => {       // When row or savedColorB changes, trigger useEffect()
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
        <MultiplayerPopup
          updateShowWinPopUp={updateShowWinPopUp}


          word={word}
          draw={false}
          username={username}
        />
      )}
    </div>
  );
}

export default GameContent;
