const express = require('express');
const app = express();


const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.origins(['https://socket-client.jsramverk.se:443']);

io.on('connection', function (socket) {
    console.info("User connected");

    socket.on('chat message', function (message) {
        io.emit('chat message', message);
    });
});

server.listen(8300);
