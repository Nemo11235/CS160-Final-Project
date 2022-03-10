import React, {useState, useEffect} from 'react';
import './Keyboard.scss';



function Keyboard(props) {

    const string = props;

    const keyClick = () => {
        alert("keypressed");
    }

    return (
        <div className="root">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
            <button className="key" onClick={keyClick}>Q</button>
            <button className="key-partial">W</button>
            <button className="key-correct">E</button>
            <button className="key-wrong">R</button>
            <button className="key">T</button>
            <button className="key">Y</button>
            <button className="key">U</button>
            <button className="key">I</button>
            <button className="key">O</button>
            <button className="key">P</button>
            <br></br>
            <button className="special-key">A</button>
            <button className="key">S</button>
            <button className="key">D</button>
            <button className="key">F</button>
            <button className="key">G</button>
            <button className="key">H</button>
            <button className="key">J</button>
            <button className="key">K</button>
            <button className="key">L</button>
            <br></br>
            <button className="big-key"><i class = "material-icons">backspace</i></button>
            <button className="key">Z</button>
            <button className="key">X</button>
            <button className="key">C</button>
            <button className="key">V</button>
            <button className="key">B</button>
            <button className="key">N</button>
            <button className="key">M</button>
            <button className="big-key">Enter</button>
        </div>
    );
}

export default Keyboard;