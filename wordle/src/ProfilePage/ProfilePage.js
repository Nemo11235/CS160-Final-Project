import React, { useState } from "react";
import Header from "../Components/Header/Header";
import HamburgerMenu from "../Components/HamburgerMenu/HamburgerMenu";
import HamburgerBlur from "../Components/HamburgerMenu/HamburgerBlur";
import SignOut from "../GoogleAuth/SignOut";
import FileUpload from "./FileUpload";
import Track from "./Track";
import Count from "./Count";

function ProfilePage() {
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
    <div className="about-us-style">
      <Header click={hamburgerOpenHandler} />
      {hamburgerMenu}
      {hamburgerBlur}
      <div className="top-ten">
        <h1 className="account-title">My account</h1>
        <SignOut />
        <div className="left-side">
          <Count />
          <FileUpload />
        </div>
        <Track />
      </div>
    </div>
  );
}

export default ProfilePage;
