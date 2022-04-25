import React from "react";
import PropTypes from "prop-types";
import "./SingleplayerPopup.scss";

function SingleplayerPopup({ updateShowWinPopUp }) {
    return (
        <div className="winpopup-style">
            <div className="overlay">
                <div className="content-background" >
                    Put in the X icon here<br />
                    Then attach the same action listener to it to close<br />
                    What if I say Round Over! with party icon, and say the word was : word
                </div>
                <div className="content">
                    <h2>Congratulations!</h2>
                    <p>You have guessed the correct word!</p>
                    <button
                        onClick={() => updateShowWinPopUp(false)}
                        className="close-btn"
                    >
                        close
                    </button>
                </div>
            </div>
        </div>
    );
}

SingleplayerPopup.propTypes = {
    updateShowWinPopUp: PropTypes.func,
};

export default SingleplayerPopup;