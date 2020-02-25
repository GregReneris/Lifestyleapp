import React from 'react';
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';
// import API from '../../../utils/api'


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(10),
    },
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div className="container">
      <br/>
      <br/>
      <div className="row">
        <div className="col s6">
          <Button className="btn1" variant="contained" onClick={props.eventClick} color="default">
            Event
      </Button>
        </div>
        <div className="col s6">
          <Button className="btn2" variant="contained" onClick={props.hikeClick} color="default">
            Hike
      </Button>
        </div>
      </div>
      </div>

      );
}