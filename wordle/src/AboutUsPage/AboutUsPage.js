import React from "react";
import Header from "../Components/Header";
import "./AboutUsPage.scss";

function AboutUsPage() {
  return (
    <div className="about-us-style">
      <Header />
      <div className="card">
        <h1 className="title">About us</h1>
        <p className="content">
          We are a group of pasionsate, driven students taught by Professor
          Kenward Tsang. Incorporating Angile software enginnering into this
          project has been fun, and we hope you have fun playing our version of
          Wordle. We all learned new important skills and concepts such as
          JavaScript, public APIs, authentication, and hope to learn more in the
          future. Thank you for playing our Wordle game.
        </p>
        <img></img>
      </div>
    </div>
  );
}

export default AboutUsPage;
