import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button, TextField } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  text: {
    marginRight: theme.spacing(2),
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
      <TextField id="outlined-basic" placeholder="Search products, brands and categories" size="small" variant="outlined" fullWidth className={classes.text} />
      <Button variant="contained" color="primary">
        SEARCH
</Button>
    </div>
  );
}
