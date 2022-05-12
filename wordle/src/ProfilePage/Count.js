import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserProfilePage.scss";

// Get the current time when user loose or win
function Count() {
  useEffect(() => {
    Loose();
    Win();
    Count();
  });
  const [won, setWon] = useState(0);
  const [lost, setLost] = useState(0);
  const [played, setPlayed] = useState(0);
  const [winpercent, setWinpercent] = useState(0);
  let Win = async () => {
    const email = localStorage.getItem("email");
    let formField = new FormData();
    formField.append("email", email);
    formField.append("action", "win");
    await axios({
      method: "POST",
      url: "/api/user/getwin/",
      data: formField,
    }).then((response) => {
      localStorage.setItem("win", response.data);
    });
  };
  let Loose = async () => {
    const email = localStorage.getItem("email");
    let formField = new FormData();
    formField.append("email", email);
    formField.append("action", "loose");
    await axios({
      method: "POST",
      url: "/api/user/getloose/",
      data: formField,
    }).then((response) => {
      localStorage.setItem("loose", response.data);
    });
  };
  let Count = async () => {
    const email = localStorage.getItem("email");
    let formField = new FormData();
    formField.append("email", email);
    formField.append("action", "count-time");
    await axios({
      method: "POST",
      url: "/api/user/count/",
      data: formField,
    }).then((response) => {
      let temp = response.data;
      setWon(temp.win);
      setLost(temp.loose);
      setPlayed(parseInt(won) + parseInt(lost));
      setWinpercent((parseInt(won)*100/(parseInt(won) + parseInt(lost))).toFixed(0))
    });
  };
  return (
    <div className="card-top-right">
      <div>
        <h1 className="title3">Statistics</h1>
        <div className="history">
          <h2 className="title9"> Played: {played}</h2>
          <h2 className="title9">Won: {won}</h2>
          <h2 className="title9" >Win: {winpercent}%</h2>
        </div>
      </div>
    </div>
  );
}
export default Count;
