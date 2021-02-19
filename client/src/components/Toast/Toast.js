import React from 'react';
// import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import './Toast.css';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default () => {
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const buttons = (
        <React.Fragment >
            <button className="buttonInput" onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>SUBMIT</button>
        </React.Fragment>
    );

    return (
        <div>
            {buttons}
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                autoHideDuration={2300}
                key={vertical + horizontal}
            >
                <Alert onClose={handleClose} severity="error">
                    Please enter both User name and select Chat room.
                </Alert>
            </Snackbar>
        </div>
    );
}


