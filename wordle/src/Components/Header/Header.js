import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/system";
import Logo from "../../Images/Logo_Kugi_Background.png";
import HamImg from "../../Images/Hamburger_Menu.png";
import AccIcon from "../../Images/Account_Icon.png";
import { useNavigate } from "react-router-dom";
import paths from "../../Utils/paths";
import PropTypes from "prop-types"
import "./Header.scss";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#757780",
      contrastText: "white",
    },
  },
});

const HeaderThemeComponent = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "80px",
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(0.5),
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
        <button className="logo" onClick={goHome} >
          <img src={Logo} />
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