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
import "./style.css";

const styles =  theme => ({
  table: {
    minWidth: 650,
  },
});


class simpleTable extends Component {  

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
            <TableCell align="left">Duration</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Rating</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.activities.map(row => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.activityName}</TableCell>
              <TableCell align="left">{row.date.substring(0,9)}</TableCell>
              <TableCell align="left">{row.travelTime}</TableCell>
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="left"><Ratings/></TableCell>
              
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