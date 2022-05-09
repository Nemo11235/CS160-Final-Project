import React from "react";
import Logo from "../../Images/logo.png";
import { useNavigate } from "react-router-dom";
import paths from "../../Utils/paths";
import HamImg from "../../Images/Hamburger_Menu.png";
import "./Header.scss";
import PropTypes from "prop-types";

function Header(props) {
  let navigate = useNavigate();
  let photoURL = localStorage.getItem("profilePic");

  function goHome() {
    navigate(paths.home);
  }

  function goUser() {
    navigate(paths.user);
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
        <button className="profile-icon" onClick={goUser}>
          <img src={photoURL} className="acc-img" />
        </button>
      </div>
    </div>
  );
}

Header.propTypes = {
  click: PropTypes.func.isRequired,
  clickProfile: PropTypes.func.isRequired,
};
export default Header;
