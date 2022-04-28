import React, { useState } from "react";
import Header from "../Components/Header/Header";
import "./UserProfilePage.scss";
import AccountImg from "../Images/account-img.png";
import PropTypes from "prop-types";
import HamburgerMenu from "../Components/HamburgerMenu/HamburgerMenu";
import HamburgerBlur from "../Components/HamburgerMenu/HamburgerBlur";

/* Hamburger Menu Implementation */
const UserProfilePage = ({ username, won, played, winPercent }) => {
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
    <div className="user-profile-style">
      <Header click={hamburgerOpenHandler} />
      {hamburgerMenu}
      {hamburgerBlur}
      <div className="card">
        <h1 className="title">My Account</h1>

        <div className="card-top-left">
          <img src={AccountImg} className="acc-img" />
          <h1 className="title2">{username}</h1>
          <button className="sign-out">Sign Out</button>
          <div className="circle"></div>
        </div>

        <div className="card-bot-left">
          <h1 className="title3">Word Selection</h1>
          <label className="switch">
            <input type="checkbox"></input>
            <span className="slider round"></span>
          </label>
          <label className="default">Default</label>
          <label className="custom">Custom</label>
          <h1 className="game-settings">Game Settings</h1>
          <button className="resume-game">Resume Game</button>
          <button className="new-game">New Game</button>
        </div>

        <div className="card-right">
          <h1 className="title3">Statistics:</h1>
          <h1 className="played">
            {played}
            <br></br>Played
          </h1>
          <h1 className="won">
            {won}
            <br></br>Won
          </h1>
          <h1 className="win-perc">
            {winPercent}
            <br></br>Win%
          </h1>

          <div className="card-bot-right">
            <h1 className="title3">Add Custom Words</h1>
            <h2 className="text">
              • Upload .txt files only <br></br>• Separate each word with a new
              line <br></br>• Words must be only five letters long <br></br>•
              Words cannot repeat
            </h2>
            <input type="file" id="myFile" className="upload-file"></input>
            <button className="clear-all">Clear All</button>
            <button className="add-file">Add File</button>
          </div>
        </div>
      </div>
    </div>
  );
};

UserProfilePage.propTypes = {
  username: PropTypes.string,
  played: PropTypes.string,
  won: PropTypes.string,
  winPercent: PropTypes.string,
};

export default UserProfilePage;
