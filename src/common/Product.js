import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
});

export default function Product() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/img/image-placeholder.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="overline" display="block" gutterBottom>
            Product Name
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
            N 23,000
           </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            <strike>N 25,000</strike>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
