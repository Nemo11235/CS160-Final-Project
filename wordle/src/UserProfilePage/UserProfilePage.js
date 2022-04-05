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

      </div>

      <div className="card-right">

      </div>
    </div>
  </div>
);
}

export default UserProfilePage;