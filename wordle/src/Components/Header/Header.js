import React from "react";
import Logo from "../../Images/logo.png";
import { useNavigate } from "react-router-dom";
import paths from "../../Utils/paths";
import HamImg from "../../Images/Hamburger_Menu.png";
import AccIcon from "../../Images/Account_Icon.png";
import "./Header.scss";
import PropTypes from "prop-types";

function Header(props) {
  let navigate = useNavigate();

  function goHome() {
    navigate(paths.home);
  }
  return (
    <div className="header-style">
      <button className="hamburger-menu" onClick={props.click}>
        <img src={HamImg} className="ham-img" />
      </button>
      <button className="button-logo" onClick={goHome}>
        <img className="logo-style" src={Logo} />
      </button>
      <div className="account">
        <img src={AccIcon} className="acc-img" />
      </div>
    </div>
  );
}

Header.propTypes = {
  click: PropTypes.func.isRequired,
};
export default Header;
