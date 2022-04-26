import React from "react";
import PropTypes from "prop-types";
import ExitBtn from "../../Images/Exit_Button.png"
import "./MultiplayerPopup.scss";

function MultiplayerPopup(props) {
    return (
        <div className="winpopup-style">
            <div className="overlay">
                <div className="content">
                    <div className="content-background">
                        <button
                            className={"exit-btn"}
                            onClick={() => props.updateShowWinPopUp(false)}
                        >
                            <img src={ExitBtn} />
                        </button>
                        <div className="content">
                            {props.draw ? (
                                <h2>Draw!</h2>
                            ) : (
                                <h2>{props.username} has won!</h2>
                            )}
                            <p>The word was: {props.word.charAt(0)}{props.word.substring(1).toLowerCase()}</p>

                            <div className="bottom-content">
                                <div className="time-container">
                                    <h1>Time</h1>
                                    <p>0:01</p>
                                </div>
                                <div className="button-container">
                                    <button className="rematch-btn">
                                        Play Again
                                    </button>
                                    <button className="singleplayer-btn">
                                        Singleplayer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

MultiplayerPopup.propTypes = {
    updateShowWinPopUp: PropTypes.func,


    draw: PropTypes.bool,           // Always equal to 'false' for now
    username: PropTypes.string,
    word: PropTypes.string,
};

export default MultiplayerPopup;
