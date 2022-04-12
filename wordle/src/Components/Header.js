import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/system";
import Logo from "../Images/logo.png";
import { useNavigate } from "react-router-dom";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "theme.palette.primary.contrastText",
      contrastText: "white",
      border: "10px solid white",
    },
  },
});

const HeaderThemeComponent = styled("div")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  textAlign: "center",
  height: "75px",
  borderBottom: "0.5px solid black",
  boxShadow: "1px 1px 5px grey",
}));

const Header = () => {
  let navigate = useNavigate();

  let goHome=() =>{
    navigate('/home');
  }
  return (
    <ThemeProvider theme={customTheme}>
      <HeaderThemeComponent>
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
            style={{ height: "55px", width: "128px", marginTop: "5px" }}
          />
        </button>
      </HeaderThemeComponent>
    </ThemeProvider>
  );
};
export default Header;
