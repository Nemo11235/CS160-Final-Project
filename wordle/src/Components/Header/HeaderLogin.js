import React from "react";
import Logo from "../../Images/logo.png";
import HamImg from "../../Images/Hamburger_Menu.png";
import AccIcon from "../../Images/Account_Icon.png";
import "./HeaderLogin.scss";

function HeaderLogin() {
  return (
    <div className="header-style">
      <img src={HamImg} className="ham-img" />
      <img className="logo-style" src={Logo} />
      <div className="account">
        <img src={AccIcon} className="acc-img" />
      </div>
    </div>
  );
}

export default HeaderLogin;
