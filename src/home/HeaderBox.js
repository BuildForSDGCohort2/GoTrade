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
}));

export function HeaderBox() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper} variant="outlined" square elevation={3} fullWidth >GoTrade Logo</Paper>
    </Box>
  );
}
