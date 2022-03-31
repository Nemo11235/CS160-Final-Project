import React from "react";
import PropTypes from "prop-types";
import Logo from "../../Images/Logo_Full_Background.png";
import ExitBtn from "../../Images/Exit_Button.png";
import Switch from "./Switch/Switch";
import "./HamburgerMenu.scss";
// import HamImg from "../../Images/Hamburger_Menu.png";
// import { useNavigate } from "react-router-dom";
// import paths from "../../Utils/paths";


const HamburgerMenu = (props) => {
  let navClasses = "hamburger_nav-items";
  if (props.open) {
    navClasses = "hamburger_nav-items open";
  }

  return (
    <nav className={navClasses}>
      <button className={"exit-btn"} onClick={props.close}>
        <img src={ExitBtn} />
      </button>

      <div className={"logo-img"} style={{ border: "0.5px" }} >
        <img src={Logo} />
      </div>

      <ul>
        <li><a href="/">Tutorial</a></li>
        <li><a href="/">Multiplayer</a></li>
        <li><p className="dark-theme">Dark Theme</p><Switch /></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Custom Words</a></li>
        <div className={"caption"}><p>(requires log-in)</p></div>
      </ul>
    </nav>
  );
};

HamburgerMenu.propTypes = {
  open: PropTypes.number,
  close: PropTypes.func
};

export default HamburgerMenu;