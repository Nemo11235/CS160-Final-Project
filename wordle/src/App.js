import './App.css';
import React, { Component, useEffect, useState } from 'react';
import Keyboard from './Components/Keyboard/Keyboard';

function App() {
  const [input, setInput] = useState('aa')

  function updateInput(prop) {
    setInput(prev => prev + prop)
  }


  return (
    <div className="App">
      <p>{input}</p>
      <button onClick={() => updateInput('a')}>add a</button>
      <Keyboard/>
    </div>

  );

}

export default App;
 