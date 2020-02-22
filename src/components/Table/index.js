import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Ratings from '../Ratings/index'
import "./style.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('PooPoo Point Natural Preserve Hike', "1/1/2020", 2.5, <Ratings/>,  "Poo Poo Point is a beautiful hike in Issaquah, WA."),
  createData('The Rolling Stones Concert', "1/6/2020", 3, <Ratings/>,  "The Rolling Stones is the best concert experience ever."),
  createData('Sallyz Hot Yoga Class', "1/24/2020", 1, <Ratings/>,  "Learning how to Waltz is the best way to get a date."),
  createData('Coderz Networking Event', "2/5/2020", 2, <Ratings/>,  "Networking with full-stack developers is the best way to get a job."),
  createData('Bella Cucina Cooking Class', "2/15/2020", 3, <Ratings/>,  "Learn how to cook food with the best chefs in the PNW."),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
      <div>
          <div className="testFive">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className="tableHeader">
            <TableCell>Activity</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Duration&nbsp;(hrs)</TableCell>
            <TableCell align="right">My Rating&nbsp;</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );
}