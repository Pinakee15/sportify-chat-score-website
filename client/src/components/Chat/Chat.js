import React, { useEffect, useState, useRef } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "localhost:5000" //"http://127.0.0.1:5000";

export default function Chat() {
  //var message = useRef("This is the Null messag");
  const [message, setMessage] = useState("hey");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    console.log("Entered for the first time")
    socket.on('first', (data) => {
      console.log(`Message from the server ${data}`)
      setMessage(data);
    }, [])

    return () => socket.disconnect();

  }, [message]);
  return (
    <div>
      <p>You entered the chat room  : {message}</p>
      <input type="text" placeholder="Enter your message here..." />
    </div>
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



