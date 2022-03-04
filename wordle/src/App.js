import './App.css';
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

function App() {

  
  
    return (
      <div className="App">
        <Button variant="primary">Primary</Button>{' '}
        <Keyboard
        onChange={input =>
          null}
        onKeyPress={button =>
          null}
      />
      </div>

    );
  
}

export default App;
