import "./Guide.css";
import logo from "./image/logo.jpg";
import React, { Component } from "react";

class Guide extends Component {
  render() {
    return (
      <div className='whole'>
        <div className='App'>
          <div className='header'>
            <img src={logo} className='App-logo' alt='' />
          </div>
          <br />
          <div className='top'>
            <span>How to play</span>
          </div>
          <div className='info'>
            <div className='text1'>
              <h3>
                You have to guess the hidden word in 6 tries and the color of
                the letters changes to show how close you are.
                <br />
              </h3>
            </div>
          </div>
          <div className='text2'>
            <h3>
              To start the game, just enter any word, for example: <br />
            </h3>
          </div>
          <div className='container'>
            <div className='normal_letter'>H</div>
            <div className='normal_letter'>E</div>
            <div className='yellow_letter'>A</div>
            <div className='green_letter'>R</div>
            <div className='yellow_letter'>T</div>
          </div>
          <br />
          <div className='more-infor'>
            <div>
              <b className='grey_text'>H</b> , <b className='grey_text'>E</b>{" "}
              aren't in the target word at all.
              <br />
            </div>
            <b className='yellow_text'>A</b> , <b className='yellow_text'>T</b>{" "}
            is in the word but in the wrong spot.
            <br />
            <b className='green_text'>R</b> is in the word and in the correct
            spot.
            <br />
          </div>
          <div className='text4'>
            <b>
              <br />
              Another try to find matching letters in the target word.
              <br />
            </b>
          </div>
          <br />
          <div className='container'>
            <div className='green_letter'>G</div>
            <div className='green_letter'>R</div>
            <div className='green_letter'>A</div>
            <div className='normal_letter'>S</div>
            <div className='normal_letter'>S</div>
          </div>
          <div class='text'>
            <b>
              <br />
              So close!
            </b>
          </div>
          <br />
          <div className='container'>
            <div className='green_letter'>G</div>
            <div className='green_letter'>R</div>
            <div className='green_letter'>A</div>
            <div className='green_letter'>N</div>
            <div className='green_letter'>T</div>
          </div>
          <div class='text'>
            <b>
              <br />
              Got it! 🏆
            </b>
          </div>
        </div>
        <div className='bottom'></div>
      </div>
    );
  }
}

export default Guide;
