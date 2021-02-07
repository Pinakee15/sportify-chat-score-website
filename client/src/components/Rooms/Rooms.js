import React, { useState } from 'react';
import Room from '../Room/Room';

function Rooms() {
    const initialRooms = [
        { room: "Room 1", status: false },
        { room: "Room 2", status: false },
        { room: "Room 3", status: false },
    ]
    const [rooms, setRooms] = useState(initialRooms);

    const selectOneRoom = (index, newStatus) => {
        console.log("we clicked the Room :");
        const tempRooms = [...initialRooms]
        tempRooms[index].status = newStatus;
        setRooms(tempRooms);
    }

    console.log(rooms);
    const newRooms = rooms.map((ob, idx) => (<Room key={idx} index={idx} roomName={ob.room} selectOneRoom={selectOneRoom} status={ob.status} />));
    return (
        <div>
            {newRooms}
        </div>
    )
}

export default Rooms

