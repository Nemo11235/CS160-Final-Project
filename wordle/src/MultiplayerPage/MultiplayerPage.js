import io from "socket.io-client";
import React, { useState } from "react";
import "./MultiplayerPage.scss";
import GameContent from "./GameContent";
import Header from "../Components/Header/Header";
import HamburgerMenu from "../Components/HamburgerMenu/HamburgerMenu";
import HamburgerBlur from "../Components/HamburgerMenu/HamburgerBlur";

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
        user: username,
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

  /* Hamburger Menu Implementation */
  let [hamburgerOpen, setHamburgerOpen] = useState(false);
  const hamburgerOpenHandler = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  let hamburgerMenu = <HamburgerMenu />;
  let hamburgerBlur;
  if (hamburgerOpen) {
    hamburgerMenu = (
      <HamburgerMenu open={hamburgerOpen} close={hamburgerOpenHandler} mult={true} />
    );
    hamburgerBlur = <HamburgerBlur close={hamburgerOpenHandler} />;
  }

  return (
    <div className="multiplayer-style">
      <Header click={hamburgerOpenHandler} />
      {hamburgerMenu}
      {hamburgerBlur}
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
