import React from "react";
import PropTypes from "prop-types";
import Logo from "../../Images/Logo_Full_Background.png";
import ExitBtn from "../../Images/Exit_Button.png";
import Switch from "./Switch/Switch";
import { useNavigate } from "react-router-dom";
import paths from "../../Utils/paths";
import "./HamburgerMenu.scss";

const HamburgerMenu = (props) => {
  let navClasses = "hamburger_nav-items";
  if (props.open) {
    navClasses = "hamburger_nav-items open";
  }

  // Navigation with react-router
  let navigate = useNavigate();
  function goAbout() {
    navigate(paths.about);
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
      <div className="about-us-nav" onClick={goAbout}>
        <a href={goAbout}>About Us</a>
      </div>
      <li><a href="/">Custom Words</a></li>
      <div className={"caption"}><p>(requires log-in)</p></div>
    </ul>
  </nav>
    
  );
};

HamburgerMenu.propTypes = {
  open: PropTypes.number,
  close: PropTypes.func,
  openMult: PropTypes.number,
  multClose: PropTypes.func,
  multOpen: PropTypes.func
};

export default HamburgerMenu;