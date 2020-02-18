import React from 'react';
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({
  root: {
    display: 'flex',
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
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30'
  },
});

// componentDidMount(); {
//  const location = User.location
// }

export default function OutlinedCard() {
  const classes = useStyles();
  const name = "Tyson"

  return (
    <div>
      <div className="container">
   
      <Typography variant="h3">Hello {name}!</Typography>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <br/>
        <Card className={classes.root} variant="outlined">
          <CardContent>
      
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Current Weather
        </Typography>
            <Typography variant="h5" component="h2">

            </Typography>
            <CardMedia 
              className={classes.media}
              image={require('../../images/Weather/sunny.png')}
              title="Sunny"
            />
          </CardContent>
        </Card>
      </Grid>
    
    </div>
    </div>
  );
}

