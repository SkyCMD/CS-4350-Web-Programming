"use strict";
exports.__esModule = true;
var e = require("express");
var app = e();
var port = 3000;
var server = require('http').createServer(app);
var io = require('socket.io')(server);
server.listen(port, function () {
    console.log("Server is listenign on port " + port);
});
app.use(e.static(__dirname));
var numUsers = 0;
io.on('connection', function (socket) {
    var addedUser = false;
    socket.on('new message', function (data) {
        console.log('new message', data);
        socket.broadcast.emit('new message', {
            username: socket.username,
            message: data
        });
    });
    socket.on('add user', function (username) {
        if (addedUser) {
            return;
        }
        console.log('add user', username);
        socket.username = username;
        ++numUsers;
        addedUser = true;
        socket.emit('login', {
            numUsers: numUsers
        });
        socket.broadcast.emit('user joined', {
            username: socket.username,
            numUsers: numUsers
        });
    });
    socket.on('disconnect', function () {
        if (addedUser) {
            --numUsers;
            console.log('disconnect');
            socket.broadcast.emit('user left', {
                username: socket.username,
                numUsers: numUsers
            });
        }
    });
});
//npm init
//npm install typescript
//npx tsc --init
//npm install express
//npm install @types/express
//npm start
//npm install socket.io
//npm install @types/socket.io
