import React, { useState } from 'react';
import styles from "./Room.module.css";
import { Link } from "react-router-dom";

function Room({ index, roomName, selectOneRoom, status, url }) {

    const changeColor = selectOneRoom;
    return (
        <div style={status ? { backgroundColor: "#dcf2f5", boxShadow: '18px 18px 20px white', border: "none", border: "3px solid rgb(219, 110, 110)" } : null} className={styles.Room} onClick={() => changeColor(index, !status)}>
            <img src={url} height="100%" width="100%" />
            <p style={{ marginTop: '10px', textAlign: 'center' }}>Live {roomName} score + chatroom </p>
        </div>
    )
}

export default Room
