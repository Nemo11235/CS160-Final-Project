import React from "react";
import PropTypes from "prop-types";
import Logo from "../../Images/logo.png";
import ExitBtn from "../../Images/Exit_Button.png";
import Switch from "../Switch/Switch";
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
  function goMultiplayer() {
    navigate(paths.race);
  }
  function goTutorial() {
    navigate(paths.tutorial);
  }

  return (
    <nav className={navClasses}>
      <button className={"exit-btn"} onClick={props.close}>
        <img src={ExitBtn} />
      </button>

      <div className={"logo"}>
        <img src={Logo} />
      </div>

      <ul>
        <li>
          <div className="about-us-nav" onClick={goTutorial}>
          <a href={goTutorial}>Tutorial</a>
          </div>
        </li>
        <div className="about-us-nav" onClick={goMultiplayer}>
          <a href={goMultiplayer}>Multiplayer</a>
        </div>
        <li>
          <p className="dark-theme">Dark Theme</p>
          <Switch />
        </li>
        <div className="about-us-nav" onClick={goAbout}>
          <a href={goAbout}>About Us</a>
        </div>
        <li>
          <a href="/">Custom Words</a>
        </li>
      </ul>
    </nav>
  );
};

HamburgerMenu.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
};

export default HamburgerMenu;
