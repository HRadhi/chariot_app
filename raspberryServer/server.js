const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const fs = require('fs');
const mime = require('mime-types');
const gpio = require('rpi-gpio');
const gpiop = gpio.promise;
const cors = require('cors');

http.listen(8080); //listen to port 8080

app.use(cors());

io.sockets.on('connection', function (socket) {
  let direction = 'stop'; //static variable for current direction (foward, backward, stop)

  socket.on('direction', function (data) { //get light switch status from client
    direction = data;
    console.log(direction);
    if (direction === 'forward') {
      console.log('forward pressed')
    } 
    
  });
});

process.on('SIGINT', function () { //on ctrl+c
  gpio.destroy(() => {
    console.log('All pins unexported');
    process.exit(); //exit completely
  })
});
