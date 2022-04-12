import React from "react";
import PropTypes from "prop-types";
import Logo from "../../Images/Logo_Full_Background.png";
import BackBtn from "../../Images/Back_Arrow_Menu.png";
import NextArrow from "../../Images/Next_Arrow_Black.png";
import "./Ham_MP_Sel.scss";
import TextField from "@material-ui/core/TextField";

const Ham_MP_Sel = (props) => {
    let navClasses;
    if (props.open) {
        navClasses = "mult-sel-items open";
    } else {
        navClasses = "mult-sel-items";
    }

    return (
        <div className={navClasses}>
            <button className={"back-btn"} onClick={props.close}>
                <img src={BackBtn} />
            </button>
            <div className={"logo-img"} style={{ border: "0.5px" }} >
                <img src={Logo} />
            </div>
            <div className={"hamburger-content"}>
                <p>Multiplayer</p>
                <div><button>Create Match</button></div>
                <p>OR</p>
                <div className={"enter-code"}>
                    <TextField
                        label="Game Code"
                        variant="outlined"

                    />

                    <div className={"arrow"}><img src={NextArrow} /></div>
                </div>
            </div>
        </div>
    );
};

Ham_MP_Sel.propTypes = {
    open: PropTypes.number,
    close: PropTypes.func
};

export default Ham_MP_Sel;

