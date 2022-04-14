import io from "socket.io-client";
import React, { useState } from "react";
import "./MultiplayerPage.scss";
import GameContent from "./GameContent";
import Header from "../Components/Header";

const socket = io.connect("http://localhost:3001");

function MultiplayerPage() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showGame, setShowGame] = useState(false); // show the grid and keyboard after user entering the room
  const [inGame, setInGame] = useState(false);
  const joinRoom = () => {
    if (username !== "" && room !== "") {
      const roomData = {
        room: room,
        username: username,
      };
      socket.emit("join_room", roomData);
      setShowGame(true);
    } else {
      alert("Please enter user ID and room ID");
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", keyPress);
    return () => {
      window.removeEventListener("keydown", keyPress);
    };
  });

  function keyPress(e) {
    if (e.key == "Enter" && !inGame) {
      joinRoom();
      setInGame(true);
    }
  }

  return (
    <div className="multiplayer-style">
      <Header />
      {!showGame ? (
        <div className="join-game-container">
          <h3>Join a game room</h3>
          <input
            type="text"
            placeholder="Your ID..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room name..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={() => joinRoom()}>Join</button>
        </div>
      ) : (
        <GameContent
          socket={socket}
          username={username}
          room={room}
          word={"APPLE"}
        />
      )}
    </div>
  );
}

export default MultiplayerPage;
