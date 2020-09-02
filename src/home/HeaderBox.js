import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Grid, Paper, Button } from '@material-ui/core';
import SearchBox from './SearchBox';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  logo: {
    width: '70%',
    height: '1.8rem',
  },
  textstyle: {
    textTransform: 'capitalize',
    '&:hover': {
      color: '#3f15b5'
    }
  }
}));

export function HeaderBox() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
            <img src="/img/Gotradelogo.png" className={classes.logo} />
          </Grid>
          <Grid item xs={12} sm={6} >
            <SearchBox />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button className={classes.textstyle}>
              <PersonOutlineOutlinedIcon fontSize='medium'/>
              login 
              <ExpandMoreIcon />
            </Button>
            <Button className={classes.textstyle}>
              <HelpOutlineOutlinedIcon fontSize='medium'/>
              Help 
              <ExpandMoreIcon />
            </Button>
            <Button className={classes.textstyle}>
              <ShoppingCartOutlinedIcon fontSize='medium'/>
              Cart 
            </Button>    
                
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
