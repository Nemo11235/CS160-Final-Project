// Import the functions you need from the SDKs you need
import React from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./SignIn.scss";
import HeaderLogin from "../Components/Header/HeaderLogin";
import GoogleLogo from "../Images/GoogleLogo.png";

// Google Authentication
function SignIn() {
  const history = useNavigate();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        const name = result.user.displayName;
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        localStorage.setItem("nameuser", name);
        console.log(name);
        console.log(result);
        history("/profile");
        let Admin = async () => {
          let formField = new FormData();
          formField.append("email", email);
          formField.append("action", "add-admin");
          await axios({
            method: "POST",
            url: "/api/user/create/",
            data: formField,
          }).then(() => {});
        };
        Admin();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <HeaderLogin></HeaderLogin>
      <div className="signin-frame">
        <h1 className="login">Login</h1>
        <div className="google">
          <img src={GoogleLogo} className="google-img" />
        </div>
        <div className="signin">
          <button className="signin-button" onClick={signInWithGoogle}>
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
