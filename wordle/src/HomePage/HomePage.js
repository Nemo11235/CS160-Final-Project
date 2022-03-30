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

  let [hamburgerOpen, setHamburgerOpen] = useState(0);

  const hamburgerToggleClickHandler = () => {
    setHamburgerOpen(hamburgerOpen + 1);
  };

  const hamburgerBlurHandler = () => {
    setHamburgerOpen(hamburgerOpen - 1);
  };

  // Variables to display nothing, or display hamburger.
  let hamburgerMenu = <HamburgerMenu />;
  let hamburgerBlur;
  if (hamburgerOpen) {
    // hamburgerMenu = <HamburgerMenu />;
    hamburgerMenu = <HamburgerMenu show={hamburgerOpen} />;
    hamburgerBlur = <HamburgerBlur click={hamburgerBlurHandler} />;
  }

  return (
    <div className="home-style" style={{ height: "100%" }}>
      <Header click={hamburgerToggleClickHandler} />

      {hamburgerMenu}
      {/* <HamburgerMenu show={hamburgerOpen} /> */}
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
