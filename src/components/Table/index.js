import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Ratings from '../Ratings/index'
import Button from '@material-ui/core/Button';
import API from '../../utils/api'

import "./style.css";

const URL = "http://localhost:8080"

const styles =  theme => ({
  table: {
    minWidth: 650,
  },
});


class simpleTable extends Component {  

  state = {
    id : ''
  }


  handleDeleteClick = event => {
    event.preventDefault();
    
    const eventId= event.target.getAttribute(`data-id`)
    console.log (eventId);
    // this.setState ({id: event.target.value})
    API.deleteActivity(eventId)
      .then( res => {
        this.props.updateActivities();
    })
  }




  render() {
  // console.log( "RENDERING TABLE HERE")
  const { classes } = this.props;
  return (
      <div>
          <div className="testFive">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className="tableHeader">
            <TableCell>Activity</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Duration(hrs)</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Rating</TableCell>
            <TableCell align="left">Delete</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.activities.map(row => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.activityName}</TableCell>
              <TableCell align="left">{row.date.substring(0,10)}</TableCell>
              <TableCell align="left">{row.travelTime}</TableCell>
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="left"><Ratings activityId={row.id} value={row.rating} /></TableCell>
              <TableCell align="left"> <Button data-id={row.id} onClick={this.handleDeleteClick}> 
              <span data-id={row.id}>
                 Delete
                </span>
              </Button> </TableCell>
            
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );

  
}


}
export default withStyles(styles)(simpleTable)