import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import paths from "../../Utils/paths";
import "./MultiplayerPopup.scss";

function MultiplayerPopup(props) {
    // Navigation with react-router
    let navigate = useNavigate();
    function goSingleplayer() {
        navigate(paths.home);
    }

    let Result = "";
    if (props.draw) {
        Result = <h2>Draw!</h2>;
    } else if (props.curUserWin) {
        Result = <h2>{props.curUserName} has won!</h2>;
    } else {
        Result = <h2>{props.opponentName} has won!</h2>;
    }

    return (
        <div className="winpopup-style">
            <div className="overlay">
                <div className="content-background">
                    <div className="content-mult">
                        <div className="top-content">
                            {Result}
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

    curUserWin: PropTypes.bool,
    curUserName: PropTypes.string,

    draw: PropTypes.bool,           // Always equal to 'false' for now
    opponentName: PropTypes.string,     // Always equal to current user for now
    word: PropTypes.string,
};

export default MultiplayerPopup;
