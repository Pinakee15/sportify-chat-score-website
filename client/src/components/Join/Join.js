import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarComp from '../Navbar/NavbarComp';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Rooms from '../Rooms/Rooms';
import styles from "./Join.module.css";

function Join() {
    const initialRooms = [
        { room: "Cricket", status: false, url: "https://images.firstpost.com/wp-content/uploads/2020/11/Shane-Watson-CSK-KKR-Sportzpics-640.jpg" },
        { room: "Football", status: false, url: "https://images.daznservices.com/di/library/GOAL/51/40/lionel-messi-barcelona-2019-20_aaw4sdccpne11vaux71yrujuz.jpg?t=-1168207920&quality=100" }
    ];
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [rooms, setRooms] = useState(initialRooms);
    const [userName, setUserName] = useState("");
    const [warningMessage, setWarningMessage] = useState("");

    const selectOneRoom = (index, newStatus) => {
        console.log("we clicked the Room :");
        const tempRooms = [...initialRooms]
        tempRooms[index].status = newStatus;
        setRooms(tempRooms);
        setSelectedRoom(initialRooms[index].room)
    }
    console.log(`This is the warning message ${warningMessage}`)
    const checkInputStatus = () => {
        console.log("Check function fired ....")
        if (userName === "" || selectOneRoom === null || userName === null) {
            console.log('Entered into if of cjec')
            setWarningMessage("Please enter both, username and chatroom");
        }
        else {
            setWarningMessage("");
        }
    }

    return (
        <>
            <NavbarComp />
            <div className={styles.container}>
                <h1 className={styles.BrandHeading}>Welcome to Sportify</h1>
                <input className={styles.nameInput} placeholder="Type your user name here" onChange={(event) => setUserName(event.target.value)} ></input>
                <h6 className={styles.subHeading}><strong>-Which sports room you want to join-</strong></h6>
                < Rooms rooms={rooms} selectOneRoom={selectOneRoom} />
                <Link to={{
                    pathname: "/chat",
                    userName,
                    selectedRoom,
                }} onClick={checkInputStatus} >
                    <button className={styles.buttonInput} ><strong>SUBMIT</strong></button>
                </Link>
                <p>{warningMessage}</p>
            </div>
        </>

    )
}

export default Join
