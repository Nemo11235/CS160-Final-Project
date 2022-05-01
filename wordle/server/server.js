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
    socket.join(data.room);
    console.log(`User ID: ${data.user} joined room: ${data.room}`);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });

  socket.on("send_data", (data) => {
    let sentData = false;
    if (!sentData) {
      socket.to(data.room).emit("receive_data", data);
      sentData = true;
    }
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});
