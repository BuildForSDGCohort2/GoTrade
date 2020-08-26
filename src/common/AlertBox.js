import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function AlertBox(props) {
  const { open, setOpen, message, type, ...other } = props;

  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={() => setOpen({ ...alert, alertOpen: false, alertMessage: message, alertType: type })} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} {...other}>
      <Alert onClose={() => setOpen(false)} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
}
