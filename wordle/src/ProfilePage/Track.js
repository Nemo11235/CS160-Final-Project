import React from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UserProfilePage.scss";
import Option from "../WordOption/Options";

// Request tracking data to resume the game
function Track() {
  const history = useNavigate();
  let trackData = () => {
    const namename = localStorage.getItem("email");
    let Tracking = async () => {
      let formField = new FormData();
      formField.append("email", namename);
      formField.append("action", "sendhistory");
      await axios({
        method: "POST",
        url: "/api/user/sendhistory/",
        data: formField,
      }).then((response) => {
        let temp = response.data;
        localStorage.setItem("keyboardHistory", temp.keyboard);
        let word = temp.wordlist;
        let arrayList = word.split(",");
        let count = 0;
        let tempArray = [];
        for (let i = 0; i < 6; i++) {
          if (arrayList[i] == "$") {
            tempArray.push("");
          } else {
            tempArray.push(arrayList[i]);
            count = count + 1;
          }
        }
        console.log(tempArray);
        let length = tempArray.length;
        let aa = "";
        let bb = "";
        let cc = "";
        let dd = "";
        let ee = "";
        try {
          if (length == 0 || count == 6) {
            alert("You already finished the last game");
            alert("This is the new game");
            localStorage.setItem("keyboardHistory", "NONE");
            newGame();
            history("/home");
          } else {
            localStorage.setItem("initWordList", tempArray);
            aa = tempArray[0];
            bb = tempArray[1];
            cc = tempArray[2];
            dd = tempArray[3];
            ee = tempArray[4];
          }
          localStorage.setItem("aa", aa);
          localStorage.setItem("bb", bb);
          localStorage.setItem("cc", cc);
          localStorage.setItem("dd", dd);
          localStorage.setItem("ee", ee);
        } catch (error) {
          console.error(error);
        }
        let getKey = async () => {
          let formField = new FormData();
          formField.append("email", namename);
          formField.append("action", "sendkey");
          await axios({
            method: "POST",
            url: "/api/user/sendkey/",
            data: formField,
          }).then((response) => {
            localStorage.setItem("keywordss", response.data);
          });
        };
        getKey();
        const delay = (ms) => new Promise((res) => setTimeout(res, ms));
        const waiting = async () => {
          await delay(80);
          history("/home");
        };
        waiting();
      });
    };
    Tracking();
  };
  const newGame = () => {
    const namename = localStorage.getItem("email");
    let clearData = async () => {
      let formField = new FormData();
      formField.append("email", namename);
      formField.append("action", "clear");
      await axios({
        method: "POST",
        url: "/api/user/clear/",
        data: formField,
      }).then((response) => {
        console.log(response.data);
        localStorage.setItem("keyboardHistory", "NONE");
      });
    };
    clearData();

    let KeyWordd = async () => {
      let wordd = localStorage.getItem("keyword");
      let namename = localStorage.getItem("email");
      let formField = new FormData();
      formField.append("valuee", wordd);
      formField.append("email", namename);
      formField.append("action", "keywords");
      await axios({
        method: "POST",
        url: "/api/user/getkey/",
        data: formField,
      }).then((response) => {
        console.log(response.data);
        localStorage.setItem("keywordss", wordd);
      });
    };
    KeyWordd();
    let aa = "";
    let bb = "";
    let cc = "";
    let dd = "";
    let ee = "";
    localStorage.setItem("aa", aa);
    localStorage.setItem("bb", bb);
    localStorage.setItem("cc", cc);
    localStorage.setItem("dd", dd);
    localStorage.setItem("ee", ee);
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const waiting = async () => {
      await delay(90);
      history("/home");
    };
    waiting();
  };
  return (
    <div className="card-bot-left">
      <div>
        <h1 className="title3">Word Selection</h1>
      </div>
      <div className="word-option">
        <Option />
      </div>
      <br />
      <br />
      <h1 className="title6">Game Setting</h1>
      <div className="track">
        <div className="new-games">
          <button className="add-file" onClick={trackData}>
            Resume Game
          </button>
        </div>
        <div className="resume-games">
          <button className="add-file" onClick={newGame}>
            New Game
          </button>
        </div>
      </div>
    </div>
  );
}
export default Track;
