const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const http = require("http").createServer(app);
const { addUser, findUser, showUser, deleteUser } = require('./User.js');

//Setting the socket io server

const io = require('socket.io')(http, {
    cors: {
        origin: '*',
    }
});

app.get("/", (req, res) => {
    res.send("this is the home page").status(200);
});

// Setting up the middleware
app.use(express.json());

// Handling the Chat socket.io APIs .

io.on("connection", (socket) => {

    console.log(`A new client with socket id ${socket} is added ..`);

    socket.on("join", (userName, room) => {
        console.log(`The user ${userName} registered to the room ${room}`);
        socket.join(room);
        socket.to(room).emit('welcome', `${userName} has joined the room.`);
        addUser(socket.id, userName, room);
        console.log(showUser());
    });

    socket.on('send message', (message, room, callback) => {
        console.log(`Event fired and the values are ${message} and ${room}`);
        const user = findUser(socket.id);
        console.log(`This is the found user : ${JSON.stringify(user.name)}`);
        io.to(room).emit('message', message, user.name); //to(room).
        callback();
    })

    socket.on('disconnect', () => {
        deleteUser(socket.id);
        console.log(`No of user : `, showUser());
        console.log("The user disconnected..");
    });
});

http.listen(port, () => console.log(`Listening on port ${port}`));

