const express = require('express');
const socket = require('socket.io');

//App setup
const app = express();
const server = app.listen(5000, function() {
  console.log('Listening for requests on port 5000');
});

//Socket setup & pass server
const io = socket(server);
io.on('connection', (socket) => {
  console.log('Made socket connection', socket.id);

  socket.on('direction', function(data){
    console.log(data);
  })
})