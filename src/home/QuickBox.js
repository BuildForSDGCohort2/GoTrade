import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper } from '@material-ui/core';
import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,

    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
}));

export default function QuickBox() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Avatar className={classes.pink}>
              <FolderIcon />
            </Avatar>
            <Typography variant="h5" component="h6">
              Some Link
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Avatar className={classes.pink}>
              <FolderIcon />
            </Avatar>
            <Typography variant="h5" component="h6">
              Some Link
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Avatar className={classes.pink}>
              <FolderIcon />
            </Avatar>
            <Typography variant="h5" component="h6">
              Some Link
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Avatar className={classes.pink}>
              <FolderIcon />
            </Avatar>
            <Typography variant="h5" component="h6">
              Some Link
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
