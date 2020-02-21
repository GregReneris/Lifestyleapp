import React from 'react';
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHiking } from '@fortawesome/free-solid-svg-icons'


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(10),
    },
  },
}));

// const element = <FontAwesomeIcon icon={faHiking} />

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div className="container">
    <div className="row1">
        <Button className="btn1" variant="contained" onClick={props.eventClick} color="default">
          Event
      </Button>


        <Button className="btn2" variant="contained" onClick={props.hikeClick} color="default">
        <FontAwesomeIcon icon="faHiking" />
        Hike
      </Button>
      </div>
      </div>
    
  );
}