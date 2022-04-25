import "./TutorialPage.scss";
import Header from "../Components/Header/Header";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import paths from "../Utils/paths";
import HamburgerMenu from "../Components/HamburgerMenu/HamburgerMenu";
import HamburgerBlur from "../Components/HamburgerMenu/HamburgerBlur";

// class Tutorial extends Component
function TutorialPage() {
  let navigate = useNavigate();

  function goHome() {
    navigate(paths.home);
  }
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
  return (
    <div>
      <Header click={hamburgerOpenHandler} />
      {hamburgerMenu}
      {hamburgerBlur}
      <button className="back-button" onClick={goHome}>
        <ArrowBackIcon style={{ width: "97px", height: "77px" }} />
      </button>
      <div className="top">
        <span className="title">How to play</span>
      </div>
      <div className="wrapper">
        <div className="card1" grid-column-start="1">
          <br />
          <div className="info">
            <p className="regulartext">
              Using valid five-letter words, you have to guess the hidden word
              in six tries.
              <br />
              The color of the titles change depending on how close you are to
              the word.
              <br />
            </p>
          </div>
          <div className="container">
            <div className="normal_letter">H</div>
            <div className="normal_letter">E</div>
            <div className="green_letter">A</div>
            <div className="yellow_letter">R</div>
            <div className="green_letter">T</div>
          </div>
          <br />
          <div className="more-infor">
            <div>
              <b className="grey_text"></b>
              <b className="texttext"> H</b>,<b className="texttext"> E </b>
              are not in the target word at all.
              <br />
            </div>
            <b className="yellow_text"></b>
            <b className="texttext"> R </b>
            is in the word, but in the wrong spot.
            <br />
            <b className="green_text"></b> <b className="texttext">A, T </b> is
            in the word, and in the right spot.
            <br />
            <br />
          </div>
          <div className="container">
            <div className="green_letter">G</div>
            <div className="green_letter">R</div>
            <div className="green_letter">A</div>
            <div className="normal_letter">S</div>
            <div className="normal_letter">S</div>
          </div>

          <div className="final">
            <b>So close!</b>
          </div>
          <div className="container">
            <div className="green_letter">G</div>
            <div className="green_letter">R</div>
            <div className="green_letter">A</div>
            <div className="green_letter">N</div>
            <div className="green_letter">T</div>
          </div>
          <div className="final">
            <b>Got it! 🏆</b>
          </div>
        </div>
        <div className="card1" grid-column-start="1">
          <h2 className="textcenter">Singleplayer</h2>
          <p className="regulartext">
            Words are randomly chosen from a public API.
            <br />
            If you would like to use your a custom list, please log in to the
            website. Afterward, custom .txt files containing five-letter words
            separated by a new line can be uploaded in the {"My Account"} page.
            Finally, check the box on the same page to enable custom words.
          </p>
          <h2 className="textcenter">
            <br />
            Multiplayer
          </h2>
          <p className="regulartext">
            Player will be racing against one another to solve the hidden word
            list.
            <br />
            To join a multiplayer lobby, please use the hambuger menu in the
            top-left of the page. Players can choose to join a game using a
            code, or to create a new game with a code.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TutorialPage;
