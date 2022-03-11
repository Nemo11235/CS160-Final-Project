import React, { useState } from 'react';
import "./App.css";
import Header from "./Components/Header";
import NestedGrid from "./Components/GameGrid";
import Keyboard from './Components/Keyboard/Keyboard';

function App() {
  const [input, setInput] = useState('')

  function updateInput(replace) {
    setInput(replace)
 }

  return (
    <div className="root">
      <Header />
      <NestedGrid word={input} />
      <Keyboard input={input} updateInput={updateInput}/>
    </div>

  );
}

export default App;
 