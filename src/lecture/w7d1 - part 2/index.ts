import e = require('express')
import { UserSocket } from './interfaces';

const app = e();
const port = 3000;

const server = require('http').createServer(app);
const io  = require('socket.io')(server);

server.listen(port, () => {
    console.log(`Server is listenign on port ${port}`);
})

app.use(e.static(__dirname));

var numUsers = 0;

io.on('connection', (socket: UserSocket) => {
    let addedUser = false;

    socket.on('new message', (data) => {
        console.log('new message', data)
        socket.broadcast.emit('new message', {
            username: socket.username,
            message: data
        });
    });

    socket.on('add user', (username) => {
        if(addedUser) {
            return;
        }
        console.log('add user', username)

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

    socket.on('disconnect', () => {
        if (addedUser) {
            --numUsers;
            console.log('disconnect');

            socket.broadcast.emit('user left', {
                username: socket.username,
                numUsers: numUsers
            });
        }
    })
})

//npm init
//npm install typescript
//npx tsc --init
//npm install express
//npm install @types/express
//npm start
//npm install socket.io
//npm install @types/socket.io