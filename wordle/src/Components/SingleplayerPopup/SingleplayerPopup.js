import React from "react";
import PropTypes from "prop-types";
// import ExitBtn from "../../Images/Exit_Button.png";
import PartyIcon from "../../Images/Party_Icon.png";
import "./SingleplayerPopup.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SingleplayerPopup(props) {
  // Temporary feature to refresh the page. Will want a new word generated in future.
  const history = useNavigate();
  function refreshPage() {
    // window.location.reload(false);
    newGame();
    history("/profile");
  }

  const newGame = () => {
    const namename = localStorage.getItem("email");
    let clearData = async () => {
      let formField = new FormData();
      formField.append("email", namename);
      formField.append("action", "clear");
      await axios({
        method: "POST",
        url: "/api/user/clear/",
        data: formField,
      }).then((response) => {
        console.log(response.data);
        localStorage.setItem("keyboardHistory", "NONE");
      });
    };
    clearData();
    let aa = "";
    let bb = "";
    let cc = "";
    let dd = "";
    let ee = "";
    localStorage.setItem("aa", aa);
    localStorage.setItem("bb", bb);
    localStorage.setItem("cc", cc);
    localStorage.setItem("dd", dd);
    localStorage.setItem("ee", ee);
  };
  return (
    <div className="winpopup-style">
      <div className="overlay">
        <div className="content-background">
          {/* <button
                        className={"exit-btn"}
                        onClick={() => props.updateShowWinPopUp(false)}
                    >
                        <img src={ExitBtn} />
                    </button> */}
          <div className="content">
            {props.hasLost ? (
              <>
                <h2>Game Over!</h2>
                <p>
                  The word was: {props.word.charAt(0)}
                  {props.word.substring(1).toLowerCase()}
                </p>
              </>
            ) : (
              <>
                <h1>
                  <img src={PartyIcon}></img>
                </h1>
                <h2>Congratulations!</h2>
                <p>You got the word!</p>
              </>
            )}
            <div>
              <button onClick={refreshPage} className="play_again-btn">
                Profile Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SingleplayerPopup.propTypes = {
  updateShowWinPopUp: PropTypes.func,
  word: PropTypes.string,
  hasLost: PropTypes.bool,
};

export default SingleplayerPopup;
