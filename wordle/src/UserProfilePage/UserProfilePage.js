import React from "react";
import Header from "../Components/Header";
import "./UserProfilePage.scss";
import AccountImg from "../Images/account-img.png";
import PropTypes from "prop-types";

const UserProfilePage = ({ username, won, played, winPercent, winStrk }) => {
  return (
    <div className="user-profile-style">
      <Header />
      <div className="card">
        <h1 className="title">My Account</h1>

        <div className="card-top-left">
          <img src={AccountImg} className="acc-img" />
          <h1 className="title2">{username}</h1>
          <button className="sign-out">Sign Out</button>
          <div className="circle"></div>
        </div>

        <div className="card-bot-left">
          <h1 className="title3">Add Custom Words</h1>
          <h2 className="text">
            • Upload .txt files only <br></br>• Separate each word with a new
            line <br></br>• Words must be only five letters long <br></br>•
            Words cannot repeat
          </h2>
          <input type="file" id="myFile" className="upload-file"></input>
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
          <h1 className="win-strk">
            {winStrk}
            <br></br>Win Streak
          </h1>

          <h1 className="title4">Custom Word List:</h1>
          <div className="checkbox">
            <input type="checkbox" className="check-box"></input>
            <h2 className="box-label">Enable Custom Words</h2>
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
  winStrk: PropTypes.string,
};

export default UserProfilePage;
