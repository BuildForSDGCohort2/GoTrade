import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CategoryBox() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper} fullWidth>
        <List component="nav" aria-label="main mailbox folders" dense="true" disablePadding="true">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Health And Beauty" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Home And Office" />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}
