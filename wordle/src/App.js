import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUsPage from "./AboutUsPage/AboutUsPage";
import HomePage from "./HomePage/HomePage";
import UserProfilePage from "./UserProfilePage/UserProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path = "/user" element={<UserProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
