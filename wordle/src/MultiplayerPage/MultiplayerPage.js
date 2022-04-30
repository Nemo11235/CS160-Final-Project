import io from "socket.io-client";
import React, { useState, useEffect } from "react";
import "./MultiplayerPage.scss";
import GameContent from "./GameContent";
import Header from "../Components/Header/Header";
import HamburgerMenu from "../Components/HamburgerMenu/HamburgerMenu";
import HamburgerBlur from "../Components/HamburgerMenu/HamburgerBlur";
import multiplayerUtils from "../Utils/multiplayerUtils";
import CopyToClipboard from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const socket = io.connect("http://localhost:3001");

function MultiplayerPage() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showGame, setShowGame] = useState(false); // show the grid and keyboard after user entering the room
  const [inGame, setInGame] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  function makeRoom() {
    let temp = multiplayerUtils.makeId(6);
    setRoom(temp);
    setShowCopied(false);
  }

  const joinRoom = () => {
    if (
      multiplayerUtils.isValidId(username) &&
      multiplayerUtils.isValidRoom(room)
    ) {
      const roomData = {
        room: room,
        user: username,
      };
      socket.emit("join_room", roomData);
    } else {
      alert("Please enter user ID and room ID");
    }
  };

  React.useEffect(() => {}, [room]);

  useEffect(() => {
    socket.on("join_result", (data) => {
      if (data) {
        setShowGame(data);
      } else {
        alert("Fail to join the room because this room is already full!");
      }
    });
  }, [socket]);

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
      <HamburgerMenu open={hamburgerOpen} close={hamburgerOpenHandler} />
    );
    hamburgerBlur = <HamburgerBlur close={hamburgerOpenHandler} />;
  }

  function onCopy() {
    setShowCopied(true);
  }

  return (
    <div className="multiplayer-style">
      <Header click={hamburgerOpenHandler} />
      {hamburgerMenu}
      {hamburgerBlur}
      {!showGame ? (
        <div className="join-game-container">
          <div className="rules-card">
            <h4>- User ID length: within 10 characters</h4>
            <h4>- Room ID length: within 6 characters</h4>
            <h4>- Both should contain numbers/letters only</h4>
          </div>
          <h2>Create or join a game room!</h2>
          <input
            type="text"
            placeholder="User ID..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />

          <button className="multi-button" onClick={() => joinRoom()}>
            Join
          </button>
          <button className="multi-button" onClick={() => makeRoom()}>
            Generate Room ID
          </button>
          <div className="room-id-container">
            <div className="room-id-box">
              <h3
                className="room-id"
                onChange={(event) => {
                  setRoom(event.target.value);
                }}
              >
                Room ID: {room}
              </h3>
            </div>
            <CopyToClipboard text={room}>
              <button className="copy-button" onClick={() => onCopy()}>
                <ContentCopyIcon />
              </button>
            </CopyToClipboard>
          </div>
          {showCopied && <h5 className="copied">Copied!</h5>}
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
