import React, { Component } from "react";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import ProfilePage from "./ProfilePage/ProfilePage";
import AboutUsPage from "./AboutUsPage/AboutUsPage";
import SignIn from "./GoogleAuth/SignIn";
class App extends Component {
  render() {
    return (
      <div>
        <div className='container dark'>
          <div >
            <BrowserRouter>
              <Routes>
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/' element={<SignIn />} />
                <Route path='/home' element={<HomePage/>} />      
                <Route path='/about' element={<AboutUsPage />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
