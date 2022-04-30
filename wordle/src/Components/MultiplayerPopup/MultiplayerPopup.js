import React from "react";
import PropTypes from "prop-types";
import ExitBtn from "../../Images/Exit_Button.png"
import { useNavigate } from "react-router-dom";
import paths from "../../Utils/paths";
import "./MultiplayerPopup.scss";

function MultiplayerPopup(props) {
    // Navigation with react-router
    let navigate = useNavigate();
    function goSingleplayer() {
        navigate(paths.home);
    }

    return (
        <div className="winpopup-style">
            <div className="overlay">
                <div className="content-background">
                    <button
                        className={"exit-btn"}
                        onClick={() => props.updateShowWinPopUp(false)}
                    >
                        <img src={ExitBtn} />
                    </button>
                    <div className="content-mult">
                        <div className="top-content">
                            {props.draw ? (
                                <h2>Draw!</h2>
                            ) : (
                                <h2>{props.username} has won!</h2>
                            )}
                            <p>The word was: {props.word.charAt(0)}{props.word.substring(1).toLowerCase()}</p>
                        </div>
                        <div className="bottom-content">
                            <button className="rematch-btn">
                                Play Again
                            </button>
                            <button
                                onClick={goSingleplayer}
                                className="singleplayer-btn">
                                Singleplayer
                            </button>
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
    username: PropTypes.string,     // Always equal to current user for now
    word: PropTypes.string,
};

export default MultiplayerPopup;
