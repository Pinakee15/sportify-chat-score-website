import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import CricketScores from '../CricketScores/CricketScores';
import FootballScores from '../FootballScores/FootballScores';
import Grid from '@material-ui/core/Grid';
import Message from '../Message/Message';
import { Redirect } from 'react-router-dom';
import './Chat.css';
// const ENDPOINT = "http://localhost:5000/";
const ENDPOINT = "https://pinakee-sportify-app.herokuapp.com/";

let socket;
export default function Chat(props) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {

    socket = socketIOClient(ENDPOINT);

    socket.on('redirect', () => {
      console.log("Redirect request sent by server..");
      setRedirect(true);
    })

    socket.on('User joined', (mssg) => {
      setMessages(prevMessages => [...prevMessages, { userName: 'admin', mssg }])
    });
    socket.on('welcome user', (message) => {
      setMessages(prevMessages => [...prevMessages, { userName: 'admin', mssg: message }])
    })

    socket.emit("join", props.location.userName, props.location.selectedRoom);

    socket.on('message', (mssg, userName) => {
      setMessages(prevMessages => [...prevMessages, { userName, mssg }])
    });

    socket.on('user left', userName => {
      setMessages(prevMessages => [...prevMessages, { userName: 'admin', mssg: `${userName} left` }]);
    });

    socket.on('total users', (total) => {
      setTotalUsers(total);
    })

    return () => {
      socket.disconnect();
    }

  }, []);

  const allMessages = messages.map((message, idx) => <Message userName={message.userName} message={message.mssg} key={idx} />);
  //console.log(`Checking .... ${allMessages} and ${messages}`);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(`Button clicked with value ${e.target}`);
    socket.emit('send message', message, props.location.selectedRoom, props.location.userName, () => {
      console.log('Hello dear.....')
      setMessage("");
      console.log(`The new message value ${message}`)
    });
  }

  if (redirect) {
    return <Redirect to="/" />
  }

  else return (
    <div>
      <p className="totalUsers">
        Users online-{totalUsers}
      </p>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="stretch"
      >
        <Grid className="GridChatContainer" item xs={12} sm={12} md={4} lg={4} xl={4}>
          <div class='container' ng-cloak ng-app="chatApp">
            <h3><strong>Welcome {props.location.userName}. Chat with other {props.location.selectedRoom} fans.</strong></h3>
            <div className='chatbox' ng-controller="MessageCtrl as chatMessage">
              <div style={{ position: 'relative', bottom: '9%', backgroundColor: 'red' }}>
                {allMessages}
              </div>
              <div className='chatInputHandler'>
                <input className="chatInput" type="text" placeholder="Enter your message here..."
                  value={message} onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
                />
                <button className="chatButton" onClick={(e) => sendMessage(e)}>Send</button>
              </div>
            </div>
          </div>
        </Grid>

        <Grid className="GridScoreContainer" item xs={12} sm={12} md={8} lg={8} xl={8} >
          {props.location.selectedRoom === 'Football' ? (
            <FootballScores />)
            : (
              <CricketScores />
            )}
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



