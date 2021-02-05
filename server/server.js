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
    console.log("New client connected");
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => getApiAndEmit(socket), 1000);
    socket.on("disconnect", () => {
        console.log("Client disconnected...");
        clearInterval(interval);
    });
});

const getApiAndEmit = socket => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit("FromAPI", response);
};

http.listen(port, () => console.log(`Listening on port ${port}`));


// const express = require('express');
// const app = express();
// const http = require('http').createServer(app);

// const io = require('socket.io')(http, {
//     cors: {
//         origin: '*',
//     }
// });

// PORT = 5000;

// app.get("/", (req, res) => {
//     res.send("This is the home page")
// })

// io.on('connection', (socket) => {
//     console.log("Connection established successfully");
//     socket.on('disconnect', () => {
//         console.log("The user has left")
//     });
//     socket.on("New event", (data) => {
//         console.log(data);
//     })
// })

// http.listen(PORT, () => {
//     console.log(`The server is listening on port ${PORT}`);
// })