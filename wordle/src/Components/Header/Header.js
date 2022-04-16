import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/system";
import Logo from "../../Images/logo.png";
import HamImg from "../../Images/Hamburger_Menu.png";
import AccIcon from "../../Images/Account_Icon.png";
import { useNavigate } from "react-router-dom";
import paths from "../../Utils/paths";
import PropTypes from "prop-types"
import "./Header.scss";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#theme.palette.primary.contrastText",
      contrastText: "white",
      border: "10px solid white",
    },
  },
});

const HeaderThemeComponent = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  textAlign: "center",
  height: "75px",
  borderBottom: "0.5px solid black",
  boxShadow: "1px 1px 5px grey",
}));

const Header = (props) => {
  let navigate = useNavigate();

  function goHome() {
    navigate(paths.home);
  }

  return (
    <ThemeProvider theme={customTheme}>
      <HeaderThemeComponent>
        <button className="hamburger-menu" onClick={props.click} >
          <img src={HamImg} />
        </button>
        <button
          onClick={goHome}
          style={{
            height: "70px",
            width: "182px",
            background: "transparent",
            border: "0",
            marginTop: "5px",
            cursor: "pointer",
          }}
        >
          <img
            src={Logo}
            style={{ height: "55px", width: "70px", marginTop: "5px" }}
          />
        </button>
        <div className="account">
          <img src={AccIcon} />
        </div>
      </HeaderThemeComponent>
    </ThemeProvider >
  );
};

Header.propTypes = {
  click: PropTypes.func.isRequired
};

export default Header;