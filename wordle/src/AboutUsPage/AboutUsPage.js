import React, { useState } from "react";
import Header from "../Components/Header/Header";
import KenImage from "../Images/ken-img.png";
import TeamPic from "../Images/team.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HamburgerMenu from "../Components/HamburgerMenu/HamburgerMenu";
import HamburgerBlur from "../Components/HamburgerMenu/HamburgerBlur";
import { useNavigate } from "react-router-dom";
import paths from "../Utils/paths";
import "./AboutUsPage.scss";

function AboutUsPage() {
  let navigate = useNavigate();

  function goHome() {
    navigate(paths.home);
  }
<<<<<<< HEAD
  
  
=======

  /* Hamburger Menu Implementation */
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

>>>>>>> delivery-2
  return (
    <div className="about-us-style">
      <Header click={hamburgerOpenHandler} />
      {hamburgerMenu}
      {hamburgerBlur}
      <button className="back-button" onClick={goHome}>
        <ArrowBackIcon style={{ width: "5vw", height: "auto" }} />
      </button>
      <div className="card">
        <h1 className="title">About us</h1>
        <h2 className="text-content">
          We are a group of passionate, driven students taught by Professor
          Kenward Tsang. Incorporating Agile software enginnering into this
          project has been fun, and we hope you have fun playing our version of
          Wordle. We all learned new important skills and concepts such as
          JavaScript, public APIs, authentication, and hope to learn more in the
          future. Thank you for playing our Wordle game.
        </h2>
        <div className="img-wrapper">
          <div className="ken-wrapper">
            <h1>Professor</h1>
            <img src={KenImage} className="ken-img" />
          </div>
          <div className="team-wrapper">
            <h1>Team</h1>
            <img src={TeamPic} className="team-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
