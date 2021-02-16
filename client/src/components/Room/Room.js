import React, { useState } from 'react';
import styles from "./Room.module.css";
import { Link } from "react-router-dom";

function Room({ index, roomName, selectOneRoom, status, url }) {

    const changeColor = selectOneRoom;
    return (
        <div style={status ? { backgroundColor: "white" } : null} className={styles.Room} onClick={() => changeColor(index, !status)}>
            <img src={url} height="100%" width="100%" />
            <p>Live {roomName} score + chatroom </p>
        </div>
    )
}

export default Room
