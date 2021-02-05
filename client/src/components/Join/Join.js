import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Join() {
    const [chatRoom, setChatRoom] = useState('');

    return (
        <div>
            <p>This is the value {chatRoom}</p>
            <p>Join your favourite Room</p>
            <input type='text' placeholder="Type the Room name" onChange={(event) => { setChatRoom(event.target.value) }} />
            <Link to="/chat">
                <button>SUBMIT</button>
            </Link>
            <div></div>
        </div>
    )
}

export default Join
