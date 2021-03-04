const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 3002;

io.on("connection", socket => {
  console.log("a user connected :D");
  socket.on("direction", msg => {
    console.log(msg);
  });
});

server.listen(port, () => console.log("server running on port:" + port));
