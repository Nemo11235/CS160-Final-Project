import React from "react";
import PropTypes from "prop-types";
import Logo from "../../Images/Logo_Full_Background.png";
import BackBtn from "../../Images/Back_Arrow_Menu.png";
import NextArrow from "../../Images/Next_Arrow_Black.png";
// import { useNavigate } from "react-router-dom";
// import paths from "../../Utils/paths";
import "./Ham_MP_Sel.scss";
import "./HamburgerMenu.scss";
import TextField from "@material-ui/core/TextField";

const Ham_MP_Sel = (props) => {

    let navClasses = "mult-sel-items open";

    // props.closeShadow

    return (
        // Issue: HOMEPAGE has the blur, which needs the actionlistener to close
        //        But HamburgerMenu has the way to close the multiplayer
        //        Pass the closer to hamburgermenu also??
        // Only way I see is to have all state/handlers on a page/file, then pass the
        // stuff to the other pages.

        // The onClick back button calls the mult close handler from HamburgerMenu, 
        // which toggles state which determines the class

        <div className={navClasses}>
            <button className={"back-btn"} onClick={props.close}>
                <img src={BackBtn} />
            </button>

            <div className={"hamburger-content"}>
                <div className={"logo-img"} style={{ border: "0.5px" }} >
                    <img src={Logo} />
                </div>
                <ul>
                    <p>Multiplayer</p>
                    <div><button>Create Match</button></div>
                    <p>OR</p>
                    <div className={"enter-code"}>
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                        />

                        <div><img src={NextArrow} /></div>
                    </div>
                </ul>
            </div>
        </div>
    );
};

Ham_MP_Sel.propTypes = {
    open: PropTypes.number,
    close: PropTypes.func
};

export default Ham_MP_Sel;

