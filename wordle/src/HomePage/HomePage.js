import React, { useState,useEffect } from "react";
import "../App.css";
import Header from "../Components/Header";
import NestedGrid from "../Components/GameGrid";
import Keyboard from "../Components/Keyboard/Keyboard";
import axios from "axios";
import SignOut from "../GoogleAuth/SignOut";
import { useNavigate, Navigate } from "react-router-dom";
import WinPopUp from "./WinPopUp";

function Worlde() {
  // let word = "MANGO";
  const history = useNavigate();
  const [usedLetters, setUsedLetters] = useState([""]);
  const [showWinPopUp, setShowWinPopUp] = useState(false);

  const amount = localStorage.getItem("count")
  let word = localStorage.getItem("keywordss")

  const [input, setInput] = useState("");
   
let a = ''
let b = ''
let c = ''
let d = ''
let e = ''

try {
      a= localStorage.getItem("aa");
    } catch (error) {
      console.error(error);}
try {
    b= localStorage.getItem("bb");
    } catch (error) {
    console.error(error);}
try {
    c= localStorage.getItem("cc");
    } catch (error) {
    console.error(error);}
try {
        d= localStorage.getItem("dd");
        } catch (error) {
        console.error(error);}
try {
      e= localStorage.getItem("ee");
        } catch (error) {
     console.error(error);}

let time = 0

if (a!=""){ time =time +1}
if (b!=""){ time =time +1}
if (c!=""){ time =time +1}
if (d!=""){ time =time +1}
if (e!=""){ time =time +1}

const [row, setRow] = useState(time);
const [wordList, setWordList] = useState([a, b, c, d, e, ""]);
const[count, setCount] = useState(0)
const namename = localStorage.getItem("email")
  // console.log(wordList)
  let handleSubmit1 =() => {
    const namename = localStorage.getItem("email")
   console.log(namename)
    let Tracking= async () => {
      let formField = new FormData();
      formField.append("email", namename);
      formField.append("action", "tracking");
      await axios({
        method: "POST",
        url: "/api/user/tracking/",
        data: formField,
      }).then((response) => {console.log(response.data)
          let temp= response.data
          let length = temp.length
          console.log(length)
          console.log(temp)    
          let aa = ''   
          let bb = ''  
          let cc = ''  
          let dd = ''  
          let ee = ''  
          if (length ==1){
            aa = temp[0]
          }  else if(length ==2){
            aa = temp[0]
            bb = temp[1]

          }
          else if(length ==3){
            aa = temp[0]
            bb = temp[1]
            cc = temp[2]

          }
          else if(length ==4){
            aa = temp[0]
            bb = temp[1]
            cc = temp[2]
            dd = temp[3]

          }
          else if(length ==5){
            aa = temp[0]
            bb = temp[1]
            cc = temp[2]
            dd = temp[3]
            ee = temp[4]
          }
          localStorage.setItem("aa", aa)
          localStorage.setItem("bb", bb);
          localStorage.setItem("cc", cc)
          localStorage.setItem("dd", dd);
          localStorage.setItem("ee", ee);
          console.log(aa)
          console.log(bb)
          console.log(cc)
          console.log(dd) 
          console.log(ee)    
      });
    };  
    Tracking();
  }
  let ProfilePage =() => {
   history("/profile")
  }
  function updateInput(replace) {
    setInput(replace);
    
  }

  function updateRow(value) {
    setRow(value);
   
  }

  function updateUsedLetters(newArray) {
    setUsedLetters(newArray);
  }

  function updateShowWinPopUp(value) {
    setShowWinPopUp(value);
  }

  function updateWordList(newArray) {
    setWordList(newArray); 
    setCount(count+1)
    console.log(count)
    if (count ==0){
    let Word1= async () => {
      let formField = new FormData();
      let tempword = newArray[count]
      formField.append("value", tempword);
      formField.append("email", namename);
      formField.append("action", "word1");
      await axios({
        method: "POST",
        url: "/api/user/getdata/",
        data: formField,
      }).then((response) => {console.log(response.data)});
     
    }
    Word1();
    } 
    else if(count ==1){
      let Word2= async () => {
        let formField = new FormData();
        let tempword = newArray[count]
        formField.append("value", tempword);
        formField.append("email", namename);
        formField.append("action", "word2");
        await axios({
          method: "POST",
          url: "/api/user/getdata/",
          data: formField,
        }).then((response) => {console.log(response.data)});
       
      }
      Word2();
    }
    else if(count ==2){
      let Word3= async () => {
        let formField = new FormData();
        let tempword = newArray[count]
        formField.append("value", tempword);
        formField.append("email", namename);
        formField.append("action", "word3");
        await axios({
          method: "POST",
          url: "/api/user/getdata/",
          data: formField,
        }).then((response) => {console.log(response.data)});       
      }
      Word3();
    }
    else if(count ==3){
      let Word4= async () => {
        let formField = new FormData();
        let tempword = newArray[count]
        formField.append("value", tempword);
        formField.append("email", namename);
        formField.append("action", "word4");
        await axios({
          method: "POST",
          url: "/api/user/getdata/",
          data: formField,
        }).then((response) => {console.log(response.data)
          console.log("ANXUANQUETEO")}
        );
       
      }
      Word4();

    }
    else if(count ==4){
      let Word5= async () => {
        let formField = new FormData();
        let tempword = newArray[count]
        formField.append("value", tempword);
        formField.append("email", namename);
        formField.append("action", "word5");
        await axios({
          method: "POST",
          url: "/api/user/getdata/",
          data: formField,
        }).then((response) => {console.log(response.data)
      }
        );      
      }
      Word5();
    }
  }
  return (
    <div className="app-style">
        
      <Header />
      <button onClick={ProfilePage}>Profile Page</button>
      <SignOut/>
      <NestedGrid input={input} wordList={wordList} row={row} />
      <Keyboard
        input={input}
        updateInput={updateInput}
        row={row}
        updateRow={updateRow}
        wordList={wordList}
        updateWordList={updateWordList}
        word={word}
        usedLetters={usedLetters}
        updateUsedLetters={updateUsedLetters}
        updateShowWinPopUp={updateShowWinPopUp}
        className="keyboard"
      />
        {showWinPopUp && (
        <WinPopUp
          updateShowWinPopUp={updateShowWinPopUp}
          className="winpopup"
        />
      )}
    </div>
  );
}
export default Worlde