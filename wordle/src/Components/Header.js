import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/system";
import Logo from "../Images/kugi.png";
import { useNavigate } from "react-router-dom";

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
}));

const Header = () => {
  let navigate = useNavigate();

  function goHome() {
    navigate(`/home`);
  }
  return (
    <ThemeProvider theme={customTheme}>
      <HeaderThemeComponent>
        <button
          onClick={goHome}
          style={{
            height: "70px",
            width: "185px",
            background: "white",
            border: "0.5px",
            borderRadius: "20px",
            marginTop: "5px",
          }}
        >
          <img
            src={Logo}
            style={{ height: "55px", width: "165px", marginTop: "5px" }}
          />
        </button>
      </HeaderThemeComponent>
    </ThemeProvider>
  );
};
export default Header;
