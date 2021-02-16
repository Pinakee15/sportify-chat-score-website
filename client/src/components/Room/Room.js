import React, { useState } from 'react';
import styles from "./Room.module.css";
import { Link } from "react-router-dom";

function Room({ index, roomName, selectOneRoom, status, url }) {

    const changeColor = selectOneRoom;
    return (
        <div style={status ? { backgroundColor: "rgb(255,255,242)", boxShadow: '2px 2px 12px white', border: "none" } : null} className={styles.Room} onClick={() => changeColor(index, !status)}>
            <img src={url} height="100%" width="100%" />
            <p>Live {roomName} score + chatroom </p>
        </div>
    )
}

export default Room
