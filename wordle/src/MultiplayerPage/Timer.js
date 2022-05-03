/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import "./Timer.scss";
 
function Timer({socket, room, updateShowGame, updateShowTimer}) {
    const defaultTime = 3950;
    const [time, setTime] = useState(defaultTime);
    const [timerOn, setTimeOn] = useState(true);
    let timeData = {
        room: room,
        time: time,
        on: timerOn
    };

    useEffect(() => {
        socket.on("begin_countdown", (timer) => {
            if(time > timer.time) {
                setTime(timer.time);
            } else {
                timer.time = time;
            }
            setTimeOn(timer.on);
        });
 
        let interval = null;
          if(timerOn){
            interval = setInterval(() => {
              setTime(prevTime => prevTime - 20);
              if(time < 1000){
                  setTimeOn(false);
                  updateShowTimer(false);
                  updateShowGame(true);
                  clearInterval(interval);
              } else {
                  socket.emit("start", timeData);
              }
            }, 10)
          } else {
            clearInterval(interval);
          }
             
        return () => clearInterval(interval);
   
    }, [timerOn, time, socket]);
 
    return (
        <div className="Timer-container">
            <div className="time">
                <span>{(Math.floor((time/1000) % 60))}</span>
            </div>
        </div>
    );
}
 
export default Timer;