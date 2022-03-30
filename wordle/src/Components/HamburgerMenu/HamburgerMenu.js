import React from "react";
import "./HamburgerMenu.css";
import PropTypes from "prop-types";
import Logo from "../../Images/Logo_Full_Background.png";
import ExitBtn from "../../Images/Exit_Button.png";
// import HamImg from "../../Images/Hamburger_Menu.png";
// import { useNavigate } from "react-router-dom";
// Return code as statement enclosed by '()'


// import { drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'


// In the future, will use and pass states 'prop' for the menu items.
const HamburgerMenu = (props) => {
  let navClasses = "hamburger_nav-items";
  if (props.show) {
    navClasses = "hamburger_nav-items open";
  }

  return (
    <nav className={navClasses}>

      <button className={"exit-btn"}>
        <img src={ExitBtn} />
      </button>

      <div className={"logo-img"} style={{ border: "0.5px" }} >
        <img src={Logo} />
      </div>

      <ul>
        <li><a href="/">Tutorial</a></li>
        <li><a href="/">Multiplayer</a></li>
        <li><a href="/">Dark Theme</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Custom Words</a></li>
        <li><a href="/">(requires log-in)</a></li>
      </ul>
    </nav>
  );
};

HamburgerMenu.propTypes = {
  show: PropTypes.number.isRequired
};

export default HamburgerMenu;