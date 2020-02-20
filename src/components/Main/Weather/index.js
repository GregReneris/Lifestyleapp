import React, { useState,useEffect } from 'react';
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
// import ReactWeather from 'react-open-weather';
// import Moment from 'react-moment';
import API from "../../../utils/api";



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
  }
});



export default function OutlinedCard() {
  const classes = useStyles();
  const [formdata, setformdata] = useState({
    name: "",
    city: ""
  })



  useEffect(()=> {
    API.isAuthenticated().then(res => {
      console.log(res.data);
      setformdata({
        name:res.data.name,
        city:res.data.city
      })
    }).catch(err=>{
      console.log("error")
      console.log(err.errorCode);
    })
  },[])


  return (
    <Container id="wcon"  >
      <Typography id="hello" variant="h3">Hello!</Typography>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center">
        <Card id="wcard" className={classes.root} >
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
              
              {/* <Typography variant="h5" component="h2" id="cw">
              Sunny
            </Typography> */}
            </CardContent>
          </Card>
        </Grid>
      </Container>
    );
  }

