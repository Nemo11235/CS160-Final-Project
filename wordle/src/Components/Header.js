import React from "react";
import Logo from "../Images/logo.png";
import { useNavigate } from "react-router-dom";
import paths from "../Utils/paths";
import "./Header.scss";

function Header() {
  let navigate = useNavigate();

  function goHome() {
    navigate(paths.home);
  }
  return (
    <div className="header-style">
      <button className="button-logo" onClick={goHome}>
        <img className="logo-style" src={Logo} />
      </button>
    </div>
  );
}
export default Header;
