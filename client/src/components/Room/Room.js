import React, { useState } from 'react';
import styles from "./Room.module.css";
import { Link } from "react-router-dom";

function Room({ index, roomName, selectOneRoom, status }) {
    //const [status, setStatus] = useState(false);
    // const changeColor = () => {
    //     setBgColor('blue');
    //     setStatus((prevStat) => {
    //         return !prevStat;
    //     });
    // }
    const changeColor = selectOneRoom;
    return (
        <div style={status ? { backgroundColor: "blue" } : null} className={styles.Room} onClick={() => changeColor(index, !status)}>
            <p>This is the room {roomName}</p>
        </div>
    )
}

export default Room
