import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUsPage from "./AboutUsPage/AboutUsPage";
import HomePage from "./HomePage/HomePage";
// import Page from "./HomePage/Page";

import MultiplayerPage from "./MultiplayerPage/MultiplayerPage";
import TutorialPage from "./TutorialPage/TutorialPage";
import ProfilePage from "./ProfilePage/ProfilePage";

import SignIn from "./GoogleAuth/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/race" element={<MultiplayerPage />} />
        <Route path="/tutorial" element={<TutorialPage />} />
        <Route path='/profile' element={<ProfilePage />} />

      </Routes>
    </Router>
  );
}
export default App;
