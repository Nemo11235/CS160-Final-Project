import React from "react";
import Header from "../Components/Header";
import "./AboutUsPage.scss";
import KenImage from "../Images/ken-img.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function AboutUsPage() {
  let navigate = useNavigate();

  let goHome=() =>{
    navigate('/home');
  }
  return (
    <div className="about-us-style">
      <Header />
      <button className="back-button" onClick={goHome}>
        <ArrowBackIcon style={{ width: "97px", height: "77px" }} />
      </button>
      <div className="card">
        <h1 className="title">About us</h1>
        <h2 className="text-content">
          We are a group of passionate, driven students taught by Professor
          Kenward Tsang. Incorporating Angile software enginnering into this
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
            <img src={KenImage} className="team-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
