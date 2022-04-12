import React, { useState,useEffect } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

function Track() {
  const history = useNavigate();

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
          let count =0
          if (length == 0){
            alert("You already finished the last game")
            alert("This is the new game")
            Clear()
            history("/game")

          }
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
          let getKey= async () => {
            let formField = new FormData();
            formField.append("email", namename);
            formField.append("action", "sendkey");
            await axios({
              method: "POST",
              url: "/api/user/sendkey/",
              data: formField,
            }).then((response) => {console.log(response.data)
              localStorage.setItem("keywordss", response.data)
              console.log(response.data)
         
      
            });
          }
          getKey()
          
          history("/home");
      });
    };  
    Tracking();
  }
   const Clear =() => {
    const namename = localStorage.getItem("email")
    let clearData= async () => {
      let formField = new FormData();
      formField.append("email", namename);
      formField.append("action", "clear");
      await axios({
        method: "POST",
        url: "/api/user/clear/",
        data: formField,
      }).then((response) => {console.log(response.data)
  
      });
    };
    clearData();

  let KeyWordd = async () => {
    let wordd = localStorage.getItem("keyword")
    let namename = localStorage.getItem("email")
    let formField = new FormData();
    formField.append("valuee", wordd);
    formField.append("email", namename);
    formField.append("action", "keywords");
    await axios({
      method: "POST",
      url: "/api/user/getkey/",
      data: formField,
    }).then((response) => {console.log(response.data)
      localStorage.setItem("keywordss", wordd)}
    );
   
  }
  KeyWordd()

    let aa = ''
    let bb = ''  
    let cc = ''  
    let dd = ''  
    let ee = ''  
    localStorage.setItem("aa", aa)
    localStorage.setItem("bb", bb);
    localStorage.setItem("cc", cc)
    localStorage.setItem("dd", dd);
    localStorage.setItem("ee", ee);
    history("/home");
  }
  
  
  return (
    <div className="app-style">
      <button onClick={handleSubmit1}>Lastest Game</button>
      <button onClick={Clear}>New Game</button>

    </div>
  );
}
export default Track