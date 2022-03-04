import React from "react";
import { styled, createTheme, ThemeProvider } from '@mui/system';

//it is reuseable custom theme for header. need to add logo image here later
const customTheme = createTheme({
    palette: {
        primary:{
            main: '#757780',
            contrastText: 'white',
        },
    },
});

const HeaderThemeComponent = styled('div')(({theme}) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3),
    textAlign:"center"
}));

const Header = () => {
    return(
       <ThemeProvider theme={customTheme}>
           <HeaderThemeComponent >KenU GuessIT</HeaderThemeComponent>
       </ThemeProvider>

    );

};
export default Header;