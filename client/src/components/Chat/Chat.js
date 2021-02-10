import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import getCricketData from '../../apis/cricketApiData';
import CricketScores from '../CricketScores/CricketScores';
const ENDPOINT = "localhost:5000" //"http://127.0.0.1:5000";

let socket;
export default function Chat(props) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {

    socket = socketIOClient(ENDPOINT);
    //console.log("Entered for the first time");

    socket.on('welcome', (mssg, admin) => {
      setMessages(prevMessages => [...prevMessages, { userName: 'admin', mssg }])
    });

    socket.emit("join", props.location.userName, props.location.selectedRoom);

    socket.on('message', (mssg, userName) => {
      setMessages(prevMessages => [...prevMessages, { userName, mssg }])
    });

    return () => socket.disconnect();

  }, []);

  const allMessages = messages.map(message => <p>{message.userName} : {message.mssg}</p>);
  //console.log(`Checking .... ${allMessages} and ${messages}`);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(`Button clicked with value ${e.target}`);
    socket.emit('send message', message, props.location.selectedRoom, () => {
      console.log('Hello dear.....')
      setMessage("");
      console.log(`The new message value ${message}`)
    });
  }

  return (
    <div>
      <p>Welcome {props.location.userName} to the {props.location.selectedRoom}</p>
      { allMessages}
      <input type="text" placeholder="Enter your message here..."
        value={message} onChange={(e) => setMessage(e.target.value)}
        onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
      />
      <button onClick={(e) => sendMessage(e)}>Send</button>
      <CricketScores />
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



