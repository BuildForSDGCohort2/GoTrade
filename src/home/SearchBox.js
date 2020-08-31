import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function SearchBox() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
  );
}
