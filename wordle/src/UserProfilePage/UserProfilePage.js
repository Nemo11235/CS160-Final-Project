import React from "react";
import Header from "../Components/Header";
import "./UserProfilePage.scss";
import AccountImg from "../Images/account-img.png";


function UserProfilePage() {
return (
  <div className="user-profile-style">
  <Header />
    <div className="card">
      <h1 className="title">My Account</h1>

      <div className="card-top-left">
        <img src={AccountImg} className="acc-img"/>
        <h1 className="title2">Sample Name</h1>
        <button className="sign-out">Sign Out</button>
        <div className="circle"></div>
      </div>

      <div className="card-bot-left">
        <h1 className="title3">Add Custom Words</h1>
        <h2 className="text">
          • Upload .txt files only <br></br>
          • Separate each word with a new line <br></br>
          • Words must be only five letters long <br></br>
          • Words cannot repeat
        </h2>
        <input type="file" id="myFile" className="upload-file">
        </input>
      </div>

      <div className="card-right">

      </div>
    </div>
  </div>
);
}

export default UserProfilePage;