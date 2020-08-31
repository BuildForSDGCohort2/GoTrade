import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button, TextField } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import Search from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

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
      <TextField id="outlined-basic" placeholder="Search products, brands and categories" size="small" variant="outlined" fullWidth className={classes.text}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }} />
      <Button variant="contained" color="primary">
        SEARCH
</Button>
    </div>
  );
}
