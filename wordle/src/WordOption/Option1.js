import React, { Component } from "react";
import Switch from "react-switch";
import axios from "axios";

class Option1 extends Component {
  constructor() {
    super();
    this.state = { word: "default" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ word: "ownword" });
  }
  Word1 = async () => {
    const email = localStorage.getItem("email");
    console.log(email);
    let formField = new FormData();
    formField.append("email", email);
    formField.append("action", this.state.word);
    await axios({
      method: "POST",
      url: "/api/user/getword/",
      data: formField,
    }).then((response) => {
      if (response.data.length != 5) {
        console.log(response.data);
      } else {
        console.log("Random word was generated:");
        console.log(response.data);
      }
      //keyword for single player
      localStorage.setItem("keyword", response.data);
      //keyword for multiplayer
      localStorage.setItem("multiKeyword", response.data);
    });
  };
componentWillUnmount() {
    this.Word1();
  }


  render() {
    return (
      <label>
        <span>Switch with default style</span>
        <Switch onChange={this.handleChange} word={this.state.word} />
      </label>
    );
  }
}

export default Option1;
