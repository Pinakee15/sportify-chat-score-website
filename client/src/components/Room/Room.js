import React, { useState } from 'react';
import styles from "./Room.module.css";
import { Link } from "react-router-dom";

function Room({ roomName }) {
    const [bgColor, setBgColor] = useState('white');
    const [status, setStatus] = useState(false);
    const changeColor = () => {
        setBgColor('blue');
        setStatus((prevStat) => {
            return !prevStat;
        });
    }
    return (
        <div style={status ? { backgroundColor: bgColor } : null} className={styles.Room} onClick={changeColor}>
            <p>This is the room {roomName}</p>
        </div>
    )
}

export default Room
