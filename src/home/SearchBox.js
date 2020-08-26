import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

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

export function SearchBox() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} elevation={3}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
