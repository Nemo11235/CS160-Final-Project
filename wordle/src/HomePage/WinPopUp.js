import React from "react";
import PropTypes from "prop-types";
import "./WinPopUp.scss";

WinPopUp.propTypes = {
  updateShowWinPopUp: PropTypes.func,
};

function WinPopUp({ updateShowWinPopUp }) {
  return (
    <div className="winpopup-style">
      <div className="overlay">
        <div className="content">
          <h2>Congratulations!</h2>
          <p>You have guessed the correct word!</p>
          <button
            onClick={() => updateShowWinPopUp(false)}
            className="close-btn"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default WinPopUp;
