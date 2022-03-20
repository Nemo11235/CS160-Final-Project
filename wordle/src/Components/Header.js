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
}));

const Header = () => {
  let navigate = useNavigate();

  function goHome() {
    navigate(`/home`);
  }
  return (
    <ThemeProvider theme={customTheme}>
      <HeaderThemeComponent>
        <button onClick={goHome}>
          <img src={Logo} />
        </button>
      </HeaderThemeComponent>
    </ThemeProvider>
  );
};
export default Header;
