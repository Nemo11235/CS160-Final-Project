import React, { useState } from "react";
import Header from "../Components/Header/Header";
import NestedGrid from "../Components/GameGrid/GameGrid";
import Keyboard from "../Components/Keyboard/Keyboard";
import HamburgerMenu from "../Components/HamburgerMenu/HamburgerMenu";
import HamburgerBlur from "../Components/HamburgerMenu/HamburgerBlur";

function HomePage() {
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

  /* Hamburger Menu Implementation */
  let [hamburgerOpen, setHamburgerOpen] = useState(0);
  const hamburgerOpenHandler = () => {
    setHamburgerOpen(hamburgerOpen + 1);
  };
  const hamburgerCloseHandler = () => {
    setHamburgerOpen(hamburgerOpen - 1);
  };

  let hamburgerMenu = <HamburgerMenu />;
  let hamburgerBlur;
  if (hamburgerOpen) {
    hamburgerMenu = <HamburgerMenu open={hamburgerOpen} close={hamburgerCloseHandler} />;
    hamburgerBlur = <HamburgerBlur close={hamburgerCloseHandler} />;
  }

  return (
    <div className="home-style" style={{ height: "100%" }}>
      <Header click={hamburgerOpenHandler} />
      {hamburgerMenu}
      {hamburgerBlur}
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
      <p>{hamburgerOpen}</p>
    </div>
  );
}

export default HomePage;
