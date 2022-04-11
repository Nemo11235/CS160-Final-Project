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
        <h1 className="title3">Statistics:</h1>
        <h1 className="played"> 12<br></br>Played</h1>
        <h1 className="won">12<br></br>Won</h1>
        <h1 className="win-perc">100<br></br>Win%</h1>
        <h1 className="win-strk">12<br></br>Win Streak</h1>

        <h1 className="title4">Custom Word List:</h1>
        <select className="select-list" id="txt-files" multiple>
          <option value="volvo">A.txt</option>
          <option value="saab">B.txt</option>
          <option value="opel">C.txt</option>
          <option value="audi">D.txt</option>
          <option value="audi">E.txt</option>
          <option value="audi">F.txt</option>
          <option value="audi">G.txt</option>
          <option value="audi">H.txt</option>
        </select>
        <input type="checkbox" className="check-box"></input>
        <label>Hey</label>
        <label className="check-box">One
          <input type="checkbox" checked="checked"></input>
          <span className="checkmark"></span>
        </label>
        
      </div>
      
    </div>
  </div>
);
}


export default UserProfilePage;