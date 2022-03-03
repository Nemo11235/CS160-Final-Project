
// import { styled,createTheme,
//   ThemeProvider,
//   experimental_sx as sx,} from '@mui/system';
import React from "react";
import './App.css';
import Header from "./Header";
import NestedGrid from "./GameGrid";

// const customTheme = createTheme({
//   palette: {
//     primary: {
//       main: '#DBD4D3'
//     },
//   },
// });

// const CustomApp = styled('div') (sx({
//   backgroundColor: 'primary.main'
// }));
function App() {
  return (
    <div className="App">
        <Header/>
        <NestedGrid/>
    </div>
  );
}

export default App;
