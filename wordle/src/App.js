import React from "react";
import "./App.css";
import Header from "./Components/Header";
import NestedGrid from "./Components/GameGrid";

function App() {
  const word = "apple";
  return (
    <div className="App">
      <Header />
      <NestedGrid word={word} />
    </div>
  );
}

export default App;
