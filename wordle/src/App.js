import './App.css';
import React, {Component} from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

function App() {
    return (
      <div className="App">
        <Keyboard
        onChange={input =>
          null}
        onKeyPress={button =>
          null}
          layout={{
            'default': [
              'Q W E R T Y U I O P',
              'A S D F G H J K L',
              '{bksp} Z X C V B N M {enter}',
            ]
          }}
      />
      </div>

    );
  
}

export default App;
