import React from 'react';
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import ReactWeather from 'react-open-weather';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    minWidth: 250,
    flexDirection: "column",
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
  media: {
    height: 0,
    paddingTop: '100%', // 16:9,
    marginTop: '30'
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const name = "Tyson"
  const city = ""

  return (
    <Container id="wcon" style={{ backgroundColor: '#cfe8fc', height: '50vh', width: '100vw' }} >
      <Typography id="hello" variant="h3">Hello {name}!</Typography>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center">
        <Card id="wcard" className={classes.root} variant="outlined ">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Current Weather
        </Typography>
            {/* <CardMedia 
              className={classes.media}
              image={require('../../images/Weather/sunny.png')}
              title="Sunny"
            /> */}
            <CardMedia />
            <ReactWeather
              forecast="today"
              unit="imperial"
              apikey="e7196856e41701aad2ab6aa22965b557"
              type="city"
              city="Seattle"
            />
            {/* <Typography variant="h5" component="h2" id="cw">
              Sunny
            </Typography> */}
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}

