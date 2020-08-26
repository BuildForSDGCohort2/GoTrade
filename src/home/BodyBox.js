import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper } from '@material-ui/core';
import CategoryBox from './CategoryBox';
import QuickBox from './QuickBox';
import TopSellingBox from './TopSellingBox';
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

  slides: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '400px',
  },
}));

export function BodyBox() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <CategoryBox />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.slides}>Slides</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Contact Us" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Sell on GoTrade" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Return Policy" />
              </ListItem>
            </List>
          </Paper>
          <br />
          <Paper className={classes.paper}>Promo Advert</Paper>
        </Grid>
      </Grid>

      <QuickBox />
      <TopSellingBox />
    </Box>
  );
}
