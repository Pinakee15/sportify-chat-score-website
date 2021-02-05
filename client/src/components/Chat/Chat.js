import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT =  "localhost:5000" //"http://127.0.0.1:5000";

export default function Chat() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    });
    return () => socket.disconnect();

  }, []);

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  );
}


// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// const SERVER_URL = "localhost:5000";

// function Chat() {
//     let socket;
//     const [name, setName] = useState("")

//     useEffect(() => {
//         // { transports: ['websocket', 'polling', 'flashsocket'] }
//         socket = io.connect('SERVER_URL');
//         console.log(socket);
//         socket.on('connection', () => {
//             console.log("Connected to the server");
//             socket.emit("New event", "This will be the data");
//         });
//     }, [])

//     socket = io.connect('SERVER_URL');
//     console.log(socket);
//     socket.on('connection', () => {
//         console.log("Connected to the server");
//         socket.emit("New event", "This will be the data");
//     });

//     return (
//         <div>
//             This is the chat component
//         </div>
//     )
// }
// export default Chat;



