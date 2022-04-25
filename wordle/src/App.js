import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUsPage from "./AboutUsPage/AboutUsPage";
import HomePage from "./HomePage/HomePage";
import UserProfilePage from "./UserProfilePage/UserProfilePage";


//dummy variables for UserProfilePage; later obtain values from database
let username = "Ken Tsang"
let played = "4";
let won = "2";
let winPercent = "66";
let winStrk = "1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path = "/user" element={<UserProfilePage username={username} played={played} won={won} winPercent={winPercent} winStrk={winStrk}/>} />
      </Routes>
    </Router>
  );
}
export default App;
