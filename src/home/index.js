import React from 'react';
//import { LeftBar } from './';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { HeaderBox, FooterBox, BodyBox, SearchBox, CategoryBox, SlidesBox, RightLinks } from './';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    margin: theme.spacing(4),
  },
  body: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

export function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeaderBox />
      <Box bgcolor="#F8F8FF" className={classes.body}>
        <Container>
          <BodyBox />
        </Container>
      </Box>
      <FooterBox />
    </div >
  );
}

export * from './HeaderBox';
export * from './FooterBox';
export * from './BodyBox';
export * from './CategoryBox';
export * from './SearchBox';
