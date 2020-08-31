import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image: {
    height: '2rem'
  }
}));

export function HeaderBox() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper} variant="outlined" square elevation={3} fullWidth >
        <img className={classes.image} src='/img/Gotradelogo2.png' alt='GoTrade Logo' />
      </Paper>
    </Box>
  );
}
