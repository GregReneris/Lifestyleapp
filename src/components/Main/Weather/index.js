import React from 'react';
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const name = "Tyson"

  return (
    <Container >
    <Typography variant="h3">Hello {name}!</Typography>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Current Weather
        </Typography>
        <Typography variant="h5" component="h2">
          Sunny
        </Typography>
        <CardMedia 
        component="img"
        height="140"
          className={classes.media}
          image="../../images/Weather/sunny.png"
          title="Sunny"
        />
      </CardContent>
    </Card>
    </Container>
  );
}