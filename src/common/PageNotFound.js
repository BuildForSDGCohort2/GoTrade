import React from 'react';
import { makeStyles } from '@material-ui/core/styles';;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    margin: theme.spacing(4),
  },
}));

export function PageNotFound() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      404 - Page not found
    </div >
  );
}
