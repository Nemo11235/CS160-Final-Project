import React, {useState, useEffect} from 'react';
import './Keyboard.scss';




function Keyboard({input, updateInput}) {

    console.log(input)
    const keyClick = (letter) => {
        // var letter = document.getElementById("key-q").innerHTML;
        if (input.length < 5) updateInput((prev) => prev + letter)
    }

    const backspaceClick = () => {
        updateInput(input.substring(0, input.length - 1))
    }

    return (
        <div className="root">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
            <button className="key" onClick={(value) => keyClick('Q')}>Q</button>
            <button className="key-partial">W</button>
            <button className="key-correct">E</button>
            <button className="key-wrong">R</button>
            <button className="key" onClick={(value) => keyClick('T')}>T</button>
            <button className="key" onClick={(value) => keyClick('Y')}>Y</button>
            <button className="key" onClick={(value) => keyClick('U')}>U</button>
            <button className="key" onClick={(value) => keyClick('I')}>I</button>
            <button className="key" onClick={(value) => keyClick('O')}>O</button>
            <button className="key" onClick={(value) => keyClick('P')}>P</button>
            <br></br>
            <button className="special-key" onClick={(value) => keyClick('')}>A</button>
            <button className="key" onClick={(value) => keyClick('S')}>S</button>
            <button className="key" onClick={(value) => keyClick('D')}>D</button>
            <button className="key" onClick={(value) => keyClick('F')}>F</button>
            <button className="key" onClick={(value) => keyClick('G')}>G</button>
            <button className="key" onClick={(value) => keyClick('H')}>H</button>
            <button className="key" onClick={(value) => keyClick('J')}>J</button>
            <button className="key" onClick={(value) => keyClick('K')}>K</button>
            <button className="key" onClick={(value) => keyClick('L')}>L</button>
            <br></br>
            <button className="big-key" onClick={(value) => backspaceClick()}><i class = "material-icons">backspace</i></button>
            <button className="key" onClick={(value) => keyClick('Z')}>Z</button>
            <button className="key" onClick={(value) => keyClick('X')}>X</button>
            <button className="key" onClick={(value) => keyClick('C')}>C</button>
            <button className="key" onClick={(value) => keyClick('V')}>V</button>
            <button className="key" onClick={(value) => keyClick('B')}>B</button>
            <button className="key" onClick={(value) => keyClick('N')}>N</button>
            <button className="key" onClick={(value) => keyClick('M')}>M</button>
            <button className="big-key" onClick={(value) => keyClick('enter')}>Enter</button>
        </div>
    );
}

export default Keyboard;