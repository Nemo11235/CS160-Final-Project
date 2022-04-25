import React from "react";
import PropTypes from "prop-types";
import ExitBtn from "../../Images/Exit_Button.png";
import PartyIcon from "../../Images/Party_Icon.png";
import "./SingleplayerPopup.scss";

function SingleplayerPopup(props) {
    return (
        <div className="winpopup-style">
            <div className="overlay">
                <div className="content-background" >
                    <button
                        className={"exit-btn"}
                        onClick={() => props.updateShowWinPopUp(false)}
                    >
                        <img src={ExitBtn} />
                    </button>
                    <div className="content">
                        <h1><img src={PartyIcon}></img></h1>
                        <h2>Round Over!</h2>
                        <p>The word was: {props.word.charAt(0)}{props.word.substring(1).toLowerCase()}</p>
                        <div>

                            <button
                                onClick={() => props.updateShowWinPopUp(false)}
                                className="play_again-btn"
                            >
                                Play Again
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
};

export default SingleplayerPopup;