import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Rooms from '../Rooms/Rooms';
import styles from "./Join.module.css";

function Join() {
    //const [chatRoom, setChatRoom] = useState('');

    return (
        <div className={styles.container}>
            <h3>Welcome to the chatter App</h3>
            <input placeholder="Type your user name her"></input>
            <h4>Which room you want to join</h4>
            < Rooms />
            <Link to="/chat">
                <button>SUBMIT</button>
            </Link>
        </div>
    )
}

export default Join
