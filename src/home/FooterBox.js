import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: '#fff'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  topBox: {
    background: "#111",
    height: '180px'
  },
  bottomBox: {
    background: "#222",
    height: '380px'
  }
}));

export function FooterBox() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.topBox}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              LIGHT LOGO
            </Grid>
            <Grid item xs={12} sm={6}>
              NEW TO GOTRADE<br />
              Subscribe to our newsletter to get updates on our latest offers!
            </Grid>
            <Grid item xs={12} sm={3}>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className={classes.bottomBox}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              LET US HELP YOU
            </Grid>
            <Grid item xs={12} sm={6}>
              ABOUT GOTRADE
            </Grid>
            <Grid item xs={12} sm={3}>
              GOTRADE INTERNATIONAL
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
