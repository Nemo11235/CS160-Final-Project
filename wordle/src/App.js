import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUsPage from "./AboutUsPage/AboutUsPage";
import HomePage from "./HomePage/HomePage";
<<<<<<< HEAD
import UserProfilePage from "./UserProfilePage/UserProfilePage";


//dummy variables for UserProfilePage; later obtain values from database
let username = "Ken Tsang"
let played = "4";
let won = "2";
let winPercent = "66";
let winStrk = "1";
=======
import MultiplayerPage from "./MultiplayerPage/MultiplayerPage";
import TutorialPage from "./TutorialPage/TutorialPage";
>>>>>>> delivery-2

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
<<<<<<< HEAD
        <Route path = "/user" element={<UserProfilePage username={username} played={played} won={won} winPercent={winPercent} winStrk={winStrk}/>} />
=======
        <Route path="/race" element={<MultiplayerPage />} />
        <Route path="/tutorial" element={<TutorialPage />} />
>>>>>>> delivery-2
      </Routes>
    </Router>
  );
}
export default App;
