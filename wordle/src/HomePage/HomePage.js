import React, { useState } from "react";
import Header from "../Components/Header/Header";
import NestedGrid from "../Components/GameGrid/GameGrid";
import Keyboard from "../Components/Keyboard/Keyboard";
import HamburgerMenu from "../Components/HamburgerMenu/HamburgerMenu";
import HamburgerBlur from "../Components/HamburgerMenu/HamburgerBlur";
import SingleplayerPopup from "../Components/SingleplayerPopup/SingleplayerPopup";
import "./HomePage.scss";
import axios from "axios";
import gameUtils from "../Utils/gameUtils";

function HomePage() {
  let word = localStorage.getItem("keywordss");
  const [input, setInput] = useState("");
  let aaaaa = [""];
  const [showWinPopUp, setShowWinPopUp] = useState(false);
  let a = "";
  let b = "";
  let c = "";
  let d = "";
  let e = "";
  let aaa = [""];
  let bbb = [""];
  let ccc = [""];
  let ddd = [""];
  let eee = [""];
  const [hasLost, setHasLost] = useState(false);
  try {
    let bbbbb = localStorage.getItem("keyboardHistory");
    if (bbbbb != "NONE") {
      aaaaa = [];
      for (let i = 0; i < bbbbb.length; i++) {
        if (bbbbb[i] != ",") {
          if (bbbbb[i] == "K") {
            aaaaa.push("");
          } else {
            aaaaa.push(bbbbb[i]);
          }
        }
      }
    }
  } catch (error) {
    console.error(error);
  }

  const [usedLetters, setUsedLetters] = useState(aaaaa);
  try {
    a = localStorage.getItem("aa");
  } catch (error) {
    console.error(error);
  }
  try {
    b = localStorage.getItem("bb");
  } catch (error) {
    console.error(error);
  }
  try {
    c = localStorage.getItem("cc");
  } catch (error) {
    console.error(error);
  }
  try {
    d = localStorage.getItem("dd");
  } catch (error) {
    console.error(error);
  }
  try {
    e = localStorage.getItem("ee");
  } catch (error) {
    console.error(error);
  }

  let time = 0;

  if (a != "") {
    time = time + 1;
  }
  if (b != "") {
    time = time + 1;
  }
  if (c != "") {
    time = time + 1;
  }
  if (d != "") {
    time = time + 1;
  }
  if (e != "") {
    time = time + 1;
  }

  if (a != "") {
    let tempArray = [];

    if (a != "") {
      tempArray.push(a);
    }

    if (b != "") {
      tempArray.push(b);
    }

    if (c != "") {
      tempArray.push(c);
    }

    if (d != "") {
      tempArray.push(d);
    }

    if (e != "") {
      tempArray.push(e);
    }
    let temptemp = word;
    // Get the color of keyboard
    if (tempArray.length == 5) {
      let aaaa = gameUtils.inputCheck(temptemp, a);
      aaa = gameUtils.colorArray(aaaa);

      let bbbb = gameUtils.inputCheck(temptemp, b);
      bbb = gameUtils.colorArray(bbbb);

      let cccc = gameUtils.inputCheck(temptemp, c);
      ccc = gameUtils.colorArray(cccc);

      let dddd = gameUtils.inputCheck(temptemp, d);
      ddd = gameUtils.colorArray(dddd);

      let eeee = gameUtils.inputCheck(temptemp, e);
      eee = gameUtils.colorArray(eeee);
    } else if (tempArray.length == 4) {
      let aaaa = gameUtils.inputCheck(temptemp, a);
      aaa = gameUtils.colorArray(aaaa);

      let bbbb = gameUtils.inputCheck(temptemp, b);
      bbb = gameUtils.colorArray(bbbb);

      let cccc = gameUtils.inputCheck(temptemp, c);
      ccc = gameUtils.colorArray(cccc);

      let dddd = gameUtils.inputCheck(temptemp, d);
      ddd = gameUtils.colorArray(dddd);
    } else if (tempArray.length == 3) {
      let aaaa = gameUtils.inputCheck(temptemp, a);
      aaa = gameUtils.colorArray(aaaa);

      let bbbb = gameUtils.inputCheck(temptemp, b);
      bbb = gameUtils.colorArray(bbbb);

      let cccc = gameUtils.inputCheck(temptemp, c);
      ccc = gameUtils.colorArray(cccc);
    } else if (tempArray.length == 2) {
      let aaaa = gameUtils.inputCheck(temptemp, a);
      aaa = gameUtils.colorArray(aaaa);
      let bbbb = gameUtils.inputCheck(temptemp, b);

      aaaaa = gameUtils.usedLetters(b, word, aaaaa);

      bbb = gameUtils.colorArray(bbbb);
    } else if (tempArray.length == 1) {
      let aaaa = gameUtils.inputCheck(word, a);
      aaa = gameUtils.colorArray(aaaa);
    }
  }
  const [savedColor, setSavedColor] = useState([aaa, bbb, ccc, ddd, eee, [""]]);
  const [row, setRow] = useState(time);
  const [wordList, setWordList] = useState([a, b, c, d, e, ""]);
  const namename = localStorage.getItem("email");
  function updateInput(replace) {
    setInput(replace);
  }
  function updateRow(value) {
    setRow(value);
  }
  // Send Word List to back end every time user finish the row
  function updateWordList(newArray) {
    setWordList(newArray);
    let temp = [];
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] == "") {
        temp.push("$");
      } else {
        temp.push(newArray[i]);
      }
    }
    let UserHistory = async () => {
      let formField = new FormData();
      formField.append("value", temp);

      formField.append("email", namename);
      formField.append("action", "getwordlist");
      await axios({
        method: "POST",
        url: "/api/user/gethistory/",
        data: formField,
      }).then((response) => {
        console.log(response.data);
      });
    };
    UserHistory();
  }

  function updateUsedLetters(newArray) {
    let temp = [];
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] == "P" || newArray[i] == "N" || newArray[i] == "Y") {
        temp.push(newArray[i]);
      } else {
        temp.push("K");
      }
    }
    setUsedLetters(newArray);
    let UserHistory = async () => {
      let formField = new FormData();
      formField.append("value", temp);
      formField.append("email", namename);
      formField.append("action", "gethistory");
      await axios({
        method: "POST",
        url: "/api/user/gethistory/",
        data: formField,
      }).then((response) => {
        console.log(response.data);
      });
    };
    UserHistory();
  }
  function updateHasLost(value) {
    setHasLost(value);
  }

  function updateSavedColor(newArray) {
    setSavedColor(newArray);
  }

  function updateShowWinPopUp(value) {
    setShowWinPopUp(value);
  }

  /* Hamburger Menu Implementation */
  let [hamburgerOpen, setHamburgerOpen] = useState(false);
  const hamburgerOpenHandler = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  let hamburgerMenu = <HamburgerMenu />;
  let hamburgerBlur;
  if (hamburgerOpen) {
    hamburgerMenu = (
      <HamburgerMenu open={hamburgerOpen} close={hamburgerOpenHandler} />
    );
    hamburgerBlur = <HamburgerBlur close={hamburgerOpenHandler} />;
  }

  return (
    <div>
      <Header click={hamburgerOpenHandler} />
      {/* <button onClick={ProfilePage}>Profile Page</button> */}
      {hamburgerMenu}
      {hamburgerBlur}
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
          updateHasLost={updateHasLost}
          savedColor={savedColor}
          updateSavedColor={updateSavedColor}
          singleplayer={true}
        />
      </div>
      {showWinPopUp && (
        <SingleplayerPopup
          word={word}
          updateShowWinPopUp={updateShowWinPopUp}
          hasLost={hasLost}
        />
      )}
    </div>
  );
}

export default HomePage;
