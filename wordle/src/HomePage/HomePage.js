import React, { useState } from "react";
import Header from "../Components/Header";
import NestedGrid from "../Components/GameGrid/GameGrid";
import Keyboard from "../Components/Keyboard/Keyboard";
 
function HomePage() {
  let word = "APPLE";
  const [input, setInput] = useState("");
  const [row, setRow] = useState(0);
  const [wordList, setWordList] = useState(["", "", "", "", "", ""]);
  const [usedLetters, setUsedLetters] = useState(['']);

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
 
  return (
    <div className="home-style">
      <Header />
      <NestedGrid input={input} wordList={wordList} row={row} />
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
      />
    </div>
  );
}
 
export default HomePage;
