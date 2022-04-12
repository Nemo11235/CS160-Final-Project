import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUsPage from "./AboutUsPage/AboutUsPage";
import HomePage from "./HomePage/HomePage";
import UserProfilePage from "./UserProfilePage/UserProfilePage";


//dummy variables+component; later obtain values from database
let played1 = "3";
let won1 = "2";
let winPercent1 = "66";
let winStrk1 = "1";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path = "/user" element={<UserProfilePage played={played1} won={won1} winPercent={winPercent1} winStrk={winStrk1}/>} />
      </Routes>
    </Router>
  );
}
export default App;
