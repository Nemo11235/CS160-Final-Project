import './App.css';
import React, { useState } from 'react';
import Keyboard from './Components/Keyboard/Keyboard';

function App() {
  const [input, setInput] = useState('')

  function updateInput(replace) {
     setInput(replace)
  }



  return (
    <div className="App">
      <p>{input}</p>
      <Keyboard input={input} updateInput={updateInput}/>
    </div>

  );

}

export default App;
 