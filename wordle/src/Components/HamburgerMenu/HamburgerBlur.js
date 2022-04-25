import React from "react";
import "./HamburgerBlur.scss";
import PropTypes from "prop-types";

const HamburgerBlur = (props) => {
  return <div className="HamburgerBlur" onClick={props.close} />;
};

HamburgerBlur.propTypes = {
  close: PropTypes.func.isRequired,
};

export default HamburgerBlur;
