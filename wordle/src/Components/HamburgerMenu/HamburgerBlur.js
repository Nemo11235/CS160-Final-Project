import React from "react";
import "./HamburgerBlur.css";
import PropTypes from "prop-types";

const HamburgerBlur = (props) => {
    return (
        <div className="HamburgerBlur" onClick={props.click} />
    );
};

HamburgerBlur.propTypes = {
    click: PropTypes.func.isRequired
};

export default HamburgerBlur;