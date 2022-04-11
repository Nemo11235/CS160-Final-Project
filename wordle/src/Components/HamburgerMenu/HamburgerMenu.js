import React from "react";
import PropTypes from "prop-types";
import Logo from "../../Images/Logo_Full_Background.png";
import ExitBtn from "../../Images/Exit_Button.png";
import Switch from "./Switch/Switch";
import { useNavigate } from "react-router-dom";
import paths from "../../Utils/paths";
import Ham_MP_Sel from "./Ham_MP_Sel";
import "./HamburgerMenu.scss";


const HamburgerMenu = (props) => {
  let navClasses = "hamburger_nav-items";
  if (props.open) {
    navClasses = "hamburger_nav-items open";
  }

  // Handlers for the multiplayer option.
  // let [multMenuOpen, setMultMenuOpen] = useState(0);
  // const multMenuOpenHandler = () => {
  //   setMultMenuOpen(multMenuOpen + 1);
  //   alert("open");
  // };
  // const multMenuCloseHandler = () => {
  //   setMultMenuOpen(multMenuOpen - 1);    // The homepage needs access for the blur, I think I do need it to keep track
  //   alert("close");
  // };

  let display;
  if (props.openMult) {
    display = <Ham_MP_Sel close={props.multOpen} />
  } else {
    display = (
      <nav className={navClasses}>
        <button className={"exit-btn"} onClick={props.close}>
          <img src={ExitBtn} />
        </button>

        <div className={"logo-img"} style={{ border: "0.5px" }} >
          <img src={Logo} />
        </div>

        <ul>
          <li><a href="/">Tutorial</a></li>
          <li><div className="multiplayer-nav" onClick={props.multClose}>Multiplayer</div></li>

          <li><p className="dark-theme">Dark Theme</p><Switch /></li>
          <div className="about-us-nav" onClick={goAbout}>
            <a href={goAbout}>About Us</a>
          </div>
          <li><a href="/">Custom Words</a></li>
          <div className={"caption"}><p>(requires log-in)</p></div>
        </ul>
      </nav>)
  }

  // Navigation with react-router
  let navigate = useNavigate();
  function goAbout() {
    navigate(paths.about);
  }

  return (
    <div className="displayTest">{display}</div>
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