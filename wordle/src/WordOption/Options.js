import React, { Component } from "react";
import Switch from "react-switch";
import axios from "axios";
import "./Switch.scss";

class Options extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }
  Word1 = async () => {
    const email = localStorage.getItem("email");
    console.log(email);
    let word = "default";
    if (this.state.checked) {
      word = "ownword";
    }
    let formField = new FormData();
    formField.append("email", email);
    formField.append("action", word);
    await axios({
      method: "POST",
      url: "/api/user/getword/",
      data: formField,
    }).then((response) => {
      if (response.data.length != 5) {
        console.log(response.data);
        alert("Please upload your own words");
      } else {
        console.log("Random word was generated:");
        console.log(response.data);
        //keyword for single player
        localStorage.setItem("keyword", response.data);
        //keyword for multiplayer
        localStorage.setItem("multiKeyword", response.data);
      }
    });
  };
  componentDidMount() {
    this.Word1();
  }
  componentDidUpdate() {
    this.Word1();
  }

  render() {
    return (
      <div className="switch2">
        {" "}
        <label className="switch1">
          <span className="text1">Default </span>
          <Switch onChange={this.handleChange} checked={this.state.checked} />
          <span className="text2"> Custom</span>
        </label>
      </div>
    );
  }
}
export default Options;
