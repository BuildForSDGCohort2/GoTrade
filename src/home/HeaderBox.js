import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Grid, Paper, Button } from '@material-ui/core';
import SearchBox from './SearchBox';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  logo: {
    width: '70%'
  }
}));

export function HeaderBox() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <img src="/logo.png" className={classes.logo} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SearchBox />
            <Button variant="contained" color="primary" size="large">
              SEARCH
      </Button>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button variant="contained" color="primary" size="large">
              LOGIN
          </Button>
            <Button variant="contained" color="primary" size="large">
              HELP
    </Button>
            <Button variant="contained" color="primary" size="large">
              CART
</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
