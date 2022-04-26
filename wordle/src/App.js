import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUsPage from "./AboutUsPage/AboutUsPage";
import HomePage from "./HomePage/HomePage";
import MultiplayerPage from "./MultiplayerPage/MultiplayerPage";
import TutorialPage from "./TutorialPage/TutorialPage";
import UserProfilePage from "./UserProfilePage/UserProfilePage";

let username = "Ken Tsang";
let won = "10";
let played = "15";
let winPercent = "67";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/race" element={<MultiplayerPage />} />
        <Route path="/tutorial" element={<TutorialPage />} />
        <Route
          path="/user"
          element={
            <UserProfilePage
              username={username}
              won={won}
              played={played}
              winPercent={winPercent}
            />
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
