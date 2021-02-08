import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Rooms from '../Rooms/Rooms';
import styles from "./Join.module.css";

function Join() {
    const initialRooms = [
        { room: "Room 1", status: false },
        { room: "Room 2", status: false },
        { room: "Room 3", status: false },
    ];
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [rooms, setRooms] = useState(initialRooms);
    const [userName, setUserName] = useState("");

    const selectOneRoom = (index, newStatus) => {
        console.log("we clicked the Room :");
        const tempRooms = [...initialRooms]
        tempRooms[index].status = newStatus;
        setRooms(tempRooms);
        setSelectedRoom(initialRooms[index].room)
    }

    return (
        <div className={styles.container}>
            <h3>Welcome to the chatter App</h3>
            <input placeholder="Type your user name here" onChange={(event) => setUserName(event.target.value)} ></input>
            <h4>Which room you want to join</h4>
            < Rooms rooms={rooms} selectOneRoom={selectOneRoom} />
            <Link to={{
                pathname: "/chat",
                userName,
                selectedRoom
            }}>
                <button>SUBMIT</button>
            </Link>
        </div>
    )
}

export default Join
