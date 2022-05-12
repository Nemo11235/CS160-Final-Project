/* eslint-disable react/prop-types */
import React, {useState} from "react";
import GameContent from "./GameContent";
import Timer from "./Timer";
import "./WaitingScreen.scss";

function WaitingScreen({socket, username, room}) {
    const [showGame, setShowGame] = useState(false);
    const [showTimer, setShowTimer] = useState(false);
    let word = localStorage.getItem("multiKeyword");
    function updateShowGame(value){
        setShowGame(value);
    }
 
    function updateShowTimer(value) {
        setShowTimer(value);
    }
 
    socket.on("start_countdown", (val) => {
        setShowTimer(val);
    });

    socket.on("opponent", (joined) => {
        if(joined){
            setShowTimer(true);
            socket.emit("show_timer", room);
        }
    });

    return (
        <div className="waiting-screen-container">
            {!showGame ? (
                <div className="waiting-screen">
                    <h3>Waiting For Opponent...</h3>
                    <div className="room-ID">
                        <span>Room ID: </span>
                        <span className="code">{room}</span>
                        <div className="copy">
                            <button title="Copy" onClick={()=> {navigator.clipboard.writeText(room)}}>&#x2398;</button>
                        </div>
                    </div>
                </div>
            ) : (
                <GameContent
                    socket={socket}
                    username={username}
                    room={room}
                    word={word}
                />
            )}
            {showTimer && (
                <Timer
                    socket = {socket}
                    room = {room}
                    updateShowGame = {updateShowGame}
                    updateShowTimer = {updateShowTimer}
                />
            )}
        </div>
    )
}

export default WaitingScreen;