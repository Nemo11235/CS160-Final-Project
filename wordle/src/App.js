import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import NestedGrid from "./Components/GameGrid/GameGrid";
import Keyboard from "./Components/Keyboard/Keyboard";

function App() {
  let word = "APPLE";
  const [input, setInput] = useState("");
  const [row, setRow] = useState(0);
  const [wordList, setWordList] = useState(["", "", "", "", "", ""]);

  function updateInput(replace) {
    setInput(replace);
  }

  function updateRow(value) {
    setRow(value);
  }

  function updateWordList(newArray) {
    setWordList(newArray);
  }

  return (
    <div className="app-style">
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
      />
    </div>
  );
}

export default App;
