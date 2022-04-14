import React, { useState } from "react";
import Header from "../Components/Header";
import NestedGrid from "../Components/GameGrid/GameGrid";
import Keyboard from "../Components/Keyboard/Keyboard";
import WinPopUp from "./WinPopUp";

function HomePage() {
  let word = "APPLE";
  const [input, setInput] = useState("");
  const [row, setRow] = useState(0);
  const [wordList, setWordList] = useState(["", "", "", "", "", ""]);
  const [usedLetters, setUsedLetters] = useState([""]);
  const [showWinPopUp, setShowWinPopUp] = useState(false);
  const [savedColor, setSavedColor] = useState([
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
  ]);

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

  function updateSavedColor(newArray) {
    setSavedColor(newArray);
  }

  function updateShowWinPopUp(value) {
    setShowWinPopUp(value);
  }

  return (
    <div className="home-style">
      <Header />
      <div className="grid">
        <NestedGrid
          input={input}
          wordList={wordList}
          row={row}
          savedColor={savedColor}
        />
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
      {showWinPopUp && <WinPopUp updateShowWinPopUp={updateShowWinPopUp} />}
    </div>
  );
}

export default HomePage;
