// Import the functions you need from the SDKs you need
import "../App.css";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9kKKBnfcJipCESkXUS3xqKz8B0_vvaG0",
  authDomain: "auth-fd0e3.firebaseapp.com",
  projectId: "auth-fd0e3",
  storageBucket: "auth-fd0e3.appspot.com",
  messagingSenderId: "93385590305",
  appId: "1:93385590305:web:047038228c3edf4e4c8560",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

