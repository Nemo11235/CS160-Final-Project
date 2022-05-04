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
        let tempTime = time;
        if(timerOn){
            interval = setInterval(() => {
                tempTime -= 20;
                if(tempTime < 1000){
                    setTimeOn(false);
                    updateShowTimer(false);
                    updateShowGame(true);
                } else {
                    setTime(tempTime);
                    socket.emit("start", timeData);
                }
            }, 10)
        }
             
        return function cleanup() {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className="Timer-container">
            <div className="time">
                <span>{(Math.floor((time/1000) % 60))}</span>
            </div>
        </div>
    );
}
 
export default Timer;