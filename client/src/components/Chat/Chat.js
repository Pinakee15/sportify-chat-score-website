import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import CricketScores from '../CricketScores/CricketScores';
import Grid from '@material-ui/core/Grid';
import Message from '../Message/Message';
import './Chat.css';
const ENDPOINT = "localhost:5000" //"http://127.0.0.1:5000";

let socket;
export default function Chat(props) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {

    socket = socketIOClient(ENDPOINT);

    socket.on('welcome', (mssg, admin) => {
      setMessages(prevMessages => [...prevMessages, { userName: 'admin', mssg }])
    });

    socket.emit("join", props.location.userName, props.location.selectedRoom);

    socket.on('message', (mssg, userName) => {
      setMessages(prevMessages => [...prevMessages, { userName, mssg }])
    });

    return () => socket.disconnect();

  }, []);

  const allMessages = messages.map((message, idx) => <Message userName={message.userName} message={message.mssg} key={idx} />);
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
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="stretch"
      >
        <Grid item xs={4} style={{ height: '100vh', background: 'linear-gradient(120deg, #17bebb, #f0a6ca)' }}>
          <div class='container' ng-cloak ng-app="chatApp">
            <h1>Welcome {props.location.userName} to the {props.location.selectedRoom}</h1>
            <div className='chatbox' ng-controller="MessageCtrl as chatMessage">
              {allMessages}
              <form>
                <input type="text" placeholder="Enter your message here..."
                  value={message} onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
                />
                <button onClick={(e) => sendMessage(e)}>Send</button>
              </form>
            </div>
          </div>
        </Grid>

        <Grid item xs={8} style={{
          height: '100vh', overflowY: 'scroll', backgroundColor: "rgb(255,255,255,0.9)"
        }}>
          <CricketScores />
        </Grid>
      </Grid>

    </div >
  );
}

//testing







































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



