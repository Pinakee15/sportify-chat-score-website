const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const http = require("http").createServer(app);

const io = require('socket.io')(http, {
    cors: {
        origin: '*',
    }
});

let interval;
app.get("/", (req, res) => {
    res.send("this is the home page").status(200);
})

io.on("connection", (socket) => {

    console.log(`A new client with socket id ${socket} is added ..`);

    socket.on("join", (userName, room) => {
        console.log(`The user ${userName} registered to the room ${room}`);
        socket.join(room);
        socket.to(room).emit('welcome', `${userName} has joined the room.`);
    });

    socket.on('send message', (message, room, callback) => {
        console.log(`Event fired and the values are ${message} and ${room}`)
        io.to(room).emit('message', message); //to(room).
        callback();
    })

    socket.on('disconnect', () => {
        console.log("The user disconnected..")
    });
});

http.listen(port, () => console.log(`Listening on port ${port}`));

