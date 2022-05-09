import React, { Component } from "react";
import axios from "axios";
import "./UserProfilePage.scss";
import ClearData from "./ClearData";

// Send the content of file upload to back end
class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.inputReference = React.createRef();
    this.state = {
      fileName: "",
      fileContent: "",
      comment: "",
    };
  }

  fileExtension = "";
  fileUploadAction = () => this.inputReference.current.click();

  handleFileChange = (e) => {
    localStorage.setItem("content", "");
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      let fileExtension = file.name.split(".").pop();
      // console.log(fileExtension)
      let comp = "";
      if (fileExtension == "") {
        comp = "";
      } else if (fileExtension === "txt") {
        comp = "The file uploaded successfully!!";
      } else if (fileExtension !== "txt") {
        comp = "Cannot upload the file";
      }
      console.log(comp);

      this.setState({
        fileName: file.name,
        fileContent: reader.result,
        comment: comp,
      });
      const content = this.state.fileContent;
      localStorage.setItem("content", content);
    };

    reader.onerror = () => {
      console.log("file error", reader.error);
    };
  };
  handleSubmit = () => {
    const namename = localStorage.getItem("email");
    const content = localStorage.getItem("content");

    if (content != null) {
      let CreateNote = async () => {
        let formField = new FormData();
        formField.append("content", content);
        formField.append("name", namename);
        formField.append("action", "create-post");
        await axios({
          method: "POST",
          url: "/api/product/create/",
          data: formField,
        }).then(() => {
          alert("Uploaded the file sucessfully");
        });
      };
      CreateNote();
    } else {
      alert("Nothing uploaded");
    }
  };

  render() {
    return (
      <div className="card-bot-right">
        <h1 className="title3">Add Custom Words</h1>
        <h2 className="text">
          • Upload .txt files only <br></br>• Separate each word with a new line{" "}
          <br></br>• Words must be only five letters long only <br></br>• Words
          cannot repeat
        </h2>
        <div className="choose-file">
          <input
            type="file"
            id="myFile"
            onChange={this.handleFileChange}
          ></input>
        </div>
        <br />
        <div className="add-filess">
          <button className="add-file" onClick={this.handleSubmit}>
            Add File
          </button>
          <div className="clear-data">
            <ClearData />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
