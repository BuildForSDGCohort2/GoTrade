import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper } from '@material-ui/core';
import Product from '../common/Product';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function TopSellingBox() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={2}>
          <Product />
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
          <Product />
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
          <Product />
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
          <Product />
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
          <Product />
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
          <Product />
        </Grid>
      </Grid>
    </Box>
  );
}
