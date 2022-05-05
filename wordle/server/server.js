const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    // if room doesn't exist, open a new room
    if (!io.sockets.adapter.rooms.has(data.room)) {
      socket.join(data.room);
      socket.emit("join_result", true);
    } else {
      // if the room already exist, get the number of players in the room
      let numOfUser = Array.from(
        Object.fromEntries(io.sockets.adapter.rooms)[data.room]
      ).length;
      // if there's only one player, allow to join, otherwise reject it
      if (numOfUser == 1) {
        socket.join(data.room);
        socket.emit("join_result", true);
        socket.emit("opponent", true);
      } else {
        socket.emit("join_result", false);
      }
    }
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });

  socket.on("send_data", (data) => {
      socket.to(data.room).emit("receive_data", data);
  });

  socket.on("start", (timer) => {
    socket.to(timer.room).emit("begin_countdown", timer);
  });

  socket.on("show_timer", (room) => {
    socket.to(room).emit("start_countdown", true);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});
