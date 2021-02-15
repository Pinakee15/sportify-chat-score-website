import React, { useState } from 'react';
import Room from '../Room/Room';
import Grid from '@material-ui/core/Grid';

function Rooms({ rooms, selectOneRoom }) {

    console.log(rooms);
    const newRooms = rooms.map((ob, idx) => (<Grid spacing={1} item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Room key={idx} index={idx} roomName={ob.room} selectOneRoom={selectOneRoom} status={ob.status} url={ob.url} />
    </Grid>));
    return (
        <Grid container direction="row" justify="space-evenly" alignItems="stretch">
            {newRooms}
        </Grid>
    )
}

export default Rooms

