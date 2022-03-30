import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/system";
import Logo from "../../Images/Logo_Kugi_Background.png";
import HamImg from "../../Images/Hamburger_Menu.png";
import AccIcon from "../../Images/Account_Icon.png";
import { useNavigate } from "react-router-dom";
import paths from "../../Utils/paths";
import PropTypes from "prop-types"
import "./Header.css";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#757780",
      contrastText: "white",
    },
  },
});

const HeaderThemeComponent = styled("div")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(0.5),
  textAlign: "center",
  height: "80px",

  // Modifying the container div
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const Header = (props) => {
  let navigate = useNavigate();

  function goHome() {
    navigate(paths.home);
  }

  return (
    <ThemeProvider theme={customTheme}>
      <HeaderThemeComponent>

        <button onClick={props.click} style={{ backgroundColor: "transparent", cursor: "pointer", border: "0.5px" }}>
          <img src={HamImg} style={{ backgroundColor: "transparent" }} />
        </button>

        <button
          onClick={goHome}
          style={{
            // height: "70px",
            // width: "185px",
            // background: "white",
            // border: "0.5px",
            // borderRadius: "20px",
            // marginTop: "5px",

            border: "0.5px",
            backgroundColor: "transparent",
          }}
        >
          <img
            src={Logo} style={{ height: "100%", width: "100%", marginTop: "5px" }}
          />
        </button>

        <div id="account">
          <img
            src={AccIcon}
            style={{ marginTop: "5px" }}
          />
        </div>
      </HeaderThemeComponent>
    </ThemeProvider >
  );
};

Header.propTypes = {
  click: PropTypes.func.isRequired
};

export default Header;