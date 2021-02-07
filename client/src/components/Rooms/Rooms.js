import React from 'react';
import Room from '../Room/Room';


function Rooms() {
    const rooms = {
        room1: "Room 1",
        room2: "Room 2",
        room3: "Room 3"
    }
    const newRooms = Object.keys(rooms).map((ob, idx) => (<Room key={idx} roomName={rooms[ob]} />))
    return (
        <div>
            {newRooms}
        </div>
    )
}

export default Rooms

