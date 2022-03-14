import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/system";
import Logo from "../Images/logo.png";

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
  return (
    <ThemeProvider theme={customTheme}>
      <HeaderThemeComponent>
        <img src={Logo} style={{ width: "110px", height: "55px" }} />
      </HeaderThemeComponent>
    </ThemeProvider>
  );
};
export default Header;
